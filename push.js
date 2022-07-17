var push = require('web-push');

// let vapidkeys = push.generateVAPIDKeys();

let vapidkeys = {
    publicKey: 'BKVvfx2lz9q9F5RtmpCg9EGTskhLPl6BvA4nQ3yu7sag-NZKLDvP-x1gQSCLzWrpbYqnIHUOU05WhkaGuBfgR7Q',
    privateKey: 'WZawaKoNsQtCEtsWoUS9ZNO6TfU4UE3ZCYslPWUsT10'
  }

push.setVapidDetails('mailto:wjddn121599@gmail.com', vapidkeys.publicKey, vapidkeys.privateKey);

let sub = {};

push.sendNotification(sub, 'test message')