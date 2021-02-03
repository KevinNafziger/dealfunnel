import allNews from '~/data/news';

export const state = () => ({
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
  allNews: [],
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

  news1: [],
  news2: [],
  news3: [],
  news4: [],
  news5: [],
  news6: [],
  news7: [],
  news8: [],
  news9: [],
  news10: [],
  news11: [],
  news12: [],
  news13: [],
  news14: [],
  news15: [],
  news16: [],
  news17: [],
  news18: [],
  news19: [],
  news20: [],
  news21: [],
  news22: [],
  news23: [],
  news24: [],
  news25:[],


  pay1: [],
  pay2: [],
  pay3: [],
  pay4: [],
  pay5: [],
  payNewsPage: 1,
  allNews:[],

})

export const mutations = {

 
   initInsur(state, data) {

      var insurLength = data.length;
      insurLength--;
      state.insur1 = data.slice(0, 200);
      state.insur2 = data.slice(200,400);
      state.insur3 = data.slice(400, 600);
      state.insur4 = data.slice(600, 800);
      state.insur5 = data.slice(800, insurLength);

      state.activeNewsInfo = data.slice(0, 200);
      state.insNewsPage = 1;
      state.activeNewsTab = 'Insurtech';
      state.firstNewsLoad =false;
   },

   initBlock(state, data) {

     var blockLength = data.length;
      blockLength--;
      state.block1 = data.slice(0, 200);
      state.block2 = data.slice(200,400);
      state.block3 = data.slice(400, 600);
      state.block4 = data.slice(600, 800);
      state.block5 = data.slice(800, 1000);
      state.block6 = data.slice(1000,1200);
      state.block7 = data.slice(1200, 1400);
      state.block8 = data.slice(1400, 1600);
      state.block9 = data.slice(1600, 1800);
      state.block10 = data.slice(1800,2000);
      state.block11 = data.slice(2000,2200);
      state.block12 = data.slice(2200, 2400);  
      state.block13 = data.slice(2400, blockLength);

      state.activeNewsInfo = data.slice(0, 200);
      state.activeNewsTab = 'Blockchain';
      state.firstNewsLoad =false;
    },   

    initPay(state, data) {

      var payLength = data.length;
      payLength--;
      state.pay1 = data.slice(0, 200);
      state.pay2 = data.slice(200,400);
      state.pay3 = data.slice(400, 600);
      state.pay4 = data.slice(600, 800);
      state.pay5 = data.slice(800, payLength);

      state.activeNewsInfo = data.slice(0, 200);
      state.activeNewsTab = 'Payments';
      state.firstNewsLoad =false;
  
    },

    setAllNews(state, data) {

      state.allNews = data;
      var newsLength = data.length;
      newsLength--;
      state.activeNewsInfo = data.slice(0, 200);
      state.news1 = data.slice(0, 200);
      state.news2 = data.slice(200,400);
      state.news3 = data.slice(400, 600);
      state.news4 = data.slice(600, 800);
      state.news5 = data.slice(800, 1000);
      state.news6 = data.slice(1000,1200);
      state.news7 = data.slice(1200, 1400);
      state.news8 = data.slice(1400, 1600);
      state.news9 = data.slice(1600, 1800);
      state.news10 = data.slice(1800,2000);
      state.news11 = data.slice(2000,2200);
      state.news12 = data.slice(2200, 2400);  
      state.news13 = data.slice(2400, 2600);
      state.news14 = data.slice(2600, 2800);
      state.news15 = data.slice(2800,3000);
      state.news16 = data.slice(3000, 3200);
      state.news17 = data.slice(3200, 3400);
      state.news18 = data.slice(3400, 3600);
      state.news19 = data.slice(3600,3800);
      state.news20 = data.slice(3800, 4000);
      state.news21 = data.slice(4000, 4200);
      state.news22 = data.slice(4200, 4400);
      state.news23 = data.slice(4400, newsLength);
      state.activeNewsTab = 'All';
      state.firstNewsLoad = false;
      state.numNewsPage =1;

   
    },

    setSector(state, data) {
    
     state.activeNewsInfo = data;
     state.firstNewsLoad = false;
     state.numNewsPage=1;
     state.blkNewsPage=1;
     state.insNewsPage=1;
     state.payNewsPage=1;        
    },

   setTabForSector (state, sector) {
     state.activeNewsTab = sector;
   },

   setInsurNext(state, data) {

   	 var temp = state.insNewsPage;
   	 temp++;
   	 state.activeNewsInfo = data;
   	 state.activeNewsTab = 'Insurtech';
     state.firstNewsLoad = false;
	
	   if (temp == 2) {
	     state.insur2 =  data;
	   }
	 
     else if (temp == 3)	{
	   	  state.insur3 = data;
	   }

	   else if (temp == 4) {
	   	   state.insur4 = data;	
	    }

	    else if (temp == 5) {
	   	   state.insur5= data;	
	   	}
   	state.insNewsPage = temp;
   },

   setBlockNext(state, data) {

     var temp = state.blkNewsPage;
     temp++; 
     state.blkNewsPage = temp;
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
     state.payNewsPage = temp;
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

	  else if (temp == 4) { 	   	 
	      	 state.activeNewsInfo = state.insur4;	
	  }
    state.insNewsPage = temp;
   },

   setBlockPrevious(state) {

   	 var temp = state.blkNewsPage;
   	 temp--;
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
   	 state.blkNewsPage = temp;
   },

   setPayPrevious(state) {

   	  var temp = state.payNewsPage;
   	  temp--;
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

	  else if (temp == 4) {
	   	   
	   	  state.activeNewsInfo = state.pay4;	
	  }
    state.payNewsPage = temp;
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

    var temp = state.numNewsPage;
    temp--;

	  
   	 state.activeNewsTab = 'All';
   	 state.firstNewsLoad = false;

    if (temp == 1) {
      state.activeNewsInfo = state.news1;
     }
    else if (temp == 2) {
      state.activeNewsInfo = state.news2;

    }

    else if (temp == 3) {
      state.activeNewsInfo = state.news3;
    }

    else if (temp == 4) {
        
      state.activeNewsInfo = state.news4;
    
    }
    
    else if (temp == 5) {
      state.activeNewsInfo = state.news5;
    }

    else if (temp == 6) {
      state.activeNewsInfo = state.news6;      
    }
    else if (temp == 7) {
        
      state.activeNewsInfo = state.news7;
    }
    else if (temp == 8) {
      state.activeNewsInfo = state.news8;
     }
     
    else if (temp ==9) {
        
      state.activeNewsInfo = state.news9;
      state.numNewsPage = 9;  
    
    }
    
    else if (temp == 10) {
      state.activeNewsInfo = state.news10;
    }
    
    else if (temp == 11) {    
        
      state.activeNewsInfo = state.news11;
    }
    
    else if (temp == 12) {
        
      state.activeNewsInfo = state.news12;

    }
    
    else if (temp == 13) {
    
      state.activeNewsInfo = state.news13;
    }
    else if (temp ==14) {
      state.activeNewsInfo = state.news14; 
    }
    else if (temp==15) {     

      state.activeNewsInfo = state.news15; 
    }

    else if (temp==16) {
      state.activeNewsInfo = state.news16;
    
    }
    else if (temp ==17) { 
      state.activeNewsInfo = state.news17; 
    }
   
   else if (temp == 18) {
    state.activeNewsInfo = state.news18; 
   }
   
   else if (temp == 19) {
        
    state.activeNewsInfo = state.news19; 
   }
  
   else if (temp == 20) {
        
    state.activeNewsInfo = state.news20; 
   
   }
  
   else if (temp == 21) {
    state.activeNewsInfo = state.news21; 

   }
 
   else if (temp == 22) {

    state.activeNewsInfo = state.news22; 

   }
   
   else if (temp == 23) {

    state.activeNewsInfo = state.news23; 
  }
 	  state.numNewsPage = temp;
    },

    setNextAndFetch(state, data) {

     var temp = state.numNewsPage;
     temp++
      
  		state.activeNewsInfo = data;
  		state.activeNewsTab = 'All';
  		state.firstNewsLoad = false; 
      if (temp==2) {
          state.news2 = state.activeNewsInfo;
          state.numNewsPage = 2;
       }
       else if (temp == 3) {
      
        state.news3 =state.activeNewsInfo;
        state.numNewsPage = 3;

       }
       else if (temp == 4) {
        
        state.news4= state.activeNewsInfo;
        state.numNewsPage = 4;
       }
       else if (temp == 5) {
        
       state.news5= state.activeNewsInfo;
       state.numNewsPage = 5;
       }

       else if (temp == 6) { 
       
       state.news6 =state.activeNewsInfo;  
       state.numNewsPage = 6;
     
      }
       else if (temp == 7) {
        
      state.news7 = state.activeNewsInfo;
      state.numNewsPage = 7;
     
       }
     else if (temp == 8) {  

      state.news8= state.activeNewsInfo;
      state.numNewsPage = 8; 
     
     }
     else if (temp ==9) {   
      state.news9=state.activeNewsInfo;
      state.numNewsPage = 9;  
     
     }
    
     else if (temp == 10) { 
     
      state.news10= state.activeNewsInfo;
      state.numNewsPage = 10;  
     
     }

     else if (temp == 11) {       

      state.news11=state.activeNewsInfo;
      state.numNewsPage = 11;

     }

     else if (temp == 12) {

      state.news12=state.activeNewsInfo;
      state.numNewsPage = 12;

     }

     else if (temp == 13) {

      state.news13= state.activeNewsInfo;
      state.numNewsPage = 13;
     }

     else if (temp == 14) {
      state.news14=state.activeNewsInfo; 
      state.numNewsPage = 14;
     }

     else if (temp == 15) {     
       state.news15= state.activeNewsInfo; 
      state.numNewsPage = 15;
     }

    else if (temp == 16) {
     state.news16=state.activeNewsInfo;
      state.numNewsPage = 16; 
    }
    else if (temp ==17) {
      state.news17=state.activeNewsInfo;
      state.numNewsPage = 17; 
    }
    else if (temp == 18) {
      state.news18= state.activeNewsInfo;
      state.numNewsPage = 18; 
    }
    else if (temp == 19) {
      state.news19= state.activeNewsInfo; 
      state.numNewsPage = 19;
   }
   else if (temp == 20) {
     state.news20= state.activeNewsInfo; 
     state.numNewsPage = 20;
   }
   else if (temp == 21) { 
     state.news21= state.activeNewsInfo; 
     state.numNewsPage = 21;
   }
   else if (temp == 22) {
    state.news22= state.activeNewsInfo; 
    state.numNewsPage = 22;
   }
   else if (temp == 23) {
    state.news23= state.activeNewsInfo; 
    state.numNewsPage = 23; 
   } 

     },

    setNextNoFetch(state){
 
     var temp = state.numNewsPage;
     temp++
     state.activeNewsTab = 'All';
     state.firstNewsLoad = false;

       if (temp==2) {
          state.activeNewsInfo= state.news2;
          state.numNewsPage = 2;
       }
       else if (temp == 3) {
      
        state.activeNewsInfo = state.news3;
        state.numNewsPage = 3;

       }
       else if (temp == 4) {
        
        state.activeNewsInfo = state.news4;
        state.numNewsPage = 4;
       }
       else if (temp == 5) {
        
       state.activeNewsInfo = state.news5;
       state.numNewsPage = 5;
       }

      else if (temp == 6) { 
      state.activeNewsInfo = state.news6;  
      state.numNewsPage = 6;
     
     }
     else if (temp == 7) {
        
      state.activeNewsInfo = state.news7;
      state.numNewsPage = 7;
     
     }
     else if (temp == 8) {  

      state.activeNewsInfo = state.news8;
      state.numNewsPage = 8; 
     
     }
     else if (temp ==9) {   
      state.activeNewsInfo = state.news9;
      state.numNewsPage = 9;  
     
     }
    
     else if (temp == 10) { 
     
      state.activeNewsInfo = state.news10;
      state.numNewsPage = 10;  
     
     }

     else if (temp == 11) {       

      state.activeNewsInfo = state.news11;
      state.numNewsPage = 11;

     }

     else if (temp == 12) {

      state.activeNewsInfo = state.news12;
      state.numNewsPage = 12;

     }

     else if (temp == 13) {

      state.activeNewsInfo = state.news13;
      state.numNewsPage = 13;
     }

     else if (temp == 14) {
      state.activeNewsInfo = state.news14; 
      state.numNewsPage = 14;
     }

     else if (temp == 15) {     
      state.activeNewsInfo = state.news15; 
      state.numNewsPage = 15;
     }

     else if (temp == 16) {
      state.activeNewsInfo = state.news16;
      state.numNewsPage = 16; 
      }

    else if (temp ==17) {
      state.activeNewsInfo = state.news17;
      state.numNewsPage = 17; 
    }

    else if (temp == 18) {
      state.activeNewsInfo = state.news18;
      state.numNewsPage = 18; 
    }

    else if (temp == 19) {
      state.activeNewsInfo = state.news19; 
      state.numNewsPage = 19;
    }

   else if (temp == 20) {
     state.activeNewsInfo = state.news20; 
     state.numNewsPage = 20;
   }

   else if (temp == 21) { 
     state.activeNewsInfo = state.news21; 
     state.numNewsPage = 21;
   }

   else if (temp == 22) {
    state.activeNewsInfo = state.news22; 
    state.numNewsPage = 22;
   }

   else if (temp == 23) {
    state.activeNewsInfo = state.news23; 
    state.numNewsPage = 23; 
   }
     
  },

  setLast(state) {

  		state.activeNewsInfo = state.news1;
  		state.activeNewsTab = 'All';
	    state.firstNewsLoad = false; 
	  	state.numNewsPage = 1;	 
   
    },


 	 set(state, page) {

		state.activeNewsInfo = state.news1;
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
		 state.firstNewsLoad = false;
			
	  },

  	setPayNoFetch(state) {
  		
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
		state.activeNewsTab = 'CyberIdentity';	
		state.firstNewsLoad = false;

	 },

	 setRegNoFetch(state) {

  		state.activeNewsInfo = state.regtech;
  		state.activeNewsTab ='RegTech';	
  		state.firstNewsLoad = false;

	 },

	 setRemitNoFetch(state) {

  		state.activeNewsInfo = state.remittance;
  		state.activeNewsTab ='Remittance';	
  		state.firstNewsLoad =false;
	 },

	 setCapitalNoFetch(state) {

  		state.activeNewsInfo = state.capitalmarkets;
  		state.activeNewsTab = 'CapitalMarkets';	
  		state.firstNewsLoad = false;
	 },

	 setRealNoFetch(state) {

		  state.activeNewsInfo = state.realestate
		  state.activeNewsTab ='RealEstate';	
		  state.firstNewsLoad =false;

	 },

	 setWealthNoFetch(state) {

  		state.activeNewsInfo = state.wealthtech;
  		state.activeNewsTab ='WealthTech';	
  		state.firstNewsLoad = false;

	 },

	 setHealthNoFetch(state) {

  		state.activeNewsInfo = state.healthtech;
  		state.activeNewsTab ='HealthTech';	
  		state.firstNewsLoad = false;

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

   submitSearch(state, data) {

      state.activeNewsInfo = data;
      state.firstNewsLoad = false;     
    },

    setSearchTab(state, topic) {
      state.activeNewsTab = topic ;
    },

	  setValNoFetch(state) {

  		state.activeNewsInfo = state.valuation;
  		state.activeNewsTab ='Valuation';	
  		state.firstNewsLoad = false;

	  },
	 
}

 export const actions = {
    
     async setInsur({ commit }) {

  			if (!this.insurNewsFetched  && !this.allNewsFetched) {

  				await this.$axios.get('/links?ins=1')
             		.then(res => {
            			commit("setInsur", res.data);
           		})
  			}

        else if (this.allNewsFetched)  {
            commit('initInsur', newbyFolder('insurtech'));
        }

        else {
				  commit("setInsurNoFetch");
			  }

		  },

  		async setBlock({ commit }) {

		    if (!this.blockNewsFetched && !this.allNewsFetched) {

  	       	await this.$axios.get('/links?blk=1')
           		.then(res => {
          			commit("setBlock", res.data);
         		})
		    }

       else if (this.allNewsFetched)  {
            commit('initBlock', newsbyFolder('blockchain'));
        }

		   else {
				   commit("setBlockNoFetch");
			  }	
		
      },

  		async setPay({ commit }) {

    		if (!this.payNewsFetched && !this.allNewsFetched) {

      	      await this.$axios.get('/links?pay=1')
               		.then(res => {
    					  commit("setPay", res.data);
    				   })
    			}	

          else if (this.allNewsFetched)  {
            newsbyFolder('initPay', newsbyFolder('payments'));
           }

    			else {
    				commit("setPayNoFetch");
    			}	
  		 
  		  },

  	   async setLend({ commit }) {

		    if (!this.lendNewsFetched && !this.allNewsFetched) {

  	       		await this.$axios.get('/links?folder=lending')
           			.then(res => {
					  commit("setLend", res.data);
		         })
			  }

       else if (this.allNewsFetched)  {
            newsbyFolder('lending');
       }

		   else {
				commit("setLendNoFetch");
		   }
  		 
  		},

  		async setMergers({ commit }) {

  		   if (!this.mergerNewsFetched) {
         	
    	       		await this.$axios.get('/links?id=M%26A')
             			.then(res => {
  					  commit("setMergers", res.data);
  		         })
  			 }

  		   else {
  				commit("setMergersNoFetch");
  		   }
  		 
  		 },

  		async setOpen({ commit }) {

  		   if (!this.openNewsFetched && !this.allNewsFetched ) {

  	       		await this.$axios.get('/links?folder=openbanking')
           			.then(res => {
  				  commit("setOpen", res.data);
  	         })
  		   }

        else if (this.allNewsFetched )  {
            newsbyFolder('openbanking');
        }

  		  else {
  				  commit("setOpenNoFetch");
		    }
  		 
  		 },

  		async setPer({ commit }) {

		   if (!this.perNewsFetched && !this.allNewsFetched) {

  	       await this.$axios.get('/links?folder=personalfinance')
           			.then(res => {
					  commit("setPer", res.data);
		        })
			  }

        else if (this.allNewsFetched)  {
            newsbyFolder('personalfinance');
        }

		   else {
				   commit("setPerNoFetch");
		   }
  		 
  		},

  		async setWealth({ commit }) {

  		    if (!this.wealthNewsFetched && !this.allNewsFetched){

    	       	await this.$axios.get('/links?folder=wealthtech')
             			.then(res => {
  					  commit("setWealth", res.data);
  		         })
  			  }

          else if (this.allNewsFetched)  {
            newsbyFolder('wealthtech');
          }

		      else {
				    commit("setWealthNoFetch");
		      }
  		 
  		 },

  		  async setRemit({ commit }) {

      	 if (!this.remitNewsFetched && !this.allNewsFetched) { 

        	   await this.$axios.get('/links?folder=remittance')
                 			.then(res => {
      					  commit("setRemit", res.data);
      		   })
      		}
          else if (this.allNewsFetched)  {
            newsbyFolder('remittance');
          
          }
      		else {
      		
          		commit("setRemitNoFetch");
      		}
        		 
        },

  		async setCapital({ commit }) {

  		   if (!this.capitalNewsFetched && !this.allNewsFetched) {	

    	       await this.$axios.get('/links?folder=CapitalMarkets')
             			.then(res => {
  					  commit("setCapital", res.data);
  		         })
  			 }

         else if (this.allNewsFetched)  {
            newsbyFolder('capitalmarkets');
         }

  		   else {
  				commit("setCapitalNoFetch");
  		   }
  		 
  		 },

  		async setCyber({ commit }) {

		   if (!this.cyberNewsFetched  && !this.allNewsFetched)
		   {	
  	     await this.$axios.get('/links?folder=cyberidentity')
           			.then(res => {
					  commit("setCyber", res.data);
		      })
			 }
       else if (this.allNewsFetched)  {
            newsbyFolder('cyberidentity');
       }

		   else {
				    commit("setCyberNoFetch");
		   }
  		 
  		 },

  		async setReal({ commit }) {

    		  if (!this.realNewsFetched && !this.allNewsFetched) {
      	       		await this.$axios.get('/links?folder=RealEstate')
               			.then(res => {
    					  commit("setReal", res.data);
    		         })
    			 }

          else if (this.allNewsFetched) {

            newsbyFolder('regtech');
          
          }

    		  else {
    				    commit("setRealNoFetch");
    		   }
  		 
  		 },

  		async setReg({ commit }) {

  		   if (!(this.regNewsFetched) && !(allNewsFeteched)) {

    	    	await this.$axios.get('/links?folder=regtech')
         			.then(res => {
  					commit("setReg", res.data);
  		         })
  			 }

         else if (this.allNewsFetched)  {
            newsbyFolder('regtech');
         }

  		   else {
  				  commit("setRegNoFetch");
  		   }	 
  		 },

  		async setHealth({ commit }) {

  		   if (!this.healthNewsFetched && !this.allNewsFetched) {
    	       await this.$axios.get('/links?folder=healthtech')
             			.then(res => {
  					  commit("setHealth", res.data);
  		         })
  			 }

        else if (this.allNewsFetched)  {
           newsbyFolder('healthtech');
        } 
        
		    else {
				    commit("setHealthNoFetch");
        }
  		},

  		async setWealth({ commit }) {

  		   if (!(this.wealthNewsFetched) && !(this.allNewsFetched)) {	

    	     await this.$axios.get('links?folder=wealthtech')
             			.then(res => {
  				 commit("setWealth", res.data);
  		     })
  			 }
         else if (this.allNewsFetched)  {
           newsbyFolder('wealthtech');
         } 
  		   else {
  				  commit("setWealthNoFetch");
  		   }
  		 },

  		async setGeneral({ commit }) {

	      if (!(this.generalNewsFetched) && !(this.allNewsFetched)) {

	   		await this.$axios.get('/links?folder=General')
         			.then(res => {
				  commit("setGeneral", res.data);
	         })
		    }

        else if (this.allNewsFetched)  {
           newsbyFolder('general');
        } 
        
		    else {
				  commit("setGeneralNoFetch");
		    }
  		},

  		async setNeo({ commit }) {

  		   if (!this.neoNewsFetched && !this.allNewsFetched) {

    	     await this.$axios.get('links?folder=neobank')
             			.then(res => {
  					  commit("setNeo", res.data);
  		     })
  			 }

        else if (this.allNewsFetched)  {
            newsbyFolder('neobank');
        }

        else {
  				commit("setNeoNoFetch");
  		   }
  		 
  		 },

  		 async setAI({ commit }) {

		    if (!this.aiNewsFetched && !this.allNewsFetched) {

  	     await this.$axios.get('/links?folder=AI')
           			.then(res => {
					  commit("setAI", res.data);
		         })
			    }
          
        else if (this.allNewsFetched)  {
                newsbyFolder('ai');
        }

		    else {
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
		    
		      if (!this.bankNewsFetched && !this.allNewsFetched) {	

    	    	 await this.$axios.get('/links?folder=openbanking')
             			.then(res => {
            			commit("setBank", res.data);
  			 	     })
		   	  } 

          else if (this.allNewsFetched)  {
              newsbyFolder('openbanking');
          }  

		   	  else {
				      commit("setBankNoFetch" );
		      }
  		    
  		  },

  		 async goPrevious({ commit }, pageVal ) {
		      commit("setPrevious");  		 
  		 },

      async goNext( {commit}, pagey) {

			  if (!this.allNewsFetched) {
			 
          var temp = pagey;
          temp++ ;
		      await this.$axios.get('/links?page=' + temp)
                .then( res => {
				       commit("setNextAndFetch", res.data)	  
		       })               
		    }	
       else {
           commit("setNextNoFetch");
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

     async setSearchTab( {commit}, topic) {
          commit("setSearchTab", topic);    
     },

     async submitSearch( {commit}, topic) {
          await this.$axios.get('/links?term=' + topic)
              .then( res => {
              commit("submitSearch", res.data)
        
         })
      },

     async setAllNews ( {commit}) {
          commit("setAllNews", allNews); 
      },

  	 async goLast( {commit}) {
          commit("setLast");
  	  },	

  	 async nuxtServerInit(vuexContext, context) {
		   
  		   if (!this.loadedNews) { 

              return this.$axios.$get("/links?page=1")
              .then(data => {
                vuexContext.commit("set", data);
              })
  		    }
		      else  {
			       vuexContext.commit("set");
		      }

	     },   
	      
	  }  

	export const getters = {
      
    loadedNews(state) {
      return state.news1 ;
	  },

	  payNewsFetched(state) {
		
	    if (state.payments.length) {
        return true;
      } 

      else {
        return false;
      }
	  
	  },

	  blockNewsFetched(state) {
		
      if (state.blockchain.length) {
        return true;
      } 
      
      else {
        return false;
      } 
	  
	   },
	  
	  pageArryLength(state) {
		    return state.pages.length;
	  },

	  bankPostsFetched(state) {
	    if (state.banking.length) {
        return true;
      } 
      else {
        return false;
      }
	  },

	  insurNewsFetched(state) {
		 
		  if (state.insurtech.length)
      {
        return true;
      } 

      else {
        return false;
      } 
	  
	  },

	  
	  lendNewsFetched(state)  {
	
		  if (state.lending.length)
      {
        return true;
      } 
      else {
        return false;
      }
	  },

	  
	  firstNewsFetched(state) {
	
     if (state.allNews.length) {
        return true;
      } 
    else {
        return false;
      }  
	  },


	  mergerNewsFetched (state) {

      if (state.mergers.length) {
        return true;
      } 
      else {
        return false;
      }  
	  },

	  aiNewsFetched (state) {
	
      if (state.ai.length)
      {
        return true;
      } 
      else {
        return false;
      }  
		
	  },

	  healthNewsFetched (state) {

	    if (state.healthtech.length) {
        return true;
      } 

      else {
        return false;
      }  
	  },


	  perNewsFetched (state) {

      if (state.personalfinance.length) {
        return true;
      } 

      else {
        return false;
      }    
	  },

	  capitalNewsFetched (state) {

      if (state.capitalmarkets.length) {
        return true;
      } 
      else {
        return false;
      }    
	  },

  	  realNewsFetched (state) {
      if (state.realestate.length) {
        return true;
      } 
      else {
          return false;
        }  
	   },

	   regNewsFetched (state) {
        if (state.regtech.length) {
          return true;
        } 
        else {
          return false;
        } 
	  },

	  cyberNewsFetched (state) {

	    if (state.cyberidentity.length)
      {
        return true;
      } 
      else {
        return false;
      }
	  },

	  generalNewsFetched (state) {

	    if (state.general.length) {
        return true;
      } 
      else {
        return false;
      }
	  },

 	  wealthNewsFetched (state) {

	    if (state.wealthtech.length) {
        return true;
      } 
      else {
        return false;
      }   
	  },

  	openNewsFetched (state) {

	    if (state.openbanking.length) {
        return true;
      } 
      else {
        return false;
      }
	  },

  	remitNewsFetched (state) {

      if (state.remittance.length) {
          return true;
      } 
      else {
         return false;
      }
	  },

	  neoNewsFetched (state) {

	    if (state.neobank.length) {
        return true;
      } 
      else {
        return false;
      }
	  },

	  valNewsFetched (state) {
	 
      if (state.valuation.length) {
        return true;
      } 
      else {
        return false;
      }

	  },

      
    firstpage(state) {
		  return state.news1 ;
	  },
	 
	  insurNews(state) {
	
		  return state.insurtech;
	  },
	 
	  lendNews(state) {
		   return state.lending;
	  },
	  
	  bankNews(state) {
	
		   return state.banking;
	  },	
	  
	 activeNewsPage(state) {
		 return state.numNewsPage;
	 },

  allNewsFetched(state) {
    if (!(state.allNews.length)) {
      return false;
    }
    else {
      return true;
    }
  
  },

  newsPage(state) {
    return state.numNewsPage;
  },

  totalAllNews(state) {

    if (this.allNewsFetched) {
      return state.allNews.length;
    }
    else {
      return 0;
    }
  },

   newsbyFolder: (state, folder ) => {

      return state.allNews.filter(function(elem, amount) {
          return (elem.folder.toLowerCase() == folder || elem.restype.toLowerCase() == folder)
      });

   },  
  nextArryVal(state) {

    var val = state.numNewsPage();
    val++;
    return val;
   }, 


	 prevArryVal(state) {

  	 	var val = state.numNewsPage();
  			val--;
  		if (val>= 0) {
  			return val;
  		}
  		else {
  			return 0;
  		}
	 },	 

	}