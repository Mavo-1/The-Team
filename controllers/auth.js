const passport = require('passport')
const validator = require('validator')
// const user = require('')

exports.getLogin = (req,res) => {
    if(req.user){
        return res.redirect('/home')
    }
    res.render('login', {
        title: 'Login'
    })
}

