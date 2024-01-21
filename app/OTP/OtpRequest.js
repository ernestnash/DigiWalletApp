import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, TextInput, Text, ActivityIndicator } from "react-native";

import '@react-native-firebase/auth';

import auth from '@react-native-firebase/auth';

import ipAddress from "../api/Api";

import Styles, { mainColor, height, width } from "../styles/Styles";
import { useNavigation } from '@react-navigation/native';
import Ionicons from "react-native-vector-icons/Ionicons";

export default function OtpRequest() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
  
    const navigation = useNavigation();
  
    const onPressSendOtp = async () => {
      try {
        setIsLoading(true);
  
        if (!/^\d{10}$/.test(phoneNumber)) {
          throw new Error("Please enter a valid 10-digit phone number");
        }
  
        const response = await fetch(`${ipAddress}/user/find/${phoneNumber}`, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }
        });
  
        if (!response.ok) {
          const errorData = await response.json();
          setErrorMessage(`Error: ${errorData.message}`);
          throw new Error(`Account Not Found. Check your phone number`);
        }
  
        const responseData = await response.json();
  
        // Check if there is a registered email
        if (responseData.user_data && responseData.user_data.email) {
          // Send OTP to the registered email
          const otp = await sendOtpToEmail(responseData.user_data.email, phoneNumber);
          // Navigate to the OTP entry screen
          navigation.navigate('OtpEntry', { phoneNumber, userData: responseData.user_data, otp });
        } else {
          // Navigate to the Enter Email screen
          navigation.navigate('EnterEmail', { phoneNumber, userData: responseData.user_data });
        }
  
        setPhoneNumber('');
  
      } catch (error) {
        console.error('Error verifying Phone Number:', error);
  
        let errorMessage = 'Unknown error occurred, check phone Number and try again.';
        if (error.code === 'auth/invalid-phone-number') {
          errorMessage = 'Invalid phone number. Please enter a valid phone number.';
        }
  
        setErrorMessage(errorMessage);
      } finally {
        setIsLoading(false);
      }
    };
  
    const sendOtpToEmail = async (email, phoneNumber) => {
      
        const response = await fetch(`${ipAddress}/user/request/otp`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                phone_number: phoneNumber,
                email: email,
              }),
        });

        const responseData = await response.json();

        // Check if response status is ok
        if (response.ok) {
            const otp = responseData.OTP;
            return otp;

            // // Navigate to the OTP entry screen with the verification ID
            // navigation.navigate('OtpEntry', { phoneNumber, email, userData, otp });
        } else {
            // Handle error if the response status is not ok
            throw new Error(`Error: ${responseData.message}`);
        }
    };
  
    return (
      <View style={Styles.container}>
        <View style={Styles.formContainer}>
          <Text style={Styles.heading}>Help Us Find Your Account</Text>
          <Text>Enter Phone Number registered to your account</Text>
          <TextInput
            style={Styles.textInput}
            keyboardType='numeric'
            placeholder='07xx xxx xxx'
            onChangeText={(text) => setPhoneNumber(text)}
            value={phoneNumber}
            underlineColorAndroid={'transparent'}
          />
          {errorMessage !== '' && <Text style={Styles.errorText}>{errorMessage}</Text>}
          {isLoading ? (
            <ActivityIndicator size="small" color={mainColor} style={Styles.activity} />
          ) : (
            <TouchableOpacity style={Styles.button} onPress={onPressSendOtp}>
              <Text style={Styles.buttonText2}>Send OTP</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
  