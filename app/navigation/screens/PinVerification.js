
import React, { useState, useRef, useContext, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';

import { CredentialsContext } from '../../components/CredentialsContext';

import PropTypes from 'prop-types';

import Styles, {mainColor, width, height, primaryText} from '../../styles/Styles';
import ipAddress from '../../api/Api';

const PinVerification = ({ length, value, disabled, onChange, navigation }) => {
  length =4;

  const [pin, setPin] = useState(['', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const inputRefs = useRef([]);

  const { storedCredentials } = useContext(CredentialsContext);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleInputChange = (text, index) => {
    const updatedPin = [...pin];
    updatedPin[index] = text;
    setPin(updatedPin);

    if (text === '' && index > 0) {
      // Move focus to the previous input field when deleting
      inputRefs.current[index - 1]?.focus();
    } else if (text.length === 1 && index < length - 1) {
      // Move focus to the next input field when entering
      inputRefs.current[index + 1]?.focus();
    }
  };

  const onPressVerify = async () => {
    try {
      setIsLoading(true);

      const phone_number = storedCredentials.user_data.phone_number;

      const enteredPin = pin.join('');

      if (!enteredPin) {
        setErrorMessage('Please Enter Pin');
        return;
      }

      console.log(enteredPin);

      const response = await fetch(`${ipAddress}/users/login`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone_number: phone_number,
          pin: enteredPin,
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
      setErrorMessage('Pin Verification Failed. Check and try again');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.formContainer}>
      <View style={styles.container}>
        <Text style={styles.heading}>PIN Verification</Text>
        <Text style={styles.marginB}>please enter your pin for verification</Text>

        <View style={styles.inputContainer}>
          {[...new Array(length)].map((_, index) => (
            <TextInput
              key={index}
              style={styles.input}
              keyboardType='numeric'
              placeholder='*'
              secureTextEntry={true}
              maxLength={1}
              value={pin[index]}
              onChangeText={(text) => handleInputChange(text, index)}
              ref={(ref) => (inputRefs.current[index] = ref)}
            />
          ))}
        </View>
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

PinVerification.propTypes = {
  length: PropTypes.number,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  navigation: PropTypes.object,
  route: PropTypes.object,
};

const styles = StyleSheet.create({
  container: {
    flex: 0.6,
    width: width / 1.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  input: {
    fontSize: 24,
    textAlign: 'center',
    height: 55,
    width: 55,
    backgroundColor: primaryText,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: mainColor,
    marginHorizontal: 5,
    marginVertical: 10,
  },
  marginB: {
    marginBottom: 20,
    flexWrap: 'wrap',
  },
  heading: {
    marginBottom: 20,
    fontSize: 30,
    fontWeight: 'bold',
  },
  formContainer: {
    padding: 20,
    height: height,
    width: width,
    backgroundColor: primaryText,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default PinVerification;
