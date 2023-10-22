const express = require('express');
const router = express.Router();
const leagueController = require('../controllers/leagueController');
const { ensureAuth } = require('../middleware/auth');



// Read (GET) a list of leagues
router.get('/newLeague', ensureAuth, leagueController.getLeagues);
// Create (POST) a new league
router.post('/newLeague', ensureAuth, leagueController.addLeague);




module.exports = router;