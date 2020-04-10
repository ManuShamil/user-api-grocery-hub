const express = require('express')
const morgan = require('morgan')
const bodyParser = require("body-parser");
const app = express()

const router = require('./router')

app.use(morgan('dev'))
app.use(bodyParser.json());

app.use('/user', router)

module.exports = app