// AppNavigator.js
import { createStackNavigator } from '@react-navigation/stack';

// import MainContent from '../Navigation/MainContent';

import Hello from '../pages/Hello';

const AppStack = createStackNavigator();

const AppNavigator = () => (
  <AppStack.Navigator>
    <AppStack.Screen 
        name="tobe" 
        component={Hello} 
        options={{ headerShown: true }} />
  </AppStack.Navigator>
);

export default AppNavigator;
