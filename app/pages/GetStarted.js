import { View, Text, SafeAreaView, TouchableOpacity, Image } from "react-native";
import { StatusBar } from "expo-status-bar";

import Styles from "../styles/Styles";

export default function GetStarted({navigation}) {

    const onPressLogin = () => {
        navigation.navigate('Login');
    };
    const onPressSignup = () => {
        navigation.navigate('Register');
    };

    return (
        <View style={Styles.container}>
            <SafeAreaView>
                <Image source={require('./../../assets/Logo-300x284-1.png')} />
            </SafeAreaView>
            <Text style={Styles.heroText}>
                Welcome to DigiWallet
            </Text>
            <TouchableOpacity style={Styles.buttonHello} onPress={onPressLogin}>
                <Text style={Styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.buttonHello} onPress={onPressSignup}>
                <Text style={Styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            
            <StatusBar style="auto"/>
        </View>

    );
}