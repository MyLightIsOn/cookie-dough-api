const request = require('request-promise');

module.exports = function () {
    // Add your custom middleware here. Remember, that
    // in Express the order matters
    const app = this; // eslint-disable-line no-unused-vars

    let headers = {};
    headers[app.apiIDHeader] = app.apiIDHeader;
    headers[app.apiKeyHeader] = app.apiKeyHeader;

    const makeRequest = request.defaults({
        baseUrl: this.baseURL + 'v1/objects/object_1/records',
        headers: headers,
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

//?rows_per_page=1000