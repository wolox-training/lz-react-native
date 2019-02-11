import React from 'react';
import { Text, Image, TouchableOpacity, View } from 'react-native';

import routes from '../../constants/routes';
import styles from './styles';

import defaultCover from '../../assets/default_cover.jpg';

function Book({ id, image_url, title, author, navigate }) {
  return (
    <TouchableOpacity
      style={styles.book}
      key={id}
      onPress={() => navigate(routes.BOOK_DETAILS, { book: { title, author, image_url } })}
    >
      <Image style={styles.image} source={image_url ? { uri: image_url } : defaultCover} />
      <View style={styles.text}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>{author}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default Book;
