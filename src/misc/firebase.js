import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database'


const config ={
    apiKey: "AIzaSyD70rILF7S0r0bVaVReawbDIiv43Ypu_Do",
    authDomain: "chat-web-app-52afe.firebaseapp.com",
    projectId: "chat-web-app-52afe",
    storageBucket: "chat-web-app-52afe.appspot.com",
    messagingSenderId: "639286400076",
    appId: "1:639286400076:web:5dc204c51a5358e0c9d0e9"
  };

  const app = firebase.initializeApp(config);
  export const auth=app.auth();
  export const database=app.database();