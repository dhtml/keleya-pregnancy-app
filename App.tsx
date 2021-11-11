import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Welcome from './src/screens/Welcome';
import SignIn from './src/screens/SignIn';
import Signup from './src/screens/Signup';
import Name from './src/screens/Name';
import MyDate from './src/screens/MyDate';
import Workout from './src/screens/Workout';
import Success from './src/screens/Success';
import React from 'react';

const AppNavigator = createStackNavigator(
  {
    Welcome: {
      screen: Welcome,
      navigationOptions: {
        headerShown: false,
      },
    },
    SignIn: {
      screen: SignIn,
      navigationOptions: {
        headerShown: true,
      },
    },
    Signup: {
      screen: Signup,
      navigationOptions: {
        headerShown: true,
      },
    },
    Name: {
      screen: Name,
      navigationOptions: {
        headerShown: true,
      },
    },
    MyDate: {
      screen: MyDate,
      navigationOptions: {
        headerShown: true,
      },
    },
    Workout: {
      screen: Workout,
      navigationOptions: {
        headerShown: true,
      },
    },
    Success: {
      screen: Success,
      navigationOptions: {
        headerShown: true,
      },
    },
  },
  {
    initialRouteName: 'Welcome',
    defaultNavigationOptions: {
      title: '',
      headerShown: true,
      headerTransparent: true,
    },
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
