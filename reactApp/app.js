import React from 'react';
import ReactDOM from 'react-dom';

let dummyData = [{ taskText: "Come to SF", completed: false},
{ taskText: "Master React", completed: true }];

class InputLine extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <input type="text"/>
        <input type="submit" value="Add todo"/>
      </div>
    )
  }
}

class Todo extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (this.props.task.completed? <li><button>X</button><strike>{this.props.task.taskText}</strike></li> :
      <li className="blue"><button>X</button>{this.props.task.taskText}</li>)
  }
}

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
        {this.props.todos.map( todo => <Todo task={todo}/>)}
      </ul>
    )
  }
}

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
  render(){
    return (
      <div>
        <InputLine />
        <TodoList todos={this.state.todos}/>
      </div>
    )
  }
}


ReactDOM.render(<TodoApp />, document.getElementById('root'));
