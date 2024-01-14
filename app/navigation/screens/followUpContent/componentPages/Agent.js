

import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { mainColor } from '../../../../styles/Styles';

const AgentPage = ({ navigation, route }) => {
  const [agent, setAgent] = useState('');
  
  const transactionType = route.params?.transactionType || 'Unknown';

  const handleNext = () => {
    console.log('Agent:', agent);
    const { transactionType, account_number } = route.params;
    console.log('Transaction Type:', transactionType);
    console.log('Account Number:', account_number);
    // const { agent: agentParam, account_number, transactionType } = route.params;
    navigation.navigate('Amount', { agent: agent, transactionType, account_number });
};
  

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={`Enter ${route.params.transactionType === 'Deposit' ? 'Agent' : 'ATM'} number`}
        value={agent}
        onChangeText={(text) => setAgent(text)}
      />
      <Button title="Next" color={mainColor} onPress={handleNext} />
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
    width: 200,
    borderBottomWidth: 1,
    marginBottom: 20,
  },
});

export default AgentPage;
