const firebaseConfig = {
  apiKey: "AIzaSyDbokVCbJ591ysYGn7rKmWt6i-gdEqL-rQ",
  authDomain: "wiggle-3973b.firebaseapp.com",
  databaseURL: "https://wiggle-3973b-default-rtdb.firebaseio.com",
  projectId: "wiggle-3973b",
  storageBucket: "wiggle-3973b.appspot.com",
  messagingSenderId: "642464423052",
  appId: "1:642464423052:web:770067b6e8be600d64afa9"
}

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("messeges");

document.getElementById("contactForm").addEventListener("submit", submitForm);

const getElementValue = (id) => {
  return document.getElementById(id).value;
};

const saveMessages = (token, type, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    token: token,
    type: type,
    msgContent: msgContent,
  });
};

function submitForm(e) {
  e.preventDefault();

  var token = getElementValue("token");
  var type = getElementValue("type");
  var msgContent = getElementValue("msgContent");

  saveMessages(token, type, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}
