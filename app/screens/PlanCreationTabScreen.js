import React from 'react';
import {List, Button, Icon, Item, Text, Input, Fab } from 'native-base';
import {withNavigation} from 'react-navigation'
import {StyleSheet, View} from 'react-native';


import CalendarComponent from '../components/CreateMeetup/CalendarComponent'

class PlansCreationTabScreen extends React.Component {

    constructor () {
        super()
        this.state = {
            active: 'true'
        };
    }
    render() {

        return (
            <List scrollEnabled={true}>
                {/* <Item>
                    <Icon name="search"/>
                    <Input placeholder="Invite Friends"/>
                    <Icon name="people"/>
                </Item> */}
                <View>
                    <View style={styles.searchView}>
                        {/* <Button block onPress={() => this.props.navigation.navigate('Search')}>
                            <Text>Search</Text>
                        </Button> */}
                        <Text style= {styles.headText} >
                            Meet with Friends
                        </Text>
                        <View>
                            <Item style={styles.searchBar}>
                                <Icon name="search" style={{ padding: 10 }} />
                                <Input placeholder="Invite Friends"/>
                                <Icon name="people"/>
                            </Item>
                        </View>
                    </View>
                    <View style={styles.calendarView}>
                        <CalendarComponent/>
                        <Button block style={styles.createPlanButton} onPress={() => this.props.navigation.navigate('CreateEvent')}>
                            <Text>Create Plan</Text>
                        </Button>
                    </View>
                </View>
            </List>
        );
    }
}

const styles = StyleSheet.create({
    searchView: {
        flex: 1,
        backgroundColor: '#3F53B1',
        paddingTop: 8,
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 5,
        borderRadius: 20,
        borderColor: '#000000',
        borderWidth: 1

    },
    calendarView: {
        paddingTop: 20,
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        borderRadius: 20
    },
    headText: {
        textAlign: 'center', // <-- the magic
        fontWeight: 'bold',
        fontSize: 18,
        borderBottomColor: 'black',
        borderBottomWidth: 0,
        color: '#FFFFFF'
    },
    searchBar: {
        margin: 10,
        marginLeft: 20,
        marginRight: 15,
        backgroundColor: '#EEEEEE',
        borderRadius: 20
    },
    createPlanButton: {
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: '#778fb7',
    }
});


export default withNavigation(PlansCreationTabScreen)
