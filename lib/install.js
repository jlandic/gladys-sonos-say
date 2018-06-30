module.exports = function () {
  var type = {
    name: 'Sonos Say',
    service: 'sonosSay'
  };

  return gladys.notification.install(type);
};
