// RootNavigator.js
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';
import PinVerification from './screens/PinVerification';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import { CredentialsContext } from '../components/CredentialsContext';

const PinVerificationStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="PinVerification" component={PinVerification} options={{ headerShown: false }} />
    <Stack.Screen name="AppNavigator" component={AppNavigator} options={{ headerShown: false }} />
  </Stack.Navigator>
);


const RootNavigator = ({ isAuthenticated }) =>  {
    return (
        <CredentialsContext.Consumer>
          {({ storedCredentials }) => (
            <NavigationContainer>
              {storedCredentials ? (
                <PinVerificationStack />
              ) : (
                <AuthNavigator />
              )}
            </NavigationContainer>
          )}
        </CredentialsContext.Consumer>
      );
}

export default RootNavigator;

