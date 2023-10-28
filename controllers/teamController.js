const Team = require('../models/Team')

exports.postTeamsEJS = async (req, res) => {
    try {
        const league = await League.findById(req.params.leagueId);
        if (!league) {
            return res.status(404).send('League not found');
        }
        const { teamName, coachName, ageLevel, coachNumber, sport } = req.body;
        const team = new Team({
            teamName,
            coachName,
            ageLevel,
            coachNumber,
            sport,
            league: league._id,
        });
        await team.save();
        res.redirect(`/dashboard/leagues/${league._id}/teams`);
    } catch (error) {
        res.render('error.html', { error });
    }
};
