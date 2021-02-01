import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7d951e8a = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _0caf3098 = () => interopDefault(import('../pages/builder/index.vue' /* webpackChunkName: "pages/builder/index" */))
const _33e1f258 = () => interopDefault(import('../pages/companies/index.vue' /* webpackChunkName: "pages/companies/index" */))
const _7459dde3 = () => interopDefault(import('../pages/data/index.vue' /* webpackChunkName: "pages/data/index" */))
const _f7047134 = () => interopDefault(import('../pages/login/index.vue' /* webpackChunkName: "pages/login/index" */))
const _793ebc43 = () => interopDefault(import('../pages/logout/index.vue' /* webpackChunkName: "pages/logout/index" */))
const _df8d4c68 = () => interopDefault(import('../pages/news/index.vue' /* webpackChunkName: "pages/news/index" */))
const _a6a11fd2 = () => interopDefault(import('../pages/newsletters/index.vue' /* webpackChunkName: "pages/newsletters/index" */))
const _57295750 = () => interopDefault(import('../pages/posts/index.vue' /* webpackChunkName: "pages/posts/index" */))
const _4672c480 = () => interopDefault(import('../pages/raises/index.vue' /* webpackChunkName: "pages/raises/index" */))
const _3ff47a9c = () => interopDefault(import('../pages/register/index.vue' /* webpackChunkName: "pages/register/index" */))
const _2c4035bc = () => interopDefault(import('../pages/reports/index.vue' /* webpackChunkName: "pages/reports/index" */))
const _4847d596 = () => interopDefault(import('../pages/subscription/index.vue' /* webpackChunkName: "pages/subscription/index" */))
const _4841f777 = () => interopDefault(import('../pages/tours/builderpreview.vue' /* webpackChunkName: "pages/tours/builderpreview" */))
const _460d5985 = () => interopDefault(import('../pages/tours/reports.vue' /* webpackChunkName: "pages/tours/reports" */))
const _294a2143 = () => interopDefault(import('../pages/companies/_id/index.vue' /* webpackChunkName: "pages/companies/_id/index" */))
const _5f94a782 = () => interopDefault(import('../pages/newsletters/_id/index.vue' /* webpackChunkName: "pages/newsletters/_id/index" */))
const _40336b8a = () => interopDefault(import('../pages/posts/_id/index.vue' /* webpackChunkName: "pages/posts/_id/index" */))
const _5c8e77e8 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _7d951e8a,
    name: "about"
  }, {
    path: "/builder",
    component: _0caf3098,
    name: "builder"
  }, {
    path: "/companies",
    component: _33e1f258,
    name: "companies"
  }, {
    path: "/data",
    component: _7459dde3,
    name: "data"
  }, {
    path: "/login",
    component: _f7047134,
    name: "login"
  }, {
    path: "/logout",
    component: _793ebc43,
    name: "logout"
  }, {
    path: "/news",
    component: _df8d4c68,
    name: "news"
  }, {
    path: "/newsletters",
    component: _a6a11fd2,
    name: "newsletters"
  }, {
    path: "/posts",
    component: _57295750,
    name: "posts"
  }, {
    path: "/raises",
    component: _4672c480,
    name: "raises"
  }, {
    path: "/register",
    component: _3ff47a9c,
    name: "register"
  }, {
    path: "/reports",
    component: _2c4035bc,
    name: "reports"
  }, {
    path: "/subscription",
    component: _4847d596,
    name: "subscription"
  }, {
    path: "/tours/builderpreview",
    component: _4841f777,
    name: "tours-builderpreview"
  }, {
    path: "/tours/reports",
    component: _460d5985,
    name: "tours-reports"
  }, {
    path: "/companies/:id",
    component: _294a2143,
    name: "companies-id"
  }, {
    path: "/newsletters/:id",
    component: _5f94a782,
    name: "newsletters-id"
  }, {
    path: "/posts/:id",
    component: _40336b8a,
    name: "posts-id"
  }, {
    path: "/",
    component: _5c8e77e8,
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
