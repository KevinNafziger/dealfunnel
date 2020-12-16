export const state = () => ({

 loggedIn: false,
 email: '',

 })

 export const mutations = {

  setEmail (state, email) {

    state.email = email;
    state.loggedIn = true; 
  },

  logOut(state, email) {

    state.email = '';
    state.loggedIn = false; 
  },

 } 

 export const actions = {

    async setEmail ({commit}, email) {

        commit("setEmail", email);
    }, 

    async logOut ({commit}) {

        commit("logOut");
    },  



 }
    