import React, {Component} from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import { CheckBox } from 'react-native-elements';
import styles from './styles';

function TodoLayout({ handleDelete, data, handleNew, setNewText, checkElem, handleDeleteAll }) {
    return (
      <View style={styles.container}>
        <Text style={styles.task}>Add new task</Text>
        <TextInput style={styles.textInput} onChangeText={text => setNewText(text)}/>
        <Button title="Add" onPress={handleNew}/>
        {data.map(element => 
        <View style={styles.taskBox} key={element.key}>
          <Text style={styles.task}>{element.task}</Text>
          <Button title="X" onPress={() => handleDelete(element.id)}/>
          <CheckBox 
            checked={element.checked}
            onPress={() => checkElem(element.id) }
          />
        </View>
        )}
        <Button title="Delete All" onPress={handleDeleteAll} />
      </View>
    );
}


export default TodoLayout;
