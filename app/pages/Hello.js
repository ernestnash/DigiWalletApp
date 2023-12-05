import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, SafeAreaView} from 'react-native';

import DisplayImage from '../components/DisplayImage';

import ExternalStyles from '../components/ExternalStyles';


export default function Hello({ navigation }) {
  const onPressLogin = () => {
    navigation.navigate('Login');
  };
  const onPressSignup = () => {
    navigation.navigate('Register');
  };
  return (
      <View style={ExternalStyles.container}>
        <SafeAreaView>
          <View>
            <DisplayImage/>
          </View>
        </SafeAreaView>
        <Text style={ExternalStyles.welcomeText}>
          Welcome to DigiWallet
        </Text>
        <TouchableOpacity style={ExternalStyles.buttonHello} onPress={onPressLogin}>
          <Text style={ExternalStyles.text}>logIn</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ExternalStyles.buttonHello} onPress={onPressSignup}>
          <Text style={ExternalStyles.text}>SignUp</Text>
        </TouchableOpacity>

        <StatusBar style="auto" />
      </View>
  );
}
