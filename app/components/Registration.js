// components/MyComponent.js
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const Registration = ({navigation}) => {
  const onPressSignup = () => {
    navigation.navigate('Dashboard');
  };
  const onPressText = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={styles.Register}>
      <Text style={styles.heading}>Sign Up for DigiWallet</Text>
      <TextInput
              style={styles.textInput}
              placeholder='Enter Full Name'
              underlineColorAndroid={'transparent'}
            />
      <TextInput
              style={styles.textInput}
              placeholder='Enter Phone Number'
              underlineColorAndroid={'transparent'}
            />
      <TextInput
              style={styles.textInput}
              placeholder='Enter Pin'
              secureTextEntry={true}
              underlineColorAndroid={'transparent'}
            />
      <Text style={styles.link} onPress={onPressText}>Already have an account?</Text>
      <TouchableOpacity 
        style={styles.button}
        onPress={onPressSignup}>
            <Text style={styles.text}>Sign Up</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  Register: {
    backgroundColor: '#f1f1f1',
    padding: 10,
    borderRadius: 8,
  },
  heading: {
    fontSize: 30,
    color: '#333',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 20,
  },
  link: {
    color: '#991029',
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 15,
  },
  text: {
    color: '#fff',
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 15,
  },
  textInput: {
    height: 45,
    width: 320,
    padding: 8,
    margin: 10,
    borderColor: '#343A40',
    borderWidth: 1,
    borderRadius: 5,
  },
  button: {
    alignItems: 'center',
    padding: 20,
    marginTop: 20,
    borderRadius: 5,
    backgroundColor: '#991029',
    color: '#fff',
  }
});

export default Registration;