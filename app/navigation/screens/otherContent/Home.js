import * as React from "react";

import { useEffect, useState, useContext} from "react";

import { CredentialsContext } from "../../../components/CredentialsContext";

import { View, Text, TouchableOpacity, ScrollView, FlatList } from "react-native";

import Styles, { mainColor } from "../../../styles/Styles";

import Ionicons from "react-native-vector-icons/Ionicons";

import Balance from "../../../components/Balance";

import { useNavigation } from "@react-navigation/native";

const color = '#fff';

export default function Home({ navigation }) {

    const nav = useNavigation();

    // Retrieve the user ID from the CredentialsContext
    const { storedCredentials } = useContext(CredentialsContext);
    const userId = storedCredentials ? storedCredentials.user_id : null;

    const transactionsData = [
        { id: '1', name: 'John Doe', amount: 100.00, type: 'in' },
        { id: '2', name: 'Jane Smith', amount: -50.00, type: 'out' },
        { id: '3', name: 'Alice Johnson', amount: 75.00, type: 'in' },
        { id: '4', name: 'John Doe', amount: 100.00, type: 'in' },
        { id: '5', name: 'Jane Smith', amount: -50.00, type: 'out' },
        { id: '6', name: 'Alice Johnson', amount: 75.00, type: 'in' },
        { id: '7', name: 'John Doe', amount: 100.00, type: 'in' },
        { id: '8', name: 'Jane Smith', amount: -50.00, type: 'out' },
        { id: '9', name: 'Alice Johnson', amount: 75.00, type: 'in' },
        // Add more transactions as needed
    ];

    const TransactionItem = ({ name, amount, type }) => (
        <View style={Styles.transactionItem}>
            <Text style={Styles.transactionName}>{name}</Text>
            <Text style={type === 'in' ? Styles.incomeAmount : Styles.expenseAmount}>
                {type === 'out' ? '-' : '+'} ${Math.abs(amount).toFixed(2)}
            </Text>
        </View>
    );

    return (
        <ScrollView vertical showsVerticalScrollIndicator={true} style={Styles.contentContainer}>
            <View style={Styles.specialContainer}>
                <View style={Styles.topContainer}>
                    {/* Header Section */}
                    <View style={Styles.header}>

                        <TouchableOpacity style={{ paddingLeft: 10 }} onPress={() => nav.openDrawer()}>
                            <Ionicons name="menu-outline" size={30} color={mainColor} />
                        </TouchableOpacity>

                        <TouchableOpacity style={{ paddingRight: 10 }} onPress={() => navigation.navigate('Notifications')}>
                            <Ionicons name="notifications-outline" size={30} color={mainColor} />
                        </TouchableOpacity>
                    </View>

                    {/* Balance Section */}
                    <Balance userId={userId} />

                    {/* Cards Section */}
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={Styles.cardsContainer}>
                        {/* Card 1 */}
                        <TouchableOpacity style={Styles.cardComp} onPress={() => navigation.navigate('Cards')}>
                            <Text style={Styles.whiteText}>Card 1</Text>
                            <Text style={Styles.whiteText}>1234567890</Text>
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
                        <TouchableOpacity style={Styles.quickActionButton}>
                            <Ionicons name="add" size={24} color={mainColor} />
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.quickActionButton}>
                            <Ionicons name="remove" size={24} color={mainColor} />
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.quickActionButton}>
                            <Ionicons name="refresh" size={24} color={mainColor} />
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.quickActionButton}>
                            <Ionicons name="settings" size={24} color={mainColor} />
                        </TouchableOpacity>
                    </View>
                </View>



            </View>
            {/* Latest Transactions Section */}
            <View style={Styles.transactions}>
                <Text style={Styles.transactionsHeading}>Recent Transactions</Text>
                <FlatList
                    data={transactionsData}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TransactionItem name={item.name} amount={item.amount} type={item.type} />
                    )}
                    ItemSeparatorComponent={() => <View style={Styles.separator} />}
                />
            </View>
        </ScrollView>

    );
}