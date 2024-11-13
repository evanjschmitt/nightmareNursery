import { changePage } from "./model.js";

function initListeners() {
  Swal.fire({
    title: "error",
    text: "Do you want to continue?",
    icon: "error",
    showCancelButton: "true",
  });
}

/// This function is used to grab the hash tag and load the correct page
function route() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  // console.log("route", pageID);
  changePage(pageID);
}

// This fucntion adds the url cchange listener to the window
function initSite() {
  $(window).on("hashchange", route);
  route();
}


// Initialize Firebase
const firebaseConfig = {
  // Your Firebase config goes here
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};

// Initialize Firebase and Firestore
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Handle form submission
document.getElementById('emailForm').addEventListener('submit', async (e) => {
  e.preventDefault(); // Prevent form from submitting the traditional way

  const email = document.getElementById('email').value;
  const successMessage = document.getElementById('successMessage');
  const errorMessage = document.getElementById('errorMessage');

  try {
    // Add email to the "emails" collection in Firestore
    await db.collection('emails').add({
      email: email,
      timestamp: firebase.firestore.FieldValue.serverTimestamp() // Adds a timestamp
    });

    // Display success message
    successMessage.style.display = 'block';
    errorMessage.style.display = 'none';
  } catch (error) {
    // Handle error (show error message)
    console.error('Error adding email to Firestore: ', error);
    errorMessage.style.display = 'block';
    successMessage.style.display = 'none';
  }

  // Clear the form after submission
  document.getElementById('emailForm').reset();
});







$(document).ready(function () {
 ;
  initSite();
});

