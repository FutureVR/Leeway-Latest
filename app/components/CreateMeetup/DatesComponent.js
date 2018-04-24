import React, { PureComponent } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import Date from './DateComponent';
import HourColumn from './HourColumnComponent'
import type Moment from 'moment';

export default class Dates extends PureComponent {

    props: {
        currentDateIndex: ?number,
        dates: Array<Moment>,
        onSelectDay: (index: number) => void,
        onRenderDay: (index: number, width: number) => void,
    };

    getContainerStyle = () => ({
        ...styles.container,
    });

    getDayStyle = () => ({
        ...styles.text,
        ...styles.day,
    });

    render() {
        const {
            dates,
            onSelectDay,
            onRenderDay,
        } = this.props;
        return (
            <View style={styles.headerCont}>
                <View>
                    <HourColumn/>
                </View>

                {dates.map((date, index) =>
                    <View key={index}>
                        <Date
                            date={date}
                            index={index}
                            onPress={onSelectDay}
                            onRender={onRenderDay}
                            key={index}
                        />
                    </View>
                )}
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    headerCont: {
        borderBottomColor: 'transparent',
        borderBottomWidth: 2,
        paddingHorizontal: 13,
        paddingVertical: 10,
        flexDirection: 'row',
    },
    day: {
        fontSize: 10,
        color: 'rgba(255, 255, 255, 0.5)',
        textAlign: 'center',
    },
    date: {
        fontSize: 18,
    },
    text: {
        color: 'rgba(255, 255, 255, 0.5)',
        textAlign: 'center',

    },
    textActive: {
        color: '#FFFFFF',
    },

});