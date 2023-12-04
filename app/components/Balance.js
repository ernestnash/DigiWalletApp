// components/MyComponent.js
import React from 'react';
import { View, StyleSheet, Text} from 'react-native';

const Balance = () => {
  return (
    <View style={styles.displayBalance}>

        <Text 
            style={styles.balance}
        > Balance </Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  displayBalance: {
    backgroundColor: '#991029',
    padding: 10,
    borderRadius: 50,
  },
  balance: {
    padding: 40,
    color: '#fff',
  }
  
});

export default Balance;