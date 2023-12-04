import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DisplayImage from '../components/DisplayImage';
import LoginComponent from '../components/LoginComponent';

// import Registration from './app/components/Registration';
// import DisplayImage from './app/components/DisplayImage';

export default function Login() {
  return (
    <View style={styles.container}>
      <DisplayImage/>
      <LoginComponent />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D5212A',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
