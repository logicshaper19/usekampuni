"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _components_search_SearchBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/search/SearchBar */ \"(app-pages-browser)/./src/components/search/SearchBar.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const handleSearch = (query)=>{\n        if (query.trim()) {\n            router.push(\"/search?q=\".concat(encodeURIComponent(query)));\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"min-h-screen p-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-4xl font-bold mb-4\",\n                children: \"Empower Your Decisions with Trusted Data\"\n            }, void 0, false, {\n                fileName: \"/Users/elisha/usekampuni/src/app/page.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-lg mb-8 text-gray-600\",\n                children: \"Access accurate, real-time information about any business in Kenya\"\n            }, void 0, false, {\n                fileName: \"/Users/elisha/usekampuni/src/app/page.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"max-w-xl\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_search_SearchBar__WEBPACK_IMPORTED_MODULE_2__.SearchBar, {\n                    onSearch: handleSearch,\n                    placeholder: \"Search for registered companies...\"\n                }, void 0, false, {\n                    fileName: \"/Users/elisha/usekampuni/src/app/page.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/elisha/usekampuni/src/app/page.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/elisha/usekampuni/src/app/page.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRTRDO0FBQ2M7QUFFM0MsU0FBU0U7O0lBQ3RCLE1BQU1DLFNBQVNILDBEQUFTQTtJQUV4QixNQUFNSSxlQUFlLENBQUNDO1FBQ3BCLElBQUlBLE1BQU1DLElBQUksSUFBSTtZQUNoQkgsT0FBT0ksSUFBSSxDQUFDLGFBQXVDLE9BQTFCQyxtQkFBbUJIO1FBQzlDO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0k7UUFBS0MsV0FBVTs7MEJBQ2QsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUEwQjs7Ozs7OzBCQUl4Qyw4REFBQ0U7Z0JBQUVGLFdBQVU7MEJBQTZCOzs7Ozs7MEJBSTFDLDhEQUFDRztnQkFBSUgsV0FBVTswQkFDYiw0RUFBQ1QsbUVBQVNBO29CQUNSYSxVQUFVVjtvQkFDVlcsYUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLdEI7R0EzQndCYjs7UUFDUEYsc0RBQVNBOzs7S0FERkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcbmltcG9ydCB7IFNlYXJjaEJhciB9IGZyb20gJ0AvY29tcG9uZW50cy9zZWFyY2gvU2VhcmNoQmFyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgaGFuZGxlU2VhcmNoID0gKHF1ZXJ5OiBzdHJpbmcpID0+IHtcbiAgICBpZiAocXVlcnkudHJpbSgpKSB7XG4gICAgICByb3V0ZXIucHVzaChgL3NlYXJjaD9xPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHF1ZXJ5KX1gKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gcC04XCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIG1iLTRcIj5cbiAgICAgICAgRW1wb3dlciBZb3VyIERlY2lzaW9ucyB3aXRoIFRydXN0ZWQgRGF0YVxuICAgICAgPC9oMT5cbiAgICAgIFxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBtYi04IHRleHQtZ3JheS02MDBcIj5cbiAgICAgICAgQWNjZXNzIGFjY3VyYXRlLCByZWFsLXRpbWUgaW5mb3JtYXRpb24gYWJvdXQgYW55IGJ1c2luZXNzIGluIEtlbnlhXG4gICAgICA8L3A+XG4gICAgICBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXcteGxcIj5cbiAgICAgICAgPFNlYXJjaEJhciBcbiAgICAgICAgICBvblNlYXJjaD17aGFuZGxlU2VhcmNofVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciByZWdpc3RlcmVkIGNvbXBhbmllcy4uLlwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiU2VhcmNoQmFyIiwiSG9tZSIsInJvdXRlciIsImhhbmRsZVNlYXJjaCIsInF1ZXJ5IiwidHJpbSIsInB1c2giLCJlbmNvZGVVUklDb21wb25lbnQiLCJtYWluIiwiY2xhc3NOYW1lIiwiaDEiLCJwIiwiZGl2Iiwib25TZWFyY2giLCJwbGFjZWhvbGRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});