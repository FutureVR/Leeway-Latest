import React from 'react';
import {StyleSheet, View} from 'react-native';
import moment from 'moment';
import type Moment from 'moment';

import SingleCalendar from '../components/Meetups/SingleCalendarComponent'
import Events from '../components/Meetups/EventsComponent'

import currentUser from '../config/currentUser'
import fireDB from '../config/database'

//fake data
let planData = []



export type EventType = {
    plan_id: string,
    title: string,
    description: string,
    members: Array,
    date: Moment,

    //optional values that must be set through defaults
    image: string,
    location: string,
};

const formatJSONToEventType: Array<EventType> = (input) => {
    var out = []
    for (let currEvent of input) {
        var eventTypeFormat = {
            plan_id: currEvent['plan_id'],
            title: currEvent['title'],
            description: currEvent['description'],
            members: currEvent['members'],
            date: moment(currEvent['date'], "YYYY-MM-DD HH-mm-ss"),
        }

            console.log(eventTypeFormat)

        eventTypeFormat['location'] = ('location' in currEvent) ? currEvent['location'] : undefined;
        eventTypeFormat['image'] = ('image' in currEvent) ? currEvent['location'] : 'http://arcadiawindber.com/wp-content/uploads/2016/10/default.png';
        out.push(eventTypeFormat)
    }
    return out
}

var events = formatJSONToEventType([])  // this needs to call the events for the current user

const filterEvents = (date: Moment): ?Array<EventType> =>
    events.filter(event => event.date.isSame(date, 'day'));

export default class PlanListTabScreen extends React.Component {

    constructor () {
        super()
        var self = this;

        function fetch(data) {
            var preEvents = []
            data.forEach(function(out) {
                preEvents.push(out.val())
            })
            events = formatJSONToEventType(preEvents)
            self.forceUpdate()

        }
        fireDB.ref('users/' + currentUser + '/plans').once("value", fetch);
    }

    state = {
        events: filterEvents(moment()),
    };

    onSelectDate = (date: Moment) => {
        this.setState({ events: filterEvents(date) });
    };

    render() {
        const { events } = this.state;
        return (
            <View style={styles.container}>
                <SingleCalendar showDaysAfterCurrent={6} onSelectDate={this.onSelectDate} />
                <Events events={events} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3F53B1',
        paddingTop: 20,
    }
});