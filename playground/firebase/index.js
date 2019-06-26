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

 var firebaseRef = firebase.database().ref();
 firebaseRef.set({
   app: {
     name: 'My Task',
     version: '1.0.0'
   },
   isRunning: true,
   user: {
     name: 'atif',
     age: 26
   }
 }).then(() => {
    console.log('Set worked');
 }, (e) => {
   console.log('Set failed');
 })

  // firebaseRef.set({
  //   appName: 'My New Task App'
  //
  // });

  firebaseRef.child('user').set({
    name: 'Harshith'
  });

  firebaseRef.child('app').set({
    name: 'My New Task'
  })


 // firebaseRef.set({
 //   appName: 'My Task'
 //
 // });
