import allRaises from '~/data/raises.json';
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


  reorderInfo(state, items) {

    state.activeRaiseInfo = items;
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

  submitSearch(state, data) {

       state.activeRaiseInfo = data;
       state.firstRaiseLoad = false;     

   },

  
}


 export const actions = {

     nuxtServerInit(vuexContext) {
            vuexContext.commit("setAll", allRaises);
    
     }, 

     setAll(vuexContext ) {

        vuexContext.commit("setAll",allRaises);
     },


     setActiveTab( vuexContext, tab) {

       vuexContext.commit("setTab", tab);

     },
 
     async setInsur({ commit }) {

      if (!this.allRaisesFetched || !this.insurRaisesFetched) {

              await this.$axios.get('/raises?report=insurtech')
                .then(res => {  
        
              commit("setInsur", res.data);
               })    
      }

     else if (this.allRaisesFetched) {

          commit("setInsur", this.raisesbyTopic('insurtech'));
      }

      else
      {
        commit("setInsurNoFetch");
      } 

     },

     async setBlock({ commit }) {

      if (!this.allRaisesFetched || !this.blockRaisesFetched) {
         
        await this.$axios.get('/raises?report=blockchain')
                .then(res => {      
          commit("setBlock", res.data);
          })    
       }

      else if (this.allRaisesFetched) {

          commit("setBlock", this.raisesbyTopic('blockchain'));
       }

       else
      {
        commit("setBlockNoFetch");
      }

     },

     async setPay({ commit }) {

       if (!this.allRaisesFetched|| !this.payRaisesFetched) {

         await this.$axios.get('/raises?report=payments')
                .then(res => {      
          commit("setPay", res.data);
          })  
       } 

       else if (this.allRaisesFetched) {

          commit("setPay", this.raisesbyTopic('payments'));
       }

       else  
       {
          commit("setPayNoFtech");
       } 
       
     },

     async setSearchTab( {commit}, topic) {

              commit("setSearchTab", topic);
         
     },


    async submitSearch( {commit}, topic) {
      
        await this.$axios.get('/raises?term=' + topic)
              .then( res => {
              commit("submitSearch", res.data)
        
             })
    },

    async reorderInfo( {commit}, data) {
      
         commit("reorderInfo", data);
        
     },



      async setLend({ commit }, data) {

       if (!this.allRaisesFetched || !this.lendRaisesFetched) {  
          
          await this.$axios.get('/raises?report=lending')
                .then(res => {      
          commit("setLend", res.data);
          })  
        }

       else if(this.allRaisesFetched) {

          commit("setLend", this.raisesbyTopic('lending'));

       } 

       else
       {
        commit("setLendNoFetch");
       }
       
       },


  }

  export const getters = {

    firstRaiseFetched(state) {
  
        return state.raise.firstRaiseLoad == true;

      },

    payRaisesFetched(state) {
    
      if (state.payments.length)
      {
        return true;
      } 
      else {
        return false;
      }
    },

    blockRaisesFetched(state) {
    
      if (state.blockchain.length)
      {
        return true;
      } 
      else {
        return false;
      }


    },
    
  
    insurRaisesFetched(state) {
     
      if (state.insurtech.length)
      {
        return true;
      } 
      else {
        return false;
      } 
    
    },
    
    lendRaisesFetched(state)  {
  
     if (state.lending.length)
      {
        return true;
      } 
      else {
        return false;
      }
    
    },


    allRaisesFetched(state)  {
  
     if (state.allRaises.length)
      {
        return true;
      } 
      else {
        return false;
      }
    
    },

   raisesbyTopic: (state, topic ) => {

        return state.allRaises.filter(function(elem,topic) {
              return (elem.group1.toLowerCase()  == 
                topic || elem.group2.toLowerCase()  == topic)
              });

        }  
  
      
    }