// components/MyComponent.js
import { useState, useContext } from 'react';
import { StatusBar} from 'expo-status-bar';
import { View, Text, ActivityIndicator, TextInput, TouchableOpacity } from 'react-native';

import Styles from '../styles/Styles';

import { CredentialsContext } from './CredentialsContext';

import ipAddress from '../api/Api';


export default function Registration({ navigation }) {

  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [pin, setPin] = useState('');
  const [pinConfirmation, setPinConfirmation] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const {storedCredentials, setStoredCredentials} = useContext(CredentialsContext);

  const onPressSignup = async () => {
    try {

      setIsLoading(true); // Show loading indicator when the button is pressed

      if (!fullName || !phoneNumber || !pin || !pinConfirmation) {
        console.error('All fields are required.');
        return;
      }

      if(pin !== pinConfirmation) {
        console.error('Pins must match');
        return;
      }


      const response = await fetch(`${ipAddress}/api/users`, {
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
        console.error('Error data:', errorData);
        throw new Error(`Registering user failed with status code ${response.status}`);
      }

      persistSignUp({phone_number});
      // navigation.navigate('Dashboard');
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

  const persistSignUp = (credentials, message, status) => {
    AsyncStorage
      .setItem('digiWalletCredentials', JSON.stringify(credentials))
      .then(() => {
          console.info(message, status);
          setStoredCredentials(credentials);
      })
      .catch((error) => {
        console.log(error);
        handleMessage('Persisting Login Failed')
      })
  }

  return (
    <View style={Styes.Register}>
      <Text style={Styes.heading}>Sign Up for DigiWallet</Text>
      <TextInput
              style={Styes.textInput}
              placeholder='Enter Full Name'
              onChangeText={(value) => setFullName(value)}
              value={fullName}
              underlineColorAndroid={'transparent'}
            />
      <TextInput
              style={Styes.textInput}
              placeholder='Enter Phone Number'
              onChangeText={(value) => setPhoneNumber(value)}
              value={phoneNumber}
              underlineColorAndroid={'transparent'}
            />
      <TextInput
              style={Styes.textInput}
              placeholder='Set Wallet Pin'
              onChangeText={(value) => setPin(value)}
              secureTextEntry={true}
              value={pin}
              underlineColorAndroid={'transparent'}
            />
      <TextInput
              style={Styes.textInput}
              placeholder='Confirm Wallet Pin'
              onChangeText={(value) => setPinConfirmation(value)}
              secureTextEntry={true}
              value={pinConfirmation}
              underlineColorAndroid={'transparent'}
            />
      <Text style={Styes.link} onPress={onPressText}>Already have an account?</Text>
      {isLoading && <ActivityIndicator size="small" color={'#4a77aa'} style={Styes.activity} />}
      <TouchableOpacity 
        style={Styes.button}
        onPress={onPressSignup}>
            <Text style={Styes.text}>Sign Up</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
};


// export default Registration;