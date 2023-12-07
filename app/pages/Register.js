import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Registration from '../components/Registration';
import ExternalStyles from '../components/ExternalStyles';


export default function Register({ navigation }) {

  return (
    <View style={ExternalStyles.container}>
      <Registration navigation={ navigation }/>
      <StatusBar style="auto" />
    </View>
  );
}
