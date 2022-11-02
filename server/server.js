const express = require('express');
const cors = require('cors');
require('dotenv')
const path = require('path');

const app = express()
app.use(cors)
app.use(express.json())

const { deliverHome, deliverJS, deliverCSS } = require('./controller')

app.get('/', deliverHome)
app.get('/js', deliverJS)
app.get('/css', deliverCSS)

const { PORT } = process.env

app.listen(PORT, () => {console.log(`running on ${PORT}`)})