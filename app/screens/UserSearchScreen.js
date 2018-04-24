import React, {Component} from 'react';
import {StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';

import { Container, Text, Content, ListItem, List, Thumbnail, Body } from 'native-base';
import SearchInput, { createFilter } from 'react-native-search-filter';
import {withNavigation} from 'react-navigation'

import HeaderComponent from '../components/HeaderComponent'

const KEYS_TO_FILTERS = ['name'];

import currentUser from '../config/currentUser'
import fireDB from '../config/database'
import SearchBarComponent from "../components/SearchBarComponent";

class UserSearchScreen extends React.Component {

    static navigationOptions = {
        header: null,
    };

    constructor (props) {
        super(props)

        this.data = []
        this.state = {
            searchTerm: ''
        }


        var self = this
        function fetch(snapshot) {
            snapshot.forEach(function(out){
                self.data.push({
                    'id': out.key,
                    'name': out.val()['name'],
                    'email': out.val()['email'],
                    'image': out.val()['image']
                })
            })

            console.log(self.data)

            self.forceUpdate()
        }

        fireDB.ref('users').once("value", fetch)
    }

    searchUpdated(term) {
        this.setState({ searchTerm: term })
    }

    render() {

        const filteredUsers = this.data.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))

        return (
            <Container>
                <HeaderComponent nav={this.props.navigation}/>

                <View style={styles.container}>
                    <SearchInput
                    onChangeText={(term) => { this.searchUpdated(term) }}
                    style={styles.searchInput}
                    placeholder="Type a name to search"
                />
                    <Content>
                        <List>
                            {filteredUsers.map(user => {
                                return (
                                    <ListItem>
                                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                                            <Thumbnail square size={80} source={{ uri: user.image }} />
                                        </TouchableOpacity>
                                        <Body>
                                            <Text>{user.name}</Text>
                                            <Text note>{user.email}</Text>
                                        </Body>
                                    </ListItem>
                                )
                            })}
                        </List>
                    </Content>
                </View>

            </Container>
        );
    }
}

const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: "row"
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start'
    },
    userItem:{
        borderBottomWidth: 0.5,
        borderColor: 'rgba(0,0,0,0.3)',
        padding: 10
    },
    userSubject: {
        color: 'rgba(0,0,0,0.5)'
    },
    searchInput:{
        padding: 10,
        borderColor: '#CCC',
        borderWidth: 1
    }
});

export default withNavigation(UserSearchScreen)