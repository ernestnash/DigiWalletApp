import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { mainColor } from '../../../../styles/Styles';

const AccountNumber = ({ navigation, route }) => {
    const [destinationAccount, setDestinationAccount] = useState('');

    const originAccount = route.params?.originAccount || 'Unknown';

    const handleNext = () => {
        console.log('Origin Account:', originAccount);
        console.log('Destination Account:', destinationAccount);
        // Navigate to the AmountPage and pass originAccount, account_number, and transferTo
        navigation.navigate('AmountPage', { originAccount, destinationAccount });
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={`Enter Recipient number`}
                value={destinationAccount}
                onChangeText={(text) => setDestinationAccount(text)}
            />
            <Button title="Next" color={mainColor} onPress={handleNext} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: 200,
        borderBottomWidth: 1,
        marginBottom: 20,
    },
});

export default AccountNumber;
