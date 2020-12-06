export const state = () => ({
  insurtech: [],
  blockchain: [],
  payments:[],
  lending: [],
  byLetter: [],
  byState: [],
  byCity: [],
  byRegion: [],
  byYear: [],
  US1: [],
  US2: [],
  US3: [],
  US: [],
  activeCompany: [],
  activeInfo: [],
  activeTab: 'Lending',
  activeSegment: 'Country',
  firstLoad: true,

})

export const mutations = {


   setCompany(state, item) {

  	state.activeCompany = item; 

  },


   setInsur(state, data) {

    state.insurtech = data; 
   	state.activeInfo = data;
   	state.activeTab = 'Insurtech';
    state.firstLoad = false;
   
   },

   setBlock(state, data){

  	state.blockchain = data;
  	state.activeInfo = data;
    state.activeTab = 'Blockchain';
    state.firstLoad =false;
    
   },

   setPay(state, data){

   	 state.payments = data;
     state.activeInfo = data;
  	 state.activeTab = 'Payments';	
  	 state.firstLoad =false;

  	},

   setLend(state, data){

  	 state.lending = data;
     state.activeInfo = data;
     state.activTab = 'Lending';	
     state.firstLoad =false;
  	 
   },

   setBank(state, data) {

   	 state.banking = data;
     state.activeInfo = data;
  	 state.activeTab = 'Banking';	
  	 state.firstLoad =false;

  	},
	
	setInsurNoFetch(state){

	 state.activeInfo = state.insurtech;
	 state.activeTab = 'Insurtech';	
	 state.firstload = false;	
	
	 },

	setBlockNoFetch(state) {

	 state.activeInfo = state.blockchain;
	 state.activeTab = 'Blockchain';	
	 state.firstLoad =false;		
	},

	setPayNoFetch(state){
		
	  state.activeInfo = state.payments;
	  state.activeTab = 'Payments';	
	  state.firstLoad = false;
	},

	setLendNoFetch(state) {

	  state.activeInfo = state.lending;
      state.activeTab = 'Lending';	
	  state.firstLoad = false;
	},

	setBankNoFetch(state) {

	  state.activeInfo = state.banking;
	  state.activeTab ='Banking';	
	  state.firstLoad =false;
	 
	 },

	 set(state, data) {

	  state.activeInfo = data;
	  state.US = data;
	  state.activeTab ='US ';	
	  state.firstLoad = false;
	 
	 },

	 setNoFetch(state) {

	  state.activeInfo = state.US;
	  state.activeTab ='US ';	
	  state.firstLoad = false;

	 },

	 setUS1(state, data) {

	  state.activeInfo = data;
	  state.US1 = data;
	  state.activeTab ='US Page 1';	
	  state.firstLoad = false;
	 
	 },


	 setUS2(state, data) {

	  state.activeInfo = data;
	  state.US2 = data;
	  state.activeTab ='US Page 2';	
	  state.firstLoad = false;
	 },

	 setUS3(state, data) {

	  state.activeInfo = data;
	  state.US3 = data;
	  state.activeTab ='US Page 3';	
	  state.firstLoad = false;
	 
	 },


	 setUS1NoFetch(state) {

	  state.activeInfo =  state.US1 ;
	  state.activeTab ='US Page 1';	
	  state.firstLoad = false;
	 
	 },


	 setUS2NoFetch(state) {

	  state.activeInfo =  state.US2
	  state.activeTab ='US Page 2';	
	  state.firstLoad = false;
	 },

	 setUS3NoFetch(state) {

	  state.activeInfo = state.US3
	  state.activeTab ='US Page 3';	
	  state.firstLoad = false;
	 
	 },

	 submitSearch(state, data) {

  	   state.activeInfo = data;
  	   state.firstLoad = false;  		

      },

      setSearchTab(state, topic) {

    	state.activeTab = topic ;

      },

  }
 export const actions = {

       	 async setInsur({ commit }) {

			if (!this.insurFetched)
			{
				await this.$axios.get('/companies?category=insurtech')
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

		   if (!this.blockFetched)
		   {
  	       		await this.$axios.get('/companies?category=blockchain')
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

			if (!this.payFetched)
			{
  	       		await this.$axios.get('/companies?category=payments')
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

		   if (!this.lendFetched)
		   {	
  	       		await this.$axios.get('/companies?category=lending')
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
		    
		    if (!this.bankFetched)
		   	{	
  	    		await this.$axios.get('/companies?category=openbanking')
           			.then(res => {
          			commit("setBank", res.data);
			 	})
		   	} 
		   	else {
				
				commit("setBankNoFetch" );
		    }
  		 
  		  },


  		    async setInitial({ commit }) {

           	 if (!this.USFetched) {

		   		 await this.$axios.get('/companies?country=US')
		      		.then(item => {
		        		commit("set", item.data);
		      		})
		      }

		      else {
				
				commit("setInitial1NoFetch" );
		       }

 		    },


           async setUS1({ commit }) {

           	 if (!this.US1Fetched) {

		   		 await this.$axios.get('/companies?US=1')
		      		.then(item => {
		        		commit("setUS1", item.data);
		      		})
		      }

		      else {
				
				commit("setUS1NoFetch" );
		       }

 		    },

 		    async setUS2({ commit }) {


           	 if (!this.US2Fetched) {	

	   		 await this.$axios.get('/companies?US=2')
	      		.then(item => {
	        		commit("setUS2", item.data);
	      		})
	      	 }

	      	 else {
				
				commit("setUS2NoFetch" );
		       }
 		    },

 		    async setUS3({ commit }) {


           	 if (!this.US2Fetched) {

	   		 await this.$axios.get('/companies?US=3')
	      		.then(item => {
	        		commit("setUS3", item.data);
	      		})
 		     }

 		     else {
				
				commit("setUS3NoFetch" );
		       }
 		    },


 		   async asyncData({context}, id ) {

	   		 await context.$axios.$get('/companies?item' + id)
	      		.then(item => {
	        		commit("set", item);
	      		})
 		    },

  		    async setSearchTab( {commit}, topic) {

          		commit("setSearchTab", topic);
      	 
      	    },

  		    async submitSearch( {commit}, topic) {
			
			  await this.$axios.get('/companies?term=' + topic)
              .then( res => {
          		commit("submitSearch", res.data)
      	
      	 	   })
  		    },	


  		    nuxtServerInit(vuexContext, context) {
		   
               return this.$axios.$get("/companies?US=1")
              .then(res => {
                vuexContext.commit("setUS1", res);
              })
	       },
	 } 


	export const getters = {
      
      loadedCompanies(state) {
        
        return state.US;
	  
	  },

	  payFetched() {
		
		return state.company.payments.length > 0 ;
	  
	  },

	  blockFetched() {
		
		return state.company.blockchain.length > 0 ;
	  
	  },
	  
	  bankFetched() {

	  	return state.company.banking.length > 0 ;
	 
	  },

	  insurFetched(state) {
		 
		 return state.insurtech.length > 0; 
	  
	  },
	  
	  lendFetched()  {
	
		return state.company.lending.length > 0;
	  },
	  
	  firstTime() {
	
		return state.company.firstLoad == true;

	  },

	  firstCompaniesFetched() {
	
		return state.company.US.length > 0;

	  },
      
      firstPage() {
	
		return state.company.US ;
	
	  },
	 
	  insurtech() {
	
		return state.company.insurtech;
	  },
	 
	  lending() {
	
		 return state.company.lending;
	  },
	  
	  banking() {
	
		return state.company.banking;
	 
	  },

	  currCompany: (state, id ) => {

	  	  return state.activeInfo.find(c => c.id == id);

	  },	

	  US1Fetched() {

	  	 return state.company.US1.length > 0; 	

	  },

	  US2Fetched() {

	  	 return state.company.US2.length > 0; 	
	  },


	  US3Fetched() {

	  	 return state.company.US3.length > 0; 	
	  },

	  USFetched() {

	  	 return state.company.US.length > 0; 	
	  },

}