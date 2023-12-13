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
      
    
  })


export default Styles;