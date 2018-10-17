import React from 'react';
import { View, Text, Image } from 'react-native';

import defaultCover from '../../assets/default_cover.jpg';

import { BOOK_DETAILS } from '../../constants/strings';

import styles from './styles';

class BookDetails extends React.Component {
  static navigationOptions = {
    title: BOOK_DETAILS
  };

  render() {
    const { navigation } = this.props;
    const book = navigation.getParam('book');
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={book.image_url ? { uri: book.image_url } : defaultCover} />
        <Text>{book.title}</Text>
        <Text>{book.author}</Text>
      </View>
    );
  }
}

export default BookDetails;
