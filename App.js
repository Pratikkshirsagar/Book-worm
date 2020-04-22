import React from 'react';

import WelcomeScreen from './screens/AppSwitchNavigator/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

const App = () => <AppContainer />;

const AppSwitchNavigator = createSwitchNavigator({
  WelcomeScreen,
  HomeScreen,
});

const AppContainer = createAppContainer(AppSwitchNavigator);

export default App;
