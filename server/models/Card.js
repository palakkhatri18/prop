// src/models/Card.js
const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  BHK: { type: String, required: true }, 
  status: { type: String, default: null }, 
  area: { type: String, default: null }, 
  tower: { type: String, default: null }, 
  floor: { type: String, default: null }, 
  demand: { type: String, default: null }, 
  partyName: { type: String, default: null }, 
  partyContact: { type: String, required: true },
  society: {type: String, required: true},
  category: {type: String, required: true},
  date: { type: Date, default: null }, 
});

const CardModel = mongoose.model('Card', itemSchema);

module.exports = CardModel;