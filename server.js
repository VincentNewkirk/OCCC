const express = require('express');
const app = express();
const firebase = require('firebase');
const bodyParser = require('body-parser')

//not sure if this will work with out exporting config
//might need to auth any domain using firebase in the console - auth
//form needs homepage redirect, or login page

const config = {
  apiKey: "AIzaSyDr-cAxhiDSQqlQfe5jGc-5UsQ0l6La5FE",
  authDomain: "calendar-test-950b1.firebaseapp.com",
  databaseURL: "https://calendar-test-950b1.firebaseio.com",
  storageBucket: "calendar-test-950b1.appspot.com",
};
firebase.initializeApp(config);

/* MIDDLEWARE */
app.use(bodyParser.json());

function emailSignup(email, password) {
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    let errorCode = error.code;
    let errorMessage = error.message;
  });
}

app.post('/testFBEmailSignup', (req, res) => {
  console.log(req.body)
  // emailSignup('test@something.com', 'idk123');
})

app.use(express.static('public'));

app.listen(4002, (req, res) => {
  console.log('Server listening on 4002');
})