module.exports = function(app, gs) {
  app.get('/getImageLink', (req, res) => {
    const searchText = req.query.searchText;
    gs.build({
      q:searchText,
      searchType: 'image'
    }, function(error, response){
      let items = [];
      if (response.hasOwnProperty('items')) {
        items = response['items'];
      } else {
        res.send('Items are missing...');
      }
      if (items !== 'undefined' && items.length > 0) {
        let firstItem = items[0];
        if (items[0].hasOwnProperty('link')) {
          res.send(firstItem['link']);
        }
      } else {
        res.send('Items are missing...');
      }
    });
  });
};