import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import Styles from '../styles/Styles';
import ipAddress from '../api/Api';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { mainColor } from '../styles/Styles';

export default function Balance({ userId, onBalanceChange, refreshBalance }) {
  const [balance, setBalance] = useState(0);
  const [isLoading, setLoading] = useState(true);
  const [showBalance, setShowBalance] = useState(true);

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

  const formattedBalance = balance.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const toggleBalanceVisibility = () => {
    setShowBalance(!showBalance);
  };

  return (
    <View style={Styles.balanceContainer}>
      <Text style={Styles.balanceHeading}>Available Balance</Text>
      {isLoading ? (
        <ActivityIndicator size="large" color={mainColor} />
      ) : (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {showBalance ? (
            <Text style={Styles.balanceAmount}>Ksh. {formattedBalance}</Text>
          ) : (
            <Text style={Styles.balanceAmount}>Ksh. ******</Text>
          )}
          <TouchableOpacity onPress={toggleBalanceVisibility} style={Styles.profileIcon}>
            <Ionicons name={showBalance ? 'eye-off' : 'eye'} size={28} color={mainColor} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}