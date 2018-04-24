import React from 'react';
import {StyleSheet, View} from 'react-native';

import SingleCalendar from './SingleCalendarComponent'

export default class CalendarComponent extends React.Component {

    onSelectDate() {}

    render() {
        return (
            <View style={styles.container}>
                <SingleCalendar showDaysAfterCurrent={5} showDaysBeforeCurrent={0} onSelectDate={this.onSelectDate} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3F53B1', 
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    }
});
