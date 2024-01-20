import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import Styles, { mainColor, primaryText, width, height } from '../styles/Styles';

const OtpEntry = ({ length, value, disabled, onChange, navigation }) => {
  length = 4;

  const [code, setCode] = useState(['', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current[0].focus();
  }, []);

  const handleInputChange = (text, index) => {
    const updatedCode = [...code];
    updatedCode[index] = text;
    setCode(updatedCode);

    if (text === '' && index > 0) {
      // Move focus to the previous input field when deleting
      inputRefs.current[index - 1].focus();
    } else if (text.length === 1 && index < length - 1) {
      // Move focus to the next input field when entering
      inputRefs.current[index + 1].focus();
    }
  };

  const onPressVerify = async () => {
    try {
      setIsLoading(true);
      alert('Sending Otp to ');
      navigation.navigate('ChangePassword');
    } catch (error) {
      console.error('Error verifying OTP:', error);
      setErrorMessage('Unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.formContainer}>
      <View style={styles.container}>
        <Text style={styles.heading}>Verify OTP to change pin</Text>
        <Text style={styles.marginB}>We have sent an OTP to your phone number +254 *** *** 388</Text>
        <View style={styles.inputContainer}>
          {[...new Array(length)].map((item, index) => (
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
