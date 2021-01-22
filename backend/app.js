require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

//Middlewares
app.use(cors())
app.use(bodyParser.json())

const dbconfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true,
}

//Connection To DB
mongoose
  .connect(process.env.DB_CONNECTION, dbconfig)
  .then(() => console.log('Connected to DB!'))
  .catch((err) => console.error('Error connecting to DB', err))

//Import Routes
const car = require('./routes/car')

//Middleware Routes
app.use('/', car)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT} `))
