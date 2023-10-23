const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');

const { ensureAuth } = require('../middleware/auth');


// Dashboard routes
router.get('/', dashboardController.getDashEJS);
router.get('/leagues',ensureAuth,dashboardController.getLeaguesEJS);
router.get('/standings', ensureAuth, dashboardController.getStandingsEJS);
router.get('/schedules', ensureAuth, dashboardController.getScheduleEJS);
router.get('/practice', ensureAuth, dashboardController.getPracticesEJS);

module.exports = router;