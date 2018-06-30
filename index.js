module.exports = (sails) => {
  const say     = require('./lib/say.js'),
        install = require('./lib/install.js'),
        notify  = require('./lib/notify.js');

  gladys.on('ready', () => {
    init().catch(sails.log.warn);
  });

  return {
    say: say,
    install: install,
    notify: notify
  };
};
