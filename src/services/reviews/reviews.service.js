const request = require('request-promise');



module.exports = function () {
    // Add your custom middleware here. Remember, that
    // in Express the order matters
    const app = this; // eslint-disable-line no-unused-vars
    const baseURL =  app.get('BASEURL');
    const apiIDHeader =  app.get('API_ID_HEADER');
    const apiID =  app.get('API_ID');
    const apiKeyHeader =  app.get('API_KEY_HEADER');
    const apiKey =  app.get('API_KEY');

    let testConfig = {};
    testConfig[apiIDHeader] = apiID;
    testConfig[apiKeyHeader] = apiKey;

    const makeRequest = request.defaults({
        baseUrl: baseURL + 'v1/objects/object_3/records',
        headers: testConfig,
        json: true
    });

    const getAllReviews = {
        find(params) {
            return makeRequest(`/`);
        }
    };

    app.use('/reviews', getAllReviews);
};
