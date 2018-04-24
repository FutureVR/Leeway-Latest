import React from 'react';
import {Content, Card, CardItem, Text, Button, Icon, Left, Body, Right, ListItem} from 'native-base';
import { withNavigation } from 'react-navigation';

class PlanItem extends React.Component {

    render() {
        return (
            <ListItem>
                <Content>
                    <Card>
                        <CardItem>
                            <Left>
                                <Body>
                                <Text>{this.props.title}</Text>
                                <Text note>{this.props.description}</Text>
                                </Body>
                            </Left>
                            <Right>
                                <Button transparent
                                        onPress={
                                            () => {
                                                this.props.navigation.navigate('Plan Info', {
                                                    "title": this.props.title,
                                                    "plan_id": this.props.planId,
                                                    "description": this.props.description,
                                                    "num_members": this.props.numMembers,
                                                    "time": this.props.time,
                                                    "location": this.props.location
                                                })
                                            }
                                        }>
                                    <Icon active name="info-with-circle"/>
                                </Button>
                            </Right>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent>
                                    <Icon active name="people"/>
                                    <Text>{this.props.numMembers}</Text>
                                </Button>
                            </Left>
                            <Body>
                            <Button transparent>
                                <Icon active name="clock"/>
                                <Text>{this.props.time}</Text>
                            </Button>
                            </Body>
                            <Right>
                                <Button transparent>
                                    <Icon active name="map"/>
                                    <Text>{this.props.location}</Text>
                                </Button>
                            </Right>
                        </CardItem>
                    </Card>
                </Content>
            </ListItem>
        );
    }
}

export default withNavigation(PlanItem);
