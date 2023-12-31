const express = require('express');
const router = express.Router();
const locationController = require('../controllers/locationController');
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, locationController.getLocationEJS);
router.get('/:leagueId/locations',ensureAuth, locationController.getLocationsEJS);
//Create a new location  

//router.post('/:leagueId/locations', ensureAuth, locationController.addLocation);


module.exports = router;