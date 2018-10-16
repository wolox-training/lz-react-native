import React, { Component } from 'react';
import { View } from 'react-native';

import routes from '../../constants/routes';

class BookList extends Component {
  static navigationOptions = {
    title: routes.BOOK_LIST
  };

  render() {
    return <View />;
  }
}

export default BookList;
