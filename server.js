const express = require('express');
const firebase = require('firebase');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 4002;
const app = express();

const config = {
  apiKey: 'AIzaSyDr-cAxhiDSQqlQfe5jGc-5UsQ0l6La5FE',
  authDomain: 'calendar-test-950b1.firebaseapp.com',
  databaseURL: 'https://calendar-test-950b1.firebaseio.com',
  storageBucket: 'calendar-test-950b1.appspot.com',
};
firebase.initializeApp(config);
// Enable logging messages to spam the console.
// firebase.database.enableLogging((logMessage) => {
//   console.log(`${new Date().toISOString()} : ${logMessage}`);
// });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

const validateEmail = email => {
  let re = /\S+@\S+\.\S+/;
  return re.test(email);
};
const checkReqBody = reqBody => {
  if (reqBody.fullName.length > 30 || !validateEmail(reqBody.email) || !reqBody.phone.length >= 7) {
    return true;
  }
  return false;
};

app.post('/signup', (req, res) => {
  let err = checkReqBody(req.body);
  firebase.auth().createUserWithEmailAndPassword(req.body.email, req.body.password)
  .catch((error) => {
    err = true;
    console.log(`${error.code} : ${error.message}`);
  })
  .then(() => {
    if (!err) {
      let db = firebase.database().ref(`users`);
      let email = req.body.email.replace('.', '');
      db.child(`${email}`).set({
        fullName: req.body.fullName,
        email: req.body.email,
        phone: req.body.phone,
        dob: `${req.body.dobDay}/${req.body.dobMonth}/${req.body.dobYear}`,
        gender: req.body.gender,
        idMethod: req.body.idMethod,
        idNumber: req.body.idNumber,
      });
    }
  });
});


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
  const user = firebase.auth().currentUser;
  console.log(user);
});

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
