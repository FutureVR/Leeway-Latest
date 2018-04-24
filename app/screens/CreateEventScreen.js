import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { Card, Icon } from 'native-base';

export default class CreateEventScreen extends React.Component {

    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <View style={styles.container}>
                {/* <Text>Start Time</Text>
                <TouchableOpacity
                    style={styles.SubmitButtonStyle}
                    activeOpacity = { .5 }
                >
                    <Text>Specific time</Text>
                </TouchableOpacity>

                <Text>End Time</Text>
                <TouchableOpacity
                    style={styles.SubmitButtonStyle}
                    activeOpacity = { .5 }
                >
                    <Text>Specific time</Text>
                </TouchableOpacity>

                <Text>Attendees</Text> */}
                        <TextInput style={styles.titleBox} 
                            underlineColorAndroid='rgba(0,0,0,0)' 
                            placeholder="End Time"
                            secureTextEntry={true}
                            placeholderTextColor = "#ffffff"
                            ref={(input) => this.password = input}
                            />  
                        <TextInput style={styles.inputName} 
                            underlineColorAndroid='rgba(0,0,0,0)' 
                            placeholder="Email"
                            placeholderTextColor = "#ffffff"
                            selectionColor="#fff"
                            keyboardType="email-address"
                            onSubmitEditing={()=> this.password.focus()}
                            />


                        <Text style={styles.bannerText}>
                            Start Time
                        </Text>
                        <TextInput style={styles.inputBox} 
                            underlineColorAndroid='rgba(0,0,0,0)' 
                            placeholder="Start Time"
                            placeholderTextColor = "#ffffff"
                            selectionColor="#fff"
                            keyboardType="email-address"
                            onSubmitEditing={()=> this.password.focus()}
                            />
                        
                        <Text style={styles.bannerText}>
                            <Text></Text>
                             End Time
                        </Text>
                        <TextInput style={styles.inputBox} 
                            underlineColorAndroid='rgba(0,0,0,0)' 
                            placeholder="End Time"
                            secureTextEntry={true}
                            placeholderTextColor = "#ffffff"
                            ref={(input) => this.password = input}
                            />  
                    

                    <Text style={styles.bannerText}>Location</Text>
                    <TextInput style={styles.inputBox} 
                        underlineColorAndroid='rgba(0,0,0,0)' 
                        placeholder="Location"
                        secureTextEntry={true}
                        placeholderTextColor = "#ffffff"
                        ref={(input) => this.password = input}
                        />  
                    
                    <View style = {styles.lineStyle} />
                    
                    <View style={styles.footer}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Create Plan</Text>
                        </TouchableOpacity>  
                    </View>
            </View>
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
