const axios  = require('axios'),
      shared = require('./shared.js');

module.exports = function say(params) {
  var text = encodeURIComponent(params.text);
  var apiUrl = shared.sonosApiUrl.replace(/\/$/, '');

  axios.get(`${apiUrl}/Bedroom/say/${text}`)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.warn(error);
    });
};
