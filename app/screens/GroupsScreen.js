import React from 'react';
import {Container, Header, Left, Body, Button, Icon, Title} from 'native-base';


export default class GroupsScreen extends React.Component {

    openMenu = () => {
        this.props.navigation.navigate('DrawerOpen');
    }

    render() {
        return (
            <Container>
                <Header hasTabs>
                    <Left>
                        <Button transparent onPress={this.openMenu}>
                            <Icon name="menu"/>
                        </Button>
                    </Left>
                    <Body>
                    <Title>Leeway</Title>
                    </Body>
                </Header>
            </Container>
        );
    }
}
