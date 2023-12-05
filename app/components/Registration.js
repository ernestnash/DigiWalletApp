// components/MyComponent.js
import { useState } from 'react';
import { StatusBar} from 'expo-status-bar';
import { View, Text, ActivityIndicator, TextInput, TouchableOpacity } from 'react-native';

import ExternalStyles from './ExternalStyles';
import React from 'react';

export default function Registration({ navigation }) {

  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [pin, setPin] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const urlData = 'http://192.168.0.49:8000';

  const onPressSignup = async () => {
    try {

      setIsLoading(true); // Show loading indicator when the button is pressed

      if (!fullName || !phoneNumber || !pin) {
        console.error('All fields are required.');
        return;
      }
      console.log('full_name:', fullName);
      console.log('phone_number:', phoneNumber);
      console.log('pin:', pin);

      const response = await fetch(`${urlData}/api/users`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          full_name: fullName,
          phone_number: phoneNumber,
          pin: pin,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error data:', errorData);
        throw new Error(`Registration failed with status code ${response.status}`);
      }

      // Handle Navigation to the dashboard
      navigation.navigate('Dashboard');

    } catch (error) {
      console.error('Error registering user:', error);
    
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
    navigation.navigate('Login');
  };
  return (
    <View style={ExternalStyles.Register}>
      <Text style={ExternalStyles.heading}>Sign Up for DigiWallet</Text>
      <TextInput
              style={ExternalStyles.textInput}
              placeholder='Enter Full Name'
              onChangeText={(text) => setFullName(text)}
              value={fullName}
              underlineColorAndroid={'transparent'}
            />
      <TextInput
              style={ExternalStyles.textInput}
              placeholder='Enter Phone Number'
              onChangeText={(text) => setPhoneNumber(text)}
              value={phoneNumber}
              underlineColorAndroid={'transparent'}
            />
      <TextInput
              style={ExternalStyles.textInput}
              placeholder='Enter Pin'
              onChangeText={(text) => setPin(text)}
              secureTextEntry={true}
              value={pin}
              underlineColorAndroid={'transparent'}
            />
      <Text style={ExternalStyles.link} onPress={onPressText}>Already have an account?</Text>
      {isLoading && <ActivityIndicator size="small" style={ExternalStyles.activity} />}
      <TouchableOpacity 
        style={ExternalStyles.button}
        onPress={onPressSignup}>
            <Text style={ExternalStyles.text}>Sign Up</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
};


// export default Registration;