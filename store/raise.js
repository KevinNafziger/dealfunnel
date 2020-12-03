export const state = () => ({
 allRaises: [],
 activeTab: 'All', 
 firstRaiseLoad: true,
 activeRaiseInfo: [],
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

  setSelected(state, data) {

    state.activeRaiseInfo = data;
  },

}
 export const actions = {

   setAllRaises(vuexContext, data) {
     
      vuexContext.commit("setAll", data);
    },

    setActiveTab( vuexContext, tab) {

      
     vuexContext.commit("setTab", tab);
    },

    setRaiseInfo( vuexContext, data) {

     vuexContext.commit("setSelected", data); 

    }
  }