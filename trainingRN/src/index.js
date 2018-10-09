import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Todo from './screens/todo';
import BookList from './screens/bookList';
import { HOME, BOOK_LIST} from './constants/routes';

const RootStack = createStackNavigator(
  {
    [HOME]: Todo,
    [BOOK_LIST]: BookList
  },
  {
    initialRouteName: HOME
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}