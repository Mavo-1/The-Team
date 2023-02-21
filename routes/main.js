const express = require('express')
const router = express.Router()

//@desc Landing Page
//@route Get /

router.get('/',(req,res) => {
    res.render('index')
})

//@desc Login Page
//@route Get /login
router.get('/login',(req,res) => {
    res.render('login')
})

//@desc Landing Page
//@route Get /


//@desc Landing Page
//@route Get /

//@desc Landing Page
//@route Get /



module.exports = router