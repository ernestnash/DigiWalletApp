
import { View, Text, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import Styles, { mainColor } from '../../../styles/Styles';
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";


const transactionsData = [
    { id: '1', name: 'John Doe', amount: 100.00, type: 'in' },
    { id: '2', name: 'Jane Smith', amount: -50.00, type: 'out' },
    { id: '3', name: 'Alice Johnson', amount: 75.00, type: 'in' },
    { id: '4', name: 'John Doe', amount: 100.00, type: 'in' },
    { id: '5', name: 'Jane Smith', amount: -50.00, type: 'out' },
    { id: '6', name: 'Alice Johnson', amount: 75.00, type: 'in' },
    { id: '7', name: 'John Doe', amount: 100.00, type: 'in' },
    { id: '8', name: 'Jane Smith', amount: -50.00, type: 'out' },
    { id: '9', name: 'Alice Johnson', amount: 75.00, type: 'in' },
    // Add more transactions as needed
];

const TransactionItem = ({ name, amount, type }) => (
    <View style={Styles.transactionItem}>
        <Text style={Styles.transactionName}>{name}</Text>
        <Text style={type === 'in' ? Styles.incomeAmount : Styles.expenseAmount}>
            {type === 'out' ? '-' : '+'} ${Math.abs(amount).toFixed(2)}
        </Text>
    </View>
);

const QuickAction = ({ label, onPress, icon }) => (
    <TouchableOpacity style={Styles.quickAction} onPress={onPress}>
        <View style={Styles.quickActionInner}>
            <Ionicons name={icon} size={24} color={mainColor} style={Styles.quickActionIcon} />
            <Text style={Styles.quickActionLabel}>{label}</Text>
        </View>
    </TouchableOpacity>
);

export default function Transactions({ navigation }) {
    const handleQuickAction = (action) => {
        // Implement logic for each quick action
        alert(`Performing ${action} action`);
    };

    const nav = useNavigation();
    return (
        <ScrollView vertical showsVerticalScrollIndicator={true} style={Styles.contentContainer}>
            {/* <View style={Styles.specialContainer}>
                <View style={Styles.topContainer}> */}
                    {/* Header Section */}
                    <View style={Styles.headerTransactions}>

                        <TouchableOpacity style={{ paddingLeft: 10 }} onPress={() => nav.openDrawer()}>
                            <Ionicons name="menu-outline" size={30} color={mainColor} />
                        </TouchableOpacity>

                        {/* <View style={Styles.transactionsHeader}>
                    <Text style={Styles.transactionsHeading}>Transactions</Text>
                </View> */}

                        <TouchableOpacity style={{ paddingRight: 10 }} onPress={() => navigation.navigate('Notifications')}>
                            <Ionicons name="notifications-outline" size={30} color={mainColor} />
                        </TouchableOpacity>
                    </View>

                    {/* Balance Section */}
                    <View style={Styles.balanceContainer}>
                        <Text style={Styles.balanceHeading}>Balance</Text>
                        <Text style={Styles.balanceAmount}>Ksh. 100,000.00</Text>
                    </View>

                    <View style={Styles.quickActionsContainer}>
                        <QuickAction label="Transfer Money" onPress={() => handleQuickAction('Transfer Money')} icon="swap-horizontal-outline" />
                        <QuickAction label="Send Money" onPress={() => handleQuickAction('Send Money')} icon="send-outline" />
                        <QuickAction label="Buy Airtime" onPress={() => handleQuickAction('Buy Airtime')} icon="phone-portrait-outline" />
                        {/* Add more QuickAction components as needed */}
                    </View>
                    {/* Add new quick actions here */}
                    <View style={Styles.quickActionsContainer}>
                        <QuickAction label="Deposit Money" onPress={() => handleQuickAction('Deposit Money')} icon="arrow-up-outline" />
                        <QuickAction label="Cheques" onPress={() => handleQuickAction('Cheques')} icon="cash-outline" />
                        <QuickAction label="Withdraw Money" onPress={() => handleQuickAction('Withdraw Money')} icon="arrow-down-outline" />
                        {/* Add more QuickAction components as needed */}
                    </View>
                    <View style={Styles.quickActionsContainer}>
                        <QuickAction label="Financial Tips" onPress={() => handleQuickAction('Financial Tips')} icon="bulb-outline" />
                        <QuickAction label="Pay Bills" onPress={() => handleQuickAction('Pay Bills')} icon="card-outline" />
                        <QuickAction label="Pay Bills" onPress={() => handleQuickAction('Pay Bills')} icon="card-outline" />
                    </View>
                {/* </View> */}

                <View style={Styles.transactions}>
                    <Text style={Styles.transactionsHeading}>Recent Transactions</Text>
                    <FlatList
                        data={transactionsData}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <TransactionItem name={item.name} amount={item.amount} type={item.type} />
                        )}
                        ItemSeparatorComponent={() => <View style={Styles.separator} />}
                    />
                </View>
            {/* </View> */}
        </ScrollView>

    );
};



