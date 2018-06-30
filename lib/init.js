const shared = require('./shared.js');

module.exports = () => {
  return gladys.param.getValues(['SONOS_SAY_API_URL'])
    .then(apiUrl => {
      shared.sonosApiUrl = apiUrl;
    })
    .catch(() => {
      sails.log.warn('Please create the following param in Gladys: "SONOS_SAY_API_URL"');
    });
};
