// Import necessary Firebase functions from the modular SDK
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { changePage } from "./model.js";
import Swal from "sweetalert2";
import * as $ from "jquery";

// Initialize Firebase - Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyCrdKVjsoKYDEg2SGcg5h3-H0A3lr2H_uw",
  authDomain: "nightmare-nursery-games.firebaseapp.com",
  projectId: "nightmare-nursery-games",
  storageBucket: "nightmare-nursery-games.appspot.com",
  messagingSenderId: "356180402296",
  appId: "1:356180402296:web:8f1af7371a5f01bb9d8d8d",
  measurementId: "G-JGTGR072LW",
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize event listeners and routing
function initListeners() {
  Swal.fire({
    title: "Error",
    text: "Do you want to continue?",
    icon: "error",
    showCancelButton: true,
  });
}

// Function to handle URL hash changes and page routing
function route() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  // Assuming changePage function handles routing
  changePage(pageID);
}

// Initialize the site - bind hash change events to route
function initSite() {
  $(window).on("hashchange", route);
  route();
}

// Form submission handling and Firestore integration
// document.getElementById("emailForm").addEventListener("submit", async (e) => {
//   e.preventDefault(); // Prevent traditional form submission

//   const email = document.getElementById("email").value; // Get email input
//   const successMessage = document.getElementById("successMessage");
//   const errorMessage = document.getElementById("errorMessage");

//   try {
//     // Add email to Firestore "emails" collection with a timestamp
//     await addDoc(collection(db, "emails"), {
//       email: email,
//       timestamp: serverTimestamp(), // Firestore server timestamp
//     });

//     // Display success message
//     successMessage.style.display = "block";
//     errorMessage.style.display = "none";
//   } catch (error) {
//     // Handle errors
//     console.error("Error adding email to Firestore: ", error);
//     errorMessage.style.display = "block";
//     successMessage.style.display = "none";
//   }

//   // Clear the form after submission
//   document.getElementById("emailForm").reset();
// });

// Initialize site and listeners on document ready
$(document).ready(function () {
  initSite();
});
