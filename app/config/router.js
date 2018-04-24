import React from 'react';
import {StackNavigator, DrawerNavigator} from 'react-navigation';

// import WelcomeScreen from ''
// import SignInScreen from ''
// import GroupInfoScreen from ''

import PlanInfoScreen from '../screens/PlanInfoScreen'
import ScheduleScreen from '../screens/ScheduleScreen'
import PlansListTabScreen from '../screens/PlanListTabScreen'
import SettingsScreen from '../screens/SettingsScreen'
import CalendarScreen from '../screens/CalendarScreen'
import GroupsScreen from '../screens/GroupsScreen'
import UserSearchScreen from '../screens/UserSearchScreen'
import CreateEventScreen from '../screens/CreateEventScreen'
import ProfileScreen from '../screens/ProfileScreen'
import FriendScreen from '../screens/FriendsScreen'

// import SideBar from './app/components/SideBarComponent'

export default HomeScreenRouter = DrawerNavigator(
    {
        "Home": {
            screen: ScheduleScreen
        },
        "My Profile": {
            screen: ProfileScreen
        },
        "Friends": {
            screen: FriendScreen
        },
        "Calendar": {
            screen: CalendarScreen
        },
        "Groups": {
            screen: GroupsScreen
        },
        "Settings": {
            screen: SettingsScreen
        },
    },
    {
        contentComponent: props => <SideBar {...props} />
    }
);

export const AppNavigator = DrawerNavigator({
        "Home": {
            screen: ScheduleScreen
        },
        "My Profile": {
            screen: ProfileScreen
        },
        "Friends": {
            screen: FriendScreen
        },
        "Calendar": {
            screen: CalendarScreen
        },
        "Groups": {
            screen: GroupsScreen
        },
        "Settings": {
            screen: SettingsScreen
        },
        "Plan Info": {
            screen: PlanInfoScreen
        }
    },
    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    }
);











