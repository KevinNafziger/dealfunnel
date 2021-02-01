import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _72e4327a = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages/about/index" */))
const _d9f8d328 = () => interopDefault(import('..\\pages\\builder\\index.vue' /* webpackChunkName: "pages/builder/index" */))
const _05b79e28 = () => interopDefault(import('..\\pages\\companies\\index.vue' /* webpackChunkName: "pages/companies/index" */))
const _7e3457ba = () => interopDefault(import('..\\pages\\data\\index.vue' /* webpackChunkName: "pages/data/index" */))
const _4910a51e = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages/login/index" */))
const _5a63f4fa = () => interopDefault(import('..\\pages\\logout\\index.vue' /* webpackChunkName: "pages/logout/index" */))
const _20f5d55a = () => interopDefault(import('..\\pages\\news\\index.vue' /* webpackChunkName: "pages/news/index" */))
const _76c97f4d = () => interopDefault(import('..\\pages\\newsletters\\index.vue' /* webpackChunkName: "pages/newsletters/index" */))
const _6851db18 = () => interopDefault(import('..\\pages\\posts\\index.vue' /* webpackChunkName: "pages/posts/index" */))
const _a7c9f634 = () => interopDefault(import('..\\pages\\raises\\index.vue' /* webpackChunkName: "pages/raises/index" */))
const _d48133ec = () => interopDefault(import('..\\pages\\register\\index.vue' /* webpackChunkName: "pages/register/index" */))
const _659335c8 = () => interopDefault(import('..\\pages\\reports\\index.vue' /* webpackChunkName: "pages/reports/index" */))
const _e83f7c60 = () => interopDefault(import('..\\pages\\subscription\\index.vue' /* webpackChunkName: "pages/subscription/index" */))
const _7a63b063 = () => interopDefault(import('..\\pages\\tours\\builderpreview.vue' /* webpackChunkName: "pages/tours/builderpreview" */))
const _354a9219 = () => interopDefault(import('..\\pages\\tours\\reports.vue' /* webpackChunkName: "pages/tours/reports" */))
const _1589cfae = () => interopDefault(import('..\\pages\\companies\\_id\\index.vue' /* webpackChunkName: "pages/companies/_id/index" */))
const _cae95426 = () => interopDefault(import('..\\pages\\newsletters\\_id\\index.vue' /* webpackChunkName: "pages/newsletters/_id/index" */))
const _fee2b9b4 = () => interopDefault(import('..\\pages\\posts\\_id\\index.vue' /* webpackChunkName: "pages/posts/_id/index" */))
const _7cb743cd = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _72e4327a,
    name: "about"
  }, {
    path: "/builder",
    component: _d9f8d328,
    name: "builder"
  }, {
    path: "/companies",
    component: _05b79e28,
    name: "companies"
  }, {
    path: "/data",
    component: _7e3457ba,
    name: "data"
  }, {
    path: "/login",
    component: _4910a51e,
    name: "login"
  }, {
    path: "/logout",
    component: _5a63f4fa,
    name: "logout"
  }, {
    path: "/news",
    component: _20f5d55a,
    name: "news"
  }, {
    path: "/newsletters",
    component: _76c97f4d,
    name: "newsletters"
  }, {
    path: "/posts",
    component: _6851db18,
    name: "posts"
  }, {
    path: "/raises",
    component: _a7c9f634,
    name: "raises"
  }, {
    path: "/register",
    component: _d48133ec,
    name: "register"
  }, {
    path: "/reports",
    component: _659335c8,
    name: "reports"
  }, {
    path: "/subscription",
    component: _e83f7c60,
    name: "subscription"
  }, {
    path: "/tours/builderpreview",
    component: _7a63b063,
    name: "tours-builderpreview"
  }, {
    path: "/tours/reports",
    component: _354a9219,
    name: "tours-reports"
  }, {
    path: "/companies/:id",
    component: _1589cfae,
    name: "companies-id"
  }, {
    path: "/newsletters/:id",
    component: _cae95426,
    name: "newsletters-id"
  }, {
    path: "/posts/:id",
    component: _fee2b9b4,
    name: "posts-id"
  }, {
    path: "/",
    component: _7cb743cd,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  const router = new Router(routerOptions)
  const resolve = router.resolve.bind(router)

  // encodeURI(decodeURI()) ~> support both encoded and non-encoded urls
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = encodeURI(decodeURI(to))
    }
    return resolve(to, current, append)
  }

  return router
}
