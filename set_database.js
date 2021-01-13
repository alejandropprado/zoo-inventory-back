const mongoose = require('mongoose')

require('dotenv').config()

const AnimalSchema = new mongoose.Schema({
  scientific_name: { type: String, required: true },
  common_name: { type: String, required: true },
  quantity: { type: Number, required: true },
})

const AnimalModel = mongoose.model('Animal', AnimalSchema)

mongoose.connect(process.env.DATABASE_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => AnimalModel.create([{
    scientific_name: 'Bos Bubalus',
    common_name: 'Búfalo de agua',
    quantity: 10,
  }, {
    scientific_name: 'Carcharodon carcharias',
    common_name: 'Tiburón blanco',
    quantity: 100,
  }, {
    scientific_name: 'Panthera onca',
    common_name: 'Jaguar',
    quantity: 10,
  }, {
    scientific_name: 'Panthera leo',
    common_name: 'León',
    quantity: 20,
  }, {
    scientific_name: 'Lemur catta',
    common_name: 'Lémur de cola anillada',
    quantity: 630,
  }, {
    scientific_name: 'Python regius',
    common_name: 'Pitón real',
    quantity: 320,
  }]))
  .then(() => process.exit())
  .catch(() => process.exit(1))