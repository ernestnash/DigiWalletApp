import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import DisplayImage from '../components/DisplayImage';

export default function Hello() {
  return (
    <View style={styles.container}>
      <DisplayImage />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D5212A',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
