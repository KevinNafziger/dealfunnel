exports.ids = [3];
exports.modules = {

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(186);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("ffe80416", content, true, context)
};

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0eaf07a3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(118);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0eaf07a3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0eaf07a3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0eaf07a3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0eaf07a3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@font-face{font-family:\"Cambria Math\";panose-1:2 4 5 3 5 4 6 3 2 4;mso-font-charset:0;mso-generic-font-family:roman;mso-font-pitch:variable;mso-font-signature:-536869121 1107305727 33554432 0 415 0}@font-face{font-family:Calibri;panose-1:2 15 5 2 2 2 4 3 2 4;mso-font-charset:0;mso-generic-font-family:swiss;mso-font-pitch:variable;mso-font-signature:-469750017 -1073732485 9 0 511 0}@font-face{font-family:Georgia;panose-1:2 4 5 2 5 4 5 2 3 3;mso-font-charset:0;mso-generic-font-family:roman;mso-font-pitch:variable;mso-font-signature:647 0 0 0 159 0}div.MsoNormal[data-v-0eaf07a3],li.MsoNormal[data-v-0eaf07a3],p.MsoNormal[data-v-0eaf07a3]{mso-style-unhide:no;mso-style-qformat:yes;mso-style-parent:\"\";margin:0 0 8pt;line-height:107%;mso-pagination:widow-orphan;font-size:11pt;font-family:\"Calibri\",sans-serif;mso-fareast-font-family:Calibri;color:#000}span.SpellE[data-v-0eaf07a3]{mso-style-name:\"\";mso-spl-e:yes}.MsoChpDefault[data-v-0eaf07a3]{mso-style-type:export-only;mso-default-props:yes;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:\"Times New Roman\";mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-bidi-font-family:\"Times New Roman\";mso-bidi-theme-font:minor-bidi}.MsoPapDefault[data-v-0eaf07a3]{mso-style-type:export-only;margin-bottom:8pt;line-height:107%}.WordSection1[data-v-0eaf07a3]{size:11in 8.5in;mso-page-orientation:landscape;margin:70.5pt 1in 70pt;mso-header-margin:.5in;mso-footer-margin:.5in;mso-paper-source:0}div.WordSection1[data-v-0eaf07a3]{page:WordSection1}table.MsoNormalTable[data-v-0eaf07a3]{mso-style-name:\"Table Normal\";mso-tstyle-rowband-size:0;mso-tstyle-colband-size:0;mso-style-noshow:yes;mso-style-priority:99;mso-style-parent:\"\";mso-padding-alt:0 5.4pt 0 5.4pt;mso-para-margin-top:0;mso-para-margin-right:0;mso-para-margin-bottom:8pt;mso-para-margin-left:0;line-height:107%;mso-pagination:widow-orphan;font-size:11pt;font-family:\"Calibri\",sans-serif;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-bidi-font-family:\"Times New Roman\";mso-bidi-theme-font:minor-bidi}.bottom-tabs[data-v-0eaf07a3]{width:100%}.nav-menu-2 .w-nav-menu[data-v-0eaf07a3]{height:66px}.w-nav-link[data-v-0eaf07a3]{padding:20px}#dropitem22[data-v-0eaf07a3]{margin-top:0}.nav-link-3[data-v-0eaf07a3]{text-align:center!important}.w-col-10[data-v-0eaf07a3]{width:50%}.card[data-v-0eaf07a3]{border-radius:10px;box-shadow:0 1px 15px -5px hsla(0,0%,47.8%,.5)!important;min-height:840px}.scroll[data-v-0eaf07a3]{height:380px;overflow:auto;text-align:center}#kpl2[data-v-0eaf07a3],.scroll[data-v-0eaf07a3]{margin-left:auto;margin-right:auto}#kpl2[data-v-0eaf07a3]{width:90%}.tagbtn[data-v-0eaf07a3]{background-color:#2fb7ff;color:#fff!important;padding:1px 5px;border-radius:10px}.readmore[data-v-0eaf07a3]{border:solid #2fb7ff;iborder-radius:3px}.readmore[data-v-0eaf07a3]:hover{background:rgba(20,160,253,.82)!important;color:#fff!important}.card[data-v-0eaf07a3],.col-sm-5[data-v-0eaf07a3],.column-title[data-v-0eaf07a3],.section-title[data-v-0eaf07a3]{margin-top:50px;margin-bottom:50px}.comp-show-container[data-v-0eaf07a3]{width:50%}.row[data-v-0eaf07a3]{width:100%}@media screen and (max-width:1300px){.comp-show-container[data-v-0eaf07a3],.row[data-v-0eaf07a3]{width:100%!important}.card[data-v-0eaf07a3]{height:auto}}.news-h[data-v-0eaf07a3]{margin-top:50px!important}.fixyFH[data-v-0eaf07a3]{text-align:center}h1[data-v-0eaf07a3],h2[data-v-0eaf07a3]{color:#4d5052!important}h4[data-v-0eaf07a3]{color:#a9a9a9}.details-wrapper p[data-v-0eaf07a3]{text-align:justify}#kpl2 p[data-v-0eaf07a3]{padding:20px}#i[data-v-0eaf07a3]{display:block;color:#000}.card[data-v-0eaf07a3]:hover{box-shadow:0 0 5px -2px!important;transition:none!important}.nuxt__build_indicator[data-v-0eaf07a3]{box-sizing:border-box;font-family:calibri;padding:15px;border-radius:1px;width:420px;z-index:2;font-size:24px;line-height:1.2rem;font-style:calibri;background-color:#fff!important}.nuxt__build_indicator2[data-v-0eaf07a3]{width:380px;height:200px;font-size:20px;line-height:1.2rem}.nuxt__build_indicator2[data-v-0eaf07a3],.nuxt__build_indicator3[data-v-0eaf07a3]{box-sizing:border-box;font-family:calibri;border-radius:1px;margin:15px;box-shadow:1px 1px 2px 2px rgba(0,0,0,.2);z-index:3;font-style:calibri;background-color:#fff!important}.nuxt__build_indicator3[data-v-0eaf07a3]{width:420px;font-size:19px}.span[data-v-0eaf07a3],i[data-v-0eaf07a3]{color:dark-grey!important;display:block}.main-div[data-v-0eaf07a3]{background:#f2f2f2;display:-webkit-box;font-family:Roboto,\"Segoe UI\",Tahoma,sans-serif}.col-A[data-v-0eaf07a3],.col-B[data-v-0eaf07a3]{width:50%}.top-banner[data-v-0eaf07a3]{height:120px;background:#fff;margin:20px}.description-box[data-v-0eaf07a3]{background:#fff;margin:20px;padding:20px;font-size:16px}.exec-image[data-v-0eaf07a3]{width:100px}.info-box[data-v-0eaf07a3]{background:#fff;margin:20px;padding:20px;font-size:14px}li[data-v-0eaf07a3]{-webkit-appearance:auto;-moz-appearance:auto;appearance:auto;margin:10px}ul[data-v-0eaf07a3]{display:inline}.key-management[data-v-0eaf07a3]{height:335px;background:#fff;margin:20px;font-size:16px}.comp-exec-1[data-v-0eaf07a3],.comp-exec-2[data-v-0eaf07a3]{width:50%}.exec-comp-div[data-v-0eaf07a3]{display:-webkit-box;text-align:-webkit-center}h3[data-v-0eaf07a3]{font-size:18px;text-align:center;padding:10px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/companies/_id/index.vue?vue&type=template&id=0eaf07a3&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main-div"},[_vm._ssrNode("<div class=\"col-A\" data-v-0eaf07a3>"+((!(_vm.item.logo_item==''))?("<div class=\"col-sm-5\" data-v-0eaf07a3>"+((_vm.item.logo_item)?("<img"+(_vm._ssrAttr("src",_vm.item.logo_item))+" class=\"nuxt__build_indicator2\" data-v-0eaf07a3>"):"<!---->")+"</div>"):"<!---->")+" <br data-v-0eaf07a3> <div class=\"info-box\" data-v-0eaf07a3>"+_vm._ssrEscape("\n        "+_vm._s(_vm.item.description)+"\n    ")+"</div><br data-v-0eaf07a3> "+(((_vm.item.state) || (_vm.item.phone) || (_vm.item.country) || (!_vm.item.website ==='') || (!_vm.item.email==='') || (!_vm.item.facebook ==='') || (!_vm.item.github ==='') || (!_vm.item.medium ==='') || (!_vm.item.youtube ==='') || (!_vm.item.pinterest ===''))?("<div class=\"info-box\" data-v-0eaf07a3><ul data-v-0eaf07a3><li data-v-0eaf07a3><b data-v-0eaf07a3>Location:</b>"+_vm._ssrEscape(_vm._s(_vm.item.city)+"\n            "+_vm._s(_vm.item.state)+"  "+_vm._s(_vm.item.country_item)+"\n          ")+"</li> "+((_vm.item.phone)?("<li data-v-0eaf07a3><b data-v-0eaf07a3>Phone:</b>"+_vm._ssrEscape("\n              "+_vm._s(_vm.item.phone)+"\n          ")+"</li>"):"<!---->")+" "+((!(_vm.item.website==''))?("<li data-v-0eaf07a3><b data-v-0eaf07a3>Website:</b> <a href=\"#\" data-v-0eaf07a3>"+_vm._ssrEscape(" "+_vm._s(_vm.item.website))+"</a></li>"):"<!---->")+" "+((_vm.item.founders)?("<li data-v-0eaf07a3><b data-v-0eaf07a3>Founders:</b>"+_vm._ssrEscape("\n            "+_vm._s(_vm.item.founders)+"\n           ")+"</li>"):"<!---->")+" "+((_vm.item.founding_yr)?("<li data-v-0eaf07a3><b data-v-0eaf07a3>Founded:</b>"+_vm._ssrEscape("\n            "+_vm._s(_vm.item.founding_yr)+"\n           ")+"</li>"):"<!---->")+" "+((!(_vm.item.email==='') || !(_vm.item.facebook ==='') || !(_vm.item.github ==='') || !(_vm.item.medium ==='') || !(_vm.item.youtube ==='') || !(_vm.item.pinterest ===''))?("<li data-v-0eaf07a3>"+((!(_vm.item.email==='' || _vm.item.email == undefined))?("<span data-v-0eaf07a3><br data-v-0eaf07a3><b data-v-0eaf07a3>Email:</b> <a"+(_vm._ssrAttr("href",("mailto:" + (_vm.item.email))))+" class=\"mdi mdi-envelope about-info-title\" data-v-0eaf07a3>"+_vm._ssrEscape(_vm._s(_vm.item.email)+"\n          ")+"</a><br data-v-0eaf07a3></span>"):"<!---->")+" "+((!(_vm.item.facebook ===''))?("<span data-v-0eaf07a3><a"+(_vm._ssrAttr("href",_vm.item.facebook))+" target=\"_blank\" mdi mdi-facebook data-v-0eaf07a3></a></span>"):"<!---->")+" "+((!(_vm.item.github ===''))?("<span data-v-0eaf07a3><a"+(_vm._ssrAttr("href",_vm.item.github))+" target=\"_blank\" class=\"mdi mdi-github\" data-v-0eaf07a3></a></span>"):"<!---->")+" "+((!(_vm.item.medium ===''))?("<span data-v-0eaf07a3><a"+(_vm._ssrAttr("href",_vm.item.medium))+" target=\"_blank\" class=\"mdi mdi-medium\" data-v-0eaf07a3></a></span>"):"<!---->")+" "+((!(_vm.item.youtube ===''))?("<span data-v-0eaf07a3><a"+(_vm._ssrAttr("href",_vm.item.youtube))+" target=\"_blank\" class=\"mdi mdi-youtube\" data-v-0eaf07a3></a></span>"):"<!---->")+" "+((!(_vm.item.pinterest ===''))?("<span data-v-0eaf07a3><a"+(_vm._ssrAttr("href",_vm.item.pinterest))+" target=\"_blank\" class=\"mdi mdi-pinterest\" data-v-0eaf07a3></a></span>"):"<!---->")+"</li>"):"<!---->")+"</ul></div>"):"<!---->")+"</div> "),_vm._ssrNode("<div class=\"col-B\" data-v-0eaf07a3>","</div>",[_vm._ssrNode((_vm._ssrList((_vm.posts),function(post){return (((!_vm.executives.length)?("<div class=\"key-management\" data-v-0eaf07a3><h3 data-v-0eaf07a3>key management</h3> <div class=\"exec-comp-div\" data-v-0eaf07a3><div class=\"comp-exec-1\" data-v-0eaf07a3>"+((!(post.pic_item=== undefined))?("<img"+(_vm._ssrAttr("src",post.pic_item))+" class=\"exec-image\" data-v-0eaf07a3>"):"<!---->")+" <b data-v-0eaf07a3>"+_vm._ssrEscape(" "+_vm._s(post.execheader)+" :")+"</b><br data-v-0eaf07a3>"+_vm._ssrEscape("\n               "+_vm._s(post.execname)+"\n\n          ")+((!(post.linkedin ==='' ))?("<span data-v-0eaf07a3><a"+(_vm._ssrAttr("href",post.linkedin))+" target=\"_blank\" class=\"\n             mdi mdi-linkedin\" data-v-0eaf07a3></a></span>"):"<!---->")+" "+((post.funding)?("<span class=\"description-box\" data-v-0eaf07a3><b data-v-0eaf07a3>funding to date:</b>"+_vm._ssrEscape("\n            "+_vm._s(post.funding)+"\n          ")+"</span>"):"<!---->")+" <br data-v-0eaf07a3></div></div></div>"):"<!---->"))}))+" "+(_vm._ssrList((_vm.executives),function(executive){return (((!(_vm.executives.length == undefined))?("<div class=\"key-management\" data-v-0eaf07a3><h3 data-v-0eaf07a3>key management</h3> <div class=\"exec-comp-div\" data-v-0eaf07a3><div class=\"comp-exec-1\" data-v-0eaf07a3>"+((!(executive.pic_item === undefined))?("<img"+(_vm._ssrAttr("src",executive.pic_item))+" class=\"exec-image\" data-v-0eaf07a3>"):"<!---->")+" <ul data-v-0eaf07a3><li data-v-0eaf07a3><b data-v-0eaf07a3>"+_vm._ssrEscape(_vm._s(executive.title)+":")+"</b><br data-v-0eaf07a3>"+_vm._ssrEscape("\n                "+_vm._s(executive.first)+" "+_vm._s(executive.last)+"\n                ")+"<br data-v-0eaf07a3></li> "+((!(executive.email ==''))?("<span data-v-0eaf07a3><b data-v-0eaf07a3>Email:</b> <a class=\"mdi mdi-envelope about-info-title\" data-v-0eaf07a3>"+_vm._ssrEscape(" "+_vm._s(executive.email))+"</a><br data-v-0eaf07a3></span>"):"<!---->")+" "+((!(executive.linkedIn ===''))?("<span data-v-0eaf07a3><a"+(_vm._ssrAttr("href",executive.linkedIn))+" target=\"_blank\" class=\"mdi mdi-linkedin\" data-v-0eaf07a3></a></span>"):"<!---->")+" "+((!(executive.twitterurl === ''))?("<span data-v-0eaf07a3><a"+(_vm._ssrAttr("href",executive.twitterurl))+" target=\"_blank\" class=\"mdi mdi-twitter\" data-v-0eaf07a3></a></span>"):"<!---->")+" "+((!(executive.facebook ===''))?("<span data-v-0eaf07a3><a"+(_vm._ssrAttr("href",executive.facebook))+" target=\"_blank\" class=\"mdi mdi-facebook\" data-v-0eaf07a3></a></span>"):"<!---->")+" "+((!(executive.github ===''))?("<span data-v-0eaf07a3><a"+(_vm._ssrAttr("href",executive.github))+" target=\"_blank\" class=\"mdi mdi-github\" data-v-0eaf07a3></a></span>"):"<!---->")+" "+((!(executive.instagram ===''))?("<span data-v-0eaf07a3><a"+(_vm._ssrAttr("href",executive.instagram))+" target=\"_blank\" class=\"mdi mdi-instagram\" data-v-0eaf07a3></a></span>"):"<!---->")+" "+((!(executive.youtube ===''))?("<span data-v-0eaf07a3><a"+(_vm._ssrAttr("href",executive.youtube))+" target=\"_blank\" class=\"mdi mdi-youtube\" data-v-0eaf07a3></a></span>"):"<!---->")+" "+((!(executive.pinterest ===''))?("<span data-v-0eaf07a3><a"+(_vm._ssrAttr("href",executive.pinterest))+" target=\"_blank\" class=\"mdi mdi-pinterest\" data-v-0eaf07a3></a></span>"):"<!---->")+" "+((!(executive.googleplus ==''))?("<span data-v-0eaf07a3><a"+(_vm._ssrAttr("href",executive.googleplus))+" target=\"_blank\" class=\"mdi mdi-googleplus\" data-v-0eaf07a3></a></span>"):"<!---->")+" "+((!(executive.discord ==''))?("<span data-v-0eaf07a3><a"+(_vm._ssrAttr("href",executive.discord))+" target=\"_blank\" class=\"mdi mdi-discord\" data-v-0eaf07a3></a></span>"):"<!---->")+" "+((!(executive.snapchat ==''))?("<span data-v-0eaf07a3><a"+(_vm._ssrAttr("href",executive.snapchat))+" target=\"_blank\" class=\"mdi mdi-snapchat\" data-v-0eaf07a3></a></span>"):"<!---->")+" "+((!(executive.telegram ==''))?("<span data-v-0eaf07a3><a"+(_vm._ssrAttr("href",executive.telegram))+" target=\"_blank\" class=\"mdi mdi-telegram\" data-v-0eaf07a3></a></span>"):"<!---->")+" "+((!(executive.angellist ==''))?("<span data-v-0eaf07a3><a"+(_vm._ssrAttr("href",executive.angellist))+" target=\"_blank\" class=\"mdi mdi-angellist\" data-v-0eaf07a3></a></span>"):"<!---->")+"</ul></div></div></div>"):"<!---->"))}))+" <br data-v-0eaf07a3> "+(_vm._ssrList((_vm.raises),function(raise){return ("<div class=\"info-box\""+(_vm._ssrStyle(null,null, { display: (!(_vm.raises.length == undefined)) ? '' : 'none' }))+" data-v-0eaf07a3>"+_vm._ssrEscape("\n\n            "+_vm._s(raise.item_date)+"\n             ")+((!(raise.url == undefined))?("<a"+(_vm._ssrAttr("href",raise.url))+" target=\"_blank\" class=\"btn btn-link\" data-v-0eaf07a3>"+_vm._ssrEscape(" "+_vm._s(raise.raise_type)+" "+_vm._s(raise.other))+"</a>"):"<!---->")+" <br data-v-0eaf07a3>"+_vm._ssrEscape(" "+_vm._s(raise.amount)+"  ")+"<br data-v-0eaf07a3>"+_vm._ssrEscape("\n                Investors: "+_vm._s(raise.lead)+" "+_vm._s(raise.participating)+"\n\n      ")+"</div>")}))+" "),_vm._l((_vm.posts),function(post){return (!(_vm.posts.length == undefined))?_vm._ssrNode("<div data-v-0eaf07a3>","</div>",[_vm._ssrNode((((!post.funding =='')|| (!post.funding == undefined)|| (!post.advisors.length == undefined)|| (post.advisors ===''))?("<div class=\"info-box\" data-v-0eaf07a3>"+((!(post.funding =='') || !(post.funding == undefined))?("<span data-v-0eaf07a3><b data-v-0eaf07a3>Total funding</b><br data-v-0eaf07a3>"+_vm._ssrEscape(" "+_vm._s(post.funding)+"\n                  ")+"<br data-v-0eaf07a3></span>"):"<!---->")+" "+((!(post.investors == ''))?("<span data-v-0eaf07a3><b data-v-0eaf07a3>Investors:</b>"+_vm._ssrEscape(_vm._s(post.investors)+"\n              ")+"</span>"):"<!---->")+" "+((!(post.advisors.length == undefined || post.advisors ===''))?("<span data-v-0eaf07a3><b data-v-0eaf07a3>Advisors</b>"+_vm._ssrEscape(_vm._s(post.advisors))+"<br data-v-0eaf07a3></span>"):"<!---->")+"</div>"):"<!---->")+" "),(post.interest)?_vm._ssrNode("<div class=\"info-box\" data-v-0eaf07a3>","</div>",[(post.interest)?_vm._ssrNode("<span data-v-0eaf07a3>","</span>",[_vm._ssrNode("<br data-v-0eaf07a3><b data-v-0eaf07a3>Article Snippit: </b><br data-v-0eaf07a3><br data-v-0eaf07a3>"+_vm._ssrEscape(" "+_vm._s(post.interest))+"<br data-v-0eaf07a3> <br data-v-0eaf07a3> "),_c('nuxt-link',{staticClass:"gardient-button",attrs:{"to":'/posts/' + post.id}},[_vm._v(" See Article ")])],2):_vm._e()]):_vm._e()],2):_vm._e()})],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/companies/_id/index.vue?vue&type=template&id=0eaf07a3&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/companies/_id/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  methods: {
    openItem: function (website) {
      window.open(website);
    }
  },
  computed: { ...Object(external_vuex_["mapState"])({
      starter: state => state.company.lending,
      active: state => state.company.activeInfo,
      first: state => state.company.firstLoad,
      allCompanies: state => state.company.allCompanies,
      allPosts: state => state.allPosts
    }),

    items() {
      if (this.allCompanies.length) {
        return this.allCompanies;
      } else this.allCompanies.length;

      {
        return this.first;
      }
    },

    id() {
      return this.item.id;
    },

    item() {
      if (this.allCompanies) {
        return this.allCompanies.find(p => p.id == this.$route.params.id);
      } else {
        return this.starter.find(p => p.id == this.$route.params.id);
      }
    }

  },

  async asyncData({
    params,
    $axios
  }) {
    let response = await $axios.get('executives?cid=' + params.id);
    let result = await $axios.get('raises?cid=' + params.id);
    let retval = await $axios.get('posts?compid=' + params.id);
    return {
      executives: response.data,
      raises: result.data,
      posts: retval.data
    };
  }

});
// CONCATENATED MODULE: ./pages/companies/_id/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var companies_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/companies/_id/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(185)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  companies_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0eaf07a3",
  "6682fb2a"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map