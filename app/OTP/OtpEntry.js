import React, { useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import PropTypes from 'prop-types';
import Styles, { mainColor, primaryText, width, height } from '../styles/Styles';

import ipAddress from '../api/Api';


const OtpEntry = ({ length, value, disabled, onChange, navigation, route }) => {
  length = 4;

  const [code, setCode] = useState(['', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const inputRefs = useRef([]);

  const { phoneNumber, userData, email, otp } = route.params;

  console.log('Phone Number:', phoneNumber);
  console.log('User Data:', userData);
  console.log('Email:', email);
  console.log('OTP:', otp);


  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleInputChange = (text, index) => {
    const updatedCode = [...code];
    updatedCode[index] = text;
    setCode(updatedCode);

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

      // Combine the OTP digits into a single string
      const verificationCode = code.join('');
      console.log('Entered Code: ', verificationCode);

      if (verificationCode != otp) {
        setErrorMessage('Invalid OTP. Please try again.');
      } else {

        const response = await fetch(`${ipAddress}/user/verify/otp`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            otp: verificationCode,
          }),
        });
  
        // Check if the response indicates success
        if (response.ok) {
          console.log('OTP Verification Successful');
        } else {
          // If verification fails, set an error message
          setErrorMessage('Invalid OTP. Please try again.');
        }
  
        // OTP verification successful, navigate to the next screen (e.g., ChangePassword)
        navigation.navigate('ChangePassword', { phoneNumber });

      }



    } catch (error) {
      console.error('Error verifying OTP:', error);
      setErrorMessage('Invalid OTP. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const onPressResend = async () => {
    try {
      // Add your logic for resending OTP here

      Alert.alert('Otp Verification Successful');
    } catch (error) {
      console.error('Error resending OTP:', error);
      // Handle error (e.g., display an error message)
    }
  };

  return (
    <View style={styles.formContainer}>
      <View style={styles.container}>
        <Text style={styles.heading}>Verify OTP to change pin</Text>
        <Text style={styles.marginB}>We have sent an OTP to {email}</Text>
        <View style={styles.inputContainer}>
          {[...new Array(length)].map((_, index) => (
            <TextInput
              key={index}
              style={styles.input}
              keyboardType='numeric'
              maxLength={1}
              onChangeText={(text) => handleInputChange(text, index)}
              ref={(ref) => (inputRefs.current[index] = ref)}
            />
          ))}
        </View>

        <Text>Haven't Received the Code?</Text>
        <Text onPress={onPressResend}>Resend!</Text>
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
  );
};

OtpEntry.propTypes = {
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

export default OtpEntry;
