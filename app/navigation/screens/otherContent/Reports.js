import * as React from "react";
import { View, TouchableOpacity, ScrollView, Text, TouchableWithoutFeedback } from "react-native";
import Styles, { mainColor } from "../../../styles/Styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import { LineChart } from "react-native-chart-kit";
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from "react";
import { useEffect } from "react";
import { Platform } from 'react-native';
import { CredentialsContext } from "../../../components/CredentialsContext";
import { Dimensions } from "react-native";

import { useContext } from "react";

import ipAddress from "../../../api/Api";
import Header from "../../../components/Header";

export default function Reports({ navigation }) {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [showStartDatePicker, setShowStartDatePicker] = useState(false);
    const [showEndDatePicker, setShowEndDatePicker] = useState(false);
    const { storedCredentials } = useContext(CredentialsContext);
    const [userInfo, setUserInfo] = useState({});

    // Retrieve the user ID from the CredentialsContext
    const userId = storedCredentials ? storedCredentials.user_id : null;

    const [transactions, setTransactions] = useState([]);

    // Initial chart data
    const initialChartData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                data: [20, 45, 28, 80, 89, 43],
            },
        ],
    };

    const [chartData, setChartData] = useState(initialChartData);

    useEffect(() => {
        // Fetch transactions from API based on startDate and endDate
        const fetchTransactions = async () => {
            try {
                // Make an API request to server to get user transactions based on userId
                const response = await fetch(`${ipAddress}/user/${userId}/transactions`);
                const data = await response.json();

                if (response.ok) {
                    // Check if the response contains an error message
                    if (data.error) {
                        console.error('Error fetching transactions:', data.error);
                    } else {
                        // Set transactions if there is no error
                        setTransactions(data.transactions || []);
                    }
                } else {
                    // Handle error, show a message, or perform other actions
                    console.error('Error fetching transactions:', data.error);
                }
            } catch (error) {
                console.error('Error fetching transactions:', error.message);
            }
        };

        fetchTransactions();
    }, [startDate, endDate]);

    // Update chart data whenever transactions change
    useEffect(() => {
        // Extract dates and amounts from transactions and update the chartData
        const updatedChartData = transformTransactions(transactions);
        setChartData(updatedChartData);
    }, [transactions]);

    const transformTransactions = (transactions) => {
        const last30Days = new Date();
        last30Days.setDate(last30Days.getDate() - 30);

        const filteredTransactions = transactions.filter(
            (transaction) => new Date(transaction.created_at) >= last30Days
        );

        const groupedTransactions = {};
        filteredTransactions.forEach((transaction) => {
            const date = new Date(transaction.created_at).toISOString().split('T')[0];
            if (!groupedTransactions[date]) {
                groupedTransactions[date] = 0;
            }
            groupedTransactions[date] += parseFloat(transaction.amount);
        });

        const sortedDates = Object.keys(groupedTransactions).sort();
        const labels = sortedDates.map((date) => new Date(date).getTime());
        const data = sortedDates.map((date) => groupedTransactions[date]);

        return {
            labels: labels.map((timestamp) => new Date(timestamp).toISOString()), // Convert timestamps back to ISO strings
            datasets: [
                {
                    data,
                },
            ],
        };
    };




    const updateChart = () => {
        console.log("Selected Start Date:", startDate);
        console.log("Selected End Date:", endDate);
        console.log("Chart Data:", chartData);

    };

    const showStartDatepicker = () => {
        setShowStartDatePicker(true);
    };

    const showEndDatepicker = () => {
        setShowEndDatePicker(true);
    };

    const handleStartDateChange = (event, selectedDate) => {
        // setShowStartDatePicker(Platform.OS === 'ios');
        if (selectedDate) {
            setStartDate(selectedDate);
        }
    };

    const handleEndDateChange = (event, selectedDate) => {
        // setShowEndDatePicker(Platform.OS === 'ios');
        if (selectedDate) {
            setEndDate(selectedDate);
        }
    };

    // Function to determine the greeting based on the time of day
    const getGreeting = () => {
        const hour = new Date().getHours();

        if (hour >= 5 && hour < 12) {
            return 'Good Morning';
        } else if (hour >= 12 && hour < 16) {
            return 'Good Afternoon';
        } else {
            return 'Good Evening';
        }
    };

    return (
        <ScrollView vertical showsVerticalScrollIndicator={true} style={Styles.contentContainer}>

            <Header />

            {/* Filter and Date Picker Section */}
            <View style={Styles.filterContainer}>
                <TouchableWithoutFeedback onPress={showStartDatepicker}>
                    <View style={[Styles.dateInput, { flex: 0.8, marginLeft: 5 }]}>
                        <Text>From: {startDate.toISOString().split('T')[0]}</Text>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={showEndDatepicker}>
                    <View style={[Styles.dateInput, { flex: 0.8, marginLeft: 5 }]}>
                        <Text>To: {endDate.toISOString().split('T')[0]}</Text>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableOpacity
                    style={[Styles.filterIcon, { marginLeft: 5, marginRight: 5 }]}
                    onPress={() => console.log("Filter icon pressed")}
                >
                    <Ionicons name="options-outline" size={25} color={mainColor} />
                </TouchableOpacity>
            </View>

            {/* DateTimePickers */}
            {showStartDatePicker && (
                <DateTimePicker
                    value={startDate}
                    mode="date"
                    is24Hour={true}
                    display="default"
                    onChange={handleStartDateChange}
                />
            )}

            {showEndDatePicker && (
                <DateTimePicker
                    value={endDate}
                    mode="date"
                    is24Hour={true}
                    display="default"
                    onChange={handleEndDateChange}
                />
            )}

            {/* Update Chart Button */}
            <TouchableOpacity
                style={[Styles.updateChartButton, { alignSelf: 'center', marginTop: 10 }]}
                onPress={updateChart}
            >
                <Text style={Styles.updateChartButtonText}>Update Chart</Text>
            </TouchableOpacity>

            {/* Chart Section */}
            <View style={Styles.chartContainer}>
                {/* <Text>In</Text> */}
                <LineChart
                    data={chartData}
                    width={Dimensions.get('window').width}
                    height={320}
                    withInnerLines={false}
                    yAxisLabel="Ksh"
                    chartConfig={{
                        backgroundColor: '#fff',
                        backgroundGradientFrom: "#fff",
                        backgroundGradientTo: "#fff",
                        decimalPlaces: 2,
                        color: (opacity = 1) => mainColor,
                        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                        style: {
                            borderRadius: 16,
                        },
                        propsForDots: {
                            r: "2",
                            strokeWidth: "2",
                            stroke: mainColor,
                        },
                        propsForVerticalLabels: {
                            fontSize: 10,
                            fill: mainColor,
                        },
                        propsForHorizontalLabels: {
                            fontSize: 10,
                            fill: mainColor,
                        },
                        showGridLines: false,
                    }}
                    bezier
                    style={{
                        marginVertical: 8,
                        borderRadius: 16,
                    }}
                    formatXLabel={(value, index, labels) => {
                        if (labels && labels.length > 0) {
                            const date = new Date(value);
                            return `${date.getDate()}/${date.getMonth() + 1}`;
                        }
                        return "";
                    }}





                />
            </View>
        </ScrollView>
    );
}
