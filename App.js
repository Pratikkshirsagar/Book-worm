import React from 'react';

import WelcomeScreen from './screens/AppSwitchNavigator/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import SignUpScreen from './screens/SignUpScreen';
import {
  createSwitchNavigator,
  createAppContainer,
  createStackNavigator,
  createDrawerNavigator,
} from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

const App = () => <AppContainer />;

const loginStackNavigator = createStackNavigator({
  WelcomeScreen: {
    screen: WelcomeScreen,
    navigationOptions: {
      header: null,
    },
  },
  SignUpScreen: {
    screen: SignUpScreen,
    navigationOptions: {},
  },
});

const AppDrawerNavigator = createDrawerNavigator({
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
});

const AppSwitchNavigator = createSwitchNavigator({
  loginStackNavigator,
  AppDrawerNavigator,
});

const AppContainer = createAppContainer(AppSwitchNavigator);

export default App;
