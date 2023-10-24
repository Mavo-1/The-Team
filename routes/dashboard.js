const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');
const leagueController = require('../controllers/leagueController');
const { ensureAuth } = require('../middleware/auth');


// Dashboard routes
router.get('/', ensureAuth, dashboardController.getDashEJS);
router.get('/leagues',ensureAuth,dashboardController.getLeaguesEJS);
router.get('/standings', ensureAuth, dashboardController.getStandingsEJS);
router.get('/schedules', ensureAuth, dashboardController.getScheduleEJS);
router.get('/practice', ensureAuth, dashboardController.getPracticesEJS);

// Display the Create League form
router.get('/createLeague', ensureAuth, dashboardController.getCreateLeaguePage);
// Create (POST) a new league
router.post('/create', ensureAuth, dashboardController.addLeague);
module.exports = router;