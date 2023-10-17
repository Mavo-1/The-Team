exports.getDash = (req,res) => {
    if(req.user){
        res.render('admin-dash.ejs')
    }
   
}




