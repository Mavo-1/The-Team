const express = require('express')
const methodOverride= require('method-override')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const flash = require('express-flash')
const dotenv = require('dotenv')
const connectDB = require('./config/database')
const logger = require('morgan')
const path= require('path')



//Load config
dotenv.config({path:'./config/.env'})

//Passport config
require('./config/passport')(passport)

connectDB()

app.engine('html', require('ejs').renderFile); // This line renders HTML files using EJS
app.set('view engine', 'html'); // Set EJS as the view engine
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logger('dev'));


//method-override middleware
app.use(methodOverride('_method'));

//Sessions
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
  )

  app.use((req, res, next) => {
    console.log(`Received ${req.method} request for ${req.url}`);
    next();
  });



//Passport middleware
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

const homeRoutes= require('./routes/home');
const dashRoutes = require('./routes/dashboard');
const leagueRoutes = require('./routes/leagueRoutes');
const scheduleRoutes = require('./routes/scheduleRoutes');
const standingRoutes = require('./routes/standingRoutes')

//Routes
app.use('/', homeRoutes);
app.use('/dashboard',dashRoutes);
app.use('/leagues',leagueRoutes);
app.use('/schedules',scheduleRoutes);
app.use('/standings',standingRoutes);


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});





//port
const PORT = process.env.PORT || 4141

app.listen(PORT, 
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}. `)
)

