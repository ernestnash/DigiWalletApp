import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DisplayImage from '../components/DisplayImage';
import LoginComponent from '../components/LoginComponent';

export default function Login() {
  return (
    <View style={styles.container}>
      <LoginComponent />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

