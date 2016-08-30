const express = require('express');
const app = express();
const firebase = require('firebase');

//not sure if this will work with out exporting config
//might need to auth any domain using firebase in the console - auth

var config = {
  apiKey: "AIzaSyDr-cAxhiDSQqlQfe5jGc-5UsQ0l6La5FE",
  authDomain: "calendar-test-950b1.firebaseapp.com",
  databaseURL: "https://calendar-test-950b1.firebaseio.com",
  storageBucket: "calendar-test-950b1.appspot.com",
};

firebase.initializeApp(config);

function emailSignup(email, password) {
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
}

app.get('/testFBEmailSignup', (req, res) => {
  emailSignup('test@something.com', 'idk123');
})

app.listen(4002, (req, res) => {
  console.log('Server listening on 4002');
})