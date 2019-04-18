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

  subscribers = {};
  /**
   * ReactSpace API helper.
   * @constructor
   */
  constructor() {

    this.socket = io("https://reactspace.appspot.com", {
      transports: ['websocket', 'polling', 'flashsocket']
    }).connect();
    this.socket.on('connect', () => {
      console.log('Connected!');
    });
    this.socket.on("postlist", (data) => {
      this.postlist = data;
      for (let key in this.subscribers) {
        this.subscribers[key](this.postlist);
      }
    });
  }

  /**
   * Register a callback function to recieve a list of posts.
   * @param {function} callback - The callback that recieves an array of posts.
   */
  subscribeToPostList = (callback) => {
    this.subscribers[callback] = callback;
    callback(this.postlist);
  }

  /**
   * Remvoe a callback subscribed function
   * @param {function} callback - The callback that recieves an array of posts.
   */
  removeSubscribeToPostList = (callback) => {
    this.subscribers[callback] = undefined;
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
