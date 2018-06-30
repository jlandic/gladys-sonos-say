const axios  = require('axios'),
      shared = require('./shared.js');

module.exports = function say(params) {
  var text = encodeURIComponent(params.text);
  var apiUrl = shared.sonosApiUrl.replace(/\/$/, '');

  axios.get(`${apiUrl}/Bedroom/say/${text}`)
    .then(response => {
      console.log(response.data);
      return Promise.resolve(true);
    })
    .catch(error => {
      return Promise.reject(new Error(error));
    });
};
