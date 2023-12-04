import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import DisplayImage from '../components/DisplayImage';
import Login from './Login';
import Register from './Register';


export default function Hello({ navigation }) {
  const onPressLogin = () => {
    navigation.navigate('Login');
  };
  const onPressSignup = () => {
    navigation.navigate('Register');
  };
  return (
      <View style={styles.container}>
        <DisplayImage />
        <Text style={styles.welcomeText}>
          Welcome to DigiWallet
        </Text>
        <TouchableOpacity style={styles.button} onPress={onPressLogin}>
          <Text style={styles.text}>logIn</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onPressSignup}>
          <Text style={styles.text}>SignUp</Text>
        </TouchableOpacity>

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
  welcomeText: {
    color: '#d5212a',
    margin: 50,
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
  button: {
    alignItems: 'center',
    width: 200,
    padding: 15,
    marginTop: 20,
    borderRadius: 5,
    backgroundColor: '#D5212A',
    color: '#fff',
  }
});
