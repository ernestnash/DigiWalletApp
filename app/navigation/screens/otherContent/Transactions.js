
import { View, Text, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import Styles, { lightGray, mainColor } from '../../../styles/Styles';
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { TransactionDetails } from '../followUpContent/Index';
import { useState, useContext, useEffect } from 'react';

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

    // Retrieve the user ID from the CredentialsContext
    const userId = storedCredentials ? storedCredentials.user_id : null;

    // useEffect to fetch user transactions when the component mounts or userId changes
    useEffect(() => {
        if (userId) {
            fetchUserTransactions(userId);
        }
    }, [userId]);

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
                    setTransactions(data.transactions);
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
        console.log('Viewing Transaction Details:', transaction);
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

        if (transactionType === 'deposit') {
            return 'arrow-up-outline';
        } else if (transactionType === 'withdrawal') {
            return 'arrow-down-outline';
        }
        
        return 'information-circle-outline'; // Default icon if no match
    };

    // Function to get transaction type color
    const getTransactionTypeColor = (transactionType) => {

        if (transactionType === 'deposit') {
            return 'green';
        } else if (transactionType === 'withdrawal') {
            return 'red';
        }

        return 'black'; // Default color if no match
    };


    const updateHeading = (value) => {
        setHeading(value);
    };

    const handleQuickAction = (action) => {
        // Implement logic for each quick action
        alert(`Performing ${action} action`);
    };
    const handleTransferMoney = () => {
        // Navigate to the DialPad screen and pass the updateHeading function
        navigation.navigate('Dialpad', {
            updateHeading: (value) => {
                return "New Heading";
            },
        });
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
            <Balance userId={userId} />

            <View style={Styles.quickActionsContainer}>
                <QuickAction label="Transfer Money" onPress={handleTransferMoney} icon="swap-horizontal-outline" />
                <QuickAction label="Send Money" onPress={() => handleQuickAction('Send Money')} icon="send-outline" />
                <QuickAction label="Buy Airtime" onPress={() => handleQuickAction('Buy Airtime')} icon="phone-portrait-outline" />
                {/* Add more QuickAction components as needed */}
            </View>
            {/* Add new quick actions here */}
            <View style={Styles.quickActionsContainer}>
                <QuickAction label="Deposit Money" onPress={() => handleQuickAction('Deposit Money')} icon="arrow-up-outline" />
                <QuickAction label="Cheques" onPress={() => handleQuickAction('Cheques')} icon="cash-outline" />
                <QuickAction label="Withdraw Money" onPress={() => handleQuickAction('Withdraw Money')} icon="arrow-down-outline" />
                {/* Add more QuickAction components as needed */}
            </View>
            <View style={Styles.quickActionsContainer}>
                <QuickAction label="Financial Tips" onPress={() => handleQuickAction('Financial Tips')} icon="bulb-outline" />
                <QuickAction label="Pay Bills" onPress={() => handleQuickAction('Pay Bills')} icon="card-outline" />
                <QuickAction label="Pay Bills" onPress={() => handleQuickAction('Pay Bills')} icon="card-outline" />
            </View>
            {/* </View> */}

            <View style={Styles.transactions}>
                <Text style={Styles.transactionsHeading}>Recent Transactions</Text>
                {isLoading ? (
                    <Text>Loading...</Text>
                ) : transactions.length === 0 ? (
                    <View style={Styles.noTransactionsContainer}>
                        {/* ... No transactions UI ... */}
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



