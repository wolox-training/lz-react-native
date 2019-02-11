import React from 'react';
import { FlatList } from 'react-native';

import Book from '../../components/Book';
import books from '../../constants/books';

function BookList({ navigation }) {
  return (
    <FlatList data={books} renderItem={({ item }) => <Book {...item} navigate={navigation.navigate} />} />
  );
}

export default BookList;
