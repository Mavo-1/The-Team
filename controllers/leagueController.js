const League = require('../models/League');



exports.getLeaguesEJS = async (req,res) => {
    try {
        // Use the League model to find all leagues in the database
        const leagues = await League.find();

        res.render('leagues.ejs', { leagues });
    } catch (error) {
        res.render('error.html', { error });
    }
};

exports.addLeague = async (req, res) => {
    try {
        // Process the form data from the request
        const { leagueName, sport, startDate, endDate } = req.body;

        // Create a new league in the database
        const newLeague = new League({
            leagueName,
            sport,
            startDate,
            endDate,
        });

        await newLeague.save();

        // Redirect back to the leagues page
        res.redirect('/leagues');
    } catch (error) {
        res.render('error.html', { error });
    }
}
