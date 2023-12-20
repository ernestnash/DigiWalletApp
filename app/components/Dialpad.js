import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Styles, { mainColor } from '../styles/Styles';

export default function Dialpad({ navigation, route }) {
    const [inputValue, setInputValue] = useState('');
    const [pressedButton, setPressedButton] = useState(null);
    const [heading, setHeading] = useState('DialPad'); // Set an initial heading

    const { params } = route;
    const updateHeading = params ? params.updateHeading : null;

    const handleButtonPress = (value) => {
        setInputValue((prevValue) => prevValue + value);
        resetButtonStyles();
        
        if (updateHeading) {
            const newHeading = updateHeading(value);
            setHeading(newHeading);
        }
    };

    const handleDelete = () => {
        setInputValue((prevValue) => prevValue.slice(0, -1));
        resetButtonStyles();
    };

    const handleCancel = () => {
        setInputValue('');
        resetButtonStyles();
    };

    const resetButtonStyles = () => {
        setPressedButton(null);
        // Add a small delay to give time for the button press color to revert before resetting
        setTimeout(() => {
            setPressedButton(null);
        }, 20);
    };

    const getButtonStyles = (buttonValue) => {
        return [
            Styles.dialPadButton,
            { borderColor: pressedButton === buttonValue ? 'transparent' : 'black' },
            pressedButton === buttonValue && Styles.buttonPressed,
        ];
    };

    const handleDonePress = () => {
        // Implement the logic for the "Done" button
        alert('Done button pressed');
        // Reset pressedButton after a short delay (e.g., 100 milliseconds)
        setTimeout(() => {
            resetButtonStyles();
        }, 100);
    };

    return (
        <View style={Styles.notificationsContainer}>
            {/* Header */}
            <View style={Styles.headerContainer}>
                {/* Back Button */}
                <TouchableOpacity
                    style={Styles.backButton}
                    onPress={() => navigation.goBack()}>
                    <Ionicons name="chevron-back-circle" size={30} color={mainColor} />
                </TouchableOpacity>

                {/* Title */}
                <Text style={Styles.nTitle}>{heading}</Text>
            </View>
            <View style={Styles.dialPadContainer}>
                {/* Input area */}
                <Text>Send Money</Text>
                <TextInput
                    style={Styles.textInput}
                    value={inputValue}
                    placeholder="Enter number"
                    keyboardType="numeric"
                    editable={false}
                />

                {/* Buttons */}
                <View style={Styles.buttonContainer}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 'Cancel', 0, 'Delete'].map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            style={getButtonStyles(item)}
                            onPress={() => {
                                if (typeof item === 'number' || item === '0') {
                                    handleButtonPress(item.toString());
                                } else if (item === 'Delete') {
                                    handleDelete();
                                } else if (item === 'Cancel') {
                                    handleCancel();
                                }
                                setPressedButton(item);
                            }}
                        >
                            {item === 'Delete' ? (
                                <Ionicons name="backspace-outline" size={24} color="white" />
                            ) : item === 'Cancel' ? (
                                <Ionicons name="close-outline" size={24} color="white" />
                            ) : (
                                <Text style={Styles.buttonText}>{item}</Text>
                            )}
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Done button */}
                <TouchableOpacity
                    style={[Styles.button, { backgroundColor: mainColor }]}
                    onPress={handleDonePress}
                >
                    <Text style={Styles.buttonText}>Done</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
