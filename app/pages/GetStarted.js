import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";

import Styles from "../styles/Styles";

export default function GetStarted({navigation}) {
    return (
        <View style={Styles.container}>
            <SafeAreaView>
                <Image source={require('./../../assets/Logo-300x284-1.png')} />
            </SafeAreaView>
            <Text style={Styles.heroText}>
                Welcome to DigiWallet
            </Text>
            <TouchableOpacity style={Styles.buttonHello}>
                <Text style={Styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
            
            <StatusBar style="auto"/>
        </View>

    );
}