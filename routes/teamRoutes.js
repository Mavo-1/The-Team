const express = require('express');
const router = express.Router();
const teamsController = require('../controllers/teamController');
const {ensureAuth} = require('../middleware/auth');


// router.post('/leagues/:leagueId/teams', ensureAuth, teamsController.postTeamsEJS)