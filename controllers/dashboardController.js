exports.getDash =  (req,res)=> {
    if(req.user){
        res.render('admin-dash.html')
    }
   
};

//Function to render the Leagues Page

exports.getLeagues = (req,res)=> {
    if(req.user){
        res.render('leagues.html') //{leaguesData} replaces with actually league data if you have it
    }
}

//Function to render the Standings page
exports.getStandings = (req,res)=> {
    if(req.user){
        res.render('standings.html') //{standingsData} replaces with actually league data if you have it
    }
}


//Function to render the Schedule page
exports.getSchedule = (req,res)=> {
    res.render('schedules.html') //{schedulesData} replaces with actually league data if you have it
}


//Function to render the practice page
exports.getPractices= (req,res)=> {
    res.render('practices.html') //{practiceData} replaces with actually league data if you have it
}




