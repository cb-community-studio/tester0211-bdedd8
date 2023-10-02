const users = require('./users/users.service.js');
const users = require("./users/users.service.js");
const items = require("./items/items.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
    app.configure(users);
  app.configure(items);
    // ~cb-add-configure-service-name~
};
