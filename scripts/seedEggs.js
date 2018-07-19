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
        start_img: "https://banner2.kisspng.com/20180204/lhw/kisspng-cartoon-egg-download-clip-art-fried-egg-clipart-5a76fef5aa9607.8608430415177479576987.jpg",
        end_img: "https://icon2.kisspng.com/20180613/qhw/kisspng-cockatiel-know-your-meme-youtube-4chan-cockatiel-5b2111e9323018.5433757215288939292056.jpg"
    },
    {
        egg_id: 1,
        name: "Budgie",
        hatching_number: 5,
        start_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKVEl5jDPc0cBCO9IL7w16hc5wbZG9Bn3DulBDEXBMEUTorb7U",
        end_img: "https://banner2.kisspng.com/20180208/utw/kisspng-birdcage-budgerigar-cockatiel-parakeet-parrot-5a7c728f537c65.973537251518105231342.jpg"
    }, 
    {
        egg_id: 2,
        name: "Conure",
        hatching_number: 1,
        start_img: "http://www.differencebetween.info/sites/default/files/images/egg-white.jpg",
        end_img: "https://ih0.redbubble.net/image.239193911.8858/ap,550x550,12x12,1,transparent,t.u7.png"
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