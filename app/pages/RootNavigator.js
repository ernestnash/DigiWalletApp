// RootNavigator.js
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';

import { CredentialsContext } from '../components/CredentialsContext';

const RootNavigator = ({ isAuthenticated }) => (
    <CredentialsContext.Consumer>
        {({storedCredentials}) => (
            <NavigationContainer>
                {storedCredentials ?(
                    <AppNavigator/>
                    ): ( <>
                        <AuthNavigator/>
                    </>)
                }
            </NavigationContainer>
        )}
    </CredentialsContext.Consumer>
    
);

export default RootNavigator;
