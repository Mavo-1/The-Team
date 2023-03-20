const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const flash = require('express-flash')
const dotenv = require('dotenv')
const connectDB = require('./config/database')
const logger = require('morgan')
const mainRoutes= require('./routes/main')
const todoRoutes = require('./routes/todos')


//Load config
dotenv.config({path:'./config/.env'})

//Passport config
require('./config/passport')(passport)

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger('dev'))

//Sessions
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
  )


//Passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())

//Routes
app.use('/', mainRoutes)
app.use('/todos',todoRoutes)
app.use('/practices',practiceRoutes)
app.use('schedules',scheduleRoutes)
app.use('/teams',teamRoutes)





//port
const PORT = process.env.PORT || 3000

app.listen(PORT, 
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}. `)
)

