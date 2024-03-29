// ConfirmationPage.js

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import ipAddress from '../../../../api/Api';

import Styles, { mainColor } from '../../../../styles/Styles';

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
        <View style={Styles.DetailsContainer}>
            <View style={Styles.blueBackground}>
                {/* Icon for sharing at the top right corner */}
            </View>
            <View style={Styles.cardContainer}>
                <View style={[Styles.card, { marginTop: -50 }]}>
                    <View style={Styles.logoContainer}>
                        {/* Placeholder logo */}

                    </View>

                    <View style={Styles.detailsContainer}>
                        <View style={Styles.detailRow}>
                            <Text style={Styles.transferSuccessfulText}>{`Confirm ${transactionType}`}</Text>
                            {/* <Text>{`Confirm ${transactionType}`}</Text> */}
                        </View>
                        <View style={Styles.detailRow}>
                            <Text style={Styles.detailLabel}>{`${transactionType === 'Deposit' ? 'Agent Number' : 'ATM No'}:`}</Text>
                            <Text style={Styles.detailText}>{agent}</Text>
                        </View>
                        <View style={Styles.detailRow}>
                            <Text style={Styles.detailLabel}>Amount:</Text>
                            <Text style={Styles.detailText}>{amount}</Text>
                        </View>


                        {/* Separator */}
                        <View style={Styles.separator} />


                        <View>
                            <Button title="Confirm" color={mainColor} onPress={handleConfirm} />
                        </View>
                    </View>
                </View>

            </View>

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
