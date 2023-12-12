import * as React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from "react-native-vector-icons/FontAwesome";

// screens
import Home from "./Screens/Home";
import Cheques from "./Screens/Cheques";
import Reports from "./Screens/Reports";
import Transactions from "./Screens/Transactions";
import Profile from "./Screens/Profile";

// screen names
const homeName = "Home";
const transactionsName = "Transactions";
const chequesName = "Cheques";
const reportsName = "Reports";
const profileName = "Profile";

const mainColor = '#5063BF';


const Tab = createBottomTabNavigator();

export default function MainContent() {
    return(
        <Tab.Navigator
            initialRouteName="homeName"
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if(rn === homeName) {
                        iconName = focused ? 'home' : 'home'
                    } else if(rn === transactionsName) {
                        iconName = focused ? 'list-ol' : 'list-ol'
                    } else if(rn === chequesName) {
                        iconName = focused ? 'file-text-o' : 'file-text-o'
                    } else if(rn === reportsName) {
                        iconName = focused ? 'line-chart' : 'line-chart'
                    } else if(rn === profileName) {
                        iconName = focused ? 'user-circle-o' : 'user-circle-o'
                    } 

                    return <FontAwesome name={iconName} size={size} color={color} />
                }
            })}
                tabBarOptions={{
                    activeTintColor: mainColor,
                    inactiveTintColor: 'grey',
                }}
            >

            <Tab.Screen
                name={homeName}
                component={Home}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name={transactionsName}
                component={Transactions}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name={chequesName}
                component={Cheques}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name={reportsName}
                component={Reports}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name={profileName}
                component={Profile}
                options={{ headerShown: false }}
            />

        </Tab.Navigator>
    );
}

