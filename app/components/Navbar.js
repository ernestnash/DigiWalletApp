// components/MyComponent.js
import React from 'react';
import { View, Text} from 'react-native';
import ExternalStyles from './ExternalStyles';

const Navbar = () => {
  return (
    <View style={ExternalStyles.displayMenu}>

        <Text style={ExternalStyles.menu}> 
          Balance {"\n"}
          20000
        </Text>

        <View style={ExternalStyles.round}>
          <Text>ANimated</Text>
        </View>
      
    </View>
  );
};


export default Navbar;