const express = require('express');
const firebase = require('firebase');
const bodyParser = require('body-parser');

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
  emailSignup(req.body.email, req.body.password);
});
app.post('/login', (req, res) => {
  firebase.auth().signInWithEmailAndPassword(req.body.email, req.body.password)
  .catch((error) => {
    console.log(`${error.code} : ${error.message}`);
  });
});
app.get('/signout', (req, res) => {
  firebase.auth().signOut().then(() => {
  // Sign-out successful.
  }, (error) => {
    console.log(`Error with signout ${error}`);
  });
});

app.listen(PORT, (req, res) => {
  console.log(`Server listening on ${PORT}`);
});