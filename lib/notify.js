const Promise = require('bluebird'),
      say     = require('./say.js');

module.exports = function notify(notification, user) {
  return gladys.machine.getMyHouse()
    .then((house) => {
      return gladys.house.isUserAtHome({
        user: user.id,
        house: house.id
      });
    })
    .then((userAtHome) => {
      if (!userAtHome) {
        return Promise.reject(new Error(`User ${user.firstname} is away from home`));
      }

      return say({
        language: user.language.substr(0, 2).toLowerCase(),
        text: notification.text
      });
    });
};
