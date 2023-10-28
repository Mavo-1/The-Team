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
        type: Number,
        required: true,
    },
    sport: {
        type: String,
        required: true,
    },
    league: {
        type: Schema.Types.ObjectId,
        ref: 'League',
        required: true,
    },
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;