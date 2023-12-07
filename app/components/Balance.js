// components/MyComponent.js
import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import ExternalStyles from './ExternalStyles';

const Balance = () => {
  return (
    <View style={ExternalStyles.displayBalance}>
        <Text style={ExternalStyles.balance}> 
          Balance
        </Text>
        <Text style={ExternalStyles.balance}>2000</Text>
    </View>
  );
};


export default Balance;