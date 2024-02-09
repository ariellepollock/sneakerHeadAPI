# Sneaker Head API
Backend server for the Sneaker Head app, with auth and mongoose relationships, etc.

## Entities

```js
User is comprised of the following:

email: {
    type: String,
    required: true,
    unique: true,
},
hashedPassword: {
    type: String,
    required: true,
},
token: String,
```

```js
Sneaker is comprised of the following:

shoeName: {
    type: String,
    required: true,
},
brand: {
    type: String,
    required: true,
},
silhouette: {
    type: String,
},
styleID: {
    type: String,
},
colorway: {
    type: String,
},
description: {
    type: String,
    required: true,
},
retailPrice: {
    type: Number,
},
imageLink: {
    type: String,
},
condition: {
    type: String,
    enum: ['mint', 'used', 'beaters']
    required: true,
    default: 'mint', 
}
owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
}
```

## Routes

### Auth Routes

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/sign-up`             | `users#signup`    |
| POST   | `/sign-in`             | `users#signin`    |
| PATCH  | `/change-password/` | `users#changepw`  |
| DELETE | `/sign-out/`        | `users#signout`   |


### Sneaker Routes

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| GET   | `/sneakers`             | `sneakers#index`    |
| GET   | `/sneakers/:id`             | `sneakers#show`    |
| POST   | `/sneakers`             | `sneakers#create`    |
| PATCH  | `/sneakers/:id/` | `sneakers#update`  |
| DELETE | `/sneakers/:id/`        | `sneakers#delete`   |
