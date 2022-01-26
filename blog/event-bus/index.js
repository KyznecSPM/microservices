const express = require('express');
const cors = require('cors');
const { default: axios } = require('axios');

const app = express();

app.use(express.json());
app.use(cors());

const events = [];

app.post('/events', (req, res) => {
  const event = req.body;
  console.log('Receiving Event', req.body.type);

  events.push(event);

  axios.post('http://posts-clusterip-srv:4000/events', event);
  axios.post('http://comments-srv:4001/events', event);
  axios.post('http://query-srv:4002/events', event);
  axios.post('http://moderation-srv:4003/events', event);

  res.send({ status: 'OK' });
});

app.get('/events', (req, res) => res.send(events));

const PORT = 4005;

app.listen(PORT, () => {
  console.log(`Posts microservice run on port ${PORT}`);
});
