import React from 'react';
import { View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Styles, { mainColor } from '../../../styles/Styles';

export default function TransactionDetails({ route }) {
    const { transaction } = route.params;

    return (
        <View style={Styles.DetailsContainer}>
            <View style={Styles.blueBackground}>
                {/* Icon for sharing at the top right corner */}
                <Ionicons
                    name="share-social"
                    size={30}
                    color="white"
                    style={Styles.shareIcon}
                />
            </View>
            <View style={Styles.cardContainer}>
                {/* Adjust the marginTop value to control the overlap */}
                <View style={[Styles.card, { marginTop: -50 }]}>
                    <View style={Styles.logoContainer}>
                        {/* Placeholder logo */}
                        <Ionicons
                            name="checkmark-circle-outline"
                            size={100}
                            color={mainColor}
                        />
                    </View>
                    
                    {/* Transfer Successful text centered with bigger font and padding */}
                    <Text style={Styles.transferSuccessfulText}>
                        Transfer Successful
                    </Text>

                    {/* Separator */}
                    <View style={Styles.separator} />

                    <View style={Styles.detailsContainer}>
                        {/* Transaction details */}
                        <View style={Styles.detailRow}>
                            <Text style={Styles.detailLabel}>Name:</Text>
                            <Text style={Styles.detailContent}>{/*{transaction.name}*/} Self</Text>
                        </View>
                        <View style={Styles.detailRow}>
                            <Text style={Styles.detailLabel}>Amount:</Text>
                            <Text style={Styles.detailContent}>{transaction.amount}</Text>
                        </View>
                        <View style={Styles.detailRow}>
                            <Text style={Styles.detailLabel}>Type:</Text>
                            <Text style={Styles.detailContent}>{transaction.transaction_type}</Text>
                        </View>
                    </View>

                    {/* New card for profile picture, recipient's name, account number, and date */}
                    <View style={Styles.innerCard}>
                        {/* Placeholder icon for profile picture */}
                        <Ionicons
                            name="person-circle-outline"
                            size={40}
                            color={mainColor}
                            style={Styles.profileIcon}
                        />
                        <View style={Styles.innerCardDetails}>
                            <Text style={Styles.innerCardName}>Recipient: John Doe</Text>
                            <Text style={Styles.innerCardText}>Account Number: 1234567890</Text>
                        </View>
                    </View>

                    {/* Separator */}
                    <View style={Styles.separator} />

                    {/* Date of the transfer */}
                    <Text style={Styles.dateText}>Date: {new Date().toLocaleDateString()}</Text>
                </View>
            </View>
        </View>
    );
}
