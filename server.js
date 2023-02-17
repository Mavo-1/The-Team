const express = require('express')
const dotenv = require('dotenv')

//Load config
dotenv.config({path: './config/.env'})


const app = express()

//port
app.listen(process.env.Port, () => {
    console.log('App is on the run, better catch it!')
})