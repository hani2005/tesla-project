const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const cookieParser = require("cookie-parser")
require("dotenv").config()
const User = require("./Models/User.js")

const bcryptSalt = bcrypt.genSaltSync(10)
const jwtSecret = "fasefraw4r5r3wq45wdfgw34twdfg"

app.use(express.json())
app.use(cookieParser())
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173"
  })
)

// Connect to database
mongoose.connect(process.env.DATABASE_URL)

app.get("/", (req, res) => {
  res.send("Home Page Here")
})

// Register
app.post("/register", async (req, res) => {
  const { name, email, password } = req.body

  try {
    const userDoc = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, bcryptSalt)
    })
    res.json(userDoc)
  } catch (e) {
    res.status(422).json(e)
  }
})

// Login
app.post("/login", async (req, res) => {
  const { email, password } = req.body
  const userDoc = await User.findOne({ email })

  if (userDoc) {
    const passOk = bcrypt.compareSync(password, userDoc.password)
    if (passOk) {
      jwt.sign(
        {
          email: userDoc.email,
          id: userDoc._id,
          name: userDoc.name
        },
        jwtSecret,
        {},
        (err, token) => {
          if (err) throw err
          res.cookie("token", token).json(userDoc)
        }
      )
    } else {
      res.status(422).json("pass not ok")
    }
  } else {
    res.status(422).json("not found")
  }
})

// User profile
app.get("/profile", (req, res) => {
  const { token } = req.cookies
  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
      if (err) throw err
      const { name, email, _id } = await User.findById(userData.id)
      res.json({ name, email, _id })
    })
  } else {
    res.json(null)
  }
})

// Logout
app.post("/logout", (req, res) => {
  res.cookie("token", "").json(true)
})

app.listen(3000)
