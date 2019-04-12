const io = require('socket.io')(80);
const app = require('express')();
const port = 3001;

const MAXPOSTCOUNT = 25;

let postsCreated = 0;
let postList = [];
let preventPosts = false;


function addPost(post) { 
  if (preventPosts) { 
    return false;
  }
  if (!post.content || !post.user) {
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
  postList = []
  io.emit('postlist', postList);
  res.send();
});
app.get('/preventposts', (req, res) => {
  preventPosts = true;
  res.send();
});
app.get('/allowposts', (req, res) => {
  preventPosts = false;
  res.send();
});

app.listen(port, () => console.log(`ReactSpace API listening on port ${port}! and sockets on port 80`));
