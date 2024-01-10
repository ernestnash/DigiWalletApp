import React, { useEffect, useState } from "react";

import { View, Text } from "react-native";

import Styles from "../styles/Styles";

import ipAddress from "../api/Api";

export default function Balance({ userId }) {
    const [balance, setBalance] = useState(0);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${ipAddress}/account/${userId}/balance`)
            .then((response) => response.json())  // Use response.json() to parse the JSON automatically
            .then((jsonData) => {
                console.log("Parsed JSON Data:", jsonData);
    
                if (jsonData && jsonData.balance !== undefined) {
                    setBalance(parseFloat(jsonData.balance));
                } else {
                    console.error("Balance not found or is undefined in API response:", jsonData);
                }
            })
            .catch((error) => {
                console.error("Error fetching balance:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [userId]);

    return (
        <View style={Styles.balanceContainer}>
            <Text style={Styles.balanceHeading}>Balance</Text>
            {isLoading ? (
                <Text>Loading...</Text>
            ) : (
                <Text style={Styles.balanceAmount}>Ksh. {balance !== undefined ? balance.toFixed(2) : 'N/A'}</Text>
            )}
        </View>
    );
}
