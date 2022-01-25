const express = require('express');
const { randomBytes } = require('crypto');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(express.json());
app.use(cors());

const posts = {};

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/posts', async (req, res) => {
  const id = randomBytes(4).toString('hex');
  const { title } = req.body;

  posts[id] = { id, title };

  await axios.post('http://event-bus-srv:4005/events', {
    type: 'PostCreated',
    data: posts[id]
  });
  res.status(201).send(posts[id]);
});

app.post('/events', (req, res) => {
  console.log('Receiving Event', req.body.type);

  res.send();
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`v22`);
  console.log(`Posts microservice run on port ${PORT}`);
});
