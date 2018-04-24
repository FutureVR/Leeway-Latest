import React, { PureComponent } from 'react';
import {
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default class Cell extends PureComponent {

    props: {
        cellId: string,
        timeText: string,
        isActive: boolean,
        index: number,
        onPress: (index: number) => void,
    };

    // Call `onPress` passed from the parent component when date is pressed
    onPress = () => {
        const { index, onPress, cellId } = this.props;
        onPress(index);

        // CREATE THE PLAN OVER HERE BASED ON THE CELL ID WHEN ITS CILCKED.
        console.log(cellId)
    };

    render() {

        return (
            <View id={this.props.cellId}>
                <TouchableOpacity
                    onPress={this.onPress}>
                    <View style={styles.cell}>
                        <Text style={styles.cellText}>
                            {/* {this.props.timeText} */}
                        </Text>
                    </View>
                </TouchableOpacity>
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
    cellText: {
        paddingVertical: 9,
        textDecoration: 'none',
        borderColor: '#fff',
        fontSize: 9,
        textAlign: 'center',
    },
    cell: {
        backgroundColor: '#FFFFFF',
        borderWidth: 0.5,
        borderColor: '#3F53B1'
    },
    cellActive: {

    },
};