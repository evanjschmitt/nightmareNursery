// Import necessary Firebase functions from the modular SDK
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { changePage } from "./model.js";
import Swal from "sweetalert2";
// import React, { useState, useEffect } from "react";
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

// Initialize Firebase App + Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Initialize event listeners and routing
function initListeners() {
  // Swal.fire({
  //   title: "Error",
  //   text: "Do you want to continue?",
  //   icon: "error",
  //   showCancelButton: true,
  // });
  document.getElementById("emailForm").addEventListener("submit", async (e) => {
    console.log("Button Listener Works");
    e.preventDefault();
    const emailInput = document.getElementById("emailInput");
    const email = emailInput.value.trim();
    const messageDiv = document.getElementById("message");

    console.log("Email Grabbed:", email);

    if (email) {
      try {
        await addDoc(collection(db, "email_list"), { email });
        messageDiv.textContent = "Thank you for joining the email list!";
        emailInput.value = ""; // Clear the input
      } catch (error) {
        console.error("Error adding email: ", error);
        messageDiv.textContent =
          "Error: Could not join the email list. Please try again.";
      }
    } else {
      messageDiv.textContent = "Please enter a valid email.";
    }
    console.log("Rest of function called");
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

// Initialize site and listeners on document ready
$(document).ready(function () {
  initSite();
});
