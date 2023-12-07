
import React, { useState, useEffect } from 'react';
import RootNavigator from './app/pages/RootNavigator';

import AppLoading from 'expo-app-loading';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { CredentialsContext } from './app/components/CredentialsContext';

export default function App () {
  const [appReady, setAppReady] = useState(false);
  const [storedCredentials, setStoredCredentials] = useState("");

  const checkLoginCredentials = () => {
    AsyncStorage
      .getItem('digiWalletCredentials')
      .then((result) => {
        if(result !== null) {
          setStoredCredentials(JSON.parse(result));
        } else {
          setStoredCredentials(null);
        }
      })
      .catch(error => console.log(error))
  }
  if(!appReady) {
    return (
    <AppLoading
      startAsync={checkLoginCredentials}
      onFinish={() =>setAppReady(true)}
      onError={console.warn}
    />)
  }
  
  return (
    <CredentialsContext.Provider 
        value={{storedCredentials, setStoredCredentials}}>
        <RootNavigator />
    </CredentialsContext.Provider> 
  );
};

