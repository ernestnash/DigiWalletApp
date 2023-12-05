// components/MyComponent.js
import React from 'react';
import { View, Image, StyleSheet} from 'react-native';

import ExternalStyles from './ExternalStyles';

const DisplayImage = () => {
  return (
    <View style={ExternalStyles.DisplayImage}>

        <Image 
            style={ExternalStyles.logo}
            source={{ uri: 'https://digisoftsolutions.co.ke/wp-content/uploads/2022/05/Logo-300x284-1.png'}}
        />
      
    </View>
  );
};


export default DisplayImage;