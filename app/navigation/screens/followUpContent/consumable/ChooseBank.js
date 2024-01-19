import React, { useEffect, useState, useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Styles, { mainColor, lightGray, width } from '../../../../styles/Styles';
import Ionicons from "react-native-vector-icons/Ionicons";
import { height } from '../../../../styles/Styles';

import { CredentialsContext } from '../../../../components/CredentialsContext';

const QuickAction = ({ label, onPress, icon }) => (
    <TouchableOpacity style={Styles.quickAction} onPress={onPress}>
        <View style={Styles.quickActionInner}>
            <Ionicons name={icon} size={24} color={mainColor} style={Styles.quickActionIcon} />
            <Text style={Styles.quickActionLabel}>{label}</Text>
        </View>
    </TouchableOpacity>
);

export default function ChooseBank({ route }) {
    const { expenditureType, account_number } = route.params;
    const { storedCredentials } = useContext(CredentialsContext);
    const [transactions, setTransactions] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
    const navigation = useNavigation();
    const [isLoading, setIsLoading] = useState(false);

    // Define options based on transactionType
    let options;
    if (expenditureType === 'Send To Phone') {
        // Options for sending money
        options = [
            { label: 'Mpesa', value: 'Mpesa' },
            { label: 'Airtel Money', value: 'Airtel Money' },
            { label: 'Telkom Kash', value: 'Telkom Kash' },
        ];
    } else if (expenditureType === 'Buy Airtime') {
        // Options for buying airtime
        options = [
            { label: 'Safaricom', value: 'Safaricom' },
            { label: 'Airtel', value: 'Airtel' },
            { label: 'Telkom', value: 'Telkom' },
        ];
    } else if (expenditureType === 'PayBill') {
        // Options for paying bills
        options = [
            { label: 'Buy Goods and Services', value: 'Buy Goods and Services' },
            { label: 'Pay Bill', value: 'Pay Bill' },
            { label: 'Pochi La Biashara', value: 'Pochi La Biashara' },
        ];
    } else {
        // Default options if transactionType doesn't match any specific case
        options = [];
    }

    // Function to handle option selection
    const handleOptionSelection = (selectedOption) => {
        console.log(`Selected option for ${expenditureType}:`, selectedOption.label);
      
        setSelectedOption(selectedOption);
        
        if (selectedOption.label === 'Pay Bill') {
          navigation.navigate('PayBill', {
            expenditureType: expenditureType,
            accountNumber: account_number,
            selectedOption: selectedOption.label,
          });
        } else {
          // For other options, navigate directly to AccountNumber screen
          navigation.navigate('AccountNumberPage', {
            expenditureType: expenditureType,
            accountNumber: account_number,
            selectedOption: selectedOption.label,
          });
        }
      };

      useEffect(() => {
        // Fetch transactions when the component mounts or selectedOption changes
        if (selectedOption) {
            fetchUserTransactions(userId, selectedOption);
        }
    }, [selectedOption]);

    
    const fetchUserTransactions = async (userId, selectedOption) => {
        try {
            setIsLoading(true);
            // Make an API request to your server to get user transactions based on userId
            const response = await fetch(`${ipAddress}/transactions/expenses/${userId}/${selectedOption.label}`);
            const data = await response.json();
            console.log('API Response:', data);


            if (response.ok) {
                // Check if the response contains an error message
                if (data.error) {
                    console.error('Error fetching transactions:', data.error);
                } else {
                    // Set transactions if there is no error
                    setTransactions(data.transactions || []);
                }
            } else {
                // Handle error, show a message, or perform other actions
                console.error('Error fetching transactions:', data.error);
            }
        } catch (error) {
            console.error('Error fetching transactions:', error.message);
        } finally {
            setIsLoading(false);
        };
    };

    // Function to handle viewing transaction details
    const viewTransactionDetails = (transaction) => {
        // Navigate to the TransactionDetails screen and pass the selected transaction as a route parameter
        navigation.navigate('TransactionDetails', { transaction });
    };

    // TransactionItem component with styles
    const TransactionItem = ({ item, onPress }) => (
        <TouchableOpacity style={Styles.transactionItem} onPress={() => onPress(item)}>
            {/* Transaction Type Icon */}
            <Ionicons
                name={getTransactionTypeIcon(item.transaction_type)}
                size={24}
                color={getTransactionTypeColor(item.transaction_type)}
                style={Styles.transactionTypeIcon}
            />

            {/* Transaction Type */}
            <Text style={Styles.transactionType}>{item.transaction_type}</Text>

            {/* Amount */}
            <Text style={Styles.transactionAmount}>{`Ksh.${item.amount}`}</Text>
        </TouchableOpacity>
    );

    return (
        <ScrollView style={Styles.contentContainer}>

            {/* Header */}
            <View style={{ ...Styles.headerContainer, width: width, marginTop: 20 }}>
                {/* Back Button */}
                <TouchableOpacity
                    style={{ ...Styles.backButton, marginLeft: 0 }}
                    onPress={() => navigation.goBack()}>
                    <Ionicons name="chevron-back-circle" size={30} color={mainColor} />
                </TouchableOpacity>

                {/* Title */}
                <Text style={Styles.nTitle}>{expenditureType}</Text>
            </View>

            <View>
                <View style={{...Styles.quickActionsContainerTrans, marginTop:100, marginBottom:100}}>
                    {options.map((option) => (

                        <QuickAction
                            label={option.label}
                            onPress={() => handleOptionSelection(option)}
                            icon="cart-outline"
                        />
                    ))}
                </View>
            </View>

            <View style={Styles.transactions}>
                <Text style={Styles.transactionsHeading}>Recent {expenditureType}</Text>
                {isLoading ? (
                    <ActivityIndicator size="large" color={mainColor} />
                ) : transactions.length === 0 ? (
                    <View style={Styles.noTransactionsContainer}>
                        {/* ... No transactions UI ... */}
                        <Text>No transactions to display for the user.</Text>
                    </View>
                ) : (
                    <FlatList
                        data={transactions}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <TransactionItem item={item} onPress={viewTransactionDetails} />
                        )}
                        ItemSeparatorComponent={() => <View style={Styles.separator} />}
                    />
                )}
            </View>
            
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    optionsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    optionButton: {
        margin: 8,
        padding: 16,
        backgroundColor: mainColor,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
