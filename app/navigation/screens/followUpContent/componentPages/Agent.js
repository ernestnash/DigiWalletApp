// AgentPage.js

import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AgentPage = ({ navigation, route }) => {
  const [agent, setAgent] = useState('');
  
  const transactionType = route.params?.transactionType || 'Unknown';

  const handleNext = () => {
    navigation.navigate('Amount', { agent, transactionType });
  };
  

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={`Enter ${route.params.transactionType === 'Deposit' ? 'Agent' : 'sender'} number`}
        value={agent}
        onChangeText={(text) => setAgent(text)}
      />
      <Button title="Next" onPress={handleNext} />
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
