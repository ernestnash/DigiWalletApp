// ConfirmationPage.js

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ConfirmationPage = ({ route }) => {
  const { agent, amount, transactionType } = route.params;

  const handleConfirm = () => {
    console.log(`${transactionType} confirmed!`);
    console.log('Agent:', agent);
    console.log('Amount:', amount);
  };

  return (
    <View style={styles.container}>
      <Text>{`Confirm ${transactionType}`}</Text>
      <Text>{`${transactionType === 'Deposit' ? 'Agent Number' : 'Sender'}: ${agent}`}</Text>
      <Text>Amount: {amount}</Text>
      <Button title="Confirm" onPress={handleConfirm} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ConfirmationPage;
