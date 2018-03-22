const root_routes = require('./root_routes');
const image_routes = require('./image_routes');

module.exports = function(app, gs) {
  root_routes(app);
  image_routes(app, gs);
};