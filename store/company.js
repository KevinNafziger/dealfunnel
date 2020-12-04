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
  US: [],
  activeInfo: [],
  activeTab: 'US',
  activeSegment: 'Country',
  firstLoad: true,

})

export const mutations = {

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
		state.activeTab ='US';	
		state.firstLoad =false;
	 
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

  		  nuxtServerInit(vuexContext, context) {
		   
		   if (!this.firstFetched) { 

              return this.$axios.$get("/companies?country=US")
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
      
      loadedCompanies(state) {
        
        return state.company.US;
	  
	  },

	  payFetched() {
		
		return state.company.payments.length > 0 ;
	  
	  },

	  blockFetched() {
		
		return this.state.company.blockchain.length > 0 ;
	  
	  },
	  
	  bankFetched() {

	  	return state.company.banking.length > 0 ;
	 
	  },

	  insurFetched() {
		 
		 return state.company.insurtech.length > 0; 
	  
	  },
	  
	  lendFetched()  {
	
		return state.company.lending.length > 0;
	  },
	  
	  firstFetched() {
	
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

	}