module.exports = function(sails) {
  const say     = require('./lib/say.js'),
        install = require('./lib/install.js'),
        notify  = require('./lib/notify.js'),
        init    = require('./lib/init.js');

  gladys.on('ready', function() {
    init().catch(sails.log.warn);
  });

  return {
    say: say,
    install: install,
    notify: notify
  };
};
