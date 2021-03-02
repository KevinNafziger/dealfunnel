import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _af3d5610 = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages/about/index" */))
const _231e8798 = () => interopDefault(import('..\\pages\\account\\index.vue' /* webpackChunkName: "pages/account/index" */))
const _5dc2116a = () => interopDefault(import('..\\pages\\builder\\index.vue' /* webpackChunkName: "pages/builder/index" */))
const _122fe46a = () => interopDefault(import('..\\pages\\companies\\index.vue' /* webpackChunkName: "pages/companies/index" */))
const _d016d66c = () => interopDefault(import('..\\pages\\customer-portal\\index.vue' /* webpackChunkName: "pages/customer-portal/index" */))
const _9bc92c36 = () => interopDefault(import('..\\pages\\data\\index.vue' /* webpackChunkName: "pages/data/index" */))
const _7e8dc79c = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages/login/index" */))
const _4cf532c5 = () => interopDefault(import('..\\pages\\logout\\index.vue' /* webpackChunkName: "pages/logout/index" */))
const _122b6b1c = () => interopDefault(import('..\\pages\\news\\index.vue' /* webpackChunkName: "pages/news/index" */))
const _77b64b4b = () => interopDefault(import('..\\pages\\newsletters\\index.vue' /* webpackChunkName: "pages/newsletters/index" */))
const _015434f2 = () => interopDefault(import('..\\pages\\posts\\index.vue' /* webpackChunkName: "pages/posts/index" */))
const _713ec73d = () => interopDefault(import('..\\pages\\process-payment\\index.vue' /* webpackChunkName: "pages/process-payment/index" */))
const _26423228 = () => interopDefault(import('..\\pages\\raises\\index.vue' /* webpackChunkName: "pages/raises/index" */))
const _22d04acc = () => interopDefault(import('..\\pages\\register\\index.vue' /* webpackChunkName: "pages/register/index" */))
const _3051b0c6 = () => interopDefault(import('..\\pages\\reports\\index.vue' /* webpackChunkName: "pages/reports/index" */))
const _aee614dc = () => interopDefault(import('..\\pages\\subscription\\index.vue' /* webpackChunkName: "pages/subscription/index" */))
const _1eb27ba5 = () => interopDefault(import('..\\pages\\tours\\builderpreview.vue' /* webpackChunkName: "pages/tours/builderpreview" */))
const _00090d17 = () => interopDefault(import('..\\pages\\tours\\reports.vue' /* webpackChunkName: "pages/tours/reports" */))
const _8c4eca20 = () => interopDefault(import('..\\pages\\companies\\_id\\index.vue' /* webpackChunkName: "pages/companies/_id/index" */))
const _665458af = () => interopDefault(import('..\\pages\\newsletters\\_id\\index.vue' /* webpackChunkName: "pages/newsletters/_id/index" */))
const _0cf95f68 = () => interopDefault(import('..\\pages\\posts\\_id\\index.vue' /* webpackChunkName: "pages/posts/_id/index" */))
const _d78e59e2 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _af3d5610,
    name: "about"
  }, {
    path: "/account",
    component: _231e8798,
    name: "account"
  }, {
    path: "/builder",
    component: _5dc2116a,
    name: "builder"
  }, {
    path: "/companies",
    component: _122fe46a,
    name: "companies"
  }, {
    path: "/customer-portal",
    component: _d016d66c,
    name: "customer-portal"
  }, {
    path: "/data",
    component: _9bc92c36,
    name: "data"
  }, {
    path: "/login",
    component: _7e8dc79c,
    name: "login"
  }, {
    path: "/logout",
    component: _4cf532c5,
    name: "logout"
  }, {
    path: "/news",
    component: _122b6b1c,
    name: "news"
  }, {
    path: "/newsletters",
    component: _77b64b4b,
    name: "newsletters"
  }, {
    path: "/posts",
    component: _015434f2,
    name: "posts"
  }, {
    path: "/process-payment",
    component: _713ec73d,
    name: "process-payment"
  }, {
    path: "/raises",
    component: _26423228,
    name: "raises"
  }, {
    path: "/register",
    component: _22d04acc,
    name: "register"
  }, {
    path: "/reports",
    component: _3051b0c6,
    name: "reports"
  }, {
    path: "/subscription",
    component: _aee614dc,
    name: "subscription"
  }, {
    path: "/tours/builderpreview",
    component: _1eb27ba5,
    name: "tours-builderpreview"
  }, {
    path: "/tours/reports",
    component: _00090d17,
    name: "tours-reports"
  }, {
    path: "/companies/:id",
    component: _8c4eca20,
    name: "companies-id"
  }, {
    path: "/newsletters/:id",
    component: _665458af,
    name: "newsletters-id"
  }, {
    path: "/posts/:id",
    component: _0cf95f68,
    name: "posts-id"
  }, {
    path: "/",
    component: _d78e59e2,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
