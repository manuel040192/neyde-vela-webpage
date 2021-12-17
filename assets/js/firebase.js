const firebaseConfig = {
    apiKey: "AIzaSyBaYUqX-0H11htZYkYhhQm1XcsaOBLuHZE",
    authDomain: "auth-development-b3b63.firebaseapp.com",
    databaseURL: "https://auth-development-b3b63-default-rtdb.firebaseio.com",
    projectId: "auth-development-b3b63",
    storageBucket: "auth-development-b3b63.appspot.com",
    messagingSenderId: "147576290002",
    appId: "1:147576290002:web:0f99179b827f690b804b0b",
    measurementId: "G-6NDC6SLGY2"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
e.preventDefault();

var name = getElementVal("name");
var email = getElementVal("email");
var subject = getElementVal("subject");
var phone = getElementVal("phone");
var msgContent = getElementVal("msgContent");

saveMessages(name, email, subject, phone, msgContent);

//   enable alert
document.querySelector(".alert").style.display = "block";

//   remove the alert
setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
}, 3000);

//   reset the form
document.getElementById("contactForm").reset();
}

const saveMessages = (name, email, subject, phone, msgContent) => {
var newContactForm = contactFormDB.push();

newContactForm.set({
    name: name,
    email: email,
    subject: subject,
    phone: phone,
    msgContent: msgContent,
});
};

const getElementVal = (id) => {
return document.getElementById(id).value;
};