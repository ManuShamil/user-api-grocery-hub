const app = require('./src/app')
const { DB_URI } = require("./src/config");
const mongoose = require("mongoose");

mongoose.connect(DB_URI,{'useCreateIndex': true})

const PORT = process.env.DEV_PORT || process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`User-API running on PORT: ${PORT}`)
    console.log("-------------------------------")
})