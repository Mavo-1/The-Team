const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');

const { ensureAuth } = require('../middleware/auth');


// Dashboard routes
router.get('/', ensureAuth, dashboardController.getDash);
router.get('/leagues',ensureAuth,dashboardController.getLeagues);
router.get('/standings', ensureAuth, dashboardController.getStandings);
router.get('/schedules', ensureAuth, dashboardController.getSchedule);
router.get('/practices', ensureAuth, dashboardController.getPractices);

module.exports = router;