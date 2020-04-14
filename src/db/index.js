import firebase from 'firebase'

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyAW5ApH7DzmF8jPYg3_Z3C6xNN46ZPfk88',
  authDomain: 'kwqc-be290.firebaseapp.com',
  databaseURL: 'https://kwqc-be290.firebaseio.com',
  projectId: 'kwqc-be290',
  storageBucket: 'kwqc-be290.appspot.com',
  messagingSenderId: '406473359164',
  appId: '1:406473359164:web:3c85fc603ba1e1dddb2839'
}

const app = firebase.initializeApp(firebaseConfig)

export const db = app.firestore()
