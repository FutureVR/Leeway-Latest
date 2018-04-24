import React from 'react';
import {Content, Card, CardItem, Text, Button, Icon, Left, Body, Right, ListItem} from 'native-base';
import { withNavigation } from 'react-navigation';

export default class UserItem extends React.Component {

    render() {
        return (
            <ListItem>
                <Content>
                    <Text>User</Text>
                </Content>
            </ListItem>
        );
    }
}