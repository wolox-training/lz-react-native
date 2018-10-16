import React, {Component} from 'react';
import { Text, View, Button, TextInput, Image } from 'react-native';
import { CheckBox } from 'react-native-elements';

import { ADD, DELETE_ALL, ADD_NEW_TASK, X, GO_TO_DETAILS } from '../../constants/constant';
import styles from './styles';
import check from '../../assets/check.jpg'
import checkbox from '../../assets/checkbox.png'

function TodoLayout({ onDelete, data, handleNew, setNewText, checkElem, onDeleteAll, onGoToBooks }) {
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
            checkedIcon={<Image source={check} />}
            uncheckedIcon={<Image source={checkbox} />}
          />
        </View>
        )}
        <Button title={DELETE_ALL} onPress={onDeleteAll} />
        <Button
          title={GO_TO_DETAILS}
          onPress={onGoToBooks}
        />
      </View>
    );
}


export default TodoLayout;
