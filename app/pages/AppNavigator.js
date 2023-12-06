// AppNavigator.js
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from './Dashboard';

const AppStack = createStackNavigator();

const AppNavigator = () => (
  <AppStack.Navigator>
    <AppStack.Screen 
        name="Dashboard" 
        component={Dashboard} 
        options={{ headerShown: false }} />
  </AppStack.Navigator>
);

export default AppNavigator;
