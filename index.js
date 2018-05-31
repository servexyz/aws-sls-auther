require("dotenv").config();

const { isAuthorized } = require('./auth/orize.js'
const { authenticate } = require('./auth/enticate.js'

module.exports = { isAuthorized, authenticate } 

