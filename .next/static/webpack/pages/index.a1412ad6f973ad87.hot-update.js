"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/charts/OsShare.js":
/*!******************************************!*\
  !*** ./src/components/charts/OsShare.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/chart.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.js\");\n\n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_2__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_2__.ArcElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_2__.Legend);\nfunction OsShare() {\n    const data = {\n        labels: [\n            \"Desktops\",\n            \"Tablets\"\n        ],\n        datasets: [\n            {\n                data: [\n                    51.17,\n                    48.83\n                ],\n                backgroundColor: [\n                    \"#1E7F99\",\n                    \"#FD4A36\"\n                ],\n                hoverBackgroundColor: [\n                    \"#00C3CF\",\n                    \"#E77344\"\n                ],\n                hoverBorderColor: \"#fff\"\n            }\n        ]\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__.Pie, {\n        data: data\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ADMIN\\\\Desktop\\\\PA_Q1Reports\\\\Report_ReactJS\\\\src\\\\components\\\\charts\\\\OsShare.js\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, this);\n}\n_c = OsShare;\n/* harmony default export */ __webpack_exports__[\"default\"] = (OsShare);\nvar _c;\n$RefreshReg$(_c, \"OsShare\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jaGFydHMvT3NTaGFyZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwQjtBQUMrQztBQUNuQztBQUV0Q0Usb0RBQWdCLENBQUNDLGdEQUFVQSxFQUFFQyw2Q0FBT0EsRUFBRUMsNENBQU1BO0FBRTVDLFNBQVNHLFVBQVU7SUFDZixNQUFNQyxPQUFPO1FBQ1RDLFFBQVE7WUFDSjtZQUNBO1NBQ0g7UUFDREMsVUFBVTtZQUNOO2dCQUNJRixNQUFNO29CQUFDO29CQUFPO2lCQUFNO2dCQUNwQkcsaUJBQWlCO29CQUNiO29CQUNBO2lCQUNIO2dCQUNEQyxzQkFBc0I7b0JBQ2xCO29CQUNBO2lCQUNIO2dCQUNEQyxrQkFBa0I7WUFDdEI7U0FBRTtJQUNWO0lBQ0EscUJBQ0ksOERBQUNSLGdEQUFHQTtRQUFDRyxNQUFNQTs7Ozs7O0FBRW5CO0tBdkJTRDtBQXlCVCwrREFBZUEsT0FBT0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jaGFydHMvT3NTaGFyZS5qcz9kNTVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENoYXJ0IGFzIENoYXJ0SlMsIEFyY0VsZW1lbnQsIFRvb2x0aXAsIExlZ2VuZCB9IGZyb20gJ2NoYXJ0LmpzJztcclxuaW1wb3J0IHsgUGllIH0gZnJvbSAncmVhY3QtY2hhcnRqcy0yJztcclxuXHJcbkNoYXJ0SlMucmVnaXN0ZXIoQXJjRWxlbWVudCwgVG9vbHRpcCwgTGVnZW5kKTtcclxuXHJcbmZ1bmN0aW9uIE9zU2hhcmUoKSB7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgIGxhYmVsczogW1xyXG4gICAgICAgICAgICBcIkRlc2t0b3BzXCIsXHJcbiAgICAgICAgICAgIFwiVGFibGV0c1wiXHJcbiAgICAgICAgXSxcclxuICAgICAgICBkYXRhc2V0czogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiBbNTEuMTcsIDQ4LjgzXSxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiIzFFN0Y5OVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiI0ZENEEzNlwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgaG92ZXJCYWNrZ3JvdW5kQ29sb3I6IFtcclxuICAgICAgICAgICAgICAgICAgICBcIiMwMEMzQ0ZcIixcclxuICAgICAgICAgICAgICAgICAgICBcIiNFNzczNDRcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGhvdmVyQm9yZGVyQ29sb3I6IFwiI2ZmZlwiXHJcbiAgICAgICAgICAgIH1dXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UGllIGRhdGE9e2RhdGF9IC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPc1NoYXJlXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNoYXJ0IiwiQ2hhcnRKUyIsIkFyY0VsZW1lbnQiLCJUb29sdGlwIiwiTGVnZW5kIiwiUGllIiwicmVnaXN0ZXIiLCJPc1NoYXJlIiwiZGF0YSIsImxhYmVscyIsImRhdGFzZXRzIiwiYmFja2dyb3VuZENvbG9yIiwiaG92ZXJCYWNrZ3JvdW5kQ29sb3IiLCJob3ZlckJvcmRlckNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/charts/OsShare.js\n"));

/***/ })

});