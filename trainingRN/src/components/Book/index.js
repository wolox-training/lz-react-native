import React from 'react';
import { Text, Image, View } from 'react-native';

import styles from './styles';

import defaultCover from '../../assets/default_cover.jpg';

function Book({ id, image_url, title, author }) {
  return (
    <View style={styles.book} key={id}>
      <Image style={styles.image} source={image_url ? { uri: image_url } : defaultCover} />
      <View style={styles.text}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>{author}</Text>
      </View>
    </View>
  );
}

export default Book;
