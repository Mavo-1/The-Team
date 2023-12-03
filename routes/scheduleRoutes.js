const express = require('express');
const router = express.Router();
const scheduleController = require('../controllers/scheduleController');
const { ensureAuth } = require('../middleware/auth');

router.get('/', ensureAuth, scheduleController.getScheduleEJS);



//Create a new game
router.post('/', ensureAuth, scheduleController.addGame);

// Delete a game
router.delete('/:gameId', ensureAuth, scheduleController.deleteGame);

//Update
 router.post('/update/:id', ensureAuth, scheduleController.updateGame);



// //Get games by date
// router.get("/gamesByDate", ensureAuth, scheduleController.getGamesByDate);

// //Get games by location
// router.get('/gameByLocation', ensureAuth, scheduleController.getGamesByLocation);

// //Get teams in a specific league by 
// router.get('/teamsInLeague/:leagueID', ensureAuth, scheduleController.getTeamsInLeague);

// //Ge tteams by league name
// router.get('/teamsInLeague/:leagueName', ensureAuth, scheduleController.getTeamsInLeagueByName);

// //Fetches all leagues to render dropdown page.
// router.get('/leagues', ensureAuth, scheduleController.getAllLeagues);


module.exports = router;