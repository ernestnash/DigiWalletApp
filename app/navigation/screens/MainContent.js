
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import { DrawerActions } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Home, Transactions, Cheques, Profile, Reports, Notifications } from "./otherContent/Index";
import { mainColor } from "../../styles/Styles";

// screen names
const homeName = "Home";
const transactionsName = "Transactions";
const chequesName = "Cheques";
const reportsName = "Reports";
const profileName = "Profile";

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
  
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItem
          label="Close Drawer"
          icon={() => <Ionicons name="close-outline" size={24} color="black" />}
          onPress={closeDrawer}
        />
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    );
  };

export function MainContent() {


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
            >

            <Tab.Screen
                name={homeName}
                component={Home}
                options={{ headerShown: false}}
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
    return(
        <Drawer.Navigator initialRouteName="Home"  drawerContent={(props) => <CustomDrawerContent {...props} />}>
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
