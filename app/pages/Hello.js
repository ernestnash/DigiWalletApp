import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, SafeAreaView} from 'react-native';
import { Image } from 'react-native';

import Styles from '../styles/Styles';


export default function Hello({navigation}) {

    const onPressGetStarted = () => {
        navigation.navigate('GetStarted');
    };

  return (
      <View style={Styles.container}>
        <SafeAreaView>
          <View>
            <Image source={require('./../../assets/Logo-300x284-1.png')} />
          </View>
        </SafeAreaView>
        <Text style={Styles.heroText}>
          Welcome to DigiWallet
        </Text>
        <TouchableOpacity style={Styles.buttonHello} onPress={onPressGetStarted}>
          <Text style={Styles.buttonText}>Get Started</Text>
        </TouchableOpacity>

        <StatusBar style="auto" />
      </View>
  );
}
