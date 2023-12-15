import * as React from "react";

import { View, Text, TouchableOpacity } from "react-native";

export default function Home({navigation}) {

    


    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text
                onPress={() => alert('This is the "Home" Screen')}
            style={{fontSize: 28, fontWeight: 'bold'}}>Home Screen</Text>

        </View>
    );
}