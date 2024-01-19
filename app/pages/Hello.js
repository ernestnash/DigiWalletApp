import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, SafeAreaView} from 'react-native';
import { Image } from 'react-native';
import { primaryText } from '../styles/Styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Styles from '../styles/Styles';


export default function Hello({navigation}) {

    const onPressGetStarted = () => {
        navigation.navigate('GetStarted');
    };

  return (
      <View style={Styles.container}>
        <SafeAreaView>
          <View >
            <Image source={require('./../../assets/1.png')} />
          </View>
        </SafeAreaView>
        <Text style={Styles.heroText}>
          Welcome to DigiWallet
        </Text>
        <TouchableOpacity style={{...Styles.buttonHello, width: 150, borderRadius: 75}} onPress={onPressGetStarted}>
          {/* <Text style={{...Styles.buttonText, color: '#fff'}}>Get Started</Text> */}
          <Ionicons
                            name="arrow-forward"
                            size={50}
                            color={primaryText}
                        />
        </TouchableOpacity>

        <StatusBar style="auto" />
      </View>
  );
}
