module.exports.success = function(message, ...params) {
    if (params && params.length > 0) {
        console.log("\x1b[32m%s", message, params);
    } else {
        console.log("\x1b[32m%s", message);
    }
}

module.exports.info = function(message, ...params) {
    if (params && params.length > 0) {
        console.log("\x1b[36m%s", message, params);
    } else {
        console.log("\x1b[36m%s", message);
    }
}

module.exports.error = function(message, ...params) {
    if (params && params.length > 0) {
        console.log("\x1b[31m%s", message, params);
    } else {
        console.log("\x1b[31m%s", message);
    }
}

module.exports.warning = function(message, ...params) {
    if (params && params.length > 0) {
        console.log("\x1b[33m%s", message, params);
    } else {
        console.log("\x1b[33m%s", message);
    }
}

module.exports.log = function(message, ...params) {
    if (params && params.length > 0) {
        console.log("\x1b[0m%s", message, params);
    } else {
        console.log("\x1b[0m%s", message);
    }
}