import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyCCmJAAByoF5V4JCP9Bw86Amm1UA2s6-Qw',
  authDomain: 'eikon-chat.firebaseapp.com',
  projectId: 'eikon-chat',
  storageBucket: 'eikon-chat.appspot.com',
  messagingSenderId: '285018621277',
  appId: '1:285018621277:web:95bb02e3470a6c0a4494b4',
}

const app = initializeApp(firebaseConfig)

console.log(app)
