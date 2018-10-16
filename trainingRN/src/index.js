import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Todo from './screens/todo';
import BookList from './screens/bookList';
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

class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

export default App;