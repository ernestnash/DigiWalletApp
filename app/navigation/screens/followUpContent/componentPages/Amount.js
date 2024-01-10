// AmountPage.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

import Ionicons from "react-native-vector-icons/Ionicons";

const AmountPage = ({ navigation, route }) => {
    const [amount, setAmount] = useState('');

    const handlePress = (value) => {
        setAmount((prevAmount) => prevAmount + value);
    };

    const handleConfirm = () => {
        navigation.navigate('ConfirmationPage', {
            agent: route.params.agent,
            amount,
            transactionType: route.params.transactionType,
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.amountContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter amount"
                    value={amount}
                    onChangeText={(text) => setAmount(text)}
                    keyboardType="numeric"
                />
            </View>
            <View style={styles.dialpadContainer}>
                {[1, 2, 3].map((value) => (
                    <TouchableOpacity key={value} style={styles.button} onPress={() => handlePress(value)}>
                        <Text style={styles.buttonText}>{value}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <View style={styles.dialpadContainer}>
                {[4, 5, 6].map((value) => (
                    <TouchableOpacity key={value} style={styles.button} onPress={() => handlePress(value)}>
                        <Text style={styles.buttonText}>{value}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <View style={styles.dialpadContainer}>
                {[7, 8, 9].map((value) => (
                    <TouchableOpacity key={value} style={styles.button} onPress={() => handlePress(value)}>
                        <Text style={styles.buttonText}>{value}</Text>
                    </TouchableOpacity>
                ))} 
            </View>
            <View style={styles.dialpadContainer}>
                <TouchableOpacity style={styles.iconButton} onPress={() => setAmount('')}>
                    <Ionicons name="close-outline" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handlePress(0)}>
                    <Text style={styles.buttonText}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton} onPress={() => setAmount(amount.slice(0, -1))}>
                    <Ionicons name="backspace-outline" size={24} color="white" />
                </TouchableOpacity>
            </View>    

                <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
                    <Text style={styles.confirmButtonText}>Next</Text>
                </TouchableOpacity>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    amountContainer: {
        marginBottom: 20,
    },
    input: {
        width: 200,
        borderBottomWidth: 1,
    },
    button: {
        width: 50,
        height: 50,
        borderRadius: 30,
        backgroundColor: '#3498db',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
    iconButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#e74c3c',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
    },
    confirmButton: {
        width: 120,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#2ecc71',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
    },
    confirmButtonText: {
        color: 'white',
        fontSize: 18,
    },

    dialpadContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
});



export default AmountPage;


