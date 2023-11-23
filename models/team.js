const mongoose = require('mongoose')
const { Schema } = mongoose;

const teamSchema = new Schema({
    teamName: {
        type: String,
        required: true,
    },
    coachName: {
        type: String,
        required: true,
    },
    ageLevel: {
        type: String,
        required: true,
    },
    coachNumber: {
        type: String,
        required: true,
    },
    sport: {
        type: String,
        required: true,
    },
    leagueName: {
        type: Schema.Types.ObjectId,
        ref: 'League',
        required: true,
    },
    players: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Player'
        },
       ],
     games: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Game',
        },
     ]  ,
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;