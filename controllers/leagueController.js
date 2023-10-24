const League = require('../models/League');

// Render the Leagues page
exports.getLeaguesPage = async (req, res) => {
  try {
    const leagues = await League.find();
    res.render('leagues', { leagues });
  } catch (error) {
    res.render('error.html', { error });
  }
};

// Render the Create League page
exports.getCreateLeaguePage = (req, res) => {
  res.render('createLeague');
};

// Handle the creation of a new league
exports.createLeague = async (req, res) => {
  const { leagueName, sport, startDate, endDate } = req.body;

  try {
    // Create a new league
    const newLeague = new League({
      leagueName,
      sport,
      startDate,
      endDate,
    });

    // Save the new league to the database
    await newLeague.save();

    // Redirect back to the Leagues page
    res.redirect('/leagues');
  } catch (error) {
    res.render('error.html', { error });
  }
};