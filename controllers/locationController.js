const League = require('../models/League');
const Location = require('../models/Location');


exports.getLocationEJS = async (req,res)=> {
    try{
        const leagues = await League.find();

        res.render('locations.ejs',{leagues})
    }catch (error){
        res.render('error.html',{error})
    }

    
}

//Function to render the Location page
exports.getLocationsEJS = async (req, res) => {
    try {
      const leagueId = req.params.leagueId;
      
      if (!leagueId) {
        return res.status(400).send('Missing leagueId Parameter');
      }
  
      // Assuming there's a property like "league" in your location model
      const locations = await Location.find({ leagueName: leagueId });
  
      if (!locations) {
        return res.status(404).send('Locations not found for the given league');
      }
  
      const league = await League.findById(leagueId);
      if (!league) {
        return res.status(404).send('League not found');
      } 
  
      res.render('gameLocations.ejs', { league, locations });
    } catch (error) {
      res.render('error.html', { error });
    }
  };
  

  // Create a controller function to add a new location.
exports.addLocation = async (req, res) => {
  try {
    const league = await League.findById(req.params.leagueId);
    const { name, address, city, state, zipCode } = req.body;

    // Perform validation and handle other logic.
    console.log(req.body);
    const location = new Location({
      name,
      address,
      city,
      state,
      zipCode,
      leagueName: league._id,
      // Other game fields
    });

    await location.save();

    res.redirect(`/locations/${league._id}/locations`);
  } catch (error) {
    res.status(500).json({ error: 'Error creating the game' });npm
  }
};


exports.deleteLocation = async (req, res) => {
  try {
    const locationId = req.params.locationId;

    // Find the location by ID and remove it from the database
    await Location.findByIdAndRemove(locationId);

    // Redirect back to the locations page
    res.redirect(`/locations/${req.params.leagueId}/locations`);
  } catch (error) {
    res.render('error.html', { error });
  }
};


exports.updateLocation = async (req, res) => {
  const locationId = req.params.id;
  const { name, address, city, state, zipCode} = req.body;

  try{
   const updatedLocation = await Location.findByIdAndUpdate(
     locationId,
     {$set: { name, address, city, state, zipCode} },
     { new: true}
   );

   //Respond with the updated game
   res.json(updatedLocation);
  }catch(error){
   console.error('Error updating location:', error);
   //Respond with an error status
   res.status(500).send('Error updating location');
  }
};