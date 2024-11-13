/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model.js */ \"./src/model.js\");\n\r\n\r\nfunction initListeners() {\r\n  Swal.fire({\r\n    title: \"error\",\r\n    text: \"Do you want to continue?\",\r\n    icon: \"error\",\r\n    showCancelButton: \"true\",\r\n  });\r\n}\r\n\r\n/// This function is used to grab the hash tag and load the correct page\r\nfunction route() {\r\n  let hashTag = window.location.hash;\r\n  let pageID = hashTag.replace(\"#\", \"\");\r\n  // console.log(\"route\", pageID);\r\n  (0,_model_js__WEBPACK_IMPORTED_MODULE_0__.changePage)(pageID);\r\n}\r\n\r\n// This fucntion adds the url cchange listener to the window\r\nfunction initSite() {\r\n  $(window).on(\"hashchange\", route);\r\n  route();\r\n}\r\n\r\n\r\n// Initialize Firebase\r\nconst firebaseConfig = {\r\n  // Your Firebase config goes here\r\n  apiKey: \"your-api-key\",\r\n  authDomain: \"your-auth-domain\",\r\n  projectId: \"your-project-id\",\r\n  storageBucket: \"your-storage-bucket\",\r\n  messagingSenderId: \"your-messaging-sender-id\",\r\n  appId: \"your-app-id\"\r\n};\r\n\r\n// Initialize Firebase and Firestore\r\nfirebase.initializeApp(firebaseConfig);\r\nconst db = firebase.firestore();\r\n\r\n// Handle form submission\r\ndocument.getElementById('emailForm').addEventListener('submit', async (e) => {\r\n  e.preventDefault(); // Prevent form from submitting the traditional way\r\n\r\n  const email = document.getElementById('email').value;\r\n  const successMessage = document.getElementById('successMessage');\r\n  const errorMessage = document.getElementById('errorMessage');\r\n\r\n  try {\r\n    // Add email to the \"emails\" collection in Firestore\r\n    await db.collection('emails').add({\r\n      email: email,\r\n      timestamp: firebase.firestore.FieldValue.serverTimestamp() // Adds a timestamp\r\n    });\r\n\r\n    // Display success message\r\n    successMessage.style.display = 'block';\r\n    errorMessage.style.display = 'none';\r\n  } catch (error) {\r\n    // Handle error (show error message)\r\n    console.error('Error adding email to Firestore: ', error);\r\n    errorMessage.style.display = 'block';\r\n    successMessage.style.display = 'none';\r\n  }\r\n\r\n  // Clear the form after submission\r\n  document.getElementById('emailForm').reset();\r\n});\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n$(document).ready(function () {\r\n ;\r\n  initSite();\r\n});\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLmpzIiwibWFwcGluZ3MiOiI7O0FBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxxREFBVTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL2hvbWV3b3JrMDEvLi9zcmMvYXBwLmpzPzExMTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2hhbmdlUGFnZSB9IGZyb20gXCIuL21vZGVsLmpzXCI7XHJcblxyXG5mdW5jdGlvbiBpbml0TGlzdGVuZXJzKCkge1xyXG4gIFN3YWwuZmlyZSh7XHJcbiAgICB0aXRsZTogXCJlcnJvclwiLFxyXG4gICAgdGV4dDogXCJEbyB5b3Ugd2FudCB0byBjb250aW51ZT9cIixcclxuICAgIGljb246IFwiZXJyb3JcIixcclxuICAgIHNob3dDYW5jZWxCdXR0b246IFwidHJ1ZVwiLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGdyYWIgdGhlIGhhc2ggdGFnIGFuZCBsb2FkIHRoZSBjb3JyZWN0IHBhZ2VcclxuZnVuY3Rpb24gcm91dGUoKSB7XHJcbiAgbGV0IGhhc2hUYWcgPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcclxuICBsZXQgcGFnZUlEID0gaGFzaFRhZy5yZXBsYWNlKFwiI1wiLCBcIlwiKTtcclxuICAvLyBjb25zb2xlLmxvZyhcInJvdXRlXCIsIHBhZ2VJRCk7XHJcbiAgY2hhbmdlUGFnZShwYWdlSUQpO1xyXG59XHJcblxyXG4vLyBUaGlzIGZ1Y250aW9uIGFkZHMgdGhlIHVybCBjY2hhbmdlIGxpc3RlbmVyIHRvIHRoZSB3aW5kb3dcclxuZnVuY3Rpb24gaW5pdFNpdGUoKSB7XHJcbiAgJCh3aW5kb3cpLm9uKFwiaGFzaGNoYW5nZVwiLCByb3V0ZSk7XHJcbiAgcm91dGUoKTtcclxufVxyXG5cclxuXHJcbi8vIEluaXRpYWxpemUgRmlyZWJhc2VcclxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgLy8gWW91ciBGaXJlYmFzZSBjb25maWcgZ29lcyBoZXJlXHJcbiAgYXBpS2V5OiBcInlvdXItYXBpLWtleVwiLFxyXG4gIGF1dGhEb21haW46IFwieW91ci1hdXRoLWRvbWFpblwiLFxyXG4gIHByb2plY3RJZDogXCJ5b3VyLXByb2plY3QtaWRcIixcclxuICBzdG9yYWdlQnVja2V0OiBcInlvdXItc3RvcmFnZS1idWNrZXRcIixcclxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCJ5b3VyLW1lc3NhZ2luZy1zZW5kZXItaWRcIixcclxuICBhcHBJZDogXCJ5b3VyLWFwcC1pZFwiXHJcbn07XHJcblxyXG4vLyBJbml0aWFsaXplIEZpcmViYXNlIGFuZCBGaXJlc3RvcmVcclxuZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcbmNvbnN0IGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlKCk7XHJcblxyXG4vLyBIYW5kbGUgZm9ybSBzdWJtaXNzaW9uXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbEZvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhc3luYyAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTsgLy8gUHJldmVudCBmb3JtIGZyb20gc3VibWl0dGluZyB0aGUgdHJhZGl0aW9uYWwgd2F5XHJcblxyXG4gIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYWlsJykudmFsdWU7XHJcbiAgY29uc3Qgc3VjY2Vzc01lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VjY2Vzc01lc3NhZ2UnKTtcclxuICBjb25zdCBlcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXJyb3JNZXNzYWdlJyk7XHJcblxyXG4gIHRyeSB7XHJcbiAgICAvLyBBZGQgZW1haWwgdG8gdGhlIFwiZW1haWxzXCIgY29sbGVjdGlvbiBpbiBGaXJlc3RvcmVcclxuICAgIGF3YWl0IGRiLmNvbGxlY3Rpb24oJ2VtYWlscycpLmFkZCh7XHJcbiAgICAgIGVtYWlsOiBlbWFpbCxcclxuICAgICAgdGltZXN0YW1wOiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSAvLyBBZGRzIGEgdGltZXN0YW1wXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBEaXNwbGF5IHN1Y2Nlc3MgbWVzc2FnZVxyXG4gICAgc3VjY2Vzc01lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICBlcnJvck1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgLy8gSGFuZGxlIGVycm9yIChzaG93IGVycm9yIG1lc3NhZ2UpXHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBhZGRpbmcgZW1haWwgdG8gRmlyZXN0b3JlOiAnLCBlcnJvcik7XHJcbiAgICBlcnJvck1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICBzdWNjZXNzTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIH1cclxuXHJcbiAgLy8gQ2xlYXIgdGhlIGZvcm0gYWZ0ZXIgc3VibWlzc2lvblxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbEZvcm0nKS5yZXNldCgpO1xyXG59KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuIDtcclxuICBpbml0U2l0ZSgpO1xyXG59KTtcclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.js */ \"./src/app.js\");\n/* harmony import */ var _model_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model.js */ \"./src/model.js\");\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBQWtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG9tZXdvcmswMS8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vYXBwLmpzXCI7XHJcbmltcG9ydCBcIi4vbW9kZWwuanNcIjsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/model.js":
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   changePage: () => (/* binding */ changePage)\n/* harmony export */ });\n// import Swal from \"sweetalert2\";\r\n\r\nfunction changePage(pageName) {\r\n    // console.log(\"pageName:\", pageName);\r\n    if (pageName == \"\") {\r\n      // $(\"#app\").html(`<h1>home</h1>`);\r\n      $.get(\"pages/home.html\", (data) => {\r\n        $(\"#app\").html(data);\r\n      }).fail((error) => {\r\n        console.log(\"error\", error);\r\n        Swal.fire({\r\n          title: \"Error: Page Not Found\",\r\n          text: \"Please find a new page\",\r\n          icon: \"error\",\r\n          timer: 2500,\r\n        });\r\n      });\r\n    } else {\r\n      // $(\"#app\").html(`<h1>${pageName}</h1>`);\r\n      $.get(`pages/${pageName}.html`, (data) => {\r\n        $(\"#app\").html(data);\r\n      }).fail((error) => {\r\n        // console.log(\"error\", error);\r\n        Swal.fire({\r\n          title: \"Error: Page Not Found\",\r\n          text: \"Please find a new page\",\r\n          timer: 2000,\r\n        });\r\n      });\r\n    }\r\n  }\r\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kZWwuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxNQUFNO0FBQ04sK0JBQStCLFNBQVM7QUFDeEMscUJBQXFCLFNBQVM7QUFDOUI7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG9tZXdvcmswMS8uL3NyYy9tb2RlbC5qcz80YWJlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBTd2FsIGZyb20gXCJzd2VldGFsZXJ0MlwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVBhZ2UocGFnZU5hbWUpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwicGFnZU5hbWU6XCIsIHBhZ2VOYW1lKTtcclxuICAgIGlmIChwYWdlTmFtZSA9PSBcIlwiKSB7XHJcbiAgICAgIC8vICQoXCIjYXBwXCIpLmh0bWwoYDxoMT5ob21lPC9oMT5gKTtcclxuICAgICAgJC5nZXQoXCJwYWdlcy9ob21lLmh0bWxcIiwgKGRhdGEpID0+IHtcclxuICAgICAgICAkKFwiI2FwcFwiKS5odG1sKGRhdGEpO1xyXG4gICAgICB9KS5mYWlsKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIiwgZXJyb3IpO1xyXG4gICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICB0aXRsZTogXCJFcnJvcjogUGFnZSBOb3QgRm91bmRcIixcclxuICAgICAgICAgIHRleHQ6IFwiUGxlYXNlIGZpbmQgYSBuZXcgcGFnZVwiLFxyXG4gICAgICAgICAgaWNvbjogXCJlcnJvclwiLFxyXG4gICAgICAgICAgdGltZXI6IDI1MDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gJChcIiNhcHBcIikuaHRtbChgPGgxPiR7cGFnZU5hbWV9PC9oMT5gKTtcclxuICAgICAgJC5nZXQoYHBhZ2VzLyR7cGFnZU5hbWV9Lmh0bWxgLCAoZGF0YSkgPT4ge1xyXG4gICAgICAgICQoXCIjYXBwXCIpLmh0bWwoZGF0YSk7XHJcbiAgICAgIH0pLmZhaWwoKGVycm9yKSA9PiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJlcnJvclwiLCBlcnJvcik7XHJcbiAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgIHRpdGxlOiBcIkVycm9yOiBQYWdlIE5vdCBGb3VuZFwiLFxyXG4gICAgICAgICAgdGV4dDogXCJQbGVhc2UgZmluZCBhIG5ldyBwYWdlXCIsXHJcbiAgICAgICAgICB0aW1lcjogMjAwMCxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/model.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;