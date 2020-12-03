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

 
     async setInsur({ commit }, data) {

      if (!this.insurRaisesFetched)
      {
        
        commit("setInsur", data);
          
      }
      else
      {
        commit("setInsurNoFetch");
      } 
    },

      async setBlock({ commit }, data) {

      if (!this.blockRaisesFetched) {
      
          commit("setBlock", data);
       }
       else
      {
        commit("setBlockNoFetch");
      } 
    },

       async setPay({ commit }, data) {

      if (!this.payRaisesFetched)
      {
  
            commit("setPay", data);
      } 
      else  
      {
        commit("setPayNoFtech");
      } 
       
       },

       async setLend({ commit }, data) {

       if (!this.lendRaisesFetched)
       {  
            commit("setLend", data);
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

    itemsforCategory: (state, category) => {

      return state.raise.allRaises.filter(a => a.group1.toLowerCase()==category || a.group2.toLowerCase() == category);
    
    },
 
      
 }