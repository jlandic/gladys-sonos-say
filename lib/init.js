const shared = require('./shared.js');

module.exports = function init() {
  return gladys.param.getValue('SONOS_SAY_API_URL')
    .then(apiUrl => {
      sails.log.debug(`Setting sonos api server url to ${apiUrl}`);
      shared.sonosApiUrl = apiUrl;
    })
    .catch(() => {
      sails.log.warn('Please create the following param in Gladys: "SONOS_SAY_API_URL"');
    });
};
