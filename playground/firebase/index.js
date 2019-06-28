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
 });


//
// firebaseRef.update({
//   'app/name': 'My New Task',
//   'user/name': 'Harshith'
// });

firebaseRef.child('app').update({
  name: 'My latest Task',
}).then(() => {
  console.log('Update success: app');
}, (e) => {
  console.log('Update failed: app');
})

firebaseRef.child('user').update({
  name:'Harish'
}).then(() => {
  console.log('Update success: user');
}, (e) => {
  console.log('Update failed: user');
})


 // firebaseRef.update({
 //   isRunning: false,
 //   'app/name': 'My New Task App'
 //
 // });

 // firebaseRef.child('app').update({
 //   name: 'My New Task App'
 // }).then(() => {
 //   console.log('Update worked');
 // }, (e) => {
 //   console.log('Update failed');
 // });

  // firebaseRef.set({
  //   appName: 'My New Task App'
  //
  // });

 // firebaseRef.set({
 //   appName: 'My Task'
 //
 // });
