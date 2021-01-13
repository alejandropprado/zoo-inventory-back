import { Schema, model } from 'mongoose'

const AnimalSchema = new Schema({
  scientific_name: { type: String, required: true },
  common_name: { type: String, required: true },
  quantity: { type: Number, required: true },
})

export default model('Animal', AnimalSchema)
