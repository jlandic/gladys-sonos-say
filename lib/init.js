const shared = require('./shared.js');

module.exports = function init() {
  return gladys.param.getValues(['SONOS_SAY_API_URL', 'SONOS_SAY_ROOM'])
    .spread((apiUrl, room) => {
      sails.log.debug(`Setting sonos api server url to ${apiUrl}`);
      sails.log.debug(`Notifications will be broadcast to room ${room}`);
      shared.sonosApiUrl = apiUrl;
      shared.room = room;
    })
    .catch(() => {
      sails.log.warn('Please create the following param in Gladys: "SONOS_SAY_API_URL"');
    });
};
