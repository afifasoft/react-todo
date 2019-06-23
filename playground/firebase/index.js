import firebase from 'firebase';

var firebaseConfig = {
   apiKey: "AIzaSyCWBhEohcg-RWsbtpT7e2fXgmVwG4GuhB4",
   authDomain: "afifa-task.firebaseapp.com",
   databaseURL: "https://afifa-task.firebaseio.com",
   projectId: "afifa-task",
   storageBucket: "afifa-task.appspot.com",
   messagingSenderId: "439274214412",
   appId: "1:439274214412:web:913a6ee9f547f6f3"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 firebase.database().ref().set({
   appName: 'My Task'
 })
