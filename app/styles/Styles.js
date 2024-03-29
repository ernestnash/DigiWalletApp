import { StyleSheet, Dimensions } from "react-native";
export const { height, width } = Dimensions.get("window");


export const mainColor = '#5063BF';

export const primaryText = '#fff';
// export const primaryText = '#fff';
export const lightGray = '#d3d3d3';
// const mainColor = '#d6212a';
const profileImageSize = 100;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: primaryText,
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
    color: mainColor,
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 15,
  },
  buttonText: {
    color: primaryText,
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
    color: mainColor,
    margin: 50,
    fontSize: 30,
    fontWeight: 'bold',
  },
  buttonHello: {
    width: 200,
    alignItems: 'center',
    padding: 16,
    marginTop: 50,
    backgroundColor: mainColor,
    borderRadius: 30,
  },
  button: {
    alignItems: 'center',
    padding: 16,
    marginTop: 0,
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
    marginTop: 15,
    paddingHorizontal: 10,
  },
  balanceContent: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  balanceContainer: {
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#ccc',
    padding: 10,
    width: width/1.3,
    borderRadius: 10,
  },
  balanceHeading: {
    fontSize: 15,
    fontWeight: '400',
    color: mainColor,
  },
  balanceAmount: {
    fontSize: 35,
    fontWeight: 'bold',
    color: mainColor,
    marginBottom: 10,
  },
  cardsContainer: {
    width: width,
    marginTop: 5,
    padding: 10,
  },
  cardComp: {
    flex: 1,
    width: width / 2,
    height: 100,
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
    marginTop: 5,
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
    marginBottom: 5,
  },
  quickActionColumn: {
    alignItems: 'center',
  },
  quickActionLabel: {
    textAlign: 'center',
    marginTop: 5,
  },
  topContainer: {
    height: 'auto',
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
    width: width,
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
  quickActionsContainerTrans: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  quickActionsContainerTransLeft: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    marginTop: 20,
    marginRight: (width/3)*2,
  },
  // quickAction: {
  //   alignItems: 'center',
  // },
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
    backgroundColor: '#fff',
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
    borderColor: primaryText,
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
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    flexWrap: "wrap",
    maxWidth: width / 1.5,
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
  blankCard: {
    backgroundColor: primaryText,
    borderRadius: 10,
    borderColor: primaryText,
    padding: 16,
    height: 200,
    width: "100%",
    position: "relative",
  },

  bankCardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  blankCardAdd: {
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    alignContent: 'center',
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
  filterIcon: {
    marginRight: 10,
  },
  filterContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,
    marginTop: 40,
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
  // datetimepicker

  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  dateInput: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    padding: 8,
    flex: 1,
  },
  updateChartButton: {
    backgroundColor: primaryText,
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  updateChartButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  datePickerContainer: {
    marginBottom: 20,
  },

  // notifications screen
  notificationContainer: {
    marginBottom: 16,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'transparent',
    backgroundColor: '#fff',
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
    borderBottomColor: 'transparent',
  },
  backButton: {
    marginRight: 16,
  },
  nTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: mainColor,
  },
  notificationsContainer: {
    flex: 1,
    paddingTop: 24,
  },

  // transaction details

  DetailsContainer: {
    flex: 1,
    maxHeight: height,
    backgroundColor: 'white',
  },
  blueBackground: {
    height: height / 3.5,
    backgroundColor: mainColor,
  },
  cardContainer: {
    padding: 10,
  },
  card: {
    backgroundColor: 'white',
    elevation: 4,
    padding: 16,
    marginTop: -100,
    borderRadius: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  logoContainer: {
    alignItems: 'center',
  },
  detailsContainer: {
    marginVertical: 8,
  },
  detailText: {
    fontSize: 18,
    // fontWeight: 'bold',
  },
  separator: {
    height: 1,
    backgroundColor: 'grey',
    marginVertical: 8,
  },
  readMoreContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  shareIcon: {
    position: 'absolute',
    top: 40,
    right: 30,
  },
  innerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    padding: 20,
  },
  profileIcon: {
    marginRight: 16,
    marginLeft: 10,
  },
  dateText: {
    marginTop: 16,
    fontSize: 16,
  },
  // new

  transferSuccessfulText: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  detailLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  detailContent: {
    fontSize: 18,
  },
  innerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 8,
  },
  innerCardDetails: {
    flex: 1,
    marginLeft: 8,
  },
  innerCardName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  innerCardText: {
    fontSize: 14,
  },


  // end of transaction details


  // dialPad screen

  dialPadContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  dialPadButton: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 40,
    borderColor: 'black',
    borderHeight: 2,
  },
  buttonPressed: {
    backgroundColor: primaryText,
  },
  buttonText: {
    fontSize: 20,
  },

  // No Transactions styles begining

  noTransactionsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  noTransactionsIcon: {
    marginBottom: 10,
  },

  noTransactionsText: {
    color: lightGray,
    fontSize: 18,
    textAlign: 'center',
  },

  // end of no transactions styles

  //transaction items styles

  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white', // Adjust the background color as needed
    // borderBottomWidth: 1,
  },

  transactionTypeIcon: {
    marginRight: 10,
  },

  transactionType: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333', // Adjust the text color as needed
  },

  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333', // Adjust the text color as needed
  },

  //transaction items end of styles

  //error messages styling
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: 8,
    textAlign: 'center',
  },

  // buttons

  confirmButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: primaryText,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    marginTop: 50,
  },
  confirmButtonText: {
    color: 'white',
    fontSize: 18,
  },
  // dialpad
  dialpadContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 0,
  },

  // cheques screen
  addAndFilterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: width-20,
    padding: 10,
    elevation: 0,
  },
  addButton: {

  },
  filterButton: {

  },

})


export default Styles;