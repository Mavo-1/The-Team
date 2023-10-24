


exports.getDashEJS =  (req,res)=> {
    if(req.user){
        res.render('admin-dash.ejs')
    }
   
};

//Function to render the Leagues Page

exports.getLeaguesEJS = (req,res)=> {
    if(req.user){
        // Replace the next line with your logic to fetch the list of leagues from your database
        const leagues = [] 
        // You should fetch leagues from your database here
        res.render('leagues', { leagues });
    }
}

//Function to render the Standings page
exports.getStandingsEJS = (req,res)=> {
    if(req.user){
        res.render('standings.ejs') //{standingsData} replaces with actually league data if you have it
    }
}


//Function to render the Schedule page
exports.getScheduleEJS = (req,res)=> {
    res.render('schedules.ejs') //{schedulesData} replaces with actually league data if you have it
}


//Function to render the practice page
exports.getPracticesEJS = (req,res)=> {
    res.render('practices.ejs') //{practiceData} replaces with actually league data if you have it
}




