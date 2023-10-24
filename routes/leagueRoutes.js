const express = require('express');
const router = express.Router();
const leagueController = require('../controllers/leagueController');
const { ensureAuth } = require('../middleware/auth');

// Read (GET) a list of leagues
router.get('/leagues', ensureAuth, leagueController.getLeaguesPage);

// Display the Create League form
router.get('/leagues/create', ensureAuth, leagueController.getCreateLeaguePage);

// Create (POST) a new league
router.post('/leagues/create', ensureAuth, leagueController.createLeague);

//router.get('/leagues/:leagueId/teams', ensureAuth, leagueController.getTeamsForLeague);

module.exports = router;