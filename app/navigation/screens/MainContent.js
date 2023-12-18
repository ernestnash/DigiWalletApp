
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import { DrawerActions } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TouchableOpacity, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Home, Transactions, Cheques, Profile, Reports, Notifications } from "./otherContent/Index";
import { mainColor } from "../../styles/Styles";
import { Dimensions } from "react-native";
const { height } = Dimensions.get("window");
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


// screen names
const homeName = "Home";
const transactionsName = "Transactions";
const chequesName = "Cheques";
const reportsName = "Reports";
const profileName = "Profile";
const settingsName = "Settings";
const themeName = "Theme";
const currencyName = "Currency";

const screenOptions = {
    tabBarActiveTintColor: "white",
    tabBarInactiveTintColor: "grey",
    tabBarActiveBackgroundColor: mainColor,
    tabBarItemStyle: { borderRadius: 10 },
    tabBarLabelStyle: { padding: 8, fontSize: 11 },
    tabBarStyle: { padding: 10, margin: 20, borderRadius: 30, height: 65 },
};

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
    const nav = useNavigation();

    const closeDrawer = () => {
        nav.dispatch(DrawerActions.closeDrawer());
    };

    const [userInfo, setUserInfo] = useState({});

    const [phone_number, setPhoneNumber] = useState('');
    const [pin, setPin] = useState('');

    const onPressLogout = async () => {
        try {
          await AsyncStorage.clear();
          setUserInfo({});
          setPhoneNumber("");
          setPin("");
          nav.navigate('Login')
        }catch(error) {
            console.error('Error clearing AsyncStorage', error)
        }
        // localStorage.clear();
      };

    return (

        <View style={{ flex: 1, backgroundColor: mainColor, maxHeight: height}}>
            {/* Drawer header */}
            <View style={{ flexDirection: "row", alignItems: "center", padding: 16, height: height/4 }}>
                {/* Placeholder for profile picture */}
                <FontAwesome name="user-circle-o" size={60} color="white" />
                <Text style={{ color: "white", fontSize: 30, marginLeft: 18 }}>User Name</Text>
            </View>
            <DrawerContentScrollView {...props}>
                <DrawerItem
                    label="Close Drawer"
                    icon={() => <Ionicons name="close-outline" size={24} color="white" />}
                    onPress={closeDrawer} 
                    labelStyle={{ color: "white"}}
                />

                <DrawerItemList {...props} labelStyle={{ color: "white" }}/>

                {/* Placeholder items with icons */}
                <DrawerItem
                    label={settingsName}
                    icon={() => <FontAwesome name="gear" size={24} color="white" />}
                    labelStyle={{ color: "white" }}
                />
                <DrawerItem
                    label={themeName}
                    icon={() => <FontAwesome name="paint-brush" size={24} color="white" />}
                    labelStyle={{ color: "white" }}
                />
                <DrawerItem
                    label={currencyName}
                    icon={() => <FontAwesome name="money" size={24} color="white" />}
                    labelStyle={{ color: "white" }}
                />
                <DrawerItem
                    label={reportsName}
                    icon={() => <FontAwesome name="line-chart" size={24} color="white" />}
                    labelStyle={{ color: "white" }}
                />


                {/* Separator */}
                <View style={{ backgroundColor: "white", height: 1, marginVertical: 8 }} />
                
                {/* Logout button */}
                <DrawerItem
                    label="Logout"
                    icon={() => <FontAwesome name="sign-out" size={24} color="white" />}
                    onPress={onPressLogout}
                    labelStyle={{ color: "white" }}
                />

                {/* Separator */}
                <View style={{ backgroundColor: "white", height: 1, marginVertical: 8 }} />
            </DrawerContentScrollView>
        </View>

    );
};

export function MainContent({navigation}) {


    return (
        <Tab.Navigator
            initialRouteName="homeName"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === homeName) {
                        iconName = focused ? 'home' : 'home'
                    } else if (rn === transactionsName) {
                        iconName = focused ? 'list-ol' : 'list-ol'
                    } else if (rn === chequesName) {
                        iconName = focused ? 'file-text-o' : 'file-text-o'
                    } else if (rn === reportsName) {
                        iconName = focused ? 'line-chart' : 'line-chart'
                    } else if (rn === profileName) {
                        iconName = focused ? 'user-circle-o' : 'user-circle-o'
                    }

                    return <FontAwesome name={iconName} size={size} color={color} />
                }
            })}
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

export default function DrawerNav() {
    const navigation = useNavigation();
    return (
        <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <CustomDrawerContent {...props} />}>
            <Drawer.Screen
                name="DigiWallet"
                component={MainContent}
                options={{ headerShown: false }}
            />
            <Drawer.Screen
                name="Notifications"
                component={Notifications}
                options={{ headerShown: false }}
            />
        </Drawer.Navigator>
    );
}
