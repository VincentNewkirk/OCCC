const express = require('express');
const firebase = require('firebase');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 4002;
const app = express();

//not sure if this will work with out exporting config
//might need to auth any domain using firebase in the console - auth
//form needs homepage redirect, or login page
//make forms use ng-repeat
//pages load angular each time they load...
//adobe sign free trial
//firebase has simple UI for logins

const config = {
  apiKey: "AIzaSyDr-cAxhiDSQqlQfe5jGc-5UsQ0l6La5FE",
  authDomain: "calendar-test-950b1.firebaseapp.com",
  databaseURL: "https://calendar-test-950b1.firebaseio.com",
  storageBucket: "calendar-test-950b1.appspot.com",
};
firebase.initializeApp(config);
// firebase.database.enableLogging((logMessage) => {
//   console.log(`${new Date().toISOString()} : ${logMessage}`);
// });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/signup', (req, res) => {
  let err = checkReqBody(req.body);

  firebase.auth().createUserWithEmailAndPassword(req.body.email, req.body.password)
  .catch((error) => {
    err = true;
    console.log(`${error.code} : ${error.message}`);
  })
  .then(() => {
    if(!err) {
      let db = firebase.database().ref(`users`);
      let email = req.body.email.replace('.', '');
      db.child(`${email}`).set({
        fullName: req.body.fullName,
        email: req.body.email,
        phone: req.body.phone,
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
  console.log('attempting to find current user.. ')
  var user = firebase.auth().currentUser;
  console.log(user)
});

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));