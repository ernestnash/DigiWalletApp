import React, { useEffect, useState, useContext } from "react";
import { CredentialsContext } from "../../../components/CredentialsContext";
import { View, Text, TouchableOpacity, ScrollView, FlatList, ActivityIndicator } from "react-native";
import Styles, { mainColor } from "../../../styles/Styles";
import Ionicons from "react-native-vector-icons/Ionicons";

import Balance from "../../../components/Balance";

import { useNavigation, useIsFocused, useFocusEffect } from "@react-navigation/native";

import ipAddress from "../../../api/Api";
import Header from "../../../components/Header";

const color = '#fff';

export default function Home({ navigation }) {

    const nav = useNavigation();

    const isFocused = useIsFocused(); // Use useIsFocused hook to determine if the screen is focused

    // Retrieve the user ID from the CredentialsContext
    const { storedCredentials } = useContext(CredentialsContext);
    const [transactions, setTransactions] = useState([]);
    const [heading, setHeading] = useState('Transactions');
    const [isLoading, setIsLoading] = useState(false);
    const userId = storedCredentials ? storedCredentials.user_data.id : null;

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
            }, 5000);  // Adjust the delay as needed
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
                    setTransactions(data.transactions.slice(0, 5) || []);
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
                return 'checkmark'; // Default icon if no match
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
                return 'brown'; // Default color if no match
        }
    };

    // Function to determine the greeting based on the time of day
    const getGreeting = () => {
        const hour = new Date().getHours();

        if (hour >= 5 && hour < 12) {
            return 'Good Morning';
        } else if (hour >= 12 && hour < 16) {
            return 'Good Afternoon';
        } else {
            return 'Good Evening';
        }
    };

    return (
        <ScrollView vertical showsVerticalScrollIndicator={true} style={Styles.contentContainer}>
            {/* <View style={Styles.specialContainer}> */}
                <View style={Styles.topContainer}>
                
                    <Header/>

                    <View style={Styles.balanceContent}>

                    {/* Balance Section */}
                    <Balance userId={userId} refreshBalance={refreshBalance} />

                    </View>

                    

                    {/* Cards Section */}
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={Styles.cardsContainer}>
                        {/* Card 1 */}
                        <TouchableOpacity style={Styles.cardComp} onPress={() => navigation.navigate('Cards')}>
                            <Text style={Styles.whiteText}>{storedCredentials.user_data.full_name}</Text>
                            <Text style={Styles.whiteText}>{storedCredentials.user_data.id}</Text>
                            <Text style={Styles.whiteText}>{storedCredentials.user_data.phone_number}</Text>
                        </TouchableOpacity>

                        {/* Card 2 */}
                        <TouchableOpacity style={Styles.cardComp} onPress={() => navigation.navigate('Cards')}>
                            <Text style={Styles.whiteText}>Card 2</Text>
                            <Text style={Styles.whiteText}>1234567890</Text>
                        </TouchableOpacity>

                        {/* Card 3 */}
                        <TouchableOpacity style={Styles.cardComp} onPress={() => navigation.navigate('Cards')}>
                            <Text style={Styles.whiteText}>Card 3</Text>
                            <Text style={Styles.whiteText}>1234567890</Text>
                        </TouchableOpacity>
                    </ScrollView>

                    {/* Quick Action Buttons */}
                    <View style={Styles.quickActionContainer}>
                        <View style={Styles.quickActionColumn}>
                            <TouchableOpacity style={Styles.quickActionButton}>
                                <Ionicons name="swap-horizontal-sharp" size={24} color={mainColor} />
                            </TouchableOpacity>
                            <Text style={Styles.quickActionLabel}>Transfer</Text>
                        </View>

                        <View style={Styles.quickActionColumn}>
                            <TouchableOpacity style={Styles.quickActionButton}>
                                <Ionicons name="cash-outline" size={24} color={mainColor} />
                            </TouchableOpacity>
                            <Text style={Styles.quickActionLabel}>Make Payment</Text>
                        </View>

                        <View style={Styles.quickActionColumn}>
                            <TouchableOpacity style={Styles.quickActionButton}>
                                <Ionicons name="document-text-outline" size={24} color={mainColor} />
                            </TouchableOpacity>
                            <Text style={Styles.quickActionLabel}>Quick Cheque</Text>
                        </View>

                        <View style={Styles.quickActionColumn}>
                            <TouchableOpacity style={Styles.quickActionButton}>
                                <Ionicons name="phone-portrait-outline" size={24} color={mainColor} />
                            </TouchableOpacity>
                            <Text style={Styles.quickActionLabel}>Topup</Text>
                        </View>
                    </View>

                </View>



            {/* </View> */}
            {/* Latest Transactions Section */}
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
        </ScrollView>

    );
}