const EXPRESS = require('express');

const APP = EXPRESS();
const router = require('./router');
const repository = require('./database/repository');

require('./models')

repository.prepare(() => {
    APP.use((req, _res, next) => {
        console.log(req.url, req.body, req.method);

        req.authenticated = true;
        req.user = {
            name: 'root',
            password: 'root',
            role: 'admin'
        }
        next();
    });

    APP.use(router);
});

module.exports = APP;