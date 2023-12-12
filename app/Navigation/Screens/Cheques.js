import * as React from "react";

import { View, Text } from "react-native";


export default function Cheques({navigation}) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text
                onPress={() => alert('This is the "Cheques" Screen')}
                style={{fontSize: 28, fontWeight: 'bold'}}>Cheques Screen</Text>
        </View>
    );
}