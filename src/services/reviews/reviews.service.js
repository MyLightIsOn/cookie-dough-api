const request = require('request-promise');

module.exports = function () {
    const app = this;

    const makeRequest = request.defaults({
        baseUrl: app.baseURL + 'v1/objects/object_3/records',
        headers: app.headers,
        json: true
    });

    const getAllReviews = {
        find() {
            return makeRequest('/');
        }
    };

    app.use('/reviews', getAllReviews);
};
