import React, { Component } from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Todo from './screens/Todo';
import BookList from './screens/BookList';
import routes from './constants/routes';
import { APP_NAME } from './constants/strings';

const TabNavigator = createBottomTabNavigator({
  [routes.HOME]: Todo,
  [routes.BOOK_LIST]: BookList
});

const RootStack = createStackNavigator(
  {
    [routes.HOME]: {
      screen: TabNavigator,
      navigationOptions: {
        title: APP_NAME
      }
    }
  },
  {
    initialRouteName: routes.HOME
  }
);

class App extends Component {
  render() {
    return <RootStack />;
  }
}

export default App;
