import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDT9WkocBM3Odt9tFb9NPOandT9c6cL1cE",
  authDomain: "udemy-vue-firebase-4b6ad.firebaseapp.com",
  projectId: "udemy-vue-firebase-4b6ad",
  storageBucket: "udemy-vue-firebase-4b6ad.appspot.com",
  messagingSenderId: "75839323323",
  appId: "1:75839323323:web:a23011f297e0976c9bbd9e"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

// export firestore
export { projectFirestore, timestamp }