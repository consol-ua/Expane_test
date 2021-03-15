import * as functions from 'firebase-functions'
import admin from 'firebase-admin'
import { init } from '@sentry/node'
import { config } from './config'
import { uploadAvatarFunction } from './uploadAvatarFunction'

admin.initializeApp()

init({
  dsn: 'https://0a6a0c14bab2497faf9f20a29b2938d8@o113397.ingest.sentry.io/5606374',
  environment: config.ENV,
})

export const uploadAvatar = functions
  .runWith({ memory: '512MB' })
  .region('europe-west3')
  .https.onRequest(uploadAvatarFunction)

export const onUserCreated = functions
  .region('europe-west3')
  .auth.user()
  .onCreate(async user => {
    await admin.auth().setCustomUserClaims(user.uid, {
      'https://hasura.io/jwt/claims': {
        'x-hasura-allowed-roles': ['client', 'admin'],
        'x-hasura-default-role': 'admin',
      },
    })
  })
