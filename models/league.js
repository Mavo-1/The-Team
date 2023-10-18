const mongoose = require('mongoose')

const leagueSchema = new mongoose.Schema({
  leagueName: {
    type: String,
    required: true,
  },
  sport: {
    type: String,
    required: true,
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

const League = mongoose.model('League', leagueSchema)

module.exports= League;