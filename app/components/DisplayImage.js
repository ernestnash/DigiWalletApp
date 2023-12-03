// components/MyComponent.js
import React from 'react';
import { View, Image, StyleSheet} from 'react-native';

const DisplayImage = ({ message }) => {
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
    // backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 8,
  },
  logo: {
    width: 60,
    height: 60,
    padding: 40,
    marginBottom: 40,
  }
  
});

export default DisplayImage;