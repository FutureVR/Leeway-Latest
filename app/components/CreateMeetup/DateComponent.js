import React, { PureComponent } from 'react';
import {
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import type Moment from 'moment';

import Cell from './CellComponent'

export default class Date extends PureComponent {

    props: {
        date: Moment,
        index: number,
        isActive: boolean,
        onPress: (index: number) => void,
        onRender: (index: number, width: number) => void,
    };

    getContainerStyle = () => ({
        ...styles.container,
        ...(this.props.isActive ? styles.containerActive : {})
    });

    getDayStyle = () => ({
        ...styles.text,
        ...styles.day,
        ...(this.props.isActive ? styles.textActive : {})
    });

    getCellTextStyle = () => ({
        ...styles.cellText,
    });

    getDateStyle = () => ({
        ...styles.text,
        ...styles.date,
        ...(this.props.isActive ? styles.textActive : {})
    });

    getCellStyle = () => ({
        ...styles.cell,
        ...(this.props.isActive ? styles.cellActive: {})
    })

    // Call `onRender` and pass component's with when rendered
    onLayout = (event: { nativeEvent: { layout: { x: number, y: number, width: number, height: number } } }) => {
        const {
            index,
            onRender,
        } = this.props;
        const { nativeEvent: { layout: { width } } } = event;
        onRender(index, width);
    };

    // Call `onPress` passed from the parent component when date is pressed
    onPress = () => {
        const { index, onPress } = this.props;
        onPress(index);
    };

    generateViews = (date) => {
        const { index} = this.props;

        var out = []
        for (let i = 8; i <= 22; i++) {
            var formatted = i + ":00"
            var cellId = date + "-" + i

            out.push(<Cell cellId={cellId} timeText={formatted} isActive={false} index={index} onPress={this.onPress}/>)
        }
        return out;
    }

    render() {
        const { date } = this.props;

        return (
            <View>
                <TouchableOpacity
                    style={this.getContainerStyle()}
                    onLayout={this.onLayout}
                    onPress={this.onPress}
                >
                    <Text style={this.getDayStyle()}>{date.format('ddd').toUpperCase()}</Text>
                    <Text style={this.getDateStyle()}>{date.format('DD')}</Text>
                </TouchableOpacity>
                {
                    this.generateViews(date.format('DD'))
                }
            </View>
        );
    }
}

const styles = {
    container: {
        borderBottomColor: '#FFFFFF',
        borderBottomWidth: 2,
        paddingHorizontal: 13,
        paddingVertical: 10,
    },
    containerActive: {
        borderBottomColor: '#FFFFFF',
    },
    day: {
        fontSize: 10,
    },
    date: {
        fontSize: 18,
    },
    text: {
        color: '#FFFFFF',
        textAlign: 'center',
    },
    textActive: {
        color: '#FFFFFF',
    },
};