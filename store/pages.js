
export const state = () => ({
  pages: [],
  insurtech: [],
  blockchain: [],
  payments:[],
  lending: [],
  banking:[],
  numActivePage: 1,
  activePostsInfo: [],
  activeTab: 'All',
  firstTimeLoaded: true,
})

export const mutations = {
  setInsur(state, data) {
       state.insurtech = data;  
       state.activePostsInfo = data;
       state.activeTab ='Insurtech';	
       state.firstTimeLoaded =false;
    },
  setBlock(state, data){
  	   state.blockchain = data;	
  	   state.activePostsInfo = data;
       state.activeTab = 'Blockchain';
       state.firstTimeLoaded =false;
  	},
  setPay(state, data){
  	   state.payments = data;
  	   state.activePostsInfo = data;
  	   state.activeTab = 'Payments';	
  	   state.firstTimeLoaded =false;
   },
   setLend(state, data){
  	   state.lending = data;
  	   state.activePostsInfo = data;
  	   state.activeTab = 'Lending';
  	   state.firstTimeLoaded =false;	
   },
   setBank(state, data) {
   	   state.banking = data;
   	   state.activePostsInfo = data;
   	   state.activeTab = 'Banking';
  	   state.firstTimeLoaded =false;		
   },
    setPrevious(state, data) {
	   state.numActivePage--;
	   //state.page[newPage] = data;
   	   state.activePostsInfo = data;
   	   state.activeTab = 'Page';
  	   state.firstTimeLoaded =false;
    },
    setNext(state, data) {
   	  state.numActivePage++ ;
   	  // state.pages.push(data);
   	   state.activePostsInfo = data;
   	   state.activeTab = 'Page';
  	   state.firstTimeLoaded =false;  		
   },
    setLast(state, data) {
   	   state.activePostsInfo = data;
   	   state.activeTab = 'Page' + state.numActivePage ;
  	   state.firstTimeLoaded =false;  		
   },
   	submitSearch(state, data) {
   	   state.activePostsInfo = data;
  	   state.firstTimeLoaded = false;  		
   },
   	setSearchTab(state, topic){
   		state.activeTab = topic ;
   	},

  }


 export const actions = {
    
       	 async setInsur({ commit }) {
  	       await this.$axios.get('/posts?grouping=Insurtech')
           .then(res => {
          		commit("setInsur", res.data);
         })
  		 },
  		 async setBlock({ commit }) {
  	       await this.$axios.get('/posts?grouping=Blockchain')
           .then(res => {
          		commit("setBlock", res.data);
         })
  		 },
  		 async setPay({ commit }) {
  	       await this.$axios.get('/posts?grouping=Payments')
           .then(res => {
          		commit("setPay", res.data);
         })
  		 },
  		 async setLend({ commit }) {
  	       await this.$axios.get('/posts?grouping=Lending')
           .then(res => {
          		commit("setLend", res.data);
         })
  		 },
  		 async setBank({ commit }) {
  	       await this.$axios.get('/posts?grouping=Banking')
           .then(res => {
          		commit("setBank", res.data);
         })
  		 },
  		 async goPrevious( { commit }, pageVal ) {
  		    await this.$axios.get('/posts?page=' + pageVal)
           .then(res => {
          		commit("setPrevious", res.data)
      	 })
  		 },	
  		 async goNext( {commit}, pageVal) {
			await this.$axios.get('/posts?page=' + pageVal)
           .then( res => {
          		commit("setNext", res.data)
      	 })
  		 },
  		 async setSearchTab( {commit}, topic) {
          		commit("setSearchTab", topic);
      	 },
  		 async submitSearch( {commit}, topic) {
			await this.$axios.get('/posts?term=' + topic)
           .then( res => {
          		commit("submitSearch", res.data)
      	 })
  		 },	
  		 async goLast( {commit}, pageVal) {
			await this.$axios.get('/posts?page' + pageVal)
           .then( res => {
          		commit("setLast", res.data)
      	 })
  		 },	

 	 } 
