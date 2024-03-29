const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json()); 

app.use(cors());

app.get('/', (req, res) => {
  res.send('This is Node Backend');
});

app.get('/test', (req, res) => {
    console.log(req.query.name)
    res.send(`GET REQUEST SUCCESS FROM ${req.query.name}`);
  });

app.post('/', (req, res) => {
    console.log(req.body);
    res.send('POST REQUEST SUCCESS');
  });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
