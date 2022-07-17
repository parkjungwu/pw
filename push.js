var push = require('web-push');

// let vapidkeys = push.generateVAPIDKeys();

let vapidkeys = {
    publicKey: 'BKVvfx2lz9q9F5RtmpCg9EGTskhLPl6BvA4nQ3yu7sag-NZKLDvP-x1gQSCLzWrpbYqnIHUOU05WhkaGuBfgR7Q',
    privateKey: 'WZawaKoNsQtCEtsWoUS9ZNO6TfU4UE3ZCYslPWUsT10'
  }

push.setVapidDetails('mailto:wjddn121599@gmail.com', vapidkeys.publicKey, vapidkeys.privateKey);

let sub = {
  endpoint:"https://fcm.googleapis.com/fcm/send/flhAFTILumM:APA91bFSAKnwbgRH0GI9crHAKjQGHViVX9H8wDPbnE8K4ZG54MxijFIx0uOp1nFa-8GNhAP9lmWeFUNkvYFtzgEwVvocTYnxWNPnrLrHXKUxUD6UvLxc6zs6P41NtVKdj0XU9ZQMhElH",
  expirationTime:null,
  keys:{p256dh:"BNrXZEDihtOERl4Q_uX16LgY7YhxJv4w6NjXo9NqdFH9129rctpNKuMZPcEzxtTnK74Yxjne8jqTMe8ivJdp4gY",
  auth:"qFMCZjTltn_2mvMyPx-CZA"}}

push.sendNotification(sub, 'test message')