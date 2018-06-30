const axios  = require('axios'),
      qs     = require('querystring'),
      shared = require('./shared.js');

module.exports = function say(params) {
  var text = qs.stringify(params.text);
  var apiUrl = shared.sonosApiUrl.replace(/\/$/, '');

  axios.get(`${apiUrl}/Bedroom/say/${text}`)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.warn(error);
    });
};
