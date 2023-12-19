import { StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");


export const mainColor = '#5063BF';
const primaryText = '#fff';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: mainColor,
  },
  contentContainer: {
    backgroundColor: primaryText,
  },
  specialContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    // borderColor: '#343A40',
    borderBottomWidth: 2,
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
    marginTop: 20,
  },

  profile: {
    margin: 20,
    width: width,
    height: height / 3,
    // backgroundColor: 'red',
    borderWidth: 2,
    borderColor: '#D4D4D4',
  },
  // home screen
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  balanceContainer: {
    alignItems: 'center',
    marginTop: 0,
  },
  balanceHeading: {
    fontSize: 12,
    fontWeight: '400',
    color: mainColor,
  },
  balanceAmount: {
    fontSize: 25,
    fontWeight: 'bold',
    color: mainColor,
    marginBottom: 10,
  },
  cardsContainer: {
    width: width,
    marginTop: 5,
    height: 10,
    padding: 10,
    // backgroundColor: 'grey',
  },
  cardComp: {
    width: width / 2, 
    height: 80, 
    backgroundColor: mainColor, 
    marginRight: 10,
    borderRadius: 10,
    justifyContent: 'flex-start',
    padding: 20,
  },
  quickActionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  quickActionButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.9,
    shadowRadius: 2,
    elevation: 5,
  },
  topContainer: {
    marginTop: 20,
    height: height / 2.5,
    top: 0,
  },
  transactions: {
    marginTop: 40,
    height: height / 2,
    bottom: 0,
  },
  transactionsHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  // transactions screen
  transactions: {
    flex: 1,
    padding: 16,
  },
  transactionsHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  transactionName: {
    flex: 1,
  },
  incomeAmount: {
    color: 'green',
  },
  expenseAmount: {
    color: 'red',
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    margin: 4
  },
  // end transactions screen


})


export default Styles;