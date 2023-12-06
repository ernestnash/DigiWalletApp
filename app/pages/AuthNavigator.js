// AuthNavigator.js
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Login';
import Register from './Register';
import Hello from './Hello';

const AuthStack = createStackNavigator();

const AuthNavigator = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen 
          name="Hello" 
          component={Hello} 
          options={{ headerShown: false }} />
    <AuthStack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} />
    <AuthStack.Screen 
          name="Register" 
          component={Register} 
          options={{ headerShown: false }} />
  </AuthStack.Navigator>
);

export default AuthNavigator;
