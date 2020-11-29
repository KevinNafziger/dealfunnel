 export const state = () => ({
  list: [],
 })

 export const mutations = {
  set(state, posts) {
        state.list = posts
      },
 }
 export const actions = {
      nuxtServerInit(vuexContext, context) {
      return this.$axios.$get("/posts?page=1")
          .then(data => {
            vuexContext.commit("set", data);
          })
          .catch(e => context.error(e));
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit("set", posts);
      }
  }
  export const getters = {
      loadedPosts(state) {
        return state.list;
      }
    }