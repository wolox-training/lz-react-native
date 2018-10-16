import React from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import Task from '../../components/Task';

import { ADD, DELETE_ALL, ADD_NEW_TASK } from '../../constants/strings';
import styles from './styles';

function TodoLayout({ onDelete, data, handleNew, setNewText, checkElem, onDeleteAll }) {
  return (
    <View style={styles.container}>
      <Text style={styles.task}>{ADD_NEW_TASK}</Text>
      <TextInput style={styles.textInput} onChangeText={text => setNewText(text)} />
      <Button title={ADD} onPress={handleNew} />
      {data.map(element => (
        <Task key={element.key} element={element} onCheck={checkElem} onDelete={onDelete} />
      ))}
      <Button title={DELETE_ALL} onPress={onDeleteAll} />
    </View>
  );
}

export default TodoLayout;
