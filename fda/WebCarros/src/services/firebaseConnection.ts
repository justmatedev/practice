import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyA6xDys_Z-7sL2Jr9Vao-sc_FRd0eoH5ls",
  authDomain: "fda-webcarros.firebaseapp.com",
  projectId: "fda-webcarros",
  storageBucket: "fda-webcarros.appspot.com",
  messagingSenderId: "548796741026",
  appId: "1:548796741026:web:6872d303889af35e622efb",
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app)

export { db, auth, storage }
