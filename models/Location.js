const mongoose = require('mongoose');
const { Schema } = mongoose;

const locationSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    address: {
        type: String, 
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type:String,
        required: true,
    },
    zipCode: {
        type:String,
        required: true,
    },
    leagueName: {
        type: Schema.Types.ObjectId,
        ref: 'League',
    },
})

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;