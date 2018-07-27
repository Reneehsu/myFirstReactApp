import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo.js'

class TodoList extends React.Component {
  constructor(props){
    super(props);
    this.state={
      todos:[],
    }
  }
  render(){
    return(
      <ul>
        {this.props.todos.map( (todo,index) => <Todo task={todo} xClick={()=>this.props.todoXClick(index)} toggleClick={()=>this.props.toggleTodo(index)}/>)}
      </ul>
    )
  }
}

export default TodoList;
