import firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "xxXXXXxXXXXxXXXX",
    authDomain: "xxxxx.firebaseapp.com",
    databaseURL: "https://xxxxxxx.firebaseio.com",
    projectId: "xxxxx",
    storageBucket: "xxxxx.appspot.com",
    messagingSenderId: "xxxxxxxx",
    appId: "x:xxxxxxxx:web:xxxxxxxxx",
    measurementId: "x-xxxxxxx"
}; 

const firebaseApp = firebase.initializeApp(config);
const auth = firebaseApp.auth();
const db = firebase.firestore();
firebase.analytics();

export {db, auth}