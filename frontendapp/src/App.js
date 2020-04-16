import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {x: "your text here"}
  }
  componentDidMount(){
    axios.get("http://localhost:3001")
    .then(res => {
      this.setState({x: res.data.test});
    })
    .catch(err => console.log(err))
  }
  
  
  
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.state.x}
          </a>
        </header>
      </div>
    );
  }
  
}

export default App;
