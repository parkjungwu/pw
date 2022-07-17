var push = require('web-push');

let vapidkeys = push.generateVAPIDKeys();

push.setVapidDetails('mailto:wjddn121599@gmail.com', vapidkeys.publicKey, vapidkeys.privateKey);