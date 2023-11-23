const express = require('express');
const router = express.Router();
const standingController = require('../controllers/standingsController');
const { ensureAuth } = require('../middleware/auth');

router.get('/', ensureAuth, standingController.getStandingsEJS);
router.get('/:leagueId',ensureAuth,standingController.getLeagueStandings)



module.exports = router;