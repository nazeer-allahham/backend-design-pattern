const Sequelize = require('sequelize');

const logger = require('../logger');

const ENV = require('../environment');

class Repository {
    static sequelize;
    static registeredModels = [];

    static initialize() {
        this.sequelize = new Sequelize.Sequelize({
            dialect: 'mysql',
            database: ENV.DB_DATABASE,
            host: ENV.DB_HOST,
            port: ENV.DB_PORT,
            username: ENV.DB_USERNAME,
            password: ENV.DB_PASSWORD,
        });

        this.registeredModels.forEach(e => {
            logger.log("Model registered sucessfully", e);
            this.sequelize.define(e.name, e.constructor, e.options)
        })
    }

    static sync(callback = () => {}) {
        if (!this.sequelize) {
            throw "Repository is unintialized!!, please init it before start using";
        }
        this.sequelize.sync()
            .then(message => {
                // console.log(message);
                logger.info("Seqeulize synchronized successfully")

                callback();
            })
            .catch(err => {
                logger.error("Sequlize synchronisation problem", err.name);
            })
    }

    static prepare(callback = () => {}) {
        this.initialize();
        this.sync(callback);
    }

    static registerModel(model) {
        this.registeredModels.push(model);
    }

    static unregisterModel(model) {
        this.registeredModels.splice(this.registeredModels.indexOf(model), 1);
    }
}

module.exports = Repository;