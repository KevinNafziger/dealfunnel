
export const state = () => ({
  pages: [],
  insurtech: [],
  blockchain: [],
  payments:[],
  lending: [],
  banking:[],

  activeArticlesInfo: [],
  activeBuilderInfo: [],
  
  activeArticleTab: 'All',
  activeBuildTab:  'All',

  activeView: '',
  
  numBuildPage: 1,
  numArticlePage: 1,

  firstBuildLoad: true,
  firstArticleLoad: true,

})

export const mutations = {


  setView (state, view) {

    state.activeView = view; 

  },
 

  setInsur(state, data) {

    state.insurtech = data; 


    if (state.activeView =='Builder') 
    {
   		state.activeBuilderInfo = data;
   		state.activeBuildTab ='Insurtech';	
    	state.firstBuildLoad = false;
    }
    else if (state.activeView =='Articles')
    {
    	state.activeArticlesInfo = data;
    	state.activeArticleTab ='Insurtech';	
    	state.firstArticleLoad = false;
    }

  },

  setBlock(state, data){

  	state.blockchain = data;

  	if (state.activeView =='Builder')
    {
  		state.activeBuilderInfo = data;
       	state.activeBuildTab = 'Blockchain';
       	state.firstBuildLoad =false;
    }

    else if (state.activeView =='Articles')
    {
    	state.activeArticlesInfo = data;
    	state.activeArticleTab ='Blockchain';	
    	state.firstArticleLoad = false;
    }

   },

   setPay(state, data){

   	 state.payments = data;

     if (state.activeView =='Builder')
     {
        state.activeBuilderInfo = data;
  	    state.activeBuildTab = 'Payments';	
  	    state.firstBuildLoad =false;
  	 }

  	 else if (state.activeView =='Articles')
     {
    	state.activeArticlesInfo = data;
    	state.activeArticleTab ='Payments';	
    	state.firstArticleLoad = false;
     }

   },

   setLend(state, data){

  	 state.lending = data;

  	 if (state.activeView =='Builder')
     {
        state.activeBuilderInfo = data;
  	    state.activeBuildTab = 'Lending';	
  	    state.firstBuildLoad =false;
  	 }

  	 else if (state.activeView =='Articles')
     {
    	state.activeArticlesInfo = data;
    	state.activeArticleTab ='Lending';	
    	state.firstArticleLoad = false;
     }

   },

   setBank(state, data) {

   	 state.banking = data;

   	 if (state.activeView =='Builder')
     {
        state.activeBuilderInfo = data;
  	    state.activeBuildTab = 'Banking';	
  	    state.firstBuildLoad =false;
  	 }

  	 else if (state.activeView =='Articles')
     {
    	state.activeArticlesInfo = data;
    	state.activeArticleTab ='Banking';	
    	state.firstArticleLoad = false;
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
   	   		state.activeBuilderInfo = state.pages[state.numBuildPage];
   	   		state.activeBuildTab = 'Page';
  	   		state.firstBuildLoad =false;
  	   		break;

     	case "Articles":
     		if (state.numArticlePage >1)
	 	    { 
	 	      state.numArticlePage--;
	        }
			else
			{
			   state.numArticlePage = 1;
			}
   	   		state.activeArticlesInfo = state.pages[state.numArticlePage];
   	   		state.activeArticleTab = 'Page';
  	   		state.firstArticleLoad =false;
  	   		break;
  	   	 }
 
    },

    setNextAndFetch(state, data) {

      switch(state.activeView) {

      	case "Builder":
   	  		state.numBuildPage++ ;
   	   		state.pages[state.pages.length]= data;
   	   		state.activeBuilderInfo = data;
   	   		state.activeBuildTab = 'Page';
  	   		state.firstBuildLoad =false;  
  	   		break;

  	    case "Articles":
  	    	state.numArticlePage++ ;
   	   		state.pages[state.pages.length]=data;
   	   		state.activeArticlesInfo = data;
   	   		state.activeArticleTab = 'Page';
  	   		state.firstArticleLoad =false;  
  	   		break;
  	   }  
   
   },

   setNextNoFetch(state){

   	   switch(state.activeView) {

   	   	  case "Builder":
	  		state.numBuildPage++ ;	
	  		state.activeBuilderInfo = state.pages[state.numBuildPage];
	  		state.activeBuildTab = 'Page';
     	    state.firstBuildLoad =false;
     	    break;

   		  case "Articles":
   		    state.numArticlePage++ ;	
	  		state.activeArticleIsnfo = state.pages[state.numArticlePage];
	  		state.activeArticleTab = 'Page';
     	    state.firstArticleLoad =false;
     	    break;
     	}

   },


   setLast(state) {

   	  switch(state.activeView) {

   	   	  case "Builder":
   	   		state.activeBuilderInfo = state.pages[0];
   	   		state.activeBuildTab = 'Page';
	   		state.firstBuildLoad = false; 
	   		state.numBuildPage = 1;	 
	   		break;

	   	  case "Article":
	   	    state.activArticlesInfo = state.pages[0];
   	   		state.activeArticleTab = 'Page';
	   		state.firstArticleLoad = false; 
	   		state.numArticlePage = 1;	 
	   		break;

	   }

   },
   submitSearch(state, data) {

   	   switch(state.activeView) {

   	   	  case "Builder":
   	   		state.activeBuilderInfo = data;
  	   		state.firstBuildLoad = false;  		
  	   		state.activeBuilderTab = topic;
  	   		break;

  	   	   case "Articles":
  	   	    state.activeArticlesInfo = data;
  	   		state.firstArticleLoad = false;  		
  	   		state.activeArticleTab = topic;
  	   		break;
  	    }

    },

    setSearchTab(state) {


    	if (state.activeView == 'Builder') {

    		state.activeBuilderTab = topic ;
    	}

    	else if (state.activeView == 'Articles') {

    		state.activeArticleTab = topic ;
    	}

    },

 	set(state, posts) {

		if (!this.firstPostFetched) {

			state.pages.push(posts);
		}

		switch(state.activeView) {

   	   	  case "Builder":
		  	state.activeBuilderInfo = state.pages[0];
		  	state.numBuildPage = 1;
		  	state.firstBuildLoad = false; 
		  	break;

		  case "Articles":
		    state.activeArticlseInfo = state.pages[0];
		  	state.numArticlePage = 1;
		  	state.firstArticleLoad = false; 
		  	break;

		}     
	},

	setInsurNoFetch(state){

		switch(state.activeView) {

   	   	  case "Builder":
		     state.activeBuilderInfo = state.insurtech;
		     state.activeBuildTab = 'Insurtech';	
		     state.firstBuildLoad = false;
		     break;	

		   case "Articles":
		     state.activeArticlesInfo = state.insurtech;
		     state.activeArticleTab = 'Insurtech';	
		     state.firstArticleLoad = false;
		     break;	

		  }
	 },

	setBlockNoFetch(state) {

		switch(state.activeView) {

   	   	  case "Builder":
			state.activeBuilderInfo = state.blockchain;
			state.activeBuildTab = 'Blockchain';	
			state.firstBuildLoad =false;
			break;

		  case "Articles":	
		  	state.activeArticlesInfo = state.blockchain;
			state.activeArticleTab = 'Blockchain';	
			state.firstArticleLoad =false;
			break;
	 	 
	 	 }
	},

	setPayNoFetch(state){
		
		switch(state.activeView) {

   	   	  case "Builder":
		     state.activeBuilderInfo = state.payments;
		     state.activeBuildTab = 'Payments';	
		     state.firstBuildLoad = false;
		     break;	

		   case "Articles":
		   	  state.activeArticlesInfo = state.payments;
			  state.activeArticleTab = 'Payments';	
			  state.firstArticleLoad =false;
			  break;
		 }

	},

	setLendNoFetch(state) {

		switch(state.activeView) {

   	   	    case "Builder":
			  state.activeBuilderInfo = state.lending;
		      state.activeBuildTab = 'Lending';	
		      state.firstBuildLoad = false;
		      break;
		    case "Articles":
		   	  state.activeArticlesInfo = state.lending;
			  state.activeArticleTab = 'Lending';	
			  state.firstArticleLoad =false;
			  break;
	   }
	},


	setBankNoFetch(state) {

		switch(state.activeView) {

			  case "Builder":
				state.activeBuilderInfo = state.banking;
				state.activeBuilderTab ='Banking';	
				state.firstBuildLoad =false;
				break;

			  case "Articles":
		   	  	state.activeArticlesInfo = state.lending;
			  	state.activeArticleTab = 'Banking';	
			  	state.firstArticleLoad =false;
			  	break;

	     }

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
		   	else {
				
				commit("setBankNoFetch" );
		    }
  		 
  		  },

  		 
  		 async goPrevious({ commit }, pageVal ) {
	
		   commit("setPrevious");
  		 
  		 },

  		 async goNext( {commit}, pageVal) {

			if (this.pageArryLength > pageVal) {

			  commit("setNextNoFetch");
			}	

			else {
			  
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

	  insurPostsFetched() {
		 
		 return state.posts.insurtech.length > 0; 
	  
	  },
	  
	  lendPostsFetched()  {
	
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
	
	 activeArticlePage() {
		
		 return state.posts.numArticlePage;
	 },
	 activeBuilderPage() {

	 	 return state.posts.numBuildPage;
	 },

	 activeView() {

	 	 return state.posts.activeView;

	 },
	
	 prevArryVal() {

	 	if (this.activeView == "Articles") {
	 		var val = this.activeArticlePage();
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