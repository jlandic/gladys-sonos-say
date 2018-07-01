const axios  = require('axios'),
      shared = require('./shared.js');

module.exports = function say(params) {
  var text = encodeURIComponent(params.text);
  var apiUrl = shared.sonosApiUrl.replace(/\/$/, '');
  var room = shared.room;

  if (params.language === undefined) {
    return Promise.reject(new Error(`You need to specify a language code in the parameters`));
  } else {
    return gladys.param.getValue(`SONOS_SAY_VOICE_${params.language.toUpperCase()}`)
      .then(voice => {
        var url = `${apiUrl}/${room}/say/${text}/${voice}/`;
        if (params.volume) {
          url.concat(params.volume.toString());
        }

        return axios.get(url)
          .then(response => {
            return Promise.resolve(response);
          })
          .catch(error => {
            return Promise.reject(new Error(error));
          });
      });
  }
};
