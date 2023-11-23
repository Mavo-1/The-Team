const League = require('../models/League');
const Team = require('../models/Team');
const Standing = require('../models/Standings')


//Function to render the Standings page
exports.getStandingsEJS = async (req, res)=> {
    const leagues = await League.find();
    if(req.user){
        res.render('standings.ejs', {leagues}) //{standingsData} replaces with actually league data if you have it
    }
}

exports.getLeagueStandings = async (req, res) => {
    const { leagueId } = req.params;

    try {
        // Find teams in the specified league and populate players and games
        const teams = await Team.find({ leagueName: leagueId }).populate('players games');

        // If no teams found, you might want to handle this case appropriately

        // Create an array of team IDs
        const teamIds = teams.map(team => team._id);

        // Find standings for teams in the specified league
        const standings = await Standing.find({ team: { $in: teamIds } });

        // Find the league details
        const league = await League.findById(leagueId);

        // Render the leagueStandings.ejs page with teams, standings, and league data
        res.render('leagueStandings.ejs', { teams, standings, league });
    } catch (error) {
        console.error('Error retrieving league standings:', error);
        res.status(500).send('Internal Server Error');
    }
};