const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const categories = [
  { id: 1, name: 'Action' },  
  { id: 2, name: 'Horror' },  
  { id: 3, name: 'Romance' },
  { id: 4, name: 'Comedy' },
  { id: 5, name: 'Drama' },
  { id: 6, name: 'Science Fiction'},
  { id: 7, name: 'Fantasy'},  
];

app.get('/api/categories', (req, res) => {
  res.send(categories);
});

app.post('/api/categories', (req, res) => {
  const { error } = validateCategory(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const category = {
    id: category.length + 1,
    name: req.body.name
  };
  category.push(category);
  res.send(category);
});

app.put('/api/categories/:id', (req, res) => {
  const category = category.find(c => c.id === parseInt(req.params.id));
  if (!category) return res.status(404).send('The category with the given ID was not found.');

  const { error } = validatecategory(req.body); 
  if (error) return res.status(400).send(error.details[0].message);
  
  category.name = req.body.name; 
  res.send(category);
});

app.delete('/api/categories/:id', (req, res) => {
  const category = category.find(c => c.id === parseInt(req.params.id));
  if (!category) return res.status(404).send('The category with the given ID was not found.');

  const index = category.indexOf(category);
  category.splice(index, 1);

  res.send(category);
});

app.get('/api/categories/:id', (req, res) => {
  const category = categories.find(c => c.id === parseInt(req.params.id));
  if (!category) return res.status(404).send('The genre with the given ID was not found.');
  res.send(category);
});

function validateCategory(category) {
  const schema = {
    name: Joi.string().min(3).required()
  };

  return Joi.validate(category, schema);
}

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port} and thers is no errors.. For now..`));