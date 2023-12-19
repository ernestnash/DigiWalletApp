import * as React from "react";
import { View, TouchableOpacity, ScrollView, Text } from "react-native";
import Styles, { mainColor } from "../../../styles/Styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import DropDownPicker from "react-native-dropdown-picker";
import { LineChart } from "react-native-chart-kit";

export default function Reports({ navigation }) {
    const nav = useNavigation();

    // Dummy data for the chart
    const chartData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43],
            },
        ],
    };

    return (
        <ScrollView
            vertical
            showsVerticalScrollIndicator={true}
            style={Styles.contentContainer}
        >
            <View style={Styles.specialContainer}>
                <View style={Styles.topContainer}>
                    {/* Header Section */}
                    <View style={Styles.header}>
                        <TouchableOpacity
                            style={{ paddingLeft: 10 }}
                            onPress={() => nav.openDrawer()}
                        >
                            <Ionicons name="menu-outline" size={30} color={mainColor} />
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{ paddingRight: 10 }}
                            onPress={() => navigation.navigate("Notifications")}
                        >
                            <Ionicons
                                name="notifications-outline"
                                size={30}
                                color={mainColor}
                            />
                        </TouchableOpacity>
                    </View>

                    {/* Filter Section */}
                    <View style={Styles.filterContainer}>
                        <TouchableOpacity
                            style={Styles.filterIcon}
                            onPress={() => console.log("Filter icon pressed")}
                        >
                            <Ionicons name="options-outline" size={25} color={mainColor} />
                        </TouchableOpacity>
                        <View style={Styles.dropdownContainer}>
                            <DropDownPicker
                                items={[
                                    { label: "Last 7 days", value: "7" },
                                    { label: "Last 30 days", value: "30" },
                                    { label: "Last 3 months", value: "90" },
                                ]}
                                defaultValue="7"
                                containerStyle={{ height: 40 }}
                                style={Styles.dropdown}
                                itemStyle={{
                                    justifyContent: "flex-start",
                                }}
                                dropDownStyle={Styles.dropdownList}
                                onChangeItem={(item) =>
                                    console.log("Selected duration:", item.value)
                                }
                            />
                        </View>
                    </View>

                    {/* Date Picker Section */}
                    <View style={Styles.datePickerContainer}>
                        {/* Add your date picker component here */}
                        <Text>Date Picker Placeholder</Text>
                    </View>
                </View>

                {/* Chart Section */}
                <View style={Styles.chartContainer}>
                    {/* <LineChart
                        data={chartData}
                        width={Styles.chart.width}
                        height={220}
                        yAxisLabel="$"
                        chartConfig={{
                            backgroundColor: '#fff',
                            backgroundGradientFrom: "#eff3ff",
                            backgroundGradientTo: "#efefef",
                            decimalPlaces: 2, // optional, defaults to 2dp
                            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                            style: {
                                borderRadius: 16,
                            },
                            propsForDots: {
                                r: "6",
                                strokeWidth: "2",
                                stroke: "#ffa726",
                            },
                        }}
                    /> */}
                </View>


            </View>
        </ScrollView>
    );
}
