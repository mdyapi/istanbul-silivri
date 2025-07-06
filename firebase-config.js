
// Firebase configuration (dummy - to be replaced with your own if needed)
const firebaseConfig = {
    apiKey: "AIzaSyDxx-EXAMPLE-KEY",
    authDomain: "mdyapi-comments.firebaseapp.com",
    projectId: "mdyapi-comments",
    storageBucket: "mdyapi-comments.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:example",
    databaseURL: "https://mdyapi-comments-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
