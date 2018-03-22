module.exports = function(app) {
  app.get('/', (req, res) => {
    res.write('Welcome to micro service for getting images by search phrase!\n');
    res.write('Please type the next query: .../getImageLink?searchText=\'your search phrase\' (without apostrophes)\n');
    res.write('For example: https://get-image-micro-service.herokuapp.com/getImageLink?searchText=flower');
    res.end();
  })
};