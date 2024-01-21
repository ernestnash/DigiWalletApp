import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, TextInput, Text, ActivityIndicator } from "react-native";

import ipAddress from "../api/Api";

import Styles, { height, width, mainColor } from "../styles/Styles";

export default function ChangePassword({ route, navigation }) {
    const [pin, setPin] = useState("");
    const [confirmPin, setConfirmPin] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const { phoneNumber } = route.params;

    onPressResetPin = async () => {
        try {

            setIsLoading(true);

            console.log(phoneNumber);

            if (pin !== confirmPin) {
                setErrorMessage('Pins must match');
                return;
            }

            const response = await fetch(`${ipAddress}/users/change/pin/${phoneNumber}`, {
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    pin: pin,
                }),
            });


            if (!response.ok) {
                const errorData = await response.json();
                setErrorMessage('Error data: ' + JSON.stringify(errorData));
                throw new Error(`Change user Pin failed with status code ${response.status}`);
            }

            navigation.navigate('Login');

        } catch (error) {
            console.error('Error Changing Pin:', error);
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
                    maxLength={4}
                    underlineColorAndroid={'transparent'}
                />
                <TextInput
                    style={Styles.textInput}
                    keyboardType='numeric'
                    placeholder='Confirm Pin'
                    onChangeText={(text) => setConfirmPin(text)}
                    secureTextEntry={true}
                    value={confirmPin}
                    maxLength={4}
                    underlineColorAndroid={'transparent'}
                />
                {errorMessage !== '' && <Text style={Styles.errorText}>{errorMessage}</Text>}
                {isLoading ? (
                    <ActivityIndicator size="small" color={mainColor} style={Styles.activity} />
                ) : (
                    <TouchableOpacity style={Styles.button} onPress={onPressResetPin}>
                        <Text style={Styles.buttonText2}>Change Pin</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );

}