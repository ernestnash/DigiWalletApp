// AppNavigator.js
import { createStackNavigator } from '@react-navigation/stack';

import MainContent from './screens/MainContent';
import LoginScreen from '../components/LoginComponent';

const AppStack = createStackNavigator();

const AppNavigator = () => (
  <AppStack.Navigator>
    <AppStack.Screen 
        name="Home" 
        component={MainContent} 
        options={{ headerShown: false }} />
  </AppStack.Navigator>
);

export default AppNavigator;
