import React, { Component } from "react";
import List from './Components/List';
import {Link} from 'react-router-dom';
import "./App.css";

class App extends Component {
  constructor(){
    super();

    this.state = {
      list: [],
      input: ''
    }
  }

  handleInputChange = (val) => {
    this.setState({
      input: val
    })
  }

  handleAddTask = () => {
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ''
    })
  }

  render() {
    let myList = this.state.list.map((e, i) => {
      return <List key={i} task={e}/>
    })
    return (
      <div className="App">
        <Link to='/home'>Home</Link>
        <h1>My Competency list:</h1>
        <div>
          <input 
            value={this.state.input}
            placeholder='Enter new task'
            onChange={e => this.handleInputChange(e.target.value)}/>
          <button onClick={this.handleAddTask}>Add New Task</button>
        </div>
        <br />
        {myList}
      </div>
    );
  }
}

export default App;
