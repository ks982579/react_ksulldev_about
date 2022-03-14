import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from "./parts/header";
import Body from "./parts/body";
import Feet from "./parts/feet";

/*
  The webpage should have header and Nav bar, a body, and a footer
*/

class App extends React.Component{
  render(){
    return (
      <div className="App">
          <Header />
          <Body />
          <Feet />
      </div>
    );
  }
}

export default App;


/*
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
              Learn React
            </a>
          </header>
*/