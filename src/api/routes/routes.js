let { publish } = require('../../core/publish/publishController');

module.exports = (app) => {
    app.get('/ping', (req, res) => {
        return res
            .status(200)
            .json({
                now: new Date()
            });
    });

    app.post('/deploy', publish)
};