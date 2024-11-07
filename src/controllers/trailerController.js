// Traemos el modelo de trailer
const trailer = require('../models/trailer')

const gettrailersByGen = (req, res) => {
    const genre = req.query.genero;
    trailer.find({ genero: genre })
        .then(trailers => res.json(trailers))
        .catch(error => res.status(500).json({ message: 'Error interno del servidor', error }))
}

const gettrailersByActor = (req, res) => {
    const actur = req.query.actor;
    trailer.find({ reparto: actur })
        .then(trailers => res.json(trailers))
        .catch(error => res.status(500).json({ message: 'Error interno del servidor', error }))
    
}

const gettrailersByxTemp = (req, res) => {
    const minSeasons = req.query.minTemporadas;
    trailer.find({ temporadas: { $gte: minSeasons } })
        .then(trailers => res.json(trailers))
        .catch(error => res.status(500).json({ message: 'Error interno del servidor', error }));
};

const createtrailer = (req, res) => {
    const newTrailer = new trailer(req.body);
    newTrailer.save()
        .then(trailer => res.status(201).json(trailer))
        .catch(error => res.status(400).json({ message: 'Error al agregar el trailer', error }));
};

const deletetrailer = (req, res) => {
    trailer.findByIdAndDelete(req.params.id)
        .then(trailer => {
            if (!trailer) return res.status(404).json({ message: 'Trailer no encontrado' });
            res.status(200).json({ message: 'Trailer eliminado correctamente' });
        })
        .catch(error => res.status(500).json({ message: 'Error interno del servidor', error }));
};

const gettrailerById = (req, res) => {
    const { id } = req.params;
    trailer.findById(id)
        .then(trailer => {
            if (!trailer) return res.status(404).json({ message: 'Trailer no encontrado' });
            res.json(trailer);
        })
        .catch(error => res.status(500).json({ message: 'Error interno del servidor', error }));
};

module.exports = {
    gettrailersByGen,
    gettrailersByActor,
    gettrailersByxTemp,
    createtrailer,
    deletetrailer,
    gettrailerById
};