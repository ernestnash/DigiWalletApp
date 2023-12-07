import { useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity} from 'react-native';

import Balance from '../components/Balance';
import Navbar from '../components/Navbar';
import ExternalStyles from '../components/ExternalStyles';

import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Dashboard({ navigation }) {
  const [userInfo, setUserInfo] = useState({});

  const [phone_number, setPhoneNumber] = useState('');
  const [pin, setPin] = useState('');

  // const urlData = 'http://192.168.0.49:8000';
  // const id = 1;

  // useEffect(() => {
  //   fetchUserInfo();
  // }, []);

  // const fetchUserInfo = async () => {
  //   try {
  //     const response = await fetch(`${urlData}/users/${id}/data`);
  //     const data = await response.json();
  //     setUserInfo(data);
  //   } catch (error) {
  //     console.error('Error fetching user info:', error);
  //   }
  // };

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
    localStorage.clear();
  };

  return (
      <View style={ExternalStyles.container}>
        <Balance/>
        <View style={ExternalStyles.redContainer}>
          <Text style={ExternalStyles.welcomeText}>
            Welcome to the User Dashboard
            {"\n"}
            Account Number: 
          </Text>
          <TouchableOpacity style={ExternalStyles.buttonHello}
            onPress={onPressLogout}>
            <Text>Logout</Text>
          </TouchableOpacity>
          <View style={ExternalStyles.navbar}>
              <Navbar />
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
  );
}


