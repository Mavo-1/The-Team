const mongoose = require('mongoose');
const { Schema} = mongoose;

const scheduleSchema = new Schema({
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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team',
        required: true,
    },
    awayTeam: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team',
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