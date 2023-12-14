import { StyleSheet, Dimensions } from "react-native";
const {height, width} = Dimensions.get("window");


export const mainColor = '#5063BF';
const primaryText = '#fff';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: mainColor,
      },
      minorText: {
        color: primaryText,
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 15,
      },
      buttonText: {
        color: mainColor,
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: "bold",
      },
      buttonText2: {
        color: primaryText,
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: "bold",
      },
      heroText: {
        color: primaryText,
        margin: 50,
        fontSize: 30,
        fontWeight: 'bold',
      },
      buttonHello: {
        width: 200,
        alignItems: 'center',
        padding: 16,
        marginTop: 60,
        backgroundColor: primaryText,
        borderRadius: 30,
      },
      button: {
        alignItems: 'center',
        padding: 16,
        marginTop: 20,
        borderRadius: 5,
        backgroundColor: mainColor,
        color: primaryText,
      },
      textInput: {
        height: 45,
        width: 320,
        padding: 8,
        margin: 10,
        borderColor: '#343A40',
        borderBottomWidth: 1,
        // borderWidth: 1,
        // borderRadius: 5,
      },
      activity: {
        marginTop: 10,
      },
      formContainer: {
        backgroundColor: '#f1f1f1',
        padding: 10,
        borderRadius: 10,
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
      
    
  })


export default Styles;