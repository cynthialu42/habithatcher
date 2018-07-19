const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const habitSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    iteration: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    count: {
        type: Number
    },
    complete: {
        type: Boolean,
        default: false
    },
    egg:{
        type: Number
    }
});

const Habit = mongoose.model('Habit', habitSchema);

module.exports = Habit;