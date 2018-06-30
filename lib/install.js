module.exports = () => {
  var type = {
    name: 'Sonos Say',
    service: 'sonos-say'
  };

  return gladys.notification.install(type);
};
