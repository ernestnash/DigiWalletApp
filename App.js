// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// import { NavigationContainer } from '@react-navigation/native';

// import AuthNavigator from './app/pages/AuthNavigator';
// import AppNavigator from './app/pages/AppNavigator';

// export default function App() {
//   return (

//     <NavigationContainer>
//       {isAuthenticated ? <AppNavigator /> : <AuthNavigator />}
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // backgroundColor: '#D45',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

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
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  // // Check authentication status using AsyncStorage
  // useEffect(() => {
  //   // check if the user is authenticated
  //   const userToken = /* Retrieve user token from storage */;
  //   setIsAuthenticated(!!userToken);
  // }, []);

  return (
    <CredentialsContext.Provider value={{storedCredentials, setStoredCredentials}}>
        <RootNavigator />
    </CredentialsContext.Provider> 
  );
};

