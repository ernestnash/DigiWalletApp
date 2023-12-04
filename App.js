import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Hello from './app/pages/Hello';
import Login from './app/pages/Login';
import Register from './app/pages/Register';

const Stack = createStackNavigator();

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Hello />
    //   <StatusBar style="auto" />
    // </View>

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
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Register" 
          component={Register} 
          options={{ headerShown: false }}
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
