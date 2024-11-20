import * as $ from "jquery";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { initListeners } from "./app.js";
//ROUTING FUNCTIONS
export function changePage() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");

  if (pageID != "") {
    $.get(`../dist/pages/${pageID}.html`, function (data) {
      $("#app").html(data);
      initListeners();
    });
  } else {
    $.get(`/dist/pages/home.html`, function (data) {
      $("#app").html(data);
      initListeners();
    });
  }
}

function initURLListener() {
  $(window).on("hashchange", changePage);
  changePage();
}

//Database email addition
export async function addEmail(email, db) {
  try {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error("Invalid email format");
    }
    const emailList = collection(db, "emails");
    const docRef = await addDoc(emailList, {
      email: email,
      timestamp: new Date(),
    });
    console.log("Email added :D", docRef.id);
    return true;
  } catch (error) {
    console.log("Error Adding Email:", error.message);
    return false;
  }
}

$(document).ready(function () {
  initURLListener();
});
