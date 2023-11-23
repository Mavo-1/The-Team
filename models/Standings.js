const mongoose = require('mongoose');
const { Schema } = mongoose;

const standingSchema = new Schema({
    team: {
        type: Schema.Types.ObjectId,
        ref: 'Team',
        required: true,
    },
    points: {
        type: Number,
        default: 0,
    },
    // other standing properties
});

const Standing = mongoose.model('Standing', standingSchema);

module.exports = Standing;
