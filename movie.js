var imp = require('./env');

var request = require('request');



function get(movieTitle) {

request('https://www.googleapis.com/customsearch/v1?key=' + imp.key + '&cx=' + imp.id + '&q=' + movieTitle + " ", function(error, response, body){


var movieTitle = JSON.parse(body);

});
}



module.exports = get;
