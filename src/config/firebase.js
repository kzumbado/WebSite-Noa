import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from 'firebase/storage'
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {

  apiKey: "AIzaSyBKBWuVNQAlTT2dv2fJbgszfJ6PRu7e5Uc",

  authDomain: "noa-ads.firebaseapp.com",

  projectId: "noa-ads",

  storageBucket: "noa-ads.appspot.com",

  messagingSenderId: "342799919048",

  appId: "1:342799919048:web:4c22dc0da25741639582fd"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app)
export const storage = getStorage(app);
