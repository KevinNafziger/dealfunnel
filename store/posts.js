
export const state = () => ({
  pages: [],
  insurtech: [],
  blockchain: [],
  payments:[],
  lending: [],
  banking:[],

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

	   	  case "Article":
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
  	   		state.activeBuildTab = topic;
  	   		break;

  	   	   case "Articles":
  	   	    state.activeArtInfo = data;
  	   		state.firstArtLoad = false;  		
  	   		state.activeArtTab = topic;
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

		if (!this.firstPostFetched) {

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