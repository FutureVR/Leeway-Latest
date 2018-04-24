import React, { Component } from 'react';
import {withNavigation} from 'react-navigation'
import {
    Image,
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';
import type { EventType } from '../../../App';


class Event extends Component {

    props: {
        event: EventType,
    };

    render() {
        const { event } = this.props;
        const {
            title,
            description,
            plan_id,
            members,
            date,
            image,
            location

        } = event;
        return (
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Plan Info', {
                "title": title,
                "plan_id": plan_id,
                "description": description,
                "num_members": members.length,
                "time": date,
                "location": location,
            })}>
                <View style={styles.container}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={{ uri: image }}
                            style={styles.image}
                        />
                    </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.text}>{date.calendar()}</Text>
                            <Text style={[styles.text, styles.title]}>{title}</Text>
                            <Text style={styles.text}>{description}</Text>
                        </View>
                </View>
            </TouchableHighlight>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        borderBottomColor: 'rgba(255, 255, 255, 0.1)',
        borderBottomWidth: StyleSheet.hairlineWidth,
        padding: 15,
    },
    imageContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
        borderColor: 'rgba(255, 255, 255, 0.25)',
        borderWidth: StyleSheet.hairlineWidth,
        marginRight: 15,
        width: 90,
        height: 90,
    },
    textContainer: {
        flex: 1,
    },
    image: {
        width: 89,
        height: 89,
    },
    text: {
        color: 'rgba(255, 255, 255, 0.75)',
    },
    title: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

export default withNavigation(Event);