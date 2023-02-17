const express= require('express')
const router = express.Router()

//@desc Login/Landing Page
//@route GET /

router.get('/', (req,res)=>{
    res.render('login')
})

//@desc Home
//@route GET /home
router.get('/home', (req,res)=>{
    res.render('home')
})

module.exports = router