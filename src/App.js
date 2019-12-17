import React, { Component } from "react";
import List from './Components/List';
import {Link} from 'react-router-dom';
import routes from './routes';
import "./App.css";

class App extends Component {
  constructor(){
    super();

    this.state = {
      list: [],
      name: '',
      price: 0
    }
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleAddTask = () => {
    this.setState({
      list: [...this.state.list, this.state.name, this.state.price],
      name: '',
      price: 0
    })
  }

  render() {
    let myList = this.state.list.map((e, i) => {
      return <List key={i} task={e}/>
    })
    return (
      <div className="App">
        <Link to='/home'>Home</Link>
        <h1>My Food list:</h1>
        <div>
          <input 
            value={this.state.name}
            placeholder='Enter new food'
            name='name'
            onChange={e => this.handleInputChange(e)}
          />
          <input 
            value={this.state.price}
            name='price'
            type='number'
            onChange={e => this.handleInputChange(e)}
          />
          <button onClick={this.handleAddTask}>Add Food</button>
        </div>
        <br />
        {myList}
        {routes}
      </div>
    );
  }
}

export default App;
