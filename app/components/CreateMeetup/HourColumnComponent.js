import React, { PureComponent } from 'react';
import {
    Text,
    TouchableOpacity,
    View
} from 'react-native';

export default class HourColumnComponent extends PureComponent {

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

    generateViews = () => {
        function pad(num, size) {
            var s = "000000" + num;
            return s.substr(s.length-size);
        }

        var out = []
        for (let i = 9; i <= 19; i++) {
            var formatted = pad(i, 2) + ":00"

            out.push(<View style={styles.timeBox}>
                <Text style={this.getDayStyle()}>{formatted}</Text>
            </View>)
        }
        return out;
    }

    render() {

        return (
            <View>
                <TouchableOpacity
                    style={this.getContainerStyle()}
                    onLayout={this.onLayout}
                    onPress={this.onPress}
                >
                    <Text style={this.getDayStyle()}>{""}</Text>
                    <Text style={this.getDateStyle()}>{"Hour"}</Text>
                </TouchableOpacity>
                {
                    this.generateViews()
                }
            </View>
        );
    }

}

const styles = {
    container: {
        borderBottomColor: 'transparent',
        borderBottomWidth: 2,
        paddingHorizontal: 13,
        paddingVertical: 9,
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
    timeBox: {
        paddingVertical: 5.5,
    },
};