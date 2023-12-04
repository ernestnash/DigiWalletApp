import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DisplayImage from '../components/DisplayImage';
import Registration from '../components/Registration';


export default function Register() {
  return (
    <View style={styles.container}>
      <DisplayImage/>
      <Registration />
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
