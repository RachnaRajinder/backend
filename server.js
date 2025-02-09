require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

const PORT = process.env.PORT
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error' , (error) => console.error(error))
db.once('open', () => console.log("Database connected"))

app.use(express.json())

const usersRouter = require('./routes/users')
app.use('/users', usersRouter)

app.listen(PORT, () => console.log('Server running on port '+PORT))

module.exports = app


