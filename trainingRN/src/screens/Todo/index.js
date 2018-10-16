import React, { Component } from 'react';
import TodoLayout from './layout';
import routes from '../../constants/routes';

let globalCounter = 3;

const todoList = [
  {
    id: 1,
    task: 'Homework',
    checked: false
  },
  {
    id: 2,
    task: 'Study',
    checked: false
  },
  {
    id: 3,
    task: 'Work',
    checked: false
  }
];

class TodoContainer extends Component {
  static navigationOptions = {
    headerTitle: routes.HOME
  };

  state = { todoList, text: '' };

  setNewText = text => {
    this.setState({ text });
  };

  handleDelete = id => {
    this.setState(prevState => ({ todoList: prevState.todoList.filter(elem => elem.id !== id) }));
  };

  addNewTask = () => {
    globalCounter += 1;
    const newTask = { id: globalCounter, task: this.state.text };
    this.setState(prevState => ({ todoList: [...prevState.todoList, newTask] }));
  };

  handleDeleteAll = () => {
    this.setState({ todoList: [] });
  };

  handleGoToBooks = () => {
    this.props.navigation.navigate(routes.BOOK_LIST);
  };

  checkElem = id => {
    this.setState(prevState => ({
      todoList: prevState.todoList.map(elem => (elem.id === id ? { ...elem, checked: !elem.checked } : elem))
    }));
  };

  render() {
    return (
      <TodoLayout
        onDelete={this.handleDelete}
        data={this.state.todoList}
        handleNew={this.addNewTask}
        setNewText={this.setNewText}
        checkElem={this.checkElem}
        onGoToBooks={this.handleGoToBooks}
        onDeleteAll={this.handleDeleteAll}
      />
    );
  }
}

export default TodoContainer;
