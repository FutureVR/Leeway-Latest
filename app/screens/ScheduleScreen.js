import React from 'react';
import {Container, Tabs, Tab, Content} from 'native-base';

import PlanListTabScreen from './PlanListTabScreen'
import PlanCreationTabScreen from './PlanCreationTabScreen'
import HeaderComponent from '../components/HeaderComponent'

export default class ScheduleScreen extends React.Component {

    addEvent = () => {
        this.props.navigation.navigate('CreateEvent');
    }

    render() {
        return (
            <Container>
                <HeaderComponent nav={this.props.navigation}/>
                <Tabs initialPage={0}>
                    <Tab heading="Schedule Meetup">
                        <Content>
                            <PlanCreationTabScreen/>
                        </Content>
                    </Tab>
                    <Tab heading="Your Meetups">
                        <Content scrollEnabled={true}>
                            <PlanListTabScreen/>
                        </Content>
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}
