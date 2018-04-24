import React from 'react';
import {Header, Left, Button, Icon, Body, Title} from 'native-base'

export default class HeaderComponentComponent extends React.Component {

    openMenu = () => {
        this.props.nav.navigate('DrawerOpen');
    }

    render() {
        return (
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
        );
    }
}
