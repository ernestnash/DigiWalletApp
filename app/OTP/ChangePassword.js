import React, {useState, useEffect} from "react";
import { View, TouchableOpacity, TextInput, Text, ActivityIndicator } from "react-native";

import ipAddress from "../api/Api";

import Styles, {height, width, mainColor} from "../styles/Styles";

export default function ChangePassword() {
    const [pin, setPin] = useState("");
    const [confirm_pin, setConfirmPin] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    onPressResetPin = async () => {
        try {

            setIsLoading(true);
            alert('Pin Reset')

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
                <Text style={Styles.heading}>Reset your pin</Text>
                <Text>Choose a Unique Number as your new pin</Text>
                <TextInput
                    style={Styles.textInput}
                    keyboardType='numeric'
                    placeholder='Enter Pin'
                    onChangeText={(text) => setPin(text)}
                    secureTextEntry={true}
                    value={pin}
                    maxLength={6}
                    underlineColorAndroid={'transparent'}
                />
                <TextInput
                    style={Styles.textInput}
                    keyboardType='numeric'
                    placeholder='Confirm Pin'
                    onChangeText={(text) => setConfirmPin(text)}
                    secureTextEntry={true}
                    value={confirm_pin}
                    maxLength={6}
                    underlineColorAndroid={'transparent'}
                />
                {errorMessage !== '' && <Text style={Styles.errorText}>{errorMessage}</Text>}
                {isLoading ? (
                    <ActivityIndicator size="small" color={mainColor} style={Styles.activity} />
                ) : (
                    <TouchableOpacity style={Styles.button} onPress={onPressResetPin}>
                        <Text style={Styles.buttonText2}>Send OTP</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );

}