exports.ids = [5];
exports.modules = {

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(150);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("1f087d7b", content, true, context)
};

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Data/DataTempSearch.vue?vue&type=template&id=ec5bb2fa&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"-webkit-box-pack":"center","margin":"auto !important"},attrs:{"id":"search-bar"}},[_vm._ssrNode("<div class=\"search-bar-div\" data-v-ec5bb2fa><div class=\"search-div\" data-v-ec5bb2fa><input width=\"100%\" placeholder=\"search content\""+(_vm._ssrAttr("value",(_vm.searchMessage)))+" class=\"text-field w-input w-col w-col-6\" style=\"margin-right: 10px\" data-v-ec5bb2fa> <button id=\"section-10\" class=\"gardient-button\" style=\"margin-left:1px;margin-top:5px;margin-bottom:10px\" data-v-ec5bb2fa><i class=\"glyphicon glyphicon-search\" data-v-ec5bb2fa><span class=\"mdi mdi-file-search\" data-v-ec5bb2fa></span></i></button></div> <div style=\"max-width:850px;\" data-v-ec5bb2fa><a href=\"#\" class=\"tagbtn\" data-v-ec5bb2fa>All</a> <a href=\"#\" class=\"tagbtn\" data-v-ec5bb2fa>Q320</a> <a href=\"#\" class=\"tagbtn\" data-v-ec5bb2fa>Q420</a> <a href=\"#\" class=\"tagbtn\" data-v-ec5bb2fa>Q121</a> <a href=\"#\" class=\"tagbtn\" data-v-ec5bb2fa>Q221</a> <a href=\"#\" class=\"tagbtn\" data-v-ec5bb2fa>Q321</a> <a href=\"#\" class=\"tagbtn\" data-v-ec5bb2fa>Q421</a> <a href=\"#\" class=\"tagbtn\""+(_vm._ssrStyle(null,null, { display: (_vm.showPreviousBtn) ? '' : 'none' }))+" data-v-ec5bb2fa>Prev</a> <a href=\"#\" class=\"tagbtn\""+(_vm._ssrStyle(null,null, { display: (_vm.showNextBtn) ? '' : 'none' }))+" data-v-ec5bb2fa>Next</a> <br data-v-ec5bb2fa> <a href=\"#\" class=\"tagbtn\" data-v-ec5bb2fa>$0 to $1m</a> <a href=\"#\" class=\"tagbtn\" data-v-ec5bb2fa>$1m to $5m</a> <a href=\"#\" class=\"tagbtn\" data-v-ec5bb2fa>$5m to $10m</a> <a href=\"#\" class=\"tagbtn\" data-v-ec5bb2fa>$10m to $20m</a> <a href=\"#\" class=\"tagbtn\" data-v-ec5bb2fa>$20m to $50m</a> <a href=\"#\" class=\"tagbtn\" data-v-ec5bb2fa>$50m to $100m</a> <a href=\"#\" class=\"tagbtn\" data-v-ec5bb2fa>$100m plus</a> <br data-v-ec5bb2fa> <a href=\"#\" class=\"tagbtn\" data-v-ec5bb2fa>Latin America</a> <a href=\"#\" class=\"tagbtn\" data-v-ec5bb2fa>Canada</a> <a href=\"#\" class=\"tagbtn\" data-v-ec5bb2fa>South (US)</a> <a href=\"#\" class=\"tagbtn\" data-v-ec5bb2fa>New England</a> <a href=\"#\" class=\"tagbtn\" data-v-ec5bb2fa>Southeast (US)</a> <a href=\"#\" class=\"tagbtn\" data-v-ec5bb2fa>SoCal</a> <a href=\"#\" class=\"tagbtn\" data-v-ec5bb2fa>Silicon Valley</a> <a href=\"#\" class=\"tagbtn\" data-v-ec5bb2fa>Midwest (US)</a> <a href=\"#\" class=\"tagbtn\" data-v-ec5bb2fa>Mid-Atlantic</a> <a href=\"#\" class=\"tagbtn\" data-v-ec5bb2fa>Rocky Mountains</a> <a href=\"#\" class=\"tagbtn\" data-v-ec5bb2fa>Pacific Northwest (US)</a> <a href=\"#\" class=\"tagbtn\" data-v-ec5bb2fa>Southwest (US)</a> <a href=\"#\" class=\"tagbtn\" data-v-ec5bb2fa>NYC</a> <a href=\"#\" class=\"tagbtn\" data-v-ec5bb2fa>MiddleEast</a> <a href=\"#\" class=\"tagbtn\" data-v-ec5bb2fa>Oceania</a> <a href=\"#\" class=\"tagbtn\" data-v-ec5bb2fa>Carribean</a> <a href=\"#\" class=\"tagbtn\" data-v-ec5bb2fa>Asia</a> <a href=\"#\" class=\"tagbtn\" data-v-ec5bb2fa>Europe</a> <a href=\"#\" class=\"tagbtn\" data-v-ec5bb2fa>Africa</a> <br data-v-ec5bb2fa></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Data/DataTempSearch.vue?vue&type=template&id=ec5bb2fa&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Data/DataTempSearch.vue?vue&type=script&lang=js&
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

/* harmony default export */ var DataTempSearchvue_type_script_lang_js_ = ({
  name: 'DataTempSearch',

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
      activeTab: state => state.posts.activeDataTab
    }),

    showPreviousBtn() {
      if (this.activeTab == 'Page') {
        return true;
      } else {
        return false;
      }
    },

    showNextBtn() {
      if (this.activeTab == 'Page' || this.activeTab == 'All') {
        return true;
      } else {
        return false;
      }
    }

  }
});
// CONCATENATED MODULE: ./components/Data/DataTempSearch.vue?vue&type=script&lang=js&
 /* harmony default export */ var Data_DataTempSearchvue_type_script_lang_js_ = (DataTempSearchvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Data/DataTempSearch.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(147)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Data_DataTempSearchvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "ec5bb2fa",
  "b2858194"
  
)

/* harmony default export */ var DataTempSearch = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataTempSearch_vue_vue_type_style_index_0_id_ec5bb2fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataTempSearch_vue_vue_type_style_index_0_id_ec5bb2fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataTempSearch_vue_vue_type_style_index_0_id_ec5bb2fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataTempSearch_vue_vue_type_style_index_0_id_ec5bb2fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataTempSearch_vue_vue_type_style_index_0_id_ec5bb2fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".top-menus[data-v-ec5bb2fa]{display:-webkit-box;-webkit-box-pack:center}@media screen and (min-width:1600px){.search-div[data-v-ec5bb2fa]{display:inherit}.w-col-8[data-v-ec5bb2fa]{width:80%!important}}.search-div[data-v-ec5bb2fa]{position:-webkit-sticky;position:sticky;display:contents;height:30px;border-radius:3px;margin-left:20px;margin-right:70px;margin-bottom:30px}.tagbtn[data-v-ec5bb2fa]{background-color:#4f81bd!important;color:#fff!important;padding:1px 5px;border-radius:10px}.text-field[data-v-ec5bb2fa]{height:30px!important}.search-bar-div[data-v-ec5bb2fa]{margin-left:10px;margin-Right:10px}.w-col-8[data-v-ec5bb2fa]{width:90%}@media screen and (max-width:1800px){.w-col-8[data-v-ec5bb2fa]{width:70%!important}}@media screen and (max-width:900px){.text-field[data-v-ec5bb2fa]{width:100%}#section-10[data-v-ec5bb2fa],.w-col-8[data-v-ec5bb2fa]{width:100%!important}#section-10[data-v-ec5bb2fa]{max-width:600px}}.tag-search-div[data-v-ec5bb2fa]{width:90%;margin-left:auto;margin-right:auto;display:inline-block}.tagbtn[data-v-ec5bb2fa]{padding:3px 5px!important;border-radius:3px!important;margin-top:10px!important;margin-bottom:10px!important;display:inline-flex}.gardient-button[data-v-ec5bb2fa]{margin-top:10px;background:#4f81bd!important}a[data-v-ec5bb2fa]{text-decoration:none!important}i.glyphicon[data-v-ec5bb2fa]{color:#fff!important;heigth:50px!important}#section-10[data-v-ec5bb2fa]{background-image:linear-gradient(92deg,rgba(20,160,253,.82),rgba(20,160,253,.82));width:80px;color:#fff}.text-field[data-v-ec5bb2fa]{-moz-text-align-last:center;text-align-last:center;max-width:600px}button#section-10[data-v-ec5bb2fa]{margin-left:1px;margin-top:0!important;margin-bottom:10px;padding:3px;border-radius:3px;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;position:inherit}input[data-v-ec5bb2fa]{background:hsla(0,0%,41.2%,.07059);margin:0!important}h2[data-v-ec5bb2fa],h3[data-v-ec5bb2fa]{color:#4f81bd!important}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4f64a957_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(100);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4f64a957_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4f64a957_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4f64a957_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4f64a957_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#search-bar[data-v-4f64a957]{text-align:-webkit-center!important}a[data-v-4f64a957]{box-shadow:none}tr[data-v-4f64a957]:nth-child(odd){background:rgba(79,129,189,.07843)!important}.ptitle[data-v-4f64a957],h2[data-v-4f64a957]{color:#4f81bd!important}#myCompanyTag[data-v-4f64a957]{width:260px!important}thead[data-v-4f64a957]{text-align:-webkit-center!important}td[data-v-4f64a957],tr[data-v-4f64a957]{padding:10px!important}td[data-v-4f64a957]{min-width:80px!important;word-break:break-word!important}tbody td[data-v-4f64a957]:hover{box-shadow:1px 1px 8px -5px grey!important;transition:.5s!important}tr[data-v-4f64a957]{background-color:#fff!important;text-align:center!important;vertical-align:text-top!important;-moz-text-align-last:center!important;text-align-last:center!important}tr[data-v-4f64a957]:hover{box-shadow:1px 1px 8px -5px grey!important}tr a[data-v-4f64a957]{color:#1e90ff!important}th[data-v-4f64a957]{border-bottom:outset rgba(40,119,218,.18824)!important}tbody[data-v-4f64a957]{border-radius:10px!important}@media screen and (max-width:1292px){.w-row[data-v-4f64a957]{width:-webkit-min-content!important;width:-moz-min-content!important;width:min-content!important;display:contents!important}h3[data-v-4f64a957]{font-weight:700!important}}.excel-download-btn[data-v-4f64a957]{color:#696969!important;position:fixed!important;margin-top:-88px!important;left:10px!important;border-radius:100%!important;padding:5px!important;background-color:#fff!important;box-shadow:0 0 14px -7px grey!important;z-index:9!important;width:45px!important}.valuebtn[data-v-4f64a957]{width:240px!important}.datetag[data-v-4f64a957]{background:radial-gradient(circle,#3fb1fb 20%,#c755ff 340%)!important;border-radius:1px!important;width:130px!important}td[data-v-4f64a957]{padding:3px!important}.square2 .content[data-v-4f64a957]{display:table!important}.mdi[data-v-4f64a957]{color:#fff!important}.participating-td[data-v-4f64a957]{overflow:auto!important;max-width:500px!important}td[data-v-4f64a957]{color:#627082!important;font-family:poppins!important;box-shadow:1px 1px 1px 0 rgb(38 63 80/6%)!important}tr[data-v-4f64a957]{box-shadow:0 0 1px 0 rgb(15 102 160/61%)!important}.table-striped[data-v-4f64a957]{max-width:1550px!important;margin-left:auto!important;margin-right:auto!important;background:#fff;border-radius:5px}table[data-v-4f64a957]{box-shadow:0 0 10px -9px #000}table .table-t tr[data-v-4f64a957]{background:#2196f3!important;color:#fff}table .table-t tr h3[data-v-4f64a957]{color:#fff!important}table .table-t tr[data-v-4f64a957]:hover{background:#2196f3!important;color:#fff}.datetag[data-v-4f64a957],table .table-t tr h3[data-v-4f64a957]:hover{color:#fff!important}.datetag[data-v-4f64a957]{background:radial-gradient(circle,#4f81bd 20%,#5d86b7 340%)!important}.table-t[data-v-4f64a957]{box-shadow:0 0 15px -7px #87ceeb!important}.cash[data-v-4f64a957]:after{content:\" $\"}.valuebtn[data-v-4f64a957]{font:message-box!important}.w-col .w-col[data-v-4f64a957]{padding-left:0!important;width:100%!important;margin-bottom:20px!important;padding-right:0!important}a.link-10.hover.hover-3[data-v-4f64a957]{font-size:smaller!important}#megamenu3[data-v-4f64a957]{top:46px!important}.Postcompdropmenu[data-v-4f64a957],.postsssnavcomp[data-v-4f64a957],.w-dropdown-list[data-v-4f64a957]{border-radius:10px!important}.column-29[data-v-4f64a957],.list-item-9[data-v-4f64a957]{border-color:rgba(164,219,255,.45)!important}.featuredsidemenu[data-v-4f64a957]:hover{box-shadow:0 1px 5px 0 rgba(0,89,132,.16)!important;overflow:hidden!important;border-radius:10px!important}h3[data-v-4f64a957]{font-size:18px!important;font-feature-settings:\"pcap\",\"c2pc\"!important;font-variant-caps:all-petite-caps!important}h1[data-v-4f64a957]{text-align:center!important}@media screen and (max-width:1400px){#examples[data-v-4f64a957]{width:49%!important}}.paragraph-19[data-v-4f64a957]{margin-top:9px!important;height:250px!important;color:#474747!important;overflow:auto!important}#examples[data-v-4f64a957]{display:inline-flex!important;background-color:#fff!important;opacity:.95!important;margin:0 auto!important;width:24%!important;height:530px!important;background:linear-gradient(45deg,#f7f9fb,#fff)!important}.btn-link[data-v-4f64a957]:focus,.btn-link[data-v-4f64a957]:hover{color:#23527c!important;text-decoration:underline!important;background-color:#2fb7ff!important}.tl-c[data-v-4f64a957]{margin-left:-7px!important;margin-top:7px!important;font-family:poppins!important;position:fixed!important}.f50[data-v-4f64a957]{width:50%!important}.heading-24[data-v-4f64a957]{min-height:132px!important}#examples .example .hover[data-v-4f64a957]{display:inline-grid!important;margin-bottom:20px!important}#myCompanyTag[data-v-4f64a957]{font-style:normal!important}.fixed-head[data-v-4f64a957]{padding:20px!important;width:100%!important}dl[data-v-4f64a957],ol[data-v-4f64a957],ul[data-v-4f64a957]{margin-top:0!important;margin-bottom:1rem!important;display:inherit!important}#oki[data-v-4f64a957]{color:#696969!important;margin:20px}.excel-ico[data-v-4f64a957]{background-image:url(https://filesforfintech.s3.amazonaws.com/images/web+design+graphics/pngbarn.png)!important;width:30px!important;padding:30px!important;background-repeat:no-repeat!important;background-size:contain!important;margin:20px auto!important;background-position:50%!important;height:-webkit-fit-content!important;height:-moz-fit-content!important;height:fit-content!important;display:block!important;float:left}.square2 .content[data-v-4f64a957]{display:table}.content[data-v-4f64a957]{background:hsla(0,0%,100%,.78039);padding-bottom:10px;border-radius:10px;box-shadow:0 0 5px -4px;max-width:1200px;width:auto;margin-left:auto;margin-right:auto}.top-menus[data-v-4f64a957]{display:-webkit-box}.title[data-v-4f64a957]{text-align:-webkit-center;margin-top:20px;margin-bottom:20px}.v-sidebar-menu.vsm_collapsed.vsm_relative[data-v-4f64a957]{border-radius:5px;margin-left:10px;margin-top:80px}.v-sidebar-menu.vsm_relative[data-v-4f64a957]{position:fixed;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/data/index.vue?vue&type=template&id=4f64a957&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div data-v-69296181 id=\"top\" data-v-4f64a957><div data-v-69296181 class=\"title\" data-v-4f64a957><div data-v-69296181 class=\"content\" data-v-4f64a957><br data-v-69296181 data-v-4f64a957> <h2 data-v-69296181 data-v-4f64a957>Article Data<i style=\"font-size: 13px; text-align:right; margin-left:3px;\" data-v-4f64a957>"+_vm._ssrEscape(_vm._s(_vm.filterMessage))+"</i></h2></div></div></div> <text class=\"headcomname\" data-v-4f64a957>\r\n    Article Data\r\n  </text> "),_vm._ssrNode("<div class=\"top-menus\" data-v-4f64a957>","</div>",[_c('DataTempSearch')],1),_vm._ssrNode(" "),_vm._ssrNode("<a href=\"https://fintechhorizonsmedia.com/fintechraises.xlsx\" id=\"myExcelIcoTag\" style=\"color:dimgray\" data-v-4f64a957>","</a>",[_vm._ssrNode("<br data-v-4f64a957> "),_c('center',[_c('span',{directives:[{name:"tippy",rawName:"v-tippy",value:({ placement : 'bottom' }),expression:"{ placement : 'bottom' }"}],staticClass:"mdi mdi-file-excel",staticStyle:{"margin":"20px","font-size":"34px"},attrs:{"content":"export to Excel","id":"oki"}})]),_vm._ssrNode("<br data-v-4f64a957>")],2),_vm._ssrNode(" "),_vm._ssrNode("<table width=\"100%\" class=\"table-striped\" data-v-4f64a957>","</table>",[_vm._ssrNode("<tbody class=\"table-t\" data-v-4f64a957><th data-v-4f64a957><strong data-v-4f64a957><span id=\"oki\" class=\"mdi mdi-calendar\" data-v-4f64a957></span> <h3 data-v-4f64a957>Date</h3></strong></th> <th data-v-4f64a957><strong data-v-4f64a957><span id=\"oki\" class=\"mdi mdi-format-title\" data-v-4f64a957></span> <h3 data-v-4f64a957>Title</h3></strong></th> <th data-v-4f64a957><strong data-v-4f64a957><span id=\"oki\" class=\"mdi mdi-tag\" data-v-4f64a957></span> <h3 data-v-4f64a957>Next Raise</h3></strong></th> <th data-v-4f64a957><strong data-v-4f64a957><span id=\"oki\" class=\"mdi mdi-cash-usd-outline\" data-v-4f64a957></span> <h3 data-v-4f64a957>Exp. Amount</h3></strong></th> <th data-v-4f64a957><strong data-v-4f64a957><span id=\"oki\" class=\"mdi mdi-calendar-clock\" data-v-4f64a957></span> <h3 data-v-4f64a957>Exp. Timing</h3></strong></th> <th colspan=\"2\" data-v-4f64a957><strong data-v-4f64a957><span id=\"oki\" class=\"mdi mdi-shape-outline\" data-v-4f64a957></span> <h3 data-v-4f64a957>Categories</h3></strong></th> <th data-v-4f64a957><strong data-v-4f64a957><span id=\"oki\" class=\"mdi mdi-city\" data-v-4f64a957></span> <h3 data-v-4f64a957>City</h3></strong></th> <th data-v-4f64a957><strong data-v-4f64a957><span id=\"oki\" class=\"mdi mdi-earth\" data-v-4f64a957></span> <h3 data-v-4f64a957>Country</h3></strong></th> <th data-v-4f64a957><strong data-v-4f64a957><span id=\"oki\" class=\"mdi mdi-earth-box\" data-v-4f64a957></span> <h3 data-v-4f64a957>Region</h3></strong></th> <th data-v-4f64a957><strong data-v-4f64a957><span id=\"oki\" class=\"mdi mdi-account-voice\" data-v-4f64a957></span> <h3 data-v-4f64a957>Advisors</h3></strong></th></tbody> "),_vm._l((_vm.posts),function(post){return _vm._ssrNode("<tr style=\"margin-top:20px;\" data-v-4f64a957>","</tr>",[_vm._ssrNode("<td class=\"datetag\" data-v-4f64a957>"+_vm._ssrEscape("\r\n         "+_vm._s(post.created_date)+"\r\n        ")+"</td> "),_vm._ssrNode("<td data-v-4f64a957>","</td>",[_c('nuxt-link',{attrs:{"id":"myArticleLinkTag","to":'/posts/' + post.id}},[_vm._v(_vm._s(post.title))])],1),_vm._ssrNode(" <td data-v-4f64a957>"+_vm._ssrEscape("\r\n            "+_vm._s(post.next_round)+"\r\n        ")+"</td> <td data-v-4f64a957>"+_vm._ssrEscape("\r\n            "+_vm._s(post.amount)+"\r\n        ")+"</td> <td data-v-4f64a957>"+_vm._ssrEscape("\r\n            "+_vm._s(post.quarter)+"\r\n        ")+"</td> <td colspan=\"2\" data-v-4f64a957>"+_vm._ssrEscape("\r\n            "+_vm._s(post.grouping1)+"/ "+_vm._s(post.grouping2)+"\r\n        ")+"</td> <td data-v-4f64a957>"+_vm._ssrEscape("\r\n            "+_vm._s(post.city)+"\r\n        ")+"</td> <td data-v-4f64a957>"+_vm._ssrEscape("\r\n            "+_vm._s(post.country_item)+"\r\n        ")+"</td> <td data-v-4f64a957>"+_vm._ssrEscape("\r\n            "+_vm._s(post.region)+"\r\n        ")+"</td> <td data-v-4f64a957>"+_vm._ssrEscape("\r\n            "+_vm._s(post.advisors)+"\r\n        ")+"</td>")],2)})],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/data/index.vue?vue&type=template&id=4f64a957&scoped=true&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: ./components/Data/DataTempSearch.vue + 4 modules
var DataTempSearch = __webpack_require__(125);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/data/index.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//
//
//
//



/* harmony default export */ var datavue_type_script_lang_js_ = ({
  computed: { ...Object(external_vuex_["mapState"])({
      starter: state => state.posts.post1,
      firstDataLoad: state => state.posts.firstDataLoad,
      activeDataInfo: state => state.posts.activeDataInfo,
      activeTab: state => state.posts.activeDataTab,
      page: state => state.posts.dataPage
    }),

    posts() {
      if (this.firstDataLoad) {
        return this.starter;
      } else {
        return this.activeDataInfo;
      }
    },

    filterMessage() {
      if (this.firstDataLoad) {
        return 'All';
      } else if (this.activeTab == 'Page') {
        return this.activeTab + ' ' + this.page;
      } else {
        return this.activeTab;
      }
    }

  },
  methods: {
    getbyCategory(category) {
      this.sortBy == '';

      switch (category) {
        case 'Q320':
          this.$store.dispatch("posts/setView", "Data");
          this.$store.dispatch("posts/setQ320");
          break;

        case 'Q420':
          this.$store.dispatch("posts/setView", "Data");
          this.$store.dispatch("posts/setQ420");
          break;

        case 'Q121':
          this.$store.dispatch("posts/setView", "Data");
          this.$store.dispatch("posts/setQ121");
          break;

        case 'Q221':
          this.$store.dispatch("posts/setView", "Data");
          this.$store.dispatch("posts/setQ221");
          break;

        case 'Q321':
          this.$store.dispatch("posts/setView", "Data");
          this.$store.dispatch("posts/setQ321");
          break;

        case 'Q421':
          this.$store.dispatch("posts/setView", "Data");
          this.$store.dispatch("posts/setQ421");
          break;

        case 'zerotoone':
          this.$store.dispatch("posts/setView", "Data");
          this.$store.dispatch("posts/set0to1");
          break;

        case 'onetofive':
          this.$store.dispatch("posts/setView", "Data");
          this.$store.dispatch("posts/set1to5");
          break;

        case 'fivetoten':
          this.$store.dispatch("posts/setView", "Data");
          this.$store.dispatch("posts/set5to10");
          break;

        case 'tentotwenty':
          this.$store.dispatch("posts/setView", "Data");
          this.$store.dispatch("posts/set10to20");
          break;

        case 'twentytofifty':
          this.$store.dispatch("posts/setView", "Data");
          this.$store.dispatch("posts/set20to50");
          break;

        case 'fiftytohundred':
          this.$store.dispatch("posts/setView", "Data");
          this.$store.dispatch("posts/set50to100");
          break;

        case 'hundredplus':
          this.$store.dispatch("posts/setView", "Data");
          this.$store.dispatch("posts/set100plus");
          break;

        case 'latin':
          this.$store.dispatch("posts/setView", "Data");
          this.$store.dispatch("posts/setLatin");
          break;

        case 'canada':
          this.$store.dispatch("posts/setView", "Data");
          this.$store.dispatch("posts/setCanada");
          break;

        case 'south':
          this.$store.dispatch("posts/setView", "Data");
          this.$store.dispatch("posts/setSouth");
          break;

        case 'newengland':
          this.$store.dispatch("posts/setView", "Data");
          this.$store.dispatch("posts/setNewEngland");
          break;

        case 'southeast':
          this.$store.dispatch("posts/setView", "Data");
          this.$store.dispatch("posts/setSoutheast");
          break;

        case 'socal':
          this.$store.dispatch("posts/setView", "Data");
          this.$store.dispatch("posts/setSocal");
          break;

        case 'silicon':
          this.$store.dispatch("posts/setView", "Data");
          this.$store.dispatch("posts/setSilicon");
          break;

        case 'midwest':
          this.$store.dispatch("posts/setView", "Data");
          this.$store.dispatch("posts/setMidwest");
          break;

        case 'midatlantic':
          this.$store.dispatch("posts/setView", "Data");
          this.$store.dispatch("posts/setMidatlantic");
          break;

        case 'rocky':
          this.$store.dispatch("posts/setView", "Data");
          this.$store.dispatch("posts/setRocky");
          break;

        case 'pacific':
          this.$store.dispatch("posts/setView", "Data");
          this.$store.dispatch("posts/setPacific");
          break;

        case 'southwest':
          this.$store.dispatch("posts/setView", "Data");
          this.$store.dispatch("posts/setSouthwest");
          break;

        case 'nyc':
          this.$store.dispatch("posts/setView", "Data");
          this.$store.dispatch("posts/setNYC");
          break;

        case 'me':
          this.$store.dispatch("posts/setView", "Data");
          this.$store.dispatch("posts/setME");
          break;

        case 'oceania':
          this.$store.dispatch("posts/setView", "Data");
          this.$store.dispatch("posts/setOceania");
          break;

        case 'carribean':
          this.$store.dispatch("posts/setView", "Data");
          this.$store.dispatch("posts/setCarribean");
          break;

        case 'asia':
          this.$store.dispatch("posts/setView", "Data");
          this.$store.dispatch("posts/setAsia");
          break;

        case 'europe':
          this.$store.dispatch("posts/setView", "Data");
          this.$store.dispatch("posts/setEurope");
          break;

        case 'africa':
          this.$store.dispatch("posts/setView", "Data");
          this.$store.dispatch("posts/setAfrica");
          break;
      }
    },

    submitSearch(topic) {
      this.$store.dispatch("posts/setView", "Data");
      this.$store.dispatch("posts/submitSearch", topic);
      this.$store.dispatch("posts/setSearchTab", topic);
    },

    changePage: function (direction) {
      switch (direction) {
        case 'Previous':
          var page = this.page;
          this.$store.dispatch("posts/setView", "Data");
          this.$store.dispatch("posts/goPrevious", page);
          break;

        case 'Next':
          var page = this.page;
          this.$store.dispatch("posts/setView", "Data");
          this.$store.dispatch("posts/goNext", page);
          break;

        case 'Last':
          this.$store.dispatch("posts/setSearchTab", 'All');
          this.$store.dispatch("posts/setView", "Data");
          this.$store.dispatch("posts/goLast");
          break;
      }
    }
  },

  created() {
    this.$nuxt.$on("getCategory", category => this.getbyCategory(category));
    this.$nuxt.$on("changePage", direction => this.changePage(direction));
    this.$nuxt.$on("submitSearch", topic => this.submitSearch(topic));
  },

  async fetch({
    store
  }) {
    await store.dispatch("posts/nuxtServerInit");
  }

});
// CONCATENATED MODULE: ./pages/data/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_datavue_type_script_lang_js_ = (datavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/data/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(149)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_datavue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4f64a957",
  "2f1817c8"
  
)

/* harmony default export */ var data = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {DataTempSearch: __webpack_require__(125).default})


/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(148);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("17f9200e", content, true, context)
};

/***/ })

};;
//# sourceMappingURL=index.js.map