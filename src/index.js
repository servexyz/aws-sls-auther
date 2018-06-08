const { isAuthorized } = require("./auth/orize.js");
const { authenticate } = require("./auth/enticate.js");
module.exports = { isAuthorized, authenticate };
console.log(`Local AWS-SLS-Auther 4`);
