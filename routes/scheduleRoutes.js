const express = require('express');
const router = express.Router();
const scheduleController = require('../controllers/scheduleController');
const { ensureAuth } = require('../middleware/auth');

//app.get(endpoint, callback)
router.get('/', ensureAuth, scheduleController.getScheduleEJS);
router.get('/:leagueId/games',ensureAuth, scheduleController.getGamesEJS);
// Search for games across all leagues
router.get('/search/games', ensureAuth, scheduleController.searchGamesEJS);
//Create a new game  
router.post('/:leagueId/games', ensureAuth, scheduleController.addGame);

// Delete a game
router.delete('/:gameId', ensureAuth, scheduleController.deleteGame);

//Update
 router.put('/update/:id', ensureAuth, scheduleController.updateGame);





module.exports = router;