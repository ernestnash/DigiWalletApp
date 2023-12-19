
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { useState, useEffect } from "react";
import Styles, { mainColor } from "../../../styles/Styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
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
            

            <SafeAreaView style={Styles.halfScreen}>

            </SafeAreaView>
            <View style={Styles.separator2} />
            <SafeAreaView style={Styles.settingsContainer}>
            <Text style={Styles.transactionsHeading}>Quick Settings</Text>
                <View style={Styles.securityButtonsContainer}>
                    <TouchableOpacity style={Styles.securityButton}>
                        <Text>Change PIN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.securityButton}>
                        <Text>Security Questions</Text>
                    </TouchableOpacity>
                </View>


                <View style={Styles.separator2} />


                <TouchableOpacity
                    style={Styles.button}
                    onPress={onPressLogout}
                >
                    <Text>Logout</Text>
                </TouchableOpacity>


            </SafeAreaView>
        </View>
    );
}
