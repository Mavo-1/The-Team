const League = require('../models/League');
const Game = require('../models/Game');



//Function to render the Schedule page
exports.getScheduleEJS = async (req,res)=> {
    try{
        //Fetch the games data from DB 
        const leagues= await League.find();
        const games = await Game.find();

        //Render scheudle page and pass games data
        res.render('schedules.ejs', {leagues, games});
    }catch (error){
        res.render('error.html', { error })
    }

    
}

//Function to render the Schedule page
exports.getGamesEJS = async (req,res)=> {
  try{
      const leagueId= req.params.leagueId; //retrieve leagueId from query parameters
      
      if(!leagueId){
        return res.status(400).send('Missing leaugeId Parameter');
      }

      const league = await League.findById(leagueId);
      if(!league) {
        return res.status(404).send('League not found');
      };

      const games = await Game.find( { leagueName: league._id });
      //Render scheudle page and pass games data
      res.render('games.ejs', { league, games})
  }catch (error){
      res.render('error.html', { error })
  }

  
}

// Create a controller function to add a new game.
exports.addGame = async (req, res) => {
    try {
      const league= await League.findById(req.params.leagueId);
      const { date, time, location, homeTeam, awayTeam, homeScore, awayScore} = req.body;
      
      // Perform validation and handle other logic.
      console.log(req.body);
      const game = new Game({
        date,
        time,
        location,
        homeTeam,
        awayTeam,
        homeScore,
        awayScore,
        leagueName: league._id
        // Other game fields
      });
  
      await game.save();
  
      res.redirect(`/schedules/${league._id}/games`);
    } catch (error) {
      res.status(500).json({ error: 'Error creating the game' });
    }
  };



  exports.updateGame = async (req, res) => {
   const gameId = req.params.id;
   const { homeScore, awayScore} = req.body;

   try{
    const updatedGame = await Game.findByIdAndUpdate(
      gameId,
      {$set: { homeScore, awayScore} },
      { new: true}
    );

    //Respond with the updated game
    res.json(updatedGame);
   }catch(error){
    console.error('Error updating game scores:', error);
    //Respond with an error status
    res.status(500).send('Error updating game scores');
   }
};
  




// Delete the game
exports.deleteGame = async (req, res) => {
  try {
    const gameId = req.params.gameId;

    //Find the game by ID and remove it from the database
    await Game.findByIdAndRemove(gameId);

    //Fetch the games data from DB 
    const games = await Game.find();

    //Render scheudle page and pass games data
    res.render('schedules.ejs', {games});
  } catch (error) {
    res.status(500).json({ error: 'Error deleting the game' });
  }
};

  
  exports.getGames = async (req, res) => {
    try {
      const games = await Game.find();
  
      res.status(200).json(games);
    } catch (error) {
      res.status(500).json({ error: 'Error retrieving games' });
    }
  };


  
 
  
  // Create a controller function to get teams in a specific league by leagueID.
exports.getTeamsInLeague = async (req, res) => {
    try {
      const { leagueID } = req.params; // Assuming leagueID is part of the URL.
      const teams = await Team.find({ league: leagueID });
  
      res.status(200).json(teams);
    } catch (error) {
      res.status(500).json({ error: 'Error retrieving teams in the league' });
    }
  };

  // Modify the getTeamsInLeagueByName function in your controller
exports.getTeamsInLeagueByName = async (req, res) => {
  try {
      const { leagueName } = req.params;
      const teams = await Team.find({ leagueName });
      res.status(200).json(teams);
  } catch (error) {
      res.status(500).json({ error: 'Error retrieving teams in the league' });
  }
};

exports.getAllLeagues = async (req, res) => {
  try {
      // Fetch all leagues from the database
      const leagues = await League.find({}, 'name'); // Assuming the league model has a 'name' field
      res.render('leagues.ejs', { leagues });
  } catch (error) {
      res.status(500).json({ error: 'Error retrieving leagues' });
  }
};

exports.getTeamsInSelectedLeague = async (req, res) => {
  try {
      const { selectedLeague } = req.query;
      const teams = await Team.find({ leagueName: selectedLeague });
      res.status(200).json(teams);
  } catch (error) {
      res.status(500).json({ error: 'Error retrieving teams in the selected league' });
  }
};
