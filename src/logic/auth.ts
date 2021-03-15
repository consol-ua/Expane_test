import { firebase, User } from 'services/firebase'
import { store } from 'store'
import { navigation } from 'services/navigation'
import { sleep } from './utils'

export function initAuthentication() {
  firebase.subscribeAuthStateChange(async user => {
    if (user) {
      console.log('Token:', await user.getIdToken())
      console.log('Claims:', (await user.getIdTokenResult())?.claims)
    }

    if (user) {
      handleUserAuthenticated(user)
    } else {
      store.me.setId(null)

      if (navigation.currentRoute !== '/auth') {
        navigation.replace('/auth', { from: navigation.currentRoute })
      }
    }

    store.isAuthenticationInitialised = true
  })
}

export function handleUserAuthenticated(user: User) {
  store.me.setId(user.uid)

  if (!store.isAuthenticationInitialised) return

  let targetRoute = '/home'

  if (store.authRedirectRoute) {
    targetRoute = store.authRedirectRoute
    store.authRedirectRoute = undefined
  }

  navigation.replace(targetRoute)
}

export async function getAuthToken() {
  if (store.me.id === null)
    throw new Error('Trying to get auth token, while not being authenticated')

  const token = await firebase.getCurrentUser()!.getIdToken()

  return token
}

export async function signUp(email: string, password: string) {
  await firebase.signUp(email, password)
  // TODO Get rid of hack
  // Temporary hack - we need it to fetch token with updated auth claims
  await sleep(1.5)
  await firebase.getCurrentUser()!.getIdToken(true)
}

export function signIn(email: string, password: string, redirectRoute?: string) {
  store.authRedirectRoute = redirectRoute
  return firebase.signIn(email, password)
}
