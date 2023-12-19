
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
// import { SafeAreaView } from 'react-native-safe-area-context';

import Styles from "../../../styles/Styles";

export default function Cards({ navigation }) {

    const BankCard = ({ style }) => {
        return (
            <ScrollView vertical showsVerticalScrollIndicator={true} style={{padding: 10}}>
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
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>

                {/* Title */}
                <Text style={Styles.nTitle}>Cards</Text>
            </View>

            <SafeAreaView>
                <BankCard />
                <BankCard style={{ color: 'green'}}/>
            </SafeAreaView>
        </View>
    );
}





