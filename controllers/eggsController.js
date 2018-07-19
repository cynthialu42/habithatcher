const db = require('../models');

module.exports = {
    findAll: function(req, res){
        db.Egg
            .find(req.query)
            .then(dbEggs => res.json(dbEggs))
            .catch(err => res.status(422).json(err));
    },
    findOne: function(req, res){
        db.Egg
            .findOne({ egg_id: req.params.id })
            .then(dbEggs => res.json(dbEggs))
            .catch(err => res.status(422).json(err));
    }
};