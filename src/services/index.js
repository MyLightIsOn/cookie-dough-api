const customers = require('./companies/companies.service.js');

module.exports = function () {
    const app = this; // eslint-disable-line no-unused-vars
    app.configure(customers);
};
