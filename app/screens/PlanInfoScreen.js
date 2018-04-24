import React from 'react';
import {Container, Content, Card, CardItem, Thumbnail, Body, Text, Image, Left, Button, Icon} from 'native-base';

import HeaderComponent from '../components/HeaderComponent'

export default class PlanInfoScreen extends React.Component {

    constructor () {
        super()
    }

    render() {
        const state = this.props.navigation.state.params

        return (
            <Container>
                <HeaderComponent nav={this.props.navigation}/>
                <Content>
                    <Card style={{flex: 0}}>
                        <CardItem>
                            <Left>
                                <Thumbnail source={{uri: 'http://drugo-more.hr/wp-content/uploads/2015/04/party-06.jpg'}} />
                                <Body>
                                <Text>{state.title}</Text>
                                <Text note>{state.time.calendar()}</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                            <Text>
                                {state.description}
                            </Text>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}

