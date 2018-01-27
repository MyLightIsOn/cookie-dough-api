const request = require('request-promise');

module.exports = function() {
    const app = this;

    const loginUser = {
        create(body) {
            const makeRequest = request.defaults({
                method: 'POST',
                url: app.baseURL + 'v1/applications/' + app.apiID + '/session',
                body: {
                    email: body.email,
                    password: body.password
                },
                json: true
            });

            return makeRequest().then(function (parsedBody) {
                return parsedBody;
            })
                .catch(function (err) {
                    return err;
                });
        }
    };

    app.use('/login', loginUser);
};
