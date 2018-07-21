/*egg_id: { type: Number },
    name: { type: String },
    hatching_number: { type: Number },
    start_img: { type: String },
    end_img: { type: String } */

const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/habithatcher"
);

const eggSeed = [
    {
        egg_id: 0,
        name: "Cockatiel",
        hatching_number: 2,
        start_img: "https://www.freeiconspng.com/uploads/red-square-png-14.png",
        end_img: "https://lh3.googleusercontent.com/VT-PqxMMsA2wPy7kzmuKGDIzaA3AGuXKExqnfOfwTEy5AvLIMTranbfNGheRr457RD4=s180",
        is_hatched: false
    },
    {
        egg_id: 1,
        name: "Budgie",
        hatching_number: 5,
        start_img: "https://www.freeiconspng.com/uploads/red-square-png-14.png",
        end_img: "http://www.guoguiyan.com/data/out/183/68419005-square-wallpapers.jpg",
        is_hatched: false
    }, 
    {
        egg_id: 2,
        name: "Conure",
        hatching_number: 1,
        start_img: "https://www.freeiconspng.com/uploads/red-square-png-14.png",
        end_img: "https://image.freepik.com/free-vector/pack-of-colorful-square-emoticons_23-2147589525.jpg",
        is_hatched: false
    }
];

db.Egg
    .remove({})
    .then(() => db.Egg.collection.insertMany(eggSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.log(err);
        process.exit(1);
    });