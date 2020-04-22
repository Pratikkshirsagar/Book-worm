import React from 'react';

import WelcomeScreen from './screens/AppSwitchNavigator/WelcomeScreen';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

const App = () => <AppContainer />;

const AppSwitchNavigator = createSwitchNavigator({
  WelcomeScreen,
});

const AppContainer = createAppContainer(AppSwitchNavigator);

export default App;
