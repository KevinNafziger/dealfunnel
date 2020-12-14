
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
  openbanking: [],
  wealthtech: [],
  healthtech: [],
  remittance: [],
  general: [],
  capitalmarkets: [],
  cyberidentity: [],
  realestate: [],
  neobank: [],
  regtech: [],

  activeNewsInfo: [],
  activeNewsTab: 'All',
  numNewsPage: 1,
  firstNewsLoad: true,

  insur1: [],
  insur2: [],
  insur3: [],
  insur4: [],
  insur5: [],
  insNewsPage: 1,

  block1:  [],
  block2:  [],
  block3:  [],
  block4:  [],
  block5:  [],
  block6:  [],
  block7:  [],
  block8:  [],
  block9:  [],
  block10: [],
  block11: [],
  block12: [],
  block13: [],
  blkNewsPage: 1,

  pay1: [],
  pay2: [],
  pay3: [],
  pay4: [],
  pay5: [],
  payNewsPage: 1,


})

export const mutations = {

 
   setSector(state, data) {

     state.activeNewsInfo = data;
     state.firstNewsLoad = false;
    },

   setTabForSector (state, sector) {

    state.activeNewsTab = sector;
   
   },

   setInsurNext(state, data) {

   	var temp = state.insNewsPage;
   	 temp++;
   	 state.insNewsPage++ ;
   	 state.activeNewsInfo = data;
   	 state.activeNewsTab = 'Insurtech';
     state.firstNewsLoad = false;
	
	    if (temp == 2) {
	   		 state.insur2 =  data;
	     }
	 	else if (temp == 3)	{
	   	   	 state.insur3 =  data;
	    }
	   	else if (temp == 4) {
	   	   	 state.insur4 =  data;	
	    }
	    else if (temp == 5) {
	   	   	 state.insur5= data;	
	   	}
   	 

   },


   setBlockNext(state, data) {

     var temp = state.blkNewsPage;
      temp++;   	
   	 state.blkNewsPage++ ;
   	 state.activeNewsInfo = data;
   	 state.activeNewsTab = 'Blockchain';
     state.firstNewsLoad = false;

    if (temp == 2) {
   		 state.block2 =  data;
     }
 	 else if (temp == 3)	{
   	   	 state.block3 =  data;
     }
   	 else if (temp == 4) {
   	   	 state.block4 =  data;	
     }
     else if (temp ==5) {
   	   	 state.block5= data;	
   	 }
   	 else if (temp ==6) {
   	   	 state.block6 =  data;	
   	 }
   	 else if (temp== 7) {
   	   	 state.block7 =  data;	
   	 }
   	else if (temp ==8) {
   	   	 state.block8 =  data;	
   	}
    else if (temp == 9) {
   	   	 state.block9 =  data;	
   	}
   	else if (temp == 10) {	  
   	   	 state.block10 = data;	
   	}
   	else if (temp == 11) {
   	   	 state.block11 = data;	
   	}
   	else if (temp == 12) {
   	   	 state.block12= data;	
   	}
   	else if (temp == 13) {
   	   	 state.block13 = data;	
   	  }

   },




   setPayNext(state, data) {

   	 var temp = state.payNewsPage;
   	 temp++ ;
   	 state.payNewsPage++ ;
   	 state.activeNewsInfo = data;
     state.firstNewsLoad = false;
     state.activeNewsTab = 'Payments';

	  if (temp == 2) {
	   		 state.pay2 =data;
	     }
	 	else if (temp == 3)	{
	   	   	 state.pay3 =  data;
	    }
	   	else if (temp == 4) {
	   	   	 state.pay4 =  data;	
	    }
	    else if (temp ==5) {
	   	   	 state.pay5= data;	
	   	}

   },



   setInsurPrevious(state) {

   	 var temp = state.insNewsPage;
   	 temp--	;
   	 state.insNewsPage-- ;
   	 state.activeNewsTab = 'Insurtech';
     state.firstNewsLoad = false;

		if (temp == 1) {

	   		 state.activeNewsInfo = state.insur1;
	     }
	 	else if (temp == 2)	{
	   	   	 
	   	   	 state.activeNewsInfo = state.insur2;
	    }
	   	else if (temp == 3) {

	   		state.activeNewsInfo = state.insur3;
	    }
	    else if (temp ==4) {
	   	   	 
	   	   	 state.activeNewsInfo = state.insur4;	
	   	}

   },


   setBlockPrevious(state) {

   	 var temp = state.blkNewsPage;
   	 temp--;
   	 state.blkNewsPage-- ;
   	 state.activeNewsTab = 'Blockchain';
     state.firstNewsLoad = false;

     if (temp == 1) {

     	state.activeNewsInfo = state.block1;
     }
     else if (temp == 2) {
   		
   		state.activeNewsInfo = state.block2;
     }
 	 else if (temp == 3)	{
   	   	
   	   	state.activeNewsInfo = state.block3;
     }
   	 else if (temp == 4) {
   	  	
   	  	state.activeNewsInfo = state.block4;
     }
     else if (temp == 5) {
   	   	
   	   	state.activeNewsInfo = state.block5;	
   	 }
   	 else if (temp ==6) {
   	   	
   	   	state.activeNewsInfo = state.block6;
   	 }
   	 else if (temp == 7) {
   	   	
   	   	 state.activeNewsInfo = state.block7;	
   	 }
   	 else if (temp ==8) {
   	   	
   	   	state.activeNewsInfo = state.block8; 	
   	}
    else if (temp == 9) {
   	   	
   	   	state.activeNewsInfo = state.block9; 	
   	}
   	else if (temp == 10) {	  
   	   	
   	   	state.activeNewsInfo = state.block10; 	
   	}
   	else if (temp == 11) {
   	   	
   	   	state.activeNewsInfo = state.block11; 	
   	}
   	else if (temp ==12) {
   	   	
   	   	state.activeNewsInfo = state.block12;
   	 }
   	else if (temp ==13) {
   	   	
   	   	state.activeNewsInfo = state.block13; 
   	  }
   	 
   },

   setPayPrevious(state) {

   	var temp = state.payNewsPage;
   	temp--;
   	 state.payNewsPage-- ;
     state.firstNewsLoad = false;
     state.activeNewsTab = 'Payments';

   	  if (temp == 1) {
	  	 
	   	 state.activeNewsInfo = state.pay1;
	  }
	  else if (temp == 2)	{
	  
	   	  state.activeNewsInfo = state.pay2;
	   }

	  else if (temp == 3) {

	   	  state.activeNewsInfo = state.pay3;
	   }
	  else if (temp ==4) {
	   	   
	   	  state.activeNewsInfo = state.pay4;	
	   }

   },



  setBlock(state, data){

  	state.block1 = data;
  	state.activeNewsInfo = data;
    state.activeNewsTab = 'Blockchain';
    state.firstNewsLoad =false;
    
   },

   setPay(state, data){

   	 state.pay1 = data;
     state.activeNewsInfo = data;
  	 state.activeNewsTab = 'Payments';	
  	 state.firstNewsLoad = false;

  	},


   setInsur(state, data){

   	 state.insur1 = data;
     state.activeNewsInfo = data;
  	 state.activeNewsTab = 'Insurtech';	
  	 state.firstNewsLoad = false;

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

  	setCyber(state, data) {


  	 state.cyberidentity = data;
     state.activeNewsInfo = data;
  	 state.activeNewsTab = 'CyberIdentity';	
  	 state.firstNewsLoad =false;

  	},

  	setCapital(state, data) {


  	 state.capitalmarkets = data;
     state.activeNewsInfo = data;
  	 state.activeNewsTab = 'CapitalMarkets';	
  	 state.firstNewsLoad =false;

  	},

  	setHealth(state, data) {


  	 state.healthtech = data;
     state.activeNewsInfo = data;
  	 state.activeNewsTab = 'HealthTech';	
  	 state.firstNewsLoad =false;

  	},


  	setWealth(state, data) {


  	 state.wealthtech = data;
     state.activeNewsInfo = data;
  	 state.activeNewsTab = 'WealthTech';	
  	 state.firstNewsLoad =false;

  	},

  	setReal(state, data) {


  	 state.realestate = data;
     state.activeNewsInfo = data;
  	 state.activeNewsTab = 'RealEstate';	
  	 state.firstNewsLoad =false;

  	},


  	setOpen(state, data) {


  	 state.openbanking = data;
     state.activeNewsInfo = data;
  	 state.activeNewsTab = 'OpenBanking';	
  	 state.firstNewsLoad =false;

  	},

  	setNeo(state, data) {


  	 state.neobank = data;
     state.activeNewsInfo = data;
  	 state.activeNewsTab = 'Neobank';	
  	 state.firstNewsLoad =false;

  	},

  	setPer(state, data) {


  	 state.personalfinance = data;
     state.activeNewsInfo = data;
  	 state.activeNewsTab = 'PersonalFinance';	
  	 state.firstNewsLoad =false;

  	},

  	setRemit(state, data) {


  	 state.remittance = data;
     state.activeNewsInfo = data;
  	 state.activeNewsTab = 'Remittance';	
  	 state.firstNewsLoad =false;

  	},

  	setGeneral(state, data) {


  	 state.general = data;
     state.activeNewsInfo = data;
  	 state.activeNewsTab = 'General';	
  	 state.firstNewsLoad =false;

  	},

  	setReg(state, data) {


  	 state.regtech = data;
     state.activeNewsInfo = data;
  	 state.activeNewsTab = 'RegTech';	
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

		 state.activeNewsInfo = state.insurtech;
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

	 setCyberNoFetch(state) {


		state.activeNewsInfo = state.cyberidentity;
		state.activeNewsTab ='CyberIdentity';	
		state.firstNewsLoad =false;

	 },

	 
	 setRegNoFetch(state) {


		state.activeNewsInfo = state.regtech;
		state.activeNewsTab ='RegTech';	
		state.firstNewsLoad =false;

	 },


	 setRemitNoFetch(state) {


		state.activeNewsInfo = state.remittance;
		state.activeNewsTab ='Remittance';	
		state.firstNewsLoad =false;

	 },

	 setCapitalNoFetch(state) {


		state.activeNewsInfo = state.capitalmarkets;
		state.activeNewsTab ='CapitalMarkets';	
		state.firstNewsLoad =false;

	 },

	 setRealNoFetch(state) {


		state.activeNewsInfo = state.realestate
		state.activeNewsTab ='RealEstate';	
		state.firstNewsLoad =false;

	 },

	 setWealthNoFetch(state) {


		state.activeNewsInfo = state.wealthtech;
		state.activeNewsTab ='WealthTech';	
		state.firstNewsLoad =false;

	 },

	 setHealthNoFetch(state) {


		state.activeNewsInfo = state.healthtech;
		state.activeNewsTab ='HealthTech';	
		state.firstNewsLoad =false;

	 },

	 setOpenNoFetch(state) {


		state.activeNewsInfo = state.openbanking;
		state.activeNewsTab ='OpenBanking';	
		state.firstNewsLoad =false;

	 },

	 setNeoNoFetch(state) {


		state.activeNewsInfo = state.neobank;
		state.activeNewsTab ='Neobank';	
		state.firstNewsLoad =false;

	 },

	 setGeneralNoFetch(state) {


		state.activeNewsInfo = state.general;
		state.activeNewsTab ='General';	
		state.firstNewsLoad =false;

	 },

	 setPerNoFetch(state) {


		state.activeNewsInfo = state.personalfinance;
		state.activeNewsTab ='PersonalFinance';	
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
				await this.$axios.get('/links?ins=1')
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

		   if (!this.blockNewsFetched) {

  	       		await this.$axios.get('/links?blk=1')
           		.then(res => {
          			commit("setBlock", res.data);
         		})
		   }

		   else {

				commit("setBlockNoFetch");
			}	
		},


  		 async setPay({ commit }) {

			if (!this.payNewsFetched)
			{
  	       		await this.$axios.get('/links?pay=1')
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
  	       		await this.$axios.get('/links?id=M%26A')
           			.then(res => {
					  commit("setMergers", res.data);
		         })
			}
		   else
		   {
				commit("setMergersNoFetch");
		   }
  		 
  		 },


  		  async setOpen({ commit }) {

		   if (!this.openNewsFetched)
		   {	
  	       		await this.$axios.get('/links?folder=openbanking')
           			.then(res => {
					  commit("setOpen", res.data);
		         })
			}
		   else
		   {
				commit("setOpenNoFetch");
		   }
  		 
  		 },

  		  async setPer({ commit }) {

		   if (!this.perNewsFetched)
		   {	
  	       		await this.$axios.get('/links?folder=personalfinance')
           			.then(res => {
					  commit("setPer", res.data);
		         })
			}
		   else
		   {
				commit("setPerNoFetch");
		   }
  		 
  		 },

  		  async setWealth({ commit }) {

		   if (!this.wealthNewsFetched)
		   {	
  	       		await this.$axios.get('/links?folder=wealthtech')
           			.then(res => {
					  commit("setWealth", res.data);
		         })
			}
		   else
		   {
				commit("setWealthNoFetch");
		   }
  		 
  		 },

  		  async setRemit({ commit }) {

		   if (!this.remitNewsFetched)
		   {	
  	       		await this.$axios.get('/links?folder=remittance')
           			.then(res => {
					  commit("setRemit", res.data);
		         })
			}
		   else
		   {
				commit("setRemitNoFetch");
		   }
  		 
  		 },

  		  async setCapital({ commit }) {

		   if (!this.capitalNewsFetched)
		   {	
  	       		await this.$axios.get('/links?folder=CapitalMarkets')
           			.then(res => {
					  commit("setCapital", res.data);
		         })
			}
		   else
		   {
				commit("setCapitalNoFetch");
		   }
  		 
  		 },


  		  async setCyber({ commit }) {

		   if (!this.cyberNewsFetched)
		   {	
  	       		await this.$axios.get('/links?folder=cyberidentity')
           			.then(res => {
					  commit("setCyber", res.data);
		         })
			}
		   else
		   {
				commit("setCyberNoFetch");
		   }
  		 
  		 },


  		  async setReal({ commit }) {

		   if (!this.realNewsFetched)
		   {	
  	       		await this.$axios.get('/links?folder=RealEstate')
           			.then(res => {
					  commit("setReal", res.data);
		         })
			}
		   else
		   {
				commit("setRealNoFetch");
		   }
  		 
  		 },


  		  async setReg({ commit }) {

		   if (!this.regNewsFetched)
		   {	
  	       		await this.$axios.get('/links?folder=regtech')
           			.then(res => {
					  commit("setReg", res.data);
		         })
			}
		   else
		   {
				commit("setRegNoFetch");
		   }
  		 
  		 },


  		  async setHealth({ commit }) {

		   if (!this.healthNewsFetched)
		   {	
  	       		await this.$axios.get('/links?folder=healthtech')
           			.then(res => {
					  commit("setHealth", res.data);
		         })
			}
		   else
		   {
				commit("setHealthNoFetch");
		   }
  		 
  		 },


  		  async setWealth({ commit }) {

		   if (!this.wealthNewsFetched)
		   {	
  	       		await this.$axios.get('links?folder=wealthtech')
           			.then(res => {
					  commit("setWealth", res.data);
		         })
			}
		   else
		   {
				commit("setWealthNoFetch");
		   }
  		 
  		 },


  		  async setGeneral({ commit }) {

		   if (!this.generalNewsFetched)
		   {	
  	       		await this.$axios.get('/links?folder=General')
           			.then(res => {
					  commit("setGeneral", res.data);
		         })
			}
		   else
		   {
				commit("setGeneralNoFetch");
		   }
  		 
  		 },



  		  async setNeo({ commit }) {

		   if (!this.neoNewsFetched)
		   {	
  	       		await this.$axios.get('links?folder=neobank')
           			.then(res => {
					  commit("setNeo", res.data);
		         })
			}
		   else
		   {
				commit("setNeoNoFetch");
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

		   if (!this.valNewsFetched) {

	       	 await this.$axios.get('/links?id=Valuation')
       		    .then(res => {
				  commit("setVal", res.data);
	         })
		   }
		   else {
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

			if (this.pageArryLength >= pageVal) {

			  commit("setNextNoFetch");
			}	
			else {
			  
			  await this.$axios.get('/links?page=' + pageVal)
                .then( res => {
					commit("setNextAndFetch", res.data)	  
			   })               
			}	 
  		 
  		  },

  		 async setBlockPrevious({ commit }, page ) {
	
		   commit("setBlockPrevious");
  		 
  		 },

  		 async setBlockNext( {commit}, page) {

			 var temp = page;
			 temp++ ;

			  await this.$axios.get('/links?blk=' + temp)
                .then( res => {
					commit("setBlockNext", res.data)	  
			   })               
		 },	 
  		 

  		 async setPayPrevious({ commit }, page ) {
	
		   commit("setPayPrevious");
  		 
  		 },

  		 async setPayNext( {commit}, page) {

  		 	 var temp = page;
			   temp++ ;
		
			  await this.$axios.get('/links?pay=' + temp)
                .then( res => {
					commit("setPayNext", res.data)	  
			   })               
  		 
  		  },

        async setSector( {commit}, sector) {

        await this.$axios.get('/links?sector=' + sector)
                .then( res => {
          commit("setSector", res.data)    
         })               
       
        },

        async setbyID( {commit}, sector) {

        await this.$axios.get('/links?id=' + sector)
                .then( res => {
          commit("setSector", res.data)    
         })               
       
        },

       setSectorTab( {commit}, sector) {

          commit("setTabForSector", sector)    
           
        },

  		 async setInsurPrevious({ commit }, page ) {
	
		   commit("setInsurPrevious");
  		 
  		 },

  		 async setInsurNext( {commit}, page) {

			var temp = page;
			temp++ ;
			  
			await this.$axios.get('/links?ins=' + temp)
                .then( res => {
					commit("setInsurNext", res.data)	  
			   })               
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
      
      loadedNews() {
        
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


	  healthNewsFetched () {

	     return state.news.healthtech.length > 0;

	  },


	  perNewsFetched () {

	     return state.news.personalfinance.length > 0;

	  },

	  capitalNewsFetched () {

	     return state.news.capitalmarkets.length > 0;

	  },

  	  realNewsFetched () {

	     return state.news.realestate.length > 0;

	  },

	  regNewsFetched () {

	     return state.news.regtech.length > 0;

	  },


	 cyberNewsFetched () {

	     return state.news.cyberidentity.length > 0;

	  },


	  generalNewsFetched () {

	     return state.news.general.length > 0;

	  },


 	  wealthNewsFetched () {

	     return state.news.wealthtech.length > 0;

	  },


  	  openNewsFetched () {

	     return state.news.openbanking.length > 0;

	  },


  	  remitNewsFetched () {

	     return state.news.remittance.length > 0;

	  },


	  neoNewsFetched () {

	     return state.news.neobank.length > 0;

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