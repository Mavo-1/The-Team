const League = require('../models/League');
const Game = require('../models/Game');
const Team = require('../models/Team');




//Function to render the Schedule page
exports.getScheduleEJS = async (req,res)=> {
    try{
        //Fetch the games data from DB 
        const leagues= await League.find();
        

        //Render scheudle page and pass games data
        res.render('schedules.ejs', {leagues});
    }catch (error){
        res.render('error.html', { error })
    }

    
}

//Function to render the Schedule page
exports.getGamesEJS = async (req, res) => {
  try {
    const leagueId = req.params.leagueId;
    
    if (!leagueId) {
      return res.status(400).send('Missing leagueId Parameter');
    }

    // Assuming there's a property like "league" in your Game model
    const games = await Game.find({ leagueName: leagueId });

    if (!games) {
      return res.status(404).send('Games not found for the given league');
    }

    const league = await League.findById(leagueId);
    if (!league) {
      return res.status(404).send('League not found');
    } 

    res.render('games.ejs', { league, games });
  } catch (error) {
    res.render('error.html', { error });
  }
};



exports.searchGamesEJS = async (req, res) => {
  try {
    const searchTerm = req.query.search;

    let query = {};
    if (searchTerm) {
      query = {
        $or: [
          { date: { $regex: new RegExp(searchTerm, "i") } },
          { location: { $regex: new RegExp(searchTerm, "i") } },
          { homeTeam: { $regex: new RegExp(searchTerm, "i") } },
          { awayTeam: { $regex: new RegExp(searchTerm, "i") } },
        ],
      };
    }

    const games = await Game.find(query);
    // Additional logic for obtaining league data if needed
    const league = await League.find();
    res.render("games.ejs", { league, games });
  } catch (error) {
    res.render("error.html", { error });
  }
};

// Create a controller function to add a new game.
exports.addGame = async (req, res) => {
  try {
    const league = await League.findById(req.params.leagueId);
    const { date, time, location, homeTeam, awayTeam, homeScore, awayScore } = req.body;

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
      leagueName: league._id, // Change to use "league"
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