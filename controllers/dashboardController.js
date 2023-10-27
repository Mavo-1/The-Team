
const League = require('../models/League');

exports.getDashEJS = async (req, res) => {
  if (req.user) {
    try {
      const leagueCount = await League.countDocuments();
    //const teamCount = await Team.countDocuments();
    //const playerCount = await Player.countDocuments();
      res.render("admin-dash.ejs", { user: req.user, leagueCount,  }); //add teamCount && playerCount later
    } catch (error) {
      res.render("error.html", { error });
    }
  }
};

//Function to render the Leagues Page

exports.getLeaguesEJS = async (req,res) => {
    try {
        // Use the League model to find all leagues in the database
        const leagues = await League.find();

        res.render('leagues.ejs', { leagues });
    } catch (error) {
        res.render('error.html', { error });
    }
};

//Function to render the Standings page
exports.getStandingsEJS = (req,res)=> {
    if(req.user){
        res.render('standings.ejs') //{standingsData} replaces with actually league data if you have it
    }
}


//Function to render the Schedule page
exports.getScheduleEJS = (req,res)=> {
    res.render('schedules.ejs') //{schedulesData} replaces with actually league data if you have it
}


//Function to render the practice page
exports.getPracticesEJS = (req,res)=> {
    res.render('practices.ejs') //{practiceData} replaces with actually league data if you have it
}


// Render the Create League page
exports.getCreateLeaguePage = (req, res) => {
    res.render('createLeague.ejs');
  };
  
