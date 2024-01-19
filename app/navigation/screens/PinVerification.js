
import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';

import { CredentialsContext } from '../../components/CredentialsContext';

import Styles, {mainColor} from '../../styles/Styles';
import ipAddress from '../../api/Api';

const PinVerification = ({ navigation }) => {
  const [pin, setPin] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const { storedCredentials } = useContext(CredentialsContext);

  const onPressVerify = async () => {
    try {
      setIsLoading(true);

      const phone_number = storedCredentials.user_data.phone_number;

      if (!pin) {
        setErrorMessage('Please Enter Pin');
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
        setErrorMessage(`${errorData.message}`);
        throw new Error(`Pin Verification failed try again`);
      }


      // PIN verification successful, navigate to the homepage
      navigation.navigate('AppNavigator');

    } catch (error) {
      console.error('Error verifying PIN:', error);
      setErrorMessage('Unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.formContainer}>
        <Text style={Styles.heading}>PIN Verification</Text>
        <TextInput
          style={Styles.textInput}
          keyboardType='numeric'
          placeholder='Enter your PIN'
          onChangeText={(text) => setPin(text)}
          secureTextEntry={true}
          maxLength={6}
          value={pin}
          underlineColorAndroid={'transparent'}
        />
        {errorMessage !== '' && <Text style={Styles.errorText}>{errorMessage}</Text>}
        {isLoading ? (
          <ActivityIndicator size="small" color={mainColor} style={Styles.activity} />
        ) : (
          <TouchableOpacity style={Styles.button} onPress={onPressVerify}>
            <Text style={Styles.buttonText2}>Verify</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default PinVerification;
