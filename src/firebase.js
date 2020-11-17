import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBOoFX7wzu8L6a54hT2Z2pe9Esu3HwA7V4",
    authDomain: "clone-b4b29.firebaseapp.com",
    databaseURL: "https://clone-b4b29.firebaseio.com",
    projectId: "clone-b4b29",
    storageBucket: "clone-b4b29.appspot.com",
    messagingSenderId: "958874649650",
    appId: "1:958874649650:web:b22fe64743b2348fae682b",
    measurementId: "G-V2QBPVNYXH"
});

const auth = firebase.auth();

export { auth };