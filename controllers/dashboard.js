exports.getDash = (req,res) => {
    if(req.user){
        res.render('dashboard.ejs')
    }
   
}




