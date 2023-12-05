import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Hello from './app/pages/Hello';
import Login from './app/pages/Login';
import Register from './app/pages/Register';
import Dashboard from './app/pages/Dashboard';

const Stack = createStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Hello" 
          component={Hello} 
          options={{ headerShown: false }} // Hide the header for the Hello screen
        />
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerShown: false }} // Hide the header for the Login screen
        />
        <Stack.Screen 
          name="Register" 
          component={Register} 
          options={{ headerShown: false }} // Hide the header for the Register screen
        />
        <Stack.Screen 
          name="Dashboard" 
          component={Dashboard} 
          options={{ headerShown: false }} // Hide the header for the Dashboard screen
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#D45',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
