const express = require('express');
const router = express.Router();
const user = require('../controllers/userControllers')
const passport = require('passport')

router.post('/register', user.register)
router.post('/signIn', user.signIn)
router.get("/private", passport.authenticate('jwt', { session: false }), user.privateRoute)

module.exports = router