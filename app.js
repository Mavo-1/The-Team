const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/database')
const morgan = require('morgan')


//Load config
dotenv.config({path:'./config/.env'})

connectDB()


const app = express()

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}



app.set('view engine', 'ejs')

//port
const PORT = process.env.PORT || 3000

app.listen(PORT, 
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}. `)
)