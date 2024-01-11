import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import Styles from '../styles/Styles';
import ipAddress from '../api/Api';

import { mainColor } from '../styles/Styles';

export default function Balance({ userId, onBalanceChange, refreshBalance }) {
  const [balance, setBalance] = useState(0);
  const [isLoading, setLoading] = useState(true);

  const fetchBalance = async () => {
    try {
      const response = await fetch(`${ipAddress}/account/${userId}/balance`);
      const jsonData = await response.json();
  
      if (jsonData && jsonData.balance !== undefined) {
        setBalance(parseFloat(jsonData.balance));
        if (onBalanceChange) {
          onBalanceChange(parseFloat(jsonData.balance));
        }
      } else {
        console.error('Balance not found or is undefined in API response:', jsonData);
      }
    } catch (error) {
      console.error('Error fetching balance:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBalance();
  }, [userId, refreshBalance]); 

  return (
    <View style={Styles.balanceContainer}>
      <Text style={Styles.balanceHeading}>Balance</Text>
      {isLoading ? (
        <ActivityIndicator size="large" color={mainColor} />
      ) : (
        <Text style={Styles.balanceAmount}>Ksh. {balance.toFixed(2)}</Text>
      )}
    </View>
  );
}
