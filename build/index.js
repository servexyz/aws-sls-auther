"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "isAuthorized", {
  enumerable: true,
  get: function () {
    return _orize.isAuthorized;
  }
});
Object.defineProperty(exports, "authenticate", {
  enumerable: true,
  get: function () {
    return _enticate.authenticate;
  }
});

var _orize = require("./auth/orize.js");

var _enticate = require("./auth/enticate.js");

require("dotenv").config(); // const { isAuthorized } = require("../auth/orize.js");
// const { authenticate } = require("../auth/enticate.js");
// module.exports = { isAuthorized, authenticate };
//# sourceMappingURL=index.js.map