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
            start_img: "https://i.imgur.com/8cLyQrO.png",
            hatch_img: "https://i.imgur.com/ijUyJob.png",
            end_img: "https://i.imgur.com/fHh9ibA.png",
            is_hatched: false,
            bird_description: "cockatiel bird description"
        },
        {
            egg_id: 1,
            name: "Budgie",
            hatching_number: 5,
            start_img: "https://i.imgur.com/8cLyQrO.png",
            hatch_img: "https://i.imgur.com/vwFL5H7.png",
            end_img: "https://i.imgur.com/nxGbBPD.png",
            is_hatched: false,
            bird_description: "Budgie bird description"
        }, 
        {
            egg_id: 2,
            name: "Conure",
            hatching_number: 1,
            start_img: "https://i.imgur.com/8cLyQrO.png",
            hatch_img: "https://i.imgur.com/t5ehafX.png",
            end_img: "https://i.imgur.com/505Iq2a.png",
            is_hatched: false,
            bird_description: "Conure bird description"
        }, 
        // {
        //     egg_id: 3,
        //     name: "Cockatoo",
        //     hatching_number: 1,
        //     start_img: "https://i.imgur.com/Jcv1RkT.png",
        //     hatch_img: "https://i.imgur.com/NDPI19g.png",
        //     end_img: "https://picsum.photos/200",
        //     is_hatched: false
        // }, 
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