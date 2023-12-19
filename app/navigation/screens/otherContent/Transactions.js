// import * as React from "react";

// import { View, Text } from "react-native";


// export default function Transactions({navigation}) {
//     return (
//         <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//             <Text
//                 onPress={() => alert('This is the "Transactions" Screen')}
//                 style={{fontSize: 28, fontWeight: 'bold'}}>Transactions Screen</Text>
//         </View>
//     );
// }


import { View, Text, FlatList, ScrollView } from 'react-native';
import Styles from '../../../styles/Styles';

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

export default function Transactions({navigation}) {
  return (
    <ScrollView vertical showsVerticalScrollIndicator={true} style={Styles.contentContainer}>
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
    </ScrollView>
    
  );
};



