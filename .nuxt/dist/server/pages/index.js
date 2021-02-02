exports.ids = [6];
exports.modules = {

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(192);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("62dc1e9b", content, true, context)
};

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_456bd9f4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(121);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_456bd9f4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_456bd9f4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_456bd9f4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_456bd9f4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(38);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(193);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, ".p-class-j[data-v-456bd9f4]{text-align:justify;padding:10px}a[data-v-456bd9f4]{box-shadow:none;color:#fff;text-decoration:none!important}body[data-v-456bd9f4]{margin:0;padding:0;width:100%;height:100%;font-family:arial!important}.aware-card[data-v-456bd9f4]{max-width:1000px;margin:auto;padding:20px;width:90%;border-radius:3px;box-shadow:0 0 10px -5px;background-color:#fff}.header-container[data-v-456bd9f4]{box-shadow:0 1px 3px 0 #a5a5a5!important}.testimonials[data-v-456bd9f4]{font-family:arial!important;margin:200px auto 100px;display:grid;grid-template-columns:repeat(auto-fit,minmax(350px,1fr));grid-gap:20px;max-width:1100px;padding-bottom:200px}.testimonials .card[data-v-456bd9f4]{position:relative;max-width:440px;width:auto;margin:0 auto;background:rgba(6,22,33,.47843);padding:20px;box-sizing:border-box;text-align:center;box-shadow:0 10px 40px grey;overflow:hidden}.testimonials .card .layer[data-v-456bd9f4]{position:absolute;top:calc(100% - 3px);width:100%;height:100%;left:0;background:linear-gradient(#4f81b4,#4f81bd);z-index:1;transition:.5s}.testimonials .card:hover .layer[data-v-456bd9f4]{top:0}.testimonials .card .content[data-v-456bd9f4]{position:relative;z-index:2}.testimonials .card .content p[data-v-456bd9f4]{font-size:18px;line-height:24px;color:#fff}.testimonials .card .content .image[data-v-456bd9f4]{width:100px;height:100px;margin:0 auto;border-radius:50%;overflow:hidden;box-shadow:0 10px 20px grey}.testimonials .card .content .details h2[data-v-456bd9f4]{font-size:15px;color:#fff!important;margin-top:20px}.testimonials .card .content .details h2 span[data-v-456bd9f4]{color:#fff;font-size:12px;transtion:.5s}.testimonials .card:hover .content .details h2 span[data-v-456bd9f4]{color:#fff}@media screen and (max-width:1550px){.img-G[data-v-456bd9f4]{display:none}.intro-p[data-v-456bd9f4]{padding:20px;margin:auto;max-width:600px!important;display:flow-root}}.img-G[data-v-456bd9f4]{right:75px;position:absolute;top:290px}.gardient-button[data-v-456bd9f4]{display:grid;background-image:linear-gradient(200deg,#4f81bd 10%,#4f81bd 39%,#8ab4f8 80%);background-size:400% 400%!important;-webkit-animation:gradient 15s ease infinite!important;animation:gradient 15s ease infinite!important;width:-webkit-fit-content!important;width:-moz-fit-content!important;width:fit-content!important;margin-left:auto!important;margin-right:auto!important;border-radius:10px!important;border:none!important;padding:10px 20px!important;font-family:poppins!important;color:#fff!important;font-size:12px!important;transition:.3s;margin-top:20px;margin-bottom:20px;font-size:16px!important;box-shadow:0 1px 10px -3px #474747!important}.gardient-button[data-v-456bd9f4]:hover{box-shadow:0 1px 5px -3px #474747!important}.execspottittle[data-v-456bd9f4]{font-size:40px;background:-webkit-linear-gradient(#6b69ca,rgba(20,160,253,.82));-webkit-background-clip:text;-webkit-text-fill-color:transparent;color:rgba(20,160,253,.82);padding:15px}.featuredmenusection[data-v-456bd9f4]{border-radius:10px;background-color:#fff;box-shadow:0 1px 3px 0 #a5a5a5;overflow:none;margin-left:auto;margin-right:auto;margin-bottom:100px;padding:10px 10px 100px;width:90%;transition:.5s}.featuredmenusection[data-v-456bd9f4]:hover{box-shadow:0 0 10px -5px #696969}.rem-img[data-v-456bd9f4]{top:350px;left:8rem;position:absolute}@media screen and (max-width:1550px){.rem-img[data-v-456bd9f4]{top:300px;left:8rem;position:static;display:table;margin-left:auto;margin-right:auto;margin-bottom:50px;transition:.5s}}.text-block-20[data-v-456bd9f4]{background-color:#5082be!important;border-radius:10px;color:#fff!important;padding:14px 25px;width:-webkit-max-content;width:-moz-max-content;width:max-content;transition:.5s;margin-top:50px;margin-bottom:50px}.text-block-20[data-v-456bd9f4]:hover{background:#ff9140!important;box-shadow:0 0 6px -1px rgba(67,69,70,.34902),inset 0 0 26px 0 #ffe844!important;cursor:pointer!important}.intro-title[data-v-456bd9f4]{position:static;display:block;margin:0;padding:0 46px;background-color:#4286ff;background-image:linear-gradient(200deg,#4f81bd 10%,rgba(0,0,0,.36863) 39%,#4f81bd 80%);color:#fff;font-size:31px;line-height:52px;font-weight:400;text-align:center;box-shadow:0 1px 3px 0 #a5a5a5!important}.intro[data-v-456bd9f4]{position:relative;padding:30px;background-position:50%;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-size:cover;display:flex;margin-left:auto!important;margin-right:auto!important;margin-top:25px;height:auto;width:300px}.intro[data-v-456bd9f4],.intro h1[data-v-456bd9f4]{box-sizing:border-box}.intro h1[data-v-456bd9f4]{position:absolute;top:10%;left:5%;width:90%;font-size:1.5rem;color:#000;background-color:#d3d3d3;padding:10px;border-radius:10px;box-shadow:3px 3px 3px #000;border:1px solid #000}.intro-p[data-v-456bd9f4]{padding:20px;margin:auto;max-width:671px;display:flow-root;color:#474747;line-height:1.9;letter-spacing:.6px;transition:1s}@media (min-width:768px){.intro h1[data-v-456bd9f4]{font-size:2rem}}.featured-posts[data-v-456bd9f4]{display:flex;padding:20px;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center}p.MsoNormal[data-v-456bd9f4]{line-height:35px;color:#474747!important}h2[data-v-456bd9f4]{color:#4f81bd!important}b[data-v-456bd9f4]{color:#4f81bd}.images[data-v-456bd9f4]{width:auto;margin:0;border-radius:20px}.footer-info-links[data-v-456bd9f4]{width:33.33%}.social-media-links[data-v-456bd9f4]{width:19%;display:inline-flex;justify-content:center}.footer-info-row[data-v-456bd9f4]{display:inline-flex;margin-top:16px;font-size:14px;font-weight:300;width:100%}.slack-link[data-v-456bd9f4]{margin-top:0}.footer[data-v-456bd9f4]{width:100%;height:70px;background-color:#4f81bd;color:#fff;bottom:0;position:fixed;text-align:center;z-index:9}.micro-txt[data-v-456bd9f4]{font-size:10px;margin-top:-12px;letter-spacing:.5px}.testi-p[data-v-456bd9f4]{text-align:justify;letter-spacing:.3px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/dealfunnel.53c5a5b.png";

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=456bd9f4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home-page"},[_vm._ssrNode("<section style=\"margin-bottom:30px;\" data-v-456bd9f4></section> "),_c('center'),_vm._ssrNode(" <br data-v-456bd9f4> "),_vm._ssrNode("<div class=\"aware-card\" data-v-456bd9f4>","</div>",[_vm._ssrNode("<h1 class=\"intro-title\" style=\"border-radius:3px; margin-bottom: 0px; opacity: 1; transform: translateX(0px) translateY(0px) translateZ(0px);\" data-v-456bd9f4>Newsletters, data, and reports <br data-v-456bd9f4></h1><br data-v-456bd9f4> <p class=\"MsoNormal\" data-v-456bd9f4><span class=\"intro-p\" data-v-456bd9f4>\n    DealFunnel features articles, reports, searchable datasets and our popular biweekly <i data-v-456bd9f4>Big Fintech Newsletter.</i> Our newsletter has grown and added new coverage areas over time. It still has &quot;Big Fintech&quot; in its title, but its focus now encompasses technology businesses serving the financial services industry and beyond.\n    This includes companies in Blockchain, DLT and Crypto as well as in HealthTech, Artificial Intelligence, LegalTech, and Cybersecurity.\n  </span></p> <p class=\"intro-p\" data-v-456bd9f4><b data-v-456bd9f4>Exceptional</b> –\n  <span class=\"SpellE\" data-v-456bd9f4><i data-v-456bd9f4>The Big Fintech Newsletter</i></span>\n  is beloved by dealmakers including investment bankers, partners and associates of venture capital firms, industry attorneys, PE practitioners and corporate executives. The newsletter's core mission remains constant: to summarize every M&amp;A deal, capital raise, growth investment, divestiture, public offering and token sale for every featured category and subcategory within the newsletter's areas of focus, and to deliver that summary in an email to subscribers each  Tuesday and Thursday at or before 8am ET. Beyond this core focus, each newsletter highlights information for generating new business opportunities and for staying abreast of news on management changes, company pivots, reported M&amp;A rumors, busted deals and regulatory developments. Each newsletter typically also includes a link to a <i data-v-456bd9f4>DealFunnel</i> propietary report or article or includes the full text of an article or articles within the newsletter body. Subscribers also get access to all content from current and prior newsletters through <i data-v-456bd9f4>DealFunnel Online</i>.\n  </p> <p class=\"intro-p\" data-v-456bd9f4><b data-v-456bd9f4>Data Driven</b>–<span class=\"SpellE\" data-v-456bd9f4></span> <i data-v-456bd9f4>DealFunnel</i> subscribers also receive online access to searchable datasets on capital raises, companies and articles derived from those sections in the newsletter. The data can be exported to <i data-v-456bd9f4>Excel</i> and other spreadsheet programs.\n  <span style=\"mso-spacerun:yes\" data-v-456bd9f4></span></p> <p class=\"intro-p\" data-v-456bd9f4><b data-v-456bd9f4>Multi-channel support </b>–<span class=\"SpellE\" data-v-456bd9f4></span>\n  The <i data-v-456bd9f4>DealFunnel</i> team is here to help answer your questions. You can contact us by email,\n  phone or join our Slack channel.\n  <span style=\"mso-spacerun:yes\" data-v-456bd9f4></span></p> <p class=\"intro-p\" data-v-456bd9f4><b data-v-456bd9f4>Propietary Content</b>–<span class=\"SpellE\" data-v-456bd9f4></span> <i data-v-456bd9f4>DealFunnel Online</i> gives readers access to all of the propietary content from <i data-v-456bd9f4>the Big Fintech Newsletter.</i>\n  This propietary content includes reports on trending topics along with sets of auto-generated reports which include all of the company-related articles and capital raise data for that topic. <i data-v-456bd9f4>DealFunnel's</i> auto-generated reports are grouped by strategic action, size of expected raise, timing of expected raise, geography, subsector, and by broader categories such as 'Blockchain', 'Insurtech', 'Payments', 'AI', 'Lending' and 'OpenBanking. <i data-v-456bd9f4>DealFunnel</i> reports aggregate all of <i data-v-456bd9f4>DealFunnel's</i> own company-specific intelligence on that topic, derived from interviews with an executive or executives at the featured company.\n  Our reports can generate a &quot;wow&quot; from some readers when they see the sheer volume of company-specific intelligence they provide.\n  <i data-v-456bd9f4>DealFunnel</i> reports aren't designed to provide a quick overview but to serve practitioners who want to review a large amount of company-specific intelligence related to a topic in a single document. A <i data-v-456bd9f4>DealFunnel</i> report starts with a summary view highlighting the most actionable parts of each featured article. From this view, readers can scan all leads on a topic in order to quickly discover only those most relevant to them.\n  </p> <p class=\"intro-p\" data-v-456bd9f4><b data-v-456bd9f4>Value Proposition</b>–<span data-v-456bd9f4></span> <i data-v-456bd9f4>DealFunnel</i> provides two main sources of value to subscribers. The first is a comprehensive summary of all equity raises, M&amp;A, public offerings and token sales within our core focus areas, contained in our newsletter and delivered every Tuesday and Thursday morning. Readers trust <i data-v-456bd9f4>DealFunnel</i> for a complete, accurate account of strategic transactions for all featured categories in our newsletter's core areas. We built this trust by consistently delivering a complete, reliable summary of financial transactions in each and every newsletter. Readers know they can rely on our newsletter to form their own picture of change and can also utilize the complete transactions summary to provide useful insights to their clients. <i data-v-456bd9f4>DealFunnel</i> propietary reports and articles, featured in the newsletter and through <i data-v-456bd9f4>DealFunnel Online</i>, offer another key source of value for subscribers. <i data-v-456bd9f4>DealFunnel's</i> propietary content serves as a rich repository of primary source leads on forward-looking company strategy that are rarely available in other publications.\n  <i data-v-456bd9f4>The Big Fintech Newsletter</i> arrives in your inbox every Tuesday and Thursday morning. It is easy-to-read and designed so you can quickly absorb the information you need and go on with your day, armed with new insights on how your industry is changing. Capturing even a subset of the newsletter's information on your own would require hours of alternating between feeds, blogs, online news portals, corporate websites and online trade publications. The newsletter also highlights new revenue opportunities from our propietary reports and articles and subscribers also get complete access to <i data-v-456bd9f4>DealFunnel Online</i> and all of its searchable datasets and propietary content.\n  A subscription to <i data-v-456bd9f4>DealFunnel</i> is $79.99 a month. To subscribe, or to learn more about what is included in a <i data-v-456bd9f4>DealFunnel</i> subscription, click on <i data-v-456bd9f4>Plan Details</i>.\n  </p> "),_c('nuxt-link',{staticClass:"gardient-button",attrs:{"to":"/subscription"}},[_vm._v("Plan Details")]),_vm._ssrNode(" <p class=\"intro-p\" data-v-456bd9f4><b data-v-456bd9f4>Team</b>–<span data-v-456bd9f4></span> <i data-v-456bd9f4>DealFunnel</i> is the lead publication of <i data-v-456bd9f4>Fintech Horizons Media</i>, a news organization founded by deal information specialists. The <i data-v-456bd9f4>DealFunnel</i> team includes Kevin Nafziger, CEO and Co-founder; Ben Koconis, Editor and Co-founder; Rebecca Wenzel, Americas Editor; Abraham Felix, Head of IT; and Berenice Cabellero, Head of Research.\n  </p>")],2),_vm._ssrNode(" <div class=\"testimonials\" data-v-456bd9f4><div class=\"card\" data-v-456bd9f4><div class=\"layer\" data-v-456bd9f4></div> <div class=\"content\" data-v-456bd9f4><p class=\"testi-p\" data-v-456bd9f4><i data-v-456bd9f4>DealFunnel</i> offers insightful content about innovative firms in the industry, allowing us to keep abreast of M&amp;A and capital raises in the US and globally. The platform presents Fintech opportunities that we might not have seen in more traditional news or data sources.</p> <img src=\"https://filesforfintech.s3.amazonaws.com/EvolveCapital.png\" alt data-v-456bd9f4> <div class=\"details\" data-v-456bd9f4><h2 data-v-456bd9f4><a href=\"https://www.evolve-capital.com/\" data-v-456bd9f4>Evolve Capital Partners</a><br data-v-456bd9f4> <span data-v-456bd9f4></span></h2></div></div></div> <div class=\"card\" data-v-456bd9f4><div class=\"layer\" data-v-456bd9f4></div> <div class=\"content\" data-v-456bd9f4><p class=\"testi-p\" data-v-456bd9f4>We love the newsletter. It is the best out there. It is not even close.\n        </p> <div class=\"image\" data-v-456bd9f4><img src=\"https://upload.wikimedia.org/wikipedia/commons/2/28/Female_portrait_placeholder_cropped.jpg\" alt class=\"images\" data-v-456bd9f4></div> <div class=\"details\" data-v-456bd9f4><h2 data-v-456bd9f4>\n            Head of Research, CVC Firm<br data-v-456bd9f4> <span data-v-456bd9f4></span></h2></div></div></div></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=456bd9f4&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  computed: { ...Object(external_vuex_["mapState"])({
      loadedPosts: pages => state.Post1 //post:  state.posts.post

    })
  },

  asyncData({
    userAgent
  }) {
    return {
      userAgent
    };
  }

});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(191)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "456bd9f4",
  "55d5ee33"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map