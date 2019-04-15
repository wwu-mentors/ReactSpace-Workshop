import React from 'react';
import ReactSpace from './ReactSpace';
import logo from './logo.svg';
import './App.css';

const RS = new ReactSpace();

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
        <CreatePost />
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

class CreatePost extends React.Component {

  state = {
    postText: "",
  }

  createPost = () => {
    RS.makePost(NAME, this.state.postText);
    this.setState({
      postText: ""
    });
  }

  render() {
    return (
      <div className="Container">
        <input
          placeholder="Enter Post Text"
          value={this.state.postText}
          onChange={(event) => { this.setState({ postText: event.target.value }) }} />
        <button onClick={this.createPost} >Create Post!</button>
      </div>
    )
  }
}

