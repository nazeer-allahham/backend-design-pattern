module.exports = class SingletonModel {
    constructor(params = {}) {
        if (!!this.getInstance()) {
            return this.getInstance()
        }

        this.setInstance(this);

        for (const key in params) {
            if (params.hasOwnProperty(key)) {
                const param = params[key];
                this[key] = param;
            }
        }

        return this;
    }

    getInstance() {
        return SingletonModel.instance;
    }

    setInstance(instance) {
        SingletonModel.instance = instance;
    }
}