import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyCiRxW2ZBvSmYGHKHb_O9xYpezM5GY-c3U",
    authDomain: "fipu-help.firebaseapp.com",
    projectId: "fipu-help",
    storageBucket: "fipu-help.appspot.com",
    messagingSenderId: "579482409091",
    appId: "1:579482409091:web:b349dbc90a49e39d38a3b6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export { firebase };