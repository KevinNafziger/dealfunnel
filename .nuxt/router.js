import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1736d247 = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages/about/index" */))
const _6d2d76f9 = () => interopDefault(import('..\\pages\\builder\\index.vue' /* webpackChunkName: "pages/builder/index" */))
const _174fbb8e = () => interopDefault(import('..\\pages\\companies\\index.vue' /* webpackChunkName: "pages/companies/index" */))
const _210986b6 = () => interopDefault(import('..\\pages\\data\\index.vue' /* webpackChunkName: "pages/data/index" */))
const _2539762a = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages/login/index" */))
const _8e614154 = () => interopDefault(import('..\\pages\\logout\\index.vue' /* webpackChunkName: "pages/logout/index" */))
const _fdccf026 = () => interopDefault(import('..\\pages\\news\\index.vue' /* webpackChunkName: "pages/news/index" */))
const _70c6515a = () => interopDefault(import('..\\pages\\newsletters\\index.vue' /* webpackChunkName: "pages/newsletters/index" */))
const _7029b241 = () => interopDefault(import('..\\pages\\posts\\index.vue' /* webpackChunkName: "pages/posts/index" */))
const _dbc7428e = () => interopDefault(import('..\\pages\\raises\\index.vue' /* webpackChunkName: "pages/raises/index" */))
const _00d1971d = () => interopDefault(import('..\\pages\\register\\index.vue' /* webpackChunkName: "pages/register/index" */))
const _3fbd1655 = () => interopDefault(import('..\\pages\\reports\\index.vue' /* webpackChunkName: "pages/reports/index" */))
const _5d049d3a = () => interopDefault(import('..\\pages\\subscription\\index.vue' /* webpackChunkName: "pages/subscription/index" */))
const _6338f194 = () => interopDefault(import('..\\pages\\tours\\builderpreview.vue' /* webpackChunkName: "pages/tours/builderpreview" */))
const _0f7472a6 = () => interopDefault(import('..\\pages\\tours\\reports.vue' /* webpackChunkName: "pages/tours/reports" */))
const _6989a681 = () => interopDefault(import('..\\pages\\companies\\_id\\index.vue' /* webpackChunkName: "pages/companies/_id/index" */))
const _241e7800 = () => interopDefault(import('..\\pages\\newsletters\\_id\\index.vue' /* webpackChunkName: "pages/newsletters/_id/index" */))
const _6fd8db79 = () => interopDefault(import('..\\pages\\posts\\_id\\index.vue' /* webpackChunkName: "pages/posts/_id/index" */))
const _63ed20a0 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _1736d247,
    name: "about"
  }, {
    path: "/builder",
    component: _6d2d76f9,
    name: "builder"
  }, {
    path: "/companies",
    component: _174fbb8e,
    name: "companies"
  }, {
    path: "/data",
    component: _210986b6,
    name: "data"
  }, {
    path: "/login",
    component: _2539762a,
    name: "login"
  }, {
    path: "/logout",
    component: _8e614154,
    name: "logout"
  }, {
    path: "/news",
    component: _fdccf026,
    name: "news"
  }, {
    path: "/newsletters",
    component: _70c6515a,
    name: "newsletters"
  }, {
    path: "/posts",
    component: _7029b241,
    name: "posts"
  }, {
    path: "/raises",
    component: _dbc7428e,
    name: "raises"
  }, {
    path: "/register",
    component: _00d1971d,
    name: "register"
  }, {
    path: "/reports",
    component: _3fbd1655,
    name: "reports"
  }, {
    path: "/subscription",
    component: _5d049d3a,
    name: "subscription"
  }, {
    path: "/tours/builderpreview",
    component: _6338f194,
    name: "tours-builderpreview"
  }, {
    path: "/tours/reports",
    component: _0f7472a6,
    name: "tours-reports"
  }, {
    path: "/companies/:id",
    component: _6989a681,
    name: "companies-id"
  }, {
    path: "/newsletters/:id",
    component: _241e7800,
    name: "newsletters-id"
  }, {
    path: "/posts/:id",
    component: _6fd8db79,
    name: "posts-id"
  }, {
    path: "/",
    component: _63ed20a0,
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
