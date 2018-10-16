import React from 'react';
import { Text, View, Button } from 'react-native';
import { CheckBox } from 'react-native-elements';

import { X } from '../../constants/strings';
import styles from './styles';

function Task({ element, onCheck, onDelete }) {
  return (
    <View style={styles.taskBox} key={element.key}>
      <Text style={styles.task}>{element.task}</Text>
      <Button title={X} onPress={() => onDelete(element.id)} />
      <CheckBox checked={element.checked} onPress={() => onCheck(element.id)} />
    </View>
  );
}

export default Task;
