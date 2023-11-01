const League = require('../models/League');
const Team = require('../models/Team');
const Player = require('../models/Player');



exports.getLeaguesEJS = async (req,res) => {
    try {
        // Use the League model to find all leagues in the database
        const leagues = await League.find();

        res.render('leagues.ejs', { leagues });
    } catch (error) {
        res.render('error.html', { error });
    }
};

// Render the Create League page
exports.getCreateLeaguePage = (req, res) => {
    res.render('createLeague.ejs');
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

exports.deleteLeague = async (req,res) => {
    try{
        const leagueId= req.params.leagueId;

        //Find the league by ID and remove it from the database
        await League.findByIdAndRemove(leagueId);

        //Redirect back to the leagues page
        res.redirect('/leagues');
    } catch (error){
        res.render('error.html', {error})
    }
}

//Teams
// Function to display the teams page for a specific league
exports.getTeamsEJS = async (req, res) => {
    try {
        const leagueId = req.params.leagueId; // Retrieve leagueId from query parameters

        if (!leagueId) {
            return res.status(400).send('Missing leagueId parameter');
        }

        const league = await League.findById(leagueId);
        if (!league) {
            return res.status(404).send('League not found');
        }

        const teams = await Team.find({ leagueName: league._id });
        res.render('teams.ejs', { teams, league });
    } catch (error) {
        res.render('error.html', { error });
    }
};

exports.postTeamsEJS = async (req, res) => {
    try {
        const league = await League.findById(req.params.leagueId);
        if (!league) {
            return res.status(404).send('League not found');
        }
        const { teamName, coachName, ageLevel, coachNumber, sport, } = req.body;
        const team = new Team({
            teamName,
            coachName,
            ageLevel,
            coachNumber,
            sport,
            leagueName: league._id,
        });
        await team.save();
        res.redirect(`/leagues/${league._id}/teams`);
    } catch (error) {
        res.render('error.html', { error });
    }
};

exports.getTeamRosterEJS = async (req, res) => {
    try {
        const teamId = req.params.teamId;
        const team = await Team.findById(teamId).populate('players'); // Assuming the player field in Team is named 'players'
        if (!team) {
            return res.status(404).send('Team not found');
        }

        res.render('teamRoster.ejs', { team });
    } catch (error) {
        res.render('error.html', { error });
    }
};

exports.addPlayerToTeam = async (req,res) => {
    try{
        const teamId = req.params.teamId;
        const {firstName, lastName, age} = req.body;

        //find the team by its ID
        const team = await Team.findById(teamId);
        if(!team){
            return res.status(404).send('Team not found');
        }

        //Create a new player
        const player = new Player({
            firstName,
            lastName,
            age,

        })

        //Saves player to DB
        await player.save();

        //Adds player to the team's roster
        team.players.push(player);
        await team.save();

        //Redirects back to the team roster page
        res.redirect('/leagues/${team.leagueName}/teams/${teamId}/roster');

    }catch (error) {
        res.render('error.html', { error })
    }
}