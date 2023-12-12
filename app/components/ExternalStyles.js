import { StyleSheet, Dimensions } from "react-native";

// import { useFonts } from 'expo-font';
import * as Font from 'expo-font';
    
const fetchFonts = () => {
  return Font.loadAsync({
    'JosefinSans-Medium': require('../../assets/Fonts/JosefinSans-Medium.ttf'),
  })
}


const {height, width} = Dimensions.get("window");

const mainColor = '#5063BF';

const ExternalStyles = StyleSheet.create({
    DisplayImage: {
      backgroundColor: mainColor,
      padding: 10,
      borderRadius: 50,
    },
    logo: {
      width: height/2.4,
      height: height/2.5,
      marginBottom: 40,
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'JosefinSans-Medium'
    },
    welcomeText: {
      color: mainColor,
      margin: 50,
      fontSize: 30,
      fontWeight: 'bold',
    },
    text: {
      color: '#fff',
      fontSize: 20,
    },
    Register: {
      backgroundColor: '#f1f1f1',
      padding: 10,
      borderRadius: 8,
    },
    heading: {
      fontSize: 30,
      color: '#333',
      justifyContent: 'center',
      alignSelf: 'center',
      padding: 20,
    },
    link: {
      color: mainColor,
      justifyContent: 'center',
      alignSelf: 'center',
      fontSize: 15,
    },
    text: {
      color: '#fff',
      justifyContent: 'center',
      alignSelf: 'center',
      fontSize: 15,
    },
    textInput: {
      height: 45,
      width: 320,
      padding: 8,
      margin: 10,
      borderColor: '#343A40',
      borderWidth: 1,
      borderRadius: 5,
    },
    button: {
      alignItems: 'center',
      padding: 16,
      marginTop: 20,
      borderRadius: 5,
      backgroundColor: mainColor,
      color: '#fff',
    },
    buttonHello: {
      width: 200,
      alignItems: 'center',
      padding: 16,
      marginTop: 20,
      borderRadius: 5,
      backgroundColor: mainColor,
      color: '#fff',
    },
    activity: {
      marginTop: 10,
    },
    redContainer: {
      // backgroundColor: '#d43',
      height: height/2,
      alignSelf: 'stretch',
      flex: 1
    },
    displayBalance: {
      backgroundColor: mainColor,
      padding: 5,
      width: width/1,
      height: height/5.5,
      borderBottomEndRadius: 10,
      borderBottomLeftRadius: 10,
    },
    displayMenu: {
      backgroundColor: mainColor,
      padding: 10,
      width: width/1,
      height: height/15,
    },
    balance: {
      paddingTop: 10,
      fontSize: 30,
      color: '#fff',
      alignSelf: "center",
      justifyContent: "center",
    },
    menu: {
      width: width/1,
      height: height/15,
    },
    round: {
      backgroundColor: '#d43',
      borderRadius: 20,
    }
    
  })


export default ExternalStyles;