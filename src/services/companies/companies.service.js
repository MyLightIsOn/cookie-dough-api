const request = require('request-promise');

module.exports = function () {
    const app = this;

    const makeRequest = request.defaults({
        baseUrl: app.baseURL + 'v1/objects/object_1/records',
        headers: app.headers,
        json: true,
        qs: {
            'rows_per_page': '1000'
        }
    });

    const getAllCompanies = {
        find() {
            return makeRequest('/');
        }
    };

    app.use('/companies', getAllCompanies);
};
