import React from 'react';
import ReactSpace from './ReactSpace';
import logo from './logo.svg';
import './App.css';

const RS = new ReactSpace("http://localhost:80");

/*
* You are in the right file. Don't worry 
* about any other file just stay here!
*/

const NAME = "Your name here!"; // <-- Put your name here!

export class App extends React.Component {

  render() {
    return (
      <div className="App">
        <TopBar />
        Hello World! {NAME}
      </div>
    );
  }
}


class TopBar extends React.Component {
  render() {
    return (
      <header className="TopBar">
        <img src={logo} alt="ReactSpace" />
        <h4> ReactSpace</h4>
        <span>Name: {NAME}</span>
      </header>
    )
  }
}
