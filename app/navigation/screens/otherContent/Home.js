import * as React from "react";

import { View, Text, TouchableOpacity, ScrollView } from "react-native";

import Styles, { mainColor } from "../../../styles/Styles";

import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const color = '#fff';

export default function Home({navigation}) {

const nav = useNavigation();
    
    return(
        <ScrollView vertical showsVerticalScrollIndicator={true}>
            <View style={Styles.specialContainer}>
                <View style={Styles.topContainer}>
                    {/* Header Section */}
                    <View style={Styles.header}>

                    <TouchableOpacity style={{ paddingLeft: 20}} onPress={() => nav.openDrawer()}>
                        <Ionicons name="menu-outline" size={40} color={mainColor} />
                    </TouchableOpacity>

                    <TouchableOpacity style={{ paddingRight: 20}} onPress={() => navigation.navigate('Notifications')}>
                        <Ionicons name="notifications-outline" size={40} color={mainColor} />
                    </TouchableOpacity>
                    </View>

                    {/* Balance Section */}
                    <View style={Styles.balanceContainer}>
                        <Text style={Styles.balanceHeading}>Balance</Text>
                        <Text style={Styles.balanceAmount}>$100,000.00</Text>
                    </View>

                    {/* Cards Section */}
                    <ScrollView horizontal showsHorizontalScrollIndicator={true} style={Styles.cardsContainer}>
                    {/* Card 1 */}
                    <View style={Styles.cardComp}>
                        <Text>Card 1</Text>
                    </View>

                    {/* Card 2 */}
                    <View style={Styles.cardComp}>
                        <Text>Card 2</Text>
                    </View>

                    {/* Card 3 */}
                    <View style={Styles.cardComp}>
                        <Text>Card 3</Text>
                    </View>
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
                

                {/* Latest Transactions Section */}
                <View style={Styles.transactions}>
                    <Text style={Styles.transactionsHeading}>Latest Transactions</Text>
                    {/* Transaction List - Placeholder */}
                    <ScrollView>
                        <Text>Transaction 1</Text>
                        <Text>Transaction 2</Text>
                        <Text>Transaction 3</Text>
                        {/* Add more transactions as needed */}
                    </ScrollView>
                </View>
            </View>
        </ScrollView>
        
    );
}