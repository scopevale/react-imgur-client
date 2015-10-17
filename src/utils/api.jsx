// external api (REST) calls
var Fetch = require('whatwg-fetch');
var Config = require('../utils/config');

module.exports = window.api = {
  get: function (url) {
    return fetch(Config.rootUrl + url, {
      headers: {
        'Authorization': 'Client-ID ' + Config.apiKey
      }
    })
    .then(function (response) {
      return response.json();
    });
  }
};

// Usage
// Api.get('topics/defaults')
// .then(function (data) {
//   // Do something with the data
// });
