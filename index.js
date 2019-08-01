const mongoose = require('mongoose');
const categories = require('./routes/categories')
const customers = require('./routes/customers');
const movies = require('./routes/movies');
const express = require('express');
const app = express();

mongoose.connect('mongodb://localhost/moviestore')
  .then(() => console.log('connected to mongoDB'))
  .catch(() => console.error('Could not connect to mongoDB'));

app.use(express.json());
app.use('/api/categories', categories);
app.use('/api/customers', customers);
app.use('/api/movies', movies);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port} and thers are no errors.. For now..`));