const express = require('express');
const firebase = require('firebase');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 4002;
const app = express();

//might need to auth any domain using firebase in the console - auth
//form needs homepage redirect, or login page
//make forms use ng-repeat
//pages load angular each time they load...
//adobe sign free trial
//firebase has simple UI for logins
//test multiple logins, make sure people dont get someone else's id serverside
//fbdb is still set to public
//set cookies to die after a certain time
//dont forget about the app
//seems to be some lag with the xhr returning simple text
//make sure if 2 users login at the same time, they get the right cookie

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

app.post('/signup', (req, res) => {
  console.log(req.body);
  let db = firebase.database().ref(`users`);
  db.child(`${req.body.username}`).set({
    first_name: req.body.firstName,
    last_name: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
  });
  firebase.auth().createUserWithEmailAndPassword(req.body.email, req.body.password)
  .catch((error) => {
    console.log(`${error.code} : ${error.message}`);
  });
});

app.post('/login', (req, res) => {
  firebase.auth().signInWithEmailAndPassword(req.body.email, req.body.password)
  .catch((error) => {
    console.log(`this is the firebase error code from login- ${error.code} : ${error.message}`);
  });
});

app.get('/signout', (req, res) => {
  firebase.auth().signOut().then(() => {
  // Sign-out successful.
  }, (error) => {
    console.log(`Error with signout ${error}`);
  });
});

app.get('/testPage', (req, res) => {
  res.send(`${firebase.auth().currentUser.uid}`)
});

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));