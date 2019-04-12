/**
 * 
 * Yikes you found my super secert network code!
 * 
 * This stuff isn't going to be covered in the 
 * Workshop today, but you are welcome to ask about it after.
 */

import io from 'socket.io-client';

export default class ReactSpace { 

  socket;
  postlist = [];

  /**
  * ReactSpace API helper.
  * @constructor
  * @param {string} url - The url of the server you are connecting to.
  */
  constructor(url) {
    this.socket = io(url).connect();
    this.socket.on('connect', () => {
      console.log('Connected!');
    });
  }

  /**
  * Register a callback function to recieve a list of posts.
  * @param {function} callback - The callback that recieves an array of posts.
  */
  subscribeToPostList = (callback) => {
    this.socket.on("postlist", (data) => {
      callback(data);
    });
    callback(this.postlist);
  }
  
  /**
  * Register a callback function to recieve a list of posts.
  * @param {string} username - Name of user creating the post.
  * @param {string} content - Content of the post.
  */
  makePost = (user, content) => {
    const post = {
      user,
      content
    };
    this.socket.emit("newPost", post);
    console.log("Congrats you sent a post!");
    console.log(post);
  }
}
