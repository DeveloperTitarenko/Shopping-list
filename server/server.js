const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const userRoutes = require('./routes/user')
const passport = require('passport')


const PORT = 4000
const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const dbConfig = require('./config/database.config')
mongoose.Promise = global.Promise

const startApp = async () => {
  try {
    await mongoose.connect(dbConfig.url, {useUnifiedTopology: true, useNewUrlParser: true})
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`)
    })
  } catch (err) {
    console.log(err)
  }
}


app.get('/', (req, res) => {
  res.json({"message": "Welcome to Shopping List"})
})

//GOOGLE
// const cookieSession = require('cookie-session')
// require('./config/passport')
//
// app.use(cookieSession({
//   name: 'shopping-session',
//   keys: ['key1', 'key2']
// }))
//
//
// app.use(passport.initialize());
// app.use(passport.session());
//
//
// app.get('/filed', (req, res) => res.send('You failed to log in'))
// app.get('/good', (req, res) => res.send(`Welcome mr ${req.user.email}`))
//
// app.get('/google',
//   passport.authenticate('google', {scope: ['profile', 'email']}));
// app.get('/google/callback',
//   passport.authenticate('google', {failureRedirect: '/login'}),
//   function (req, res) {
//     // Successful authentication, redirect home.
//     res.redirect('/');
//   });
//GOOGLE END


app.use(userRoutes)

startApp().then(() => {
  console.log('ok')
})


