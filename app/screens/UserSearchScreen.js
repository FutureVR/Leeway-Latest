import React, {Component} from 'react';
import {StyleSheet, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';

import { Container, Header, Item, Input, Icon, Button, Text, List } from 'native-base';
import SearchInput, { createFilter } from 'react-native-search-filter';

import userData from '../data/UserData.json';
import UserItem from '../components/UserItem';
import { Col, Row, Grid } from "react-native-easy-grid";

const KEYS_TO_FILTERS = ['username'];

export default class UserSearchScreen extends React.Component {

    static navigationOptions = {
        header: null,
    };

    constructor (props) {
        super(props)
        this.data = userData
        this.state = {
            searchTerm: ''
        }
    }

    searchUpdated(term) {
        this.setState({ searchTerm: term })
    }

    generateListView () {

        out = []
        for (let currUser of this.data) {
            out.push(<UserItem id={currUser['id']}
                               name={currUser['name']}
                               email={currUser['email']} />)
        }
        return out
    }

    render() {

        const filteredUsers = this.data.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))

        return (
            <Container>
                {/* <Header searchBar rounded>
                    <Text>Header</Text>
                </Header> */}

                <View style={styles.container}>
                    <SearchInput 
                        onChangeText={(term) => { this.searchUpdated(term) }} 
                        style={styles.searchInput}
                        placeholder="Type a message to search"
                        />
                    <ScrollView>
                        {filteredUsers.map(user => {
                            return (
                                <View>
                                    <Grid>
                                        <Col size={1}>
                                            <TouchableOpacity
                                                style={{
                                                    borderWidth:1,
                                                    //borderColor:'rgba(0,0,0,0.2)',
                                                    alignItems:'center',
                                                    justifyContent:'center',
                                                    width:50,
                                                    height:50,
                                                    backgroundColor:'#fff',
                                                    borderRadius:100,

                                                    borderBottomWidth: 0.5,
                                                    borderColor: 'rgba(0,0,0,0.3)',
                                                    padding: 10

                                                    }}
                                                >
                                                
                                                {/* <Random value='image.cats' tag='a'></Random> */}
                                                <Icon name='home' style={{ justifyContent:'center' }}/>

                                            </TouchableOpacity>
                                        </Col>
                                        <Col size={3}>
                                            <TouchableOpacity key={user.id} style={styles.userItem} >
                                                <View>
                                                    <Text>{user.username}</Text>
                                                    <Text>{user.email}</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </Col>
                                    </Grid>
                                </View>
                             )
                        })}
                    </ScrollView>
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
