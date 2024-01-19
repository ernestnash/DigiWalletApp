import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Styles, { mainColor, width } from '../../../../styles/Styles';
import { useIsFocused } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AccountNumber = ({ navigation, route }) => {
  const [expenditureAccount, setExpenditureAccount] = useState('');
  const isFocused = useIsFocused();

  const { originAccount, expenditureType, accountNumber, selectedOption, payBillNumber } = route.params || {};

  const handleDigitPress = (value) => {
    setExpenditureAccount((prevExpenditureAccount) => prevExpenditureAccount + value);
  };

  const handleNext = () => {
    if (expenditureAccount.trim() === '') {
      alert('Please enter an account number.');
    } else {
    //   console.log('Origin Account:', originAccount);
      console.log('Expenditure Account:', expenditureAccount);
      console.log('Expenditure Type:', expenditureType);
      console.log('Account Number:', accountNumber);
      console.log('Selected Option:', selectedOption);
      console.log('PayBill Number:', payBillNumber);

      // Navigate to the AmountPage and pass necessary parameters
      navigation.navigate('AmountPageConsumable', {
        accountNumber,
        expenditureType,
        selectedOption,
        payBillNumber,
        expenditureAccount,
        clearExpenditureAccount: true,
      });
    }
  };

  useEffect(() => {
    if (!isFocused) {
      console.log('Account Number page is unmounted');
      setExpenditureAccount('');
    }
  }, [isFocused]);

  useEffect(() => {
    console.log('Route params changes:', route.params);
    if (route.params?.clearExpenditureAccount) {
      console.log('Clearing Expenditure Account in AccountNumber Page');
      setExpenditureAccount('');
    }
  }, [route.params?.clearExpenditureAccount]);

  const isNextButtonDisabled = expenditureAccount.trim() === '';

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={{ ...Styles.headerContainer, width: width }}>
        {/* Back Button */}
        <TouchableOpacity style={{ ...Styles.backButton, marginLeft: 0 }} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={30} color={mainColor} />
        </TouchableOpacity>

        {/* Title */}
        <Text style={Styles.nTitle}>Enter Acc. Number</Text>
      </View>

      <TextInput
        showSoftInputOnFocus={false}
        style={styles.input}
        placeholder={`Enter Account Number`}
        value={expenditureAccount}
        onChangeText={(text) => setExpenditureAccount(text)}
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
        <TouchableOpacity style={styles.iconButton} onPress={() => setExpenditureAccount('')}>
          <Ionicons name="close-outline" size={28} color="#e74c3c" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleDigitPress(0)}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={() => setExpenditureAccount(expenditureAccount.slice(0, -1))}>
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

export default AccountNumber;
