module.exports = function(app, gs) {
  app.get('/getImageLink', (req, res) => {
    const searchText = req.query.searchText;
    const responseType = req.query.responseType;
    gs.build({
      q:searchText,
      searchType: 'image'
    }, function(error, response){
      let items = [];
      if (response.hasOwnProperty('items')) {
        items = response['items'];
      } else {
        return res.send('Items are missing...');
      }
      if (items !== 'undefined' && items.length > 0) {
        let firstItem = items[0];
        if (items[0].hasOwnProperty('link')) {
          if (responseType === 'image') {
            res.send(`<svg width="100%" height="100%" 
                    xmlns="http://www.w3.org/2000/svg" 
                    xmlns:xlink="http://www.w3.org/1999/xlink">       
                    <image xlink:href="${ firstItem['link'] }" x="0" y="0" height="200" width="200" />    
                    </svg>`
                  );
          } else {
            res.send(firstItem['link']);
          }
        }
      } else {
        res.send('Items are missing...');
      }
    });
  });
};
