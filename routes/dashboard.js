const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');
const { ensureAuth } = require('../middleware/auth');


// Dashboard routes
router.get('/', ensureAuth, dashboardController.getDashEJS);
router.get('/settings', ensureAuth, dashboardController.getSettingsEJS);



// router.get('/:leagueId/teams', ensureAuth, dashboardController.getTeamsEJS);



module.exports = router;