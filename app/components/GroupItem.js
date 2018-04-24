import React from 'react';
import {Content, Card, CardItem, Text, Button, Icon, Left, Body, Right, ListItem, View } from 'native-base';
import { withNavigation } from 'react-navigation';

class GroupItem extends React.Component {

    render() {
        return (
            <ListItem>
                <Content>
                    <Card>
                        <CardItem>
                            <Left>
                                <Body>
                                <Text>{this.props.name}</Text>
                                <Text note>{this.props.description}</Text>
                                </Body>
                            </Left>
                        </CardItem>
                    </Card>
                </Content>
            </ListItem>
        );
    }
}

export default withNavigation(GroupItem);