import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, TextInput, Text, ActivityIndicator } from "react-native";

import '@react-native-firebase/auth';

import auth from '@react-native-firebase/auth';

import ipAddress from "../api/Api";

import Styles, { mainColor, height, width } from "../styles/Styles";
import { useNavigation } from '@react-navigation/native';
import Ionicons from "react-native-vector-icons/Ionicons";

export default function EnterEmail({route}) {    

    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const navigation = useNavigation();

    const { phoneNumber, userData } = route.params;

    // Now you can use phoneNumber, verificationId, and userData in this component
    console.log('Phone Number:', phoneNumber);
    console.log('User Data:', userData);

    const onPressSendOtp = async () => {
        try {
            setIsLoading(true);

            console.log("entered email is", email);

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
    
                // Navigate to the OTP entry screen with the verification ID
                navigation.navigate('OtpEntry', { phoneNumber, email, userData, otp });
            } else {
                // Handle error if the response status is not ok
                throw new Error(`Error: ${responseData.message}`);
            }

        } catch (error) {
            console.error('Error verifying email:', error);

            let errorMessage = 'Unknown error occurred.';
            if (error.code === 'auth/invalid-email') {
                errorMessage = 'Invalid email. Please enter a valid email';
            }

            setErrorMessage(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <View style={Styles.container}>
            <View style={Styles.formContainer}>
                <Text style={Styles.heading}>Request for OTP</Text>
                <Text>Enter email to receive OTP</Text>
                <TextInput
                    style={Styles.textInput}
                    placeholder='example@email.com'
                    onChangeText={(text) => setEmail(text)}
                    value={email}
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
