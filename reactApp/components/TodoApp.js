import React from 'react';
import ReactDOM from 'react-dom';
import InputLine from './InputLine.js'
import TodoList from './TodoList.js'
import axios from 'axios';
const dbUrl = 'http://localhost:3000/db';

let dummyData = [{ taskText: "Come to SF", completed: false},
{ taskText: "Master React", completed: true }];

class TodoApp extends React.Component {
  constructor(props){
    super(props);
    this.state={
      todos:[],
    }
  }
  componentDidMount(){
    this.setState({todos:dummyData})
  }

  addTodo (task) {
    axios.post(dbUrl+'/add', {task:task})
      .then(response => {
        this.setState({
          todos: this.state.todos.concat(response.data)
        });
        console.log(response);
      })
      .catch(function(error){
        console.log(error);
      });

    /*console.log(task);
    dummyData.push({
      taskText: task,
      completed: false
    })
    this.setState({
      todos: dummyData
    })*/
  }

  removeTodo (index){
    dummyData.splice(index,1);
    this.setState({
      todos:dummyData
    })
  }

  toggleTodo (index){
    dummyData[index].completed= !dummyData[index].completed;
    this.setState({
      todos:dummyData
    })
  }
  render(){
    return (
      <div>
        <InputLine submit={(task)=>this.addTodo(task)}/>
        <TodoList todos={this.state.todos} todoXClick={(index)=>this.removeTodo(index)} toggleTodo={(index)=>this.toggleTodo(index)}/>
      </div>
    )
  }
}

export default TodoApp;
