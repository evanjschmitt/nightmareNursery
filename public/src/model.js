import * as $ from "jquery";
import { doc, setDoc, collection, addDoc, Timestamp } from "firebase/firestore";
import { initListeners } from "./app.js";
import Swal from "sweetalert2";
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
// export async function addEmail(email, db) {
//   try {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       throw new Error("Invalid email format");
//     }
//     const emailList = collection(db, "emails");
//     const docRef = await addDoc(emailList, {
//       email: email,
//       timestamp: new Date(),
//     });
//     console.log("Email added :D", docRef.id);
//     return true;
//   } catch (error) {
//     console.log("Error Adding Email:", error.message);
//     return false;
//   }
// }

/**
 * Add email to Firestore with the email as the document ID.
 * @param {string} email - The email address to add.
 * @param {object} db - The Firestore database instance.
 * @returns {Promise<boolean>} - Resolves to true if successful, otherwise false.
 */
export async function addEmail(email, db) {
  try {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          // throw new Error("Invalid email format");
          Swal.fire({
            icon: 'error',
            title: 'Invalid Email',
            text: 'Please enter a valid email address.',
            confirmButtonText: 'Okay'
          });
          return;
        }
    // Use email as the document ID
    const emailDocRef = doc(db, "emails", email);

    // Add email to the document
    await setDoc(emailDocRef, {
      email: email,
      createdAt: Timestamp.now(), // Optional: Add a timestamp
    });

    console.log("Email added with ID:", email);
    return true;
  } catch (error) {
    console.error("Error adding email:", error);
    return false;
  }
}

$(document).ready(function () {
  initURLListener();
});
