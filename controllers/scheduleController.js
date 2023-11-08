const Game = require('../models/Game');

//Function to render the Schedule page
exports.getScheduleEJS = async (req,res)=> {
    try{
        //Fetch the games data from DB 
        const game = await Game.find();

        //Render scheudle page and pass games data
        res.render('schedules.ejs', {game});
    }catch (error){
        res.render('error.html', { error })
    }

    
}

// Create a controller function to add a new game.
exports.addGame = async (req, res) => {
    try {
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
        // Other game fields
      });
  
      await game.save();
  
      res.redirect('/schedule')
    } catch (error) {
      res.status(500).json({ error: 'Error creating the game' });
    }
  };



  exports.updateGame = async (req, res) => {
    try {
      const gameId = req.params.id;
      const updatedData = req.body;
  
      // Retrieve the game from the database
      const game = await Game.findById(gameId);
  
      if (!game) {
        return res.status(404).json({ error: 'Game not found' });
      }
  
      // Update the game object with the updated data
      // You should validate and apply the updatedData to game here
      switch (updatedData.fieldToUpdate) {
        case 'date':
          game.date = updatedData.date;
          break;
        case 'time':
          game.time = updatedData.time;
          break;
        case 'location':
          game.location = updatedData.location;
          break;
        case 'homeTeam':
          game.homeTeam = updatedData.homeTeam;
          break;
        case 'awayTeam':
          game.awayTeam = updatedData.awayTeam;
          break;
        case 'homeScore':
          game.homeScore = updatedData.homeScore;
          break;
        case 'awayScore':
          game.awayScore = updatedData.awayScore;
          break;
        default:
          // Handle unknown fields or provide an error message
          break;
      }
  
      // Save the updated game to the database
      await game.save();
  
      // Pass the updated game data when rendering 'schedules.ejs'
      res.status(200).json(game);
      res.render('schedules.ejs', { game: game }); // Use the 'game' variable here
    } catch (error) {
      res.status(500).json({ error: 'Error updating the game' });
      
    }
  };
  




// Delete the game
exports.deleteGame = async (req, res) => {
  try {
    const game = await Game.findByIdAndRemove(req.params.id);

    if (!game) {
      return res.status(404).json({ error: 'Game not found' });
    }

    res.status(204).send();
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

  // Create a new controller function to get games by date.
exports.getGamesByDate = async (req, res) => {
    try {
      const { date } = req.query; // Assuming you send the date as a query parameter.
      const games = await Game.find({ date });
      
      res.status(200).json(games);
    } catch (error) {
      res.status(500).json({ error: 'Error retrieving games by date' });
    }
  };
  
  // Create a new controller function to get games by location.
  exports.getGamesByLocation = async (req, res) => {
    try {
      const { location } = req.query; // Assuming you send the location as a query parameter.
      const games = await Game.find({ location });
      
      res.status(200).json(games);
    } catch (error) {
      res.status(500).json({ error: 'Error retrieving games by location' });
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
