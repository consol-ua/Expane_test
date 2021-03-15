import { EventsStore } from './events'
import { MeStore } from './me'

class Store {
  events = new EventsStore()
  me = new MeStore()

  // Indicates that initial onAuthStateChange was not invoked yet
  isAuthenticationInitialised = false

  // Route, from which user was redirected to AuthPage to redirect back after successful authentication
  authRedirectRoute: string | undefined
}

export const store = new Store()
