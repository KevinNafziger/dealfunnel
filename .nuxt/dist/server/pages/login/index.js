exports.ids = [7];
exports.modules = {

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(152);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("0acbb913", content, true, context)
};

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(101);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".btn{background:#4f81bd;color:#fff}input{width:95%;height:40px!important}form{margin:auto;width:100%;display:grid}h3{text-align:center;margin:20px}label,md-button{margin-top:20px!important;margin-bottom:20px!important}.md-card{background:#fff}.md-button{background-color:#00f;color:#fff!important;text-decoration:none!important}button.btn.btn-large.btn-extended.grey.lighten-4.black-text{box-shadow:0 0 9px -5px grey}.login{display:grid}.md-button{background-color:#4f81bd;color:#fff}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=template&id=a4098418&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"md-layout md-alignment-center-center",staticStyle:{"height":"100vh"}},[_c('md-card',{staticClass:"md-layout-item md-size-50"},[_c('div',{staticClass:"col s12 m8 offset-m2"},[_c('div',{staticClass:"login card-panel green white-text center"},[_c('form',{attrs:{"action":"index.html"}},[_c('h3',[_vm._v("Login")]),_c('br'),_vm._v(" "),(!(_vm.errorMsg == ''))?_c('div',[_c('label',{staticClass:"red-text"},[_vm._v(_vm._s(_vm.errorMsg)+"\n            ")])]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"input-field"},[_c('span',{staticClass:"mdi mdi-email"}),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.email),expression:"email"}],attrs:{"type":"email","id":"email"},domProps:{"value":(_vm.email)},on:{"input":function($event){if($event.target.composing){ return; }_vm.email=$event.target.value}}}),_c('br')]),_c('br'),_c('br'),_vm._v(" "),_c('div',{staticClass:"input-field"},[_c('span',{staticClass:"mdi mdi-key"}),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.password),expression:"password"}],attrs:{"type":"password","id":"password"},domProps:{"value":(_vm.password)},on:{"input":function($event){if($event.target.composing){ return; }_vm.password=$event.target.value}}}),_c('br')]),_c('br'),_c('br'),_vm._v(" "),_c('button',{staticClass:"btn btn-large btn-extended grey lighten-4 black-text",on:{"click":_vm.login}},[_vm._v("Login")])])])])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=template&id=a4098418&

// EXTERNAL MODULE: external "firebase"
var external_firebase_ = __webpack_require__(85);
var external_firebase_default = /*#__PURE__*/__webpack_require__.n(external_firebase_);

// EXTERNAL MODULE: external "vuefire"
var external_vuefire_ = __webpack_require__(18);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "firebase/auth"
var auth_ = __webpack_require__(84);

// EXTERNAL MODULE: external "firebase/firestore"
var firestore_ = __webpack_require__(37);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
/* harmony default export */ var loginvue_type_script_lang_js_ = ({
  name: 'login',
  data: function () {
    return {
      email: '',
      password: '',
      errorMsg: ''
    };
  },
  methods: {
    login: function (e) {
      external_firebase_default.a.auth().signInWithEmailAndPassword(this.email, this.password).then(response => {
        this.$store.dispatch("auth/setEmail", response.user.email);
        this.$router.push('/posts');
      }, err => {
        this.errorMsg = err.message;
      });
      e.preventDefault();
    }
  }
});
// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/login/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(151)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "d8b30f66"
  
)

/* harmony default export */ var login = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map