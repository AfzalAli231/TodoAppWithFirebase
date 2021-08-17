// src/firebase-config.js

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAczYF-4J9Wu0QqNdjUV13Yp4lTD8NKBTY",
  authDomain: "todo-app-using-react-crud.firebaseapp.com",
  databaseURL: "https://todo-app-using-react-crud-default-rtdb.firebaseio.com",
  projectId: "todo-app-using-react-crud",
  storageBucket: "todo-app-using-react-crud.appspot.com",
  messagingSenderId: "599141986051",
  appId: "1:599141986051:web:0c03b7d48c1114544e4336",
  measurementId: "G-X0HQFMCB5K",
});

const db = firebaseApp.firestore();
export default db;
