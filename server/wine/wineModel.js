const mongoose = require('mongoose');

const wineSchema = mongoose.Schema({
  wineName: { type: String, required: true },
  vintage: { type: Number, required: true },
  bottleSizeCl: { type: Number, required: true },
  caseSize: { type: Number, required: true },
  caseType: { type: String, required: true },
  costPrice: { type: Number, required: true },
  sellPrice: { type: Number, required: true },
  srcLink: { type: String, required: true },
  source: { type: String, required: true },
  status: Number,
  currency: { type: String, required: true },
});

module.exports = mongoose.model('Wine', wineSchema);
