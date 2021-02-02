exports.ids = [13];
exports.modules = {

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(162);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("fec336e8", content, true, context)
};

/***/ }),

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(164);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("87cf3e88", content, true, context)
};

/***/ }),

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(166);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("45116e06", content, true, context)
};

/***/ }),

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(168);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("778d9c1a", content, true, context)
};

/***/ }),

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(170);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("6f79377f", content, true, context)
};

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Posts/PostTempSearch.vue?vue&type=template&id=512b78f7&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('client-only',[_c('div',{staticClass:"search-bar-div"},[_c('div',{staticClass:"search-div"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.searchMessage),expression:"searchMessage"}],staticClass:"text-field w-input w-col w-col-6",staticStyle:{"margin-right":"10px"},attrs:{"type":"text","name":"term","id":"term","width":"100%","placeholder":"search  content"},domProps:{"value":(_vm.searchMessage)},on:{"input":function($event){if($event.target.composing){ return; }_vm.searchMessage=$event.target.value}}}),_vm._v(" "),_c('button',{staticClass:"gardient-button",staticStyle:{"margin-left":"1px","margin-top":"5px","margin-bottom":"10px"},attrs:{"id":"section-10"},on:{"click":function($event){return _vm.submitSearch(_vm.searchMessage)}}},[_c('i',{staticClass:"glyphicon glyphicon-search"},[_c('span',{staticClass:"mdi mdi-file-search"})])])]),_vm._v(" "),_c('div',{staticClass:"tag-search-div"},[_c('a',{staticClass:"tagbtn",attrs:{"href":"#"},on:{"click":function($event){return _vm.changePage('Last')}}},[_vm._v("all")]),_vm._v(" "),_c('a',{staticClass:"tagbtn",attrs:{"href":"#"},on:{"click":function($event){return _vm.showGrouping('Payments')}}},[_vm._v("payments")]),_vm._v(" "),_c('a',{staticClass:"tagbtn",attrs:{"href":"#"},on:{"click":function($event){return _vm.showGrouping('Insurtech')}}},[_vm._v("insurtech")]),_vm._v(" "),_c('a',{staticClass:"tagbtn",attrs:{"href":"#"},on:{"click":function($event){return _vm.showGrouping('Lending')}}},[_vm._v("lending")]),_vm._v(" "),_c('a',{staticClass:"tagbtn",attrs:{"href":"#"},on:{"click":function($event){return _vm.showGrouping('Banking')}}},[_vm._v("banking")]),_vm._v(" "),_c('a',{staticClass:"tagbtn",attrs:{"href":"#"},on:{"click":function($event){return _vm.showGrouping('Blockchain')}}},[_vm._v("blockchain")]),_vm._v(" "),_c('a',{staticClass:"tagbtn",attrs:{"href":"#"},on:{"click":function($event){return _vm.showGrouping('AI')}}},[_vm._v("AI")]),_vm._v(" "),_c('a',{directives:[{name:"show",rawName:"v-show",value:(_vm.showPreviousBtn),expression:"showPreviousBtn"}],staticClass:"tagbtn",attrs:{"href":"#"},on:{"click":function($event){return _vm.changePage('Previous')}}},[_vm._v("Prev")]),_vm._v(" "),_c('a',{directives:[{name:"show",rawName:"v-show",value:(_vm.showNextBtn),expression:"showNextBtn"}],staticClass:"tagbtn",attrs:{"href":"#"},on:{"click":function($event){return _vm.changePage('Next')}}},[_vm._v("Next")]),_vm._v(" "),_c('a',{directives:[{name:"show",rawName:"v-show",value:(_vm.showPrevInsBtn),expression:"showPrevInsBtn"}],staticClass:"tagbtn",attrs:{"href":"#"},on:{"click":function($event){return _vm.changeInsur('Previous')}}},[_vm._v("Prev")]),_vm._v(" "),_c('a',{directives:[{name:"show",rawName:"v-show",value:(_vm.showNextInsBtn),expression:"showNextInsBtn"}],staticClass:"tagbtn",attrs:{"href":"#"},on:{"click":function($event){return _vm.changeInsur('Next')}}},[_vm._v("Next")]),_vm._v(" "),_c('a',{directives:[{name:"show",rawName:"v-show",value:(_vm.showPrevBnkBtn),expression:"showPrevBnkBtn"}],staticClass:"tagbtn",attrs:{"href":"#"},on:{"click":function($event){return _vm.changeBank('Previous')}}},[_vm._v("Prev")]),_vm._v(" "),_c('a',{directives:[{name:"show",rawName:"v-show",value:(_vm.showNextBnkBtn),expression:"showNextBnkBtn"}],staticClass:"tagbtn",attrs:{"href":"#"},on:{"click":function($event){return _vm.changeBank('Next')}}},[_vm._v("Next")]),_vm._v(" "),_c('a',{directives:[{name:"show",rawName:"v-show",value:(_vm.showPrevBlkBtn),expression:"showPrevBlkBtn"}],staticClass:"tagbtn",attrs:{"href":"#"},on:{"click":function($event){return _vm.changeBlock('Previous')}}},[_vm._v("Prev")]),_vm._v(" "),_c('a',{directives:[{name:"show",rawName:"v-show",value:(_vm.showNextBlkBtn),expression:"showNextBlkBtn"}],staticClass:"tagbtn",attrs:{"href":"#"},on:{"click":function($event){return _vm.changeBlock('Next')}}},[_vm._v("Next")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('a',{staticClass:"tagbtn",attrs:{"href":"#"},on:{"click":function($event){return _vm.showGrouping('RegTech')}}},[_vm._v("regtech")]),_vm._v(" "),_c('a',{staticClass:"tagbtn",attrs:{"href":"#"},on:{"click":function($event){return _vm.showGrouping('HealthTech')}}},[_vm._v("healthtech")]),_vm._v(" "),_c('a',{staticClass:"tagbtn",attrs:{"href":"#"},on:{"click":function($event){return _vm.showGrouping('CapitalMarkets')}}},[_vm._v("capitalmarkets")]),_vm._v(" "),_c('a',{staticClass:"tagbtn",attrs:{"href":"#"},on:{"click":function($event){return _vm.showGrouping('WealthTech')}}},[_vm._v("wealthtech")]),_vm._v(" "),_c('a',{staticClass:"tagbtn",attrs:{"href":"#"},on:{"click":function($event){return _vm.showGrouping('RealEstate')}}},[_vm._v("realestate")]),_c('br'),_vm._v(" "),_c('a',{staticClass:"tagbtn",attrs:{"href":"#"},on:{"click":function($event){return _vm.showGrouping('Growth')}}},[_vm._v("growth equity")]),_vm._v(" "),_c('a',{staticClass:"tagbtn",attrs:{"href":"#"},on:{"click":function($event){return _vm.showGrouping('Mergers')}}},[_vm._v("M&A")]),_vm._v(" "),_c('a',{staticClass:"tagbtn",attrs:{"href":"#"},on:{"click":function($event){return _vm.showGrouping('Spin')}}},[_vm._v("spin-offs")]),_vm._v(" "),_c('a',{staticClass:"tagbtn",attrs:{"href":"#"},on:{"click":function($event){return _vm.showGrouping('Val')}}},[_vm._v("valuation")]),_vm._v(" "),_c('a',{staticClass:"tagbtn",attrs:{"href":"#"},on:{"click":function($event){return _vm.showGrouping('Boot')}}},[_vm._v("bootstrapped")]),_vm._v(" "),_c('a',{staticClass:"tagbtn",attrs:{"href":"#"},on:{"click":function($event){return _vm.showGrouping('Advisors')}}},[_vm._v("advisors")])])])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Posts/PostTempSearch.vue?vue&type=template&id=512b78f7&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Posts/PostTempSearch.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/* harmony default export */ var PostTempSearchvue_type_script_lang_js_ = ({
  name: 'PostTempSearch',

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
    },
    changeInsur: function (direction) {
      $nuxt.$emit("changeInsur", direction);
    },
    changeBank: function (direction) {
      $nuxt.$emit("changeBank", direction);
    },
    changeBlock: function (direction) {
      $nuxt.$emit("changeBlock", direction);
    }
  },
  computed: { ...Object(external_vuex_["mapState"])({
      numPage: state => state.posts.numArtPage,
      activeTab: state => state.posts.activeArtTab,
      bnkPage: state => state.posts.bnkArtPage,
      blkPage: state => state.posts.blkArtPage,
      insPage: state => state.posts.insArtPage
    }),

    showPreviousBtn() {
      if (this.numPage >= 2 && (this.activeTab == 'Page' || this.activeTab == 'All')) {
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
      if (this.insPage < 5 && this.activeTab == 'Insurtech') {
        return true;
      } else {
        return false;
      }
    },

    showPrevBnkBtn() {
      if (this.bnkPage >= 2 && this.activeTab == 'Banking') {
        return true;
      } else {
        return false;
      }
    },

    showNextBnkBtn() {
      if (this.bnkPage < 3 && this.activeTab == 'Banking') {
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
      if (this.blkPage <= 5 && this.activeTab == 'Blockchain') {
        return true;
      } else {
        return false;
      }
    }

  }
});
// CONCATENATED MODULE: ./components/Posts/PostTempSearch.vue?vue&type=script&lang=js&
 /* harmony default export */ var Posts_PostTempSearchvue_type_script_lang_js_ = (PostTempSearchvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Posts/PostTempSearch.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(161)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Posts_PostTempSearchvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "512b78f7",
  "3c330f1d"
  
)

/* harmony default export */ var PostTempSearch = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Posts/PostList.vue?vue&type=template&id=03798d74&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"main"}},[_vm._ssrNode("<ol data-v-03798d74>","</ol>",_vm._l((_vm.posts),function(post){return _vm._ssrNode("<ul class=\"art-rows\" data-v-03798d74>","</ul>",[_vm._ssrNode("<div class=\"w-dyn-list\" data-v-03798d74>","</div>",[_vm._ssrNode("<div class=\"article-card\" style=\"margin:10px;\" data-v-03798d74>","</div>",[_vm._ssrNode("<div class=\"coolbar\" style=\"height:1px;margin-left:auto;margin-right:auto;margin-top:20px;\" data-v-03798d74></div> "),_vm._ssrNode("<div class=\"w-dyn-items\" data-v-03798d74>","</div>",[_vm._ssrNode("<div class=\"w-dyn-item\" data-v-03798d74>","</div>",[_vm._ssrNode("<div class=\"post-wrapper\" data-v-03798d74>","</div>",[_vm._ssrNode("<div class=\"post-content\" data-v-03798d74>","</div>",[_vm._ssrNode("<br data-v-03798d74><br data-v-03798d74> "),_vm._ssrNode("<div class=\"post-info\" data-v-03798d74>","</div>",[_vm._ssrNode(((!(post.created_date==null))?("<div class=\"post-info\" style=\"float:left;\" data-v-03798d74><a class=\"datetag\" data-v-03798d74>"+_vm._ssrEscape(_vm._s(post.created_date))+"</a></div>"):"<!---->")+" "),_vm._ssrNode("<div class=\"w-row\" data-v-03798d74>","</div>",[_vm._ssrNode(((!(post.logo_url==null))?("<div class=\"flex-img\" data-v-03798d74><div class=\"centering-imgs w-col w-col-6 w-col-medium-6 w6-hide-tiny\" data-v-03798d74><a class=\"blog-image w-inline-block\" data-v-03798d74><img"+(_vm._ssrAttr("src",post.logo_url))+" width=\"180\" style=\"max-width: 180px ;max-height:130; overflow:none;\" data-v-03798d74></a></div></div>"):"<!---->")+" "),_vm._ssrNode("<div class=\"w-col w-col-12 w-col-medium-12 w12-hide-tiny\" data-v-03798d74>","</div>",[_vm._ssrNode("<div data-v-03798d74>","</div>",[_vm._ssrNode("<span class=\"post-main-text\" style=\"text-transform:none !important;\" data-v-03798d74>","</span>",[_vm._ssrNode("<b data-v-03798d74>Most Recent Coverage:</b><br data-v-03798d74>"),_vm._ssrNode("<b data-v-03798d74>","</b>",[_c('nuxt-link',{staticClass:"mdi mdi-book-open mdi-18px",attrs:{"id":"myArticleLinkTag","to":'/posts/' + post.id}},[_vm._v(_vm._s(post.teaser))])],1),_vm._ssrNode(",\n\n                       <div class=\"sumary\" data-v-03798d74>"+_vm._ssrEscape(" "+_vm._s(post.summary)+" ")+"</div> <br data-v-03798d74> "+((_vm.activeTab=='Advisors')?("<div data-v-03798d74><b data-v-03798d74>Advisors:</b>"+_vm._ssrEscape(" "+_vm._s(post.advisors)+"\n                      ")+"<br data-v-03798d74><br data-v-03798d74></div>"):"<!---->")+" <br data-v-03798d74><br data-v-03798d74><br data-v-03798d74> "),_vm._ssrNode("<div class=\"center-btn\" data-v-03798d74>","</div>",[_c('nuxt-link',{staticClass:"gardient-button",attrs:{"to":'/posts/' + post.id}},[_vm._v(" Read More")])],1),_vm._ssrNode(" <br data-v-03798d74>")],2)])])],2)],2)],2)])])])],2)])])}),0)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Posts/PostList.vue?vue&type=template&id=03798d74&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Posts/PostList.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var PostListvue_type_script_lang_js_ = ({
  name: 'PostList',
  props: ["posts", "board"],
  computed: { ...Object(external_vuex_["mapState"])({
      activeTab: state => state.posts.activeArtTab
    })
  },
  methods: {
    idlists: function (post_id) {
      for (var i = 0; i < this.board.length; i++) {
        if (this.board[i] == post_id) return post_id;
      }

      return 0;
    },
    postFilter: function (posts) {
      return this.posts.filter(post => post.id == this.idlists(post.id));
    }
  }
});
// CONCATENATED MODULE: ./components/Posts/PostList.vue?vue&type=script&lang=js&
 /* harmony default export */ var Posts_PostListvue_type_script_lang_js_ = (PostListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Posts/PostList.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(163)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Posts_PostListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "03798d74",
  "50a82a42"
  
)

/* harmony default export */ var PostList = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostTempSearch_vue_vue_type_style_index_0_id_512b78f7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(106);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostTempSearch_vue_vue_type_style_index_0_id_512b78f7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostTempSearch_vue_vue_type_style_index_0_id_512b78f7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostTempSearch_vue_vue_type_style_index_0_id_512b78f7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostTempSearch_vue_vue_type_style_index_0_id_512b78f7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "a[data-v-512b78f7]{text-decoration:none!important}.search-div[data-v-512b78f7]{position:-webkit-sticky;position:sticky;display:block;height:30px;border-radius:3px;margin-left:20px;margin-right:70px}.tagbtn[data-v-512b78f7]{background-color:#4f81bd!important;color:#fff!important;padding:1px 5px;border-radius:10px}.text-field[data-v-512b78f7]{height:30px!important}.search-bar-div[data-v-512b78f7]{margin-left:10px;margin-Right:10px}.w-col-8[data-v-512b78f7]{width:90%}@media screen and (max-width:1800px){.w-col-8[data-v-512b78f7]{width:70%!important}}@media screen and (max-width:900px){.w-col-8[data-v-512b78f7]{width:100%!important}}.tag-search-div[data-v-512b78f7]{width:90%;margin-left:auto;margin-right:auto;display:inline-block}.tagbtn[data-v-512b78f7]{padding:3px 5px!important;border-radius:3px!important;margin-top:10px!important;margin-bottom:10px!important;display:inline-flex}.gardient-button[data-v-512b78f7]{margin-top:10px;background:#4f81bd!important}i.glyphicon[data-v-512b78f7]{color:#fff!important;heigth:50px!important}#section-10[data-v-512b78f7]{background-image:linear-gradient(92deg,rgba(20,160,253,.82),rgba(20,160,253,.82));width:80px;color:#fff}button#section-10[data-v-512b78f7]{margin-left:1px;margin-top:0!important;margin-bottom:10px;padding:3px;border-radius:3px;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;position:absolute}input[data-v-512b78f7]{background:hsla(0,0%,41.2%,.07059)}h2[data-v-512b78f7],h3[data-v-512b78f7]{color:#4f81bd!important}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostList_vue_vue_type_style_index_0_id_03798d74_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(107);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostList_vue_vue_type_style_index_0_id_03798d74_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostList_vue_vue_type_style_index_0_id_03798d74_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostList_vue_vue_type_style_index_0_id_03798d74_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostList_vue_vue_type_style_index_0_id_03798d74_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".sumamry[data-v-03798d74]{overflow:auto;height:100px}.w-dyn-list[data-v-03798d74]{width:100%!important}.gardient-button[data-v-03798d74]{background-image:linear-gradient(200deg,#fff 10%,#fff 39%,#fff 80%);background-size:400% 400%!important;-webkit-animation:gradient 15s ease infinite!important;animation:gradient 15s ease infinite!important;width:-webkit-fit-content!important;width:-moz-fit-content!important;width:fit-content!important;margin-left:auto!important;margin-right:auto!important;margin-bottom:20px!important;border-radius:10px!important;border:none!important;padding:10px 20px!important;font-family:poppins!important;color:#4f81bd!important;font-size:12px!important;text-decoration:none!important;box-shadow:0 0 10px -8px!important}.gardient-button[data-v-03798d74]:hover{box-shadow:0 0 10px -5px!important}.center-btn[data-v-03798d74]{text-align:-webkit-center;display:flex}a[data-v-03798d74]{color:#4f81bd;font-weight:700;text-decoration:none}#myWebLinkTag[data-v-03798d74]{display:table!important;margin-top:10px}@media screen and (max-width:1550px){.post-main-text[data-v-03798d74]{overflow:auto}}@media screen and (max-width:800px){.article-card[data-v-03798d74]{min-height:900px!important}}.art-rows[data-v-03798d74]{display:inline-flex;width:50%;padding:10px;align-content:center;justify-content:center;place-content:center}.div-mobile-col[data-v-03798d74]{padding:0}.post-main-text[data-v-03798d74]{height:auto;display:inline-block;border-bottom-style:groove;border-bottom-color:rgba(210,232,255,.12157);overflow:auto;width:100%}table[data-v-03798d74]{width:100%}.exec-image-posts[data-v-03798d74]{height:100px;margin-left:0!important;margin-right:0!important;margin-top:20px!important}.flex-img[data-v-03798d74]{width:100%;display:flex}.centering-imgs[data-v-03798d74]{text-align:center!important;margin-left:auto;margin-right:auto;display:table}.postAdmin-btns[data-v-03798d74]{margin:10px 0;display:revert;border-bottom-style:groove;border-bottom-color:rgba(210,232,255,.12157)}.w3-teal[data-v-03798d74]{margin-top:20px!important}[data-v-03798d74]::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 1px rgba(0,0,0,.5);border-radius:1px;background:#fff;box-shadow:none!important}.post-summary-wrapper[data-v-03798d74]{height:400!important;overflow:scroll}.blog-title[data-v-03798d74]{font-size:20px!important}.blog-title-link[data-v-03798d74]{color:#004f96}.readmore[data-v-03798d74]:hover{background:rgba(20,160,253,.82)!important;color:#fff!important}.extra-details p[data-v-03798d74]{font-feature-settings:\"kern\" off!important;font-variant:none!important}.readmore[data-v-03798d74]{border:solid #2fb7ff;border-radius:3px}.alert-notice[data-v-03798d74]{line-height:2.2em;color:red;margin-top:8vw}.w-col-medium-3[data-v-03798d74]{text-align:left}img.in-your-face[data-v-03798d74]{width:50px;margin:auto}.w-col-w-col-9[data-v-03798d74]{text-align:left}.featuredsidemenu[data-v-03798d74]{padding:30px}.w-col.w-col-12.w-col-medium-12.w12-hide-tiny[data-v-03798d74]{color:#696969}.article-card[data-v-03798d74]{box-shadow:0 1px 5px 0 rgb(0 89 132/30%);border-radius:0;padding:10px;height:auto;width:100%;min-height:675px;margin-left:auto!important;margin-right:auto!important;margin-bottom:50px!important;background:#f7f7f7!important}.article-card[data-v-03798d74]:hover{box-shadow:0 1px 5px 0 rgba(0,89,132,.16);overflow:hidden}.article-card .w-col-9[data-v-03798d74]{text-align:left;width:100%}.details-wrapper[data-v-03798d74]{margin-top:8px;height:200px}tr[data-v-03798d74]{text-align:left!important;vertical-align:text-top;-moz-text-align-last:left!important;text-align-last:left!important;font-style:italic;font-family:arabic script}ol[data-v-03798d74],td[data-v-03798d74],tr[data-v-03798d74],ul[data-v-03798d74]{text-transform:none!important}*[data-v-03798d74]{-webkit-text-size-adjust:none;-webkit-text-resize:100%;text-resize:100%}table[data-v-03798d74]{border-spacing:0;border-collapse:collapse!important}h1[data-v-03798d74],h2[data-v-03798d74],h3[data-v-03798d74],h4[data-v-03798d74],h5[data-v-03798d74],h6[data-v-03798d74]{display:block;margin:0;padding:0}a img[data-v-03798d74],img[data-v-03798d74]{border:0;height:auto;line-height:100%;outline:none;text-decoration:none}#bodyCell[data-v-03798d74],#bodyTable[data-v-03798d74],body[data-v-03798d74]{height:100%!important;margin:0;padding:0;width:100%!important}@-ms-viewport{width:device-width}table[data-v-03798d74]{mso-table-lspace:0;mso-table-rspace:0}a[data-v-03798d74],blockquote[data-v-03798d74],li[data-v-03798d74],p[data-v-03798d74],td[data-v-03798d74]{mso-line-height-rule:exactly}a[data-v-03798d74],blockquote[data-v-03798d74],body[data-v-03798d74],li[data-v-03798d74],p[data-v-03798d74],table[data-v-03798d74],td[data-v-03798d74]{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}#outlook a[data-v-03798d74]{padding:0}.ExternalClass[data-v-03798d74],.ReadMsgBody[data-v-03798d74]{width:100%}.ExternalClass[data-v-03798d74],.ExternalClass div[data-v-03798d74],.ExternalClass font[data-v-03798d74],.ExternalClass p[data-v-03798d74],.ExternalClass span[data-v-03798d74],.ExternalClass td[data-v-03798d74],img[data-v-03798d74]{line-height:100%}[style*=\"Open Sans\"][data-v-03798d74]{font-family:\"Open Sans\",Helvetica,Arial,sans-serif!important}[style*=Lora][data-v-03798d74]{font-family:\"Lora\",Georgia,Times,serif!important}.wrapperTable[data-v-03798d74]{width:100%;max-width:620px;margin:0 auto}@media only screen and (min-device-width:601px){.content[data-v-03798d74]{width:100%!important}}table[class=wrapperTable][data-v-03798d74]{width:100%!important}table[class=wrapperPreHeader] .hide[data-v-03798d74]{display:none!important}div[class=maxWidth][data-v-03798d74],img[class=maxWidth][data-v-03798d74],td[class=maxWidth][data-v-03798d74]{max-width:100%!important}img[data-v-03798d74]{max-width:100%;height:auto;max-height:200px}.icon-circle[data-v-03798d74]{display:block;width:90px;height:90px;margin-right:auto;margin-bottom:20px;margin-left:auto;border-radius:100%;background-color:#4253ff}.card[data-v-03798d74]{background:#fcfeff;border-radius:20px}.container[data-v-03798d74]{display:contents}.records[data-v-03798d74]{width:95%;margin-left:auto;margin-right:auto}.link[data-v-03798d74]{color:#fff!important;border-radius:10px;padding:5px;margin-top:10%;margin-bottom:10%}.link[data-v-03798d74],.link[data-v-03798d74]:hover{background:#24a7ff!important}.table[data-v-03798d74]{width:100%!important}.table[data-v-03798d74],.td[data-v-03798d74]{text-align:left!important}.datetag[data-v-03798d74]{position:relative!important;width:auto;margin-top:-50px;display:block;padding:3px;border-radius:3px;background:hsla(0,0%,100%,.50196)}.flex-img[data-v-03798d74]{min-height:250px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(108);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "a{box-shadow:none!important}.search-div{margin-bottom:20px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_787857cc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(109);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_787857cc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_787857cc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_787857cc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_787857cc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".title[data-v-787857cc]{text-align:-webkit-center;margin-top:20px;margin-bottom:20px}.posts-page[data-v-787857cc]{display:flex;justify-content:center;align-items:center}.datetag[data-v-787857cc]{border-radius:3px!important;padding:3px;color:#fff!important}a[data-v-787857cc]:hover{text-decoration:none}h2[data-v-787857cc]{color:#4f81bd!important}.content[data-v-787857cc]{background:hsla(0,0%,100%,.78039);padding-bottom:10px;border-radius:10px;box-shadow:0 0 5px -4px;max-width:1200px;width:auto;margin-left:auto;margin-right:auto}.content[data-v-787857cc]:hover{box-shadow:0 0 8px -4px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_2_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(110);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_2_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_2_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_2_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_2_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".search-bar-div{text-align:center;-moz-text-align-last:center;text-align-last:center}@media screen and (max-width:1300px){.tag-search-div{display:contents!important}.search-div{display:table-row}}.tag-search-div{align-content:center;justify-content:center;place-content:center;display:flex}.search-div,.text-field{text-align:-webkit-center!important}.text-field{-moz-text-align-last:center;text-align-last:center}#button{width:16%!important}input.text-field{width:20%}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/posts/index.vue?vue&type=template&id=787857cc&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('center',[_c('div',{staticClass:"sectionix",attrs:{"data-v-69296181":"","id":"top"}},[_c('div',{staticClass:"title",attrs:{"data-v-69296181":""}},[_c('div',{staticClass:"content",attrs:{"data-v-69296181":""}},[_c('br',{attrs:{"data-v-69296181":""}}),_vm._v(" "),_c('h2',{attrs:{"data-v-69296181":""}},[_vm._v("Articles"),_c('i',{staticStyle:{"font-size":"13px","text-align":"right","margin-left":"3px"}},[_vm._v(_vm._s(_vm.filterMessage))])])])])])]),_vm._ssrNode(" "),_c('PostTempSearch'),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"posts-page\" data-v-787857cc>","</div>",[_c('PostList',{attrs:{"posts":_vm.loadedPosts,"board":this.myboard}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/posts/index.vue?vue&type=template&id=787857cc&scoped=true&

// EXTERNAL MODULE: ./components/Posts/PostTempSearch.vue + 4 modules
var PostTempSearch = __webpack_require__(123);

// EXTERNAL MODULE: ./components/Posts/PostList.vue + 4 modules
var PostList = __webpack_require__(132);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/posts/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var postsvue_type_script_lang_js_ = ({
  methods: {
    changePage: function (direction) {
      switch (direction) {
        case 'Previous':
          var page = this.numPage;
          this.$store.dispatch("posts/setView", "Articles");
          this.$store.dispatch("posts/goPrevious", page);
          break;

        case 'Next':
          var page = this.numPage;
          this.$store.dispatch("posts/setView", "Articles");
          this.$store.dispatch("posts/goNext", page);
          break;

        case 'Last':
          this.$store.dispatch("posts/setView", "Articles");
          this.$store.dispatch("posts/goLast");
          break;
      }
    },

    submitSearch(topic) {
      this.$store.dispatch("posts/setView", "Articles");
      this.$store.dispatch("posts/submitSearch", topic);
      this.$store.dispatch("posts/setSearchTab", topic);
    },

    changeBank: function (direction) {
      switch (direction) {
        case 'Previous':
          var page = this.bnkPage;
          this.$store.dispatch("posts/setView", "Articles");
          this.$store.dispatch("posts/setBankPrevious", page);
          break;

        case 'Next':
          var page = this.bnkPage;
          this.$store.dispatch("posts/setView", "Articles");
          this.$store.dispatch("posts/setBankNext", page);
          break;
      }
    },
    changeInsur: function (direction) {
      switch (direction) {
        case 'Previous':
          var page = this.insPage;
          this.$store.dispatch("posts/setView", "Articles");
          this.$store.dispatch("posts/setInsurPrevious", page);
          break;

        case 'Next':
          var page = this.insPage;
          this.$store.dispatch("posts/setView", "Articles");
          this.$store.dispatch("posts/setInsurNext", page);
          break;
      }
    },
    changeBlock: function (direction) {
      switch (direction) {
        case 'Previous':
          var page = this.blkPage;
          this.$store.dispatch("posts/setView", "Articles");
          this.$store.dispatch("posts/setBlockPrevious", page);
          break;

        case 'Next':
          var page = this.blkPage;
          this.$store.dispatch("posts/setView", "Articles");
          this.$store.dispatch("posts/setBlockNext", page);
          break;
      }
    },

    getbyCategory(category) {
      switch (category) {
        case 'Insurtech':
          this.$store.dispatch("posts/setView", "Articles");
          this.$store.dispatch("posts/setInsur");
          break;

        case 'Blockchain':
          this.$store.dispatch("posts/setView", "Articles");
          this.$store.dispatch("posts/setBlock");
          break;

        case 'Lending':
          this.$store.dispatch("posts/setView", "Articles");
          this.$store.dispatch("posts/setLend");
          break;

        case 'Payments':
          this.$store.dispatch("posts/setView", "Articles");
          this.$store.dispatch("posts/setPay");
          break;

        case 'Banking':
          this.$store.dispatch("posts/setView", "Articles");
          this.$store.dispatch("posts/setBank");
          break;

        case 'AI':
          this.$store.dispatch("posts/setView", "Articles");
          this.$store.dispatch("posts/setAI");
          break;

        case 'RegTech':
          this.$store.dispatch("posts/setView", "Articles");
          this.$store.dispatch("posts/setReg");
          break;

        case 'HealthTech':
          this.$store.dispatch("posts/setView", "Articles");
          this.$store.dispatch("posts/setHealth");
          break;

        case 'CapitalMarkets':
          this.$store.dispatch("posts/setView", "Articles");
          this.$store.dispatch("posts/setCapital");
          break;

        case 'RealEstate':
          this.$store.dispatch("posts/setView", "Articles");
          this.$store.dispatch("posts/setReal");
          break;

        case 'WealthTech':
          this.$store.dispatch("posts/setView", "Articles");
          this.$store.dispatch("posts/setWealth");
          break;

        case 'Mergers':
          this.$store.dispatch("posts/setView", "Articles");
          this.$store.dispatch("posts/setMergers");
          break;

        case 'Val':
          this.$store.dispatch("posts/setView", "Articles");
          this.$store.dispatch("posts/setVal");
          break;

        case 'Spin':
          this.$store.dispatch("posts/setView", "Articles");
          this.$store.dispatch("posts/setSpin");
          break;

        case 'Boot':
          this.$store.dispatch("posts/setView", "Articles");
          this.$store.dispatch("posts/setBoot");
          break;

        case 'Growth':
          this.$store.dispatch("posts/setView", "Articles");
          this.$store.dispatch("posts/setGrowth");
          break;

        case 'Advisors':
          this.$store.dispatch("posts/setView", "Articles");
          this.$store.dispatch("posts/setAdvisors");
          break;
      }
    }

  },
  computed: { ...Object(external_vuex_["mapState"])({
      starter: state => state.posts.post1,
      activeTab: state => state.posts.activeArtTab,
      myboard: state => state.boards.myboard,
      activeArtInfo: state => state.posts.activeArtInfo,
      numPage: state => state.posts.numArtPage,
      first: state => state.posts.firstArtLoad,
      blkPage: state => state.posts.blkArtPage,
      bnkPage: state => state.posts.bnkArtPage,
      insPage: state => state.posts.insArtPage
    }),

    filterMessage() {
      if (this.activeTab == 'Page') {
        return this.activeTab + ' ' + this.numPage;
      } else if (this.activeTab == 'Blockchain') {
        return this.activeTab + ' ' + 'page' + ' ' + this.blkPage;
      } else if (this.activeTab == 'Banking') {
        return this.activeTab + ' ' + 'page' + ' ' + this.bnkPage;
      } else if (this.activeTab == 'Insurtech') {
        return this.activeTab + ' ' + 'page' + ' ' + this.insPage;
      } else {
        return this.activeTab;
      }
    },

    loadedPosts() {
      return this.activeArtInfo;
    }

  },

  created() {
    this.$nuxt.$on("getCategory", category => this.getbyCategory(category));
    this.$nuxt.$on("changePage", direction => this.changePage(direction));
    this.$nuxt.$on("submitSearch", topic => this.submitSearch(topic));
    this.$nuxt.$on("changeInsur", direction => this.changeInsur(direction));
    this.$nuxt.$on("changeBlock", direction => this.changeBlock(direction));
    this.$nuxt.$on("changeBank", direction => this.changeBank(direction));
  },

  async fetch({
    store
  }) {
    store.dispatch("posts/setView", "Articles");
    await store.dispatch("posts/nuxtServerInit");
  }

});
// CONCATENATED MODULE: ./pages/posts/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_postsvue_type_script_lang_js_ = (postsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/posts/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(165)
if (style0.__inject__) style0.__inject__(context)
var style1 = __webpack_require__(167)
if (style1.__inject__) style1.__inject__(context)
var style2 = __webpack_require__(169)
if (style2.__inject__) style2.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_postsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "787857cc",
  "66520837"
  
)

/* harmony default export */ var posts = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {PostTempSearch: __webpack_require__(123).default,PostList: __webpack_require__(132).default})


/***/ })

};;
//# sourceMappingURL=index.js.map