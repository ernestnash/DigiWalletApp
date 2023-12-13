import { StatusBar, useState } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import RootNavigator from './app/navigation/RootNavigator';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { CredentialsContext } from './app/components/CredentialsContext';

export default function App() {
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
}

