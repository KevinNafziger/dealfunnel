exports.ids = [4];
exports.modules = {

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Company/CompanyTempSearch.vue?vue&type=template&id=343fe13d&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"search-bar-div\" data-v-343fe13d><div class=\"search-div\" data-v-343fe13d><input content=\"Type your search text\" width=\"100%\" placeholder=\"search  content\""+(_vm._ssrAttr("value",(_vm.searchMessage)))+" class=\"text-field w-input w-col w-col-6\" style=\"margin-right: 10px\" data-v-343fe13d> <button id=\"section-10\" class=\"gardient-button\" style=\"margin-left:1px;margin-top:5px;margin-bottom:10px\" data-v-343fe13d><span class=\"mdi mdi-file-search\" data-v-343fe13d></span></button> <br data-v-343fe13d><br data-v-343fe13d></div> <div class=\"tag-search-div\" data-v-343fe13d><a href=\"#\" class=\"tagbtn\""+(_vm._ssrStyle(null,null, { display: (_vm.showAllBtn) ? '' : 'none' }))+" data-v-343fe13d>all</a> <a href=\"#\" class=\"tagbtn\" data-v-343fe13d>payments</a> <a href=\"#\" class=\"tagbtn\" data-v-343fe13d>insurtech</a> <a href=\"#\" class=\"tagbtn\" data-v-343fe13d>lending</a> <a href=\"#\" class=\"tagbtn\" data-v-343fe13d>blockchain</a> <a href=\"#\" class=\"tagbtn\""+(_vm._ssrStyle(null,null, { display: (_vm.showPreviousBtn) ? '' : 'none' }))+" data-v-343fe13d>Prev</a> <a href=\"#\" class=\"tagbtn\""+(_vm._ssrStyle(null,null, { display: (_vm.showNextBtn) ? '' : 'none' }))+" data-v-343fe13d>Next</a></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Company/CompanyTempSearch.vue?vue&type=template&id=343fe13d&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Company/CompanyTempSearch.vue?vue&type=script&lang=js&
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

/* harmony default export */ var CompanyTempSearchvue_type_script_lang_js_ = ({
  name: 'CompanyTempSearch',

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
    submitSearch: function (topic) {
      $nuxt.$emit("submitSearch", topic);
      this.searchMessage = '';
    }
  },
  computed: { ...Object(external_vuex_["mapState"])({
      activeTab: state => state.company.activeTab,
      allCompanies: state => state.company.allCompanies
    }),

    showPreviousBtn() {
      if (this.activeTab == 'All page 4' || this.activeTab == 'All page 3' || this.activeTab == 'All page 2') {
        return true;
      } else {
        return false;
      }
    },

    showNextBtn() {
      if (this.activeTab == 'All' || this.activeTab == 'All page 1' || this.activeTab == 'All page 2' || this.activeTab == 'All page 3') {
        return true;
      } else {
        return false;
      }
    },

    showAllBtn() {
      if (this.allCompanies) {
        return true;
      } else {
        return false;
      }
    }

  }
});
// CONCATENATED MODULE: ./components/Company/CompanyTempSearch.vue?vue&type=script&lang=js&
 /* harmony default export */ var Company_CompanyTempSearchvue_type_script_lang_js_ = (CompanyTempSearchvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Company/CompanyTempSearch.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(143)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Company_CompanyTempSearchvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "343fe13d",
  "0c2fa49c"
  
)

/* harmony default export */ var CompanyTempSearch = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyTempSearch_vue_vue_type_style_index_0_id_343fe13d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyTempSearch_vue_vue_type_style_index_0_id_343fe13d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyTempSearch_vue_vue_type_style_index_0_id_343fe13d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyTempSearch_vue_vue_type_style_index_0_id_343fe13d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyTempSearch_vue_vue_type_style_index_0_id_343fe13d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "a[data-v-343fe13d]{text-decoration:none!important}@media screen and (min-width:1600px){.search-div[data-v-343fe13d]{display:inherit}.w-col-8[data-v-343fe13d]{width:80%!important}}.search-div[data-v-343fe13d]{position:-webkit-sticky;position:sticky;display:contents;height:30px;border-radius:3px;margin-left:20px;margin-right:70px;margin-bottom:30px}.tagbtn[data-v-343fe13d]{background-color:#4f81bd!important;color:#fff!important;padding:1px 5px;border-radius:10px}.text-field[data-v-343fe13d]{height:30px!important}.search-bar-div[data-v-343fe13d]{margin-left:10px;margin-Right:10px}.w-col-8[data-v-343fe13d]{width:90%}@media screen and (max-width:1800px){.w-col-8[data-v-343fe13d]{width:70%!important}}@media screen and (max-width:900px){.text-field[data-v-343fe13d]{width:100%}#section-10[data-v-343fe13d],.w-col-8[data-v-343fe13d]{width:100%!important}}.tag-search-div[data-v-343fe13d]{width:90%;margin-left:auto;margin-right:auto;display:inline-block}.tagbtn[data-v-343fe13d]{padding:3px 5px!important;border-radius:3px!important;margin-top:10px!important;margin-bottom:10px!important;display:inline-flex}.gardient-button[data-v-343fe13d]{margin-top:10px;background:#4f81bd!important}i.glyphicon[data-v-343fe13d]{color:#fff!important;heigth:50px!important}.text-field[data-v-343fe13d]{-moz-text-align-last:center;text-align-last:center;max-width:600px}#section-10[data-v-343fe13d]{background-image:linear-gradient(92deg,rgba(20,160,253,.82),rgba(20,160,253,.82));width:80px;color:#fff}button#section-10[data-v-343fe13d]{margin-left:1px;margin-top:0!important;margin-bottom:10px;padding:3px;border-radius:3px;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;position:inherit}input[data-v-343fe13d]{background:hsla(0,0%,41.2%,.07059)}h2[data-v-343fe13d],h3[data-v-343fe13d]{color:#4f81bd!important}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6720a442_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6720a442_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6720a442_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6720a442_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6720a442_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "tr[data-v-6720a442]:nth-child(odd){background:rgba(79,129,189,.07843)!important}.title[data-v-6720a442]{text-align:-webkit-center;margin-top:20px;margin-bottom:20px}.content[data-v-6720a442]{background:hsla(0,0%,100%,.78039);padding-bottom:10px;border-radius:10px;box-shadow:0 0 5px -4px;max-width:1200px;width:auto;margin-left:auto;margin-right:auto}.participating-td[data-v-6720a442]{overflow:auto!important;max-width:500px!important}.ptitle[data-v-6720a442],h2[data-v-6720a442]{color:#4f81bd!important}#myCompanyTag[data-v-6720a442]{width:260px!important}thead[data-v-6720a442]{text-align:-webkit-center!important}td[data-v-6720a442],tr[data-v-6720a442]{padding:10px!important}td[data-v-6720a442]{min-width:80px!important;word-break:break-word!important}tbody td[data-v-6720a442]:hover{box-shadow:1px 1px 8px -5px grey!important;transition:.5s!important}tr[data-v-6720a442]{background-color:#fff!important;text-align:center!important;vertical-align:text-top!important;-moz-text-align-last:center!important;text-align-last:center!important}tr[data-v-6720a442]:hover{box-shadow:1px 1px 8px -5px grey!important}tr a[data-v-6720a442]{color:#1e90ff!important}th[data-v-6720a442]{border-bottom:outset rgba(40,119,218,.18824)!important}tbody[data-v-6720a442]{border-radius:10px!important}@media screen and (max-width:1292px){.w-row[data-v-6720a442]{width:-webkit-min-content!important;width:-moz-min-content!important;width:min-content!important;display:contents!important}h3[data-v-6720a442]{font-weight:700!important}}.excel-download-btn[data-v-6720a442]{color:#696969!important;position:fixed!important;margin-top:-88px!important;left:10px!important;border-radius:100%!important;padding:5px!important;background-color:#fff!important;box-shadow:0 0 14px -7px grey!important;z-index:9!important;width:45px!important}td[data-v-6720a442]{padding:3px!important}.square2 .content[data-v-6720a442]{display:table!important}.mdi[data-v-6720a442]{color:#fff!important}td[data-v-6720a442]{color:#627082!important;font-family:poppins!important;box-shadow:1px 1px 1px 0 rgb(38 63 80/6%)!important}tr[data-v-6720a442]{box-shadow:0 0 1px 0 rgb(15 102 160/61%)!important}.table-striped[data-v-6720a442]{max-width:1550px!important;margin-left:auto!important;margin-right:auto!important;background:#fff;border-radius:5px}table[data-v-6720a442]{box-shadow:0 0 10px -9px #000}table .table-t tr[data-v-6720a442]{background:#2196f3!important;color:#fff}table .table-t tr h3[data-v-6720a442]{color:#fff!important}table .table-t tr[data-v-6720a442]:hover{background:#2196f3!important;color:#fff}table .table-t tr h3[data-v-6720a442]:hover{color:#fff!important}.table-t[data-v-6720a442]{box-shadow:0 0 15px -7px #87ceeb!important}.cash[data-v-6720a442]:after{content:\" $\"}.w-col .w-col[data-v-6720a442]{padding-left:0!important;width:100%!important;margin-bottom:20px!important;padding-right:0!important}a.link-10.hover.hover-3[data-v-6720a442]{font-size:smaller!important}#megamenu3[data-v-6720a442]{top:46px!important}.Postcompdropmenu[data-v-6720a442],.postsssnavcomp[data-v-6720a442],.w-dropdown-list[data-v-6720a442]{border-radius:10px!important}.column-29[data-v-6720a442],.list-item-9[data-v-6720a442]{border-color:rgba(164,219,255,.45)!important}.featuredsidemenu[data-v-6720a442]:hover{box-shadow:0 1px 5px 0 rgba(0,89,132,.16)!important;overflow:hidden!important;border-radius:10px!important}h3[data-v-6720a442]{font-size:18px!important;font-feature-settings:\"pcap\",\"c2pc\"!important;font-variant-caps:all-petite-caps!important}h1[data-v-6720a442]{text-align:center!important}@media screen and (max-width:1400px){#examples[data-v-6720a442]{width:49%!important}}.paragraph-19[data-v-6720a442]{margin-top:9px!important;height:250px!important;color:#474747!important;overflow:auto!important}#oki[data-v-6720a442]{color:#696969!important;margin:20px}#examples[data-v-6720a442]{display:inline-flex!important;background-color:#fff!important;opacity:.95!important;margin:0 auto!important;width:24%!important;height:530px!important;background:linear-gradient(45deg,#f7f9fb,#fff)!important}.btn-link[data-v-6720a442]:focus,.btn-link[data-v-6720a442]:hover{color:#23527c!important;text-decoration:underline!important;background-color:#2fb7ff!important}.tl-c[data-v-6720a442]{margin-left:-7px!important;margin-top:7px!important;font-family:poppins!important;position:fixed!important}.f50[data-v-6720a442]{width:50%!important}.heading-24[data-v-6720a442]{min-height:132px!important}#examples .example .hover[data-v-6720a442]{display:inline-grid!important;margin-bottom:20px!important}#myCompanyTag[data-v-6720a442]{font-style:normal!important}.fixed-head[data-v-6720a442]{padding:20px!important;width:100%!important}dl[data-v-6720a442],ol[data-v-6720a442],ul[data-v-6720a442]{margin-top:0!important;margin-bottom:1rem!important;display:inherit!important}.gardient-button[data-v-6720a442]{background-image:linear-gradient(200deg,#fff 10%,#fff 39%,#fff 80%);background-size:400% 400%!important;-webkit-animation:gradient 15s ease infinite!important;animation:gradient 15s ease infinite!important;width:-webkit-fit-content!important;width:-moz-fit-content!important;width:fit-content!important;margin-left:auto!important;margin-right:auto!important;margin-bottom:20px!important;border-radius:10px!important;border:none!important;padding:10px 20px!important;font-family:poppins!important;color:#4f81bd!important;font-size:12px!important}.gardient-button[data-v-6720a442]:hover{box-shadow:0 0 10px -5px grey}.center-btn[data-v-6720a442]{text-align:-webkit-center;display:flex}a[data-v-6720a442]{color:#4f81bd;font-weight:700;text-decoration:none}#myWebLinkTag[data-v-6720a442]{display:table!important;margin-top:10px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/companies/index.vue?vue&type=template&id=6720a442&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div data-v-69296181 id=\"top\" data-v-6720a442><div data-v-69296181 class=\"title\" data-v-6720a442><div data-v-69296181 class=\"content\" data-v-6720a442><br data-v-69296181 data-v-6720a442> <h2 data-v-69296181 data-v-6720a442>Companies\n\n        <i style=\"font-size: 13px; text-align:right; margin-left:3px;\" data-v-6720a442>"+_vm._ssrEscape(_vm._s(_vm.filterMessage)+" ")+"</i></h2></div></div></div> "),_c('CompanyTempSearch'),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"draft-div\" data-v-6720a442>","</div>",[_vm._ssrNode("<table width=\"100%\" class=\"table-striped\" data-v-6720a442>","</table>",[_vm._ssrNode("<thead class=\"fixed-head\" data-v-6720a442><th data-v-6720a442><strong data-v-6720a442><span id=\"oki\" class=\"mdi mdi-calendar\" data-v-6720a442></span> <h3 data-v-6720a442>Company</h3></strong></th> <th colspan=\"2\" data-v-6720a442><strong data-v-6720a442><span id=\"oki\" class=\"mdi mdi-earth\" data-v-6720a442></span> <h3 data-v-6720a442>About</h3></strong></th> <th data-v-6720a442><strong data-v-6720a442><span id=\"oki\" class=\"mdi mdi-cash-usd-outline\" data-v-6720a442></span> <h3 data-v-6720a442>Website</h3></strong></th> <th data-v-6720a442><strong data-v-6720a442><span id=\"oki\" class=\"mdi mdi-account-star\" data-v-6720a442></span> <h3 data-v-6720a442>City</h3></strong></th> <th data-v-6720a442><strong data-v-6720a442><span id=\"oki\" class=\"mdi mdi-account-multiple-plus\" data-v-6720a442></span> <h3 data-v-6720a442>Category</h3></strong></th> <th data-v-6720a442><strong data-v-6720a442><span id=\"oki\" class=\"mdi mdi-earth\" data-v-6720a442></span><h3 data-v-6720a442>Country</h3></strong></th> <th data-v-6720a442><strong data-v-6720a442><span id=\"oki\" class=\"mdi mdi-earth\" data-v-6720a442></span><h3 data-v-6720a442>Founded</h3></strong></th></thead> "),_vm._l((_vm.companies),function(company){return _vm._ssrNode("<tr style=\"margin-top:20px;\" data-v-6720a442>","</tr>",[_vm._ssrNode("<td data-v-6720a442>","</td>",[_c('nuxt-link',{attrs:{"to":'/companies/' + company.id}},[_vm._v(" "+_vm._s(company.name)+"  ")])],1),_vm._ssrNode(" <td colspan=\"2\" data-v-6720a442>"+_vm._ssrEscape("\n                "+_vm._s(company.description)+"\n              ")+"</td> <td data-v-6720a442><a"+(_vm._ssrAttr("href",company.website))+" target=\"_blank\" style=\"color:#4286ff\" data-v-6720a442>"+_vm._ssrEscape("  "+_vm._s(company.website)+" ")+"</a></td> <td data-v-6720a442>"+_vm._ssrEscape("\n                 "+_vm._s(company.city)+"\n              ")+"</td> <td data-v-6720a442>"+_vm._ssrEscape("\n                  "+_vm._s(company.category)+"\n              ")+"</td> <td data-v-6720a442>"+_vm._ssrEscape("\n                "+_vm._s(company.country_item)+"\n              ")+"</td> <td data-v-6720a442>"+_vm._ssrEscape("\n                "+_vm._s(company.founding_yr)+"\n              ")+"</td>")],2)})],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/companies/index.vue?vue&type=template&id=6720a442&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: ./components/Company/CompanyTempSearch.vue + 4 modules
var CompanyTempSearch = __webpack_require__(124);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/companies/index.vue?vue&type=script&lang=js&
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


/* harmony default export */ var companiesvue_type_script_lang_js_ = ({
  head: {
    title: 'Companies'
  },
  methods: {
    getbyCategory: function (category) {
      switch (category) {
        case 'All':
          this.$store.dispatch("company/setAll");
          break;

        case 'Insurtech':
          this.$store.dispatch("company/setInsur");
          break;

        case 'Blockchain':
          this.$store.dispatch("company/setBlock");
          break;

        case 'Lending':
          this.$store.dispatch("company/setLend", "notFromLoad");
          break;

        case 'Payments':
          this.$store.dispatch("company/setPay");
          break;
      }
    },
    changePage: function (direction) {
      switch (direction) {
        case 'Previous':
          if (this.page == 4) {
            this.$store.dispatch("company/setComp3");
          } else if (this.page == 3) {
            this.$store.dispatch("company/setComp2");
          } else if (this.page == 2) {
            this.$store.dispatch("company/setComp1");
          }

          break;

        case 'Next':
          if (this.page == 1) {
            this.$store.dispatch("company/setComp2");
          } else if (this.page == 2) {
            this.$store.dispatch("company/setComp3");
          } else if (this.page == 3) {
            this.$store.dispatch("company/setComp4");
          } else {
            this.$store.dispatch("company/setComp2");
          }

          break;
      }
    },

    submitSearch(topic) {
      this.$store.dispatch("company/submitSearch", topic);
      this.$store.dispatch("company/setSearchTab", topic);
    },

    filteredCompany(id) {
      this.showMain = false;
      this.showProfile = true;
      return this.companies.find(c => c.id == id);
    }

  },
  computed: { ...Object(external_vuex_["mapState"])({
      firstLoad: state => state.company.firstLoad,
      companies: state => state.company.activeInfo,
      activeTab: state => state.company.activeTab,
      page: state => state.posts.activePage
    }),

    filterMessage() {
      return this.activeTab;
    }

  },

  created() {
    this.$nuxt.$on("getCategory", category => this.getbyCategory(category));
    this.$nuxt.$on("submitSearch", topic => this.submitSearch(topic));
    this.$nuxt.$on("changePage", direction => this.changePage(direction));
  },

  async fetch({
    store
  }) {
    await store.dispatch("company/setLend", "fromLoad");
  }

});
// CONCATENATED MODULE: ./pages/companies/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_companiesvue_type_script_lang_js_ = (companiesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/companies/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(145)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_companiesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6720a442",
  "2be9d7bf"
  
)

/* harmony default export */ var companies = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {CompanyTempSearch: __webpack_require__(124).default})


/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(144);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("587ab551", content, true, context)
};

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(146);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("621d2ea6", content, true, context)
};

/***/ })

};;
//# sourceMappingURL=index.js.map