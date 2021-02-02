exports.ids = [17];
exports.modules = {

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(180);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("a077d16e", content, true, context)
};

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(115);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Poppins:400,600&display=swap);"]);
// Module
exports.push([module.i, ".accent-1{color:var(--accent-1)}.accent-2{color:var(--accent-2)}b{color:#465261}ul{padding:0}li{list-style:none}a{color:unset;text-decoration:unset}.cupon-link{color:#78b962!important;text-decoration:none!important}.nav{margin:0 var(--margin-x)}.nav__list{display:grid;grid-auto-flow:column;align-items:center;justify-content:flex-end;grid-gap:1em}.nav__list-item--bordered{border:1px solid var(--accent-1);border-radius:20px;color:var(--accent-1);padding:.5em 1.1em}.pricing{text-align:center;margin:0 1em}.pricing__title{margin-top:5vw;margin-bottom:5vw}.plan-duration{display:flex;justify-content:space-around;align-items:center;margin:0 auto;width:200px}.plan-duration__toggle{width:45px;height:25px;background:linear-gradient(130deg,var(--pink),#4e93f1);border-radius:16px;display:flex;align-items:center;justify-content:flex-start;transition:justify-content .2s}.plan-duration__toggle-ball{--size:18px;margin:0 4px;width:var(--size);height:var(--size);border-radius:50%;background:#fff}.plan-duration__text{color:rgba(33,39,51,.6)}.plan-duration--active{color:var(--black);font-weight:700}.plans__list{display:flex;flex-wrap:wrap;justify-content:center;margin:1.5em 0}.plan__item{--radius:10px;border-radius:var(--radius);box-shadow:1px 2px 15px rgba(80,80,80,.12);margin-top:3vw;margin-left:auto;margin-right:auto;display:flex;flex-direction:column;justify-content:space-between;max-width:600px;background:#fff}.plan__item--active{box-shadow:0 0 55px rgba(80,80,80,.25);height:350px}.plan__title{color:#4f81bd;margin-bottom:3vw;margin-top:3vw}.plan__price{font-size:2.5em}.plan__price:before{content:\"$\";font-size:1rem}.plan__cta-link{color:var(--accent-1);padding:1em 5em;border-radius:0 0 var(--radius) var(--radius);text-decoration:none!important;box-shadow:0 0 10px -5px #4f81bd!important}.plan__cta-link:hover{box-shadow:0 0 10px -3px #4f81bd!important}.plan__cta-link--active,.plan__cta-link:hover{background-color:#4f81bd;color:#fff}.plan__feature-list{display:grid;grid-row-gap:.6em;justify-content:space-around}.plans__special-offer a{color:var(--accent-2);text-decoration:underline;-webkit-text-decoration-color:var(--accent-2);text-decoration-color:var(--accent-2)}.plans__special-offer{margin-top:5vw}.currency{margin:2em var(--margin-x);display:grid;justify-content:flex-end;grid-gap:.5em;grid-auto-flow:column;align-items:center}.currency__select{border-radius:15px;border:none;background:#eee;font-weight:700;padding:2px 4px}@media only screen and (min-width:618px) and (max-width:900px){.plan__item--active{order:1}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ render; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ staticRenderFns; });

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/subscription/index.vue?vue&type=template&id=180cd91a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"pricing"},[_vm._ssrNode("<article class=\"plan__item plan__item--active\"><ul class=\"plan__feature-list\"><li class=\"plan__feature-item\"></li></ul> <ul class=\"plan__feature-list\"><li class=\"plan__feature-item\">A subscription to <span class=\"accent-2\"><i>DealFunnel</i></span> is $79.99 a month.<br></li> <li class=\"plan__feature-item\"><br><span class=\"accent-2\"><b>A subscription includes:</b></span></li> <li class=\"plan__feature-item\">-The\n       <span class=\"accent-2\"><i>DealFunnel</i> newsletter</span></li> <li class=\"plan__feature-item\"><i><span class=\"accent-2\">-DealFunnel Online</span></i></li> <li class=\"plan__feature-item\">-<i>DealFunnel</i> support<span class=\"accent-2\"></span></li> <li class=\"plan__feature-item\"><span class=\"accent-2\"></span></li></ul> <a href=\"#\" class=\"plan__cta-link plan__cta-link--active\">Get Started</a></article>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/subscription/index.vue?vue&type=template&id=180cd91a&


/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_180cd91a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(194);
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);



function injectStyles (context) {
  
  var style0 = __webpack_require__(179)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_180cd91a___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_180cd91a___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  null,
  "31aeba62"
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 89:
/***/ (function(module, exports) {

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ })

};;
//# sourceMappingURL=index.js.map