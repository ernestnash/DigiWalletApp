// RootNavigator.js
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';


import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import { CredentialsContext } from '../components/CredentialsContext';

const RootNavigator = ({ isAuthenticated }) =>  {
    return (
        <CredentialsContext.Consumer>
            {({storedCredentials}) => (
                <NavigationContainer>
                    {storedCredentials ? (
                        <AppNavigator/>
                        ) : ( <>
                            <AuthNavigator/>
                        </>)
                    }
                </NavigationContainer>
            )}
        </CredentialsContext.Consumer>
    );
}

export default RootNavigator;

