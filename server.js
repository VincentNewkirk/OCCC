const express = require('express');
const app = express();
const firebase = require('firebase');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 4002;

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
app.use(bodyParser.json({
  extended: true,
}));

function emailSignup(email, password) {
  firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
    let errorCode = error.code;
    let errorMessage = error.message;
  });
}

app.post('/testFBEmailSignup', (req, res) => {
  console.log(req.body.email + " " + req.body.password + " " + typeof req.body.email + typeof req.body.password)
  emailSignup(req.body.email, req.body.password);
});

app.use(express.static('public'));

app.listen(PORT, (req, res) => {
  console.log(`Server listening on ${PORT}`);
});