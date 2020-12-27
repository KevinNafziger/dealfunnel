export const state = () => ({

 activeTab: 'All',
 activeInfo: [],
 deals: [],
 first: true,

 })

 export const mutations = {

  setSearchTab (state, tab) {

    state.activeTab = tab;

  },

  submitSearch (state, data) {

    state.activeInfo = data;
    state.first = false;

  },

  initDeals (state, data) {

    state.deals = data;
    state.first = false;
  
  },

  setAll (state) {

    state.activeTab = 'All';
    state.activeInfo = state.deals;
    state.first = false;

  },

  setPay (state, deals) {

    state.activeTab = 'Payments';
    state.activeInfo = deals;
    state.first = false;
  },

  setInsur (state, deals) {

    state.activeTab = 'Insurtech';
    state.activeInfo = deals;
    state.first = false;

  },

  setLend (state, deals) {

    state.activeTab = 'Lending';
    state.activeInfo = deals;
    state.first = false;

  },

  setBlock (state, deals) {

    state.activeTab = 'Blockchain';
    state.activeInfo = deals;
    state.first = false;

  },

    reorderInfo(state, items) {

    state.activeInfo = items;
    state.first = false;
  },


}

 export const actions = {

    async setSearchTab ({commit}, tab) {

        commit("setSearchTab", tab);
    }, 


    async submitSearch({commit}, topic) {
      await this.$axios.get('/deals?term=' + topic)
             .then( res => {
                commit("submitSearch", res.data)
      })

    },

    async reorderInfo( {commit}, data) {
      
         commit("reorderInfo", data);
        
     },

    async initDeals({commit}, deals) {
              commit("initDeals", deals);
    },  

    async setAll({commit}, deals) {
              commit("setAll");
    },

    async setInsur({commit}, deals) {
              commit("setInsur", deals);
    },  

    async setBlock({commit}, deals) {
              commit("setBlock", deals);
    }, 

    async setPay({commit}, deals) {
              commit("setPay", deals);
    },  

    async setLend({commit}, deals) {
              commit("setLend", deals);
    }  

  }

