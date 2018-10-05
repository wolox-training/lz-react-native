import React, {Component} from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import styles from './styles';

function TodoLayout({ handleDelete, data, handleNew, setNewText }) {
    return (
      <View style={styles.container}>
        <Text style={styles.task}>Add new task</Text>
        <TextInput style={styles.textInput} onChangeText={text => setNewText(text)}/>
        <Button title="Add" onPress={handleNew}/>
        {data.map(element => 
        <View style={styles.taskBox} key={element.key}>
          <Text style={styles.task}>{element.task}</Text>
          <Button title="X" onPress={() => handleDelete(element.id)}/>
        </View>
        )}
      </View>
    );
}


export default TodoLayout;
