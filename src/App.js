import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return <div className="App">
        <nav className="navbar sticky-top navbar-dark bg-dark row">
          <a className="navbar-brand col" href="">
            Clicky Game
          </a>
          <div className="navbar-brand col">Click game to begin!</div>
          <div className="navbar-brand col">Score: 0 | Top Score: 0</div>
        </nav>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Clicky Game</h1>
            <p className="lead">
              Click on an image to earn points, but don't click on any more
              than once!
            </p>
          </div>
        </div>
      </div>;
  }
}

export default App;
