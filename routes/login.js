const express = require('express')
const router = express.Router()

//@desc Login/Landing Page
//@route Get /

router.get('/',(req,res) => {
    res.render('login')
})



module.exports = router