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




//Function to render the Standings page
exports.getStandingsEJS = (req,res)=> {
    if(req.user){
        res.render('standings.ejs') //{standingsData} replaces with actually league data if you have it
    }
}


//Function to render the practice page
exports.getPracticesEJS = (req,res)=> {
    res.render('practices.ejs') //{practiceData} replaces with actually league data if you have it
}



  
