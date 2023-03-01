const path = require('path')
const express = require('express')
const app = express()
const dotenv = require('dotenv')
const connectDB = require('./config/database')
const logger = require('morgan')
const mainRoutes= require('./routes/main')


//Load config
dotenv.config({path:'./config/.env'})

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger('dev'))


if(process.env.NODE_ENV === 'development'){
    app.use(logger('dev'))
}



app.set('view engine', 'ejs')


//Statis folder
app.use(express.static(path.join(__dirname,'/public')))

//Routes
app.use('/', mainRoutes)
app.use('/login',mainRoutes)



//port
const PORT = process.env.PORT || 3000

app.listen(PORT, 
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}. `)
)

