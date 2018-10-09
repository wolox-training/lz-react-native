import React, {Component} from 'react';
import { Text, View, Button, TextInput, Image } from 'react-native';
import { CheckBox } from 'react-native-elements';
import styles from './styles';
import check from '../../assets/check.jpg'
import checkbox from '../../assets/checkbox.png'

function TodoLayout({ handleDelete, data, handleNew, setNewText, checkElem, handleDeleteAll, handleGoToBooks }) {
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
            checkedIcon={<Image source={check} />}
            uncheckedIcon={<Image source={checkbox} />}
          />
        </View>
        )}
        <Button title="Delete All" onPress={handleDeleteAll} />
        <Button
          title="Go to Details"
          onPress={handleGoToBooks}
        />
      </View>
    );
}


export default TodoLayout;
