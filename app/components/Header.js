import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Styles, { mainColor } from '../styles/Styles'; 
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 
import { CredentialsContext } from './CredentialsContext';
import { useContext } from 'react';

export default function Header() {
    const navigation = useNavigation(); 

    const { storedCredentials } = useContext(CredentialsContext);

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
        // Header Section
        <View style={Styles.headerTransactions}>
            <TouchableOpacity style={{ paddingLeft: 10 }}>
                <Ionicons name="qr-code-outline" size={25} color={mainColor} />
            </TouchableOpacity>

            <TouchableOpacity style={{ paddingRight: 150 }} onPress={() => navigation.navigate('Notifications')}>
                <Ionicons name="notifications-outline" size={30} color={mainColor} />
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 10 }}>
                <View style={{ flexDirection: 'column', marginRight: 10, marginTop: 5 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{getGreeting()},</Text>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{`${storedCredentials.user_data.full_name || 'User'}`}</Text>
                </View>
                <Ionicons name="person-circle-outline" size={50} color={mainColor} />
            </View>
        </View>
    );
}
