exports.getDash = ( '/admin-dash', (req,res)=> {
    if(req.user){
        res.render('admin-dash.html')
    }
   
})




