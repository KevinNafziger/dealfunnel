
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
    setPrevious(state) {
	  if (state.numActivePage >1)
	  { 
	 	state.numActivePage--;
	  }
	  else
	  {
		state.numActivePage = 1;
	  }
		//state.page[newPage] = data;
   	   state.activePostsInfo = state.pages[state.numActivePage];
   	   state.activeTab = 'Page';
  	   state.firstTimeLoaded =false;
    },
    setNextAndFetch(state, data) {
   	  state.numActivePage++ ;
   	   state.pages[state.pages.length]=data;
   	   state.activePostsInfo = data;
   	   state.activeTab = 'Page';
  	   state.firstTimeLoaded =false;  		
   },
   setNextNoFetch(state){
	  state.numActivePage++ ;	
	  state.activePostsInfo = state.pages[state.numActivePage];
	  state.activeTab = 'Page';
      state.firstTimeLoaded =false;
   },
    setLast(state) {
   	   state.activePostsInfo = state.pages[0];
   	   state.activeTab = 'Page';
	   state.firstTimeLoaded =false; 
	   state.numActivePage = 1;	  		
   },
   	submitSearch(state, data) {
   	   state.activePostsInfo = data;
  	   state.firstTimeLoaded = false;  		
   },
   	setSearchTab(state, topic){
   		state.activeTab = topic ;
   	},
 	set(state, posts) {
		if (!this.firstPostFetched) 
		{
		state.pages.push(posts);
		state.activePostsInfo = posts;
		state.numActivePage = 1;
		}
		else
		{
		  state.activePostsInfo = state.pages[0];
		  state.numActivePage = 1;
		}
		state.firstTimeLoaded =false;
	},
	setInsurNoFetch(state)
	{
		state.activePostsInfo = state.insurtech;
		state.activeTab ='Insurtech';	
		state.firstTimeLoaded =false;	
	},
	setBlockNoFetch(state)
	{
		state.activePostsInfo = state.blockchain;
		state.activeTab ='Blockchain';	
		state.firstTimeLoaded =false;	

	},
	setPayNoFetch(state)
	{
		state.activePostsInfo = state.payments;
		state.activeTab ='Payments';	
		state.firstTimeLoaded =false;	

	},
	setLendNoFetch(state)
	{
		state.activePostsInfo = state.lending;
		state.activeTab ='Lending';	
		state.firstTimeLoaded =false;	

	},
	setBankNoFetch(state)
	{
		state.activePostsInfo = state.banking;
		state.activeTab ='Banking';	
		state.firstTimeLoaded =false;	
	},


 }

 export const actions = {
    
       	 async setInsur({ commit }) {

			if (!this.insurPostsFetched)
			{
				await this.$axios.get('/posts?grouping=Insurtech')
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

		   if (!this.blockPostsFetched)
		   {
  	       		await this.$axios.get('/posts?grouping=Blockchain')
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

			if (!this.payPostsFetched)
			{
  	       		await this.$axios.get('/posts?grouping=Payments')
           		.then(res => {
					  commit("setPay", res.data);
				})
			}	
			else	
			{
				commit("setPay", "setPostsNoFtech");
			}	
  		 },
  		 async setLend({ commit }) {
		   if (!this.lendPostsFetched)
		   {	
  	       		await this.$axios.get('/posts?grouping=Lending')
           			.then(res => {
					  commit("setLend", res.data);
		         })
			}
		   else
		   {
				commit("setLendNoFetch");
		   }
  		 },
  		 async setBank({ commit }) {
		    if (!this.bankPostsFetched)
		   {	
  	    		await this.$axios.get('/posts?grouping=Banking')
           			.then(res => {
          			commit("setBank", res.data);
			 	})
		   } 
		   else
		   {
				commit("setBankNoFetch" );
		   }
  		 },
  		 async goPrevious( { commit }, pageVal ) {
	

  		   // await this.$axios.get('/posts?page=' + pageVal)
           //.then(res => {
          	//	commit("setPrevious", res.data)
		   //})
		   commit("setPrevious");
  		 },	
  		 async goNext( {commit}, pageVal) {

			if (this.pageArryLength > pageVal)
			{
			  commit("setNextNoFetch");
			}	
			else
			{
			  await this.$axios.get('/posts?page=' + pageVal)
                .then( res => {
					  commit("setNextAndFetch", res.data)	  
			   })
			}	 
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
  		 async goLast( {commit}) {
			//await this.$axios.get('/posts?page' + pageVal)
           //.then( res => {
          		commit("setLast");
      	 //})
  		 },	
  		 nuxtServerInit(vuexContext, context) {
		  if (!this.firstPostFetched)
		  {
            return this.$axios.$get("/posts?page=1")
              .then(data => {
                vuexContext.commit("set", data);
             })
		  }
		  else
		  {
			vuexContext.commit("set");
		  }
	 },   
	}  
export const getters = {
      loadedPosts(state) {
        return state.posts.pages[0];
	  },
	  payPostsFetched() {
		return state.posts.payments.length > 0 ;
	  },
	  blockPostsFetched() {
		return this.state.blockchain.length > 0 ;
	  },
	  pageArryLength() {
		return state.posts.pages.length;
	  },
	  bankPostsFetched() {
	  	return state.posts.banking > 0 ;
	 },
	  insurPostsFetched() {
		 return state.posts.insurtech > 0; 
	  },
	  lendPostsFetched()	{
		return state.posts.lending.length > 0;
	  },
	  firstPostFetched() {
		return state.posts.pages[0].length > 0;
	 },
     firstpage() {
		return state.posts.pages[0] ;
	 },
	 insurPosts() {
		return state.posts.insurtech;
	 },
	 lendPosts() {
		 return state.posts.lending;
	 },
	 bankPosts() {
		return state.posts.banking;
	 },	
	 pagesArry(item) {
		return state.posts.pages[item];	
	 },
	 activePage() {
		 return state.posts.numActivePage;
	 },
	
	 prevArryVal() {
		var val = this.activePage();
		val--;
		if (val>= 0)
		{
			return val;
		}
		else
		{
			return 0;
		}
	 },	 


	}