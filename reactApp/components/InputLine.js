import React from 'react';
import ReactDOM from 'react-dom';

class InputLine extends React.Component {
  constructor(props){
    super(props);
    this.state={
      typedText:""
    }
  }
  handleTyping (event){
    this.setState({
      typedText: event.target.value
    })
  }
  handleSubmit (){
    this.props.submit(this.state.typedText);
    this.setState({
      typedText: ""
    })
  }
  render(){
    return(
      <div>
        <input type="text" onChange={(event)=>this.handleTyping(event)} value={this.state.typedText}/>
        <input type="submit" value="Add todo" onClick={ () => this.handleSubmit() }/>
      </div>
    )
  }
}

export default InputLine;
