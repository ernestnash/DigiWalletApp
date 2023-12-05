import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginComponent from '../components/LoginComponent';

import ExternalStyles from '../components/ExternalStyles';

export default function Login() {
  return (
    <View style={ExternalStyles.container}>
      <LoginComponent />
      <StatusBar style="auto" />
    </View>
  );
}


