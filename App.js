import React, { Component } from 'react';

import WelcomeScreen from './screens/AppSwitchNavigator/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import LoginScreen from './screens/LoginScreen';
import {
  createSwitchNavigator,
  createAppContainer,
  createStackNavigator,
  createDrawerNavigator,
} from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import CustomeDrawerComponent from './screens/DrawerNavigator/CustomeDrawerComponent';
import colors from './assets/colors';

import firebase from 'firebase/app';
import 'firebase/auth';

import firebaseConfig from './config/config';
// firebase init
firebase.initializeApp(firebaseConfig);

const App = () => {
  return <AppContainer />;
};

const loginStackNavigator = createStackNavigator(
  {
    WelcomeScreen: {
      screen: WelcomeScreen,
      navigationOptions: {
        header: null,
      },
    },
    LoginScreen: {
      screen: LoginScreen,
      navigationOptions: {},
    },
  },
  {
    mode: 'modal',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.bgMain,
      },
    },
  }
);

const AppDrawerNavigator = createDrawerNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Home',
        drawerIcon: () => <Ionicons name="ios-home" size={24} />,
      },
    },
    SettingsScreen: {
      screen: SettingsScreen,
      navigationOptions: {
        title: 'Settings',
        drawerIcon: () => <Ionicons name="ios-settings" size={24} />,
      },
    },
  },
  {
    contentComponent: CustomeDrawerComponent,
  }
);

const AppSwitchNavigator = createSwitchNavigator({
  loginStackNavigator,
  AppDrawerNavigator,
});

const AppContainer = createAppContainer(AppSwitchNavigator);

export default App;
