"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/companies/[id]/page",{

/***/ "(app-pages-browser)/./src/components/network/NetworkGraph.tsx":
/*!*************************************************!*\
  !*** ./src/components/network/NetworkGraph.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NetworkGraph: function() { return /* binding */ NetworkGraph; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ \"(app-pages-browser)/./node_modules/d3/src/index.js\");\n/* __next_internal_client_entry_do_not_use__ NetworkGraph auto */ \nvar _s = $RefreshSig$();\n\n\nfunction NetworkGraph(param) {\n    let { companyId, companyName, directors, shareholders } = param;\n    _s();\n    const svgRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    // Add width and height constants\n    const width = 800;\n    const height = 600;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!svgRef.current) return;\n        // Get actual container dimensions\n        const container = svgRef.current.parentElement;\n        if (!container) return;\n        const width = container.clientWidth;\n        const height = container.clientHeight;\n        // Clear previous graph\n        d3__WEBPACK_IMPORTED_MODULE_2__.select(svgRef.current).selectAll(\"*\").remove();\n        // Prepare data with deduplication\n        const uniqueNodes = new Map();\n        const links = [];\n        // Add company node\n        uniqueNodes.set(companyId, {\n            id: companyId,\n            name: companyName,\n            type: \"company\"\n        });\n        // Add directors with deduplication\n        directors.forEach((d)=>{\n            const id = d.id;\n            if (!uniqueNodes.has(id)) {\n                uniqueNodes.set(id, {\n                    id,\n                    name: d.name,\n                    type: \"director\"\n                });\n            }\n            // Add director link\n            links.push({\n                source: id,\n                target: companyId,\n                type: \"director\"\n            });\n        });\n        // Add shareholders with deduplication\n        shareholders.forEach((s)=>{\n            const id = s.id;\n            if (!uniqueNodes.has(id)) {\n                uniqueNodes.set(id, {\n                    id,\n                    name: s.name,\n                    type: \"shareholder\",\n                    value: s.percentage\n                });\n            }\n            // Add shareholder link\n            links.push({\n                source: id,\n                target: companyId,\n                type: \"shareholder\",\n                value: s.percentage\n            });\n        });\n        const nodes = Array.from(uniqueNodes.values());\n        // Set up the simulation\n        const simulation = d3__WEBPACK_IMPORTED_MODULE_2__.forceSimulation(nodes).force(\"link\", d3__WEBPACK_IMPORTED_MODULE_2__.forceLink(links).id((d)=>d.id)).force(\"charge\", d3__WEBPACK_IMPORTED_MODULE_2__.forceManyBody().strength(-1000)).force(\"center\", d3__WEBPACK_IMPORTED_MODULE_2__.forceCenter(width / 2, height / 2));\n        // Create SVG elements\n        const svg = d3__WEBPACK_IMPORTED_MODULE_2__.select(svgRef.current).attr(\"width\", width).attr(\"height\", height);\n        // Create links\n        const link = svg.append(\"g\").selectAll(\"line\").data(links).join(\"line\").attr(\"stroke\", (d)=>d.type === \"director\" ? \"#9333ea\" : \"#2563eb\").attr(\"stroke-width\", (d)=>d.value ? Math.sqrt(d.value) : 1).attr(\"stroke-opacity\", 0.6);\n        // Create nodes\n        const node = svg.append(\"g\").selectAll(\"g\").data(nodes).join(\"g\").call(d3__WEBPACK_IMPORTED_MODULE_2__.drag().on(\"start\", dragstarted).on(\"drag\", dragged).on(\"end\", dragended));\n        // Add circles to nodes\n        node.append(\"circle\").attr(\"r\", (d)=>d.type === \"company\" ? 20 : 10).attr(\"fill\", (d)=>{\n            switch(d.type){\n                case \"company\":\n                    return \"#ef4444\";\n                case \"director\":\n                    return \"#9333ea\";\n                case \"shareholder\":\n                    return \"#2563eb\";\n                default:\n                    return \"#gray\";\n            }\n        });\n        // Add labels to nodes\n        node.append(\"text\").attr(\"dx\", 15).attr(\"dy\", 5).text((d)=>d.name).attr(\"fill\", \"#1f2937\").attr(\"font-size\", \"12px\");\n        // Add titles for hover\n        node.append(\"title\").text((d)=>{\n            if (d.type === \"shareholder\" && d.value) {\n                return \"\".concat(d.name, \" (\").concat(d.value, \"%)\");\n            }\n            return d.name;\n        });\n        // Update positions on simulation tick\n        simulation.on(\"tick\", ()=>{\n            link.attr(\"x1\", (d)=>d.source.x).attr(\"y1\", (d)=>d.source.y).attr(\"x2\", (d)=>d.target.x).attr(\"y2\", (d)=>d.target.y);\n            node.attr(\"transform\", (d)=>\"translate(\".concat(d.x, \",\").concat(d.y, \")\"));\n        });\n        // Drag functions\n        function dragstarted(event) {\n            if (!event.active) simulation.alphaTarget(0.3).restart();\n            event.subject.fx = event.subject.x;\n            event.subject.fy = event.subject.y;\n        }\n        function dragged(event) {\n            event.subject.fx = event.x;\n            event.subject.fy = event.y;\n        }\n        function dragended(event) {\n            if (!event.active) simulation.alphaTarget(0);\n            event.subject.fx = null;\n            event.subject.fy = null;\n        }\n        // Cleanup\n        return ()=>{\n            simulation.stop();\n        };\n    }, [\n        companyId,\n        companyName,\n        directors,\n        shareholders\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-[600px] bg-white rounded-lg shadow\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n            ref: svgRef,\n            className: \"w-full h-full\"\n        }, void 0, false, {\n            fileName: \"/Users/elisha/usekampuni/src/components/network/NetworkGraph.tsx\",\n            lineNumber: 196,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/elisha/usekampuni/src/components/network/NetworkGraph.tsx\",\n        lineNumber: 195,\n        columnNumber: 5\n    }, this);\n}\n_s(NetworkGraph, \"89Ty783ABEwsfMbSOeu9vscWF34=\");\n_c = NetworkGraph;\nvar _c;\n$RefreshReg$(_c, \"NetworkGraph\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL25ldHdvcmsvTmV0d29ya0dyYXBoLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRTBDO0FBQ2pCO0FBd0JsQixTQUFTRyxhQUFhLEtBQXNFO1FBQXRFLEVBQUVDLFNBQVMsRUFBRUMsV0FBVyxFQUFFQyxTQUFTLEVBQUVDLFlBQVksRUFBcUIsR0FBdEU7O0lBQzNCLE1BQU1DLFNBQVNQLDZDQUFNQSxDQUFnQjtJQUVyQyxpQ0FBaUM7SUFDakMsTUFBTVEsUUFBUTtJQUNkLE1BQU1DLFNBQVM7SUFFZlYsZ0RBQVNBLENBQUM7UUFDUixJQUFJLENBQUNRLE9BQU9HLE9BQU8sRUFBRTtRQUVyQixrQ0FBa0M7UUFDbEMsTUFBTUMsWUFBWUosT0FBT0csT0FBTyxDQUFDRSxhQUFhO1FBQzlDLElBQUksQ0FBQ0QsV0FBVztRQUVoQixNQUFNSCxRQUFRRyxVQUFVRSxXQUFXO1FBQ25DLE1BQU1KLFNBQVNFLFVBQVVHLFlBQVk7UUFFckMsdUJBQXVCO1FBQ3ZCYixzQ0FBUyxDQUFDTSxPQUFPRyxPQUFPLEVBQUVNLFNBQVMsQ0FBQyxLQUFLQyxNQUFNO1FBRS9DLGtDQUFrQztRQUNsQyxNQUFNQyxjQUFjLElBQUlDO1FBQ3hCLE1BQU1DLFFBQWdCLEVBQUU7UUFFeEIsbUJBQW1CO1FBQ25CRixZQUFZRyxHQUFHLENBQUNsQixXQUFXO1lBQ3pCbUIsSUFBSW5CO1lBQ0pvQixNQUFNbkI7WUFDTm9CLE1BQU07UUFDUjtRQUVBLG1DQUFtQztRQUNuQ25CLFVBQVVvQixPQUFPLENBQUNDLENBQUFBO1lBQ2hCLE1BQU1KLEtBQUtJLEVBQUVKLEVBQUU7WUFDZixJQUFJLENBQUNKLFlBQVlTLEdBQUcsQ0FBQ0wsS0FBSztnQkFDeEJKLFlBQVlHLEdBQUcsQ0FBQ0MsSUFBSTtvQkFDbEJBO29CQUNBQyxNQUFNRyxFQUFFSCxJQUFJO29CQUNaQyxNQUFNO2dCQUNSO1lBQ0Y7WUFDQSxvQkFBb0I7WUFDcEJKLE1BQU1RLElBQUksQ0FBQztnQkFDVEMsUUFBUVA7Z0JBQ1JRLFFBQVEzQjtnQkFDUnFCLE1BQU07WUFDUjtRQUNGO1FBRUEsc0NBQXNDO1FBQ3RDbEIsYUFBYW1CLE9BQU8sQ0FBQ00sQ0FBQUE7WUFDbkIsTUFBTVQsS0FBS1MsRUFBRVQsRUFBRTtZQUNmLElBQUksQ0FBQ0osWUFBWVMsR0FBRyxDQUFDTCxLQUFLO2dCQUN4QkosWUFBWUcsR0FBRyxDQUFDQyxJQUFJO29CQUNsQkE7b0JBQ0FDLE1BQU1RLEVBQUVSLElBQUk7b0JBQ1pDLE1BQU07b0JBQ05RLE9BQU9ELEVBQUVFLFVBQVU7Z0JBQ3JCO1lBQ0Y7WUFDQSx1QkFBdUI7WUFDdkJiLE1BQU1RLElBQUksQ0FBQztnQkFDVEMsUUFBUVA7Z0JBQ1JRLFFBQVEzQjtnQkFDUnFCLE1BQU07Z0JBQ05RLE9BQU9ELEVBQUVFLFVBQVU7WUFDckI7UUFDRjtRQUVBLE1BQU1DLFFBQVFDLE1BQU1DLElBQUksQ0FBQ2xCLFlBQVltQixNQUFNO1FBRTNDLHdCQUF3QjtRQUN4QixNQUFNQyxhQUFhckMsK0NBQWtCLENBQUNpQyxPQUNuQ00sS0FBSyxDQUFDLFFBQVF2Qyx5Q0FBWSxDQUFDbUIsT0FBT0UsRUFBRSxDQUFDLENBQUNJLElBQVdBLEVBQUVKLEVBQUUsR0FDckRrQixLQUFLLENBQUMsVUFBVXZDLDZDQUFnQixHQUFHMEMsUUFBUSxDQUFDLENBQUMsT0FDN0NILEtBQUssQ0FBQyxVQUFVdkMsMkNBQWMsQ0FBQ08sUUFBUSxHQUFHQyxTQUFTO1FBRXRELHNCQUFzQjtRQUN0QixNQUFNb0MsTUFBTTVDLHNDQUFTLENBQUNNLE9BQU9HLE9BQU8sRUFDakNvQyxJQUFJLENBQUMsU0FBU3RDLE9BQ2RzQyxJQUFJLENBQUMsVUFBVXJDO1FBRWxCLGVBQWU7UUFDZixNQUFNc0MsT0FBT0YsSUFBSUcsTUFBTSxDQUFDLEtBQ3JCaEMsU0FBUyxDQUFDLFFBQ1ZpQyxJQUFJLENBQUM3QixPQUNMOEIsSUFBSSxDQUFDLFFBQ0xKLElBQUksQ0FBQyxVQUFVcEIsQ0FBQUEsSUFBS0EsRUFBRUYsSUFBSSxLQUFLLGFBQWEsWUFBWSxXQUN4RHNCLElBQUksQ0FBQyxnQkFBZ0JwQixDQUFBQSxJQUFLQSxFQUFFTSxLQUFLLEdBQUdtQixLQUFLQyxJQUFJLENBQUMxQixFQUFFTSxLQUFLLElBQUksR0FDekRjLElBQUksQ0FBQyxrQkFBa0I7UUFFMUIsZUFBZTtRQUNmLE1BQU1PLE9BQU9SLElBQUlHLE1BQU0sQ0FBQyxLQUNyQmhDLFNBQVMsQ0FBQyxLQUNWaUMsSUFBSSxDQUFDZixPQUNMZ0IsSUFBSSxDQUFDLEtBQ0xJLElBQUksQ0FBQ3JELG9DQUFPLEdBQ1Z1RCxFQUFFLENBQUMsU0FBU0MsYUFDWkQsRUFBRSxDQUFDLFFBQVFFLFNBQ1hGLEVBQUUsQ0FBQyxPQUFPRztRQUVmLHVCQUF1QjtRQUN2Qk4sS0FBS0wsTUFBTSxDQUFDLFVBQ1RGLElBQUksQ0FBQyxLQUFLcEIsQ0FBQUEsSUFBS0EsRUFBRUYsSUFBSSxLQUFLLFlBQVksS0FBSyxJQUMzQ3NCLElBQUksQ0FBQyxRQUFRcEIsQ0FBQUE7WUFDWixPQUFRQSxFQUFFRixJQUFJO2dCQUNaLEtBQUs7b0JBQVcsT0FBTztnQkFDdkIsS0FBSztvQkFBWSxPQUFPO2dCQUN4QixLQUFLO29CQUFlLE9BQU87Z0JBQzNCO29CQUFTLE9BQU87WUFDbEI7UUFDRjtRQUVGLHNCQUFzQjtRQUN0QjZCLEtBQUtMLE1BQU0sQ0FBQyxRQUNURixJQUFJLENBQUMsTUFBTSxJQUNYQSxJQUFJLENBQUMsTUFBTSxHQUNYYyxJQUFJLENBQUNsQyxDQUFBQSxJQUFLQSxFQUFFSCxJQUFJLEVBQ2hCdUIsSUFBSSxDQUFDLFFBQVEsV0FDYkEsSUFBSSxDQUFDLGFBQWE7UUFFckIsdUJBQXVCO1FBQ3ZCTyxLQUFLTCxNQUFNLENBQUMsU0FDVFksSUFBSSxDQUFDbEMsQ0FBQUE7WUFDSixJQUFJQSxFQUFFRixJQUFJLEtBQUssaUJBQWlCRSxFQUFFTSxLQUFLLEVBQUU7Z0JBQ3ZDLE9BQU8sR0FBY04sT0FBWEEsRUFBRUgsSUFBSSxFQUFDLE1BQVksT0FBUkcsRUFBRU0sS0FBSyxFQUFDO1lBQy9CO1lBQ0EsT0FBT04sRUFBRUgsSUFBSTtRQUNmO1FBRUYsc0NBQXNDO1FBQ3RDZSxXQUFXa0IsRUFBRSxDQUFDLFFBQVE7WUFDcEJULEtBQ0dELElBQUksQ0FBQyxNQUFNcEIsQ0FBQUEsSUFBSyxFQUFHRyxNQUFNLENBQVNnQyxDQUFDLEVBQ25DZixJQUFJLENBQUMsTUFBTXBCLENBQUFBLElBQUssRUFBR0csTUFBTSxDQUFTaUMsQ0FBQyxFQUNuQ2hCLElBQUksQ0FBQyxNQUFNcEIsQ0FBQUEsSUFBSyxFQUFHSSxNQUFNLENBQVMrQixDQUFDLEVBQ25DZixJQUFJLENBQUMsTUFBTXBCLENBQUFBLElBQUssRUFBR0ksTUFBTSxDQUFTZ0MsQ0FBQztZQUV0Q1QsS0FDR1AsSUFBSSxDQUFDLGFBQWFwQixDQUFBQSxJQUFLLGFBQTZCLE9BQWhCLEVBQVdtQyxDQUFDLEVBQUMsS0FBZ0IsT0FBYixFQUFXQyxDQUFDLEVBQUM7UUFDdEU7UUFFQSxpQkFBaUI7UUFDakIsU0FBU0wsWUFBWU0sS0FBVTtZQUM3QixJQUFJLENBQUNBLE1BQU1DLE1BQU0sRUFBRTFCLFdBQVcyQixXQUFXLENBQUMsS0FBS0MsT0FBTztZQUN0REgsTUFBTUksT0FBTyxDQUFDQyxFQUFFLEdBQUdMLE1BQU1JLE9BQU8sQ0FBQ04sQ0FBQztZQUNsQ0UsTUFBTUksT0FBTyxDQUFDRSxFQUFFLEdBQUdOLE1BQU1JLE9BQU8sQ0FBQ0wsQ0FBQztRQUNwQztRQUVBLFNBQVNKLFFBQVFLLEtBQVU7WUFDekJBLE1BQU1JLE9BQU8sQ0FBQ0MsRUFBRSxHQUFHTCxNQUFNRixDQUFDO1lBQzFCRSxNQUFNSSxPQUFPLENBQUNFLEVBQUUsR0FBR04sTUFBTUQsQ0FBQztRQUM1QjtRQUVBLFNBQVNILFVBQVVJLEtBQVU7WUFDM0IsSUFBSSxDQUFDQSxNQUFNQyxNQUFNLEVBQUUxQixXQUFXMkIsV0FBVyxDQUFDO1lBQzFDRixNQUFNSSxPQUFPLENBQUNDLEVBQUUsR0FBRztZQUNuQkwsTUFBTUksT0FBTyxDQUFDRSxFQUFFLEdBQUc7UUFDckI7UUFFQSxVQUFVO1FBQ1YsT0FBTztZQUNML0IsV0FBV2dDLElBQUk7UUFDakI7SUFDRixHQUFHO1FBQUNuRTtRQUFXQztRQUFhQztRQUFXQztLQUFhO0lBRXBELHFCQUNFLDhEQUFDaUU7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQzNCO1lBQUk0QixLQUFLbEU7WUFBUWlFLFdBQVU7Ozs7Ozs7Ozs7O0FBR2xDO0dBM0tnQnRFO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL25ldHdvcmsvTmV0d29ya0dyYXBoLnRzeD83NTBhIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMyc7XG5pbXBvcnQgdHlwZSB7IERpcmVjdG9yLCBTaGFyZWhvbGRlciB9IGZyb20gJ0AvdHlwZXMnO1xuXG5pbnRlcmZhY2UgTmV0d29ya0dyYXBoUHJvcHMge1xuICBjb21wYW55SWQ6IHN0cmluZztcbiAgY29tcGFueU5hbWU6IHN0cmluZztcbiAgZGlyZWN0b3JzOiBEaXJlY3RvcltdO1xuICBzaGFyZWhvbGRlcnM6IFNoYXJlaG9sZGVyW107XG59XG5cbmludGVyZmFjZSBOb2RlIHtcbiAgaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICB0eXBlOiAnY29tcGFueScgfCAnZGlyZWN0b3InIHwgJ3NoYXJlaG9sZGVyJztcbiAgdmFsdWU/OiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBMaW5rIHtcbiAgc291cmNlOiBzdHJpbmc7XG4gIHRhcmdldDogc3RyaW5nO1xuICB0eXBlOiAnZGlyZWN0b3InIHwgJ3NoYXJlaG9sZGVyJztcbiAgdmFsdWU/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBOZXR3b3JrR3JhcGgoeyBjb21wYW55SWQsIGNvbXBhbnlOYW1lLCBkaXJlY3RvcnMsIHNoYXJlaG9sZGVycyB9OiBOZXR3b3JrR3JhcGhQcm9wcykge1xuICBjb25zdCBzdmdSZWYgPSB1c2VSZWY8U1ZHU1ZHRWxlbWVudD4obnVsbCk7XG5cbiAgLy8gQWRkIHdpZHRoIGFuZCBoZWlnaHQgY29uc3RhbnRzXG4gIGNvbnN0IHdpZHRoID0gODAwO1xuICBjb25zdCBoZWlnaHQgPSA2MDA7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXN2Z1JlZi5jdXJyZW50KSByZXR1cm47XG5cbiAgICAvLyBHZXQgYWN0dWFsIGNvbnRhaW5lciBkaW1lbnNpb25zXG4gICAgY29uc3QgY29udGFpbmVyID0gc3ZnUmVmLmN1cnJlbnQucGFyZW50RWxlbWVudDtcbiAgICBpZiAoIWNvbnRhaW5lcikgcmV0dXJuO1xuICAgIFxuICAgIGNvbnN0IHdpZHRoID0gY29udGFpbmVyLmNsaWVudFdpZHRoO1xuICAgIGNvbnN0IGhlaWdodCA9IGNvbnRhaW5lci5jbGllbnRIZWlnaHQ7XG5cbiAgICAvLyBDbGVhciBwcmV2aW91cyBncmFwaFxuICAgIGQzLnNlbGVjdChzdmdSZWYuY3VycmVudCkuc2VsZWN0QWxsKFwiKlwiKS5yZW1vdmUoKTtcblxuICAgIC8vIFByZXBhcmUgZGF0YSB3aXRoIGRlZHVwbGljYXRpb25cbiAgICBjb25zdCB1bmlxdWVOb2RlcyA9IG5ldyBNYXA8c3RyaW5nLCBOb2RlPigpO1xuICAgIGNvbnN0IGxpbmtzOiBMaW5rW10gPSBbXTtcblxuICAgIC8vIEFkZCBjb21wYW55IG5vZGVcbiAgICB1bmlxdWVOb2Rlcy5zZXQoY29tcGFueUlkLCB7XG4gICAgICBpZDogY29tcGFueUlkLFxuICAgICAgbmFtZTogY29tcGFueU5hbWUsXG4gICAgICB0eXBlOiAnY29tcGFueSdcbiAgICB9KTtcblxuICAgIC8vIEFkZCBkaXJlY3RvcnMgd2l0aCBkZWR1cGxpY2F0aW9uXG4gICAgZGlyZWN0b3JzLmZvckVhY2goZCA9PiB7XG4gICAgICBjb25zdCBpZCA9IGQuaWQ7XG4gICAgICBpZiAoIXVuaXF1ZU5vZGVzLmhhcyhpZCkpIHtcbiAgICAgICAgdW5pcXVlTm9kZXMuc2V0KGlkLCB7XG4gICAgICAgICAgaWQsXG4gICAgICAgICAgbmFtZTogZC5uYW1lLFxuICAgICAgICAgIHR5cGU6ICdkaXJlY3RvcidcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICAvLyBBZGQgZGlyZWN0b3IgbGlua1xuICAgICAgbGlua3MucHVzaCh7XG4gICAgICAgIHNvdXJjZTogaWQsXG4gICAgICAgIHRhcmdldDogY29tcGFueUlkLFxuICAgICAgICB0eXBlOiAnZGlyZWN0b3InXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIEFkZCBzaGFyZWhvbGRlcnMgd2l0aCBkZWR1cGxpY2F0aW9uXG4gICAgc2hhcmVob2xkZXJzLmZvckVhY2gocyA9PiB7XG4gICAgICBjb25zdCBpZCA9IHMuaWQ7XG4gICAgICBpZiAoIXVuaXF1ZU5vZGVzLmhhcyhpZCkpIHtcbiAgICAgICAgdW5pcXVlTm9kZXMuc2V0KGlkLCB7XG4gICAgICAgICAgaWQsXG4gICAgICAgICAgbmFtZTogcy5uYW1lLFxuICAgICAgICAgIHR5cGU6ICdzaGFyZWhvbGRlcicsXG4gICAgICAgICAgdmFsdWU6IHMucGVyY2VudGFnZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIC8vIEFkZCBzaGFyZWhvbGRlciBsaW5rXG4gICAgICBsaW5rcy5wdXNoKHtcbiAgICAgICAgc291cmNlOiBpZCxcbiAgICAgICAgdGFyZ2V0OiBjb21wYW55SWQsXG4gICAgICAgIHR5cGU6ICdzaGFyZWhvbGRlcicsXG4gICAgICAgIHZhbHVlOiBzLnBlcmNlbnRhZ2VcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3Qgbm9kZXMgPSBBcnJheS5mcm9tKHVuaXF1ZU5vZGVzLnZhbHVlcygpKTtcblxuICAgIC8vIFNldCB1cCB0aGUgc2ltdWxhdGlvblxuICAgIGNvbnN0IHNpbXVsYXRpb24gPSBkMy5mb3JjZVNpbXVsYXRpb24obm9kZXMpXG4gICAgICAuZm9yY2UoJ2xpbmsnLCBkMy5mb3JjZUxpbmsobGlua3MpLmlkKChkOiBhbnkpID0+IGQuaWQpKVxuICAgICAgLmZvcmNlKCdjaGFyZ2UnLCBkMy5mb3JjZU1hbnlCb2R5KCkuc3RyZW5ndGgoLTEwMDApKVxuICAgICAgLmZvcmNlKCdjZW50ZXInLCBkMy5mb3JjZUNlbnRlcih3aWR0aCAvIDIsIGhlaWdodCAvIDIpKTtcblxuICAgIC8vIENyZWF0ZSBTVkcgZWxlbWVudHNcbiAgICBjb25zdCBzdmcgPSBkMy5zZWxlY3Qoc3ZnUmVmLmN1cnJlbnQpXG4gICAgICAuYXR0cignd2lkdGgnLCB3aWR0aClcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQpO1xuXG4gICAgLy8gQ3JlYXRlIGxpbmtzXG4gICAgY29uc3QgbGluayA9IHN2Zy5hcHBlbmQoJ2cnKVxuICAgICAgLnNlbGVjdEFsbCgnbGluZScpXG4gICAgICAuZGF0YShsaW5rcylcbiAgICAgIC5qb2luKCdsaW5lJylcbiAgICAgIC5hdHRyKCdzdHJva2UnLCBkID0+IGQudHlwZSA9PT0gJ2RpcmVjdG9yJyA/ICcjOTMzM2VhJyA6ICcjMjU2M2ViJylcbiAgICAgIC5hdHRyKCdzdHJva2Utd2lkdGgnLCBkID0+IGQudmFsdWUgPyBNYXRoLnNxcnQoZC52YWx1ZSkgOiAxKVxuICAgICAgLmF0dHIoJ3N0cm9rZS1vcGFjaXR5JywgMC42KTtcblxuICAgIC8vIENyZWF0ZSBub2Rlc1xuICAgIGNvbnN0IG5vZGUgPSBzdmcuYXBwZW5kKCdnJylcbiAgICAgIC5zZWxlY3RBbGwoJ2cnKVxuICAgICAgLmRhdGEobm9kZXMpXG4gICAgICAuam9pbignZycpXG4gICAgICAuY2FsbChkMy5kcmFnPGFueSwgYW55PigpXG4gICAgICAgIC5vbignc3RhcnQnLCBkcmFnc3RhcnRlZClcbiAgICAgICAgLm9uKCdkcmFnJywgZHJhZ2dlZClcbiAgICAgICAgLm9uKCdlbmQnLCBkcmFnZW5kZWQpKTtcblxuICAgIC8vIEFkZCBjaXJjbGVzIHRvIG5vZGVzXG4gICAgbm9kZS5hcHBlbmQoJ2NpcmNsZScpXG4gICAgICAuYXR0cigncicsIGQgPT4gZC50eXBlID09PSAnY29tcGFueScgPyAyMCA6IDEwKVxuICAgICAgLmF0dHIoJ2ZpbGwnLCBkID0+IHtcbiAgICAgICAgc3dpdGNoIChkLnR5cGUpIHtcbiAgICAgICAgICBjYXNlICdjb21wYW55JzogcmV0dXJuICcjZWY0NDQ0JztcbiAgICAgICAgICBjYXNlICdkaXJlY3Rvcic6IHJldHVybiAnIzkzMzNlYSc7XG4gICAgICAgICAgY2FzZSAnc2hhcmVob2xkZXInOiByZXR1cm4gJyMyNTYzZWInO1xuICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiAnI2dyYXknO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgIC8vIEFkZCBsYWJlbHMgdG8gbm9kZXNcbiAgICBub2RlLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignZHgnLCAxNSlcbiAgICAgIC5hdHRyKCdkeScsIDUpXG4gICAgICAudGV4dChkID0+IGQubmFtZSlcbiAgICAgIC5hdHRyKCdmaWxsJywgJyMxZjI5MzcnKVxuICAgICAgLmF0dHIoJ2ZvbnQtc2l6ZScsICcxMnB4Jyk7XG5cbiAgICAvLyBBZGQgdGl0bGVzIGZvciBob3ZlclxuICAgIG5vZGUuYXBwZW5kKCd0aXRsZScpXG4gICAgICAudGV4dChkID0+IHtcbiAgICAgICAgaWYgKGQudHlwZSA9PT0gJ3NoYXJlaG9sZGVyJyAmJiBkLnZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIGAke2QubmFtZX0gKCR7ZC52YWx1ZX0lKWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGQubmFtZTtcbiAgICAgIH0pO1xuXG4gICAgLy8gVXBkYXRlIHBvc2l0aW9ucyBvbiBzaW11bGF0aW9uIHRpY2tcbiAgICBzaW11bGF0aW9uLm9uKCd0aWNrJywgKCkgPT4ge1xuICAgICAgbGlua1xuICAgICAgICAuYXR0cigneDEnLCBkID0+IChkLnNvdXJjZSBhcyBhbnkpLngpXG4gICAgICAgIC5hdHRyKCd5MScsIGQgPT4gKGQuc291cmNlIGFzIGFueSkueSlcbiAgICAgICAgLmF0dHIoJ3gyJywgZCA9PiAoZC50YXJnZXQgYXMgYW55KS54KVxuICAgICAgICAuYXR0cigneTInLCBkID0+IChkLnRhcmdldCBhcyBhbnkpLnkpO1xuXG4gICAgICBub2RlXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBkID0+IGB0cmFuc2xhdGUoJHsoZCBhcyBhbnkpLnh9LCR7KGQgYXMgYW55KS55fSlgKTtcbiAgICB9KTtcblxuICAgIC8vIERyYWcgZnVuY3Rpb25zXG4gICAgZnVuY3Rpb24gZHJhZ3N0YXJ0ZWQoZXZlbnQ6IGFueSkge1xuICAgICAgaWYgKCFldmVudC5hY3RpdmUpIHNpbXVsYXRpb24uYWxwaGFUYXJnZXQoMC4zKS5yZXN0YXJ0KCk7XG4gICAgICBldmVudC5zdWJqZWN0LmZ4ID0gZXZlbnQuc3ViamVjdC54O1xuICAgICAgZXZlbnQuc3ViamVjdC5meSA9IGV2ZW50LnN1YmplY3QueTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnZ2VkKGV2ZW50OiBhbnkpIHtcbiAgICAgIGV2ZW50LnN1YmplY3QuZnggPSBldmVudC54O1xuICAgICAgZXZlbnQuc3ViamVjdC5meSA9IGV2ZW50Lnk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ2VuZGVkKGV2ZW50OiBhbnkpIHtcbiAgICAgIGlmICghZXZlbnQuYWN0aXZlKSBzaW11bGF0aW9uLmFscGhhVGFyZ2V0KDApO1xuICAgICAgZXZlbnQuc3ViamVjdC5meCA9IG51bGw7XG4gICAgICBldmVudC5zdWJqZWN0LmZ5ID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBDbGVhbnVwXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHNpbXVsYXRpb24uc3RvcCgpO1xuICAgIH07XG4gIH0sIFtjb21wYW55SWQsIGNvbXBhbnlOYW1lLCBkaXJlY3RvcnMsIHNoYXJlaG9sZGVyc10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1bNjAwcHhdIGJnLXdoaXRlIHJvdW5kZWQtbGcgc2hhZG93XCI+XG4gICAgICA8c3ZnIHJlZj17c3ZnUmVmfSBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsXCIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwiZDMiLCJOZXR3b3JrR3JhcGgiLCJjb21wYW55SWQiLCJjb21wYW55TmFtZSIsImRpcmVjdG9ycyIsInNoYXJlaG9sZGVycyIsInN2Z1JlZiIsIndpZHRoIiwiaGVpZ2h0IiwiY3VycmVudCIsImNvbnRhaW5lciIsInBhcmVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsInNlbGVjdCIsInNlbGVjdEFsbCIsInJlbW92ZSIsInVuaXF1ZU5vZGVzIiwiTWFwIiwibGlua3MiLCJzZXQiLCJpZCIsIm5hbWUiLCJ0eXBlIiwiZm9yRWFjaCIsImQiLCJoYXMiLCJwdXNoIiwic291cmNlIiwidGFyZ2V0IiwicyIsInZhbHVlIiwicGVyY2VudGFnZSIsIm5vZGVzIiwiQXJyYXkiLCJmcm9tIiwidmFsdWVzIiwic2ltdWxhdGlvbiIsImZvcmNlU2ltdWxhdGlvbiIsImZvcmNlIiwiZm9yY2VMaW5rIiwiZm9yY2VNYW55Qm9keSIsInN0cmVuZ3RoIiwiZm9yY2VDZW50ZXIiLCJzdmciLCJhdHRyIiwibGluayIsImFwcGVuZCIsImRhdGEiLCJqb2luIiwiTWF0aCIsInNxcnQiLCJub2RlIiwiY2FsbCIsImRyYWciLCJvbiIsImRyYWdzdGFydGVkIiwiZHJhZ2dlZCIsImRyYWdlbmRlZCIsInRleHQiLCJ4IiwieSIsImV2ZW50IiwiYWN0aXZlIiwiYWxwaGFUYXJnZXQiLCJyZXN0YXJ0Iiwic3ViamVjdCIsImZ4IiwiZnkiLCJzdG9wIiwiZGl2IiwiY2xhc3NOYW1lIiwicmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/network/NetworkGraph.tsx\n"));

/***/ })

});