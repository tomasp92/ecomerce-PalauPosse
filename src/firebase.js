import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyAAKZcr9KqNyIXUYT4vKhT-w3bDlIErwbU',
    authDomain: 'ecommerce-palau.firebaseapp.com',
    projectId: 'ecommerce-palau',
    storageBucket: 'ecommerce-palau.appspot.com',
    messagingSenderId: '767818169961',
    appId: '1:767818169961:web:856a7f5d166a5ccfa02cf8'
  }
  
const app = firebase.initializeApp(firebaseConfig)
export const firestore = firebase.firestore(app)