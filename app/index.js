require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const model = require('./db/model.js')
var morgan = require('morgan');
var cors = require('cors');


app.use(morgan('dev'));
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/reviews/:id', (req, res) => {
  if ((req.params.id > 0) && (req.params.id < 101)) {
    model.read(req.params.id, (error, data) => {
      if (error) { console.log(error); }
      res.send(data);
    });
  } else {
    res.status(404).send('Invalid GameID');
  }
});

app.listen(port, () => {
  console.log('running hello world starter app now')
  console.log(`now listening at http://localhost:${port}`)
})