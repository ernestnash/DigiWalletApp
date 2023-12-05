// components/MyComponent.js
import { useState } from 'react';
import React from 'react';
import { View, Text, ActivityIndicator, TextInput, TouchableOpacity } from 'react-native';

import ExternalStyles from './ExternalStyles';

const Login = ({navigation}) => {

  const [account_number, setAccountNumber] = useState('');
  const [pin, setPin] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const urlData = 'http://192.168.0.49:8000';


  const onPressLogin = async () => {
    try {

      setIsLoading(true); // Show loading indicator when the button is pressed

      if (!account_number || !pin) {
        console.error('All fields are required.');
        return;
      }
      console.log('account_number:', account_number);
      console.log('pin:', pin);

      const response = await fetch(`${urlData}/api/users/login`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          account_number: account_number,
          pin: pin,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error data:', errorData);
        throw new Error(`Logging in failed with status code ${response.status}`);
      }

      // Handle Navigation to the dashboard
      navigation.navigate('Dashboard');
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
  return (
    <View style={ExternalStyles.Register}>
      <Text style={ExternalStyles.heading}>Log in to DigiWallet</Text>
      <TextInput
              style={ExternalStyles.textInput}
              placeholder='Account Number'
              onChangeText={(text) => setAccountNumber(text)}
              value={account_number}
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
      {isLoading && <ActivityIndicator size="small" style={ExternalStyles.activity} />}
      <TouchableOpacity style={ExternalStyles.button} onPress={onPressLogin} >
            <Text style={ExternalStyles.text}>LogIn</Text>
      </TouchableOpacity>
    </View>
  );
};



export default Login;