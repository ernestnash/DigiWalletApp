// components/MyComponent.js
import { useState } from 'react';
import { StatusBar} from 'expo-status-bar';
import { View, Text, ActivityIndicator, TextInput, TouchableOpacity } from 'react-native';

import ExternalStyles from './ExternalStyles';
import React from 'react';

import { getApiUrl } from '../APIs/Ips.js'

export default function Registration({ navigation }) {

  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [pin, setPin] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  // const urlData = 'http://192.168.100.84:8000';

  const onPressSignup = async () => {
    try {

      setIsLoading(true); // Show loading indicator when the button is pressed

      if (!fullName || !phoneNumber || !pin) {
        console.error('All fields are required.');
        return;
      }
      // console.log('full_name:', fullName);
      // console.log('phone_number:', phoneNumber);
      // console.log('pin:', pin);

      const urlData1 = getApiUrl(true);  // Use home IP
      const urlData2 = getApiUrl(false); // Use work IP

      const response1 = await fetch(urlData1, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          full_name: fullName,
          phone_number: phoneNumber,
          pin: pin,
        }),
      });

      if (response1.ok) {
        console.log('Request successful using URL 1');
      } else {
        const response2 = await fetch(urlData2, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            full_name: fullName,
            phone_number: phoneNumber,
            pin: pin,
          }),
        });

        if (response2.ok) {
          console.log('Request successful using URL 2');
        } else {
          throw new Error('Both requests failed');
        }
      }

      navigation.navigate('Dashboard');
    } catch (error) {
      console.error('Error registering user:', error);
      // Handle errors
    } finally {
      setIsLoading(false);
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
              onChangeText={(value) => setFullName(value)}
              value={fullName}
              underlineColorAndroid={'transparent'}
            />
      <TextInput
              style={ExternalStyles.textInput}
              placeholder='Enter Phone Number'
              onChangeText={(value) => setPhoneNumber(value)}
              value={phoneNumber}
              underlineColorAndroid={'transparent'}
            />
      <TextInput
              style={ExternalStyles.textInput}
              placeholder='Enter Pin'
              onChangeText={(value) => setPin(value)}
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