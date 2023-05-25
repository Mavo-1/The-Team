const express = require('express')
const router = express.Router()
const dashboardController = require('../controllers/dashboard')
const { ensureAuth} = require('../middleware/auth')


router.get('/',ensureAuth, dashboardController.getDash)

module.exports = router