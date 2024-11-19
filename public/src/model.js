import * as $ from "jquery";

//ROUTING FUNCTIONS
export function changePage() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");

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
