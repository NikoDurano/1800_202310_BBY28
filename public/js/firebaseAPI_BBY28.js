//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
const firebaseConfig = {
    apiKey: "AIzaSyA0ckezpw8hbjuoljUWDAUOiVKe87V6hTg",
    authDomain: "bby-28-hawtpaw.firebaseapp.com",
    projectId: "bby-28-hawtpaw",
    storageBucket: "bby-28-hawtpaw.appspot.com",
    messagingSenderId: "913241136631",
    appId: "1:913241136631:web:cb7f56fe0528ad075de2f2"
  };

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
