import React from 'react';
import {Icon, Item, Text, Input} from 'native-base';
import {withNavigation} from 'react-navigation'
import {StyleSheet, View} from 'react-native';

class SearchBar extends React.Component {

    render() {
        return (
            <View style={styles.searchView}>
                <Text style= {styles.headText} >
                    Meet with Friends
                </Text>
                <View>
                    <Item style={styles.searchBar}>
                        <Icon name="search" style={{ padding: 10 }} />
                        <Input placeholder="Invite Friends"/>
                        <Icon name="people"/>
                    </Item>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    searchView: {
        flex: 1,
        backgroundColor: '#3F53B1',
        paddingTop: 8,
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 5,
        borderRadius: 20,
        borderColor: '#000000',
        borderWidth: 1

    },
    headText: {
        textAlign: 'center', // <-- the magic
        fontWeight: 'bold',
        fontSize: 18,
        borderBottomColor: 'black',
        borderBottomWidth: 0,
        color: '#FFFFFF'
    },
    searchBar: {
        margin: 10,
        marginLeft: 20,
        marginRight: 15,
        backgroundColor: '#EEEEEE',
        borderRadius: 20
    },
});


export default withNavigation(SearchBar)
