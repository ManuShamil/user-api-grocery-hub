const mongoose = require('mongoose')
const Schema = mongoose.Schema

const counterSchmea = Schema({
    _id: { type: String, require: true},
    seq: { type: Number, default: -1}
})

module.exports = mongoose.model('counter', counterSchmea)