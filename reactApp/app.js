import React from 'react';
import ReactDOM from 'react-dom';

let dummyData = ["Come to SF","Master React"];

class Todo extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(<li><button>X</button>{this.props.task}</li>)
  }
}

class TodoList extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <ul>
        {dummyData.map( todo => <Todo task={todo}/>)}
      </ul>
    )
  }

}

ReactDOM.render(<TodoList />, document.getElementById('root'));
