
import { View, Text, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import Styles, { mainColor } from '../../../styles/Styles';
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

    const fetchUserTransactions = async (userId) => {
        try {
            setIsLoading(true);
            // Make an API request to your server to get user transactions based on userId
            const response = await fetch(`${ipAddress}/user/transactions`);
            const data = await response.json();
    
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
                <FlatList
                    data={transactions}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <TransactionItem name={item.name} amount={item.amount} type={item.type} />
                    )}
                    ItemSeparatorComponent={() => <View style={Styles.separator} />}
                />
            </View>
            {/* </View> */}
        </ScrollView>

    );
};



