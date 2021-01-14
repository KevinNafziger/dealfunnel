import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _426e4644 = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages/about/index" */))
const _af504094 = () => interopDefault(import('..\\pages\\builder\\index.vue' /* webpackChunkName: "pages/builder/index" */))
const _0e8b4fb6 = () => interopDefault(import('..\\pages\\companies\\index.vue' /* webpackChunkName: "pages/companies/index" */))
const _7d451f19 = () => interopDefault(import('..\\pages\\data\\index.vue' /* webpackChunkName: "pages/data/index" */))
const _3048380a = () => interopDefault(import('..\\pages\\deals\\index.vue' /* webpackChunkName: "pages/deals/index" */))
const _189ab8e8 = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages/login/index" */))
const _16f32a0e = () => interopDefault(import('..\\pages\\logout\\index.vue' /* webpackChunkName: "pages/logout/index" */))
const _4555bf60 = () => interopDefault(import('..\\pages\\news\\index.vue' /* webpackChunkName: "pages/news/index" */))
const _6a37d8d2 = () => interopDefault(import('..\\pages\\newsletters\\index.vue' /* webpackChunkName: "pages/newsletters/index" */))
const _c93db384 = () => interopDefault(import('..\\pages\\posts\\index.vue' /* webpackChunkName: "pages/posts/index" */))
const _64592b48 = () => interopDefault(import('..\\pages\\raises\\index.vue' /* webpackChunkName: "pages/raises/index" */))
const _2af44600 = () => interopDefault(import('..\\pages\\register\\index.vue' /* webpackChunkName: "pages/register/index" */))
const _7ae77f12 = () => interopDefault(import('..\\pages\\reports\\index.vue' /* webpackChunkName: "pages/reports/index" */))
const _78c65c17 = () => interopDefault(import('..\\pages\\previews\\builderpreview.vue' /* webpackChunkName: "pages/previews/builderpreview" */))
const _4a9edb63 = () => interopDefault(import('..\\pages\\tours\\reports.vue' /* webpackChunkName: "pages/tours/reports" */))
const _56985f24 = () => interopDefault(import('..\\pages\\companies\\_id\\index.vue' /* webpackChunkName: "pages/companies/_id/index" */))
const _5b98403a = () => interopDefault(import('..\\pages\\newsletters\\_id\\index.vue' /* webpackChunkName: "pages/newsletters/_id/index" */))
const _c7e944c8 = () => interopDefault(import('..\\pages\\posts\\_id\\index.vue' /* webpackChunkName: "pages/posts/_id/index" */))
const _cd61017a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _426e4644,
    name: "about"
  }, {
    path: "/builder",
    component: _af504094,
    name: "builder"
  }, {
    path: "/companies",
    component: _0e8b4fb6,
    name: "companies"
  }, {
    path: "/data",
    component: _7d451f19,
    name: "data"
  }, {
    path: "/deals",
    component: _3048380a,
    name: "deals"
  }, {
    path: "/login",
    component: _189ab8e8,
    name: "login"
  }, {
    path: "/logout",
    component: _16f32a0e,
    name: "logout"
  }, {
    path: "/news",
    component: _4555bf60,
    name: "news"
  }, {
    path: "/newsletters",
    component: _6a37d8d2,
    name: "newsletters"
  }, {
    path: "/posts",
    component: _c93db384,
    name: "posts"
  }, {
    path: "/raises",
    component: _64592b48,
    name: "raises"
  }, {
    path: "/register",
    component: _2af44600,
    name: "register"
  }, {
    path: "/reports",
    component: _7ae77f12,
    name: "reports"
  }, {
    path: "/previews/builderpreview",
    component: _78c65c17,
    name: "previews-builderpreview"
  }, {
    path: "/tours/reports",
    component: _4a9edb63,
    name: "tours-reports"
  }, {
    path: "/companies/:id",
    component: _56985f24,
    name: "companies-id"
  }, {
    path: "/newsletters/:id",
    component: _5b98403a,
    name: "newsletters-id"
  }, {
    path: "/posts/:id",
    component: _c7e944c8,
    name: "posts-id"
  }, {
    path: "/",
    component: _cd61017a,
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
