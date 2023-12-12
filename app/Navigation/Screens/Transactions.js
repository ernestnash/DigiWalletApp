import * as React from "react";

import { View, Text } from "react-native";


export default function Transactions({navigation}) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text
                onPress={() => alert('This is the "Transactions" Screen')}
                style={{fontSize: 28, fontWeight: 'bold'}}>Transactions Screen</Text>
        </View>
    );
}