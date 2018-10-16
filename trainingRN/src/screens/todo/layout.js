import React, {Component} from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import { CheckBox } from 'react-native-elements';

import { ADD, DELETE_ALL, ADD_NEW_TASK, X } from '../../constants/constant';
import styles from './styles';

function TodoLayout({ onDelete, data, handleNew, setNewText, checkElem, onDeleteAll }) {
    return (
      <View style={styles.container}>
        <Text style={styles.task}>{ADD_NEW_TASK}</Text>
        <TextInput style={styles.textInput} onChangeText={text => setNewText(text)}/>
        <Button title={ADD} onPress={handleNew}/>
        {data.map(element => 
        <View style={styles.taskBox} key={element.key}>
          <Text style={styles.task}>{element.task}</Text>
          <Button title={X} onPress={() => onDelete(element.id)}/>
          <CheckBox 
            checked={element.checked}
            onPress={() => checkElem(element.id) }
          />
        </View>
        )}
        <Button title={DELETE_ALL} onPress={onDeleteAll} />
      </View>
    );
}


export default TodoLayout;
