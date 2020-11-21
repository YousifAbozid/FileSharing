const express = require('express')
const app = express() // the actual express app.
require('dotenv').config() // this config to make the backend read the environment variables,
// make sure to define it before using any environment variables in your app.

const PORT = process.env.PORT || 3001

app.listen(PORT, () => console.log(`server running on port ${PORT}`))