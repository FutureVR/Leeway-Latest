import React from 'react';
import {Container, Content, Body, Text} from 'native-base';

import HeaderComponent from '../components/HeaderComponent'

export default class ProfileScreen extends React.Component {

    render() {
        return (
            <Container>
                <HeaderComponent nav={this.props.navigation}/>
                <Content>
                    <Body>
                        <Text>
                            My Profile
                        </Text>
                    </Body>
                </Content>
            </Container>
        );
    }
}

