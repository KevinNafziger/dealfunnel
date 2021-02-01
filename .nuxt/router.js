import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _504012f2 = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _00b80556 = () => interopDefault(import('../pages/builder/index.vue' /* webpackChunkName: "pages/builder/index" */))
const _3cd683d5 = () => interopDefault(import('../pages/companies/index.vue' /* webpackChunkName: "pages/companies/index" */))
const _7f859246 = () => interopDefault(import('../pages/data/index.vue' /* webpackChunkName: "pages/data/index" */))
const _426ec13a = () => interopDefault(import('../pages/login/index.vue' /* webpackChunkName: "pages/login/index" */))
const _684ee3e6 = () => interopDefault(import('../pages/logout/index.vue' /* webpackChunkName: "pages/logout/index" */))
const _c935e3a2 = () => interopDefault(import('../pages/news/index.vue' /* webpackChunkName: "pages/news/index" */))
const _4ac59654 = () => interopDefault(import('../pages/newsletters/index.vue' /* webpackChunkName: "pages/newsletters/index" */))
const _9d17a166 = () => interopDefault(import('../pages/posts/index.vue' /* webpackChunkName: "pages/posts/index" */))
const _3582ec23 = () => interopDefault(import('../pages/raises/index.vue' /* webpackChunkName: "pages/raises/index" */))
const _a8cd7502 = () => interopDefault(import('../pages/register/index.vue' /* webpackChunkName: "pages/register/index" */))
const _1f350279 = () => interopDefault(import('../pages/reports/index.vue' /* webpackChunkName: "pages/reports/index" */))
const _6cf676f9 = () => interopDefault(import('../pages/subscription/index.vue' /* webpackChunkName: "pages/subscription/index" */))
const _086467cc = () => interopDefault(import('../pages/tours/builderpreview.vue' /* webpackChunkName: "pages/tours/builderpreview" */))
const _39022642 = () => interopDefault(import('../pages/tours/reports.vue' /* webpackChunkName: "pages/tours/reports" */))
const _cb20a780 = () => interopDefault(import('../pages/companies/_id/index.vue' /* webpackChunkName: "pages/companies/_id/index" */))
const _1d83673f = () => interopDefault(import('../pages/newsletters/_id/index.vue' /* webpackChunkName: "pages/newsletters/_id/index" */))
const _2e4a4890 = () => interopDefault(import('../pages/posts/_id/index.vue' /* webpackChunkName: "pages/posts/_id/index" */))
const _d9dec46e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _504012f2,
    name: "about"
  }, {
    path: "/builder",
    component: _00b80556,
    name: "builder"
  }, {
    path: "/companies",
    component: _3cd683d5,
    name: "companies"
  }, {
    path: "/data",
    component: _7f859246,
    name: "data"
  }, {
    path: "/login",
    component: _426ec13a,
    name: "login"
  }, {
    path: "/logout",
    component: _684ee3e6,
    name: "logout"
  }, {
    path: "/news",
    component: _c935e3a2,
    name: "news"
  }, {
    path: "/newsletters",
    component: _4ac59654,
    name: "newsletters"
  }, {
    path: "/posts",
    component: _9d17a166,
    name: "posts"
  }, {
    path: "/raises",
    component: _3582ec23,
    name: "raises"
  }, {
    path: "/register",
    component: _a8cd7502,
    name: "register"
  }, {
    path: "/reports",
    component: _1f350279,
    name: "reports"
  }, {
    path: "/subscription",
    component: _6cf676f9,
    name: "subscription"
  }, {
    path: "/tours/builderpreview",
    component: _086467cc,
    name: "tours-builderpreview"
  }, {
    path: "/tours/reports",
    component: _39022642,
    name: "tours-reports"
  }, {
    path: "/companies/:id",
    component: _cb20a780,
    name: "companies-id"
  }, {
    path: "/newsletters/:id",
    component: _1d83673f,
    name: "newsletters-id"
  }, {
    path: "/posts/:id",
    component: _2e4a4890,
    name: "posts-id"
  }, {
    path: "/",
    component: _d9dec46e,
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
