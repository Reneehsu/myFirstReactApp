import React from 'react';
import ReactDOM from 'react-dom';

class Todo extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (this.props.task.completed?
      <li><button onClick={()=>this.props.xClick()}>X</button><button onClick={()=>this.props.toggleClick()}>Toggle</button><strike>{this.props.task.taskText}</strike></li> :
      <li><button onClick={()=>this.props.xClick()}>X</button><button onClick={()=>this.props.toggleClick()}>Toggle</button>{this.props.task.taskText}</li>)
  }
}

export default Todo;
