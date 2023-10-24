const express = require('express');
const router = express.Router();
const leagueController = require('../controllers/leagueController');
const { ensureAuth } = require('../middleware/auth');




// // Create (POST) a new league
// router.post('/leagues/create', ensureAuth, leagueController.addLeague);

//router.get('/leagues/:leagueId/teams', ensureAuth, leagueController.getTeamsForLeague);

module.exports = router;