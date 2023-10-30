const express = require('express');
const router = express.Router();
const leagueController = require('../controllers/leagueController');
const { ensureAuth } = require('../middleware/auth');


// Display the Create League form
router.get('/',ensureAuth, leagueController.getLeaguesEJS);
// Create (POST) a new league

router.get('/create', ensureAuth, leagueController.getCreateLeaguePage);
router.post('/create', ensureAuth, leagueController.addLeague);
router.delete('/:leagueId', ensureAuth, leagueController.deleteLeague);

router.get('/:leagueId/teams', ensureAuth, leagueController.getTeamsEJS);
router.post('/:leagueId/teams', ensureAuth, leagueController.postTeamsEJS);

module.exports = router;