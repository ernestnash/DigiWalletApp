// AppNavigator.js
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from './Dashboard';

const AppStack = createStackNavigator();

const AppNavigator = () => (
  <AppStack.Navigator>
    <AppStack.Screen 
        name="Home" 
        component={Dashboard} 
        options={{ headerShown: true }} />
  </AppStack.Navigator>
);

export default AppNavigator;
