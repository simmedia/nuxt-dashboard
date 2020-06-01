import firebase from 'firebase/app'
import 'firebase/firestore'

if (!firebase.apps.length) {
  const config = {
    apiKey: 'AIzaSyCjwXl7D-rro1-F7exx_LE65XkacTRjGUo',
    authDomain: 'nuxt-dashboard-25a89.firebaseapp.com',
    databaseURL: 'https://nuxt-dashboard-25a89.firebaseio.com',
    projectId: 'nuxt-dashboard-25a89',
    storageBucket: 'nuxt-dashboard-25a89.appspot.com',
    messagingSenderId: '101509546194',
    appId: '1:101509546194:web:9354923a48f6b912c8ad0b'
  }
  firebase.initializeApp(config)
  firebase.firestore()
}
const db = firebase.firestore()
export { db }
