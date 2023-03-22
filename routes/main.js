const express = require('express')
const router = express.Router()
const mainController = require('../controllers/main')
const { ensureAuth} = require('../middleware/auth')


router.get('/',ensureAuth, mainController.getMain)

module.exports = router