import React, {Component} from 'react';
import { Text, ScrollView, Image, View } from 'react-native';

import books from '../../constants/books';
import styles from './styles';

import defaultCover from '../../assets/default_cover.jpg'
import { BOOK_LIST} from '../../constants/constant';

class BookList extends Component {
  static navigationOptions = {
    title: BOOK_LIST,
  };
  render() {
    return (
    <ScrollView style={styles.container}>
      {books.map(({ id, image_url, title, author }) =>
        <View style={styles.book} key={id}>
          <Image style={styles.image} source={ image_url ? { uri: image_url } : defaultCover }/>
          <View style={styles.text}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.author}>{author}</Text>
          </View>
        </View>
        )}
    </ScrollView>
    )
  }
}

export default BookList