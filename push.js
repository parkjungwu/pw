var push = require('web-push');

// let vapidkeys = push.generateVAPIDKeys();

let vapidkeys = {
    publicKey: 'BKVvfx2lz9q9F5RtmpCg9EGTskhLPl6BvA4nQ3yu7sag-NZKLDvP-x1gQSCLzWrpbYqnIHUOU05WhkaGuBfgR7Q',
    privateKey: 'WZawaKoNsQtCEtsWoUS9ZNO6TfU4UE3ZCYslPWUsT10'
  }

push.setVapidDetails('mailto:wjddn121599@gmail.com', vapidkeys.publicKey, vapidkeys.privateKey);

let sub = {
  endpoint:"https://fcm.googleapis.com/fcm/send/fyQ0ND72_wk:APA91bG62_Yro5jx8x-n5wFbfYDQE2Bek-kN6X2xk2KCRT7t_Mxioldyh4E27fP_hCw2VtxGl6O9pJ6euoQBUZHLhYZZjOJ8DMB6SaDFdj9FIIzUG8i_CbiAobVd6ljH1EpGPUY5V3Ky",
  expirationTime:null,
  keys:{p256dh:"BGtswv8pnz7Rx3i5h7IbnBrZvMVsmRr7QO12RCKLY8_U5GOrZeBVwFtHpZQaUk89AJAoogcP-T4aISzk-FMGBvo",
  auth:"_243pMDhD0lhG7xMXxwV7w"}}

push.sendNotification(sub, 'test message')
