export const state = () => ({
 allRaises: [],
 activeTab: 'All', 
 firstRaiseLoad: true,
 activeRaiseInfo: [],
 insurtech: [],
 payments: [],
 lending:  [],
 blockchain: [],

})

export const mutations = {
  
  setAll(state, raises) {

    state.allRaises = raises;
    state.activeRaiseInfo = raises;
    state.firstRaiseLoad = false;

  },
  
  setTab(state, tab) {

    state.activeTab = tab; 
    state.firstRaiseLoad = false;

  },

  setBlock(state, data) {

    state.blockchain = data;
    state.activeRaiseInfo = data;

  },

  setInsur(state, data) {

    state.insurtech = data;
    state.activeRaiseInfo = data;

  },

   setLend(state, data) {

    state.lending = data;
    state.activeRaiseInfo = data;
  },

   setPay(state, data) {

    state.payments = data;
    state.activeRaiseInfo = data;
  
  },

  setLendNoFetch(state) {

    state.activeRaiseInfo = state.lending;
  
  },

  setPayNoFetch(state) {
  
    state.activeRaiseInfo = state.payments;
  },

  setInsurNoFetch(state) {

    state.activeRaiseInfo = state.insurtech;
  
  },
  
  setBlockNoFetch(state) {
  
    state.activeRaiseInfo = state.blockchain;
  
  },

}


 export const actions = {

     nuxtServerInit(vuexContext, data) {
    
            return this.$axios.$get("/raises")
              .then(data => {
                vuexContext.commit("setAll", data);
             })
      }, 

   setAllRaises(vuexContext, data) {
     
      vuexContext.commit("setAll", data);
    },

    setActiveTab( vuexContext, tab) {

     vuexContext.commit("setTab", tab);

    },

 
     async setInsur({ commit }) {

      if (!this.insurRaisesFetched)
      {
        await this.$axios.get("/raises?type=\'insurtech\'")
              .then(res => {
                commit("setInsur", res.data);
            })
      }
      else
      {
        commit("setInsurNoFetch");
      } 
    },

      async setBlock({ commit }) {

       if (!this.blockRaisesFetched)
       {
              await this.$axios.get("/raises?type=\'blockchain\'")
              .then(res => {
                commit("setBlock", res.data);
            })
       }
       else
      {
        commit("setBlockNoFetch");
      } 
    },

       async setPay({ commit }) {

      if (!this.payRaisesFetched)
      {
              await this.$axios.get("/raises?type=\'payments\'")
              .then(res => {
            commit("setPay", res.data);
        })
      } 
      else  
      {
        commit("setPayNoFtech");
      } 
       
       },

       async setLend({ commit }) {

       if (!this.lendRaisesFetched)
       {  
              await this.$axios.get("/raises?type=\'lending\'")
                .then(res => {
            commit("setLend", res.data);
             })
        }
       else
       {
        commit("setLendNoFetch");
       }
       
       },

  }

  export const getters = {

      firstRaiseFetched() {
  
        return state.raise.firstRaiseLoad == true;
      },

      payRaisesFetched() {
    
        return state.raise.payments.length > 0 ;
    
      },

      blockRaisesFetched() {
    
        return state.raise.blockchain.length > 0 ;
       },
    
  
    insurRaisesFetched() {
     
     return state.raise.insurtech.length > 0; 
    
    },
    
    lendRaisesFetched()  {
  
    return state.raise.lending.length > 0;
    
    },    
      
 }