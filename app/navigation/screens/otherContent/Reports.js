import * as React from "react";

import { View, Text } from "react-native";


export default function Reports({navigation}) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text
                onPress={() => alert('This is the "Reports" Screen')}
                style={{fontSize: 28, fontWeight: 'bold'}}>Reports Screen</Text>
        </View>
    );
}