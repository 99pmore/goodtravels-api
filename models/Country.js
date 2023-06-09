const mongoose = require('mongoose')

const countrySchema = new mongoose.Schema({
    name: { type: String, required: true },
    region: { type: String, required: true },
    flag: { type: String, required: true },
    capital: { type: String },
    subregion: { type: String },
    population: { type: int },
    map: { type: String },
})
  
const Country = mongoose.model('Country', countrySchema)

module.exports = Country