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

let isClickListenerAdded = false;

export async function initListeners() {
  console.log("Listeners init started");

  // Attach the click listener only once
  if (!isClickListenerAdded) {
    document.addEventListener("click", async (e) => {
      if (e.target && e.target.id === "emailSubmit") {
        console.log("On Email Page");

        const emailInput = document.getElementById("emailInput");
        const email = emailInput ? emailInput.value.trim() : "";

        if (!email) {
          console.error("No email entered");
          alert("Please enter a valid email address");
          return;
        }

        // Prevent double submission
        e.target.disabled = true; // Disable the button temporarily
        try {
          await addEmail(email, db);
          // console.log("Email Added!", email);
          // alert("Email successfully added!");
        } catch (error) {
          console.error("Error adding email:", error);
          alert("Failed to add email. Please try again.");
        } finally {
          e.target.disabled = false; // Re-enable the button
        }
      }
    });

    isClickListenerAdded = true; // Mark the listener as added
  }

  console.log("Listeners init finished");
}

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
});
