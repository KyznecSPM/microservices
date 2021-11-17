const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const posts = {};

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/events', (req, res) => {
  // console.log('Receiving Event', req.body.type);
  const { type, data } = req.body;
  if (type === 'PostCreated') {
    const { id, title } = data;
    posts[id] = { id, title, comments: [] };
  }

  if (type === 'CommentCreated') {
    const { id, content, postId } = data;
    posts[postId].comments.push({ id, content });
  }
  console.log(posts);
  res.send();
});

app.listen(4002, () => {
  console.log('Posts microservice run on port 4002');
});
