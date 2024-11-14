// import Swal from "sweetalert2";
import * as $ from "jquery";

export function changePage(pageName) {
  const basePath = "/dist/pages"; // Adjust this path as per your Firebase hosting structure

  // Default page load
  if (pageName === "") {
    $.get(`${basePath}/home.html`, (data) => {
      $("#app").html(data);
    }).fail((error) => {
      console.error("Error loading page: ", error); // Log the error for debugging
      Swal.fire({
        title: "Error: Page Not Found",
        text: "Please find a new page",
        icon: "error",
        timer: 2500,
      });
    });
  } else {
    // Load the dynamic page content
    $.get(`${basePath}/${pageName}.html`, (data) => {
      $("#app").html(data);
    }).fail((error) => {
      console.error("Error loading page: ", error); // Log the error for debugging
      Swal.fire({
        title: "Error: Page Not Found",
        text: "Please find a new page",
        icon: "error",
        timer: 2000,
      });
    });
  }
}
