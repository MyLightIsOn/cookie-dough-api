const config = require('../../config');
const request = require('request-promise');

const makeRequest = request.defaults({
    baseUrl: config.baseUrl + 'v1/objects/object_1/records',
    headers: config.apiKeys,
    json: true
});

const getAllCompanies = {
    find(params) {
        return makeRequest(`/`);
    }
};

module.exports = function () {
    // Add your custom middleware here. Remember, that
    // in Express the order matters
    const app = this; // eslint-disable-line no-unused-vars

    app.use('/companies', getAllCompanies);
};
