
import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, TextInput, Text, ActivityIndicator } from "react-native";
import { firebase } from '@react-native-firebase/app';
import { firebaseConfig } from "./FirebaseConfig";

import auth from '@react-native-firebase/auth';

import ipAddress from "../api/Api";

import Styles, { mainColor, height, width } from "../styles/Styles";

import Ionicons from "react-native-vector-icons/Ionicons";

export default function OtpRequest({ navigation }) {

    const [phoneNumber, setPhoneNumber] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    onPressSendOtp = async () => {
        try {

            setIsLoading(true);

            if (phoneNumber.length != 10) throw new Error("Please enter a valid phone Number");

            alert('Sending Otp to ', phoneNumber);

            navigation.navigate('OtpEntry');
        } catch (error) {
            console.error('Error verifying Phone Number:', error);
            setErrorMessage('Unknown error occurred.');
        } finally {
            setIsLoading(false);
        }

    }


    return (
        <View style={Styles.container}>
            <View style={Styles.formContainer}>
                <Text style={Styles.heading}>Request for OTP</Text>
                <Text>Enter Phone Number registered to your account</Text>
                <TextInput
                    style={Styles.textInput}
                    keyboardType='numeric'
                    placeholder='+254 xxx xxx xxx'
                    onChangeText={(text) => setPhoneNumber(text)}
                    secureTextEntry={true}
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