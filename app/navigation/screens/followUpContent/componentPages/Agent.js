import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import { mainColor } from '../../../../styles/Styles';

import Ionicons from "react-native-vector-icons/Ionicons";

import Styles from '../../../../styles/Styles';

const AgentPage = ({ navigation, route }) => {
  const [agent, setAgent] = useState('');
  const isFocused = useIsFocused();

  const transactionType = route.params?.transactionType || 'Unknown';

  const handleDigitPress = (value) => {
    setAgent((prevAgent) => prevAgent + value);
  };

  const handleNext = () => {
    if (agent.trim() === '') {
      alert("Please enter an agent number.");
    } else {
      console.log('Agent:', agent);
      const { transactionType, account_number } = route.params;
      console.log('Transaction Type:', transactionType);
      console.log('Account Number:', account_number);

      navigation.navigate('Amount', {
        agent: agent,
        transactionType,
        account_number,
        clearAgent: true,
      });
    }
  };

  useEffect(() => {
    if (!isFocused) {
      console.log('AgentPage unmounted');
      setAgent('');
    }
  }, [isFocused]);

  useEffect(() => {
    console.log('Route params changed:', route.params);
    if (route.params?.clearAgent) {
      console.log('Clearing agent in AgentPage');
      setAgent('');
    }
  }, [route.params?.clearAgent]);

  const isNextButtonDisabled = agent.trim() === '';

  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={{...Styles.headerContainer, width: 400}}>
        {/* Back Button */}
        <TouchableOpacity
          style={{...Styles.backButton, marginLeft: 0}}
          onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={30} color={mainColor} />
        </TouchableOpacity>

        {/* Title */}
        <Text style={Styles.nTitle}>Enter {transactionType === 'Deposit' ? 'Agent' : 'ATM'} number</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder={`Enter ${transactionType === 'Deposit' ? 'Agent' : 'ATM'} number`}
        value={agent}
        keyboardType='none'
        onChangeText={(text) => setAgent(text)}
      />

      {/* Dialpad */}
      <View style={styles.dialpadContainer}>
        {[1, 2, 3].map((value) => (
          <TouchableOpacity key={value} style={styles.button} onPress={() => handleDigitPress(value)}>
            <Text style={styles.buttonText}>{value}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.dialpadContainer}>
        {[4, 5, 6].map((value) => (
          <TouchableOpacity key={value} style={styles.button} onPress={() => handleDigitPress(value)}>
            <Text style={styles.buttonText}>{value}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.dialpadContainer}>
        {[7, 8, 9].map((value) => (
          <TouchableOpacity key={value} style={styles.button} onPress={() => handleDigitPress(value)}>
            <Text style={styles.buttonText}>{value}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.dialpadContainer}>
        <TouchableOpacity style={styles.iconButton} onPress={() => setAgent('')}>
          <Ionicons name="close-outline" size={28} color="#e74c3c" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleDigitPress(0)}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={() => setAgent(agent.slice(0, -1))}>
          <Ionicons name="backspace-outline" size={28} color="#e74c3c" />
        </TouchableOpacity>
      </View>

      <Ionicons
        name="arrow-forward-circle-outline"
        onPress={handleNext}
        size={70}
        color={isNextButtonDisabled ? 'gray' : mainColor}
        style={{ opacity: isNextButtonDisabled ? 0.5 : 1 }}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 300,
    borderBottomWidth: 1,
    marginBottom: 50,
    marginTop: 180,
    fontSize: 20,
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'white',
    borderColor: mainColor,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
  },
  buttonText: {
    color: mainColor,
    fontSize: 28,
  },
  iconButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#e74c3c',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
  },
  dialpadContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
});

export default AgentPage;
