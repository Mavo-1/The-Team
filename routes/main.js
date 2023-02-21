const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')
const authController = require('../controllers/auth')

//@desc Landing Page
//@route Get /

router.get('/', homeController.getIndex)
router.get('/login', authController.getLogin)
router.post('/login',authController.postLogin)
router.get('/logout',authController.logout)



module.exports = router