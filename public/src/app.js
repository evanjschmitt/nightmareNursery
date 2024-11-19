import * as $ from "jquery";
import { changePage } from "./model.js";

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
