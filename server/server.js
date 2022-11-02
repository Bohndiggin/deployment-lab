const express = require('express');
const cors = require('cors');
require('dotenv').config()
const path = require('path');

const app = express()

app.use(express.json())
app.use(cors)

const { deliverHome, deliverJS, deliverCSS } = require('./controller')

app.get('/', deliverHome)
app.get('/js', deliverJS)
app.get('/css', deliverCSS)

const { PORT } = process.env

app.listen(PORT, () => {console.log(`running on ${PORT}`)})