
export const state = () => ({
  pages: [],
  insurtech: [],
  blockchain: [],
  payments:[],
  lending: [],
  neobank:[],
  valuation: [],
  mergers: [],
  ai: [],
  activeNewsInfo: [],
  activeNewsTab: 'All',
  numNewsPage: 1,
  firstNewsLoad: true,

})

export const mutations = {

 

  setInsur(state, data) {

    state.insurtech = data; 
   	state.activeNewsInfo = data;
    state.firstNewsdLoad = false;
   
   },


  setBlock(state, data){

  	state.blockchain = data;
  	state.activeNewsInfo = data;
    state.activeNewsTab = 'Blockchain';
    state.firstNewsLoad =false;
    
   },

   setPay(state, data){

   	 state.payments = data;
     state.activeNewsInfo = data;
  	 state.activeNewsTab = 'Payments';	
  	 state.firstNewsLoad =false;

  	},

   setLend(state, data){

  	 state.lending = data;
     state.activeNewsInfo = data;
     state.activeNewsTab = 'Lending';	
     state.firstNewsLoad =false;
  	 
   },

   setBank(state, data) {

   	 state.banking = data;
     state.activeNewsInfo = data;
  	 state.activeNewsTab = 'Banking';	
  	 state.firstNewsLoad =false;

  	},

  	setMergers(state, data) {

  	 state.mergers = data;
     state.activeNewsInfo = data;
  	 state.activeNewsTab = 'M&A';	
  	 state.firstNewsLoad =false;

  	},

  	setAI(state, data) {


  	 state.ai = data;
     state.activeNewsInfo = data;
  	 state.activeNewsTab = 'AI';	
  	 state.firstNewsLoad =false;

  	},

    setVal(state, data) {


  	 state.valuation = data;
     state.activeNewsInfo = data;
  	 state.activeNewsTab = 'Valuation';	
  	 state.firstNewsLoad =false;

  	},




    setPrevious(state) {

	   if (state.numNewsPage >1)
 	    { 
 	      state.numNewsPage--;
        }
		else
		{
		   state.numNewsPage = 1;
		}
   		state.activeNewsInfo = state.pages[state.numNewsPage];
   		state.activeNewsTab = 'Page';
   		state.firstNewsLoad =false;
     	
    },

    setNextAndFetch(state, data) {

		state.numNewsPage++ ;
		state.pages[state.pages.length]= data;
		state.activeNewsInfo = data;
		state.activeNewsTab = 'Page';
		state.firstNewsLoad =false;  

    },

   setNextNoFetch(state){

  		state.numNewsPage++ ;	
  		state.activeNewsInfo = state.pages[state.numNewsPage];
  		state.activeNewsTab = 'Page';
 	    state.firstNewsLoad =false;
   },

   setLast(state) {
		state.activeNewsInfo = state.pages[0];
		state.activeNewsTab = 'Page';
	    state.firstNewsLoad = false; 
	  	state.numNewsPage = 1;	 
   },


 	set(state, page) {

		if (!this.firstNewsFetched) {

		 state.pages.push(page);

		}

		 state.activeNewsInfo = state.pages[0];
		 state.numNewsPage = 1;
		 state.firstNewsLoad = false; 
		  
	 },
	setInsurNoFetch(state){

		 state.activeNewsrInfo = state.insurtech;
		 state.activeNewsTab = 'Insurtech';	
		 state.firstNewsload = false;	

	 },

	setBlockNoFetch(state) {

		 state.activeNewsInfo = state.blockchain;
		 state.activeNewsTab = 'Blockchain';	
		 state.firstNewsLoad =false;
			
	},

	setPayNoFetch(state){
		
		  state.activeNewsInfo = state.payments;
		  state.activeNewsTab = 'Payments';	
		  state.firstNewsLoad = false;

	},

	setLendNoFetch(state) {

		  state.activeNewsInfo = state.lending;
	      state.activeNewsTab = 'Lending';	
		  state.firstNewsLoad = false;
	},

	setBankNoFetch(state) {


		state.activeNewsInfo = state.banking;
		state.activeNewsTab ='Banking';	
		state.firstNewsLoad =false;

	 },

	setMergersNoFetch(state) {


		state.activeNewsInfo = state.mergers;
		state.activeNewsTab ='M&A';	
		state.firstNewsLoad =false;

	 },

	setAINoFetch(state) {


		state.activeNewsInfo = state.ai;
		state.activeNewsTab ='AI';	
		state.firstNewsLoad =false;

	 },

	 setValNoFetch(state) {

		state.activeNewsInfo = state.valuation;
		state.activeNewsTab ='Valuation';	
		state.firstNewsLoad =false;

	 },
	 
 }

 export const actions = {

    
       	 async setInsur({ commit }) {

			if (!this.insurNewsFetched)
			{
				await this.$axios.get('/links?folder=insurtech')
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

		   if (!this.blockNewsFetched)
		   {
  	       		await this.$axios.get('/links?folder=blockchain')
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

			if (!this.payNewsFetched)
			{
  	       		await this.$axios.get('/links?folder=payments')
           		.then(res => {
					  commit("setPay", res.data);
				})
			}	
			else	
			{
				commit("setPayNoFetch");
			}	
  		 
  		 },

  		 async setLend({ commit }) {

		   if (!this.lendNewsFetched)
		   {	
  	       		await this.$axios.get('/links?folder=lending')
           			.then(res => {
					  commit("setLend", res.data);
		         })
			}
		   else
		   {
				commit("setLendNoFetch");
		   }
  		 
  		 },

  		 async setMergers({ commit }) {

		   if (!this.mergerNewsFetched)
		   {	
  	       		await this.$axios.get('links?id=M%26A')
           			.then(res => {
					  commit("setMergers", res.data);
		         })
			}
		   else
		   {
				commit("setMergersNoFetch");
		   }
  		 
  		 },

  		 async setAI({ commit }) {

		   if (!this.aiNewsFetched)
		   {	
  	       		await this.$axios.get('/links?folder=AI')
           			.then(res => {
					  commit("setAI", res.data);
		         })
			}
		   else
		   {
				commit("setAINoFetch");
		   }
  		 
  		 },

  		 async setVal({ commit }) {

		   if (!this.valNewsFetched)
		   {	
  	       		await this.$axios.get('/links?id=Valuation')
           			.then(res => {
					  commit("setVal", res.data);
		         })
			}
		   else
		   {
				commit("setValNoFetch");
		   }
  		 
  		 },


  		 async setBank({ commit }) {
		    
		    if (!this.bankNewsFetched)
		   	{	
  	    		await this.$axios.get('/links?folder=openbanking')
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
			  
			  await this.$axios.get('/links?page=' + pageVal)
                .then( res => {
					commit("setNextAndFetch", res.data)	  
			   })               
			}	 
  		 
  		  },

  		 async goLast( {commit}) {
          		
          		commit("setLast");
  		 },	

  		 nuxtServerInit(vuexContext, context) {
		   
		   if (!this.firstNewsFetched) { 

              return this.$axios.$get("/links?page=1")
              .then(data => {
                vuexContext.commit("set", data);
              })
		   }
		   else {
			  vuexContext.commit("set");
		   }
	    },   
	      
	}  

	export const getters = {
      
      loadedNews(state) {
        
        return state.news.pages[0];
	  
	  },

	  payNewsFetched() {
		
		return state.news.payments.length > 0 ;
	  
	  },

	  blockNewsFetched() {
		
		return this.state.news.blockchain.length > 0 ;
	  
	  },
	  
	  pageArryLength() {
		
		return state.news.pages.length;
	  
	  },

	  bankPostsFetched() {

	  	return state.news.banking.length > 0 ;
	 
	  },

	  insurNewsFetched() {
		 
		 return state.news.insurtech.length > 0; 
	  
	  },
	  
	  lendNewsFetched()  {
	
		return state.news.lending.length > 0;
	  },
	  
	  firstNewsFetched() {
	
		return state.news.pages[0].length > 0;
	  },

	  mergerNewsFetched () {
	
		return state.news.mergers.length > 0;

	  },

	  aiNewsFetched () {
	
		return state.news.AI.length > 0;
		
	  },

	  valNewsFetched () {
	
		return state.news.valuation.length > 0;
	
	  },

      
      firstpage() {
	
		return state.news.pages[0] ;
	
	  },
	 
	  insurNews() {
	
		return state.news.insurtech;
	  },
	 
	  lendNews() {
	
		 return state.news.lending;
	  },
	  
	  bankNews() {
	
		return state.news.banking;
	  },	
	  
	  pagesArry(item) {
	
		return state.news.pages[item];	
	 },
	
	 activeNewsePage() {
		
		 return state.news.numNewsPage;
	 },
	
	 prevArryVal() {

	 	var val = this.activeNewsPage();
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