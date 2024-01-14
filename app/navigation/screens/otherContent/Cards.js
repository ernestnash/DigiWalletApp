
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
// import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';

import Styles, { mainColor } from "../../../styles/Styles";

import { CredentialsContext } from "../../../components/CredentialsContext";

import { useContext } from "react";

export default function Cards({ navigation }) {

    const { storedCredentials } = useContext(CredentialsContext);
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        setUserInfo(storedCredentials.user_data || {});
        // setPhoneNumber(storedCredentials.phone_number || "");
        // setPin(storedCredentials.pin || "");
    }, [storedCredentials]);

    const BankCard = ({ style }) => {
        return (
            <ScrollView vertical showsVerticalScrollIndicator={true} style={{ padding: 10 }}>
                <View style={Styles.bankCard}>
                    <View style={Styles.bankCardHeader}>
                        <Ionicons name="card-outline" size={24} color="white" />
                        <Text style={Styles.bankCardHeaderText}>1234 **** **** 5678</Text>
                    </View>
                    <View style={Styles.bankCardBody}>
                        {/* Logo on the top right */}
                        <Ionicons name="logo-usd" size={24} color="white" style={Styles.logo} />

                        {/* Card Holder Name */}
                        <Text style={Styles.bankCardText}>Holder's Name: {userInfo.full_name || ''}</Text>

                        {/* Expiry Date */}
                        <Text style={Styles.bankCardText}>Expiry Date: 12/25</Text>

                        {/* Account Number at the bottom left */}
                        <Text style={Styles.bankCardText}>Account: {userInfo.id || ''}</Text>
                    </View>
                </View>
            </ScrollView>
        );
    };

    return (
        <View style={Styles.notificationsContainer}>
            {/* Header */}
            <View style={Styles.headerContainer}>
                {/* Back Button */}
                <TouchableOpacity
                    style={Styles.backButton}
                    onPress={() => navigation.goBack()}>
                    <Ionicons name="chevron-back-circle" size={30} color={mainColor} />
                </TouchableOpacity>

                {/* Title */}
                <Text style={Styles.nTitle}>Cards</Text>
            </View>

            <SafeAreaView>
                <BankCard />
                <BankCard style={{ color: 'green' }} />
                <ScrollView vertical showsVerticalScrollIndicator={true} style={{ padding: 10 }}>
                    <View style={Styles.blankCard}>
                        <View style={Styles.blankCardAdd}>
                            <Ionicons name="add-circle-outline" size={60} color={mainColor} />
                            <Text style={Styles.nTitle}>Add New Card</Text>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}





