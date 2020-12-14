
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
  bootstrapped: [],
  valuation: [],
  growthequity: [],
  spinoffs: [],
  mergers: [],
  advisors: [],

  activeArtInfo: [],
  activeBuildInfo: [],
  activeDataInfo: [],

  Q320: [],
  Q420: [],
  Q121: [],
  Q221: [],
  Q321: [],
  Q421: [],

  zerotoone: [],
  onetofive: [],
  fivetoten: [],
  tentotwenty: [],
  twentytofifty: [],
  fiftytohundred: [],
  hundredplus: [],

  canada: [],
  south: [],
  southwest: [],
  southeast: [],
  midwest: [],
  mideast: [],
  newengland: [],
  midatlantic: [],
  carribean: [],
  latin: [],
  asia: [],
  europe: [],
  africa:[],
  pacific: [],
  socal: [],
  silicon: [],
  nyc: [],
  oceania: [],
  rocky: [],


  insur1: [],
  insur2: [],
  insur3: [],
  insur4: [],
  insur5: [],


  block1:  [],
  block2:  [],
  block3:  [],
  block4:  [],

  bank1: [],
  bank2: [],
  bank3: [],
  bank4: [],

  bnkArtPage: 1,
  insArtPage: 1,
  blkArtPage: 1,
  bnkBuildPage: 1,
  insBuildPage: 1,
  blkBuildPage: 1,

  activeDataTab: 'All',
  activeArtTab: 'All',
  activeBuildTab:  'All',

  activeView: 'Articles',
  
  numBuildPage: 1,
  numArtPage: 1,
  dataPage: 1,

  firstBuildLoad: true,
  firstArtLoad: true,
  firstDataLoad: true,

})

export const mutations = {


  setView (state, view) {

    state.activeView = view; 

  },
 

  setInsur(state, data) {

    state.insur1 = data; 

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
   


   setInsurNext(state, data) {

    if (state.activeView =='Articles') {

    var temp = state.insArtPage;
     temp++;
     state.insArtPage++ ;
     state.activeArtInfo = data;
     state.activeArtTab = 'Insurtech';
     state.firstArtLoad = false;
    }
    else if (state.activeView =='Builder') {

    var temp = state.insBuildPage;
     temp++;
     state.insBuildPage++ ;
     state.activeBuildInfo = data;
     state.activeBuildTab = 'Insurtech';
     state.firstBuildLoad = false;
    }
  
      if (temp == 2) {
         state.insur2 =  data;
       }
      else if (temp == 3) {
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

    if (state.activeView =='Articles') {

       var temp = state.blkArtPage;
        temp++;     
       state.blkArtPage++ ;
       state.activeArtInfo = data;
       state.activeArtTab = 'Blockchain';
       state.firstArtLoad = false;
    }

    else if (state.activeView =='Builder') {

       var temp = state.blkBuildPage;
        temp++;     
       state.blkBuildPage++ ;
       state.activeBuildInfo = data;
       state.activeBuildTab = 'Blockchain';
       state.firstBuildLoad = false;
    }

    if (temp == 2) {
       state.block2 =  data;
     }
    else if (temp == 3)  {
         state.block3 =  data;
     }
     else if (temp == 4) {
         state.block4 =  data;  
     }
     else if (temp ==5) {
         state.block5= data;  
     }
    
   },

   setBankNext(state, data) {
    if (state.activeView =='Articles')  {

       var temp = state.bnkArtPage;
       temp++ ;
       state.bnkArtPage++ ;
       state.activeArtInfo = data;
       state.firstArtLoad = false;
       state.activeArtTab = 'Banking';
    }
   else if (state.activeView =='Builder')  {

       var temp = state.bnkBuildPage;
       temp++ ;
       state.bnkBuildPage++ ;
       state.activeBuildInfo = data;
       state.firstBuildLoad = false;
       state.activeBuildTab = 'Banking';
    }

    if (temp == 2) {
         state.bank2 =data;
       }
    else if (temp == 3) {
           state.bank3 =  data;
      }
    else if (temp == 4) {
           state.bank4 =  data;  
      }
    else if (temp ==5) {
           state.bank5= data;  
      }

   },



   setInsurPrevious(state) {

    if (state.activeView =='Articles') {

       var temp = state.insArtPage;
       temp-- ;
       state.insArtPage-- ;
       state.activeArtTab = 'Insurtech';
       state.firstArtLoad = false;

      if (temp == 1) {

         state.activeArtInfo = state.insur1;
       }
      else if (temp == 2) {
           
           state.activeArtInfo = state.insur2;
      }
      else if (temp == 3) {

        state.activeArtInfo = state.insur3;
      }
      else if (temp ==4) {
           
           state.activeArtInfo = state.insur4; 
      }
   }

   else if (state.activeView =='Builder') {

     var temp = state.insBuildePage;
     temp-- ;
     state.insBuildPage-- ;
     state.activeBuildTab = 'Insurtech';
     state.firstBuildLoad = false;

     if (temp == 1) {

         state.activeBuildInfo = state.insur1;
       }
     else if (temp == 2) {
           
           state.activeBuildInfo = state.insur2;
      }
      else if (temp == 3) {

        state.activeBuildInfo = state.insur3;
      }
      else if (temp ==4) {
           
           state.activeBuildInfo = state.insur4; 
      }
   }

   },


   setBlockPrevious(state) {

    if (state.activeView =='Articles') { 

     var temp = state.blkArtPage;
     temp--;
     state.blkArtPage-- ;
     state.activeArtTab = 'Blockchain';
     state.firstArtLoad = false;

       if (temp == 1) {

        state.activeArtInfo = state.block1;
       }
       else if (temp == 2) {
        
        state.activeArtInfo = state.block2;
       }
       else if (temp == 3)  {
          
          state.activeArtInfo = state.block3;
       }
       else if (temp == 4) {
          
          state.activeArtInfo = state.block4;
       }
       else if (temp == 5) {
          
          state.activeArtInfo = state.block5;  
       }
       
    }

    else if (state.activeView =='Builder') { 

     var temp = state.blkBuildPage;
     temp--;
     state.blkBuildPage-- ;
     state.activeBuildTab = 'Blockchain';
     state.firstBuildLoad = false;

     if (temp == 1) {

      state.activeBuildInfo = state.block1;
     }
     else if (temp == 2) {
      
      state.activeBuildInfo = state.block2;
     }
     else if (temp == 3)  {
        
      state.activeBuildInfo = state.block3;
     }
     else if (temp == 4) {
        
        state.activeBuildInfo = state.block4;
     }
     else if (temp == 5) {
        
        state.activeBuildInfo = state.block5;  
     }
     
  }


},

   setBankPrevious(state) {
     if (state.activeView =='Articles') { 

      var temp = state.bnkArtPage;
      temp--;
       state.bnkArtPage-- ;
       state.firstArtLoad = false;
       state.activeArtTab = 'Banking';

        if (temp == 1) {
       
          state.activeArtInfo = state.bank1;
        }
        else if (temp == 2) {
    
          state.activeArtInfo = state.bank2;
        }

        else if (temp == 3) {

          state.activeArtInfo = state.bank3;
        }

    }
    else if (state.activeView =='Builder') { 

      var temp = state.bnkBuildPage;
      temp--;
       state.bnkBuildPage-- ;
       state.firstBuildLoad = false;
       state.activeBuildTab = 'Banking';

        if (temp == 1) {
         
         state.activeBuildInfo = state.bank1;
        }
        else if (temp == 2) {
      
          state.activeBuildInfo = state.bank2;
        }

        else if (temp == 3) {

          state.activeBuildInfo = state.bank3;
       }

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


 setGrowth(state, data) {

	state.growthequity = data; 

    if (state.activeView =='Builder') 
    {
   		state.activeBuildInfo = data;
   		state.activeBuildTab ='Growth Equity';	
    	state.firstBuildLoad = false;
    }
    else if (state.activeView =='Articles')
    {
    	state.activeArtInfo = data;
    	state.activeArtTab ='Growth Equity';	
    	state.firstArtLoad = false;
    }

  },


  setVal(state, data) {

    state.valuation = data; 

    if (state.activeView =='Builder') 
    {
   		state.activeBuildInfo = data;
   		state.activeBuildTab ='Valuation';	
    	state.firstBuildLoad = false;
    }
    else if (state.activeView =='Articles')
    {
    	state.activeArtInfo = data;
    	state.activeArtTab ='Valuation';	
    	state.firstArtLoad = false;
    }

  },


 setMergers(state, data) {

	state.mergers = data; 


	if (state.activeView =='Builder') 
	{
			state.activeBuildInfo = data;
			state.activeBuildTab ='M&A';	
		state.firstBuildLoad = false;
	}
	else if (state.activeView =='Articles')
	{
		state.activeArtInfo = data;
		state.activeArtTab ='M&A';	
		state.firstArtLoad = false;
	}

 },


 setSpin(state, data) {

	state.spinoffs = data; 

	if (state.activeView =='Builder') 
	{
			state.activeBuildInfo = data;
			state.activeBuildTab ='Spin-offs';	
		state.firstBuildLoad = false;
	}
	else if (state.activeView =='Articles')
	{
		state.activeArtInfo = data;
		state.activeArtTab ='Spin-offs';	
		state.firstArtLoad = false;
	}

 },


 setBoot(state, data) {

	state.bootstrapped = data; 

	if (state.activeView =='Builder') 
	{
			state.activeBuildInfo = data;
			state.activeBuildTab ='Bootstrapped';	
		state.firstBuildLoad = false;
	}
	else if (state.activeView =='Articles')
	{
		state.activeArtInfo = data;
		state.activeArtTab ='Bootstrapped';	
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


  setQ320(state, data) {

    state.Q320 = data; 

    if (state.activeView =='Data') 
    {
   		state.activeDataInfo = data;
   		state.activeDataTab ='Next Raise: Q320';	
    	state.firstDataLoad = false;
    }

  },

  setQ420(state, data) {

    state.Q420 = data; 

    if (state.activeView =='Data') 
    {
   		state.activeDataInfo = data;
   		state.activeDataTab ='Next Raise: Q420';	
    	state.firstDataLoad = false;
    }
    
  },

  setQ121(state, data) {

    state.Q121 = data; 
    if (state.activeView =='Data') 
    {
   		state.activeDataInfo = data;
   		state.activeDataTab ='Next Raise: Q121';	
    	state.firstDataLoad = false;
    }
  },

  setQ221(state, data) {

    state.Q221 = data; 
    if (state.activeView =='Data') 
    {
   		state.activeDataInfo = data;
   		state.activeDataTab ='Next Raise: Q221';	
    	state.firstDataLoad = false;
    }

  },

  setQ321(state, data) {

    state.Q321 = data; 

    if (state.activeView =='Data') 
    {
   		state.activeDataInfo = data;
   		state.activeDataTab ='Next Raise: Q321';	
    	state.firstDataLoad = false;
    }

  },

  setQ421(state, data) {

    state.Q421 = data; 


    if (state.activeView =='Data') 
    {
   		state.activeDataInfo = data;
   		state.activeDataTab ='Next Raise: Q421';	
    	state.firstDataLoad = false;
    }

  },

  set0to1(state, data) {

    state.zerotoone = data; 

    if (state.activeView =='Data') 
    {
   		state.activeDataInfo = data;
   		state.activeDataTab ='Next Raise: $0 to $1m';	
    	state.firstDataLoad = false;
    }

  },

  set1to5(state, data) {

    state.onetofive = data; 

    if (state.activeView =='Data') 
    {
   		state.activeDataInfo = data;
   		state.activeDataTab ='Next Raise: $1m to $5m';	
    	state.firstDataLoad = false;
    }

  },


  set5to10(state, data) {

    state.fivetoten = data; 

    if (state.activeView =='Data') 
    {
      state.activeDataInfo = data;
      state.activeDataTab ='Next Raise: $5m to $10m';  
      state.firstDataLoad = false;
    }

  },


  set10to20(state, data) {

    state.tentotwenty = data; 

    if (state.activeView =='Data') 
    {
   		state.activeDataInfo = data;
   		state.activeDataTab ='Next Raise: $10m to $20m';	
    	state.firstDataLoad = false;
    }

   },

  set20to50(state, data) {

    state.twentytofifty = data; 

    if (state.activeView =='Data') 
    {
   		state.activeDataInfo = data;
   		state.activeDataTab = 'Next Raise: $20m to $50m';	
    	state.firstDataLoad = false;
    }

  },

  set50to100(state, data) {

    state.fiftytohundred = data; 


    if (state.activeView =='Data') 
    {
   		state.activeDataInfo = data;
   		state.activeDataTab = 'Next Raise: $50m to $100m';	
    	state.firstDataLoad = false;
    }

   },

   set100plus(state, data) {

    state.hundredplus = data; 

    if (state.activeView =='Data') 
    {
   		state.activeDataInfo = data;
   		state.activeDataTab = 'Next Raise: $100m plus';	
    	state.firstDataLoad = false;
    }

   },


   setCanada(state, data) {

    state.canada = data; 

    if (state.activeView =='Data') 
    {
      state.activeDataInfo = data;
      state.activeDataTab ='Canada';  
      state.firstDataLoad = false;
    }

   },

   setLatin(state, data) {

    state.latin = data; 

    if (state.activeView =='Data') 
    {
      state.activeDataInfo = data;
      state.activeDataTab ='Latin America';  
      state.firstDataLoad = false;
    }

   },

   setNewEngland(state, data) {

    state.newengland = data; 

    if (state.activeView =='Data') 
    {
      state.activeDataInfo = data;
      state.activeDataTab ='New England';  
      state.firstDataLoad = false;
    }

   },


   setSouth(state, data) {

    state.south = data; 

    if (state.activeView =='Data') 
    {
      state.activeDataInfo = data;
      state.activeDataTab ='South';  
      state.firstDataLoad = false;
    }

   },

   setSoutheast(state, data) {

    state.southeast = data; 

    if (state.activeView =='Data') 
    {
      state.activeDataInfo = data;
      state.activeDataTab ='Southeast';  
      state.firstDataLoad = false;
    }

   },

   setSouthwest(state, data) {

    state.southwest = data; 

    if (state.activeView =='Data') 
    {
      state.activeDataInfo = data;
      state.activeDataTab ='Southwest';  
      state.firstDataLoad = false;
    }

   },




   setNYC(state, data) {

    state.nyc = data; 

    if (state.activeView =='Data') 
    {
      state.activeDataInfo = data;
      state.activeDataTab ='New York City';  
      state.firstDataLoad = false;
    }

   },

  setOceania(state, data) {

    state.oceania = data; 

    if (state.activeView =='Data') 
    {
      state.activeDataInfo = data;
      state.activeDataTab ='Oceania';  
      state.firstDataLoad = false;
    }

   },

   setCarribean(state, data) {

    state.carribean = data; 

    if (state.activeView =='Data') 
    {
      state.activeDataInfo = data;
      state.activeDataTab ='Carribean';  
      state.firstDataLoad = false;
    }

   },

  setMidatlantic(state, data) {

    state.midatlantic = data; 

    if (state.activeView =='Data') 
    {
      state.activeDataInfo = data;
      state.activeDataTab ='MidAtlantic';  
      state.firstDataLoad = false;
    }

  },


  setSilicon(state, data) {

    state.silicon = data; 

    if (state.activeView =='Data') 
    {
      state.activeDataInfo = data;
      state.activeDataTab ='Silicon Valley';  
      state.firstDataLoad = false;
    }

  },

  setSocal(state, data) {

    state.socal = data; 

    if (state.activeView =='Data') 
    {
      state.activeDataInfo = data;
      state.activeDataTab ='SoCal';  
      state.firstDataLoad = false;
    }

  },


  setPacific(state, data) {

    state.pacific = data; 

    if (state.activeView =='Data') 
    {
      state.activeDataInfo = data;
      state.activeDataTab ='Pacific Northwest';  
      state.firstDataLoad = false;
    }

  },

  setMidwest(state, data) {

    state.midwest = data; 

    if (state.activeView =='Data') 
    {
      state.activeDataInfo = data;
      state.activeDataTab ='MidWest';  
      state.firstDataLoad = false;
    }

  },


  setME(state, data) {

    state.mideast = data; 

    if (state.activeView =='Data') 
    {
      state.activeDataInfo = data;
      state.activeDataTab ='Middle East';  
      state.firstDataLoad = false;
    }

  },

  setEurope(state, data) {

    state.europe = data; 

    if (state.activeView =='Data') 
    {
      state.activeDataInfo = data;
      state.activeDataTab ='Europe';  
      state.firstDataLoad = false;
    }

  },

  setAfrica(state, data) {

    state.africa = data; 

    if (state.activeView =='Data') 
    {
      state.activeDataInfo = data;
      state.activeDataTab ='Africa';  
      state.firstDataLoad = false;
    }

  },

  setAsia(state, data) {

    state.asia = data; 

    if (state.activeView =='Data') 
    {
      state.activeDataInfo = data;
      state.activeDataTab ='Asia';  
      state.firstDataLoad = false;
    }

  },

  setRocky(state, data) {

    state.rocky = data; 

    if (state.activeView =='Data') 
    {
      state.activeDataInfo = data;
      state.activeDataTab ='Rocky Mountains';  
      state.firstDataLoad = false;
    }

  },

  setNewEngland(state, data) {

    state.newengland = data; 

    if (state.activeView =='Data') 
    {
      state.activeDataInfo = data;
      state.activeDataTab ='New England';  
      state.firstDataLoad = false;
    }

  },



  setBlock(state, data){

  	state.block1 = data;

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

   setAdvisors(state, data){

  	 state.advisors = data;

  	 if (state.activeView =='Builder')
     {
        state.activeBuildInfo = data;
  	    state.activeBuildTab = 'Advisors';	
  	    state.firstBuildLoad =false;
  	 }

  	 else if (state.activeView =='Articles')
     {
    	state.activeArtInfo = data;
    	state.activeArtTab ='Advisors';	
    	state.firstArtLoad = false;
     }

   },


   setBank(state, data) {

   	 state.bank1 = data;

   	 if (state.activeView =='Builder') {

        state.activeBuildInfo = data;
  	    state.activeBuildTab = 'Banking';	
  	    state.firstBuildLoad =false;
  	 }

  	 else if (state.activeView =='Articles') {

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
     		if (state.numArtPage >1) {

	 	      state.numArtPage--;
	      }
			 
        else {

			   state.numArtPage = 1;
			  
        }
   	   		state.activeArtInfo = state.pages[state.numArtPage];
   	   		state.activeArtTab = 'Page';
  	   		state.firstArtLoad =false;
  	   		break;

      case "Data":

        if (state.dataPage >1) {

          state.dataPage--;
        }
        
        else {

         state.dataPage = 1;
        
        }
          state.activeDataInfo = state.pages[state.dataPage];
          state.activeDataTab = 'Page';
          state.firstDataLoad =false;
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

        case "Data":
          state.dataPage++ ;
          state.pages[state.pages.length]=data;
          state.activeDataInfo = data;
          state.activeDataTab = 'Page';
          state.firstDataLoad =false;  
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

        case "Data":
         state.dataPage++ ; 
         state.activeDataInfo = state.pages[state.dataPage];
         state.activeDataTab = 'Page';
         state.firstDataLoad =false;
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

        case "Data":
          state.activDataInfo = state.pages[0];
          state.activeDataTab = 'Page';
          state.firstDataLoad = false; 
          state.dataPage = 1;  
          break;

	   }

   },

   submitSearch(state, data) {

   	   switch(state.activeView) {

   	   	  case "Builder":
   	   		state.activeBuildInfo = data;
  	   		state.firstBuildLoad = false;  		
  	   		break;

  	   	   case "Articles":
  	   	    state.activeArtInfo = data;
  	   		state.firstArtLoad = false;  		
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



	 setValNoFetch(state){

		switch(state.activeView) {

   	   case "Builder":
		     state.activeBuildInfo = state.valuation;
		     state.activeBuildTab = 'Valuation';	
		     state.firstBuildLoad = false;
		     break;	

		   case "Articles":
		     state.activeArtInfo = state.valuation;
		     state.activeArtTab = 'Valuation';	
		     state.firstArtLoad = false;
		     break;	

		  }
	 },


	 setAdvisorsNoFetch(state){

		switch(state.activeView) {

   	   case "Builder":
		     state.activeBuildInfo = state.advisors;
		     state.activeBuildTab = 'Advisors';	
		     state.firstBuildLoad = false;
		     break;	

		   case "Articles":
		     state.activeArtInfo = state.advisors;
		     state.activeArtTab = 'Advisors';	
		     state.firstArtLoad = false;
		     break;	

		  }
	 },


	 setMergersNoFetch(state){

		switch(state.activeView) {

   	   case "Builder":
		     state.activeBuildInfo = state.mergers;
		     state.activeBuildTab = 'M&A';	
		     state.firstBuildLoad = false;
		     break;	

		   case "Articles":
		     state.activeArtInfo = state.mergers;
		     state.activeArtTab = 'M&A';	
		     state.firstArtLoad = false;
		     break;	

		  }
	 },


	 setBootNoFetch(state){

		switch(state.activeView) {

   	   	  case "Builder":
		     state.activeBuildInfo = state.bootstrapped;
		     state.activeBuildTab = 'Bootstrapped';	
		     state.firstBuildLoad = false;
		     break;	

		   case "Articles":
		     state.activeArtInfo = state.bootstrapped;
		     state.activeArtTab = 'Bootstrapped';	
		     state.firstArtLoad = false;
		     break;	

		  }
	 },


	 setSpinNoFetch(state){

		switch(state.activeView) {

   	   	  case "Builder":
		     state.activeBuildInfo = state.spinoffs;
		     state.activeBuildTab = 'Spin-offs';	
		     state.firstBuildLoad = false;
		     break;	

		   case "Articles":
		     state.activeArtInfo = state.spinoffs;
		     state.activeArtTab = 'Spin-offs';	
		     state.firstArtLoad = false;
		     break;	

		  }
	 },


	 setGrowthNoFetch(state){

		switch(state.activeView) {

   	   	  case "Builder":
		     state.activeBuildInfo = state.growthequity;
		     state.activeBuildTab = 'Growth Equity';	
		     state.firstBuildLoad = false;
		     break;	

		  case "Articles":
		     state.activeArtInfo = state.growthequity;
		     state.activeArtTab = 'Growth Equity';	
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


	 setQ320NoFetch(state){

		switch(state.activeView) {

   	   	  case "Data":
		     state.activeDataInfo = state.Q320;
		     state.activeDataTab = 'Next Raise: Q320';	
		     state.firstDataLoad = false;
		     break;		
		  }
	 },


	 setQ420NoFetch(state){

		switch(state.activeView) {

   	   	  case "Data":
		     state.activeDataInfo = state.Q420;
		     state.activeDataTab = 'Next Raise: Q420';	
		     state.firstDataLoad = false;
		     break;	

		  }
	 },


	 setQ121NoFetch(state){

		switch(state.activeView) {

   	   	  case "Data":
		     state.activeDataInfo = state.Q121;
		     state.activeDataTab = 'Next Raise: Q121';	
		     state.firstDataLoad = false;
		     break;	
		  }
	 },


	 setQ221NoFetch(state){

		switch(state.activeView) {

   	   	  case "Data":
		     state.activeDataInfo = state.Q221;
		     state.activeDataTab = 'Next Raise: Q221';	
		     state.DataLoad = false;
		     break;	

		  }
	 },


	 setQ321NoFetch(state){

		switch(state.activeView) {

   	   	  case "Data":
		     state.activeDataInfo = state.Q321;
		     state.activeDataTab = 'Next Raise: Q321';	
		     state.firstDataLoad = false;
		     break;	


		  }
	 },


	 setQ421NoFetch(state){

		switch(state.activeView) {

   	   	  case "Data":
		     state.activeDataInfo = state.Q421;
		     state.activeDataTab = 'Q421';	
		     state.firstLoad = false;
		     break;	
		  }
	 },


	 set0to1NoFetch(state){

		switch(state.activeView) {

   	   	  case "Data":
		     state.activeDataInfo = state.zerotoone;
		     state.activeDataTab = 'Next Raise: $0m to $1m';	
		     state.firstLoad = false;
		     break;	
		  }
	 },

	 set1to5NoFetch(state){

		switch(state.activeView) {

   	   	  case "Data":
		     state.activeDataInfo = state.onetofive;
		     state.activeDataTab = 'Next Raise: $1m to $5m';	
		     state.firstDataLoad = false;
		     break;	
		  }
	 },

  set5to10NoFetch(state){

    switch(state.activeView) {

          case "Data":
         state.activeDataInfo = state.fivetoten;
         state.activeDataTab = 'Next Raise: $5m to $10m';  
         state.firstDataLoad = false;
         break; 
      }
   },

	 set10to20NoFetch(state){

		switch(state.activeView) {

   	   	  case "Data":
		     state.activeDataInfo = state.tentotwenty;
		     state.activeDataTab = 'Next Raise: $10m to $20m';	
		     state.firstDataLoad = false;
		     break;	
		  }
	 },

	 set20to50NoFetch(state){

		switch(state.activeView) {

   	   	  case "Data":
		     state.activeDataInfo = state.twentytofifty;
		     state.activeDataTab = 'Next Raise: $20m to $50m';	
		     state.firstDataLoad = false;
		     break;	
		  }
	 },

	 set50to100NoFetch(state){

		switch(state.activeView) {

   	   	  case "Data":
		     state.activeDataInfo = state.fiftytohundred;
		     state.activeDataTab = 'Next Raise $50m to $100m';	
		     state.firstDataLoad = false;
		     break;	
		  }
	 },

	 set100plusNoFetch(state){

		switch(state.activeView) {

   	   	  case "Data":
		     state.activeDataInfo = state.hundredplus;
		     state.activeDataTab = 'Next Raise: $100m plus';	
		     state.firstDataLoad = false;
		     break;	
		  }
	 },


    setCanadaNoFetch(state){

    switch(state.activeView) {

          case "Data":
         state.activeDataInfo = state.canada;
         state.activeDataTab = 'Canada';  
         state.firstDataLoad = false;
         break; 
      }
   },

    setLatinNoFetch(state){

    switch(state.activeView) {

          case "Data":
         state.activeDataInfo = state.latin;
         state.activeDataTab = 'Latin AMerica';  
         state.firstDataLoad = false;
         break; 
      }
   },

  setCarribeanNoFetch(state){

    switch(state.activeView) {

          case "Data":
         state.activeDataInfo = state.carribean;
         state.activeDataTab = 'Carribean';  
         state.firstDataLoad = false;
         break; 
      }
   },

  setEuropeNoFetch(state){

    switch(state.activeView) {

          case "Data":
         state.activeDataInfo = state.europe;
         state.activeDataTab = 'Europe';  
         state.firstDataLoad = false;
         break; 
      }
   },

   setAsiaNoFetch(state){

    switch(state.activeView) {

          case "Data":
         state.activeDataInfo = state.asia;
         state.activeDataTab = 'Asia';  
         state.firstDataLoad = false;
         break; 
      }
   },

   setOceaniaNoFetch(state){

    switch(state.activeView) {

          case "Data":
         state.activeDataInfo = state.oceania;
         state.activeDataTab = 'Oceania';  
         state.firstDataLoad = false;
         break; 
      }
   },

  setMidwestNoFetch(state){

    switch(state.activeView) {

          case "Data":
         state.activeDataInfo = state.midwest;
         state.activeDataTab = 'MidWest';  
         state.firstDataLoad = false;
         break; 
      }
   },

  setNYCNoFetch(state){

    switch(state.activeView) {

          case "Data":
         state.activeDataInfo = state.nyc;
         state.activeDataTab = 'New York City';  
         state.firstDataLoad = false;
         break; 
      }
   },

  setMidatlanticNoFetch(state){

    switch(state.activeView) {

          case "Data":
         state.activeDataInfo = state.midatlantic;
         state.activeDataTab = 'MidAtlantic';  
         state.firstDataLoad = false;
         break; 
      }
   },

  setNewenglandNoFetch(state){

    switch(state.activeView) {

      case "Data":
         state.activeDataInfo = state.newengland;
         state.activeDataTab = 'New England';  
         state.firstDataLoad = false;
         break; 
      }
   },

  setRockyNoFetch(state){

    switch(state.activeView) {

       case "Data":
         state.activeDataInfo = state.rocky;
         state.activeDataTab = 'Rocky Mountains';  
         state.firstDataLoad = false;
         break; 
      }
   },

  setAfricaNoFetch(state){

    switch(state.activeView) {

      case "Data":
         state.activeDataInfo = state.africa;
         state.activeDataTab = 'Africa';  
         state.firstDataLoad = false;
         break; 
      }
   },

  setMENoFetch(state){

    switch(state.activeView) {

      case "Data":
         state.activeDataInfo = state.mideast;
         state.activeDataTab = 'Middle East';  
         state.firstDataLoad = false;
         break; 
      }
   },

   setSouthNoFetch(state){

    switch(state.activeView) {

      case "Data":
         state.activeDataInfo = state.south;
         state.activeDataTab = 'South';  
         state.firstDataLoad = false;
         break; 
      }
   },

  setSouthwestNoFetch(state){

    switch(state.activeView) {

      case "Data":
         state.activeDataInfo = state.southwest;
         state.activeDataTab = 'Southwest';  
         state.firstDataLoad = false;
         break; 
      }
   },


  setSoutheastNoFetch(state){

    switch(state.activeView) {

      case "Data":
         state.activeDataInfo = state.southeast;
         state.activeDataTab = 'southeast';  
         state.firstDataLoad = false;
         break; 
      }
   },


  setSiliconNoFetch(state){

    switch(state.activeView) {

       case "Data":
         state.activeDataInfo = state.silicon;
         state.activeDataTab = 'Silicon Valley';  
         state.firstDataLoad = false;
         break; 
      }
   },

  setPacificNoFetch(state){

    switch(state.activeView) {

          case "Data":
         state.activeDataInfo = state.pacific;
         state.activeDataTab = 'Pacific Northwest';  
         state.firstDataLoad = false;
         break; 
      }
   },

  setSocalNoFetch(state){

    switch(state.activeView) {

          case "Data":
         state.activeDataInfo = state.socal;
         state.activeDataTab = 'SoCal';  
         state.firstDataLoad = false;
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

    		await this.$axios.get('/posts?ins=1')
               		.then(res => {
              			commit("setInsur", res.data);
             		})
    	},
    			
  

  		async setBlock({ commit }) {

  		await this.$axios.get('/posts?blk=1')
             		.then(res => {
            			commit("setBlock", res.data);
           		})
  		},
  	

  	async setPay({ commit }) {

  			if (!this.payPostsFetched) {

    	       await this.$axios.get('/posts?grouping=Payments')
             		.then(res => {
  					  commit("setPay", res.data);
  				})
  			}	
  			else {

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


  	async setVal({ commit }) {

			   if (!this.valPostsFetched)
			   {	
	  	       		await this.$axios.get('/posts?tag=Valuation')
	           			.then(res => {
						  commit("setVal", res.data);
			         })
				}
			   else
			   {
					commit("setValNoFetch");
			   }
  		 
  	},

  		
    async setSpin({ commit }) {

			   if (!this.spinPostsFetched)
			   {	
	  	       		await this.$axios.get('posts?tag=Spin-Out')
	           			.then(res => {
						  commit("setSpin", res.data);
			         })
				 }
			   else
			   {
					commit("setSpinNoFetch");
			   }
  		 
  	},


  	async setBoot({ commit }) {

			  if (!this.bootPostsFetched) {	

	  	    await this.$axios.get('posts?tag=Bootstrapped')
	         .then(res => {
						  commit("setBoot", res.data);
			     })
				 }
			   else {

					commit("setBootNoFetch");
			   }
  		 
  	},


  	async setMergers({ commit }) {

			   if (!this.mergerPostsFetched)
			   {	
	  	       		await this.$axios.get('posts?tag=M%26A')
	           			.then(res => {
						  commit("setMergers", res.data);
			         })
				}
			   else
			   {
					commit("setMergersnoFetch");
			   }
  		 
  	 },


  	 async setGrowth({ commit }) {

  			   if (!this.growthPostsFetched)
  			   {	
  	  	       		await this.$axios.get('/posts?next_round=Growth+Capital')
  	           			.then(res => {
  						  commit("setGrowth", res.data);
  			         })
  				 }
  			   else
  			   {
  					commit("setGrowthNoFetch");
  			   }
  		 
  		},

  		async setAdvisors({ commit }) {

  			   if (!this.advisorPostsFetched)
  			   {	
  	  	       		await this.$axios.get('posts?advisors=Advisory')
  	           			.then(res => {
  						  commit("setAdvisors", res.data);
  			         })
  				 }
  			   else
  			   {
  					commit("setAdvisorsNoFetch");
  			   }
  		 
  		},


  		 async setBank({ commit }) {
  		    
  	   	await this.$axios.get('/posts?bnk=1')
             			.then(res => {
            			commit("setBank", res.data);
  			 	}) 
  		 
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


  		  async setQ121({ commit }) {
		    
  		    if (!this.Q121PostsFetched)
  		   	{	
    	    		await this.$axios.get('/posts?quarter=Q121')
             			.then(res => {
            			commit("setQ121", res.data);
  			 	})
  		   	} 
  		   	else {
  				
  				commit("setQ121NoFetch" );
  		    }
  		 
  		  },


  		  async setQ221({ commit }) {
		    
  		    if (!this.Q221PostsFetched)
  		   	{	
    	    		await this.$axios.get('/posts?quarter=Q221')
             			.then(res => {
            			commit("setQ221", res.data);
  			 	})
  		   	} 
  		   	else {
  				
  				commit("setQ221NoFetch" );
  		    }
  		 
  		  },


  		  async setQ321({ commit }) {
		    
  		    if (!this.Q321PostsFetched)
  		   	{	
    	    		await this.$axios.get('/posts?quarter=Q321')
             			.then(res => {
            			commit("setQ321", res.data);
  			 	})
  		   	} 
  		   	else {
  				
  				commit("setQ321NoFetch" );
  		    }
  		 
  		  },


  		  async setQ421({ commit }) {
		    
  		    if (!this.Q421PostsFetched)
  		   	{	
    	    		await this.$axios.get('/posts?quarter=Q421')
             			.then(res => {
            			commit("setQ421", res.data);
  			 	})
  		   	} 
  		   	else {
  				
  				commit("setQ421NoFetch" );
  		    }
  		 
  		  },


  		  async setQ420({ commit }) {
		    
  		    if (!this.Q420PostsFetched)
  		   	{	
    	    		await this.$axios.get('/posts?quarter=Q420')
             			.then(res => {
            			commit("setQ420", res.data);
  			 	})
  		   	} 
  		   	else {
  				
  				commit("setQ420NoFetch" );
  		    }
  		 
  		  },


  		  async setQ320({ commit }) {
		    
  		    if (!this.Q320PostsFetched)
  		   	{	
    	    		await this.$axios.get('/posts?quarter=Q320')
             			.then(res => {
            			commit("setQ320", res.data);
  			 	})
  		   	} 
  		   	else {
  				
  				commit("setQ320NoFetch" );
  		    }
  		 
  		  },



  		  async setQ320({ commit }) {
		    
  		    if (!this.Q320PostsFetched)
  		   	{	
    	    		await this.$axios.get('/posts?quarter=Q320')
             			.then(res => {
            			commit("setQ320", res.data);
  			 	})
  		   	} 
  		   	else {
  				
  				commit("setQ320NoFetch" );
  		    }
  		 
  		  },


  		  async set0to1({ commit }) {
		    
  		    if (!this.zerotoonePostsFetched)
  		   	{	
    	    		await this.$axios.get('/posts?amount=%240+to+%241+million')
             			.then(res => {
            			commit("set0to1", res.data);
  			 	})
  		   	} 
  		   	else {
  				
  				commit("set0to1NoFetch" );
  		    }
  		 
  		  },


  		  async set1to5({ commit }) {
		    
  		    if (!this.onetofivePostsFetched)
  		   	{	
    	    		await this.$axios.get('/posts?amount=%241+million+to+%245+million')
             			.then(res => {
            			commit("set1to5", res.data);
  			 	})
  		   	} 
  		   	else {
  				
  				commit("set1to5NoFetch" );
  		    }
    		 
  		  },

        async set5to10({ commit }) {
        
          if (!this.fivetotenPostsFetched)
          { 
              await this.$axios.get('/posts?amount=%245+million+to+%2410+million')
                  .then(res => {
                  commit("set5to10", res.data);
          })
          } 
          else {
          
          commit("set5to10NoFetch" );
          }
         
        },


  		  async set10to20({ commit }) {
		    
  		    if (!this.tentotwentyPostsFetched)
  		   	{	
    	    		await this.$axios.get('/posts?amount=%2410+million+to+%2420+million')
             			.then(res => {
            			commit("set10to20", res.data);
  			 	})
  		   	} 
  		   	else {
  				
  				commit("set10to20NoFetch" );
  		    }
    		 
  		  },


  		  async set20to50({ commit }) {
		    
  		    if (!this.twentytofiftyPostsFetched)
  		   	{	
    	    		await this.$axios.get('/posts?amount=%2420+million+to+%2450+million')
             			.then(res => {
            			commit("set20to50", res.data);
  			 	})
  		   	} 
  		   	else {
  				
  				commit("set20to50NoFetch" );
  		    }
    		 
  		  },

  		  async set50to100({ commit }) {
		    
  		    if (!this.fiftytohundedPostsFetched)
  		   	{	
    	    		await this.$axios.get('/posts?amount=%2450+million+to+%24100+million')
             			.then(res => {
            			commit("set50to100", res.data);
  			 	})
  		   	} 
  		   	else {
  				
  				commit("set50to100NoFetch" );
  		    }
  		 
  		  },


  		  async set100plus({ commit }) {
		    
  		    if (!this.hundedplusPostsFetched)
  		   	{	
    	    		await this.$axios.get('/posts?amount=%24100+million+plus')
             			.then(res => {
            			commit("set100plus", res.data);
  			 	})
  		   	} 
  		   	else {
  				
  				commit("set100plusNoFetch" );
  		    }
    		 
  		  },

        async setLatin({ commit }) {
        
          if (!this.latinPostsFetched)
          { 
              await this.$axios.get('/posts?region=LatinAmerica')
                  .then(res => {
                  commit("setLatin", res.data);
          })
          } 
          else {
          
          commit("setLatinNoFetch" );
          }
       
        },


        async setCanada({ commit }) {
        
          if (!this.canadaPostsFetched)
          { 
              await this.$axios.get('/posts?region=Canada')
                  .then(res => {
                  commit("setCanada", res.data);
          })
          } 
          else {
          
          commit("setCanadaNoFetch" );
          }
       
        },


        async setSouth({ commit }) {
        
          if (!this.southPostsFetched)
          { 
              await this.$axios.get('/posts?region=South')
                  .then(res => {
                  commit("setSouth", res.data);
          })
          } 
          else {
          
          commit("setSouthNoFetch" );
          }
       
        },

        async setNewEngland({ commit }) {
        
          if (!this.newenglandPostsFetched)
          { 
              await this.$axios.get('/posts?region=NewEngland')
                  .then(res => {
                  commit("setNewEngland", res.data);
          })
          } 
          else {
          
          commit("setNewEnglandNoFetch" );
          }
         
        },

        async setSoutheast({ commit }) {
        
          if (!this.southeastPostsFetched)
          { 
              await this.$axios.get('/posts?region=SouthEast')
                  .then(res => {
                  commit("setSoutheast", res.data);
          })
          } 
          else {
          
          commit("setSoutheastNoFetch" );
          }
       
        },

        async setSocal({ commit }) {
        
          if (!this.socalPostsFetched)
          { 
              await this.$axios.get('/posts?region=SoCal')
                  .then(res => {
                  commit("setSocal", res.data);
          })
          } 
          else {
          
          commit("setSocalNoFetch" );
          }
       
        },

        async setSilicon({ commit }) {
        
          if (!this.siliconPostsFetched)
          { 
              await this.$axios.get('/posts?region=SiliconValley')
                  .then(res => {
                  commit("setSilicon", res.data);
          })
          } 
          else {
          
          commit("setSiliconNoFetch" );
          }
       
        },

        async setMidwest({ commit }) {
        
          if (!this.midwestPostsFetched)
          { 
              await this.$axios.get('/posts?region=MidWest')
                  .then(res => {
                  commit("setMidwest", res.data);
          })
          } 
          else {
          
          commit("setMidwestNoFetch" );
          }
       
        },

        async setMidatlantic({ commit }) {
        
          if (!this.midatlanticPostsFetched)
          { 
              await this.$axios.get('/posts?region=MidAtlantic')
                  .then(res => {
                  commit("setMidatlantic", res.data);
          })
          } 
          else {
          
          commit("setMidatlanticNoFetch" );
          }
       
        },

        async setRocky({ commit }) {
        
          if (!this.rockyPostsFetched)
          { 
              await this.$axios.get('/posts?region=RockyMountains')
                  .then(res => {
                  commit("setRocky", res.data);
          })
          } 
          else {
          
          commit("setRockyNoFetch" );
          }
       
        },

        async setPacific({ commit }) {
        
          if (!this.pacificPostsFetched)
          { 
              await this.$axios.get('/posts?region=PacNorthWest')
                  .then(res => {
                  commit("setPacific", res.data);
          })
          } 
          else {
          
          commit("setPacificNoFetch" );
        }
        },

        async setSouthwest({ commit }) {
        
          if (!this.southwestPostsFetched)
          { 
              await this.$axios.get('/posts?region=Southwest')
                  .then(res => {
                  commit("setSouthwest", res.data);
          })
          }
          else {
          
          commit("setSouthwestNoFetch" );
          }
       
        },


        async setNYC({ commit }) {
        
          if (!this.nycPostsFetched)
          { 
              await this.$axios.get('/posts?region=SiliconAlleyNYC')
                  .then(res => {
                  commit("setNYC", res.data);
          })
          } 
          else {
          
          commit("setNYCNoFetch" );
          }
       
        },

        async setME({ commit }) {
        
          if (!this.mePostsFetched)
          { 
              await this.$axios.get('/posts?region=MiddleEast')
                  .then(res => {
                  commit("setME", res.data);
          })
          } 
          else {
          
          commit("setMENoFetch" );
          }
       
        },

  		  
        async setOceania({ commit }) {
        
          if (!this.oceaniaPostsFetched)
          { 
              await this.$axios.get('/posts?region=Oceania')
                  .then(res => {
                  commit("setOceania", res.data);
          })
          } 
          else {
          
          commit("setOceaniaNoFetch" );
          }
       
        },


        async setCarribean({ commit }) {
        
        if (!this.carribeanPostsFetched)
        { 
            await this.$axios.get('/posts?region=Caribbean')
                .then(res => {
                commit("setCarribean", res.data);
        })
        } 
        else {
        
        commit("setCarribeanNoFetch" );
        }
       
        },


        async setAsia({ commit }) {
        
          if (!this.asiaPostsFetched)
          { 
              await this.$axios.get('/posts?region=Asia')
                  .then(res => {
                  commit("setAsia", res.data);
          })
          } 
          else {
          
          commit("setAsiaNoFetch" );
          }
         
        },


        async setEurope({ commit }) {
        
          if (!this.europePostsFetched)
          { 
              await this.$axios.get('/posts?region=Europe')
                  .then(res => {
                  commit("setEurope", res.data);
          })
          } 
          else {
          
          commit("setEuropeNoFetch" );
          }
         
        },


        async setAfrica({ commit }) {
        
          if (!this.africaPostsFetched)
          { 
              await this.$axios.get('/posts?region=Africa')
                  .then(res => {
                  commit("setAfrica", res.data);
          })
          } 
          else {
          
          commit("setAfricaNoFetch" );
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


       async setBlockPrevious({ commit }, page ) {
  
       commit("setBlockPrevious");
       
       },

       async setBlockNext( {commit}, page) {

       var temp = page;
       temp++ ;

        await this.$axios.get('/posts?blk=' + temp)
                .then( res => {
          commit("setBlockNext", res.data)    
         })               
     },  
       

       async setBankPrevious({ commit }, page ) {
  
       commit("setBankPrevious");
       
       },

       async setBankNext( {commit}, page) {

        var temp = page;
        temp++ ;
    
        await this.$axios.get('/posts?bnk=' + temp)
                .then( res => {
          commit("setBankNext", res.data)    
         })               
       
        },

       async setInsurPrevious({ commit }, page ) {
  
       commit("setInsurPrevious");
       
       },

       async setInsurNext( {commit}, page) {

      var temp = page;
      temp++ ;
        
      await this.$axios.get('/posts?ins=' + temp)
                .then( res => {
          commit("setInsurNext", res.data)    
         })               
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

	  firstPostsFetched() {
	
		return state.posts.pages[0].length > 0;
	  },

	  wealthPostsFetched() {
	
		return state.posts.wealthtech.length > 0;
	  },

	  advisorPostsFetched() {

	    return state.posts.advisors.length > 0;
	  },

	  capitalPostsFetched() {
	
		return state.posts.capitalmarkets.length > 0;
	  },

	  realPostsFetched() {
	
		return state.posts.realestate.length > 0;
	  },

	  valPostsFetched() {
	
		return state.posts.valuation.length > 0;
	  },

	  mergerPostsFetched() {
	
		return state.posts.mergers.length > 0;
	  },
      

      spinPostsFetched() {
	
		return state.posts.spinoffs.length > 0;
	  },


	  bootPostsFetched() {
	
		return state.posts.bootstrapped.length > 0;
	  },


	  growthPostsFetched() {
	
		return state.posts.growthequity.length > 0;
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

	 Q320PostsFetched() {

	 	return state.posts.Q320.length > 0;
	 },

	 Q420PostsFetched() {

	 	return state.posts.Q420.length > 0;
	 },
	 
	  Q121PostsFetched() {

	 	return state.posts.Q121.length > 0;
	 },
	 
	  Q221PostsFetched() {

	 	return state.posts.Q221.length > 0;
	 },
	 
	  Q321PostsFetched() {

	 	return state.posts.Q321.length > 0;
	 },
	 
	 Q421PostsFetched() {

	 	return state.posts.Q421.length > 0;
	 },

	 zerotoonePostsFetched() {

	 	return state.posts.zerotoone.length > 0;

	 },

	 onetofivePostsFetched() {

	 	return state.posts.onetofive.length > 0;

	 },

  fivetotenPostsFetched() {

    return state.posts.fivetoten.length > 0;

   },

	 tentotwentyPostsFetched() {

	 	return state.posts.tentotwenty.length > 0;

	 },

	 twentytofiftyPostsFetched() {

	 	return state.posts.twentytofifty.length > 0;

	 },

	 fiftytohundredPostsFetched() {

	 	return state.posts.fiftytohundred.length > 0;

	 },

	 hundredplusPostsFetched() {

	 	return state.posts.hundredplus.length > 0;

	 },


   latinPostsFetched() {

    return state.posts.latin.length > 0;
   
   },

   europePostsFetched() {

    return state.posts.europe.length > 0;
   
   },

   canadaPostsFetched() {

     return state.posts.canada.length > 0;

   },

  nycPostsFetched() {

     return state.posts.nyc.length > 0;

   },

   southPostsFetched () {

    return state.posts.south.length > 0;

   },

   southwestPostsFetched () {

    return state.posts.southwest.length > 0;

   },

   southeastPostsFetched () {

     return state.posts.southeast.length > 0;

   },

   midwestPostsFetched () {

    return state.posts.MidWest.length > 0;


   },

   carribeanPostsFetched () {

    return state.posts.carribean.length > 0;

   },

   africaPostsFetched () {

    return state.posts.africa.length > 0;

   },

   midwestPostsFetched () {

    return state.posts.midwest.length > 0;

   },

   asiaPostsFetched () {

    return state.posts.asia.length > 0;

   },
   oceaniaPostsFetched () {

     return state.posts.oceania.length > 0;

   },
   mePostsFetched () {

    return state.posts.mideast.length > 0;

   },

   rockyPostsFetched () {

    return state.posts.rocky.length > 0;

   },

   pacificPostsFetched() {

    return state.posts.pacific.length > 0;

   },

  socalPostsFetched() {

    return state.posts.socal.length > 0;

   },

  siliconPostsFetched() {

    return state.posts.silicon.length > 0;

   },

  newenglandPostsFetched() {

    return state.posts.newengland.length > 0;

   },

  midatlanticPostsFetched() {

    return state.posts.midatlantic.length > 0;

   },
 
	
	 prevArryVal() {

	 	if (this.activeView == "Articles") {
	 		var val = this.activeArtPage();
	 	}
	 	else if (this.activeView == "Builder") {

	 		var val = this.activeBuildPage();
	 	}
    else{

      var val = this.dataPage();

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