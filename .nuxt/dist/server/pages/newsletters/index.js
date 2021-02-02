exports.ids = [11];
exports.modules = {

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(158);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("1d1cc15c", content, true, context)
};

/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(160);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("43d02246", content, true, context)
};

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Letters/LettersList.vue?vue&type=template&id=1ba500c8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"main"}},[_vm._ssrNode("<ol data-v-1ba500c8>","</ol>",_vm._l((_vm.letters),function(letter){return _vm._ssrNode("<ul class=\"art-rows\" data-v-1ba500c8>","</ul>",[_vm._ssrNode("<div class=\"w-dyn-list\" data-v-1ba500c8>","</div>",[_vm._ssrNode("<div class=\"article-card\" style=\"margin:10px;\" data-v-1ba500c8>","</div>",[_vm._ssrNode("<div class=\"w-dyn-items\" data-v-1ba500c8>","</div>",[_vm._ssrNode("<div class=\"w-dyn-item\" data-v-1ba500c8>","</div>",[_vm._ssrNode("<div class=\"post-wrapper\" data-v-1ba500c8>","</div>",[_vm._ssrNode("<div class=\"post-content\" data-v-1ba500c8>","</div>",[_vm._ssrNode("<div class=\"post-info\" data-v-1ba500c8>","</div>",[_vm._ssrNode(((!(letter.created_date==null))?("<div class=\"post-info\" style=\"float:left;z-index:9;\" data-v-1ba500c8><a class=\"datetag\" data-v-1ba500c8>"+_vm._ssrEscape(_vm._s(letter.created_date))+"</a></div>"):"<!---->")+" "+((!(letter.logo_url==null))?("<div class=\"flex-img\" data-v-1ba500c8><div class=\"centering-imgs w-col w-col-6 w-col-medium-6 w6-hide-tiny\" data-v-1ba500c8><a class=\"blog-image w-inline-block\" data-v-1ba500c8><img"+(_vm._ssrAttr("src",letter.logo_url))+" width=\"70\" style=\"max-width: 180px ;max-height:130; overflow:none;\" data-v-1ba500c8></a></div></div>"):"<!---->")+" <br data-v-1ba500c8> "),_vm._ssrNode("<div class=\"w-row\" data-v-1ba500c8>","</div>",[_vm._ssrNode("<div class=\"w-col w-col-12 w-col-medium-12 w12-hide-tiny\" data-v-1ba500c8>","</div>",[_vm._ssrNode("<span class=\"post-main-text\" style=\"overflow:auto;\" data-v-1ba500c8>","</span>",[_vm._ssrNode("<b data-v-1ba500c8>:</b><br data-v-1ba500c8>"),_vm._ssrNode("<b data-v-1ba500c8>","</b>",[_c('nuxt-link',{staticClass:"mdi mdi-book-open mdi-18px",attrs:{"id":"myArticleLinkTag","to":'/newsletters/' + letter.id}})],1),_vm._ssrNode(",\n\n                       <div class=\"summary\" style=\"overflow:auto; margin:5px;\" data-v-1ba500c8>"+(_vm._s(_vm.letterPreview(letter)))+"</div> <br data-v-1ba500c8>")],2)])])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"center-btn\" data-v-1ba500c8>","</div>",[_c('nuxt-link',{staticClass:"gardient-button",attrs:{"to":'/newsletters/' + letter.id}},[_vm._v(" Read More")])],1)],2)])])])])])])}),0)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Letters/LettersList.vue?vue&type=template&id=1ba500c8&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Letters/LettersList.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var LettersListvue_type_script_lang_js_ = ({
  name: 'LettersList',
  props: ["letters", "board"],
  computed: { ...Object(external_vuex_["mapState"])({})
  },
  methods: {
    idlists: function (post_id) {
      for (var i = 0; i < this.board.length; i++) {
        if (this.board[i] == post_id) return post_id;
      }

      return 0;
    },

    letterPreview(item) {
      return item.blog_entry.slice(0, item.blog_entry.length / 17);
    },

    lettersFilter: function (letters) {
      return this.letters.filter(letter => letter.id == this.idlists(letter.id));
    }
  }
});
// CONCATENATED MODULE: ./components/Letters/LettersList.vue?vue&type=script&lang=js&
 /* harmony default export */ var Letters_LettersListvue_type_script_lang_js_ = (LettersListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Letters/LettersList.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(157)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Letters_LettersListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1ba500c8",
  "a6b71358"
  
)

/* harmony default export */ var LettersList = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LettersList_vue_vue_type_style_index_0_id_1ba500c8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(104);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LettersList_vue_vue_type_style_index_0_id_1ba500c8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LettersList_vue_vue_type_style_index_0_id_1ba500c8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LettersList_vue_vue_type_style_index_0_id_1ba500c8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LettersList_vue_vue_type_style_index_0_id_1ba500c8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".summary[data-v-1ba500c8]{overflow:auto;height:350px}.w-dyn-list[data-v-1ba500c8]{display:inline-table}.gardient-button[data-v-1ba500c8]{background-image:linear-gradient(200deg,#03a9f4 10%,#4f81bd 39%,#2196f3 80%);background-size:400% 400%!important;-webkit-animation:gradient 15s ease infinite!important;animation:gradient 15s ease infinite!important;width:-webkit-fit-content!important;width:-moz-fit-content!important;width:fit-content!important;margin-left:auto!important;margin-right:auto!important;margin-bottom:20px!important;border-radius:10px!important;border:none!important;padding:10px 20px!important;font-family:poppins!important;color:#fff!important;font-size:12px!important;height:-webkit-min-content;height:-moz-min-content;height:min-content}.gardient-button[data-v-1ba500c8]:hover{box-shadow:0 0 10px -5px grey!important;transition:.2s;text-decoration:none}.center-btn[data-v-1ba500c8]{text-align:-webkit-center;display:flex}.w-col.w-col-12.w-col-medium-12.w12-hide-tiny[data-v-1ba500c8]{width:100%!important;padding:20px}a[data-v-1ba500c8]{color:#4f81bd;font-weight:700;text-decoration:none}#myWebLinkTag[data-v-1ba500c8]{display:table!important;margin-top:10px}@media screen and (max-width:1550px){.post-main-text[data-v-1ba500c8]{overflow:auto}}.art-rows[data-v-1ba500c8]{display:-webkit-inline-box;width:50%;padding:10px;align-content:center;justify-content:center;place-content:center}.div-mobile-col[data-v-1ba500c8]{padding:0}.post-main-text[data-v-1ba500c8]{height:auto;min-height:400px;border-bottom-style:groove;border-bottom-color:rgba(210,232,255,.12157);overflow:auto;width:100%;padding:20px}table[data-v-1ba500c8]{width:100%}.exec-image-posts[data-v-1ba500c8]{height:100px;margin-left:0!important;margin-right:0!important;margin-top:20px!important}.flex-img[data-v-1ba500c8]{display:contents;width:200px}.centering-imgs[data-v-1ba500c8]{text-align:center!important;margin:20px -60px 20px auto;display:grid}.postAdmin-btns[data-v-1ba500c8]{margin:10px 0;display:revert;border-bottom-style:groove;border-bottom-color:rgba(210,232,255,.12157)}.w3-teal[data-v-1ba500c8]{margin-top:20px!important}.post-summary-wrapper[data-v-1ba500c8]{height:400!important;overflow:auto}.blog-title[data-v-1ba500c8]{font-size:20px!important}.blog-title-link[data-v-1ba500c8]{color:#004f96}.readmore[data-v-1ba500c8]:hover{background:rgba(20,160,253,.82)!important;color:#fff!important}.extra-details p[data-v-1ba500c8]{font-feature-settings:\"kern\" off!important;font-variant:none!important}.readmore[data-v-1ba500c8]{border:solid #2fb7ff;border-radius:3px}.alert-notice[data-v-1ba500c8]{line-height:2.2em;color:red;margin-top:8vw}.w-col-medium-3[data-v-1ba500c8]{text-align:left}img.in-your-face[data-v-1ba500c8]{width:50px;margin:auto}.w-col-w-col-9[data-v-1ba500c8]{text-align:left}.featuredsidemenu[data-v-1ba500c8]{padding:30px}.w-col.w-col-12.w-col-medium-12.w12-hide-tiny[data-v-1ba500c8]{color:#696969}.post-info[data-v-1ba500c8]{margin-top:10px}.article-card[data-v-1ba500c8]{box-shadow:0 1px 5px 0 rgb(0 89 132/30%);border-radius:0;height:auto;background:#fff!important;min-height:625px;width:100%;padding:2px;margin-left:auto!important;margin-right:auto!important;margin-bottom:32px!important;background-color:hsla(0,0%,87.1%,0)}.article-card[data-v-1ba500c8]:hover{box-shadow:0 1px 5px 0 rgba(0,89,132,.16)}.article-card .w-col-9[data-v-1ba500c8]{text-align:left;width:100%}.details-wrapper[data-v-1ba500c8]{margin-top:8px;height:200px}tr[data-v-1ba500c8]{text-align:left!important;vertical-align:text-top;-moz-text-align-last:left!important;text-align-last:left!important;font-style:italic;font-family:arabic script}ol[data-v-1ba500c8],td[data-v-1ba500c8],tr[data-v-1ba500c8],ul[data-v-1ba500c8]{text-transform:none!important}*[data-v-1ba500c8]{-webkit-text-size-adjust:none;-webkit-text-resize:100%;text-resize:100%}table[data-v-1ba500c8]{border-spacing:0;border-collapse:collapse!important}h1[data-v-1ba500c8],h2[data-v-1ba500c8],h3[data-v-1ba500c8],h4[data-v-1ba500c8],h5[data-v-1ba500c8],h6[data-v-1ba500c8]{display:block;margin:0;padding:0}a img[data-v-1ba500c8],img[data-v-1ba500c8]{border:0;height:auto;line-height:100%;outline:none;text-decoration:none}#bodyCell[data-v-1ba500c8],#bodyTable[data-v-1ba500c8],body[data-v-1ba500c8]{height:100%!important;margin:0;padding:0;width:100%!important}@-ms-viewport{width:device-width}table[data-v-1ba500c8]{mso-table-lspace:0;mso-table-rspace:0}a[data-v-1ba500c8],blockquote[data-v-1ba500c8],li[data-v-1ba500c8],p[data-v-1ba500c8],td[data-v-1ba500c8]{mso-line-height-rule:exactly}a[data-v-1ba500c8],blockquote[data-v-1ba500c8],body[data-v-1ba500c8],li[data-v-1ba500c8],p[data-v-1ba500c8],table[data-v-1ba500c8],td[data-v-1ba500c8]{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}#outlook a[data-v-1ba500c8]{padding:0}.ExternalClass[data-v-1ba500c8],.ReadMsgBody[data-v-1ba500c8]{width:100%}.ExternalClass[data-v-1ba500c8],.ExternalClass div[data-v-1ba500c8],.ExternalClass font[data-v-1ba500c8],.ExternalClass p[data-v-1ba500c8],.ExternalClass span[data-v-1ba500c8],.ExternalClass td[data-v-1ba500c8],img[data-v-1ba500c8]{line-height:100%}[style*=\"Open Sans\"][data-v-1ba500c8]{font-family:\"Open Sans\",Helvetica,Arial,sans-serif!important}[style*=Lora][data-v-1ba500c8]{font-family:\"Lora\",Georgia,Times,serif!important}.wrapperTable[data-v-1ba500c8]{width:100%;max-width:620px;margin:0 auto}@media only screen and (min-device-width:601px){.content[data-v-1ba500c8]{width:100%!important}}table[class=wrapperTable][data-v-1ba500c8]{width:100%!important}table[class=wrapperPreHeader] .hide[data-v-1ba500c8]{display:none!important}div[class=maxWidth][data-v-1ba500c8],img[class=maxWidth][data-v-1ba500c8],td[class=maxWidth][data-v-1ba500c8]{max-width:100%!important}img[data-v-1ba500c8]{max-width:100%;height:auto;max-height:200px}.icon-circle[data-v-1ba500c8]{display:block;width:90px;height:90px;margin-right:auto;margin-bottom:20px;margin-left:auto;border-radius:100%;background-color:#4253ff}.card[data-v-1ba500c8]{background:#fcfeff;border-radius:20px}.container[data-v-1ba500c8]{display:contents}.records[data-v-1ba500c8]{width:95%;margin-left:auto;margin-right:auto}.link[data-v-1ba500c8]{color:#fff!important;border-radius:10px;padding:5px;margin-top:10%;margin-bottom:10%}.link[data-v-1ba500c8],.link[data-v-1ba500c8]:hover{background:#24a7ff!important}.table[data-v-1ba500c8]{width:100%!important}.table[data-v-1ba500c8],.td[data-v-1ba500c8]{text-align:left!important}.w-dyn-list[data-v-1ba500c8]{width:100%!important;display:block}.datetag[data-v-1ba500c8]{position:relative!important;width:auto;margin-top:-5px;display:block;padding:3px;border-radius:3px;background:hsla(0,0%,100%,.50196)}@media screen and (max-width:900px){.art-rows[data-v-1ba500c8]{display:contents;height:auto!important;min-height:300px!important}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_61cdb9c8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(105);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_61cdb9c8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_61cdb9c8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_61cdb9c8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_61cdb9c8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".art-rows[data-v-61cdb9c8]{display:inline-flex!important}@font-face{font-family:\"Cambria Math\";panose-1:2 4 5 3 5 4 6 3 2 4}@font-face{font-family:Calibri;panose-1:2 15 5 2 2 2 4 3 2 4}div.MsoNormal[data-v-61cdb9c8],li.MsoNormal[data-v-61cdb9c8],p.MsoNormal[data-v-61cdb9c8]{margin:0 0 8pt;line-height:107%;font-size:11pt;font-family:\"Calibri\",sans-serif;color:#000}.MsoChpDefault[data-v-61cdb9c8]{font-family:\"Calibri\",sans-serif}.MsoPapDefault[data-v-61cdb9c8]{margin-bottom:8pt;line-height:107%}.WordSection1[data-v-61cdb9c8]{size:8.5in 11in;margin:1in 76.85pt 1in 1in}div.WordSection1[data-v-61cdb9c8]{page:WordSection1}@page WordSection2{size:8.5in 11in;margin:1in 76.85pt 1in 1in}div.WordSection2[data-v-61cdb9c8]{page:WordSection2}.WordSection3[data-v-61cdb9c8],div.WordSection3 @page WordSection4[data-v-61cdb9c8]{size:8.5in 11in;margin:1in 76.85pt 1in 1in}div.WordSection4[data-v-61cdb9c8]{page:WordSection4}@page WordSection5{size:8.5in 11in;margin:1in 76.85pt 1in 1in}div.WordSection5[data-v-61cdb9c8]{page:WordSection5}@page WordSection6{size:8.5in 11in;margin:75.5pt 74.65pt 73.05pt 1in}div.WordSection6[data-v-61cdb9c8]{page:WordSection6}@page WordSection7{size:8.5in 11in;margin:1in 1in 1in 1in}div.WordSection7[data-v-61cdb9c8]{page:WordSection7}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/newsletters/index.vue?vue&type=template&id=61cdb9c8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"padding-top":"20px"}},[_vm._ssrNode("<div data-v-31683ab5 data-v-50f93fd9 data-v-61cdb9c8><div data-v-31683ab5 data-v-50f93fd9 class=\"content\" data-v-61cdb9c8><br data-v-31683ab5 data-v-50f93fd9 data-v-61cdb9c8> <h2 data-v-31683ab5 data-v-50f93fd9 data-v-61cdb9c8>Newsletters</h2></div></div> "),_vm._ssrNode("<div class=\"posts-page\" data-v-61cdb9c8>","</div>",[_c('LettersList',{attrs:{"letters":_vm.letters,"board":_vm.letters}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/newsletters/index.vue?vue&type=template&id=61cdb9c8&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: ./components/Letters/LettersList.vue + 4 modules
var LettersList = __webpack_require__(128);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/newsletters/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var newslettersvue_type_script_lang_js_ = ({
  computed: { ...Object(external_vuex_["mapState"])({
      allLetters: state => state.posts.newsletters
    }),

    letters() {
      return this.allLetters;
    },

    letter() {
      return this.letters.find(l => l.id == this.$route.params.id);
    }

  },

  async fetch({
    store
  }) {
    store.dispatch("posts/setView", "Newsletters");
    await store.dispatch("posts/setNewsletters");
  }

});
// CONCATENATED MODULE: ./pages/newsletters/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_newslettersvue_type_script_lang_js_ = (newslettersvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/newsletters/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(159)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_newslettersvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "61cdb9c8",
  "7b58d084"
  
)

/* harmony default export */ var newsletters = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LettersList: __webpack_require__(128).default})


/***/ })

};;
//# sourceMappingURL=index.js.map