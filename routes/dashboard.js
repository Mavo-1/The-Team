const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');
const leagueController = require('../controllers/leagueController')
const { ensureAuth } = require('../middleware/auth');


// Dashboard routes
router.get('/', ensureAuth, dashboardController.getDashEJS);
router.get('/leagues',ensureAuth,leagueController.getLeaguesEJS);
router.get('/standings', ensureAuth, dashboardController.getStandingsEJS);
router.get('/schedules', ensureAuth, dashboardController.getScheduleEJS);
router.get('/practice', ensureAuth, dashboardController.getPracticesEJS);



// router.get('/:leagueId/teams', ensureAuth, dashboardController.getTeamsEJS);



module.exports = router;