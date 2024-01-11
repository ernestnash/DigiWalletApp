// ConfirmationPage.js

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native'; 

import ipAddress from '../../../../api/Api';

const ConfirmationPage = ({ route }) => {
    const { agent, amount, transactionType, account_number } = route.params;

    const navigation = useNavigation();

    const handleConfirm = async () => {
        try {
            console.log(`${transactionType} confirmed!`);
            console.log('Transaction Type:', transactionType);
            console.log('Agent:', agent);
            console.log('Amount:', amount);
            console.log('Account:', account_number);

            // Prepare data for the POST request
            const postData = {
                transaction_type: transactionType,
                amount: amount,
                account_number: account_number,
            };

            // Make a POST request to your API endpoint
            const response = await fetch(`${ipAddress}/transactions/new`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(postData),
            });

            const data = await response.json();

            navigation.goBack();

            if (response.ok) {
                // Handle success
                console.log('Transaction successfully posted:', data);
            } else {
                // Handle error
                console.error('Error posting transaction:', data.error);
            }
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    return (
        <View style={styles.container}>
            <Text>{`Confirm ${transactionType}`}</Text>
            <Text>{`${transactionType === 'Deposit' ? 'Agent Number' : 'Sender'}: ${agent}`}</Text>
            <Text>Amount: {amount}</Text>
            <Button title="Confirm" onPress={handleConfirm} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ConfirmationPage;
