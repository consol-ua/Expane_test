import fb from 'firebase/app'
import 'firebase/auth'

function init(isProduction: boolean) {
  // Already initialised
  if (fb.apps.length > 0) return

  if (isProduction) {
    fb.initializeApp({
      apiKey: 'AIzaSyBMXSesQhSy-HPR1CilmUsCvbgB7tRSZ5k',
      authDomain: 'expane-prod.firebaseapp.com',
      projectId: 'expane-prod',
      storageBucket: 'expane-prod.appspot.com',
      messagingSenderId: '564200037307',
      appId: '1:564200037307:web:81a147bb92e793eea3029e',
    })
  } else {
    fb.initializeApp({
      apiKey: 'AIzaSyA_ltqYuSqMRjoB6qgLP_0dpXYfyE6HO1s',
      authDomain: 'pool-2a29c.firebaseapp.com',
      projectId: 'pool-2a29c',
      storageBucket: 'pool-2a29c.appspot.com',
      messagingSenderId: '924565612111',
      appId: '1:924565612111:web:176caf725743fcb3736c3a',
    })
  }
}

// === AUTH ===
let unsubscribeAuthStateChange: fb.Unsubscribe | undefined
function subscribeAuthStateChange(listener: (user: fb.User | null) => void) {
  unsubscribeAuthStateChange?.()
  unsubscribeAuthStateChange = fb.auth().onAuthStateChanged(listener)
}

function signUp(email: string, password: string) {
  // This is workaround as due to bug in firebase SDK, sendPasswordResetEmail cannot be correctly try/catched
  return new Promise((resolve, reject) => {
    return fb
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(resolve)
      .catch(error => reject(error))
  })
}

async function signIn(email: string, password: string) {
  // This is workaround as due to bug in firebase SDK, sendPasswordResetEmail cannot be correctly try/catched
  return new Promise((resolve, reject) => {
    return fb
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(resolve)
      .catch(error => reject(error))
  })
}

const signOut = () => fb.auth().signOut()

function sendResetPassword(email: string): Promise<void> {
  // This is workaround as due to bug in firebase SDK, sendPasswordResetEmail cannot be correctly try/catched
  return new Promise((resolve, reject) => {
    return fb
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => resolve())
      .catch(error => reject(error))
  })
}

const getCurrentUser = () => fb.auth().currentUser

export const firebase = {
  init,
  getCurrentUser,
  subscribeAuthStateChange,
  signUp,
  signIn,
  signOut,
  sendResetPassword,
}

export type User = fb.User
