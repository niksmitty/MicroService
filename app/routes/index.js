const image_routes = require('./image_routes');

module.exports = function(app, gs) {
  image_routes(app, gs);
};