// import Swal from "sweetalert2";
import * as $ from "jquery";

//Email Model Functionality
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";

const db = getFirestore(); // Initialize Firestore instance

//ROUTING FUNCTIONS
export function changePage() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  //   console.log(hashTag + ' ' + pageID);

  if (pageID != "") {
    $.get(`../dist/pages/${pageID}.html`, function (data) {
      $("#app").html(data);
    });
  } else {
    $.get(`/dist/pages/home.html`, function (data) {
      $("#app").html(data);
    });
  }
}

function initURLListener() {
  $(window).on("hashchange", changePage);
  changePage();
}

$(document).ready(function () {
  initURLListener();
});
