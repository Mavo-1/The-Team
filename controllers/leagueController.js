const League = require('../models/League'); 

//Post request to add a new league

exports.getLeagues = async (req, res) => {
    try {
        const leagues = await League.find();
        res.render('leagues.html', { leagues });
    } catch (error) {
        res.render('error.html', { error });
    }
};

exports.addLeague = async (req, res) => {
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

        res.redirect('/leagues');
    } catch (error) {
        res.render('error.html', { error });
    }
};

