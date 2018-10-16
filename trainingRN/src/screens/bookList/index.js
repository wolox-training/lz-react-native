import React, {Component} from 'react';
import { Text, View } from 'react-native';

import { BOOK_LIST} from '../../constants/constant';

class BookList extends Component {
  static navigationOptions = {
    title: BOOK_LIST,
  };
  render() {
    return (
    <View />
    )
  }
}

export default BookList