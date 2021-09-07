"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/contact";
exports.ids = ["pages/api/contact"];
exports.modules = {

/***/ "./pages/api/contact.js":
/*!******************************!*\
  !*** ./pages/api/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n  console.log(req.body);\n\n  let nodemailer = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n\n  const sgTransport = __webpack_require__(/*! nodemailer-sendgrid-transport */ \"nodemailer-sendgrid-transport\");\n\n  const transporter = nodemailer.createTransport(sgTransport({\n    auth: {\n      api_key: \"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\"\n    }\n  }));\n  const mailData = {\n    from: 'no-reply@alvrio.io',\n    to: \"jprateek07@gmail.com\",\n    subject: `New Request From Bajrang Infra Website `,\n    html: \"name: \" + req.body.name + \"<br />\" + \"email: \" + req.body.email + \"<br />\" + \"Message: \" + req.body.message\n  };\n  transporter.sendMail(mailData, function (err, info) {\n    if (err) console.log(err);else console.log(info);\n  });\n  res.status(200);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvY29udGFjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsNkJBQWUsb0NBQVVBLEdBQVYsRUFBZUMsR0FBZixFQUFvQjtBQUMvQkMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlILEdBQUcsQ0FBQ0ksSUFBaEI7O0FBRUEsTUFBSUMsVUFBVSxHQUFHQyxtQkFBTyxDQUFDLDhCQUFELENBQXhCOztBQUNBLFFBQU1DLFdBQVcsR0FBR0QsbUJBQU8sQ0FBQyxvRUFBRCxDQUEzQjs7QUFDQSxRQUFNRSxXQUFXLEdBQUdILFVBQVUsQ0FBQ0ksZUFBWCxDQUEyQkYsV0FBVyxDQUFDO0FBQ3ZERyxJQUFBQSxJQUFJLEVBQUU7QUFDSkMsTUFBQUEsT0FBTyxFQUFFO0FBREw7QUFEaUQsR0FBRCxDQUF0QyxDQUFwQjtBQUtBLFFBQU1DLFFBQVEsR0FBRztBQUNmQyxJQUFBQSxJQUFJLEVBQUUsb0JBRFM7QUFFZkMsSUFBQUEsRUFBRSxFQUFFLHNCQUZXO0FBR2ZDLElBQUFBLE9BQU8sRUFBRyx5Q0FISztBQUlmQyxJQUFBQSxJQUFJLEVBQ0YsV0FDQWhCLEdBQUcsQ0FBQ0ksSUFBSixDQUFTYSxJQURULEdBQ2dCLFFBRGhCLEdBRUEsU0FGQSxHQUdBakIsR0FBRyxDQUFDSSxJQUFKLENBQVNjLEtBSFQsR0FHaUIsUUFIakIsR0FJQSxXQUpBLEdBS0FsQixHQUFHLENBQUNJLElBQUosQ0FBU2U7QUFWSSxHQUFqQjtBQVlBWCxFQUFBQSxXQUFXLENBQUNZLFFBQVosQ0FBcUJSLFFBQXJCLEVBQStCLFVBQVVTLEdBQVYsRUFBZUMsSUFBZixFQUFxQjtBQUNsRCxRQUFHRCxHQUFILEVBQ0VuQixPQUFPLENBQUNDLEdBQVIsQ0FBWWtCLEdBQVosRUFERixLQUdFbkIsT0FBTyxDQUFDQyxHQUFSLENBQVltQixJQUFaO0FBQ0gsR0FMRDtBQU1BckIsRUFBQUEsR0FBRyxDQUFDc0IsTUFBSixDQUFXLEdBQVg7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL3NocmVlLWJhanJhbmctaW5mcmEvLi9wYWdlcy9hcGkvY29udGFjdC5qcz9hMGIxIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChyZXEsIHJlcykge1xuICAgIGNvbnNvbGUubG9nKHJlcS5ib2R5KVxuICAgIFxuICAgIGxldCBub2RlbWFpbGVyID0gcmVxdWlyZSgnbm9kZW1haWxlcicpXG4gICAgY29uc3Qgc2dUcmFuc3BvcnQgPSByZXF1aXJlKCdub2RlbWFpbGVyLXNlbmRncmlkLXRyYW5zcG9ydCcpXG4gICAgY29uc3QgdHJhbnNwb3J0ZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydChzZ1RyYW5zcG9ydCh7XG4gICAgICAgIGF1dGg6IHtcbiAgICAgICAgICBhcGlfa2V5OiBcIlNHLl9oWGFNMW8wVHhpVDNtSmFlUXBudFEuZHV0YS1ON3hPYUpXVUdGaEZ6S3NYZTVEbVlGbDk3UlBIS29qYUZDRC1Yb1wiXG4gICAgICAgIH1cbiAgICAgIH0pKVxuICAgIGNvbnN0IG1haWxEYXRhID0ge1xuICAgICAgZnJvbTogJ25vLXJlcGx5QGFsdnJpby5pbycsXG4gICAgICB0bzogXCJqcHJhdGVlazA3QGdtYWlsLmNvbVwiLFxuICAgICAgc3ViamVjdDogYE5ldyBSZXF1ZXN0IEZyb20gQmFqcmFuZyBJbmZyYSBXZWJzaXRlIGAsXG4gICAgICBodG1sOlxuICAgICAgICBcIm5hbWU6IFwiICtcbiAgICAgICAgcmVxLmJvZHkubmFtZSArIFwiPGJyIC8+XCIrXG4gICAgICAgIFwiZW1haWw6IFwiICtcbiAgICAgICAgcmVxLmJvZHkuZW1haWwgKyBcIjxiciAvPlwiK1xuICAgICAgICBcIk1lc3NhZ2U6IFwiICtcbiAgICAgICAgcmVxLmJvZHkubWVzc2FnZSxcbiAgICB9XG4gICAgdHJhbnNwb3J0ZXIuc2VuZE1haWwobWFpbERhdGEsIGZ1bmN0aW9uIChlcnIsIGluZm8pIHtcbiAgICAgIGlmKGVycilcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgZWxzZVxuICAgICAgICBjb25zb2xlLmxvZyhpbmZvKVxuICAgIH0pXG4gICAgcmVzLnN0YXR1cygyMDApXG4gIH0iXSwibmFtZXMiOlsicmVxIiwicmVzIiwiY29uc29sZSIsImxvZyIsImJvZHkiLCJub2RlbWFpbGVyIiwicmVxdWlyZSIsInNnVHJhbnNwb3J0IiwidHJhbnNwb3J0ZXIiLCJjcmVhdGVUcmFuc3BvcnQiLCJhdXRoIiwiYXBpX2tleSIsIm1haWxEYXRhIiwiZnJvbSIsInRvIiwic3ViamVjdCIsImh0bWwiLCJuYW1lIiwiZW1haWwiLCJtZXNzYWdlIiwic2VuZE1haWwiLCJlcnIiLCJpbmZvIiwic3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/contact.js\n");

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ "nodemailer-sendgrid-transport":
/*!************************************************!*\
  !*** external "nodemailer-sendgrid-transport" ***!
  \************************************************/
/***/ ((module) => {

module.exports = require("nodemailer-sendgrid-transport");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/contact.js"));
module.exports = __webpack_exports__;

})();