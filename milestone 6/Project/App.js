import React from "react";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      table: 0,

    };
    this.count = this.count.bind(this);
  }
  //It helps in calling count after evry 1.5 seconds
  componentDidMount(){
    this.next = setInterval(() => this.count(),1500)
  }
  //it is life cycle method called just before the component is unmounted
  //it helps in cleanup activities
  componentWillUnmount(){
   clearInterval(this.next)
  }
  //it is basically used for updating the current no. by 2 as we are running table of 2
  //it updates the value by 2 after every 1.5 seconds
  count() {
    this.setState(prevState => {
      return {
        table: prevState.table + 2
      };
    });
  }

//It is basically used for returning JSX
//helps to modify state that would have to happen therefore it is pure
  render() {
    return (
      <div className="App">
        <h1>Table of 2</h1>
        <button onClick={this.count}>Table</button>
        <h2 style={this.state.color}>{this.state.table}</h2>
      </div>
    );
  }
}

export default App;
