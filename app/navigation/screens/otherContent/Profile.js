import * as React from "react";

import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { useState, useEffect} from 'react';

import Styles, { mainColor } from "../../../styles/Styles";

import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Profile({navigation}) {

    const [userInfo, setUserInfo] = useState({});

    const [phone_number, setPhoneNumber] = useState('');
    const [pin, setPin] = useState('');

    const onPressLogout = async () => {
        try {
          await AsyncStorage.clear();
          setUserInfo({});
          setPhoneNumber("");
          setPin("");
          navigation.navigate('Login')
        }catch(error) {
            console.error('Error clearing AsyncStorage', error)
        }
        // localStorage.clear();
      };

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text
                onPress={() => alert('This is the "Profile" Screen')}
                style={{fontSize: 28, fontWeight: 'bold'}}>Profile Screen</Text>

            <SafeAreaView style={Styles.profile}>
                <Text>
                    User Details
                </Text>
                <SafeAreaView style={ {borderRadius: 100, borderWidth: 2, width: 100, height: 100, backgroundColor: mainColor, borderColor: mainColor} }>
                    <Text>T</Text>
                </SafeAreaView>
            </SafeAreaView>
            <SafeAreaView style={Styles.profile}>
                <Text>
                    User Details
                </Text>
            </SafeAreaView>

            <TouchableOpacity style={Styles.buttonHello}
                onPress={onPressLogout}>
                <Text>Logout</Text>
            </TouchableOpacity>
        </View>
    );
}