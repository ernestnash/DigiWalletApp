
import React, { useState, useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Styles, { mainColor } from '../../../styles/Styles';
import { ScrollView } from 'react-native-gesture-handler';

import { CredentialsContext } from '../../../components/CredentialsContext';
import Header from '../../../components/Header';

const Reports = ({ navigation }) => {

    const { storedCredentials } = useContext(CredentialsContext);


    // Dummy data for active cheques
    const [cheques, setCheques] = useState([
        { id: '1', payee: 'John Doe', accountNumber: '123456789', date: '2024-01-16', status: 'Pending' },
        { id: '2', payee: 'Jane Smith', accountNumber: '987654321', date: '2024-01-17', status: 'Cleared' },
        // Add more cheques as needed
    ]);

    const renderChequeItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigateToChequeDetails(item)}>
            <View style={styles.chequeItem}>
                <View>
                    <Text>{`Payee: ${item.payee}`}</Text>
                    <Text>{`Account Number: ${item.accountNumber}`}</Text>
                </View>
                <View>
                    <Text>{`Date: ${item.date}`}</Text>
                    <Text>{`Status: ${item.status}`}</Text>
                </View>

                {/* Add more details if needed */}
            </View>
        </TouchableOpacity>
    );

    const ChequeDetails = ({ style }) => {
        return (
            <ScrollView vertical showsVerticalScrollIndicator={true} style={{ padding: 10 }}>
                <View style={Styles.bankCard}>
                    <View style={Styles.bankCardHeader}>
                        <Ionicons name="card-outline" size={24} color="white" />
                        <Text style={Styles.bankCardHeaderText}>1234 **** **** 5678</Text>
                    </View>
                    <View style={Styles.bankCardBody}>
                        
                        <Ionicons name="logo-usd" size={24} color="white" style={Styles.logo} />

                        <Text style={Styles.bankCardText}>Paid to: John Doe</Text>

                        {/* Expiry Date */}
                        <Text style={Styles.bankCardText}>Valid Till: 12/25</Text>

                        <Text style={Styles.bankCardText}>Account: 12345678</Text>

                        <Text style={Styles.bankCardText}>Cheque No: 12345678</Text>
                    </View>
                </View>
            </ScrollView>
        );
    };

    const navigateToChequeDetails = (cheque) => {
        // You can navigate to a different screen here and pass the cheque details
        // For example, using React Navigation:
        // navigation.navigate('ChequeDetails', { cheque });
    };


    return (
        <ScrollView vertical showsVerticalScrollIndicator={true} style={Styles.contentContainer}>

            <Header/>

            <ChequeDetails/>

            <View style={Styles.addAndFilterContainer}>
                {/* Add Button */}
                <TouchableOpacity
                    style={Styles.addButton}
                // onPress={() => /* Handle the add action here */}
                >
                    <Ionicons name="add-outline" size={35} color={mainColor} />
                </TouchableOpacity>

                {/* Filter Button */}
                <TouchableOpacity
                    style={Styles.filterButton}
                // onPress={() => /* Handle the filter action here */}
                >
                    <Ionicons name="filter" size={35} color={mainColor} />
                </TouchableOpacity>
            </View>

            <ScrollView>
                {/* Bottom Section - List of Active Cheques */}
                <FlatList
                    data={cheques}
                    keyExtractor={(item) => item.id}
                    renderItem={renderChequeItem}
                />
            </ScrollView>


        </ScrollView>
    );
};

const styles = StyleSheet.create({
    chequeItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
});

export default Reports;
