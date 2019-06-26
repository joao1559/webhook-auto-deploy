let exec = require('child_process').exec;

module.exports = {
    publish
};

async function publish(req, res) {
    try {
        const params = {
            repository: req.body.repository.name
        };

        if (!params.repository) return;

        let command = `cd .. && cd ${params.repository} && git pull && cd .. && dc restart ${params.repository}`;

        exec(command, (err, out) => {
            if (err) throw err;

            console.log(out);
        });

        return res
            .status(200)
            .json({
                message: 'AutoDeploy feito com sucesso'
            })
    }
    catch (error) {
        return res
            .status(error.httpCode || 500)
            .json({
                httpCode: error.httpCode || 500,
                error: error.message || error.list
            })
    }
}