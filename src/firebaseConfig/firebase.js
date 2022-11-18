import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyASjZ1fMlK4WPPCd3tygXZ66jVQr24vWv8",
  authDomain: "crud-firebase-a2b03.firebaseapp.com",
  projectId: "crud-firebase-a2b03",
  storageBucket: "crud-firebase-a2b03.appspot.com",
  messagingSenderId: "114688828990",
  appId: "1:114688828990:web:579b4699646b48f283536f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore (app)