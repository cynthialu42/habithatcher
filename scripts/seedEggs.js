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
            name: "Party Parrot",
            hatching_number: 5,
            start_img: "https://i.imgur.com/8cLyQrO.png",
            hatch_img: "https://i.imgur.com/ijUyJob.png",
            end_img: "https://i.imgur.com/nBGWyam.png",
            is_hatched: false,
            bird_description: "Hi I like to scream"
        },
        {
            egg_id: 1,
            name: "Dad-Joke Duck",
            hatching_number: 3,
            start_img: "https://i.imgur.com/8cLyQrO.png",
            hatch_img: "https://i.imgur.com/vwFL5H7.png",
            end_img: "https://i.imgur.com/RrVVNgz.png",
            is_hatched: false,
            bird_description: "If I threw bread back at you, would you DUCK?"
        }, 
        {
            egg_id: 2,
            name: "Cool Cockatiel",
            hatching_number: 6,
            start_img: "https://i.imgur.com/8cLyQrO.png",
            hatch_img: "https://i.imgur.com/t5ehafX.png",
            end_img: "https://i.imgur.com/aIbvz5k.png",
            is_hatched: false,
            bird_description: "Tiel with it"
        }, 
        {
            egg_id: 3,
            name: "Fast Finch",
            hatching_number: 2,
            start_img: "https://i.imgur.com/8cLyQrO.png",
            hatch_img: "https://i.imgur.com/vwFL5H7.png",
            end_img: "https://i.imgur.com/X9NRI2a.png",
            is_hatched: false,
            bird_description: "The artist didn't even try with me"
        }
        // {
        //     egg_id: 4,
        //     name: "Canary",
        //     hatching_number: 1,
        //     start_img: "https://i.imgur.com/rNGi2Zo.png",
        //     hatch_img: "https://i.imgur.com/Inzn23t.png",
        //     end_img: "https://picsum.photos/200",
        //     is_hatched: false
        // }
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