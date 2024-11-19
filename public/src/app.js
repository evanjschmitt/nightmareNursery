import * as $ from "jquery";
import { changePage, addEmail } from "./model.js";

//Firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCrdKVjsoKYDEg2SGcg5h3-H0A3lr2H_uw",
  authDomain: "nightmare-nursery-games.firebaseapp.com",
  projectId: "nightmare-nursery-games",
  storageBucket: "nightmare-nursery-games.appspot.com",
  messagingSenderId: "356180402296",
  appId: "1:356180402296:web:8f1af7371a5f01bb9d8d8d",
  measurementId: "G-JGTGR072LW",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

document.addEventListener("DOMContentLoaded", () => {
  const emailForm = document.getElementById("emailForm");

  if (emailForm) {
    console.log("On Email Page")
    emailForm.addEventListener("submit", async (e) => {
      e.preventDefault(); // Prevent default form submission behavior

      // Retrieve the email input value
      const emailInput = document.getElementById("emailInput");
      const email = emailInput ? emailInput.value.trim() : "";

      if (!email) {
        console.error("No email entered");
        alert("Please enter a valid email address");
        return;
      }

      // Call addEmail with the input value and Firestore database
      const isSuccess = await addEmail(email, db);

      // Notify the user about success or failure
      if (isSuccess) {
        alert("Email added successfully!");
        emailInput.value = ""; // Clear the input field
      } else {
        alert("Failed to add email. Please try again later.");
      }
    });
  } else {
    // console.error("Form not found on the page.");
  }
});

function route() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  changePage(pageID);
}

// Initialize the site - bind hash change events to route
function initSite() {
  $(window).on("hashchange", route);
  route();
}

// Initialize site and listeners on document ready
$(document).ready(function () {
  initSite();
  // initListeners();
});
