import React from 'react';

import WelcomeScreen from './screens/AppSwitchNavigator/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import SignUpScreen from './screens/SignUpScreen';
import { createSwitchNavigator, createAppContainer, createStackNavigator } from 'react-navigation';

const App = () => <AppContainer />;

const AppSwitchNavigator = createSwitchNavigator({
  WelcomeScreen,
  HomeScreen,
  SignUpScreen,
});

const AppContainer = createAppContainer(AppSwitchNavigator);

export default App;
