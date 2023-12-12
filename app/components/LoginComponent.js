// components/MyComponent.js
import { useState, useContext } from 'react';
import React from 'react';
import { View, Text, ActivityIndicator, TextInput, TouchableOpacity } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { CredentialsContext } from './CredentialsContext';

import ExternalStyles from './ExternalStyles';

export default function Login ({ navigation }) {

  const [phone_number, setPhoneNumber] = useState('');
  const [pin, setPin] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const urlData = 'http://192.168.100.83:8000';

  const {storedCredentials, setStoredCredentials} = useContext(CredentialsContext);

  const onPressLogin = async () => {
    try {

      setIsLoading(true); // Show loading indicator when the button is pressed

      if (!phone_number || !pin) {
        console.error('All fields are required.');
        return;  
      }
      console.log('account_number:', phone_number);
      console.log('pin:', pin);

      const response = await fetch(`${urlData}/api/users/login`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "phone_number": phone_number,
          "pin": pin,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error data:', errorData);
        throw new Error(`Logging in failed with status code ${response.status}`);
      }
      
      // Handle Navigation to the dashboard
      // navigation.navigate('Dashboard');

      persistLogin({phone_number})

    } catch (error) {
      console.error('Error Logging in user:', error);
    
      if (error instanceof Error) {
        // This is a standard JavaScript Error object
        console.error('Standard JavaScript Error:', error.message);
      } else {
        // Handle other types of errors
        console.error('Unknown error type:', typeof error, error);
      }
    
    } finally {
      setIsLoading(false); // Hide loading indicator regardless of success or failure
    }
  };
  const onPressText = () => {
    navigation.navigate('Register');
  };

  const persistLogin = (credentials) => {
    AsyncStorage
      .setItem('digiWalletCredentials', JSON.stringify(credentials))
      .then(() => {
          console.info('Logged In successfully');
          setStoredCredentials(credentials);
      })
      .catch((error) => {
        console.log(error);
        handleMessage('Persisting Login Failed')
      })
  }

  return (
    <View style={ExternalStyles.Register}>
      <Text style={ExternalStyles.heading}>Sign in to DigiWallet</Text>
      <TextInput
              style={ExternalStyles.textInput}
              placeholder='Account Number'
              onChangeText={(value) => setPhoneNumber(value)}
              value={phone_number}
              underlineColorAndroid={'transparent'}
            />
      <TextInput
              style={ExternalStyles.textInput}
              placeholder='Pin'
              onChangeText={(text) => setPin(text)}
              secureTextEntry={true}
              value={pin}
              underlineColorAndroid={'transparent'}
            />
      <Text style={ExternalStyles.link} onPress={onPressText} >Don't have an account?</Text>
      {isLoading && <ActivityIndicator size="small" color={'#4a77aa'} style={ExternalStyles.activity} />}
      <TouchableOpacity style={ExternalStyles.button} onPress={onPressLogin} >
            <Text style={ExternalStyles.text}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};
