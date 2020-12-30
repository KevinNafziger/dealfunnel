import allCompanies from '~/static/company.json';
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
  company1: [],
  company2: [],
  company3: [],
  company4: [],
  activeCompany: [],
  activeInfo: [],
  activeTab: 'Lending',
  activeSegment: 'Country',
  firstLoad: true,
  allCompanies: [],
  activePage: 1,

})

export const mutations = {

   setAllCompanies(state, items) {
      state.allCompanies = items;
   },

   setAll(state) {

    var lastItem =  state.allCompanies.length;
    lastItem--;
    state.company1 = state.allCompanies.slice(0, 500);
    state.company2 = state.allCompanies.slice(500,1000);
    state.company3 = state.allCompanies.slice(1000,1500);
    state.company4 = state.allCompanies.slice(1500,lastItem);
    state.activeInfo = state.allCompanies.slice(0, 500);  
    state.activeTab = "All page 1";
    state.firstLoad = false;
    state.activePage = 1;

   },


   setCompany(state, item) {

  	state.activeCompany = item; 
    },


   setInsur(state, data) {

    state.insurtech = data; 
   	state.activeInfo = data;
   	state.activeTab = 'Insurtech';
    state.firstLoad = false;
   
    },


   setBlock(state, data) {

  	 state.blockchain = data;
  	 state.activeInfo = data;
     state.activeTab = 'Blockchain';
     state.firstLoad =false;
    
    },

   setPay(state, data) {

   	 state.payments = data;
     state.activeInfo = data;
  	 state.activeTab = 'Payments';	
  	 state.firstLoad =false;

  	},

   setLend(state, data){

  	 state.lending = data;
     state.activeInfo = data;
     state.activeTab = 'Lending';	
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
	 state.firstLoad = false;	

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

	setComp2(state) {

	  state.activeInfo = state.allCompanies.slice(500,1000);
	  state.activeTab ='All page 2';
	  state.activePage =2;	
	  state.firstLoad = false;
	 
	 },

	setComp3(state) {

	  state.activeInfo = state.allCompanies.slice(1000, 1500);
	  state.activeTab ='All page 3';
	  state.activePage =3;	
	  state.firstLoad = false;
	 
	 },

	 setComp4(state) {

	  var lastItem =  state.allCompanies.length;
      lastItem--;	
	  state.activeInfo = state.allCompanies.slice(1500, lastItem);
	  state.activeTab ='All page 4';	
	  state.firstLoad = false;
	  state.activePage =4;	
	 
	 },

	 setComp1(state) {

	  state.activeInfo = state.allCompanies.slice(0, 500);
	  state.activeTab ='All page 1';	
	  state.firstLoad = false;
	  state.activePage =1 ;	
	 
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

			if (!this.insurFetched) {

			  await this.$axios.get('/companies?category=insurtech')
           		 .then(res => {
          			commit("setInsur", res.data);
         		 })
			 }

			 else {

				commit("setInsurNoFetch");
			 }	

		 },


  		 async setBlock({ commit }) {

		   if (!this.blockFetched){

  	       		await this.$axios.get('/companies?category=blockchain')
           		.then(res => {
          			commit("setBlock", res.data);
         		})
		   }

		   else {

				commit("setBlockNoFetch");
			}	
		
		  },

  		  async setPay({ commit }) {

			if (!this.payFetched) {

  	       		await this.$axios.get('/companies?category=payments')
           		.then(res => {
					  commit("setPay", res.data);
				})
			}	
			
			else {

				commit("setPayNoFetch");
			}	
  		 
  		   },

  		   async setLend({ commit }, origin) {

			   if (!this.pastInit) {

	  	       		await this.$axios.get('/companies?category=lending')
	           			.then(res => {
						  commit("setLend", res.data);
			         })
				}

			   else if (origin =="notFromLoad")  {	
					commit("setLendNoFetch");
			    }
  		 
  		    },


  		   async setBank({ commit }) {
			    
			    if (!this.bankFetched) {

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


           async setComp2({ commit }) {

				commit("setComp2" );
		   },

		   async setComp3({ commit }) {

				commit("setComp3" );
		   },

	      async setComp4({ commit }) {

				commit("setComp4" );
		   },
		   

           async setComp1({ commit }) {

				commit("setComp1" );
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

      	  async setAllCompanies ( {commit}) {

             commit("setAllCompanies", allCompanies); 

           },

  		   async submitSearch( {commit}, topic) {
			
				await this.$axios.get('/companies?term=' + topic)
	             .then( res => {
	          		commit("submitSearch", res.data)
	      	 	 })
  		    },	

  		    async setAll( {commit}) {
          		commit("setAll");
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

	  payFetched(state) {
		
	    if (state.payments.length) {
         	return true;
        } 

        else {
        	return false;
        } 
	  
	  },


	  blockFetched(state) {
		
		  if (state.blockchain.length) {
	        return true;
	      } 
	      else {
	        return false;
	      } 	
	  },

	  
	  bankFetched(state) {

		  if (state.banking.length) {
	        return true;
	      } 

	      else {
	        return false;
	      } 
	  },


	  insurFetched(state) {
		 
	  	if (state.insurtech.length) {
        	return true;
      	} 
      	else {
       		return false;
      	} 
	  
	  },

	  
	  lendFetched(state)  {
	
		  if (state.lending.length) {
	        	return true;
	      } 
	      else {
	        
	        	return false;
	      } 
	  },

	  
	  pastInit(state) {

		  if (state.firstLoad) {

	        return false;
	      } 

	      else {
	        return true;
	      } 

	  },

	  firstCompaniesFetched(state) {
	
		   if (state.US.length) {
	        return true;
	      } 

	      else {
	        return false;
	      } 

	  },

      
      firstPage(state) {
	
		return state.US ;
	
	  },

	 
	  insurtech(state) {
	
		return state.insurtech;
	  },

	 
	  lending(state) {
	
		 return state.lending;
	  },

	  
	  banking(state) {
	
		return state.banking;
	 
	  },

	  currCompany: (state, id ) => {

	  	  return state.activeInfo.find(c => c.id == id);
	  },	


	  US1Fetched(state) {

	  	if (state.US1.length) {
	        return true;
	      } 

	    else {
	        return false;
	 	 }	

	  },

	  US2Fetched(state) {

		if (state.US2.length) {
		     return true;
		 } 
		 
		else  {
		     return false;
		  }
	   },

	  US3Fetched(state) {

	  	if (state.US3.length) {
	        return true;
	      } 
	    
	    else {
	        return false;
	 	 }
	   },

	  USFetched(state) {

		  if (state.US.length) {
		     return true;
		  } 

		  else {
		     return false;
		  }
	  },

     allCompaniesFetched(state) {

	    if (state.allCompanies.length) {
	      return true;
	    }

	    else {
	      return false;
	    }

 	 },

  	totalAllCompanies(state) {

	    if (state.all.Companies.length) {
	      return state.allCompanies.length;
	    }

	    else {
	      return 0;
	    }
  	}

}