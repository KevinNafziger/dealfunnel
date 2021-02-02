exports.ids = [2];
exports.modules = {

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Builder/Searchbar.vue?vue&type=template&id=b578dcba&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"search-bar-div\" data-v-b578dcba>","</div>",[_vm._ssrNode("<div class=\"search-div\" data-v-b578dcba>","</div>",[_c('input',{directives:[{name:"tippy",rawName:"v-tippy",value:({ placement : 'bottom' }),expression:"{ placement : 'bottom' }"},{name:"model",rawName:"v-model",value:(_vm.searchMessage),expression:"searchMessage"}],staticClass:"text-field w-input w-col w-col-8",staticStyle:{"margin-right":"10px"},attrs:{"content":"Type your search text","type":"text","name":"term","id":"term","width":"100%","placeholder":"search  content"},domProps:{"value":(_vm.searchMessage)},on:{"input":function($event){if($event.target.composing){ return; }_vm.searchMessage=$event.target.value}}},[]),_vm._ssrNode(" "),_c('button',{directives:[{name:"tippy",rawName:"v-tippy",value:({ placement : 'bottom' }),expression:"{ placement : 'bottom' }"}],staticClass:"gardient-button",staticStyle:{"margin-left":"1px","margin-top":"5px","margin-bottom":"10px"},attrs:{"content":"Click to search!","id":"section-10"},on:{"click":function($event){return _vm.submitSearch(_vm.searchMessage)}}},[_vm._ssrNode("<span class=\"mdi mdi-file-search\" data-v-b578dcba></span>")]),_vm._ssrNode(" <br data-v-b578dcba><br data-v-b578dcba>")],2),_vm._ssrNode(" <div class=\"tag-search-div\" data-v-b578dcba><a href=\"#\" class=\"tagbtn\" data-v-b578dcba>all</a> <a href=\"#\" class=\"tagbtn\" data-v-b578dcba>payments</a> <a href=\"#\" class=\"tagbtn\" data-v-b578dcba>insurtech</a> <a href=\"#\" class=\"tagbtn\" data-v-b578dcba>lending</a> <a href=\"#\" class=\"tagbtn\" data-v-b578dcba>banking</a> <a href=\"#\" class=\"tagbtn\" data-v-b578dcba>blockchain</a> <a href=\"#\" class=\"tagbtn\""+(_vm._ssrStyle(null,null, { display: (_vm.showPreviousBtn) ? '' : 'none' }))+" data-v-b578dcba>Prev</a> <a href=\"#\" class=\"tagbtn\""+(_vm._ssrStyle(null,null, { display: (_vm.showNextBtn) ? '' : 'none' }))+" data-v-b578dcba>Next</a> <a href=\"#\" class=\"tagbtn\""+(_vm._ssrStyle(null,null, { display: (_vm.showPrevInsBtn) ? '' : 'none' }))+" data-v-b578dcba>Prev</a> <a href=\"#\" class=\"tagbtn\""+(_vm._ssrStyle(null,null, { display: (_vm.showNextInsBtn) ? '' : 'none' }))+" data-v-b578dcba>Next</a> <a href=\"#\" class=\"tagbtn\""+(_vm._ssrStyle(null,null, { display: (_vm.showPrevBnkBtn) ? '' : 'none' }))+" data-v-b578dcba>Prev</a> <a href=\"#\" class=\"tagbtn\""+(_vm._ssrStyle(null,null, { display: (_vm.showNextBnkBtn) ? '' : 'none' }))+" data-v-b578dcba>Next</a> <a href=\"#\" class=\"tagbtn\""+(_vm._ssrStyle(null,null, { display: (_vm.showPrevBlkBtn) ? '' : 'none' }))+" data-v-b578dcba>Prev</a> <a href=\"#\" class=\"tagbtn\""+(_vm._ssrStyle(null,null, { display: (_vm.showNextBlkBtn) ? '' : 'none' }))+" data-v-b578dcba>Next</a></div>")],2),_vm._ssrNode(" <div"+(_vm._ssrStyle(null,null, { display: (false) ? undefined : 'none' }))+" data-v-b578dcba><br data-v-b578dcba><i style=\"font-size: 13px;\" data-v-b578dcba>No results found</i></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Builder/Searchbar.vue?vue&type=template&id=b578dcba&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: external "vue-tippy"
var external_vue_tippy_ = __webpack_require__(83);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Builder/Searchbar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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


/* harmony default export */ var Searchbarvue_type_script_lang_js_ = ({
  name: 'Searchbar',

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
      numPage: state => state.posts.numBuildPage,
      activeTab: state => state.posts.activeBuildTab,
      blkPage: state => state.posts.blkBuildPage,
      bnkPage: state => state.posts.bnkBuildPage,
      insPage: state => state.posts.insBuildPage
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
// CONCATENATED MODULE: ./components/Builder/Searchbar.vue?vue&type=script&lang=js&
 /* harmony default export */ var Builder_Searchbarvue_type_script_lang_js_ = (Searchbarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Builder/Searchbar.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(137)
if (style0.__inject__) style0.__inject__(context)
var style1 = __webpack_require__(139)
if (style1.__inject__) style1.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Builder_Searchbarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "b578dcba",
  "594f6a7c"
  
)

/* harmony default export */ var Searchbar = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Draggable/Board.vue?vue&type=template&id=1ccb6862&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"board",attrs:{"id":_vm.id},on:{"dragover":function($event){$event.preventDefault();},"drop":function($event){$event.preventDefault();return _vm.drop($event)}}},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Draggable/Board.vue?vue&type=template&id=1ccb6862&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Draggable/Board.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Boardvue_type_script_lang_js_ = ({
  props: ['id'],
  methods: {
    drop: e => {
      const card_id = e.dataTransfer.getData('card_id');
      const card = document.getElementById(card_id);
      card.style.display = "none"; //e.target.appendChild(card);

      $nuxt.$emit("addRight", card_id);
      $nuxt.$emit("addRightArry", card_id);
    }
  }
});
// CONCATENATED MODULE: ./components/Draggable/Board.vue?vue&type=script&lang=js&
 /* harmony default export */ var Draggable_Boardvue_type_script_lang_js_ = (Boardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Draggable/Board.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Draggable_Boardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2be664ef"
  
)

/* harmony default export */ var Board = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Draggable/Card.vue?vue&type=template&id=2e077c3c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card",attrs:{"id":_vm.id,"draggable":_vm.draggable},on:{"dragstart":_vm.dragStart,"dragover":function($event){$event.stopPropagation();}}},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Draggable/Card.vue?vue&type=template&id=2e077c3c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Draggable/Card.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Cardvue_type_script_lang_js_ = ({
  props: ['id', 'draggable'],
  methods: {
    dragStart: e => {
      const target = e.target;
      e.dataTransfer.setData('card_id', target.id); //if we want cards to not disapear when hold comment line 23 24 25
      //  setTimeout (() => {
      //      target.style.display = "none";
      //    }, 0);
    }
  }
});
// CONCATENATED MODULE: ./components/Draggable/Card.vue?vue&type=script&lang=js&
 /* harmony default export */ var Draggable_Cardvue_type_script_lang_js_ = (Cardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Draggable/Card.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Draggable_Cardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4e456d17"
  
)

/* harmony default export */ var Card = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Builder/Postsys.vue?vue&type=template&id=8d716544&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"main"}},[_vm._ssrNode("<ol data-v-8d716544>","</ol>",_vm._l((_vm.postFilter(_vm.posts)),function(post){return _vm._ssrNode("<ul data-v-8d716544>","</ul>",[_vm._ssrNode("<div class=\"w-dyn-list featuredsidemenu\" data-v-8d716544>","</div>",[_vm._ssrNode("<div class=\"article-card\" style=\"margin:10px;\" data-v-8d716544>","</div>",[_vm._ssrNode("<div class=\"coolbar\" style=\"height:1px;margin-left:auto;margin-right:auto;margin-top:20px;\" data-v-8d716544></div> "),_vm._ssrNode("<div class=\"w-dyn-items\" data-v-8d716544>","</div>",[_vm._ssrNode("<div class=\"w-dyn-item\" data-v-8d716544>","</div>",[_vm._ssrNode("<div class=\"post-wrapper\" data-v-8d716544>","</div>",[_vm._ssrNode("<div class=\"post-content\" data-v-8d716544>","</div>",[_vm._ssrNode("<br data-v-8d716544><br data-v-8d716544> "),_vm._ssrNode("<div class=\"post-info\" data-v-8d716544>","</div>",[_vm._ssrNode(((!post.created_date==null)?("<div class=\"post-info\" style=\"float:left;\" data-v-8d716544><a class=\"datetag\" data-v-8d716544>"+_vm._ssrEscape(_vm._s(post.created_date))+"</a></div>"):"<!---->")+" "),_vm._ssrNode("<div class=\"w-row \" data-v-8d716544>","</div>",[_vm._ssrNode(((!(post.logo_url==null))?("<div class=\"flex-img\" data-v-8d716544><div class=\"centering-imgs w-col w-col-6 w-col-medium-6 w6-hide-tiny\" data-v-8d716544><a class=\"blog-image w-inline-block\" data-v-8d716544><img"+(_vm._ssrAttr("src",post.logo_url))+" width=\"180\" style=\"max-width: 180px ;max-height:130; overflow:none;\" data-v-8d716544></a></div></div>"):"<!---->")+" "),_vm._ssrNode("<div id=\"tree\" class=\"w-col w-col-12 w-col-medium-12 w12-hide-tiny\" data-v-8d716544>","</div>",[_vm._ssrNode("<table data-v-8d716544>","</table>",[_vm._ssrNode("<tbody class=\"post-main-text\" style=\"text-transform:none !important;\" data-v-8d716544>","</tbody>",[_vm._ssrNode("<tr data-v-8d716544>","</tr>",[_vm._ssrNode("<td data-v-8d716544>","</td>",[_vm._ssrNode("<b data-v-8d716544>Most Recent Coverage:</b><br data-v-8d716544>"),_vm._ssrNode("<b data-v-8d716544>","</b>",[_c('nuxt-link',{staticClass:"mdi mdi-book-open mdi-18px",attrs:{"id":"myArticleLinkTag","href":"#","to":'/posts/' + post.id}},[_vm._v(_vm._s(post.teaser))])],1),_vm._ssrNode(_vm._ssrEscape(", "+_vm._s(post.summary)+" ")+"<i data-v-8d716544>(Please click on the hyperlink above to read this article)</i> <br data-v-8d716544><br data-v-8d716544>")],2)]),_vm._ssrNode(" "+((post.newdescript==='')?("<tr data-v-8d716544><td data-v-8d716544><b data-v-8d716544>Brief Summary:</b><br data-v-8d716544>"+_vm._ssrEscape(_vm._s(post.fact))+((!(post.website===''))?("<a id=\"myWebLinkTag\""+(_vm._ssrAttr("href",post.website))+" class=\"mdi mdi-web mdi-18px\" data-v-8d716544> website</a>"):"<!---->")+"<br data-v-8d716544> <br data-v-8d716544><br data-v-8d716544></td></tr>"):"<!---->")+" "+((!(post.newdescript===''))?("<tr data-v-8d716544><td data-v-8d716544><b data-v-8d716544>Brief Summary:</b><br data-v-8d716544>"+_vm._ssrEscape(_vm._s(post.newdescript))+((!(post.website===''))?("<a id=\"myWebLinkTag\""+(_vm._ssrAttr("href",post.website))+" class=\"mdi mdi-web mdi-18px\" data-v-8d716544> website</a>"):"<!---->")+"<br data-v-8d716544> <br data-v-8d716544><br data-v-8d716544></td></tr>"):"<!---->")+" "+((!(post.advisors===''))?("<tr data-v-8d716544><td data-v-8d716544><b data-v-8d716544> Advisors:</b><br data-v-8d716544>"+_vm._ssrEscape(" "+_vm._s(post.advisors))+"<br data-v-8d716544><br data-v-8d716544></td></tr>"):"<!---->")+" "+((!(post.investors.length === 0))?("<tr data-v-8d716544><td data-v-8d716544><b data-v-8d716544> Investors: </b><br data-v-8d716544>"+_vm._ssrEscape(" "+_vm._s(post.investors))+"<br data-v-8d716544><br data-v-8d716544></td></tr>"):"<!---->")+" "+((!(post.execheader===''))?("<tr data-v-8d716544><td data-v-8d716544><b data-v-8d716544>"+_vm._ssrEscape(_vm._s(post.execheader))+"</b><br data-v-8d716544><br data-v-8d716544></td></tr>"):"<!---->")+" <tr data-v-8d716544><td data-v-8d716544>"+_vm._ssrEscape(_vm._s(post.execname))+"<br data-v-8d716544><br data-v-8d716544></td></tr> "+((!(post.exec_url==null))?("<tr class=\"centering-imgs\" data-v-8d716544><td data-v-8d716544><a class=\"blog-image exec-image-posts\" data-v-8d716544><img"+(_vm._ssrAttr("src",post.exec_url))+" width=\"90\" style=\"max-width: 90px ;max=height:120px; overflow:none\" data-v-8d716544></a><br data-v-8d716544></td></tr>"):"<!---->")+" "+((!(post.linkedin===''))?("<tr class=\"center\" data-v-8d716544><td data-v-8d716544><div class=\"column-45 w-col w-col-2\" data-v-8d716544><a"+(_vm._ssrAttr("href",post.linkedin))+" _blank class=\"w-inline-block\" data-v-8d716544><img src=\"https://filesforfintech.s3.amazonaws.com/images/linkeding-icon-gray-.png\" class=\"in-your-face\" data-v-8d716544></a><br data-v-8d716544><br data-v-8d716544></div><br data-v-8d716544><br data-v-8d716544><br data-v-8d716544></td></tr>"):"<!---->")+" "+((!(post.interest===''))?("<tr data-v-8d716544><td data-v-8d716544><b data-v-8d716544> Interesting Fact: </b>"+_vm._ssrEscape(" "+_vm._s(post.interest)+"\n                                    ")+"<br data-v-8d716544><br data-v-8d716544></td></tr>"):"<!---->"))],2)])])],2)],2)],2)])])])],2)])])}),0)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Builder/Postsys.vue?vue&type=template&id=8d716544&scoped=true&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Builder/Postsys.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 //import Vuetify from 'vuetify';

/* harmony default export */ var Postsysvue_type_script_lang_js_ = ({
  name: 'Postsys',
  props: ["posts", "board"],
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
// CONCATENATED MODULE: ./components/Builder/Postsys.vue?vue&type=script&lang=js&
 /* harmony default export */ var Builder_Postsysvue_type_script_lang_js_ = (Postsysvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Builder/Postsys.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(135)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Builder_Postsysvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "8d716544",
  "613eaa44"
  
)

/* harmony default export */ var Postsys = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Postsys_vue_vue_type_style_index_0_id_8d716544_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Postsys_vue_vue_type_style_index_0_id_8d716544_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Postsys_vue_vue_type_style_index_0_id_8d716544_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Postsys_vue_vue_type_style_index_0_id_8d716544_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Postsys_vue_vue_type_style_index_0_id_8d716544_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#tree[data-v-8d716544]{color:#000}#myWebLinkTag[data-v-8d716544]{margin-top:10px}@media screen and (max-width:1550px){.post-main-text[data-v-8d716544]{overflow:auto}}.post-main-text[data-v-8d716544]{height:385px!important;border-bottom-color:rgba(210,232,255,.12157);overflow:auto}[data-v-8d716544]::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 1px rgba(0,0,0,.5);border-radius:1px;background:#fff;box-shadow:none!important}.post-summary-wrapper[data-v-8d716544]{height:400!important}@media screen and (max-width:940px){.post-info p[data-v-8d716544]{margin-top:20px}.article-card[data-v-8d716544]{height:auto!important}}.w-col-w-col-9[data-v-8d716544]{text-align:left}.featuredsidemenu[data-v-8d716544]{padding:30px}ol[data-v-8d716544],td[data-v-8d716544],tr[data-v-8d716544],ul[data-v-8d716544]{text-transform:none!important}.wrapperTable[data-v-8d716544]{width:100%;max-width:620px;margin:0 auto}.datetag[data-v-8d716544]{position:relative!important}h3[data-v-8d716544]{color:rgba(20,160,253,.81961)!important}h2[data-v-8d716544]{color:#4f81bd!important}section[data-v-8d716544]{color:#fff!important}a .gardient-button[data-v-8d716544]{margin-left:10px;margin-right:10px}.b-lr-s[data-v-8d716544]{margin-left:5px!important;margin-right:5px!important}.m-t[data-v-8d716544]{margin-top:100px}.heading-col-main[data-v-8d716544]{width:100%;text-align:center;align-content:center;justify-content:center;place-content:center}i.glyphicon[data-v-8d716544]{color:#fff!important;heigth:50px!important}.alpha[data-v-8d716544]{box-shadow:0 0 7px -5px;width:-webkit-max-content;width:-moz-max-content;width:max-content;padding:5px;margin:auto}.board[data-v-8d716544]{box-shadow:0 0 1px 1px rgba(13,189,255,0)!important}#myWebLinkTag[data-v-8d716544]{display:table!important;margin-top:0}@media screen and (max-width:1550px){.post-main-text[data-v-8d716544]{overflow:hidden}}.post-main-text[data-v-8d716544]{height:auto!important;display:inline-block;border-bottom-style:groove;border-bottom-color:#fff}.exec-image-posts[data-v-8d716544]{height:100px;margin-left:0!important;margin-right:0!important;margin-top:20px!important}.flex-img[data-v-8d716544]{width:100%;display:flex}.centering-imgs[data-v-8d716544]{text-align:center!important;margin-left:auto;margin-right:auto;display:table}.postAdmin-btns[data-v-8d716544]{margin:10px 0;display:revert;border-bottom-style:groove;border-bottom-color:rgba(210,232,255,.12157)}.w3-teal[data-v-8d716544]{margin-top:20px!important}.post-summary-wrapper[data-v-8d716544]{height:430;overflow:hidden!important}.blog-title[data-v-8d716544]{font-size:20px!important}.blog-title-link[data-v-8d716544]{color:#004f96}.readmore[data-v-8d716544]:hover{background:rgba(20,160,253,.82)!important;color:#fff!important}.extra-details p[data-v-8d716544]{font-feature-settings:\"kern\" off!important;font-variant:none!important}.readmore[data-v-8d716544]{border:solid #2fb7ff;border-radius:3px}.alert-notice[data-v-8d716544]{line-height:2.2em;color:red;margin-top:8vw}@media screen and (max-width:940px){.post-info p[data-v-8d716544]{margin-top:10px}.article-card[data-v-8d716544]{height:auto!important}}.w-col-medium-3[data-v-8d716544],.w-col-w-col-12[data-v-8d716544]{text-align:left}.article-card[data-v-8d716544]{box-shadow:0 1px 5px 0 rgb(0 89 132/30%);border-radius:10px;padding:10px;height:1300px}.article-card[data-v-8d716544]:hover{box-shadow:0 1px 5px 0 rgba(0,89,132,.16);overflow:hidden;border-radius:10px}.datetag[data-v-8d716544]{position:absolute;z-index:9}.article-card .w-col-9[data-v-8d716544]{text-align:left;width:100%}.details-wrapper[data-v-8d716544]{margin-top:8px;height:200px}tr[data-v-8d716544]{background-color:#fff!important;text-align:left!important;vertical-align:text-top;-moz-text-align-last:left!important;text-align-last:left!important}*[data-v-8d716544]{-webkit-text-size-adjust:none;-webkit-text-resize:100%;text-resize:100%}table[data-v-8d716544]{border-spacing:0;border-collapse:collapse!important}h1[data-v-8d716544],h2[data-v-8d716544],h3[data-v-8d716544],h4[data-v-8d716544],h5[data-v-8d716544],h6[data-v-8d716544]{display:block;margin:0;padding:0}a img[data-v-8d716544],img[data-v-8d716544]{border:0;height:auto;line-height:100%;outline:none;text-decoration:none}#bodyCell[data-v-8d716544],#bodyTable[data-v-8d716544],body[data-v-8d716544]{height:100%!important;margin:0;padding:0;width:100%!important}@-ms-viewport{width:device-width}table[data-v-8d716544]{mso-table-lspace:0;mso-table-rspace:0}a[data-v-8d716544],blockquote[data-v-8d716544],li[data-v-8d716544],p[data-v-8d716544],td[data-v-8d716544]{mso-line-height-rule:exactly}a[data-v-8d716544],blockquote[data-v-8d716544],body[data-v-8d716544],li[data-v-8d716544],p[data-v-8d716544],table[data-v-8d716544],td[data-v-8d716544]{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}#outlook a[data-v-8d716544]{padding:0}.ExternalClass[data-v-8d716544],.ReadMsgBody[data-v-8d716544]{width:100%}.ExternalClass[data-v-8d716544],.ExternalClass div[data-v-8d716544],.ExternalClass font[data-v-8d716544],.ExternalClass p[data-v-8d716544],.ExternalClass span[data-v-8d716544],.ExternalClass td[data-v-8d716544],img[data-v-8d716544]{line-height:100%}[style*=\"Open Sans\"][data-v-8d716544]{font-family:\"Open Sans\",Helvetica,Arial,sans-serif!important}[style*=Lora][data-v-8d716544]{font-family:\"Lora\",Georgia,Times,serif!important}@media only screen and (min-device-width:601px){.content[data-v-8d716544]{width:100%!important}}.maxWidth[data-v-8d716544]{max-width:100%!important}table[class=wrapperTable][data-v-8d716544]{width:100%!important}table[class=wrapperPreHeader] .hide[data-v-8d716544]{display:none!important}div[class=maxWidth][data-v-8d716544],img[class=maxWidth][data-v-8d716544],td[class=maxWidth][data-v-8d716544]{max-width:100%!important}img[data-v-8d716544]{max-width:100%;height:auto}.icon-circle[data-v-8d716544]{display:block;width:90px;height:90px;margin-right:auto;margin-bottom:20px;margin-left:auto;border-radius:100%;background-color:#4253ff}.card[data-v-8d716544]{background:#fcfeff;border-radius:20px}.container[data-v-8d716544]{display:contents}.records[data-v-8d716544]{width:95%;margin-left:auto;margin-right:auto}.link[data-v-8d716544]{color:#fff!important;border-radius:10px;padding:5px;margin-top:10%;margin-bottom:10%}.link[data-v-8d716544],.link[data-v-8d716544]:hover{background:#24a7ff!important}.datetag[data-v-8d716544]{width:auto!important;display:content!important}.table[data-v-8d716544]{width:100%!important}.table[data-v-8d716544],.td[data-v-8d716544]{text-align:left!important}.td[data-v-8d716544]{margin-top:0!important;margin-bottom:0!important;font-size:21px!important}.tr[data-v-8d716544]{margin-top:0;margin-bottom:0}.imageheight[data-v-8d716544]{max-height:230px!important;max-width:350px;margin-bottom:0;padding-bottom:0}.space-me[data-v-8d716544]{margin-bottom:20px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Searchbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Searchbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Searchbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Searchbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Searchbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media screen and (min-width:1600px){.tag-search-div{display:flex!important}.search-div{display:grid}}.tagbtn{padding:3px 5px!important;border-radius:3px!important;margin-top:10px!important;margin-bottom:10px!important;display:inline-flex;margin-left:3px;margin-right:3px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Searchbar_vue_vue_type_style_index_1_id_b578dcba_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Searchbar_vue_vue_type_style_index_1_id_b578dcba_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Searchbar_vue_vue_type_style_index_1_id_b578dcba_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Searchbar_vue_vue_type_style_index_1_id_b578dcba_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Searchbar_vue_vue_type_style_index_1_id_b578dcba_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".text-field[data-v-b578dcba]{-moz-text-align-last:center;text-align-last:center}.tag-search-div[data-v-b578dcba]{display:flex}@media screen and (min-width:1600px){.tag-search-div[data-v-b578dcba]{display:block!important}.w-col-8[data-v-b578dcba]{width:80%!important}button#section-10[data-v-b578dcba]{width:15%}.text-field[data-v-b578dcba]{-moz-text-align-last:center;text-align-last:center;max-width:600px}}a[data-v-b578dcba]{text-decoration:none!important}.search-div[data-v-b578dcba]{position:-webkit-sticky;position:sticky;display:contents;height:30px;border-radius:3px;margin-left:20px;margin-right:70px;margin-bottom:30px}.tagbtn[data-v-b578dcba]{background-color:#4f81bd!important;color:#fff!important;padding:1px 5px;border-radius:10px}.text-field[data-v-b578dcba]{height:30px!important}.search-bar-div[data-v-b578dcba]{margin-left:10px;margin-Right:10px}.w-col-8[data-v-b578dcba]{width:90%}@media screen and (max-width:1800px){.w-col-8[data-v-b578dcba]{width:70%!important}}@media screen and (max-width:900px){.w-col-8[data-v-b578dcba]{width:100%!important}}.tag-search-div[data-v-b578dcba]{display:block!important;width:90%;margin-left:auto;margin-right:auto}.tagbtn[data-v-b578dcba]{padding:3px 5px!important;border-radius:3px!important;margin-top:10px!important;margin-bottom:10px!important;display:inline-flex;margin-left:3px;margin-right:3px}.gardient-button[data-v-b578dcba]{margin-top:10px;background:#4f81bd!important}i.glyphicon[data-v-b578dcba]{color:#fff!important;heigth:50px!important}#section-10[data-v-b578dcba]{background-image:linear-gradient(92deg,rgba(20,160,253,.82),rgba(20,160,253,.82));width:20%!important;color:#fff}button#section-10[data-v-b578dcba]{margin-left:1px;margin-top:0!important;margin-bottom:10px;padding:3px;border-radius:3px;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;position:inherit;width:15%!important}input[data-v-b578dcba]{background:hsla(0,0%,41.2%,.07059)}h2[data-v-b578dcba],h3[data-v-b578dcba]{color:#4f81bd!important}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_44706dad_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_44706dad_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_44706dad_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_44706dad_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_44706dad_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "img[data-v-44706dad]{width:auto!important}h2[data-v-44706dad]{text-align:-webkit-center}.date-tag[data-v-44706dad]{background:rgba(105,115,123,.23922);border-radius:3px;color:#4f81bd;margin-right:20px;padding:3px;font-weight:700;font-size:14px}.builder-btns[data-v-44706dad]{align-self:center!important}h2[data-v-44706dad],h3[data-v-44706dad]{color:#4f81bd!important}section[data-v-44706dad]{color:#fff!important}a .gardient-button[data-v-44706dad]{margin-left:10px;margin-right:10px}.b-lr-s[data-v-44706dad]{margin-left:5px!important;margin-right:5px!important}.m-t[data-v-44706dad]{margin-top:100px}.heading-col-main[data-v-44706dad]{width:100%;text-align:center;align-content:center;justify-content:center;place-content:center}i.glyphicon[data-v-44706dad]{color:#fff!important;heigth:50px!important}.alpha[data-v-44706dad]{box-shadow:0 0 7px -5px;width:-webkit-max-content;width:-moz-max-content;width:max-content;padding:5px;margin:auto}.board[data-v-44706dad]{box-shadow:0 0 1px 1px rgba(13,189,255,0)!important}.content[data-v-44706dad]{background:hsla(0,0%,100%,.78039);padding-bottom:10px;border-radius:10px;box-shadow:0 0 5px -3px grey!important;max-width:1200px;width:auto;margin-left:auto;margin-right:auto}.title[data-v-44706dad]{text-align:-webkit-center}h2[data-v-44706dad],h3[data-v-44706dad]{color:#4f81bd!important}.adminbtn[data-v-44706dad]:hover{box-shadow:0 0 10px 0 #add8e6!important}.paragraph-3[data-v-44706dad]{display:contents}.comp-h[data-v-44706dad]{background:#fff;padding:10px;margin:10px;border-radius:10px}.closebtn[data-v-44706dad]{background:none!important}.sidenav[data-v-44706dad]{height:100%;margin-top:60px;width:0;position:fixed;z-index:1;top:0;left:0;background:linear-gradient(-1645deg,#14a0fd,#02d0ff,#1491fd,rgba(20,160,253,.81961))!important;-webkit-animation:gradient 1s cubic-bezier(1,-.19,.53,1.61) infinite!important;animation:gradient 1s cubic-bezier(1,-.19,.53,1.61) infinite!important;overflow-x:hidden;background-size:100% 900%!important;transition:.5s;padding-top:60px}.sidenav a[data-v-44706dad]{padding:8px 8px 8px 32px;text-decoration:none;font-size:25px;color:#fff;display:block;transition:.3s}.sidenav a[data-v-44706dad]:hover{color:#f1f1f1;background:linear-gradient(45deg,hsla(0,0%,100%,.14902),transparent)}.sidenav .closebtn[data-v-44706dad]{position:absolute;top:0;right:25px;font-size:36px;margin-left:50px}#sidemenu[data-v-44706dad]{transition:margin-left .5s;padding:16px;margin-top:60px}@media screen and (max-height:450px){.sidenav[data-v-44706dad]{padding-top:15px}.sidenav a[data-v-44706dad]{font-size:18px}}.z-10[data-v-44706dad]:hover{opacity:.5}.grid .card[data-v-44706dad]{padding:30px!important;margin:0}.container[data-v-44706dad]{display:contents}.content[data-v-44706dad]{text-align:center}@media screen and (max-width:990){.exespotbody[data-v-44706dad]{display:table}.tag-search-div[data-v-44706dad]{display:block!important}}.header[data-v-44706dad]{margin-top:100px;height:200px}.footer[data-v-44706dad]{margin-top:200px}.footer[data-v-44706dad],.header[data-v-44706dad]{text-align:center;padding:auto;background-color:rgba(20,160,253,.82);background:rgba(20,160,253,.82)}.sectionix[data-v-44706dad]{height:auto;width:100%}h1[data-v-44706dad]{font-size:40px}p[data-v-44706dad]{font-size:20px;margin-top:20px;margin-bottom:20px}.right[data-v-44706dad],.title[data-v-44706dad]{padding:5%}.right[data-v-44706dad]{float:right}.left[data-v-44706dad]{float:left;padding:5%}.ok[data-v-44706dad]{width:24.7%!important}.hitri[data-v-44706dad]{max-width:-webkit-fill-available;height:400}HTML CSSResult .exespotlightsection[data-v-44706dad]{background-image:url(https://filesforfintech.s3.amazonaws.com/images/insight+background.png);background-repeat:round;background-size:cover}.exespotbody[data-v-44706dad]{margin:0 auto;max-width:86em;padding:1em 0;overflow:auto;height:400px}.grid[data-v-44706dad]{justify-content:center;display:flex;flex-wrap:wrap;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));grid-auto-rows:minmax(150px,auto);grid-gap:1em}.module[data-v-44706dad]:hover{background:#fbfbfb;box-shadow:0 0 35px -16px #a1a1a1}.module[data-v-44706dad]{background:#fff;display:inline-table;align-items:center;justify-content:center;height:350px;padding:15px;border-radius:10px;box-shadow:0 0 25px -16px #a1a1a1;text-align:center;text-decoration:none;margin-left:5px;margin-right:5px;flex:1 1 200px}@supports (display:grid){.module[data-v-44706dad]{margin:0}}.flexbox[data-v-44706dad]{display:flex;justify-content:space-between;width:100%!important;max-width:100%;height:auto;overflow:hidden;margin:0 auto;padding:15px}.white-space[data-v-44706dad]{width:50px}.board[data-v-44706dad]{width:100%;max-width:-webkit-fill-available;margin:10px;box-shadow:0 0 1px 1px #0dbdff}.flexbox .board[data-v-44706dad]{display:flex;flex-direction:column;border:1px solid hsla(0,0%,92.2%,.92157);padding:15px;border-radius:10px}.flexbox .board .card[data-v-44706dad]{padding:15px 25px;cursor:pointer;margin-bottom:15px;border-radius:10px;background-color:#fff}.bluebar[data-v-44706dad]{background-image:linear-gradient(200deg,rgba(0,168,255,.81961) 10%,#7460c5 39%,#02d0ff 80%)}.bluebar[data-v-44706dad],.pinkbar[data-v-44706dad]{border-radius:10px;height:3;margin-left:auto;margin-right:auto;width:100%}.pinkbar[data-v-44706dad]{background-image:linear-gradient(200deg,rgba(255,0,213,.81961) 10%,#7460c5 39%,#b502ff 80%)}.graybar[data-v-44706dad]{background-image:linear-gradient(200deg,#b9c0c7 10%,#a9b5c7 39%,#b7bbbd 80%);border-radius:10px;height:3;margin-left:auto;margin-right:auto;width:100%}#app[data-v-44706dad]{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;color:#fff}.card-holder[data-v-44706dad]{border-radius:10px}.card[data-v-44706dad]:hover{box-shadow:0 0 0 2px #24a7ff!important;transition:box-shadow .5s;transition-timing-function:linear}.card[data-v-44706dad]{box-shadow:none!important;background-color:transparent!important;color:grey}.left-side[data-v-44706dad]{float:left}.left-side[data-v-44706dad],.right-side[data-v-44706dad]{width:100%;margin:20px;overflow:auto;background:#fff;border-radius:10px;box-shadow:0 0 12px -10px}.right-side[data-v-44706dad]{float:right}#board-right[data-v-44706dad]{min-height:600px}ul[data-v-44706dad]{width:auto;min-width:400px!important}.admin-menu[data-v-44706dad]{background:linear-gradient(-35deg,#14a0fd,#02d0ff,#14a0fd,rgba(20,160,253,.81961));background-size:400% 400%;-webkit-animation:gradient 5s ease infinite;animation:gradient 5s ease infinite;width:auto;border-radius:3px;padding:10px 20px;color:#fff;font-size:12px}.admin-menu[data-v-44706dad],.b-menu[data-v-44706dad]{margin-left:auto;margin-right:auto;font-family:poppins}.b-menu[data-v-44706dad]{border:1px solid #14a0fd;padding:5px;border-radius:5px;display:grid;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.b-menu[data-v-44706dad]:hover{box-shadow:0 0 3px 0 grey;cursor:pointer}.containers[data-v-44706dad],section[data-v-44706dad]{background:#fff!important}.containers[data-v-44706dad]:hover{box-shadow:0 0 0 2px #24a7ff!important;transition:box-shadow .5s;transition-timing-function:linear}.square-container[data-v-44706dad]{border-radius:0!important}span.mdi.mdi-help[data-v-44706dad]{background:#4f81bd;color:#fff;border-radius:3px;padding:3px}.round-container[data-v-44706dad]{border-radius:10px!important}button[data-v-44706dad]{color:#4f81bd}#board-right[data-v-44706dad]{margin-top:0}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/builder/index.vue?vue&type=template&id=44706dad&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<br data-v-44706dad> "),_vm._ssrNode("<div data-v-44706dad>","</div>",[_vm._ssrNode("<div class=\"content\" data-v-44706dad>","</div>",[_vm._ssrNode("<br data-v-44706dad> <h2 data-v-44706dad>Builder</h2> "),_c('nuxt-link',{attrs:{"to":"/tours/builderpreview"}},[_c('tippy',{attrs:{"to":"Buildpre"}},[_vm._v("\r\n        Builder Preview\r\n        ")]),_vm._v(" "),_c('span',{staticClass:"mdi mdi-help",attrs:{"name":"Buildpre"}})],1)],2)]),_vm._ssrNode(" <br data-v-44706dad><br data-v-44706dad> "),_vm._ssrNode("<main class=\"flexbox\" data-v-44706dad>","</main>",[_vm._ssrNode("<div class=\"left-side\" data-v-44706dad>","</div>",[_vm._ssrNode("<h2 data-v-44706dad> Report Content </h2> <br data-v-44706dad> <div class=\"heading-col-main\" data-v-44706dad><h2 style=\"inline-block\" data-v-44706dad> Articles <i style=\"font-size: 13px; text-align:right\" data-v-44706dad>"+_vm._ssrEscape(_vm._s(_vm.filterMessage))+"</i></h2></div> "),_c('Board',{attrs:{"id":"board-2"}},[_c('Searchbar'),_vm._v(" "),_vm._l((_vm.posts),function(post){return _c('card',{key:post.id,staticClass:"list-group-item",attrs:{"id":post.id,"draggable":"true"}},[_c('h3',[_vm._v("  "+_vm._s(post.title)+" ")]),_vm._v(" "),_c('p',[_c('span',{staticClass:"date-tag"},[_vm._v(" "+_vm._s(post.created_date)+" ")]),_vm._v(" "+_vm._s(post.author.name)+" ")])])})],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"right-side\" data-v-44706dad>","</div>",[_vm._ssrNode("<h2 data-v-44706dad> Your Report </h2> "),_vm._ssrNode("<div class=\"builder-btns\" data-v-44706dad>","</div>",[_c('tippy',{attrs:{"to":"externalTrigger"}},[_vm._v("\r\n         Click to close view\r\n     ")]),_vm._ssrNode(" <button class=\"gardient-button b-lr-s\""+(_vm._ssrStyle(null,null, { display: (this.showModal) ? '' : 'none' }))+" data-v-44706dad><span name=\"externalTrigger\" class=\"mdi mdi-file-eye\" data-v-44706dad></span>\r\n            Close View\r\n            </button> <br data-v-44706dad><br data-v-44706dad><br data-v-44706dad>")],2),_vm._ssrNode(" "),_c('postsys',{directives:[{name:"show",rawName:"v-show",value:(this.showModal),expression:"this.showModal"}],attrs:{"posts":_vm.items,"board":this.myboard}}),_vm._ssrNode(" "),_c('Board',{directives:[{name:"show",rawName:"v-show",value:(!this.showModal),expression:"!this.showModal"}],attrs:{"posts":_vm.posts,"id":"board-right"}},[_c('div',{staticClass:"builder-btns"},[_c('tippy',{attrs:{"to":"Openview"}},[_vm._v("\r\n              Open PDf Preview\r\n              ")]),_vm._v(" "),_c('button',{staticClass:"gardient-button b-lr-s",attrs:{"name":"Openview"},on:{"click":function($event){return _vm.toggleModal()}}},[_c('span',{staticClass:"mdi mdi-file-eye"}),_vm._v("\r\n              View\r\n              ")]),_vm._v(" "),(_vm.loggedIn)?_c('tippy',{attrs:{"to":"getPdf"}},[_vm._v("\r\n              Download pdf\r\n              ")]):_vm._e(),_vm._v(" "),(_vm.loggedIn)?_c('button',{staticClass:"gardient-button b-lr-s",attrs:{"name":"getPdf"},on:{"click":function($event){return _vm.generateReport()}}},[_c('span',{staticClass:"mdi mdi-pdf-box"}),_vm._v("\r\n              PDF\r\n              ")]):_c('nuxt-link',{attrs:{"to":"/login"}},[_c('span',{staticClass:"mdi mdi-pdf-box"}),_vm._v("Login to create PDF")])],1),_vm._v(" "),_vm._l((_vm.myboards),function(myboard){return _c('card',{key:myboard.id,staticClass:"list-group-item",attrs:{"id":myboard.id,"draggable":"true"}},[_c('h3',[_vm._v("  "+_vm._s(myboard.title)+" ")]),_vm._v(" "),_c('p',[_c('span',{staticClass:"date-tag"},[_vm._v(" "+_vm._s(myboard.created_date)+" ")]),_vm._v(" "+_vm._s(myboard.author.name)+" ")])])})],2)],2)],2),_vm._ssrNode(" <p class=\"alpha\" data-v-44706dad>DealFunnel 2021</p>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/builder/index.vue?vue&type=template&id=44706dad&scoped=true&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: ./components/Draggable/Board.vue + 4 modules
var Board = __webpack_require__(127);

// EXTERNAL MODULE: ./components/Draggable/Card.vue + 4 modules
var Card = __webpack_require__(129);

// EXTERNAL MODULE: ./components/Builder/Postsys.vue + 4 modules
var Postsys = __webpack_require__(131);

// EXTERNAL MODULE: ./components/Builder/Searchbar.vue + 4 modules
var Searchbar = __webpack_require__(126);

// EXTERNAL MODULE: external "vuedraggable"
var external_vuedraggable_ = __webpack_require__(86);
var external_vuedraggable_default = /*#__PURE__*/__webpack_require__.n(external_vuedraggable_);

// EXTERNAL MODULE: external "vue-tippy"
var external_vue_tippy_ = __webpack_require__(83);
var external_vue_tippy_default = /*#__PURE__*/__webpack_require__.n(external_vue_tippy_);

// EXTERNAL MODULE: external "vue-sidebar-menu"
var external_vue_sidebar_menu_ = __webpack_require__(87);
var external_vue_sidebar_menu_default = /*#__PURE__*/__webpack_require__.n(external_vue_sidebar_menu_);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/builder/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






 //import Vuetify from 'vuetify';




external_vue_default.a.component('Card', Card["default"]);
external_vue_default.a.component('Board', Board["default"]);
external_vue_default.a.component("tippy", external_vue_tippy_["TippyComponent"]);
external_vue_default.a.use(external_vue_sidebar_menu_default.a); //Vue.use(Vuetify);

external_vue_default.a.use(external_vue_tippy_default.a);
/* harmony default export */ var buildervue_type_script_lang_js_ = ({
  name: 'app',
  components: {
    Board: Board["default"],
    Card: Card["default"],
    draggable: external_vuedraggable_default.a,
    //Vuetify,
    postsys: Postsys["default"],
    Searchbar: Searchbar["default"]
  },
  props: [],
  computed: { ...Object(external_vuex_["mapState"])({
      starter: state => state.posts.post1,
      myboard: state => state.boards.myboard,
      showModal: state => state.boards.showModal,
      first: state => state.posts.firstBuildLoad,
      activeBuildInfo: state => state.posts.activeBuildInfo,
      myboardArry: state => state.boards.myboardArry,
      myboards: state => state.boards.myboardArry,
      activeTab: state => state.posts.activeBuildTab,
      activeView: state => state.posts.activeView,
      numPage: state => state.posts.numBuildPage,
      blkPage: state => state.posts.blkBuildPage,
      bnkPage: state => state.posts.bnkBuildPage,
      insPage: state => state.posts.insBuildPage,
      loggedIn: state => state.auth.loggedIn
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

    posts() {
      if (this.first == true) {
        return this.starter;
      } else {
        return this.activeBuildInfo;
      }
    },

    items() {
      if (this.first == true) {
        return this.starter;
      } else if (this.myboardArry.length == 0) {
        return this.activeBuildInfo;
      } else {
        return this.activeBuildInfo.concat(this.myboards);
      }
    }

  },

  created() {
    this.$nuxt.$on("addRight", items => this.addtoReportBoard(items));
    this.$nuxt.$on("getCategory", category => this.getbyCategory(category));
    this.$nuxt.$on("addRightArry", item => this.addtoBoardArry(item));
    this.$nuxt.$on("changePage", direction => this.setPage(direction));
    this.$nuxt.$on("submitSearch", topic => this.submitSearch(topic));
    this.$nuxt.$on("changeInsur", direction => this.changeInsur(direction));
    this.$nuxt.$on("changeBlock", direction => this.changeBlock(direction));
    this.$nuxt.$on("changeBank", direction => this.changeBank(direction));
  },

  methods: {
    getbyCategory: function (category) {
      switch (category) {
        case 'Insurtech':
          this.$store.commit("posts/setView", "Builder");
          this.$store.dispatch("posts/setInsur");
          break;

        case 'Blockchain':
          this.$store.commit("posts/setView", "Builder");
          this.$store.dispatch("posts/setBlock");
          break;

        case 'Lending':
          this.$store.commit("posts/setView", "Builder");
          this.$store.dispatch("posts/setLend");
          break;

        case 'Payments':
          this.$store.commit("posts/setView", "Builder");
          this.$store.dispatch("posts/setPay");
          break;

        case 'Banking':
          this.$store.commit("posts/setView", "Builder");
          this.$store.dispatch("posts/setBank");
          break;
      }
    },
    changeBank: function (direction) {
      switch (direction) {
        case 'Previous':
          var page = this.bnkPage;
          this.$store.dispatch("posts/setView", "Builder");
          this.$store.dispatch("posts/setBankPrevious", page);
          break;

        case 'Next':
          var page = this.bnkPage;
          this.$store.dispatch("posts/setView", "Builder");
          this.$store.dispatch("posts/setBankNext", page);
          break;
      }
    },
    changeInsur: function (direction) {
      switch (direction) {
        case 'Previous':
          var page = this.insPage;
          this.$store.dispatch("posts/setView", "Builder");
          this.$store.dispatch("posts/setInsurPrevious", page);
          break;

        case 'Next':
          var page = this.insPage;
          this.$store.dispatch("posts/setView", "Builder");
          this.$store.dispatch("posts/setInsurNext", page);
          break;
      }
    },
    changeBlock: function (direction) {
      switch (direction) {
        case 'Previous':
          var page = this.blkPage;
          this.$store.dispatch("posts/setView", "Builder");
          this.$store.dispatch("posts/setBlockPrevious", page);
          break;

        case 'Next':
          var page = this.blkPage;
          this.$store.dispatch("posts/setView", "Builder");
          this.$store.dispatch("posts/setBlockNext", page);
          break;
      }
    },
    setPage: function (direction) {
      switch (direction) {
        case 'Previous':
          this.$store.commit("posts/setView", "Builder");
          this.$store.dispatch("posts/goPrevious");
          break;

        case 'Next':
          var page = this.numPage;
          this.$store.commit("posts/setView", "Builder");
          this.$store.dispatch("posts/goNext", page);
          break;

        case 'Last':
          this.$store.commit("posts/setView", "Builder");
          this.$store.dispatch("posts/goLast", page);
          break;
      }
    },
    addtoReportBoard: function (index) {
      if (isNaN(index)) {
        return;
      } else {
        this.$store.dispatch("boards/updateBoard", index);
      }
    },
    submitSearch: function (topic) {
      this.$store.commit("posts/setView", "Builder");
      this.$store.dispatch("posts/submitSearch", topic);
      this.$store.dispatch("posts/setSearchTab", topic);
    },
    addtoBoardArry: function (item) {
      var item = this.articleFilter(item);
      this.$store.dispatch("boards/updateBoardArry", item);
    },
    generateReport: function () {
      window.open('https://fintechhorizonsmedia.com/showreports/view.pdf?idlist=' + this.myboard.toString());
    },

    toggleModal() {
      this.$store.dispatch("boards/toggle");
    },

    articleFilter(card_id) {
      return this.posts.find(post => post.id == card_id);
    },

    idlists: function (post_id) {
      for (var i = 0; i < this.myboard.length; i++) {
        if (this.myboard[i] == post_id) {
          return post_id;
        }

        return 0;
      }
    },
    postFilter: function (posts) {
      return this.posts.filter(post => post.id == this.idlists(post.id));
    }
  },

  async fetch({
    store
  }) {
    await store.dispatch("posts/setView", "Builder");
    await store.dispatch("posts/nuxtServerInit");
  }

});
// CONCATENATED MODULE: ./pages/builder/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_buildervue_type_script_lang_js_ = (buildervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/builder/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(141)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_buildervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "44706dad",
  "17217882"
  
)

/* harmony default export */ var builder = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Searchbar: __webpack_require__(126).default,Card: __webpack_require__(129).default,Board: __webpack_require__(127).default,Postsys: __webpack_require__(131).default})


/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(136);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("e73b4bfa", content, true, context)
};

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(138);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("9755df96", content, true, context)
};

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(140);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("736b6b11", content, true, context)
};

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(142);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("43fd9ce0", content, true, context)
};

/***/ })

};;
//# sourceMappingURL=index.js.map