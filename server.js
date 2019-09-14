const FS = require('fs');

const logger = require('./logger');

const APP = require('./app');
const ENV = require('./environment');

APP.listen(ENV.PORT, ENV.HOST, () => {
    FS.readFile('./readme', (err, data) => {
        if (err) {
            logger.error("Reading readme file catched the error", err);
        } else {
            logger.warning(data.toString());
        }
        logger.success(`Server running on http://${ENV.HOST}:${ENV.PORT}`);
    });
});