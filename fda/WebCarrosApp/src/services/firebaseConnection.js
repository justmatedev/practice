import { initializeApp } from "firebase/app"
import { getFireStore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA6xDys_Z-7sL2Jr9Vao-sc_FRd0eoH5ls",
  authDomain: "fda-webcarros.firebaseapp.com",
  projectId: "fda-webcarros",
  storageBucket: "fda-webcarros.appspot.com",
  messagingSenderId: "548796741026",
  appId: "1:548796741026:web:161c67fdbfe3101d622efb",
}

const app = initializeApp(firebaseConfig)
const db = getFireStore(app)

export { db }
