const mongoose = require('mongoose')

const TrailerSchema = new mongoose.Schema({
    id: Number,
    poster: String,
    titulo: String,
    categoria: String,
    gen: String,
    genero: [String],
    busqueda: String,
    resumen: String,
    temporadas: Number,
    duracion: Number,
    reparto: [String],
    trailer: String
})

const trailers = mongoose.model('trailers', TrailerSchema)

module.exports = trailers

