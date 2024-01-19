
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ipAddress from '../../../../api/Api';
import Styles, { mainColor } from '../../../../styles/Styles';

const Confirmation = ({ route }) => {
    const { selectedOption, payBillNumber, accountNumber, amount, expenditureType, expenditureAccount } = route.params;
    const navigation = useNavigation();

    const handleConfirm = async () => {
        try {
            console.log(`${expenditureType} confirmed!`);
            console.log('Account Number:', accountNumber);
            console.log('Expenditure Type:', expenditureType);
            console.log('selected Option:', selectedOption);
            console.log('Paybill Number:', payBillNumber);
            console.log('Account Number:', expenditureAccount);
            console.log('Amount:', amount);

            // Prepare data for the POST request
            const postData = {
                transaction_type: expenditureType,
                selectedOption: selectedOption,
                paybill_number: payBillNumber,
                account_number: accountNumber,
                amount: amount,
                account_number: accountNumber, 
            };

            // Make a POST request to your API endpoint
            // const response = await fetch(`${ipAddress}/transactions/new`, {
            //     method: 'POST',
            //     headers: {
            //         Accept: 'application/json',
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(postData),
            // });

            const data = await response.json();

            // navigation.goBack();

            if (response.ok) {
                // Handle success
                console.log('Transaction successfully posted:', data);
            } else {
                // Handle error
                console.error('Error posting expenditure:', data.error);
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
                            <Text style={Styles.transferSuccessfulText}>{`Confirm ${selectedOption}`}</Text>
                        </View>
                        
                        {/* Separator */}
                        <View style={Styles.separator} />

                        <View style={Styles.detailRow}>
                            <Text style={Styles.detailLabel}>{selectedOption}</Text>
                            <Text style={Styles.detailText}>{payBillNumber}</Text>
                        </View>
                        <View style={Styles.detailRow}>
                            <Text style={Styles.detailLabel}>Account Number:</Text>
                            <Text style={Styles.detailText}>{expenditureAccount}</Text>
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
