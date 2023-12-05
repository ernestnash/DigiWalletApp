import { StyleSheet, Dimensions } from "react-native";

const {height} = Dimensions.get("window");

const ExternalStyles = StyleSheet.create({
    DisplayImage: {
      backgroundColor: '#4a77aa',
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
    },
    welcomeText: {
      color: '#4a77aa',
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
      color: '#4a77aa',
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
      padding: 20,
      marginTop: 20,
      borderRadius: 5,
      backgroundColor: '#4a77aa',
      color: '#fff',
    },
    buttonHello: {
      width: 200,
      alignItems: 'center',
      padding: 20,
      marginTop: 20,
      borderRadius: 5,
      backgroundColor: '#4a77aa',
      color: '#fff',
    },
    activity: {
      marginTop: 10,
      color: '#4a77aa',
    },
    
  })


export default ExternalStyles;