import * as React from "react";
import { useState, useEffect} from 'react';

import Styles from "../../../styles/Styles";

import { View, Text, TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home({navigation}) {

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
                onPress={() => alert('This is the "Home" Screen')}
            style={{fontSize: 28, fontWeight: 'bold'}}>Home Screen</Text>

            <TouchableOpacity style={Styles.buttonHello}
                onPress={onPressLogout}>
                <Text>Logout</Text>
            </TouchableOpacity>
        </View>
    );
}