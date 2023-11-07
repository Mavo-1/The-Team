const mongoose = require('mongoose');
const { Schema} = mongoose;

const gameSchema = new Schema({
    //date,time,location, awayteam, hometeam, awayscore, homescore
    date: {
        type: Date,
        required: true,
    },
    time: {
        type: String, // You can store the time as a string, or use a different data type based on  needs.
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    homeTeam: {
        type: String,
        required: true,
    },
    awayTeam: {
        type: String,
        required: true,
    },
    homeScore: {
        type: Number,
        default: 0, 
    },
    awayScore: {
        type: Number,
        default: 0,
    },
})

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;