import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { StackNavigator, DrawerNavigator, createStackNavigator } from 'react-navigation';

import DashboardScreen from './DashboardScreen';
import ProfileScreen from './ProfileScreen';
import FoundProfileScreen from './FoundProfileScreen';
import FoundProjectScreen from './FoundProjectScreen';
import SeeAllFeaturesPage from './SeeAllFeaturesPage';
import ProjectsScreen from './ProjectsScreen';
import EditProjectsScreen from'./EditProjectsScreen'
import FindScreen from './FindScreen';
import ConnectionsScreen from './ConnectionsScreen';
import SettingsScreen from './SettingsScreen';
import EditDashScreen from './EditDashScreen';
import ProjectScreen from './ProjectScreen';
import TestScreen from './TestScreen';
import Login from './Login';
import SignUp from './SignUp';


import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconFeather from 'react-native-vector-icons/Feather';


const ProfileStackNavigator = StackNavigator({
  Profile:{ screen: ProfileScreen},
  ProjectScreen:{ screen: ProjectScreen},
  FoundProfileScreen:{screen: FoundProfileScreen},
  EditProjectsScreen:{screen: EditProjectsScreen},
  SeeAllFeaturesPage:{screen: SeeAllFeaturesPage},
  FoundProjectScreen:{screen: FoundProjectScreen},
},{
  headerMode: 'none',

});

const DashboardStackNavigator = StackNavigator({
  Dashboard:{ screen: DashboardScreen},
  EditDashScreen:{screen: EditDashScreen}
},{
  headerMode: 'none',

});

const SettingsStackNavigator = StackNavigator({
  Settings:{ screen: SettingsScreen},
  Login:{screen: Login},
},{
  headerMode: 'none',

});

const FindStackNavigator = StackNavigator({
  Explore:{ screen: FindScreen},
  FoundProfileScreen:{screen: FoundProfileScreen},
  FoundProjectScreen:{screen: FoundProjectScreen},
  SeeAllFeaturesPage:{screen: SeeAllFeaturesPage},


},{
  headerMode: 'none',
});

const ConnectionsStackNavigator = StackNavigator({
  Connections:{ screen: ConnectionsScreen},
  FoundProfileScreen:{screen: FoundProfileScreen},
  FoundProjectScreen:{screen: FoundProjectScreen},
  SeeAllFeaturesPage:{screen: SeeAllFeaturesPage},


},{
  headerMode: 'none',
});


const AppDrawerNavigator = DrawerNavigator ({
    Dashboard : {screen:DashboardStackNavigator },
    Profile: { screen: ProfileStackNavigator },
    Projects: { screen: ProjectsScreen },
    Explore: { screen: FindStackNavigator },
    Connections: { screen: ConnectionsStackNavigator },
    Settings: { screen: SettingsStackNavigator },
    Test:{screen:TestScreen},
})

export default AppDrawerNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
