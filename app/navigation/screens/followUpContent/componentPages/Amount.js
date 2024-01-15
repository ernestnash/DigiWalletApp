// AmountPage.js

import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import Ionicons from "react-native-vector-icons/Ionicons";
import { mainColor } from '../../../../styles/Styles';

import Styles from '../../../../styles/Styles';

const AmountPage = ({ navigation, route }) => {
    const [amount, setAmount] = useState('');
    const isFocused = useIsFocused();

    const handlePress = (value) => {
        setAmount((prevAmount) => prevAmount + value);
    };

    const handleConfirm = () => {
        if (amount.trim() === '') {
            alert("Please enter an amount.");
        } else {
            console.log('Route Params in AmountPage:', route.params);
            navigation.navigate('ConfirmationPage', {
                agent: route.params.agent,
                amount,
                transactionType: route.params.transactionType,
                account_number: route.params.account_number,
                clearAmount: true,
            });
        }

    };

    // clear Amount state when component unmounts
    useEffect(() => {
        if(!isFocused) {
            console.log('Amount Page unmounted');
            setAmount('');
        }
    }, [isFocused]);

    // check if the clearAmount flag is set in the route.param, then clear the amount state
    useEffect(()=> {
        console.log('Route Params Changed:', route.params)
        if(route.params?.clearAmount) {
            console.log('Clearing amount in Confirmation Page')
            setAmount('');
        }
    }, [route.params?.clearAmount]);


    // Disable the "Next" button if the amount is empty
    const isNextButtonDisabled = amount.trim() === '';

    return (
        <View style={styles.container}>

            {/* Header */}
            <View style={{ ...Styles.headerContainer, width: 400 }}>
                {/* Back Button */}
                <TouchableOpacity
                    style={{ ...Styles.backButton, marginLeft: 0 }}
                    onPress={() => navigation.goBack()}>
                    <Ionicons name="chevron-back-circle" size={30} color={mainColor} />
                </TouchableOpacity>

                {/* Title */}
                <Text style={Styles.nTitle}>Enter Amount</Text>
            </View>
            <View style={styles.amountContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter amount"
                    value={amount}
                    onChangeText={(text) => setAmount(text)}
                    keyboardType="none"
                />
            </View>
            <View style={Styles.dialpadContainer}>
                {[1, 2, 3].map((value) => (
                    <TouchableOpacity key={value} style={styles.button} onPress={() => handlePress(value)}>
                        <Text style={styles.buttonText}>{value}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <View style={Styles.dialpadContainer}>
                {[4, 5, 6].map((value) => (
                    <TouchableOpacity key={value} style={styles.button} onPress={() => handlePress(value)}>
                        <Text style={styles.buttonText}>{value}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <View style={Styles.dialpadContainer}>
                {[7, 8, 9].map((value) => (
                    <TouchableOpacity key={value} style={styles.button} onPress={() => handlePress(value)}>
                        <Text style={styles.buttonText}>{value}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <View style={Styles.dialpadContainer}>
                <TouchableOpacity style={styles.iconButton} onPress={() => setAmount('')}>
                    <Ionicons name="close-outline" size={28} color="#e74c3c" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handlePress(0)}>
                    <Text style={styles.buttonText}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton} onPress={() => setAmount(amount.slice(0, -1))}>
                    <Ionicons name="backspace-outline" size={28} color="#e74c3c" />
                </TouchableOpacity>
            </View>


            <Ionicons
                name="arrow-forward-circle-outline"
                onPress={handleConfirm}
                size={70}
                color={isNextButtonDisabled ? 'gray' : mainColor}
                style={{ opacity: isNextButtonDisabled ? 0.5 : 1 }}
            />

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
        marginBottom: 40,
    },
    input: {
        width: 300,
        borderBottomWidth: 1,
        marginBottom: 50,
        marginTop: 180,
        fontSize: 20,
    },
    button: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: 'white',
        borderColor: mainColor,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15,
    },
    buttonText: {
        color: mainColor,
        fontSize: 28,
    },
    iconButton: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: '#e74c3c',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15,
    },

});



export default AmountPage;



