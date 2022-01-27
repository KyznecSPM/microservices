const express = require('express');
const axios = require('axios');

const app = express();

const PORT = 4003;

app.use(express.json());

const delay = (ms) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });

app.post('/events', async (req, res) => {
  const { type, data } = req.body;
  console.log('Receiving Event', req.body.type);
  if (type === 'CommentCreated') {
    const { id, content, postId } = data;
    await delay(10000);
    const status = content.includes('orange') ? 'rejected' : 'approved';
    await axios.post('http://event-bus-srv:4005/events', {
      type: 'CommentModerated',
      data: {
        id,
        content,
        status,
        postId
      }
    });
  }

  res.send();
});

app.listen(PORT, () => {
  console.log(`Posts microservice run on port ${PORT}`);
});
