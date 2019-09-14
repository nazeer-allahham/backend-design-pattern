const Router = require('express').Router();

require('./routes/web')(Router);
require('./routes/api')(Router);

module.exports = Router;