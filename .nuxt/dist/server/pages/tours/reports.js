exports.ids = [19];
exports.modules = {

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(184);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("331ea736", content, true, context)
};

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reports_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(117);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reports_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reports_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reports_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reports_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".main-div-rv{height:auto;text-align:-webkit-center;display:block}text{margin-top:100px;margin-bottom:50px}ul{-moz-text-align-last:left;text-align-last:left;align-self:center;justify-self:center;place-self:center}ol,ul{width:900px}ol{text-align:left}img{border-radius:10px;margin-bottom:20px}.title{color:#4f81bd}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/tours/reports.vue?vue&type=template&id=34e82c70&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main-div-rv"},[_vm._ssrNode("<div id=\"top\" class=\"sectionix\"><div class=\"title\"><div class=\"content\"><br> <h2>Deal Funnel Reports</h2></div></div></div> <text class=\"headcomname\">\n      Reports-Choose an existing report\n    </text><br> <br> <ol><li>Login to the application and select the <i>Reports</i> tab from the navigation bar.</li> <br> <li>Reports are categorized by topic geography, strategy, timing or size of next  raise.</li> <br> <li>Open the report by clicking on either the PDF or View button. From there, you are given options to print, download or zoom in on the selected report.</li> <br></ol> <br> <img src=\"https://filesforfintech.s3.amazonaws.com/images/giffs/reports+tour.gif\" width=\"1000px\"> <br><br> <text class=\"headcomname\">\n    Reports Builder- Create your own report\n  </text><br> <br> <ol><li>Login to the application, then  select the <i>Builder</i> tab from the navigation bar on the top of the page.</li> <br> <li>On the lefthand side of the Builder page, you see a list of articles which you  can narrow further by choosing a topic of interest. </li> <br> <li>Look through the list of articles presented on the left.  Select yan article of interest and drag it to the board on the right side of the screen titled 'Your Report.'</li> <br> <li>Once you place the articles you want for the report under the board titled <i>Your Report</i>, click on <i>View</i> button.  You should now see a preview of the report. Click on the <i>PDF</i> button to download a copy of the report.</li></ol> <br> <img src=\"https://filesforfintech.s3.amazonaws.com/images/giffs/Reports+builder+pdf+tour.gif\" width=\"1000px\"> <br><br>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/tours/reports.vue?vue&type=template&id=34e82c70&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/tours/reports.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(183)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "2dcd6cac"
  
)

/* harmony default export */ var reports = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=reports.js.map