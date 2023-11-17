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
  },
  teams: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Team',
    },
  ],
})

module.exports = mongoose.model('League', leagueSchema)

     