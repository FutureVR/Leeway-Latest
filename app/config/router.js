import React from 'react';
import {StackNavigator, DrawerNavigator} from 'react-navigation';

// import WelcomeScreen from ''
// import SignInScreen from ''
// import GroupInfoScreen from ''

import PlanInfoScreen from '../screens/PlanInfoScreen'
import ScheduleScreen from '../screens/ScheduleScreen'
import PlansListTabScreen from '../screens/PlanListTabScreen'
import SettingsScreen from '../screens/SettingsScreen'
import GroupsScreen from '../screens/GroupsScreen'
import UserSearchScreen from '../screens/UserSearchScreen'
import CreatePlanScreen from '../screens/CreatePlanScreen'
import ProfileScreen from '../screens/ProfileScreen'
import FriendScreen from '../screens/FriendsScreen'

// import SideBar from './app/components/SideBarComponent'

class Hidden extends React.Component {
    render() {
        return null;
    }
}

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
        "Groups": {
            screen: GroupsScreen
        },
        "Settings": {
            screen: SettingsScreen
        },
        "Plan Info": {
            screen: PlanInfoScreen,
            navigationOptions: {
                drawerLabel: <Hidden />
            }
        },
        "Search": {
            screen: UserSearchScreen,
            navigationOptions: {
                drawerLabel: <Hidden />
            }
        },
        "CreatePlan": {
            screen: CreatePlanScreen,
            navigationOptions: {
                drawerLabel: <Hidden/>
            }
        }
    },
    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    }
);











