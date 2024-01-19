
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ipAddress from '../../../../api/Api';
import Styles, { mainColor } from '../../../../styles/Styles';

const Confirmation = ({ route }) => {
    const { selectedOption, payBillNumber, accountNumber, amount, expenditureType, expenditureAccount } = route.params;
    const navigation = useNavigation();
    
    let fee;

    const handleConfirm = async () => {
        try {
            const fee = calculateFee(amount);

            console.log(`${expenditureType} confirmed!`);
            console.log('Account Number:', accountNumber);
            console.log('Expenditure Type:', expenditureType);
            console.log('selected Option:', selectedOption);
            console.log('Paybill Number:', payBillNumber);
            console.log('Account Number:', expenditureAccount);
            console.log('Amount:', amount);
            console.log('Fee:', fee);

            // Prepare data for the POST request
            const postData = {
                expenditure_type: expenditureType,
                selected_option: selectedOption,
                paybill_number: payBillNumber,
                account_number: accountNumber,
                amount: amount,
                fee: fee,
                expenditure_account: expenditureAccount,
            };

            // Make a POST request to your API endpoint
            const response = await fetch(`${ipAddress}/transactions/expenses/${accountNumber}`, {
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
                console.error('Error posting expenditure:', data.error);
            }
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    // Add your fee calculation function
    const calculateFee = (amount) => {
        // Charge a fixed fee or a percentage of the transaction amount
        const percentageFee = 0.04; // 5% fee
        const fixedFee = 8; // Ksh.10 fixed fee

        // Calculate the fee 
        const fee = amount * percentageFee + fixedFee;

        // Round the fee to 2 decimal places
        return fee.toFixed(2);
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
                        <View style={Styles.detailRow}>
                            <Text style={Styles.detailLabel}>Fee:</Text>
                            <Text style={Styles.detailText}>{fee}</Text>
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
