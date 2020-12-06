
export const state = () => ({
  pages: [],
  insurtech: [],
  blockchain: [],
  payments:[],
  lending: [],
  banking:[],
  AI: [],
  regtech: [],
  healthtech: [],
  capitalmarkets: [],
  wealthtech: [],
  realestate: [],

  activeArtInfo: [],
  activeBuildInfo: [],
  
  activeArtTab: 'All',
  activeBuildTab:  'All',

  activeView: 'Articles',
  
  numBuildPage: 1,
  numArtPage: 1,

  firstBuildLoad: true,
  firstArtLoad: true,

})

export const mutations = {


  setView (state, view) {

    state.activeView = view; 

  },
 

  setInsur(state, data) {

    state.insurtech = data; 


    if (state.activeView =='Builder') 
    {
   		state.activeBuildInfo = data;
   		state.activeBuildTab ='Insurtech';	
    	state.firstBuildLoad = false;
    }
    else if (state.activeView =='Articles')
    {
    	state.activeArtInfo = data;
    	state.activeArtTab ='Insurtech';	
    	state.firstArtLoad = false;
    }

  },
   

   setCapital(state, data) {

    state.capitalmarkets = data; 


    if (state.activeView =='Builder') 
    {
   		state.activeBuildInfo = data;
   		state.activeBuildTab ='Capital Markets';	
    	state.firstBuildLoad = false;
    }
    else if (state.activeView =='Articles')
    {
    	state.activeArtInfo = data;
    	state.activeArtTab ='Capital Markets';	
    	state.firstArtLoad = false;
    }

  },

   setWealth(state, data) {

    state.wealthtech = data; 


    if (state.activeView =='Builder') 
    {
   		state.activeBuildInfo = data;
   		state.activeBuildTab ='WealthTech';	
    	state.firstBuildLoad = false;
    }
    else if (state.activeView =='Articles')
    {
    	state.activeArtInfo = data;
    	state.activeArtTab ='WealthTech';	
    	state.firstArtLoad = false;
    }

  },
 

   setReal(state, data) {

    state.realestate = data; 


    if (state.activeView =='Builder') 
    {
   		state.activeBuildInfo = data;
   		state.activeBuildTab ='RealEstate';	
    	state.firstBuildLoad = false;
    }
    else if (state.activeView =='Articles')
    {
    	state.activeArtInfo = data;
    	state.activeArtTab ='RealEstate';	
    	state.firstArtLoad = false;
    }

  },


  setBlock(state, data){

  	state.blockchain = data;

  	if (state.activeView =='Builder')
    {
  		state.activeBuildInfo = data;
       	state.activeBuildTab = 'Blockchain';
       	state.firstBuildLoad =false;
    }

    else if (state.activeView =='Articles')
    {
    	state.activeArtInfo = data;
    	state.activeArtTab ='Blockchain';	
    	state.firstArtLoad = false;
    }

   },

   setPay(state, data){

   	 state.payments = data;

     if (state.activeView =='Builder')
     {
        state.activeBuildInfo = data;
  	    state.activeBuildTab = 'Payments';	
  	    state.firstBuildLoad =false;
  	 }

  	 else if (state.activeView =='Articles')
     {
    	state.activeArtInfo = data;
    	state.activeArtTab ='Payments';	
    	state.firstArtLoad = false;
     }

   },

    setReg(state, data){

   	 state.regtech = data;

     if (state.activeView =='Builder')
     {
        state.activeBuildInfo = data;
  	    state.activeBuildTab = 'RegTech';	
  	    state.firstBuildLoad =false;
  	 }

  	 else if (state.activeView =='Articles')
     {
    	state.activeArtInfo = data;
    	state.activeArtTab ='RegTech';	
    	state.firstArtLoad = false;
     }

   },


   setAI(state, data){

   	 state.AI = data;

     if (state.activeView =='Builder')
     {
        state.activeBuildInfo = data;
  	    state.activeBuildTab = 'AI';	
  	    state.firstBuildLoad =false;
  	 }

  	 else if (state.activeView =='Articles')
     {
    	state.activeArtInfo = data;
    	state.activeArtTab ='AI';	
    	state.firstArtLoad = false;
     }

   },



   setLend(state, data){

  	 state.lending = data;

  	 if (state.activeView =='Builder')
     {
        state.activeBuildInfo = data;
  	    state.activeBuildTab = 'Lending';	
  	    state.firstBuildLoad =false;
  	 }

  	 else if (state.activeView =='Articles')
     {
    	state.activeArtInfo = data;
    	state.activeArtTab ='Lending';	
    	state.firstArtLoad = false;
     }

   },

   setBank(state, data) {

   	 state.banking = data;

   	 if (state.activeView =='Builder')
     {
        state.activeBuildInfo = data;
  	    state.activeBuildTab = 'Banking';	
  	    state.firstBuildLoad =false;
  	 }

  	 else if (state.activeView =='Articles')
     {
    	state.activeArtInfo = data;
    	state.activeArtTab ='Banking';	
    	state.firstArtLoad = false;
     }
   	 	
   },

    setPrevious(state) {

     switch(state.activeView) {

     	case "Builder":
	 		if (state.numBuildPage >1)
	 	    { 
	 	      state.numBuildPage--;
	        }
			else
			{
			   state.numBuildPage = 1;
			}
   	   		state.activeBuildInfo = state.pages[state.numBuildPage];
   	   		state.activeBuildTab = 'Page';
  	   		state.firstBuildLoad =false;
  	   		break;

     	case "Articles":
     		if (state.numArtPage >1)
	 	    { 
	 	      state.numArtPage--;
	        }
			else
			{
			   state.numArtPage = 1;
			}
   	   		state.activeArtInfo = state.pages[state.numArtPage];
   	   		state.activeArtTab = 'Page';
  	   		state.firstArtLoad =false;
  	   		break;
  	   	 }
 
    },

    setNextAndFetch(state, data) {

      switch(state.activeView) {

      	case "Builder":
   	  		state.numBuildPage++ ;
   	   		state.pages[state.pages.length]= data;
   	   		state.activeBuildInfo = data;
   	   		state.activeBuildTab = 'Page';
  	   		state.firstBuildLoad =false;  
  	   		break;

  	    case "Articles":
  	    	state.numArtPage++ ;
   	   		state.pages[state.pages.length]=data;
   	   		state.activeArtInfo = data;
   	   		state.activeArtTab = 'Page';
  	   		state.firstArtLoad =false;  
  	   		break;
  	   }  
   
   },

   setNextNoFetch(state){

   	   switch(state.activeView) {

   	   	  case "Builder":
	  		state.numBuildPage++ ;	
	  		state.activeBuildInfo = state.pages[state.numBuildPage];
	  		state.activeBuildTab = 'Page';
     	    state.firstBuildLoad =false;
     	    break;

   		  case "Articles":
   		    state.numArtPage++ ;	
	  		state.activeArtInfo = state.pages[state.numArtPage];
	  		state.activeArtTab = 'Page';
     	    state.firstArtLoad =false;
     	    break;
     	}

   },


   setLast(state) {

   	  switch(state.activeView) {

   	   	  case "Builder":
   	   		state.activeBuildInfo = state.pages[0];
   	   		state.activeBuildTab = 'Page';
	   		state.firstBuildLoad = false; 
	   		state.numBuildPage = 1;	 
	   		break;

	   	  case "Articles":
	   	    state.activArtInfo = state.pages[0];
   	   		state.activeArtTab = 'Page';
	   		state.firstArtLoad = false; 
	   		state.numArtPage = 1;	 
	   		break;

	   }

   },

   submitSearch(state, data) {

   	   switch(state.activeView) {

   	   	  case "Builder":
   	   		state.activeBuildInfo = data;
  	   		state.firstBuildLoad = false;  		
  	   		state.activeBuildTab = data;
  	   		break;

  	   	   case "Articles":
  	   	    state.activeArtInfo = data;
  	   		state.firstArtLoad = false;  		
  	   		state.activeArtTab = data;
  	   		break;
  	    }

    },

    setSearchTab(state, topic) {


    	if (state.activeView == 'Builder') {

    		state.activeBuildTab = topic ;
    	}

    	else if (state.activeView == 'Articles') {

    		state.activeArtTab = topic ;
    	}

    },

 	set(state, posts) {

		if (!state.pages.lenth > 0) {

			state.pages.push(posts);
		}

		switch(state.activeView) {

   	   	  case "Builder":
		  	state.activeBuildInfo = state.pages[0];
		  	state.numBuildPage = 1;
		  	state.firstBuildLoad = false; 
		  	break;

		  case "Articles":
		    state.activeArtInfo = state.pages[0];
		  	state.numArtPage = 1;
		  	state.firstArtLoad = false; 
		  	break;

		}     
	},

	setInsurNoFetch(state){

		switch(state.activeView) {

   	   	  case "Builder":
		     state.activeBuildInfo = state.insurtech;
		     state.activeBuildTab = 'Insurtech';	
		     state.firstBuildLoad = false;
		     break;	

		   case "Articles":
		     state.activeArtInfo = state.insurtech;
		     state.activeArtTab = 'Insurtech';	
		     state.firstArtLoad = false;
		     break;	

		  }
	 },

	 setRegNoFetch(state){

		switch(state.activeView) {

   	   	  case "Builder":
		     state.activeBuildInfo = state.regtech;
		     state.activeBuildTab = 'RegTech';	
		     state.firstBuildLoad = false;
		     break;	

		   case "Articles":
		     state.activeArtInfo = state.regtech;
		     state.activeArtTab = 'RegTech';	
		     state.firstArtLoad = false;
		     break;	

		  }
	 },



	 setCapitalNoFetch(state){

		switch(state.activeView) {

   	   	  case "Builder":
		     state.activeBuildInfo = state.capitalmarkets;
		     state.activeBuildTab = 'Capital Markets';	
		     state.firstBuildLoad = false;
		     break;	

		   case "Articles":
		     state.activeArtInfo = state.capitalmarkets;
		     state.activeArtTab = 'Capital Markets';	
		     state.firstArtLoad = false;
		     break;	

		  }
	 },


	 setWealthNoFetch(state){

		switch(state.activeView) {

   	   	  case "Builder":
		     state.activeBuildInfo = state.wealthtech;
		     state.activeBuildTab = 'WealthTech';	
		     state.firstBuildLoad = false;
		     break;	

		   case "Articles":
		     state.activeArtInfo = state.wealthtech;
		     state.activeArtTab = 'WealthTech';	
		     state.firstArtLoad = false;
		     break;	

		  }
	 },


	 setRealNoFetch(state){

		switch(state.activeView) {

   	   	  case "Builder":
		     state.activeBuildInfo = state.realestate;
		     state.activeBuildTab = 'Real Estate';	
		     state.firstBuildLoad = false;
		     break;	

		   case "Articles":
		     state.activeArtInfo = state.realestate;
		     state.activeArtTab = 'Real Estate';	
		     state.firstArtLoad = false;
		     break;	

		  }
	 },

	setAINoFetch(state){

		switch(state.activeView) {

   	   	  case "Builder":
		     state.activeBuildInfo = state.AI;
		     state.activeBuildTab = 'Artificial Intelligence';	
		     state.firstBuildLoad = false;
		     break;	

		   case "Articles":
		     state.activeArtInfo = state.AI;
		     state.activeArtTab = 'Artificial Intelligence';	
		     state.firstArtLoad = false;
		     break;	

		  }
	 },


	setBlockNoFetch(state) {

		switch(state.activeView) {

   	   	  case "Builder":
			state.activeBuildInfo = state.blockchain;
			state.activeBuildTab = 'Blockchain';	
			state.firstBuildLoad =false;
			break;

		  case "Articles":	
		  	state.activeArtInfo = state.blockchain;
			state.activeArtTab = 'Blockchain';	
			state.firstArtLoad =false;
			break;
	 	 
	 	 }
	},

	setPayNoFetch(state){
		
		switch(state.activeView) {

   	   	  case "Builder":
		     state.activeBuildInfo = state.payments;
		     state.activeBuildTab = 'Payments';	
		     state.firstBuildLoad = false;
		     break;	

		   case "Articles":
		   	  state.activeArtInfo = state.payments;
			  state.activeArtTab = 'Payments';	
			  state.firstArtLoad =false;
			  break;
		 }

	},

	setLendNoFetch(state) {

		switch(state.activeView) {

   	   	    case "Builder":
			  state.activeBuildInfo = state.lending;
		      state.activeBuildTab = 'Lending';	
		      state.firstBuildLoad = false;
		      break;
		    case "Articles":
		   	  state.activeArtInfo = state.lending;
			  state.activeArtTab = 'Lending';	
			  state.firstArtLoad =false;
			  break;
	   }
	},

	setHealthNoFetch(state) {

		switch(state.activeView) {

   	   	    case "Builder":
			  state.activeBuildInfo = state.healthtech;
		      state.activeBuildTab = 'HealthTech';	
		      state.firstBuildLoad = false;
		      break;
		    case "Articles":
		   	  state.activeArtInfo = state.healthtech;
			  state.activeArtTab = 'HealthTech';	
			  state.firstArtLoad =false;
			  break;
	   }
	},



	setBankNoFetch(state) {

		switch(state.activeView) {

			  case "Builder":
				state.activeBuildInfo = state.banking;
				state.activeBuildTab ='Banking';	
				state.firstBuildLoad =false;
				break;

			  case "Articles":
		   	  	state.activeArtInfo = state.lending;
			  	state.activeArtTab = 'Banking';	
			  	state.firstArtLoad =false;
			  	break;

	     }

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
				commit("setPostsNoFetch");
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

  		  async setReg({ commit }) {

		   if (!this.regPostsFetched)
		   {	
  	       		await this.$axios.get('/posts?grouping=RegTech')
           			.then(res => {
					  commit("setReg", res.data);
		         })
			}
		   else
		   {
				commit("setRegNoFetch");
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
		   	else {
				
				commit("setBankNoFetch" );
		    }
  		 
  		  },


  		  async setAI({ commit }) {
		    
		    if (!this.AIPostsFetched)
		   	{	
  	    		await this.$axios.get('/posts?grouping=AI')
           			.then(res => {
          			commit("setAI", res.data);
			 	})
		   	} 
		   	else {
				
				commit("setAINoFetch" );
		    }
  		 
  		  },


  		  async setHealth({ commit }) {
		    
		    if (!this.healthPostsFetched)
		   	{	
  	    		await this.$axios.get('/posts?grouping=HealthTech')
           			.then(res => {
          			commit("setHealth", res.data);
			 	})
		   	} 
		   	else {
				
				commit("setHealthNoFetch" );
		    }
  		 
  		  },


  		  async setCapital({ commit }) {
		    
		    if (!this.capitalPostsFetched)
		   	{	
  	    		await this.$axios.get('/posts?grouping=CapitalMarkets')
           			.then(res => {
          			commit("setCapital", res.data);
			 	})
		   	} 
		   	else {
				
				commit("setCapitalNoFetch" );
		    }
  		 
  		  },



  		  async setWealth({ commit }) {
		    
		    if (!this.wealthPostsFetched)
		   	{	
  	    		await this.$axios.get('/posts?grouping=WealthTech')
           			.then(res => {
          			commit("setWealth", res.data);
			 	})
		   	} 
		   	else {
				
				commit("setWealthNoFetch" );
		    }
  		 
  		  },



  		  async setReal({ commit }) {
		    
		    if (!this.realPostsFetched)
		   	{	
  	    		await this.$axios.get('/posts?grouping=RealEstate')
           			.then(res => {
          			commit("setReal", res.data);
			 	})
		   	} 
		   	else {
				
				commit("setRealNoFetch" );
		    }
  		 
  		  },


  		 
  		 async goPrevious({ commit }, pageVal ) {
	
		   commit("setPrevious");
  		 
  		 },

  		 async goNext( {commit}, pageVal) {

			if (this.pageArryLength >= pageVal) {

			  commit("setNextNoFetch");
			}	

			else {
			  
			  var items = pageVal + 1;
			  await this.$axios.get('/posts?page=' + items)
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
          		
          		commit("setLast");
  		 },	

  		 nuxtServerInit(vuexContext, context) {
		   
		   if (!this.firstPostFetched) { 

              return this.$axios.$get("/posts?page=1")
              .then(data => {
                vuexContext.commit("set", data);
              })
		   }
		   else {
			  vuexContext.commit("set");
		   }
	    },   
	      setView({commit}, view) {

	      		commit("setView", view);
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

	  	return state.posts.banking.length > 0 ;
	 
	  },


	  AIPostsFetched() {

	  	return state.posts.AI.length > 0 ;
	 
	  },


	  insurPostsFetched() {
		 
		 return state.posts.insurtech.length > 0; 
	  
	  },
	  

	  lendPostsFetched()  {
	
		return state.posts.lending.length > 0;
	  },
	  

	  regPostsFetched()  {
	
		return state.posts.regtech.length > 0;
	  },

	  healthPostsFetched()  {
	
		return state.posts.healthtech.length > 0;
	  },

	  firstPostFetched() {
	
		return state.posts.pages[0].length > 0;
	  },

	  wealthPostFetched() {
	
		return state.posts.wealthtech.length > 0;
	  },


	  capitalPostFetched() {
	
		return state.posts.capitalmarkets.length > 0;
	  },

	  realPostFetched() {
	
		return state.posts.realestate.length > 0;
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
	
	 activeArtPage() {
		
		 return state.posts.numArtPage;
	 },
	 activeBuildPage() {

	 	 return state.posts.numBuildPage;
	 },

	 activeView() {

	 	 return state.posts.activeView;

	 },
	
	 prevArryVal() {

	 	if (this.activeView == "Articles") {
	 		var val = this.activeArtPage();
	 	}
	 	else {

	 		var val = this.activeBuildPage();
	 	}
	
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