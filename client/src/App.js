import React from "react";
import ReactSpace from "./ReactSpace";

const RS = new ReactSpace();

/*
 * You are in the right file. Don't worry
 * about any other file just stay here!
 */

const NAME = "Your naasdfme here!"; // <-- Put your name here!

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <CreatePost />
        <PostList />
      </div>
    );
  }
}

class TopBar extends React.Component {
  render() {
    return (
      <header className="TopBar">
        <img src="./logo.svg" alt="ReactSpace" />
        <h4> ReactSpace</h4>
        <span>Name: {NAME}</span>
      </header>
    );
  }
}

class CreatePost extends React.Component {
  state = {
    postText: ""
  };

  createPost = () => {
    RS.makePost(NAME, this.state.postText);
    this.setState({
      postText: ""
    });
  };

  render() {
    return (
      <div className="Container">
        <input
          placeholder="Enter Post Text"
          value={this.state.postText}
          onChange={event => {
            this.setState({ postText: event.target.value });
          }}
        />
        <button onClick={this.createPost}>Create Post!</button>
      </div>
    );
  }
}

class PostList extends React.Component {
  state = {
    posts: []
  };

  componentDidMount() {
    RS.subscribeToPostList(posts => {
      this.setState({
        posts: posts
      });
    });
  }

  render() {
    return (
      <div>
        {this.state.posts.map(post => (
          <div key={post.id} className="Container">
            <div className="UserName">{post.user}</div>
            <div className="PostContent">{post.content}</div>
          </div>
        ))}
      </div>
    );
  }
}
