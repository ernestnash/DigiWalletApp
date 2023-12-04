import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';



export default function Dashboard({ navigation }) {
  return (
      <View style={styles.container}>
        <Text style={styles.welcomeText}>
          Welcome to User Dashboard
        </Text>

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
  welcomeText: {
    color: '#991029',
    margin: 50,
    fontSize: 30,
    fontWeight: 'bold',
  },
});
