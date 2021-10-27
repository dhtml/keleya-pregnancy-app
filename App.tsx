import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import GettingStarted from './src/screens/GettingStarted';
import React from 'react';

const AppNavigator = createStackNavigator(
  {
    Started: {
      screen: GettingStarted,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'Started',
    defaultNavigationOptions: {
      title: 'Mini Onboarding',
      //headerShown: false,
    },
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
