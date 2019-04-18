import React, { useState, useEffect } from "react";
import ReactSpace from "./ReactSpace";

const RS = new ReactSpace();

/*
 * You are in the right file. Don't worry
 * about any other file just stay here!
 */

const NAME = "Your name here!"; // <-- Put your name here!

export function App() {
    return (
      <div className="App">
        <TopBar />
        <CreatePost />
        <PostList />
      </div>
    );
}


function TopBar() {
    return (
      <header className="TopBar">
        <img src="./logo.svg" alt="ReactSpace" />
        <h4> ReactSpace</h4>
        <span>Name: {NAME}</span>
      </header>
    );
}


function CreatePost() { 
  const [postText, setPostText] = useState("");

  const createPost = () => {
    RS.makePost(NAME, postText);
    setPostText("")
  };

   return (
      <div className="Container">
        <input
          placeholder="Enter Post Text"
          value={postText}
          onChange={event => {
            setPostText(event.target.value);
          }}
        />
        <button onClick={createPost}>Create Post!</button>
      </div>
    );
}

function PostList() { 

  const [postlist, setPostList] = useState([]);

  useEffect(() => {
    RS.subscribeToPostList(setPostList);
  }, []);

  return (
      <div>
        {postlist.map(post => (
          <div key={post.id} className="Container">
            <div className="UserName">{post.user}</div>
            <div className="PostContent">{post.content}</div>
          </div>
        ))}
      </div>
    );
}