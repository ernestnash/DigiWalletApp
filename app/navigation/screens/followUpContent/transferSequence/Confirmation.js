// ConfirmationPage.js

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import ipAddress from '../../../../api/Api';

import Styles, { mainColor } from '../../../../styles/Styles';

const Confirmation = ({ route }) => {
    const { amount, originAccount, destinationAccount } = route.params;

    const navigation = useNavigation();

    const handleConfirm = async () => {
        try {
            console.log(`Transfer confirmed!`);
            console.log('Origin Account:', originAccount);
            console.log('Amount:', amount);
            console.log('Destination Account:', destinationAccount);

            // Prepare data for the POST request
            const postData = {
                amount: amount,
            };

            const response = await fetch(`${ipAddress}/transactions/${originAccount}/transfer/${destinationAccount}`, {
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
                console.log('Transfer successfully posted:', data);
            } else {
                // Handle error
                console.error('Error posting transfer:', data.error);
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
                            <Text style={Styles.transferSuccessfulText}>{`Confirm Transfer`}</Text>
                            {/* <Text>{`Confirm ${transactionType}`}</Text> */}
                        </View>
                        <View style={Styles.detailRow}>
                            <Text style={Styles.detailLabel}>Sent To: </Text>
                            <Text style={Styles.detailText}>{destinationAccount}</Text>
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

export default Confirmation;
