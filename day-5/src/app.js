const connectToDb = require("./config/database")
const express = require("express")
const app = express()

connectToDb()
module.exports = app
