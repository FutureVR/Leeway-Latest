import React from 'react';
import {List, Button, Icon, Item, Text, Input, Fab} from 'native-base';
import {withNavigation} from 'react-navigation'

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
                <Button block onPress={() => this.props.navigation.navigate('Search')}>
                    <Text>Search</Text>
                </Button>
                <Fab
                    active={this.state.active}
                    direction="up"
                    containerStyle={{ }}
                    style={{ backgroundColor: '#5067FF' }}
                    position="bottomRight"
                    onPress={() => this.setState({ active: !this.state.active })}>
                    <Icon name="share" />
                    <Button style={{ backgroundColor: '#34A34F' }}>
                        <Icon name="logo-whatsapp" />
                    </Button>
                </Fab>
                <CalendarComponent/>
                <Button block onPress={() => this.props.navigation.navigate('CreateEvent')}>
                    <Text>Create Plan</Text>
                </Button>
            </List>
        );
    }
}

export default withNavigation(PlansCreationTabScreen)
