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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NetworkGraph: function() { return /* binding */ NetworkGraph; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ \"(app-pages-browser)/./node_modules/d3/src/index.js\");\n/* __next_internal_client_entry_do_not_use__ NetworkGraph auto */ \nvar _s = $RefreshSig$();\n\n\nfunction NetworkGraph(param) {\n    let { companyId, companyName, directors, shareholders } = param;\n    _s();\n    const svgRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const width = 1000;\n    const height = 400;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!svgRef.current) return;\n        d3__WEBPACK_IMPORTED_MODULE_2__.select(svgRef.current).selectAll(\"*\").remove();\n        // Prepare data with deduplication\n        const uniqueNodes = new Map();\n        const links = [];\n        // Add company node\n        uniqueNodes.set(companyId, {\n            id: companyId,\n            name: companyName,\n            type: \"company\"\n        });\n        // Add directors and their links\n        directors.forEach((d)=>{\n            const id = d.id;\n            uniqueNodes.set(id, {\n                id,\n                name: d.name,\n                type: \"director\"\n            });\n            links.push({\n                source: id,\n                target: companyId,\n                type: \"director\"\n            });\n        });\n        // Add shareholders and their links\n        shareholders.forEach((s)=>{\n            const id = s.id;\n            uniqueNodes.set(id, {\n                id,\n                name: s.name,\n                type: \"shareholder\",\n                value: s.percentage\n            });\n            links.push({\n                source: id,\n                target: companyId,\n                type: \"shareholder\",\n                value: s.percentage\n            });\n        });\n        const nodes = Array.from(uniqueNodes.values());\n        // Adjust force simulation for better positioning\n        const simulation = d3__WEBPACK_IMPORTED_MODULE_2__.forceSimulation(nodes).force(\"link\", d3__WEBPACK_IMPORTED_MODULE_2__.forceLink(links).id((d)=>d.id).distance(200)).force(\"charge\", d3__WEBPACK_IMPORTED_MODULE_2__.forceManyBody().strength(-2000)).force(\"collide\", d3__WEBPACK_IMPORTED_MODULE_2__.forceCollide().radius((d)=>d.type === \"company\" ? 80 : 60)).force(\"center\", d3__WEBPACK_IMPORTED_MODULE_2__.forceCenter(width / 2, height / 2)).force(\"y\", d3__WEBPACK_IMPORTED_MODULE_2__.forceY(height / 2).strength(0.1)).force(\"x\", d3__WEBPACK_IMPORTED_MODULE_2__.forceX(width / 2).strength(0.1));\n        const svg = d3__WEBPACK_IMPORTED_MODULE_2__.select(svgRef.current).attr(\"width\", width).attr(\"height\", height);\n        // Create links with proper styling\n        const link = svg.append(\"g\").selectAll(\"line\").data(links).join(\"line\").attr(\"stroke\", (d)=>d.type === \"director\" ? \"#9333ea\" : \"#2563eb\").attr(\"stroke-width\", 2).attr(\"stroke-opacity\", 0.6);\n        // Create nodes with improved visibility\n        const node = svg.append(\"g\").selectAll(\"g\").data(nodes).join(\"g\").call(d3__WEBPACK_IMPORTED_MODULE_2__.drag().on(\"start\", dragstarted).on(\"drag\", dragged).on(\"end\", dragended));\n        // Add larger circles for nodes\n        node.append(\"circle\").attr(\"r\", (d)=>d.type === \"company\" ? 30 : 20).attr(\"fill\", (d)=>{\n            switch(d.type){\n                case \"company\":\n                    return \"#ef4444\";\n                case \"director\":\n                    return \"#9333ea\";\n                case \"shareholder\":\n                    return \"#2563eb\";\n                default:\n                    return \"#gray\";\n            }\n        }).attr(\"stroke\", \"#ffffff\").attr(\"stroke-width\", 2);\n        // Add labels with better positioning and visibility\n        node.append(\"text\").attr(\"dx\", (d)=>d.type === \"company\" ? 40 : 25).attr(\"dy\", 5).text((d)=>d.name).attr(\"fill\", \"#1f2937\").attr(\"font-size\", \"14px\").attr(\"font-weight\", (d)=>d.type === \"company\" ? \"bold\" : \"normal\");\n        // Add legend with better positioning\n        const legend = svg.append(\"g\").attr(\"class\", \"legend\").attr(\"transform\", \"translate(20, 20)\");\n        const legendData = [\n            {\n                type: \"company\",\n                color: \"#ef4444\",\n                label: \"Company\"\n            },\n            {\n                type: \"director\",\n                color: \"#9333ea\",\n                label: \"Director\"\n            },\n            {\n                type: \"shareholder\",\n                color: \"#2563eb\",\n                label: \"Shareholder\"\n            }\n        ];\n        const legendItems = legend.selectAll(\".legend-item\").data(legendData).enter().append(\"g\").attr(\"class\", \"legend-item\").attr(\"transform\", (d, i)=>\"translate(0, \".concat(i * 25, \")\"));\n        // Add colored circles to legend\n        legendItems.append(\"circle\").attr(\"r\", 6).attr(\"fill\", (d)=>d.color);\n        // Add text labels to legend\n        legendItems.append(\"text\").attr(\"x\", 15).attr(\"y\", 5).text((d)=>d.label).attr(\"font-size\", \"14px\").attr(\"fill\", \"#4b5563\");\n        simulation.on(\"tick\", ()=>{\n            link.attr(\"x1\", (d)=>d.source.x).attr(\"y1\", (d)=>d.source.y).attr(\"x2\", (d)=>d.target.x).attr(\"y2\", (d)=>d.target.y);\n            node.attr(\"transform\", (d)=>\"translate(\".concat(d.x, \",\").concat(d.y, \")\"));\n        });\n        function dragstarted(event) {\n            if (!event.active) simulation.alphaTarget(0.3).restart();\n            event.subject.fx = event.subject.x;\n            event.subject.fy = event.subject.y;\n        }\n        function dragged(event) {\n            event.subject.fx = event.x;\n            event.subject.fy = event.y;\n        }\n        function dragended(event) {\n            if (!event.active) simulation.alphaTarget(0);\n            event.subject.fx = null;\n            event.subject.fy = null;\n        }\n    }, [\n        companyId,\n        companyName,\n        directors,\n        shareholders\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-[400px] bg-white rounded-lg shadow p-4 mb-8\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n            ref: svgRef,\n            className: \"w-full h-full\"\n        }, void 0, false, {\n            fileName: \"/Users/elisha/usekampuni/src/components/network/NetworkGraph.tsx\",\n            lineNumber: 205,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/elisha/usekampuni/src/components/network/NetworkGraph.tsx\",\n        lineNumber: 204,\n        columnNumber: 5\n    }, this);\n}\n_s(NetworkGraph, \"89Ty783ABEwsfMbSOeu9vscWF34=\");\n_c = NetworkGraph;\nvar _c;\n$RefreshReg$(_c, \"NetworkGraph\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL25ldHdvcmsvTmV0d29ya0dyYXBoLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRTBDO0FBQ2pCO0FBd0JsQixTQUFTRyxhQUFhLEtBQXNFO1FBQXRFLEVBQUVDLFNBQVMsRUFBRUMsV0FBVyxFQUFFQyxTQUFTLEVBQUVDLFlBQVksRUFBcUIsR0FBdEU7O0lBQzNCLE1BQU1DLFNBQVNQLDZDQUFNQSxDQUFnQjtJQUVyQyxNQUFNUSxRQUFRO0lBQ2QsTUFBTUMsU0FBUztJQUVmVixnREFBU0EsQ0FBQztRQUNSLElBQUksQ0FBQ1EsT0FBT0csT0FBTyxFQUFFO1FBRXJCVCxzQ0FBUyxDQUFDTSxPQUFPRyxPQUFPLEVBQUVFLFNBQVMsQ0FBQyxLQUFLQyxNQUFNO1FBRS9DLGtDQUFrQztRQUNsQyxNQUFNQyxjQUFjLElBQUlDO1FBQ3hCLE1BQU1DLFFBQWdCLEVBQUU7UUFFeEIsbUJBQW1CO1FBQ25CRixZQUFZRyxHQUFHLENBQUNkLFdBQVc7WUFDekJlLElBQUlmO1lBQ0pnQixNQUFNZjtZQUNOZ0IsTUFBTTtRQUNSO1FBRUEsZ0NBQWdDO1FBQ2hDZixVQUFVZ0IsT0FBTyxDQUFDQyxDQUFBQTtZQUNoQixNQUFNSixLQUFLSSxFQUFFSixFQUFFO1lBQ2ZKLFlBQVlHLEdBQUcsQ0FBQ0MsSUFBSTtnQkFDbEJBO2dCQUNBQyxNQUFNRyxFQUFFSCxJQUFJO2dCQUNaQyxNQUFNO1lBQ1I7WUFDQUosTUFBTU8sSUFBSSxDQUFDO2dCQUNUQyxRQUFRTjtnQkFDUk8sUUFBUXRCO2dCQUNSaUIsTUFBTTtZQUNSO1FBQ0Y7UUFFQSxtQ0FBbUM7UUFDbkNkLGFBQWFlLE9BQU8sQ0FBQ0ssQ0FBQUE7WUFDbkIsTUFBTVIsS0FBS1EsRUFBRVIsRUFBRTtZQUNmSixZQUFZRyxHQUFHLENBQUNDLElBQUk7Z0JBQ2xCQTtnQkFDQUMsTUFBTU8sRUFBRVAsSUFBSTtnQkFDWkMsTUFBTTtnQkFDTk8sT0FBT0QsRUFB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S0FBTyxPQUFKNUMsRUFBRTZDLENBQUMsRUFBQztRQUNwRDtRQUVBLFNBQVNaLFlBQVlhLEtBQVU7WUFDN0IsSUFBSSxDQUFDQSxNQUFNQyxNQUFNLEVBQUVwQyxXQUFXcUMsV0FBVyxDQUFDLEtBQUtDLE9BQU87WUFDdERILE1BQU1JLE9BQU8sQ0FBQ0MsRUFBRSxHQUFHTCxNQUFNSSxPQUFPLENBQUNOLENBQUM7WUFDbENFLE1BQU1JLE9BQU8sQ0FBQ0UsRUFBRSxHQUFHTixNQUFNSSxPQUFPLENBQUNMLENBQUM7UUFDcEM7UUFFQSxTQUFTWCxRQUFRWSxLQUFVO1lBQ3pCQSxNQUFNSSxPQUFPLENBQUNDLEVBQUUsR0FBR0wsTUFBTUYsQ0FBQztZQUMxQkUsTUFBTUksT0FBTyxDQUFDRSxFQUFFLEdBQUdOLE1BQU1ELENBQUM7UUFDNUI7UUFFQSxTQUFTVixVQUFVVyxLQUFVO1lBQzNCLElBQUksQ0FBQ0EsTUFBTUMsTUFBTSxFQUFFcEMsV0FBV3FDLFdBQVcsQ0FBQztZQUMxQ0YsTUFBTUksT0FBTyxDQUFDQyxFQUFFLEdBQUc7WUFDbkJMLE1BQU1JLE9BQU8sQ0FBQ0UsRUFBRSxHQUFHO1FBQ3JCO0lBQ0YsR0FBRztRQUFDdkU7UUFBV0M7UUFBYUM7UUFBV0M7S0FBYTtJQUVwRCxxQkFDRSw4REFBQ3FFO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUMvQjtZQUFJZ0MsS0FBS3RFO1lBQVFxRSxXQUFVOzs7Ozs7Ozs7OztBQUdsQztHQXBMZ0IxRTtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9uZXR3b3JrL05ldHdvcmtHcmFwaC50c3g/NzUwYSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xuaW1wb3J0IHR5cGUgeyBEaXJlY3RvciwgU2hhcmVob2xkZXIgfSBmcm9tICdAL3R5cGVzJztcblxuaW50ZXJmYWNlIE5ldHdvcmtHcmFwaFByb3BzIHtcbiAgY29tcGFueUlkOiBzdHJpbmc7XG4gIGNvbXBhbnlOYW1lOiBzdHJpbmc7XG4gIGRpcmVjdG9yczogRGlyZWN0b3JbXTtcbiAgc2hhcmVob2xkZXJzOiBTaGFyZWhvbGRlcltdO1xufVxuXG5pbnRlcmZhY2UgTm9kZSB7XG4gIGlkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgdHlwZTogJ2NvbXBhbnknIHwgJ2RpcmVjdG9yJyB8ICdzaGFyZWhvbGRlcic7XG4gIHZhbHVlPzogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgTGluayB7XG4gIHNvdXJjZTogc3RyaW5nO1xuICB0YXJnZXQ6IHN0cmluZztcbiAgdHlwZTogJ2RpcmVjdG9yJyB8ICdzaGFyZWhvbGRlcic7XG4gIHZhbHVlPzogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gTmV0d29ya0dyYXBoKHsgY29tcGFueUlkLCBjb21wYW55TmFtZSwgZGlyZWN0b3JzLCBzaGFyZWhvbGRlcnMgfTogTmV0d29ya0dyYXBoUHJvcHMpIHtcbiAgY29uc3Qgc3ZnUmVmID0gdXNlUmVmPFNWR1NWR0VsZW1lbnQ+KG51bGwpO1xuXG4gIGNvbnN0IHdpZHRoID0gMTAwMDtcbiAgY29uc3QgaGVpZ2h0ID0gNDAwO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFzdmdSZWYuY3VycmVudCkgcmV0dXJuO1xuXG4gICAgZDMuc2VsZWN0KHN2Z1JlZi5jdXJyZW50KS5zZWxlY3RBbGwoXCIqXCIpLnJlbW92ZSgpO1xuXG4gICAgLy8gUHJlcGFyZSBkYXRhIHdpdGggZGVkdXBsaWNhdGlvblxuICAgIGNvbnN0IHVuaXF1ZU5vZGVzID0gbmV3IE1hcDxzdHJpbmcsIE5vZGU+KCk7XG4gICAgY29uc3QgbGlua3M6IExpbmtbXSA9IFtdO1xuXG4gICAgLy8gQWRkIGNvbXBhbnkgbm9kZVxuICAgIHVuaXF1ZU5vZGVzLnNldChjb21wYW55SWQsIHtcbiAgICAgIGlkOiBjb21wYW55SWQsXG4gICAgICBuYW1lOiBjb21wYW55TmFtZSxcbiAgICAgIHR5cGU6ICdjb21wYW55J1xuICAgIH0pO1xuXG4gICAgLy8gQWRkIGRpcmVjdG9ycyBhbmQgdGhlaXIgbGlua3NcbiAgICBkaXJlY3RvcnMuZm9yRWFjaChkID0+IHtcbiAgICAgIGNvbnN0IGlkID0gZC5pZDtcbiAgICAgIHVuaXF1ZU5vZGVzLnNldChpZCwge1xuICAgICAgICBpZCxcbiAgICAgICAgbmFtZTogZC5uYW1lLFxuICAgICAgICB0eXBlOiAnZGlyZWN0b3InXG4gICAgICB9KTtcbiAgICAgIGxpbmtzLnB1c2goe1xuICAgICAgICBzb3VyY2U6IGlkLFxuICAgICAgICB0YXJnZXQ6IGNvbXBhbnlJZCxcbiAgICAgICAgdHlwZTogJ2RpcmVjdG9yJ1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBBZGQgc2hhcmVob2xkZXJzIGFuZCB0aGVpciBsaW5rc1xuICAgIHNoYXJlaG9sZGVycy5mb3JFYWNoKHMgPT4ge1xuICAgICAgY29uc3QgaWQgPSBzLmlkO1xuICAgICAgdW5pcXVlTm9kZXMuc2V0KGlkLCB7XG4gICAgICAgIGlkLFxuICAgICAgICBuYW1lOiBzLm5hbWUsXG4gICAgICAgIHR5cGU6ICdzaGFyZWhvbGRlcicsXG4gICAgICAgIHZhbHVlOiBzLnBlcmNlbnRhZ2VcbiAgICAgIH0pO1xuICAgICAgbGlua3MucHVzaCh7XG4gICAgICAgIHNvdXJjZTogaWQsXG4gICAgICAgIHRhcmdldDogY29tcGFueUlkLFxuICAgICAgICB0eXBlOiAnc2hhcmVob2xkZXInLFxuICAgICAgICB2YWx1ZTogcy5wZXJjZW50YWdlXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IG5vZGVzID0gQXJyYXkuZnJvbSh1bmlxdWVOb2Rlcy52YWx1ZXMoKSk7XG5cbiAgICAvLyBBZGp1c3QgZm9yY2Ugc2ltdWxhdGlvbiBmb3IgYmV0dGVyIHBvc2l0aW9uaW5nXG4gICAgY29uc3Qgc2ltdWxhdGlvbiA9IGQzLmZvcmNlU2ltdWxhdGlvbihub2RlcylcbiAgICAgIC5mb3JjZSgnbGluaycsIGQzLmZvcmNlTGluayhsaW5rcylcbiAgICAgICAgLmlkKChkOiBhbnkpID0+IGQuaWQpXG4gICAgICAgIC5kaXN0YW5jZSgyMDApKVxuICAgICAgLmZvcmNlKCdjaGFyZ2UnLCBkMy5mb3JjZU1hbnlCb2R5KClcbiAgICAgICAgLnN0cmVuZ3RoKC0yMDAwKSlcbiAgICAgIC5mb3JjZSgnY29sbGlkZScsIGQzLmZvcmNlQ29sbGlkZSgpXG4gICAgICAgIC5yYWRpdXMoZCA9PiAoZC50eXBlID09PSAnY29tcGFueScgPyA4MCA6IDYwKSkpXG4gICAgICAuZm9yY2UoJ2NlbnRlcicsIGQzLmZvcmNlQ2VudGVyKHdpZHRoIC8gMiwgaGVpZ2h0IC8gMikpXG4gICAgICAuZm9yY2UoJ3knLCBkMy5mb3JjZVkoaGVpZ2h0IC8gMikuc3RyZW5ndGgoMC4xKSlcbiAgICAgIC5mb3JjZSgneCcsIGQzLmZvcmNlWCh3aWR0aCAvIDIpLnN0cmVuZ3RoKDAuMSkpO1xuXG4gICAgY29uc3Qgc3ZnID0gZDMuc2VsZWN0KHN2Z1JlZi5jdXJyZW50KVxuICAgICAgLmF0dHIoJ3dpZHRoJywgd2lkdGgpXG4gICAgICAuYXR0cignaGVpZ2h0JywgaGVpZ2h0KTtcblxuICAgIC8vIENyZWF0ZSBsaW5rcyB3aXRoIHByb3BlciBzdHlsaW5nXG4gICAgY29uc3QgbGluayA9IHN2Zy5hcHBlbmQoJ2cnKVxuICAgICAgLnNlbGVjdEFsbCgnbGluZScpXG4gICAgICAuZGF0YShsaW5rcylcbiAgICAgIC5qb2luKCdsaW5lJylcbiAgICAgIC5hdHRyKCdzdHJva2UnLCBkID0+IGQudHlwZSA9PT0gJ2RpcmVjdG9yJyA/ICcjOTMzM2VhJyA6ICcjMjU2M2ViJylcbiAgICAgIC5hdHRyKCdzdHJva2Utd2lkdGgnLCAyKVxuICAgICAgLmF0dHIoJ3N0cm9rZS1vcGFjaXR5JywgMC42KTtcblxuICAgIC8vIENyZWF0ZSBub2RlcyB3aXRoIGltcHJvdmVkIHZpc2liaWxpdHlcbiAgICBjb25zdCBub2RlID0gc3ZnLmFwcGVuZCgnZycpXG4gICAgICAuc2VsZWN0QWxsKCdnJylcbiAgICAgIC5kYXRhKG5vZGVzKVxuICAgICAgLmpvaW4oJ2cnKVxuICAgICAgLmNhbGwoZDMuZHJhZzxhbnksIGFueT4oKVxuICAgICAgICAub24oJ3N0YXJ0JywgZHJhZ3N0YXJ0ZWQpXG4gICAgICAgIC5vbignZHJhZycsIGRyYWdnZWQpXG4gICAgICAgIC5vbignZW5kJywgZHJhZ2VuZGVkKSk7XG5cbiAgICAvLyBBZGQgbGFyZ2VyIGNpcmNsZXMgZm9yIG5vZGVzXG4gICAgbm9kZS5hcHBlbmQoJ2NpcmNsZScpXG4gICAgICAuYXR0cigncicsIGQgPT4gZC50eXBlID09PSAnY29tcGFueScgPyAzMCA6IDIwKVxuICAgICAgLmF0dHIoJ2ZpbGwnLCBkID0+IHtcbiAgICAgICAgc3dpdGNoIChkLnR5cGUpIHtcbiAgICAgICAgICBjYXNlICdjb21wYW55JzogcmV0dXJuICcjZWY0NDQ0JztcbiAgICAgICAgICBjYXNlICdkaXJlY3Rvcic6IHJldHVybiAnIzkzMzNlYSc7XG4gICAgICAgICAgY2FzZSAnc2hhcmVob2xkZXInOiByZXR1cm4gJyMyNTYzZWInO1xuICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiAnI2dyYXknO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmF0dHIoJ3N0cm9rZScsICcjZmZmZmZmJylcbiAgICAgIC5hdHRyKCdzdHJva2Utd2lkdGgnLCAyKTtcblxuICAgIC8vIEFkZCBsYWJlbHMgd2l0aCBiZXR0ZXIgcG9zaXRpb25pbmcgYW5kIHZpc2liaWxpdHlcbiAgICBub2RlLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignZHgnLCBkID0+IGQudHlwZSA9PT0gJ2NvbXBhbnknID8gNDAgOiAyNSlcbiAgICAgIC5hdHRyKCdkeScsIDUpXG4gICAgICAudGV4dChkID0+IGQubmFtZSlcbiAgICAgIC5hdHRyKCdmaWxsJywgJyMxZjI5MzcnKVxuICAgICAgLmF0dHIoJ2ZvbnQtc2l6ZScsICcxNHB4JylcbiAgICAgIC5hdHRyKCdmb250LXdlaWdodCcsIGQgPT4gZC50eXBlID09PSAnY29tcGFueScgPyAnYm9sZCcgOiAnbm9ybWFsJyk7XG5cbiAgICAvLyBBZGQgbGVnZW5kIHdpdGggYmV0dGVyIHBvc2l0aW9uaW5nXG4gICAgY29uc3QgbGVnZW5kID0gc3ZnLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnbGVnZW5kJylcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKDIwLCAyMCknKTtcblxuICAgIGNvbnN0IGxlZ2VuZERhdGEgPSBbXG4gICAgICB7IHR5cGU6ICdjb21wYW55JywgY29sb3I6ICcjZWY0NDQ0JywgbGFiZWw6ICdDb21wYW55JyB9LFxuICAgICAgeyB0eXBlOiAnZGlyZWN0b3InLCBjb2xvcjogJyM5MzMzZWEnLCBsYWJlbDogJ0RpcmVjdG9yJyB9LFxuICAgICAgeyB0eXBlOiAnc2hhcmVob2xkZXInLCBjb2xvcjogJyMyNTYzZWInLCBsYWJlbDogJ1NoYXJlaG9sZGVyJyB9XG4gICAgXTtcblxuICAgIGNvbnN0IGxlZ2VuZEl0ZW1zID0gbGVnZW5kLnNlbGVjdEFsbCgnLmxlZ2VuZC1pdGVtJylcbiAgICAgIC5kYXRhKGxlZ2VuZERhdGEpXG4gICAgICAuZW50ZXIoKVxuICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnbGVnZW5kLWl0ZW0nKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIChkLCBpKSA9PiBgdHJhbnNsYXRlKDAsICR7aSAqIDI1fSlgKTtcblxuICAgIC8vIEFkZCBjb2xvcmVkIGNpcmNsZXMgdG8gbGVnZW5kXG4gICAgbGVnZW5kSXRlbXMuYXBwZW5kKCdjaXJjbGUnKVxuICAgICAgLmF0dHIoJ3InLCA2KVxuICAgICAgLmF0dHIoJ2ZpbGwnLCBkID0+IGQuY29sb3IpO1xuXG4gICAgLy8gQWRkIHRleHQgbGFiZWxzIHRvIGxlZ2VuZFxuICAgIGxlZ2VuZEl0ZW1zLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cigneCcsIDE1KVxuICAgICAgLmF0dHIoJ3knLCA1KVxuICAgICAgLnRleHQoZCA9PiBkLmxhYmVsKVxuICAgICAgLmF0dHIoJ2ZvbnQtc2l6ZScsICcxNHB4JylcbiAgICAgIC5hdHRyKCdmaWxsJywgJyM0YjU1NjMnKTtcblxuICAgIHNpbXVsYXRpb24ub24oJ3RpY2snLCAoKSA9PiB7XG4gICAgICBsaW5rXG4gICAgICAgIC5hdHRyKCd4MScsIGQgPT4gKGQuc291cmNlIGFzIGFueSkueClcbiAgICAgICAgLmF0dHIoJ3kxJywgZCA9PiAoZC5zb3VyY2UgYXMgYW55KS55KVxuICAgICAgICAuYXR0cigneDInLCBkID0+IChkLnRhcmdldCBhcyBhbnkpLngpXG4gICAgICAgIC5hdHRyKCd5MicsIGQgPT4gKGQudGFyZ2V0IGFzIGFueSkueSk7XG5cbiAgICAgIG5vZGVcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGQgPT4gYHRyYW5zbGF0ZSgke2QueH0sJHtkLnl9KWApO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gZHJhZ3N0YXJ0ZWQoZXZlbnQ6IGFueSkge1xuICAgICAgaWYgKCFldmVudC5hY3RpdmUpIHNpbXVsYXRpb24uYWxwaGFUYXJnZXQoMC4zKS5yZXN0YXJ0KCk7XG4gICAgICBldmVudC5zdWJqZWN0LmZ4ID0gZXZlbnQuc3ViamVjdC54O1xuICAgICAgZXZlbnQuc3ViamVjdC5meSA9IGV2ZW50LnN1YmplY3QueTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnZ2VkKGV2ZW50OiBhbnkpIHtcbiAgICAgIGV2ZW50LnN1YmplY3QuZnggPSBldmVudC54O1xuICAgICAgZXZlbnQuc3ViamVjdC5meSA9IGV2ZW50Lnk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ2VuZGVkKGV2ZW50OiBhbnkpIHtcbiAgICAgIGlmICghZXZlbnQuYWN0aXZlKSBzaW11bGF0aW9uLmFscGhhVGFyZ2V0KDApO1xuICAgICAgZXZlbnQuc3ViamVjdC5meCA9IG51bGw7XG4gICAgICBldmVudC5zdWJqZWN0LmZ5ID0gbnVsbDtcbiAgICB9XG4gIH0sIFtjb21wYW55SWQsIGNvbXBhbnlOYW1lLCBkaXJlY3RvcnMsIHNoYXJlaG9sZGVyc10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1bNDAwcHhdIGJnLXdoaXRlIHJvdW5kZWQtbGcgc2hhZG93IHAtNCBtYi04XCI+XG4gICAgICA8c3ZnIHJlZj17c3ZnUmVmfSBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsXCIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwiZDMiLCJOZXR3b3JrR3JhcGgiLCJjb21wYW55SWQiLCJjb21wYW55TmFtZSIsImRpcmVjdG9ycyIsInNoYXJlaG9sZGVycyIsInN2Z1JlZiIsIndpZHRoIiwiaGVpZ2h0IiwiY3VycmVudCIsInNlbGVjdCIsInNlbGVjdEFsbCIsInJlbW92ZSIsInVuaXF1ZU5vZGVzIiwiTWFwIiwibGlua3MiLCJzZXQiLCJpZCIsIm5hbWUiLCJ0eXBlIiwiZm9yRWFjaCIsImQiLCJwdXNoIiwic291cmNlIiwidGFyZ2V0IiwicyIsInZhbHVlIiwicGVyY2VudGFnZSIsIm5vZGVzIiwiQXJyYXkiLCJmcm9tIiwidmFsdWVzIiwic2ltdWxhdGlvbiIsImZvcmNlU2ltdWxhdGlvbiIsImZvcmNlIiwiZm9yY2VMaW5rIiwiZGlzdGFuY2UiLCJmb3JjZU1hbnlCb2R5Iiwic3RyZW5ndGgiLCJmb3JjZUNvbGxpZGUiLCJyYWRpdXMiLCJmb3JjZUNlbnRlciIsImZvcmNlWSIsImZvcmNlWCIsInN2ZyIsImF0dHIiLCJsaW5rIiwiYXBwZW5kIiwiZGF0YSIsImpvaW4iLCJub2RlIiwiY2FsbCIsImRyYWciLCJvbiIsImRyYWdzdGFydGVkIiwiZHJhZ2dlZCIsImRyYWdlbmRlZCIsInRleHQiLCJsZWdlbmQiLCJsZWdlbmREYXRhIiwiY29sb3IiLCJsYWJlbCIsImxlZ2VuZEl0ZW1zIiwiZW50ZXIiLCJpIiwieCIsInkiLCJldmVudCIsImFjdGl2ZSIsImFscGhhVGFyZ2V0IiwicmVzdGFydCIsInN1YmplY3QiLCJmeCIsImZ5IiwiZGl2IiwiY2xhc3NOYW1lIiwicmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/network/NetworkGraph.tsx\n"));

/***/ })

});