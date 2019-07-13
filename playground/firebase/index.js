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

 firebaseRef.child('user').on('value', (snapshot) => {
   console.log('User ref changed', snapshot.val());
 });


 firebaseRef.child('user').update({
   name: 'Harshith'
 });

 firebaseRef.child('app').update({
   name: 'My New Task'
 });

// var logData = (snapshot) => {
//   console.log('Got value', snapshot.val());
// };
//
// firebaseRef.on('value',logData);
//
// firebaseRef.off();
//
// firebaseRef.update({
//   isRunning: false
// });


// firebaseRef.once('value').then((snapshot) => {
//   console.log('Got entire database',snapshot.val());
// }, (error) => {
//     console.log('Unable to fetch value',error);
// });
//
// firebaseRef.child('app').once('value').then((snapshot) => {
//   console.log('sub database :',snapshot.key, snapshot.val());
// }, (error) => {
//     console.log('Unable to fetch value',error);
// });

//
// firebaseRef.update({
//   'app/name': 'My New Task',
//   'user/name': 'Harshith'
// });

// firebaseRef.child('app').update({
//   name: 'My latest Task',
// }).then(() => {
//   console.log('Update success: app');
// }, (e) => {
//   console.log('Update failed: app');
// })

// firebaseRef.child('user').update({
//   name:'Harish'
// }).then(() => {
//   console.log('Update success: user');
// }, (e) => {
//   console.log('Update failed: user');
// })

// firebaseRef.remove();

//  firebaseRef.child('app/name').remove();

  // firebaseRef.child('app').update({
  //   version: '2.0.0',
  //   name: null
  // });

  // firebaseRef.update({
  //   isRunning: null,
  // });

//  firebaseRef.child('user/age').remove();



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
