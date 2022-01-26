const express = require('express');
const { randomBytes } = require('crypto');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 4001;

const commentsByPostId = {};

app.get('/posts/:id/comments', (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

app.post('/posts/:id/comments', async (req, res) => {
  const commentId = randomBytes(4).toString('hex');
  const { content } = req.body;
  const { id: postId } = req.params;

  const comments = commentsByPostId[postId] || [];

  const newComment = { id: commentId, content, status: 'pending', postId };

  comments.push(newComment);

  commentsByPostId[postId] = comments;

  await axios.post('http://event-bus-srv:4005/events', {
    type: 'CommentCreated',
    data: newComment
  });

  res.status(201).send(comments);
});

app.post('/events', async (req, res) => {
  console.log('Receiving Event', req.body.type);

  const { type, data } = req.body;
  if (type === 'CommentModerated') {
    const { id, status, postId } = data;

    const comment = commentsByPostId[postId].find(
      (comment) => comment.id === id
    );
    comment.status = status;

    await axios.post('http://event-bus-srv:4005/events', {
      type: 'CommentUpdated',
      data: comment
    });
  }

  res.send();
});

app.listen(PORT, () => {
  console.log(`Posts microservice run on port ${PORT}`);
});
