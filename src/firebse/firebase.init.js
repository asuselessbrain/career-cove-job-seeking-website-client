// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhDP1aJ_sclM_t6nHKJ34S-fg05UF0djs",
  authDomain: "seeking-job-authentication.firebaseapp.com",
  projectId: "seeking-job-authentication",
  storageBucket: "seeking-job-authentication.appspot.com",
  messagingSenderId: "67426187251",
  appId: "1:67426187251:web:87a69caaef76753fe40486"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
