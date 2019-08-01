const Joi = require('joi');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();


const Category = mongoose.model('Category', new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  }
}));

router.get('/', async (req, res) => {
  const categories = await Category.find().sort('name');
  res.send(categories);
});

router.post('/', async (req, res) => {
  const { error } = validateCategory(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  let category = new Category({ name: req.body.name });
  category = await category.save();
  
  res.send(category);
});

router.put('/:id', async (req, res) => {
  const { error } = validatecategory(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const category = await Category.findByIdAndUpdate(req.params.id, { name: req.body.name }, { 
    new: true});
     
  if (!category) return res.status(404).send('The category with the given ID was not found.');
  
  res.send(category);
});

router.delete('/:id', async (req, res) => {
  const category = await Category.findByIdAndRemove(req.params.id);
  
  if (!category) return res.status(404).send('The category with the given ID was not found.');

  res.send(category);
});

router.get('/:id', async (req, res) => {
  const category = await Category.findById(req.params.id);
  
  if (!category) return res.status(404).send('The genre with the given ID was not found.');
  
  res.send(category);
});

function validateCategory(category) {
  const schema = {
    name: Joi.string().min(3).required()
  };

  return Joi.validate(category, schema);
}


module.exports = router;