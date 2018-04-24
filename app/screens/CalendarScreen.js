import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CalendarComponent from '../components/Meetups/CalendarComponent'

export default class CalendarScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Your Weekly Schedule</Text>
                <CalendarComponent/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
