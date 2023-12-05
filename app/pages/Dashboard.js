import { useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import Balance from '../components/Balance';
import Navbar from '../components/Navbar';
import ExternalStyles from '../components/ExternalStyles';



export default function Dashboard({ navigation }) {
  const [userInfo, setUserInfo] = useState({});
  const urlData = 'http://192.168.0.49:8000';
  const id = 1;

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const fetchUserInfo = async () => {
    try {
      const response = await fetch(`${urlData}/users/${id}/data`);
      const data = await response.json();
      setUserInfo(data);
    } catch (error) {
      console.error('Error fetching user info:', error);
    }
  };
  return (
      <View style={ExternalStyles.container}>
        <Balance/>
        <View style={ExternalStyles.redContainer}>
          <Text style={ExternalStyles.welcomeText}>
            Welcome to the User Dashboard
            {"\n"}
            Account Number: {userInfo.id}
          </Text>
          <View style={ExternalStyles.navbar}>
              <Navbar />
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
  );
}


