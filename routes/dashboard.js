const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');
const { ensureAuth } = require('../middleware/auth');


// Dashboard routes
router.get('/', ensureAuth, dashboardController.getDashEJS);
router.get('/practice', ensureAuth, dashboardController.getPracticesEJS);



// router.get('/:leagueId/teams', ensureAuth, dashboardController.getTeamsEJS);



module.exports = router;