// AuthNavigator.js
import { createStackNavigator } from '@react-navigation/stack';

import Hello from '../pages/Hello';
import GetStarted from '../pages/GetStarted';
import Login from '../components/LoginComponent';
import Register from '../components/Registration';

const AuthStack = createStackNavigator();

const AuthNavigator = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen 
          name="Hello" 
          component={Hello} 
          options={{ headerShown: false }} />
    <AuthStack.Screen 
          name="GetStarted" 
          component={GetStarted} 
          options={{ headerShown: false }} />
    <AuthStack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerShown: false }} />
    <AuthStack.Screen 
          name="Register" 
          component={Register} 
          options={{ headerShown: false }} />
  </AuthStack.Navigator>
);

export default AuthNavigator;
