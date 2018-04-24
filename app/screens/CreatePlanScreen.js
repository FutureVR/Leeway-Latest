import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { Container, Header, Content, Form, Item, Input } from 'native-base';
import HeaderComponent from "../components/HeaderComponent";

export default class CreatePlanScreen extends React.Component {

    render() {
        const { date } = this.props.navigation.state.params;

        return (
            <Container>
                <HeaderComponent nav={this.props.navigation}/>
                <Content>
                    <Form>
                        <Item>
                            <Input placeholder="Title" />
                        </Item>
                        <Item last>
                            <Input placeholder="Description" />
                        </Item>
                    </Form>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flexGrow: 1,
        //justifyContent:'center',
        alignItems: 'center',
        backgroundColor:'#ffffff',
    },
    bannerText : {
        alignSelf: 'stretch',
        textAlign: 'left',
        backgroundColor: '#3fbcff',
        paddingHorizontal: 40,
        paddingVertical: 10,
        fontWeight: 'bold',
        fontSize: 16,
        color: '#ffe794'
    },
    inputBox: {
        width:300,
        backgroundColor:'rgba(120, 120, 120, 0.4)',
        borderRadius: 25,
        paddingHorizontal:16,
        paddingVertical: 10,
        fontSize:16,
        color:'#ffffff',
        marginVertical: 10
    },
    button: {
        width:300,
        backgroundColor: '#3fbcff',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13
    },
    buttonText: {
        fontSize:16,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center'
    },
    SubmitButtonStyle: {

        marginTop:10,
        paddingTop:15,
        paddingBottom:15,
        marginLeft:0,
        marginRight:0,
        backgroundColor:'#00BCD4',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff'
    },
    signupTextCont : {
        flexGrow: 1,
        alignItems:'flex-end',
        justifyContent :'center',
        paddingVertical:16,
        flexDirection:'row'
    },
    signupText: {
        color:'rgba(255,255,255,0.6)',
        fontSize:16
    },
    signupButton: {
        color:'#ffffff',
        fontSize:16,
        fontWeight:'500'
    },
    cardBox: {
        borderRadius: 10,
        alignSelf: 'stretch'

    },
    lineStyle:{
        borderWidth: 2,
        borderColor:'#3fbcff',
        margin: 5,
        alignSelf: 'stretch',
        paddingVertical: 1
    },
    footer: {
        backgroundColor: '#eeeeee',
        alignSelf: 'stretch',
        alignItems: 'center',
        height: 500
    },
    titleBox: {

    }
});