import * as Expo from "expo";
import React from 'react';
import {AppNavigator} from './app/config/router';

import { Setup } from './app/components/AppFontLoader';
import ScheduleScreen from './app/screens/ScheduleScreen'

import {Body, View} from 'native-base'

import fireDB from './app/config/database'
import currentUser from './app/config/currentUser'

export default class App extends React.Component {

    constructor() {
        super();
        this.state = {
            isReady: false
        };
    }

    componentWillMount() {
        this.loadFonts();
    }

    async loadFonts() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
        });
        this.setState({ isReady: true });
    }

    render() {
        if (!this.state.isReady) {
            return <Expo.AppLoading />;
        }
        return (
            <AppNavigator>
                <ScheduleScreen/>
            </AppNavigator>
        );
    }
}

