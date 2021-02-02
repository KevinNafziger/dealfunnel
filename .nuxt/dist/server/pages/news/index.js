exports.ids = [9];
exports.modules = {

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(154);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("700c8f39", content, true, context)
};

/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(156);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("19dcd8bc", content, true, context)
};

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/News/NewsTempSearch.vue?vue&type=template&id=6154e9f7&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"search-bar"}},[_vm._ssrNode("<div class=\"search-bar-div\" data-v-6154e9f7><div class=\"search-div\" data-v-6154e9f7><input type=\"text\" name=\"term\" id=\"term\" width=\"100%\" placeholder=\"search  content\""+(_vm._ssrAttr("value",(_vm.searchMessage)))+" class=\"text-field w-input w-col w-col-6\" style=\"margin-right: 10px\" data-v-6154e9f7> <button content=\"Click to search\" id=\"section-10\" class=\"gardient-button\" style=\"margin-left:1px;margin-top:5px;margin-bottom:10px\" data-v-6154e9f7><span class=\"mdi mdi-file-search\" data-v-6154e9f7></span></button> <br data-v-6154e9f7></div> <div class=\"tag-search-div\" data-v-6154e9f7><a href=\"#\" class=\"tagbtn\" data-v-6154e9f7>All</a> <a href=\"#\" class=\"tagbtn\" data-v-6154e9f7>payments</a> <a href=\"#\" class=\"tagbtn\" data-v-6154e9f7>insurtech</a> <a href=\"#\" class=\"tagbtn\" data-v-6154e9f7>lending</a> <a href=\"#\" class=\"tagbtn\" data-v-6154e9f7>blockchain</a> <a href=\"#\" class=\"tagbtn\" data-v-6154e9f7>AI</a> <a href=\"#\" class=\"tagbtn\""+(_vm._ssrStyle(null,null, { display: (_vm.showPreviousBtn) ? '' : 'none' }))+" data-v-6154e9f7>Prev</a> <a href=\"#\" class=\"tagbtn\""+(_vm._ssrStyle(null,null, { display: (_vm.showNextBtn) ? '' : 'none' }))+" data-v-6154e9f7>Next</a> <a href=\"#\" class=\"tagbtn\""+(_vm._ssrStyle(null,null, { display: (_vm.showPrevInsBtn) ? '' : 'none' }))+" data-v-6154e9f7>Prev</a> <a href=\"#\" class=\"tagbtn\""+(_vm._ssrStyle(null,null, { display: (_vm.showNextInsBtn) ? '' : 'none' }))+" data-v-6154e9f7>Next</a> <a href=\"#\" class=\"tagbtn\""+(_vm._ssrStyle(null,null, { display: (_vm.showPrevPayBtn) ? '' : 'none' }))+" data-v-6154e9f7>Prev</a> <a href=\"#\" class=\"tagbtn\""+(_vm._ssrStyle(null,null, { display: (_vm.showNextPayBtn) ? '' : 'none' }))+" data-v-6154e9f7>Next</a> <a href=\"#\" class=\"tagbtn\""+(_vm._ssrStyle(null,null, { display: (_vm.showPrevBlkBtn) ? '' : 'none' }))+" data-v-6154e9f7>Prev</a> <a href=\"#\" class=\"tagbtn\""+(_vm._ssrStyle(null,null, { display: (_vm.showNextBlkBtn) ? '' : 'none' }))+" data-v-6154e9f7>Next</a> <br data-v-6154e9f7> <a href=\"#\" class=\"tagbtn\" data-v-6154e9f7>M&amp;A</a> <a href=\"#\" class=\"tagbtn\" data-v-6154e9f7>Valuation</a></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/News/NewsTempSearch.vue?vue&type=template&id=6154e9f7&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/News/NewsTempSearch.vue?vue&type=script&lang=js&
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
 //import 'vuetify/dist/vuetify.min.css';
//import Vuetify from 'vuetify';

/* harmony default export */ var NewsTempSearchvue_type_script_lang_js_ = ({
  name: 'NewsTempSearch',

  data() {
    return {
      searchMessage: ""
    };
  },

  methods: {
    showGrouping: function (category) {
      $nuxt.$emit("getCategory", category);
    },
    changePage: function (direction) {
      $nuxt.$emit("changePage", direction);
    },
    changeInsur: function (direction) {
      $nuxt.$emit("changeInsur", direction);
    },
    changePay: function (direction) {
      $nuxt.$emit("changePay", direction);
    },
    changeBlock: function (direction) {
      $nuxt.$emit("changeBlock", direction);
    },
    submitSearch: function (topic) {
      $nuxt.$emit("submitSearch", topic);
      this.searchMessage = '';
    }
  },
  computed: { ...Object(external_vuex_["mapState"])({
      numActivePage: state => state.news.numNewsPage,
      activeTab: state => state.news.activeNewsTab,
      payPage: state => state.news.payNewsPage,
      blkPage: state => state.news.blkNewsPage,
      insPage: state => state.news.insNewsPage
    }),

    showPreviousBtn() {
      if (this.numActivePage >= 2 && (this.activeTab == 'Page' || this.activeTab == 'All')) {
        return true;
      } else {
        return false;
      }
    },

    showNextBtn() {
      if (this.activeTab == 'All' || this.activeTab == 'Page') {
        return true;
      } else {
        return false;
      }
    },

    showPrevInsBtn() {
      if (this.insPage >= 2 && this.activeTab == 'Insurtech') {
        return true;
      } else {
        return false;
      }
    },

    showNextInsBtn() {
      if (this.activeTab == 'Insurtech') {
        return true;
      } else {
        return false;
      }
    },

    showPrevBlkBtn() {
      if (this.blkPage >= 2 && this.activeTab == 'Blockchain') {
        return true;
      } else {
        return false;
      }
    },

    showNextBlkBtn() {
      if (this.activeTab == 'Blockchain') {
        return true;
      } else {
        return false;
      }
    },

    showPrevPayBtn() {
      if (this.payPage >= 2 && this.activeTab == 'Payments') {
        return true;
      } else {
        return false;
      }
    },

    showNextPayBtn() {
      if (this.activeTab == 'Payments') {
        return true;
      } else {
        return false;
      }
    }

  }
});
// CONCATENATED MODULE: ./components/News/NewsTempSearch.vue?vue&type=script&lang=js&
 /* harmony default export */ var News_NewsTempSearchvue_type_script_lang_js_ = (NewsTempSearchvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/News/NewsTempSearch.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(153)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  News_NewsTempSearchvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6154e9f7",
  "07250e54"
  
)

/* harmony default export */ var NewsTempSearch = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsTempSearch_vue_vue_type_style_index_0_id_6154e9f7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(102);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsTempSearch_vue_vue_type_style_index_0_id_6154e9f7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsTempSearch_vue_vue_type_style_index_0_id_6154e9f7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsTempSearch_vue_vue_type_style_index_0_id_6154e9f7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsTempSearch_vue_vue_type_style_index_0_id_6154e9f7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media screen and (min-width:1600px){.search-div[data-v-6154e9f7]{display:inherit}.w-col-8[data-v-6154e9f7]{width:80%!important}a[data-v-6154e9f7]{text-decoration:none!important}}.text-field[data-v-6154e9f7]{-moz-text-align-last:center;text-align-last:center;max-width:600px}.search-div[data-v-6154e9f7]{position:-webkit-sticky;position:sticky;display:contents;height:30px;border-radius:3px;margin-left:20px;margin-right:70px;margin-bottom:30px}.tagbtn[data-v-6154e9f7]{background-color:#4f81bd!important;color:#fff!important;padding:1px 5px;border-radius:10px}.text-field[data-v-6154e9f7]{height:30px!important}.search-bar-div[data-v-6154e9f7]{margin-left:10px;margin-Right:10px}.w-col-8[data-v-6154e9f7]{width:90%}@media screen and (max-width:1800px){.w-col-8[data-v-6154e9f7]{width:70%!important}}@media screen and (max-width:900px){.text-field[data-v-6154e9f7]{width:100%}#section-10[data-v-6154e9f7],.w-col-8[data-v-6154e9f7]{width:100%!important}}.tag-search-div[data-v-6154e9f7]{width:90%;margin-left:auto;margin-right:auto;display:inline-block}.tagbtn[data-v-6154e9f7]{padding:3px 5px!important;border-radius:3px!important;margin-top:10px!important;margin-bottom:10px!important;display:inline-flex}.gardient-button[data-v-6154e9f7]{margin-top:10px;background:#4f81bd!important}i.glyphicon[data-v-6154e9f7]{color:#fff!important;heigth:50px!important}#section-10[data-v-6154e9f7]{background-image:linear-gradient(92deg,rgba(20,160,253,.82),rgba(20,160,253,.82));width:80px;color:#fff}button#section-10[data-v-6154e9f7]{margin-left:1px;margin-top:0!important;margin-bottom:10px;padding:3px;border-radius:3px;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;position:inherit}input[data-v-6154e9f7]{background:hsla(0,0%,41.2%,.07059)}h2[data-v-6154e9f7],h3[data-v-6154e9f7]{color:#4f81bd!important}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_286084b2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(103);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_286084b2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_286084b2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_286084b2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_286084b2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#search-bar[data-v-286084b2]{text-align:-webkit-center!important}.w-container-2[data-v-286084b2]{background:hsla(0,0%,94.5%,.98039);padding-top:20px}.search-bar-div[data-v-286084b2]{text-align:center}.tag-search-div[data-v-286084b2]{align-content:center;justify-content:center;place-content:center}.text-field[data-v-286084b2],.title[data-v-286084b2]{text-align:-webkit-center}.title[data-v-286084b2]{margin-top:20px;margin-bottom:20px}.content[data-v-286084b2]{background:hsla(0,0%,100%,.78039);padding-bottom:10px;border-radius:10px;box-shadow:0 0 5px -4px;max-width:1200px;width:auto;margin-left:auto;margin-right:auto}.link-10[data-v-286084b2]{color:#474747}#megamenu4[data-v-286084b2]{margin:12px}h2[data-v-286084b2],h3[data-v-286084b2]{color:#4f81bd!important}.mdi[data-v-286084b2]{color:#3f8ac5!important}.w-col .w-col[data-v-286084b2]{padding-left:0;width:100%!important;margin-bottom:20px!important;padding-right:0}a.link-10.hover.hover-3[data-v-286084b2]{font-size:smaller;color:#474747}#megamenu3[data-v-286084b2]{top:46px!important}.Postcompdropmenu[data-v-286084b2],.postsssnavcomp[data-v-286084b2],.w-dropdown-list[data-v-286084b2]{border-radius:10px!important}.column-29[data-v-286084b2],.list-item-9[data-v-286084b2]{border-color:rgba(164,219,255,.45)}.featuredsidemenu[data-v-286084b2]:hover{box-shadow:0 1px 5px 0 rgba(0,89,132,.16);border-radius:10px}.link-10[data-v-286084b2]{color:#23527c}h1[data-v-286084b2]{text-align:center}@media screen and (max-width:1400px){#examples[data-v-286084b2]{width:49%!important;height:650px!important}}@media screen and (max-width:1000px){#examples[data-v-286084b2]{width:100%!important}.tagbtn[data-v-286084b2]{margin-bottom:100px!important}.w-col[data-v-286084b2]{width:100%!important;left:auto;right:auto}.news-h[data-v-286084b2]{margin-top:100px!important}}.news-h[data-v-286084b2]{margin-top:100px!important}.paragraph-19[data-v-286084b2]{height:250px;color:#474747;overflow:auto;padding:20px;width:90%;margin:auto}#examples[data-v-286084b2]{display:inline-table;background-color:#fff;opacity:.95;margin:0,auto;width:33%;border-radius:10px;min-height:620px;background:linear-gradient(45deg,#f7f9fb,#fff)}.btn-link[data-v-286084b2]:focus,.btn-link[data-v-286084b2]:hover{color:#23527c;text-decoration:underline;background-color:#2fb7ff!important}.tl-c[data-v-286084b2]{margin-left:-525px;font-family:poppins;position:inherit;background:hsla(0,0%,62%,.16078);color:#5887c0;padding:3px;border-radius:3px;font-family:cursive}.f50[data-v-286084b2]{width:50%}.heading-24[data-v-286084b2]{min-height:132px;width:90%;margin:auto;padding-top:30px}#examples .example .hover[data-v-286084b2]{display:grid;margin-bottom:20px}#myCompanyTag[data-v-286084b2]{font-weight:700;font-style:normal}.cyber-buy[data-v-286084b2]{width:200px;padding:10px}.modal-content[data-v-286084b2]{padding:20px;display:inline-flex}.text-block-20[data-v-286084b2]{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;display:flex}.modal-mark-content[data-v-286084b2]{display:table}ul[data-v-286084b2]{width:100%!important}.tagbtn[data-v-286084b2]{margin-top:3px!important;margin-right:3px!important;color:#fff;cursor:pointer;background:#4f81bd;text-decoration:none!important}.tagbtn[data-v-286084b2]:hover{box-shadow:0 0 10px -3px #4f81bd!important}.text-block-13[data-v-286084b2]{font-weight:700;text-align:center;-moz-text-align-last:center;text-align-last:center}.datetag[data-v-286084b2]{float:left;display:block}.section-15[data-v-286084b2]{margin-top:100px}.sectionnix[data-v-286084b2]{margin-bottom:200px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/news/index.vue?vue&type=template&id=286084b2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"w-container-2",attrs:{"width":"100%"}},[_vm._ssrNode("<div data-v-69296181 id=\"top\" class=\"sectionix\" data-v-286084b2><div data-v-69296181 class=\"title\" data-v-286084b2><div data-v-69296181 class=\"content\" data-v-286084b2><br data-v-69296181 data-v-286084b2> <h2 data-v-69296181 data-v-286084b2>News <i style=\"font-size: 13px; text-align:right; margin-left:3px;\" data-v-286084b2>"+_vm._ssrEscape(_vm._s(_vm.filterMessage))+"</i></h2></div></div></div> "),_c('NewsTempSearch'),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"section-15\" data-v-286084b2>","</div>",[_vm._ssrNode("<div class=\"row-15 w-row\" data-v-286084b2>","</div>",[_vm._ssrNode("<div class=\"w-col w-col-9\" data-v-286084b2>","</div>",[_vm._ssrNode("<ul class=\"w-list-unstyled\" data-v-286084b2>","</ul>",_vm._l((_vm.links),function(link){return _vm._ssrNode("<li id=\"examples\" class=\"list-item-9 featuredsidemenu\" style=\"text-align: center; margin-bottom: 20px;\" data-v-286084b2>","</li>",[_vm._ssrNode("<span class=\"datetag tl-c\" style=\"margin-left:20px\" data-v-286084b2>"+_vm._ssrEscape("\r\n                "+_vm._s(link.published_on)+"\r\n              ")+"</span><br data-v-286084b2> <h3 class=\"heading-24 example\" data-v-286084b2>"+_vm._ssrEscape("\r\n                "+_vm._s(link.header)+"\r\n              ")+"</h3><br data-v-286084b2> "),_vm._ssrNode("<div class=\"text-block-13\" data-v-286084b2>","</div>",[_vm._ssrNode("<em data-v-286084b2>","</em>",[_vm._ssrNode("<span style=\"margin-right:15px\" data-v-286084b2>","</span>",[_vm._ssrNode("<a"+(_vm._ssrAttr("href",link.url))+" target=\"_blank\" style=\"color:#4286ff\" data-v-286084b2>"+_vm._ssrEscape("  "+_vm._s(link.publication)+" ")+"</a> <br data-v-286084b2> <br data-v-286084b2> "),(_vm.showCompany)?_vm._ssrNode("<div id=\"myCompanyTag\" class=\"mdi mdi-domain mdi-24px plain\" data-v-286084b2>","</div>",[(_vm.showCompany)?_c('nuxt-link',{attrs:{"to":'/companies/' + link.company_id}},[_vm._v(" "+_vm._s(link.company.name)+"  ")]):_vm._e()],1):_vm._e()],2),_vm._ssrNode("<br data-v-286084b2><br data-v-286084b2>")],2)]),_vm._ssrNode("<br data-v-286084b2> <p class=\"paragraph-19\" data-v-286084b2>"+_vm._ssrEscape("\r\n                "+_vm._s(link.description)+"\r\n              ")+"</p> <div class=\"w-row\" data-v-286084b2><div clas=\"tag-row\" data-v-286084b2><div data-v-286084b2>"+((link.sector)?("<a href=\"#\" class=\"tagbtn\" data-v-286084b2>"+_vm._ssrEscape("\r\n                    "+_vm._s(link.sector.toLowerCase())+"\r\n                  ")+"</a>"):"<!---->")+" "+((link.sector2)?("<a href=\"#\" class=\"tagbtn\" data-v-286084b2>"+_vm._ssrEscape("\r\n                    "+_vm._s(link.sector2.toLowerCase())+"\r\n                  ")+"</a>"):"<!---->")+" "+((link.sector3)?("<a href=\"#\" class=\"tagbtn\" data-v-286084b2>"+_vm._ssrEscape("\r\n                    "+_vm._s(link.sector3.toLowerCase())+"\r\n                  ")+"</a>"):"<!---->")+" "+((link.folder && (link.folder!='general') && (link.folder!='report'))?("<a href=\"#\" class=\"tagbtn\" data-v-286084b2>"+_vm._ssrEscape("\r\n                      "+_vm._s(link.folder.toLowerCase())+"\r\n                  ")+"</a>"):"<!---->")+" "+((link.restype && (link.restype!='General' ) && (link.restype!='report'))?("<a href=\"#\" class=\"tagbtn\" data-v-286084b2>"+_vm._ssrEscape("\r\n                    "+_vm._s(link.restype.toLowerCase())+"\r\n                   ")+"</a>"):"<!---->")+"</div></div></div><br data-v-286084b2>")],2)}),0)])])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/news/index.vue?vue&type=template&id=286084b2&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: ./components/News/NewsTempSearch.vue + 4 modules
var NewsTempSearch = __webpack_require__(130);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/news/index.vue?vue&type=script&lang=js&
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


/* harmony default export */ var newsvue_type_script_lang_js_ = ({
  layout: 'raises',

  data() {
    return {
      showCompany: false
    };
  },

  methods: {
    getbyCategory: function (category) {
      switch (category) {
        case 'Insurtech':
        case 'insurtech':
          this.$store.dispatch("news/setInsur");
          break;

        case 'Blockchain':
        case 'blockchain':
          this.$store.dispatch("news/setBlock");
          break;

        case 'Lending':
        case 'lending':
          this.$store.dispatch("news/setLend");
          break;

        case 'Payments':
        case 'payments':
          this.$store.dispatch("news/setPay");
          break;

        case 'Mergers':
        case 'M&A':
          this.$store.dispatch("news/setMergers");
          break;

        case 'Valuation':
        case 'valuation':
          this.$store.dispatch("news/setVal");
          break;

        case 'AI':
        case 'ai':
          this.$store.dispatch("news/setAI");
          break;

        case 'OpenBanking':
        case 'openbanking':
          this.$store.dispatch("news/setOpen");
          break;

        case 'PersonalFinance':
        case 'personalfinance':
          this.$store.dispatch("news/setPer");
          break;

        case 'CapitalMarkets':
        case 'capitalmarkets':
          this.$store.dispatch("news/setCapital");
          break;

        case 'WealthTech':
        case 'wealthtech':
          this.$store.dispatch("news/setWealth");
          break;

        case 'General':
        case 'general':
          this.$store.dispatch("news/setGeneral");
          break;

        case 'healthtech':
        case 'HealthTech':
          this.$store.dispatch("news/setHealth");
          break;

        case 'RealEstate':
        case 'realestate':
          this.$store.dispatch("news/setReal");
          break;

        case 'Regtech':
        case 'regtech':
          this.$store.dispatch("news/setReg");
          break;

        case 'CyberIdentity':
        case 'cyberidentity':
          this.$store.dispatch("news/setCyber");
          break;

        case 'Neobank':
        case 'neobank':
          this.$store.dispatch("news/setNeo");
          break;

        case 'Remittance':
        case 'remittance':
          this.$store.dispatch("news/setRemit");
          break;

        case 'Currency':
        case 'currency':
        case 'Funds':
        case 'funds':
        case 'OnDemand':
        case 'ondemand':
        case 'Marketplace':
        case 'marketplace':
        case 'Transport':
        case 'transport':
        case 'Auto':
        case 'auto':
        case 'claims':
        case 'Claims':
        case 'Comparison':
        case 'compairson':
        case 'rental':
        case 'Rental':
        case 'wallet':
        case 'Wallet':
        case 'Exchange':
        case 'exchange':
        case 'Supplychain':
        case 'supplychain':
        case 'Banking':
        case 'banking':
        case 'Identity':
        case 'identity':
        case 'Platform':
        case 'Scaling':
        case 'scaling':
        case 'Education':
        case 'Developer':
        case 'News':
        case 'Credit':
        case 'credit':
        case 'news':
        case 'Cyber':
        case 'cyber':
        case 'Predictions':
        case 'predictions':
        case 'p2p':
        case 'P2p':
        case 'Employee Benefits':
        case 'employee benefits':
        case 'Government':
        case 'HR':
          this.$store.dispatch("news/setSectorTab", category);
          this.$store.dispatch("news/setSector", category);
          break;

        case 'Lists':
        case 'Regulatory':
        case 'Human Interest':
        case 'Libra':
          this.$store.dispatch("news/setSectorTab", category);
          this.$store.dispatch("news/setbyID", category);
          break;
      }
    },
    setPage: function (direction) {
      switch (direction) {
        case 'Previous':
          var page = this.numPage;
          this.$store.dispatch("news/goPrevious", page);
          break;

        case 'Next':
          var page = this.numPage;
          this.$store.dispatch("news/goNext", page);
          break;

        case 'Last':
          var page = this.numPage;
          this.$store.dispatch("news/goLast");
          break;
      }
    },
    changePay: function (direction) {
      switch (direction) {
        case 'Previous':
          var page = this.payPage;
          this.$store.dispatch("news/setPayPrevious", page);
          break;

        case 'Next':
          var page = this.payPage;
          this.$store.dispatch("news/setPayNext", page);
          break;
      }
    },
    changeInsur: function (direction) {
      switch (direction) {
        case 'Previous':
          var page = this.insPage;
          this.$store.dispatch("news/setInsurPrevious", page);
          break;

        case 'Next':
          var page = this.insPage;
          this.$store.dispatch("news/setInsurNext", page);
          break;
      }
    },

    submitSearch(topic) {
      this.$store.dispatch("news/setSearchTab", topic);
      this.$store.dispatch("news/submitSearch", topic);
    },

    changeBlock: function (direction) {
      switch (direction) {
        case 'Previous':
          var page = this.blkPage;
          this.$store.dispatch("news/setBlockPrevious", page);
          break;

        case 'Next':
          var page = this.blkPage;
          this.$store.dispatch("news/setBlockNext", page);
          break;
      }
    }
  },
  computed: { ...Object(external_vuex_["mapState"])({
      starter: state => state.news.news1,
      first: state => state.news.firstNewsLoad,
      activeNewsInfo: state => state.news.activeNewsInfo,
      activeTab: state => state.news.activeNewsTab,
      numPage: state => state.news.numNewsPage,
      blkPage: state => state.news.blkNewsPage,
      payPage: state => state.news.payNewsPage,
      insPage: state => state.news.insNewsPage
    }),

    filterMessage() {
      if (this.activeTab == 'All') {
        return this.activeTab + ' ' + 'page ' + this.numPage;
      } else if (this.activeTab == 'Blockchain') {
        return this.activeTab + ' ' + 'page ' + ' ' + this.blkPage;
      } else if (this.activeTab == 'Payments') {
        return this.activeTab + ' ' + 'page ' + ' ' + this.payPage;
      } else if (this.activeTab == 'Insurtech') {
        return this.activeTab + ' ' + 'page ' + ' ' + this.insPage;
      } else {
        return this.activeTab;
      }
    },

    links() {
      if (this.first == true) {
        return this.starter;
      } else {
        if (this.numNewsPage > 1) {
          this.showCompany = true;
        }

        return this.activeNewsInfo;
      }
    }

  },

  created() {
    this.$nuxt.$on("getCategory", category => this.getbyCategory(category));
    this.$nuxt.$on("changePage", direction => this.setPage(direction));
    this.$nuxt.$on("changePay", direction => this.changePay(direction));
    this.$nuxt.$on("changeInsur", direction => this.changeInsur(direction));
    this.$nuxt.$on("changeBlock", direction => this.changeBlock(direction));
    this.$nuxt.$on("submitSearch", topic => this.submitSearch(topic));
  },

  async fetch({
    store
  }) {
    await store.dispatch("news/nuxtServerInit");
  },

  head: {
    title: 'News'
  }
});
// CONCATENATED MODULE: ./pages/news/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_newsvue_type_script_lang_js_ = (newsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/news/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(155)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_newsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "286084b2",
  "04537005"
  
)

/* harmony default export */ var news = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {NewsTempSearch: __webpack_require__(130).default})


/***/ })

};;
//# sourceMappingURL=index.js.map