import React from 'react';
import {Container, Header, Left, Body, Button, Icon, Title, View, List } from 'native-base';

import GroupItem from '../components/GroupItem'
import groupData from '../data/GroupData.json'


export default class GroupsScreen extends React.Component {

    openMenu = () => {
        this.props.navigation.navigate('DrawerOpen');
    }

    constructor () {
        super()
        this.data = groupData
    }

    generateListView () {
        out = []
        for (let currGroup of this.data) {
            out.push(<GroupItem id={currGroup['id']}
                                name={currGroup['name']}
                                description={currGroup['description']} />)
        }
        return out
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
                <List scrollEnabled={true}>
                    {this.generateListView()}
                </List>
            </Container>
        );
    }
}