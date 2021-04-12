const User = require('../models/User.model')

const register = async (req, res) => {
  const { username, email, password } = req.body
  if(!username && !email && !password) return res.status(403).send("Password or email or username doesn't exist")
  const userMail = await User.findOne({ email })
  const userName = await User.findOne({ username })
  console.log(userMail, userName)
  if(userMail || userName) return res.status(400).send('User already exist')
  const newUser = new User({ username, email  })
  console.log(newUser)
  newUser.setPassword(password)
  await newUser.save()
  res.status(200).send( { token: newUser.generateJWT() })
}

const signIn = async (req, res) => {
  const { email, password } = req.body
  if(!email || !password) return res.status(403).send("Password or email doesn't exist")
  const user = await User.findOne({ email })
  if(user && user.validatePassword(password)) {
    return res.status(200).send( { token: user.generateJWT()})
  } else {
    return res.status(401).send('Wrong password')
  }
}

const privateRoute = (req, res) => {
  console.log("Ok")
  console.log(req.user)
}

module.exports = {
  register,
  signIn,
  privateRoute,
}