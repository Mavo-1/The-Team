const express = require('express');
const router = express.Router();
const leagueController = require('../controllers/leagueController');
const { ensureAuth } = require('../middleware/auth');

// router.get('/dashboard', ensureAuth, leagueController.getDashboardPage);
// router.get('/leagues', ensureAuth, leagueController.getLeaguesPage);
// router.get('/standings', ensureAuth, leagueController.getStandingsPage);

// Read (GET) a list of leagues
router.get('/newLeague', ensureAuth, leagueController.getLeaguesEJS);
// Create (POST) a new league
router.post('/newLeague', ensureAuth, leagueController.addLeagueEJS);




module.exports = router;