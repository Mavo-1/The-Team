const League = require('../models/league'); 

//Post request to add a new league

exports.getLeagues = async (req, res) => {
    try {
        // Retrieve the list of leagues from your MongoDB database
        const leagues = await League.find();

        // Render the 'leagues.html' view and pass the data
        res.render('leagues.html', { leagues });
    } catch (error) {
        // Handle any potential errors
        res.render('error.html', { error });
    }
};

exports.addLeague = async (req, res) => {
    console.log('Received a POST request to /leagues');
    const { name, sport, startDate, endDate } = req.body;
    console.log('Received form data:', { name, sport, startDate, endDate });
    try {
        // Create a new league document using the League Model
        const newLeague = new League({
            leagueName: name,
            sport,
            startDate,
            endDate,
        });

        // Save the new league to the database
        await newLeague.save();

        // Redirect to the leagues page after adding
        res.redirect('/leagues');
    } catch (error) {
        // Handle any potential errors
        res.render('error.html', { error });
    }
};

