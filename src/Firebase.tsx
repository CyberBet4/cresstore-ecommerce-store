import React from 'react'

import { initializeApp } from 'firebase/app'

const Firebase = () => {
  return (
    <div>Firebase</div>
  )
}

export default Firebase

// firebase config info
// export const firebaseConfig = {
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID,
//     measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
// };
  
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: "cresstore-ecommerce-store",
    storageBucket: "cresstore-ecommerce-store.appspot.com",
    messagingSenderId: "1089078862345",
    appId: "1:1089078862345:web:17e637fc378c8759dc4ed8",
    measurementId: "G-BTC00K781F"
  };

// initialize firebase
export const app = initializeApp(firebaseConfig);
