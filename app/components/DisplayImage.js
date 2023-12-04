// components/MyComponent.js
import React from 'react';
import { View, Image, StyleSheet} from 'react-native';

const DisplayImage = () => {
  return (
    <View style={styles.DisplayImage}>

        <Image 
            style={styles.logo}
            source={{ uri: 'https://digisoftsolutions.co.ke/wp-content/uploads/2022/05/Logo-300x284-1.png'}}
        />
      
    </View>
  );
};

const styles = StyleSheet.create({
  DisplayImage: {
    backgroundColor: '#D5212A',
    padding: 10,
    borderRadius: 50,
  },
  logo: {
    width: 200,
    height: 190,
    padding: 40,
    marginBottom: 40,
    marginTop: 1,
  }
  
});

export default DisplayImage;