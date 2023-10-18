const mongoose = require('mongoose')

const leagueSchema = new mongoose.Schema({
  leagueName: {
    type: String,
    required: true,
  },
  sport: {
    type: String,
    required: true,
    enum: ['soccer','basketball','volleyball','flag football','baseball']
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  }
})

module.exports = mongoose.model('League', leagueSchema)

