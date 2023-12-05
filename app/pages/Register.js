import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Registration from '../components/Registration';


export default function Register({ navigation }) {

  return (
    <View style={styles.container}>
      <Registration navigation={ navigation }/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
