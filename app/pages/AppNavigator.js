// AppNavigator.js
import { createStackNavigator } from '@react-navigation/stack';
// import Dashboard from './Dashboard';

import MainContent from '../Navigation/MainContent';

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
