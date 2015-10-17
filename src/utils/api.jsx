// external api (REST) calls
var Fetch = require('whatwg-fetch');
var rootUrl = 'https://api.imgur.com/3/';
var apiKey = '50842d5bb6938ea';

module.exports = window.api = {
  get: function (url) {
    return fetch(rootUrl + url, {
      headers: {
        'Authorization': 'Client-ID ' + apiKey
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
