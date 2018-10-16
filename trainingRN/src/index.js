import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import Todo from './screens/Todo';
import BookList from './screens/BookList';
import routes from './constants/routes';

const RootStack = createStackNavigator(
  {
    [routes.HOME]: Todo,
    [routes.BOOK_LIST]: BookList
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
