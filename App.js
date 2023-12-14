import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { useState, useEffect } from 'react';

import * as SplashScreen from 'expo-splash-screen';

import RootNavigator from './app/navigation/RootNavigator';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { CredentialsContext } from './app/components/CredentialsContext';
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appReady, setAppReady] = useState(false);
  const [storedCredentials, setStoredCredentials] = useState("");

  useEffect(() => {
    const checkLoginCredentials = async () => {
      try {
        const result = await AsyncStorage.getItem('digiWalletCredentials');
        if (result !== null) {
          setStoredCredentials(JSON.parse(result));
        } else {
          setStoredCredentials(null);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setAppReady(true);
        SplashScreen.hideAsync();
      }
    };

    checkLoginCredentials();
  }, []);
  
  return (
    <CredentialsContext.Provider 
        value={{storedCredentials, setStoredCredentials}}>
        <RootNavigator />
    </CredentialsContext.Provider> 
  );
}

