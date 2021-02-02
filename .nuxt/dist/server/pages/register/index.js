exports.ids = [15];
exports.modules = {

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(176);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("68638dcf", content, true, context)
};

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(113);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "form{margin:auto;max-width:700px;display:grid}h3{text-align:center;margin:20px}label,md-button{margin-top:20px!important;margin-bottom:20px!important}.md-button{background-color:#00f}button.btn.btn-large.btn-extended.grey.lighten-4.black-text{box-shadow:0 0 9px -5px grey}.login{display:grid}.md-button{background-color:#4f81bd;color:#fff}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/register/index.vue?vue&type=template&id=82113712&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"md-layout md-alignment-center-center",staticStyle:{"height":"100vh"}},[_c('md-card',{staticClass:"md-layout-item md-size-50"},[_c('form',{on:{"submit":function($event){$event.preventDefault();return _vm.registerUser($event)}}},[_c('md-card-header',[_c('h3',[_vm._v("Register")])]),_vm._v(" "),_c('md-card-content',[_c('label',{directives:[{name:"show",rawName:"v-show",value:(!(_vm.errorMsg =='')),expression:"!(errorMsg =='')"}],staticStyle:{"color":"red"}},[_vm._v("\n          "+_vm._s(_vm.errorMsg)+" "),_c('br')]),_vm._v(" "),_c('md-field',{attrs:{"md-clearable":""}},[_c('span',{staticClass:"mdi mdi-email"}),_vm._v(" "),_c('md-input',{attrs:{"type":"email","name":"email","id":"email","autocomplete":"email"},model:{value:(_vm.email),callback:function ($$v) {_vm.email=$$v},expression:"email"}})],1),_vm._v(" "),_c('md-field',[_c('span',{staticClass:"mdi mdi-key"}),_vm._v(" "),_c('md-input',{attrs:{"type":"password","name":"password","id":"password","autocomplete":"password"},model:{value:(_vm.password),callback:function ($$v) {_vm.password=$$v},expression:"password"}})],1)],1),_vm._v(" "),_c('md-card-actions',[_c('md-button',{attrs:{"to":"/login"}},[_vm._v("Go to Login")]),_vm._v(" "),_c('md-button',{staticClass:"md-primary md-raised",attrs:{"type":"submit"}},[_vm._v("Submit")])],1)],1)])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/register/index.vue?vue&type=template&id=82113712&

// EXTERNAL MODULE: external "vuefire"
var external_vuefire_ = __webpack_require__(18);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "firebase/app"
var app_ = __webpack_require__(9);
var app_default = /*#__PURE__*/__webpack_require__.n(app_);

// EXTERNAL MODULE: external "firebase/auth"
var auth_ = __webpack_require__(84);

// EXTERNAL MODULE: external "firebase/firestore"
var firestore_ = __webpack_require__(37);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/register/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





external_vue_default.a.use(external_vuefire_["firestorePlugin"]);
/* harmony default export */ var registervue_type_script_lang_js_ = ({
  data: () => ({
    email: "",
    password: "",
    errorMsg: ''
  }),
  methods: {
    async registerUser(e) {
      app_default.a.auth().createUserWithEmailAndPassword(this.email, this.password).then(response => {
        this.$store.dispatch("auth/setEmail", response.user.email);
        this.$router.push('/posts');
      }, err => {
        this.errorMsg = err.message;
      });
      e.preventDefault();
    }

  }
});
// CONCATENATED MODULE: ./pages/register/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_registervue_type_script_lang_js_ = (registervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/register/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(175)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_registervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "5036cc55"
  
)

/* harmony default export */ var register = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map