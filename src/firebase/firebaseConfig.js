
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBrS_Rwq1UPewOx1IQAvHZPF0zNZT_QH5U",
  authDomain: "m3gtwitt.firebaseapp.com",
  projectId: "m3gtwitt",
  storageBucket: "m3gtwitt.appspot.com",
  messagingSenderId: "1023382822274",
  appId: "1:1023382822274:web:6b6c3ada0370916615c39b"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;