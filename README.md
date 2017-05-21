# IonicAPI Client
=================

Ionic API Client NPM Module.
It uses Promises on requests.
Compatible with Ionic v2
https://docs.ionic.io/api/endpoints/push.html

## Install
```bash
npm install ionic-api
```


## Init

```js

var config = {
  // https://apps.ionic.io/app/{APP_ID}/config/credentials
  apiToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJjMjM1YWJmMy0zZWUyLTRlNzMtYWRjYS00N2VlNjAxZWU0MWYifQ.h_uKtDKhZiURSjCzi4GTDwjbGMuRsXPA3q_O86VY-vA'
}
var ionic = require('./ionic-api').init(config);
```

## Sections
### Device tokens
```js
ionic.tokens
```
- list(options)
- create(token_id [, user_id])
- retrieve(token_id)
- update(token_id[, valid])
- delete(token_id)
- listAssociatedUsers(token_id)
- associateUser(token_id)
- dissociateUser(token_id, user_id)

### Messages
```js
ionic.messages
```
- retrieve(message_id)
- delete(message_id)

### Notifications
```js
ionic.notifications
```
- list(options)
- create(notification, target, profile)
- retrieve(notification_id [, fields=[]])
- replace(notification_id, body)
- delete(notification_id)
- listMessages(notification_id, options)


## Usage
```js
// Getting tokens list
ionic.tokens.list().then((res) => {
  // res: {meta:{}, data:{}}

  // Filter out invalidated tokens
  var tokens = res.data
          .filter(a => a.invalidated === null)
          .map(a => a.token);

  // Creating notifications...
  var notification = {
    title: 'Testing title',
    message: 'Message text...',
  };

  //https://docs.ionic.io/api/endpoints/push.html#post-notifications
  var target = {
    tokens: tokens,
    // user_ids: ['something@mail.com']
  };
  // https://apps.ionic.io/app/{APP_ID}/config/credentials
  var profile = 'IONIC_PROFILE';

  return ionic.notifications.create(notification, target, profile).then(res => {
    // Successful response
    console.dir(res.data);
  });
  //console.dir(d);
}).catch(err => {
  console.dir(err);
});
```
