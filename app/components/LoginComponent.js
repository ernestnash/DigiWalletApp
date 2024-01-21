// components/MyComponent.js
import { useState, useContext } from 'react';
import { View, Text, ActivityIndicator, TextInput, TouchableOpacity } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { CredentialsContext } from './CredentialsContext';

import Styles, { mainColor } from '../styles/Styles';


import ipAddress from '../api/Api';

export default function Login({ navigation }) {
  const [isPhoneInputFocused, setIsPhoneInputFocused] = useState(false);
  const [isPinInputFocused, setIsPinInputFocused] = useState(false);
  const [phone_number, setPhoneNumber] = useState('');
  const [pin, setPin] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const { storedCredentials, setStoredCredentials } = useContext(CredentialsContext);

  const onPressLogin = async () => {
    try {
      setIsLoading(true);

      if (!phone_number || !pin) {
        setErrorMessage('All fields are required.');
        return;
      }

      const response = await fetch(`${ipAddress}/users/login`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone_number: phone_number,
          pin: pin,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setErrorMessage(`Error: ${errorData.message}`);
        // throw new Error(`Logging in failed with status code ${response.status}`);
        throw new Error(`Logging in failed check your credentials`);
      }

      const responseData = await response.json();

      // Make sure 'user' exists in the response
      if (responseData.user && responseData.user.id) {
        const userData = responseData.user;
        persistLogin({ phone_number, user_id: userData.id, user_data: userData });
      } else {
        console.error('Invalid response data:', responseData);
      }

    } catch (error) {
      console.error('Error Logging in user:', error);

      if (error instanceof Error) {
        setErrorMessage(`Error: ${error.message}`);
      } else {
        setErrorMessage('Unknown error occurred.');
      }

    } finally {
      setIsLoading(false);
    }
  };

  const onPressText = () => {
    navigation.navigate('Register');
  };
  const onPressForgotPassword = () => {
    navigation.navigate('OtpRequest');
  };

  const persistLogin = ({ phone_number, user_id, user_data }) => {
    const credentials = { phone_number, user_id, user_data };
    AsyncStorage.setItem('digiWalletCredentials', JSON.stringify(credentials))
      .then(() => {
        console.info('Logged In successfully');
        console.log('User Data:', user_data);
        setStoredCredentials(credentials);
      })
      .catch((error) => {
        console.log(error);
        handleMessage('Persisting Login Failed');
      });
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.formContainer}>
        <Text style={Styles.heading}>Sign in to DigiWallet</Text>
        <TextInput
                style={[
                  Styles.textInput,
                  { borderColor: isPhoneInputFocused ? mainColor : 'gray' },
                ]}
                placeholder='Account Number'
                onChangeText={(value) => setPhoneNumber(value)}
                onFocus={() => setIsPhoneInputFocused(true)}
                onBlur={() => setIsPhoneInputFocused(false)}
                value={phone_number}
                keyboardType='numeric'
                underlineColorAndroid={'transparent'}
              />
        <TextInput
                style={[
                  Styles.textInput,
                  { borderColor: isPinInputFocused ? mainColor : 'gray' },
                ]}
                keyboardType='numeric'
                placeholder='Pin'
                onChangeText={(text) => setPin(text)}
                secureTextEntry={true}
                onFocus={() => setIsPinInputFocused(true)}
                onBlur={() => setIsPinInputFocused(false)}
                maxLength={4}
                value={pin}
                underlineColorAndroid={'transparent'}
              />
        <Text style={Styles.link} onPress={onPressForgotPassword} >Forgot Password?</Text>
        {errorMessage !== '' && <Text style={Styles.errorText}>{errorMessage}</Text>}
        {isLoading && <ActivityIndicator size="small" color={mainColor} style={Styles.activity} />}
        <TouchableOpacity style={Styles.button} onPress={onPressLogin} >
              <Text style={Styles.buttonText2}>Sign In</Text>
        </TouchableOpacity>
        <Text style={Styles.link} onPress={onPressText} >Don't have an account?</Text>
      </View>
    </View>
  );
};
