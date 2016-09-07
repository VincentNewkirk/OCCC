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
//make xhr not check if 200 or not run as async?
//had to set 2 second timer waiting for xhr with uid, might be fb is mad

const config = {
  apiKey: "AIzaSyDr-cAxhiDSQqlQfe5jGc-5UsQ0l6La5FE",
  authDomain: "calendar-test-950b1.firebaseapp.com",
  databaseURL: "https://calendar-test-950b1.firebaseio.com",
  storageBucket: "calendar-test-950b1.appspot.com",
};
firebase.initializeApp(config);
//Enable logging messages to spam the console.
// firebase.database.enableLogging((logMessage) => {
//   console.log(`${new Date().toISOString()} : ${logMessage}`);
// });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/signup', (req, res) => {
  let err = checkReqBody(req.body);
  console.log(err);
  firebase.auth().createUserWithEmailAndPassword(req.body.email, req.body.password)
  .catch((error) => {
    err = true;
    console.log(`${error.code} : ${error.message}`);
  })
  .then(() => {
    if(!err) {
      console.log(req.body);
      let db = firebase.database().ref(`users`);
      let email = req.body.email.replace('.', '');
      db.child(`${email}`).set({
        fullName: req.body.fullName,
        email: req.body.email,
        phone: req.body.phone,
        dobDay: req.body.dobDay,
        dobMonth: req.body.dobMonth,
        dobYear: req.body.dobYear,
        gender: req.body.gender,
        idMethod: req.body.idMethod,
        idNumber: req.body.idNumber,
      });
    }
  });
});

const checkReqBody = reqBody => {
  if(reqBody.fullName.length > 30 || !validateEmail(reqBody.email) || !reqBody.phone.length >= 7) {
    return true;
  }
  return false;
};
const validateEmail = email => {
  let re = /\S+@\S+\.\S+/;
  return re.test(email);
};

app.post('/login', (req, res) => {
  firebase.auth().signInWithEmailAndPassword(req.body.email, req.body.password)
  .catch((error) => {
    console.log(`Login failed for user: ${req.body.email} | ${error.code} : ${error.message}`);
  });
  setTimeout(() => {
    res.send(firebase.auth().currentUser.uid);
    }, 2000);
});

app.get('/signout', (req, res) => {
  firebase.auth().signOut().then(() => {
  // Sign-out successful.
  }, (error) => {
    console.log(`Signout failed | ${error.code} : ${error.message}`);
  });
});

app.get('/testPage', (req, res) => {
  console.log('Attempting to find current user... ');
  let user = firebase.auth().currentUser;
  console.log(user);
});

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));