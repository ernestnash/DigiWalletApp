// components/MyComponent.js
import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const Registration = ({ message }) => {
  return (
    <View style={styles.Register}>
      <Text style={styles.heading}>Log in to DigiWallet</Text>
      <TextInput
              style={styles.textInput}
              placeholder='Account Number'
              underlineColorAndroid={'transparent'}
            />
      <TextInput
              style={styles.textInput}
              placeholder='Pin'
              secureTextEntry={true}
              underlineColorAndroid={'transparent'}
            />
      <Text style={styles.link}>Don't have an account?</Text>
      <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>LogIn</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Register: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 8,
    marginTop: 60
  },
  heading: {
    fontSize: 18,
    color: '#333',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 20,
  },
  link: {
    color: '#D5212A',
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
    backgroundColor: '#D5212A',
    color: '#fff',
  }
});

export default Registration;