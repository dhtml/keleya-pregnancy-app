import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import GettingStarted from './src/screens/GettingStarted';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Name from './src/screens/Name';
import MyDate from './src/screens/MyDate';
import Active from './src/screens/Active';
import React from 'react';

const AppNavigator = createStackNavigator(
  {
    Started: {
      screen: GettingStarted,
      navigationOptions: {
        headerShown: false,
      },
    },
    Login: {
      screen: Login,
      navigationOptions: {
        headerShown: false,
      },
    },
    Register: {
      screen: Register,
      navigationOptions: {
        headerShown: false,
      },
    },
    Name: {
      screen: Name,
      navigationOptions: {
        headerShown: false,
      },
    },
    MyDate: {
      screen: MyDate,
      navigationOptions: {
        headerShown: false,
      },
    },
    Active: {
      screen: Active,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    //initialRouteName: 'Started',
    //initialRouteName: 'Register',
    //initialRouteName: 'Login',
    //initialRouteName: 'Name',
    //initialRouteName: 'MyDate',
    initialRouteName: 'Active',
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
