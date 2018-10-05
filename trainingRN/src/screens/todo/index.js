import React, {Component} from 'react';
import TodoLayout from './layout';

var globalCounter = 3;

const todoList = [
  {
    id: 1,
    task: 'Homework'
  },
  {
    id: 2,
    task: 'Study'
  },
  {
    id: 3,
    task: 'Work'
  }
]

class TodoContainer extends Component {
  state={ todoList: todoList, text: '' }

  setNewText = text => {
    this.setState({ text })
  }

  handleDelete = id => {
    this.setState(prevState => ({ todoList: prevState.todoList.filter(elem => elem.id !== id)}))
  }

  addNewTask = () => {
    globalCounter += 1;
    const newTask = { id: globalCounter, task: this.state.text }
    this.setState(prevState => ({ todoList: [...prevState.todoList, newTask] }))
  }

  render() {
    return (
    <TodoLayout
      handleDelete={this.handleDelete}
      data={this.state.todoList}
      handleNew={this.addNewTask}
      setNewText={this.setNewText}
      />)
  }
}

export default TodoContainer