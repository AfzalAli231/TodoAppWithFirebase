// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAczYF-4J9Wu0QqNdjUV13Yp4lTD8NKBTY",
  authDomain: "todo-app-using-react-crud.firebaseapp.com",
  projectId: "todo-app-using-react-crud",
  storageBucket: "todo-app-using-react-crud.appspot.com",
  messagingSenderId: "599141986051",
  appId: "1:599141986051:web:0c03b7d48c1114544e4336",
  measurementId: "G-X0HQFMCB5K",
};

firebase.initializeApp(firebaseConfig);
var db = firebase.database();
export default db;
