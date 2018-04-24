import React from 'react';
import {Container, Content, Body, Text} from 'native-base';

import HeaderComponent from '../components/HeaderComponent'

export default class FriendsScreen extends React.Component {

    render() {
        return (
            <Container>
                <HeaderComponent nav={this.props.navigation}/>
                <Content>
                    <Body>
                        <Text>
                            My Friends
                        </Text>
                    </Body>
                </Content>
            </Container>
        );
    }
}

