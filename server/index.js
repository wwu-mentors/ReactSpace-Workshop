const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = 8080;

const MAXPOSTCOUNT = 5;
const defaultPosts = [
  {
    "id": 0,
    "user": "Caleb",
    "content": "I'm Teaching a React Workshop Today! How meta."
  },
  {
    "id": 1,
    "user": "Not Caleb",
    "content": "Wow so excited for this React Workshop Today."
  }
]

let postsCreated = 2;
let postList = [...defaultPosts];
let preventPosts = false;

function addPost(post) { 
  if (preventPosts) { 
    return false;
  }
  if (!post.content || !post.user || post.user === "Your name here!") {
    return false;
  }
  post.id = postsCreated;
  postList.unshift(post);
  if (postList.length > MAXPOSTCOUNT) { 
    postList = postList.slice(0, MAXPOSTCOUNT);
  }
  postsCreated++;
  console.log('User ' + post.user + ' Post ' + post.content);
  return true;
}

io.on('connection', function (socket) {

  socket.on('newPost', function (post) {
    if (addPost(post)) { 
      io.emit('postlist', postList);
    }
  });

  io.emit('postlist', postList);

});

app.get('/deleteall', (req, res) => {
  console.log("deleting posts");
  postList =  [...defaultPosts];
  io.emit('postlist', postList);
  res.send();
});

app.get('/preventposts', (req, res) => {
  console.log("posts now prevented");
  preventPosts = true;
  res.send();
});

app.get('/allowposts', (req, res) => {
  console.log("posts now allowed");
  preventPosts = false;  
  res.send();
});

app.get('/', (req, res) => {
  res.send(postList);
});


http.listen(port, function () {
  console.log('listening on *:' + port);
});