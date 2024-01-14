// components/MyComponent.js
import { useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, ActivityIndicator, TextInput, TouchableOpacity } from 'react-native';
import { mainColor } from '../styles/Styles';
import Styles from '../styles/Styles';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { CredentialsContext } from './CredentialsContext';

import ipAddress from '../api/Api';


export default function Registration({ navigation }) {

  const [isFullNameInputFocused, setIsFullNameInputFocused] = useState(false);
  const [isPhoneInputFocused, setIsPhoneInputFocused] = useState(false);
  const [isPinInputFocused, setIsPinInputFocused] = useState(false);
  const [isConfirmPinInputFocused, setIsConfirmPinInputFocused] = useState(false);

  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [pin, setPin] = useState('');
  const [pinConfirmation, setPinConfirmation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const { storedCredentials, setStoredCredentials } = useContext(CredentialsContext);

  const onPressSignup = async () => {
    try {
      setIsLoading(true);
  
      if (!fullName || !phoneNumber || !pin || !pinConfirmation) {
        setErrorMessage('All fields are required.');
        return;
      }
  
      if (pin !== pinConfirmation) {
        setErrorMessage('Pins must match');
        return;
      }
  
      const response = await fetch(`${ipAddress}/users`, {
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
  
      if (!response.ok) {
        const errorData = await response.json();
        setErrorMessage('Error data: ' + JSON.stringify(errorData));
        throw new Error(`Registering user failed with status code ${response.status}`);
      }
  
      const responseData = await response.json();
  
      // Make sure 'user_data' exists in the response
      if (responseData.user_data && responseData.user_data.id) {
        const userId = responseData.user_data.id;
  
        persistSignUp({
          phone_number: phoneNumber,
          user_id: userId,
        });
      } else {
        console.error('Invalid response data:', responseData);
      }
  
      // navigation.navigate('Dashboard');
    } catch (error) {
      setErrorMessage('Error registering user:', error);
      // Handle errors
    } finally {
      setIsLoading(false);
    }
  };
  const onPressText = () => {
    navigation.navigate('Login');
  };

  const persistSignUp = (credentials) => {
    AsyncStorage.setItem('digiWalletCredentials', JSON.stringify(credentials))
      .then(() => {
        console.info('Persisted Login Successfully');
        setStoredCredentials(credentials);

        // Log the contents of the CredentialsContext
        console.log('CredentialsContext after signup:', credentials);
      })
      .catch((error) => {
        console.error(error);
        handleMessage('Persisting Login Failed');
      });
  };


  return (
    <View style={Styles.container}>
      <View style={Styles.formContainer}>
        <Text style={Styles.heading}>Sign Up for DigiWallet</Text>
        <TextInput
          style={[
            Styles.textInput,
            { borderColor: isFullNameInputFocused ? mainColor : 'gray' },
          ]}
          placeholder='Enter Full Name'
          onChangeText={(value) => setFullName(value)}
          onFocus={() => setIsFullNameInputFocused(true)}
          onBlur={() => setIsFullNameInputFocused(false)}
          value={fullName}
          underlineColorAndroid={'transparent'}
        />
        <TextInput
          style={[
            Styles.textInput,
            { borderColor: isPhoneInputFocused ? mainColor : 'gray' },
          ]}
          placeholder='Enter Phone Number'
          onChangeText={(value) => setPhoneNumber(value)}
          onFocus={() => setIsPhoneInputFocused(true)}
          onBlur={() => setIsPhoneInputFocused(false)}
          value={phoneNumber}
          underlineColorAndroid={'transparent'}
        />
        <TextInput
          style={[
            Styles.textInput,
            { borderColor: isPinInputFocused ? mainColor : 'gray' },
          ]}
          placeholder='Set Wallet Pin'
          onChangeText={(value) => setPin(value)}
          secureTextEntry={true}
          onFocus={() => setIsPinInputFocused(true)}
          onBlur={() => setIsPinInputFocused(false)}
          value={pin}
          underlineColorAndroid={'transparent'}
        />
        <TextInput
          style={[
            Styles.textInput,
            { borderColor: isConfirmPinInputFocused ? mainColor : 'gray' },
          ]}
          placeholder='Confirm Wallet Pin'
          onChangeText={(value) => setPinConfirmation(value)}
          secureTextEntry={true}
          onFocus={() => setIsConfirmPinInputFocused(true)}
          onBlur={() => setIsConfirmPinInputFocused(false)}
          value={pinConfirmation}
          underlineColorAndroid={'transparent'}
        />
        <Text style={Styles.link} onPress={onPressText}>Already have an account?</Text>
        {errorMessage !== '' && <Text style={Styles.errorText}>{errorMessage}</Text>}
        {isLoading && <ActivityIndicator size="small" color={'#4a77aa'} style={Styles.activity} />}
        <TouchableOpacity
          style={Styles.button}
          onPress={onPressSignup}>
          <Text style={Styles.buttonText2}>Sign Up</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    </View>
  );
};


// export default Registration;