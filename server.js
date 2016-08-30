const express = require('express');
const app = express();
const firebase = require('firebase');
const firebaseLogin = firebase.auth();

var config = {
  apiKey: "AIzaSyDr-cAxhiDSQqlQfe5jGc-5UsQ0l6La5FE",
  authDomain: "calendar-test-950b1.firebaseapp.com",
  databaseURL: "https://calendar-test-950b1.firebaseio.com",
  storageBucket: "calendar-test-950b1.appspot.com",
};

firebase.initializeApp(config);

//not sure if this will work with out exporting config
//might need to auth any domain using firebase in the console - auth
function emailSignup(email, password) {
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
}

// firebaseLogin('test@test.com', 'idk123');

app.get('/testFB', (req, res) => {
  firebaseLogin
})

app.listen(4002, (req, res) => {
  console.log('Server listening on 4002');
})