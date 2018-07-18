const db = require('../models');

module.exports = {
    findAll: function(req, res){
        db.Habit
            .find(req.query)
            .sort({ date: -1 })
            .then(dbHabits => res.json(dbHabits))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res){
        db.Habit
            .findById(req.params.id)
            .then(dbHabits => res.json(dbHabits))
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res){
        db.Habit
            .create(req.body)
            .then(dbHabits => res.json(dbHabits))
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res){
        db.Habit
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbHabits => res.json(dbHabits))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res){
        db.Habit
            .findById({ _id: req.params.id })
            .then(dbHabits => dbHabits.remove())
            .then(dbHabits => res.json(dbHabits))
            .catch(err => res.status(422).json(err));
    }
};