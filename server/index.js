const express = require('express')
const mongoose = require('mongoose')
const app = express() // the actual express app.
require('dotenv').config() // this config to make the backend read the environment variables,
// make sure to define it before using any environment variables in your app.

// connecting to MongoDb
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then(() => console.log('connected to MongoDB'))
    .catch((error) => console.log(`something went wrong, can't connect to MongoDB`, error.message))

const PORT = process.env.PORT || 3001

app.listen(PORT, () => console.log(`server running on port ${PORT}`))