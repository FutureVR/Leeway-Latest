import React, { PureComponent } from 'react';
import {
    Text,
    TouchableOpacity,
} from 'react-native';
import type Moment from 'moment';

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

    getDateStyle = () => ({
        ...styles.text,
        ...styles.date,
        ...(this.props.isActive ? styles.textActive : {})
    });

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

    render() {
        const { date } = this.props;
        return (
            <TouchableOpacity
                style={this.getContainerStyle()}
                onLayout={this.onLayout}
                onPress={this.onPress}
            >
                <Text style={this.getDayStyle()}>{date.format('ddd').toUpperCase()}</Text>
                <Text style={this.getDateStyle()}>{date.format('DD')}</Text>
            </TouchableOpacity>
        );
    }

}

const styles = {
    container: {
        borderBottomColor: 'transparent',
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
        color: 'rgba(255, 255, 255, 0.5)',
        textAlign: 'center',
    },
    textActive: {
        color: '#FFFFFF',
    },
};