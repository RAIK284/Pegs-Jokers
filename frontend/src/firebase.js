import { initializeApp } from "firebase/app";
import { getAuth , browserLocalPersistence, setPersistence} from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAmD5NQcO8WkvkVPJw0QGpBLCqPoz-Z8gY",
    authDomain: "pegsjokers.firebaseapp.com",
    projectId: "pegsjokers",
    storageBucket: "pegsjokers.appspot.com",
    messagingSenderId: "942657663662",
    appId: "1:942657663662:web:691366c02229df6e68f33f",
    measurementId: "G-PFTCDVJ3BJ"
  };

  // databaseURL: "https://pegsjokers-default-rtdb.firebaseio.com/",


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const database = getDatabase(app);
export const auth = getAuth(app);
export default app;