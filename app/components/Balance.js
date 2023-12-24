import React, { useEffect, useState } from "react";

import { View, Text } from "react-native";

import Styles from "../styles/Styles";

export default function Balance({ userId }) {
    const [balance, setBalance] = useState(0);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch the balance when the component mounts
        fetch(`http://192.168.106.76:8000/api/account/${userId}/balance`)
            .then((response) => response.json())
            .then((data) => {
                console.log("API Response:", data);

                if (data && data.balance !== undefined) {
                    setBalance(parseFloat(data.balance));
                } else {
                    console.error("Balance not found or is undefined in API response:", data);
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
