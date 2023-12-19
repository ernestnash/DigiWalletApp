import { StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");


export const mainColor = '#5063BF';
const primaryText = '#fff';
const profileImageSize = 100;

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
    marginTop: 50,
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
    width: "100%",
  },
  textInput: {
    height: 45,
    width: "85%",
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
    width: "85%",
    alignItems: 'center'
  },
  heading: {
    fontSize: 25,
    color: '#333',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 20,
    fontWeight: 'bold',
  },
  link: {
    color: mainColor,
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 15,
    marginTop: 20,
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
  whiteText: {
    color: '#fff'
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
  headerTransactions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 10,
    marginTop: 40,
  },
  transactions: {
    flex: 1,
    padding: 16,
  },
  transactionsHeading: {
    fontSize: 20,
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
    margin: 10,
  },
  quickActionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  quickAction: {
    alignItems: 'center',
  },
  quickActionIcon: {
    fontSize: 24,
  },
  quickActionLabel: {
    marginBottom: 5,
    fontSize: 12,
  },
  transactionsHeader: {
    alignItems: 'center',
    margin: 20,
  },
  quickAction: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  quickActionIcon: {
    fontSize: 24,
  },
  quickActionInner: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
  },
  quickActionLabel: {
    marginTop: 5,
    fontSize: 12,
    textAlign: 'center',
    flexWrap: 'wrap',
  },
  // end transactions screen
  // Profile screen
  profileContainer: {
    marginTop: 20,
    padding: 20,
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 2,
  },
  userDetailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    width: width / 1.2,
  },
  profileImageContainer: {
    marginRight: 20,
  },
  profileImage: {
    borderRadius: 50,
    borderWidth: 2,
    width: 70,
    height: 70,
    backgroundColor: mainColor,
    borderColor: mainColor,
    justifyContent: "center",
    alignItems: "center",
  },
  profileImageText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  userInfo: {
    marginLeft: 60,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  accountNumber: {
    fontSize: 14,
    marginBottom: 5,
  },
  phoneNumber: {
    fontSize: 14,
  },
  separator2: {
    height: 1,
    width: "100%",
    backgroundColor: "#ccc",
    marginVertical: 15,
  },
  settingsContainer: {
    marginTop: 5,
    alignItems: "center",
  },
  securityButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 15,
  },
  securityButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: mainColor,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  // bank card
  logo: {
    position: "absolute",
    top: 16,
    right: 16,
  },
  
  bankCard: {
    backgroundColor: mainColor,
    borderRadius: 10,
    padding: 16,
    width: "100%",
    position: "relative",
  },
  
  bankCardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  
  bankCardHeaderText: {
    color: "white",
    fontSize: 16,
    marginLeft: 8,
  },
  
  bankCardBody: {
    position: "relative",
    padding: 10,
    width: 300,
  },
  
  bankCardText: {
    color: "white",
    marginBottom: 8,
    fontWeight: "700",
    fontSize: 15,
  },
  // end profile screen

  // halfScreen: {
  //   height: height / 4,
  // },

  // reports screen
  chart: {
    width: "95%", // Adjust the width as needed
    backgroundColor: "#ffffff",
    backgroundGradientFrom: "#ffffff",
    backgroundGradientTo: "#ffffff",
  },
  chartContainer: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  filterContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  filterIcon: {
    marginRight: 10,
  },
  dropdownContainer: {
    flex: 1,
  },
  dropdown: {
    backgroundColor: "#fafafa",
    borderColor: "#ccc",
  },
  dropdownList: {
    backgroundColor: "#fafafa",
  },
  datePickerContainer: {
    marginTop: 10,
  },

  // notifications screen
  notificationContainer: {
    marginBottom: 16,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'transparent',
    backgroundColor:'#fff',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  notificationTextContainer: {
    flex: 1,
  },
  notificationHeading: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  unopenedIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'red',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    // backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  backButton: {
    marginRight: 16,
  },
  nTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  notificationsContainer: {
    flex: 1,
    paddingTop: 24,
  },

  
})


export default Styles;