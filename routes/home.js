const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')
const authController = require('../controllers/auth')


// requests come in from client and responds with controller
router.get('/', homeController.getIndex)
router.get('/login', authController.getLogin)
router.post('/login',authController.postLogin)
router.get('/logout',authController.logout)
router.get('/signup', authController.getSignup)
router.post('/signup',authController.postSignup)


module.exports = router 