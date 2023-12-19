
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { useState, useEffect } from "react";
import Styles, { mainColor } from "../../../styles/Styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from '@expo/vector-icons';

export default function Profile({ navigation }) {
    const [userInfo, setUserInfo] = useState({});
    const [phone_number, setPhoneNumber] = useState("");
    const [pin, setPin] = useState("");

    const onPressLogout = async () => {
        try {
            await AsyncStorage.clear();
            setUserInfo({});
            setPhoneNumber("");
            setPin("");
            navigation.navigate("AuthNavigator", { screen: 'Login' });
        } catch (error) {
            console.error("Error clearing AsyncStorage", error);
        }
    };

    const BankCard = () => {
        return (
            <View style={Styles.bankCard}>
                <View style={Styles.bankCardHeader}>
                    <Ionicons name="card-outline" size={24} color="white" />
                    <Text style={Styles.bankCardHeaderText}>1234 **** **** 5678</Text>
                </View>
                <View style={Styles.bankCardBody}>
                    {/* Logo on the top right */}
                    <Ionicons name="logo-usd" size={24} color="white" style={Styles.logo} />

                    {/* Card Holder Name */}
                    <Text style={Styles.bankCardText}>Holder's Name: John Doe</Text>

                    {/* Expiry Date */}
                    <Text style={Styles.bankCardText}>Expiry Date: 12/23</Text>

                    {/* Account Number at the bottom left */}
                    <Text style={Styles.bankCardText}>Account: 1234 **** **** 5678</Text>
                </View>
            </View>
        );
    };

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center"}}>
            <Text style={Styles.transactionsHeading}>Profile</Text>
            <Text>Finish Setting up your Profile</Text>
            <SafeAreaView style={Styles.profileContainer}>
                <View style={Styles.userDetailsContainer}>
                    <View style={Styles.profileImageContainer}>
                        <View style={Styles.profileImage}>
                            <Text style={Styles.profileImageText}>T</Text>
                        </View>
                    </View>
                    <View style={Styles.userInfo}>
                        <Text style={Styles.userName}>John Doe</Text>
                        <Text style={Styles.accountNumber}>Account: 123456789</Text>
                        <Text style={Styles.phoneNumber}>Phone: +123 456 789</Text>
                    </View>
                </View>
            </SafeAreaView>

            <View style={Styles.separator2} />

            <TouchableOpacity style={Styles.halfScreen} onPress={() => navigation.navigate('Cards')}>
                <BankCard />
            </TouchableOpacity>
            
            <View style={Styles.separator2} />
            <SafeAreaView style={Styles.settingsContainer}>
                <Text style={Styles.transactionsHeading}>Quick Settings</Text>
                <View style={Styles.securityButtonsContainer}>
                    <TouchableOpacity style={Styles.securityButton}>
                        <Text style={Styles.whiteText}>Change PIN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.securityButton}>
                        <Text style={Styles.whiteText}>Security Questions</Text>
                    </TouchableOpacity>
                </View>


                <View style={Styles.separator2} />


                <TouchableOpacity
                    style={Styles.button}
                    onPress={onPressLogout}
                >
                    <Text style={Styles.whiteText}>Logout</Text>
                </TouchableOpacity>


            </SafeAreaView>
        </View>
    );
}
