exports.ids = [8];
exports.modules = {

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/logout/index.vue?vue&type=template&id=147bd382&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col s12 m8 offset-m2\">","</div>",[_vm._ssrNode("<br><br> "),_c('center',[_c('p',[_vm._v("Thank you for reading "),_c('i',[_vm._v("DealFunnel")]),_vm._v(".")])])],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/logout/index.vue?vue&type=template&id=147bd382&

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

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/logout/index.vue?vue&type=script&lang=js&
//
//
//
//
//
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
/* harmony default export */ var logoutvue_type_script_lang_js_ = ({
  name: 'logout',

  created() {
    external_firebase_default.a.auth().signOut();
    this.$store.dispatch("auth/logOut");
  }

});
// CONCATENATED MODULE: ./pages/logout/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_logoutvue_type_script_lang_js_ = (logoutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/logout/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_logoutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4f2c283c"
  
)

/* harmony default export */ var logout = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map