import { StatusBar } from 'expo-status-bar';
import {  View } from 'react-native';
import LoginComponent from '../components/LoginComponent';

import ExternalStyles from '../components/ExternalStyles';

export default function Login({navigation}) {
  return (
    <View style={ExternalStyles.container}>
      <LoginComponent navigation={ navigation }/>
      <StatusBar style="auto" />
    </View>
  );
}


