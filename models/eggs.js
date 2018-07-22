const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eggSchema = new Schema({
    egg_id: { type: Number },
    name: { type: String },
    hatching_number: { type: Number },
    start_img: { type: String },
    end_img: { type: String },
    is_hatched: { type: Boolean, default: false },
    bird_description: { type: String }
});

const Egg = mongoose.model("Egg", eggSchema);

module.exports = Egg;