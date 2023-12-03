const Team = require('../models/Team')
const League = require('../models/League');
const Player = require('../models/Player')

exports.getDashEJS = async (req, res) => {
    
    if (!req.user) {
    res.redirect('/login');
  }else{
    try {
      const leagueCount = await League.countDocuments();
      const teamCount = await Team.countDocuments();
      const playerCount = await Player.countDocuments();
      res.render("admin-dash.ejs", { user: req.user, leagueCount, teamCount, playerCount }); //add teamCount && playerCount later
    } catch (error) {
      res.render("error.html", { error });
    }
  }
};




//Function to render the practice page
exports.getSettingsEJS = (req,res)=> {
    res.render('settings.ejs') //{practiceData} replaces with actually league data if you have it
}



  
