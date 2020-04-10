const express = require('express')

const router = express.Router()

const User = require('./models/user_model')

router.get('/',async (req,res,next) => {
    res.status(200).json({
        'info': 'User API end-point'
    })
})

router.post('/register', async(req, res, next) => {

    const user = new User(req.body)

    await user.save(function(err, doc) {

        if (!err) {

            /*  doc must be rerouted to auth module
            *   and only tokens must be returned.
            */

            res.status(200).json(doc)
        }

    })
    

})

module.exports = router