import { firebase } from 'services/firebase'
import { initAuthentication } from './auth'

export function initApp() {
  firebase.init(false)

  initAuthentication()
}
