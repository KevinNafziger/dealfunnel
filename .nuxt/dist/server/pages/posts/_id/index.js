exports.ids = [12];
exports.modules = {

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(190);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("4d49d298", content, true, context)
};

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1f24a40d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(120);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1f24a40d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1f24a40d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1f24a40d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1f24a40d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@font-face{font-family:\"Cambria Math\";panose-1:2 4 5 3 5 4 6 3 2 4}@font-face{font-family:Calibri;panose-1:2 15 5 2 2 2 4 3 2 4}div.MsoNormal[data-v-1f24a40d],li.MsoNormal[data-v-1f24a40d],p.MsoNormal[data-v-1f24a40d]{margin:0 0 8pt;line-height:107%;font-size:11pt;font-family:\"Calibri\",sans-serif;color:#000}.MsoChpDefault[data-v-1f24a40d]{font-family:\"Calibri\",sans-serif}.MsoPapDefault[data-v-1f24a40d]{margin-bottom:8pt;line-height:107%}.WordSection1[data-v-1f24a40d]{size:8.5in 11in;margin:1in 76.85pt 1in 1in}div.WordSection1[data-v-1f24a40d]{page:WordSection1}@page WordSection2{size:8.5in 11in;margin:1in 76.85pt 1in 1in}div.WordSection2[data-v-1f24a40d]{page:WordSection2}.WordSection3[data-v-1f24a40d],div.WordSection3 @page WordSection4[data-v-1f24a40d]{size:8.5in 11in;margin:1in 76.85pt 1in 1in}div.WordSection4[data-v-1f24a40d]{page:WordSection4}@page WordSection5{size:8.5in 11in;margin:1in 76.85pt 1in 1in}div.WordSection5[data-v-1f24a40d]{page:WordSection5}@page WordSection6{size:8.5in 11in;margin:75.5pt 74.65pt 73.05pt 1in}div.WordSection6[data-v-1f24a40d]{page:WordSection6}@page WordSection7{size:8.5in 11in;margin:1in 1in 1in 1in}div.WordSection7[data-v-1f24a40d]{page:WordSection7}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/posts/_id/index.vue?vue&type=template&id=1f24a40d&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"WordSection1\" data-v-1f24a40d><p class=\"MsoNormal\" style=\"margin-top:0in;margin-right:0in;margin-bottom:0in;\\n    margin-left:.5pt;text-indent:-.5pt;line-height:109%\" data-v-1f24a40d><span style=\"font-size:\\n    22.0pt;line-height:109%\" data-v-1f24a40d></span></p></div> <span style=\"font-size:22.0pt;line-height:109%;font-family:\\\"Calibri\\\",sans-serif;\\ncolor:black\" data-v-1f24a40d><br clear=\"all\" style=\"page-break-before:auto\" data-v-1f24a40d></span> <div class=\"MsoNormal\" style=\"margin-right:5%;margin-bottom:15%;\\nmargin-left:5%;line-height:109%;\" data-v-1f24a40d><p class=\"MsoNormal\" style=\"margin-top:70px;margin-bottom:60px; text-indent:-.1pt;\\n  line-height:109%;\" data-v-1f24a40d><b data-v-1f24a40d>"+((!(_vm.post.title === undefined))?("<span style=\"line-height:109%; margin-left: 3%; font-size:16pt;\" data-v-1f24a40d>"+_vm._ssrEscape(_vm._s(_vm.post.title))+"</span>"):"<!---->")+"</b></p> <span style=\"display:inline-block;width:45%;text-align:center;float:left; margin:1%;\" data-v-1f24a40d><div data-v-1f24a40d>"+(_vm._s(_vm.firsthalf(_vm.post)))+"</div></span> <span style=\"display:inline-block;width:45%; text-align:center;float:right; margin:1%;\" data-v-1f24a40d><div data-v-1f24a40d>"+(_vm._s(_vm.partofsecond(_vm.post)))+"</div> "+((!(_vm.post.logo_url==null))?("<p class=\"MsoNormal\" style=\"margin-bottom:0in; margin-top:01in;\" data-v-1f24a40d><img width=\"261\" height=\"154\" id=\"Picture 389\""+(_vm._ssrAttr("src",_vm.post.logo_url))+" data-v-1f24a40d></p>"):"<!---->")+"</span></div> <section style=\"margin-bottom:100px;\" data-v-1f24a40d></section>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/posts/_id/index.vue?vue&type=template&id=1f24a40d&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/posts/_id/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  computed: { ...Object(external_vuex_["mapState"])({
      activeArtInfo: state => state.posts.activeArtInfo,
      activeView: state => state.posts.activeView,
      activeDataInfo: state => state.posts.activeDataInfo,
      allPosts: state => state.posts.allPosts
    }),

    posts() {
      if (this.allPosts) {
        return this.allPosts;
      } else if (this.activeView == "Data") {
        return this.activeDataInfo;
      } else {
        return this.activeArtInfo;
      }
    },

    post() {
      return this.posts.find(p => p.id == this.$route.params.id);
    }

  },
  methods: {
    firsthalf(item) {
      var added_string = this.secondhalf(item).indexOf('/p>');
      return item.blog_entry.slice(0, item.blog_entry.length / 2 + added_string + 3);
    },

    secondhalf(tree) {
      return tree.blog_entry.slice(tree.blog_entry.length / 2, tree.blog_entry.length);
    },

    partofsecond(tree) {
      var added_string = this.secondhalf(tree).indexOf('/p>');
      return tree.blog_entry.slice(tree.blog_entry.length / 2 + added_string + 4, tree.blog_entry.length);
    }

  }
});
// CONCATENATED MODULE: ./pages/posts/_id/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var posts_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/posts/_id/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(189)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  posts_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1f24a40d",
  "5023a0bc"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map