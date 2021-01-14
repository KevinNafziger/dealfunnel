// middleware/visits.js
export default ({ store, route, redirect }) => {
  store.dispatch('visits/addVisit', route.path);
}