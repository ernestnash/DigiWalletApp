
import React, { View, Text, FlatList, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import Styles, { lightGray, mainColor } from '../../../styles/Styles';
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { TransactionDetails } from '../followUpContent/Index';
import { useState, useContext, useEffect } from 'react';

import { useFocusEffect, useIsFocused } from '@react-navigation/native';

import { CredentialsContext } from '../../../components/CredentialsContext';

import Balance from '../../../components/Balance';

import ipAddress from '../../../api/Api';


const QuickAction = ({ label, onPress, icon }) => (
    <TouchableOpacity style={Styles.quickAction} onPress={onPress}>
        <View style={Styles.quickActionInner}>
            <Ionicons name={icon} size={24} color={mainColor} style={Styles.quickActionIcon} />
            <Text style={Styles.quickActionLabel}>{label}</Text>
        </View>
    </TouchableOpacity>
);

export default function Transactions({ navigation }) {

    const { storedCredentials } = useContext(CredentialsContext);
    const [transactions, setTransactions] = useState([]);
    const [heading, setHeading] = useState('Transactions');
    const [isLoading, setIsLoading] = useState(false);

    const isFocused = useIsFocused(); // Use useIsFocused hook to determine if the screen is focused

    // Retrieve the user ID from the CredentialsContext
    const userId = storedCredentials ? storedCredentials.user_id : null;

    const [refreshBalance, setRefreshBalance] = useState(0);

    // useEffect to fetch user transactions when the component mounts or userId changes
    useEffect(() => {
        let timeout;

        const fetchTransactions = () => {
            if (userId) {
                fetchUserTransactions(userId);
            }
        };

        const focusListener = navigation.addListener('focus', () => {
            fetchTransactions();
            setRefreshBalance((prev) => prev + 1);

            // Introduce a delay (e.g., 5000 milliseconds) before allowing the next API call
            timeout = setTimeout(() => {
                clearTimeout(timeout);
            }, 5000);
        });

        return () => {
            focusListener();
            clearTimeout(timeout); // Clear the timeout if the component unmounts
        };
    }, [navigation, userId, refreshBalance]);


    const fetchUserTransactions = async (userId) => {
        try {
            setIsLoading(true);
            // Make an API request to your server to get user transactions based on userId
            const response = await fetch(`${ipAddress}/user/${userId}/transactions`);
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

    // Function to get transaction type icon
const getTransactionTypeIcon = (transactionType) => {
    switch (transactionType) {
        case 'Deposit':
            return 'arrow-up-outline';
        case 'Withdrawal':
            return 'arrow-down-outline';
        case 'Sent':
            return 'arrow-forward-outline'; 
        case 'Received':
            return 'arrow-back-outline'; 
        default:
            return 'information-circle-outline'; // Default icon if no match
    }
};

// Function to get transaction type color
const getTransactionTypeColor = (transactionType) => {
    switch (transactionType) {
        case 'Deposit':
            return 'green';
        case 'Withdrawal':
            return 'red';
        case 'Sent':
            return 'blue'; 
        case 'Received':
            return 'purple'; 
        default:
            return 'black'; // Default color if no match
    }
};



    const handleQuickAction = (action) => {
        // Implement logic for each quick action
        alert(`Performing ${action} action`);
    };
    const handleTransferMoney = () => {
        // Navigate to the AccountNumber screen and pass the originAccount parameter
        navigation.navigate('AccountNumber', { originAccount: userId });
    };

    const handleDepositMoney = () => {
        // Navigate to the AgentPage and pass the transactionType
        navigation.navigate('Agent', { transactionType: 'Deposit', account_number: userId });
    };

    const handleWithdrawMoney = () => {
        // Navigate to the AgentPage and pass the transactionType
        navigation.navigate('Agent', { transactionType: 'Withdrawal', account_number: userId });
    };

    const handleFinancialTips = () => {
        navigation.navigate('FinancialTips');
    };

    const nav = useNavigation();
    return (
        <ScrollView vertical showsVerticalScrollIndicator={true} style={Styles.contentContainer}>
            {/* <View style={Styles.specialContainer}>
                <View style={Styles.topContainer}> */}
            {/* Header Section */}
            <View style={Styles.headerTransactions}>

                <TouchableOpacity style={{ paddingLeft: 10 }} onPress={() => nav.openDrawer()}>
                    <Ionicons name="menu-outline" size={30} color={mainColor} />
                </TouchableOpacity>

                {/* <View style={Styles.transactionsHeader}>
                    <Text style={Styles.transactionsHeading}>Transactions</Text>
                </View> */}

                <TouchableOpacity style={{ paddingRight: 10 }} onPress={() => navigation.navigate('Notifications')}>
                    <Ionicons name="notifications-outline" size={30} color={mainColor} />
                </TouchableOpacity>
            </View>

            {/* Balance Section */}
            {/* <Balance userId={userId} /> */}
            <Balance userId={userId} refreshBalance={refreshBalance} />

            <View style={Styles.quickActionsContainer}>
                <QuickAction label="Transfer Money" onPress={handleTransferMoney} icon="swap-horizontal-outline" />
                <QuickAction label="Send Money" onPress={() => handleQuickAction('Send Money')} icon="send-outline" />
                <QuickAction label="Buy Airtime" onPress={() => handleQuickAction('Buy Airtime')} icon="phone-portrait-outline" />
                {/* Add more QuickAction components as needed */}
            </View>
            {/* Add new quick actions here */}
            <View style={Styles.quickActionsContainer}>
                <QuickAction label="Deposit Money" onPress={handleDepositMoney} icon="arrow-up-outline" />
                <QuickAction label="Cheques" onPress={() => handleQuickAction('Cheques')} icon="cash-outline" />
                <QuickAction label="Withdraw Money" onPress={handleWithdrawMoney} icon="arrow-down-outline" />
                {/* Add more QuickAction components as needed */}
            </View>
            <View style={Styles.quickActionsContainer}>
                <QuickAction label="Financial Tips" onPress={handleFinancialTips} icon="bulb-outline" />
                <QuickAction label="Pay Bills" onPress={() => handleQuickAction('Pay Bills')} icon="card-outline" />
                <QuickAction label="Pay Bills" onPress={() => handleQuickAction('Pay Bills')} icon="card-outline" />
            </View>
            {/* </View> */}

            <View style={Styles.transactions}>
                <Text style={Styles.transactionsHeading}>Recent Transactions</Text>
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
            {/* </View> */}
        </ScrollView>

    );
};



