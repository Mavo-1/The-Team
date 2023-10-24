const League = require('../models/League'); 

//Post request to add a new league
exports.getDashboardPage = async (req, res) => {
    try {
        // Logic to fetch data if needed
        res.render('admin-dash.ejs', { /* data if needed */ });
    } catch (error) {
        res.render('error.html', { error });
    }
};

exports.getStandingsPage = async (req, res) => {
    try {
        // Logic to fetch data if needed
        res.render('standings.ejs', { /* data if needed */ });
    } catch (error) {
        res.render('error.html', { error });
    }
};

exports.getLeaguesPage = async (req, res) => {
    try {
        // Logic to fetch data if needed
        res.render('leagues.ejs', { /* data if needed */ });
    } catch (error) {
        res.render('error.html', { error });
    }
};

exports.getLeaguesEJS = async (req, res) => {
    try {
        const leagues = await League.find();
        res.render('leagues.ejs', { leagues });
    } catch (error) {
        res.render('error.html', { error });
    }
};

exports.addLeagueEJS = async (req, res) => {
    console.log('Add league route hit');
    console.log('Received a POST request to /leagues');
    const { name, sport, startDate, endDate } = req.body;
    
    if (!name || !sport || !startDate || !endDate) {
        return res.status(400).send('All fields are required'); // Add appropriate error handling here
    }

    try {
        const newLeague = new League({
            leagueName: name,
            sport,
            startDate,
            endDate,
        });

        await newLeague.save();

        res.redirect('/newleagues');
    } catch (error) {
        res.render('error.html', { error });
    }
};

