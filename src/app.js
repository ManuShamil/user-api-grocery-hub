const express = require('express')
const morgan = require('morgan')
const bodyParser = require("body-parser");
const app = express()

const User = require('./models/user_model')

app.use(morgan('dev'))
app.use(bodyParser.json());

app.get('/user', async (req,res,next) => {
    res.status(200).json({
        'info': 'User API end-point'
    })
})

app.post('/api/user', async (req,res,next) => {

    const user = new User({
        userName: req.body.userName,
        userEmail: req.body.userEmail
    })

    savedUser = await user.save()

    res.json(savedUser)
})


module.exports = app