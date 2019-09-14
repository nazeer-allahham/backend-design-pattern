module.exports = (router) => {
    router.get('/', (req, res, next) => {
        res.json({
            url: req.url,
            method: req.method,
        });
    });
}