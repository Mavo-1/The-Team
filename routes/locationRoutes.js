const express = require('express');
const router = express.Router();
const locationController = require('../controllers/locationController');
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, locationController.getLocationEJS);
router.get('/:leagueId/locations',ensureAuth, locationController.getLocationsEJS);
//Create a new location  

router.post('/:leagueId/locations', ensureAuth, locationController.addLocation);
// Delete a game
router.delete('/:leagueId/locations/:locationId', ensureAuth, locationController.deleteLocation);


//Update
router.put('/update/:id', ensureAuth, locationController.updateLocation);
module.exports = router;