
exports.getMain = (req,res) => {
    if(req.user){
        res.render('main.ejs')
    }
   
}




