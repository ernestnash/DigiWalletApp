
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Styles, { mainColor } from '../../../styles/Styles';// Import styles from styles.js

export default function Notifications({ navigation }) {
    const dummyNotifications = [
        {
            id: 1,
            type: 'new',
            heading: 'New Notification 1',
            body: 'This is the body of the new notification 1',
            opened: false,
        },
        {
            id: 2,
            type: 'new',
            heading: 'New Notification 2',
            body: 'This is the body of the new notification 2',
            opened: true,
        },
        {
            id: 3,
            type: 'new',
            heading: 'New Notification 3',
            body: 'This is the body of the new notification 3',
            opened: false,
        },
    ];

    return (
        <View style={Styles.notificationsContainer}>
            {/* Header */}
            <View style={Styles.headerContainer}>
                {/* Back Button */}
                <TouchableOpacity
                    style={Styles.backButton}
                    onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>

                {/* Title */}
                <Text style={Styles.nTitle}>Notifications</Text>
            </View>

            {/* Notifications */}
            <ScrollView style={{ paddingHorizontal: 16, marginTop: 16 }}>
                {dummyNotifications.map((notification) => (
                    <TouchableOpacity
                        key={notification.id}
                        style={Styles.notificationContainer}>
                        <View style={Styles.notificationTextContainer}>
                            {/* Notification Heading */}
                            <Text style={Styles.notificationHeading}>
                                {notification.heading}
                            </Text>

                            {/* Notification Body */}
                            <Text>{notification.body}</Text>
                        </View>

                        {/* Type Icon (Replace with actual icon based on the type) */}
                        <Ionicons
                            name="ios-information-circle"
                            size={24}
                            color={mainColor} 
                        />

                        {/* Unopened Indicator */}
                        {!notification.opened && (
                            <View style={Styles.unopenedIndicator} />
                        )}


                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
}
