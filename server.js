const express = require('express');
const firebase = require('firebase');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const app = express();
const PORT = process.env.PORT || 4002;

//not sure if this will work with out exporting config
//might need to auth any domain using firebase in the console - auth
//form needs homepage redirect, or login page
//make forms use ng-repeat

const config = {
  apiKey: "AIzaSyDr-cAxhiDSQqlQfe5jGc-5UsQ0l6La5FE",
  authDomain: "calendar-test-950b1.firebaseapp.com",
  databaseURL: "https://calendar-test-950b1.firebaseio.com",
  storageBucket: "calendar-test-950b1.appspot.com",
};
firebase.initializeApp(config);

/* MIDDLEWARE */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

function emailSignup(email, password) {
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .catch((error) => {
    console.log(`${error.code} : ${error.message}`);
  });
}

app.post('/signup', (req, res) => {
  console.log(`${req.body.email} ${req.body.password} : ${typeof req.body.email} ${typeof req.body.password}`);
  bcrypt.genSalt(5, (err, salt) => {
    bcrypt.hash(req.body.password, salt, (err, hash) => {
      emailSignup(req.body.email, hash);
    });
  });
});

app.listen(PORT, (req, res) => {
  console.log(`Server listening on ${PORT}`);
});