const express = require('express');
const router = express.Router();
const leagueController = require('../controllers/leagueController');
const { ensureAuth } = require('../middleware/auth');


// Display the Create League form
router.get('/',ensureAuth, leagueController.getLeaguesEJS);
// Create (POST) a new league
router.post('/create', ensureAuth, leagueController.addLeague);
router.delete('/:leagueId', ensureAuth, leagueController.deleteLeague);


//router.get('/leagues/:leagueId/teams', ensureAuth, leagueController.getTeamsForLeague);

module.exports = router;