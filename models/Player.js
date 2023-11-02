const mongoose = require('mongoose');
const { Schema } = mongoose;

const playerSchema = new Schema ({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    age: {
        type: String, 
        required: true,
    },
    dateOfBirth: {
        type: Date,
        required: true,
    },
    contactNum: {
        type: String,
        required: true,
    },
    position: String,
    height: Number,
    weight: Number,
    team: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team'
    }

})

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;