const graph = require('@microsoft/microsoft-graph-client');

module.exports = {
  getUserEmail: (user, done) => {
    var client = graph.Client.init({
      defaultVersion: 'v1.0',
      debugLogging: true,
      authProvider: function(authDone) {
        authDone(null, user.accessToken);
      }
    });

    client.api('/me').select(['mail', 'userPrincipalName']).get(
      (err, me) => {
        if (err) {
          return done(err);
        }

        return done(null, me.mail ? me.mail : me.userPrincipalName);
      }
    );
  },

  sendEmail: (user, message, done) => {
    var client = graph.Client.init({
      defaultVersion: 'v1.0',
      debugLogging: true,
      authProvider: function(authDone) {
        authDone(null, user.accessToken);
      }
    });

    client.api('/me/sendmail').post(message,
      (err) => {
        return done(err);
      }
    );
  }
};