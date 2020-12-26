import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDknKLq0yp8Dp8EE64Eg1tDI__WpbzcyiE",
    authDomain: "todolist-with-firebase-a8910.firebaseapp.com",
    projectId: "todolist-with-firebase-a8910",
    storageBucket: "todolist-with-firebase-a8910.appspot.com",
    messagingSenderId: "744711225864",
    appId: "1:744711225864:web:7eace12e715417b40947bd",
};

firebase.initializeApp(firebaseConfig);

export default firebase