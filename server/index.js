import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
const app = express() // the actual express app.

dotenv.config() // this config to make the backend read the environment variables,
// make sure to define it before using any environment variables in your app.

import filesRoutes from './routes/files.js' // for (/api/files) path
import showRoutes from './routes/show.js' // for (/files) path

// connecting to MongoDb
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then(() => console.log('connected to MongoDB'))
    .catch((error) => console.log(`something went wrong, can't connect to MongoDB`, error.message))

// routes
app.use('/api/files', filesRoutes)
app.use('/files', showRoutes)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => console.log(`server running on port ${PORT}`))