const customers = require('./companies/companies.service.js');
const reviews = require('./reviews/reviews.service.js');

module.exports = function () {
    const app = this; // eslint-disable-line no-unused-vars
    app.configure(reviews);
    app.configure(customers);
};
