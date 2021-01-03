import allPosts from '~/static/data.json';
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
  newsletters: [],
  activeArtInfo: [],
  activeBuildInfo: [],
  activeDataInfo: [],
  activeLetterInfo: [],

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
  allPosts: [],

})

export const mutations = {


  setView (state, view) {

    state.activeView = view; 

  },
 
  initBlock(state, data) {

    var blockLength = data.length;
    bockLength--;
    state.block1 = data.slice(0, 50);
    state.block2 = data.slice(50,100);
    state.block3 = data.slice(100, 150);
    state.block4 = data.slice(150, blocklength);

      if (state.activeView =='Builder') 
      {
        state.activeBuildInfo =  data.slice(0, 50); ;
        state.activeBuildTab ='Blockchain';  
        state.firstBuildLoad = false;
      }
      else if (state.activeView =='Articles')
      {
        state.activeArtInfo = data.slice(0, 50);
        state.activeArtTab ='Blockchain';  
        state.firstArtLoad = false;
      }
   
   },

   initInsur(state, data) {

      var insurLength = data.length;
      insurLength--;
      state.insur1 = data.slice(0, 50);
      state.insur2 = data.slice(50,100);
      state.insur3 = data.slice(100, 150);
      state.insur4 = data.slice(150, 200);
      state.insur5 = data.slice(200, insurLength);
  

      if (state.activeView =='Builder') 
      {
          state.activeBuildInfo =  data.slice(0, 50); ;
          state.activeBuildTab ='Insurtech';  
          state.firstBuildLoad = false;
      }
      else if (state.activeView =='Articles')
      {
          state.activeArtInfo = data.slice(0, 50);
          state.activeArtTab ='Insurtech';  
          state.firstArtLoad = false;
      }

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

   setNewsletters (state, data)
   {
      state.newsletters = data;
      state.activeLetterInfo = data;
      state.activeView = "Newsletters"
   },

   setNewslettersNoFtech (state)
   {
      state.activeLetterInfo = state.newsletters;
      state.activeView = "Newsletters";
   },

   setBlockNextNoFetch(state) {

    if (state.activeView =='Articles') {

        var temp = state.blkArtPage;
        temp++;     

        state.blkArticlePage++ ;
        state.activeArticleTab = 'Blockchain';
        state.firstArtdLoad = false;
      
        if (temp == 2) {
            state.activeArtInfo= state.block2;
        }

        else if (temp == 3)  {
            state.activeArtInfo= state.block3;
        }
        else if (temp == 4) {
            state.activeArtInfo= state.block4;  
        }
        else if (temp ==5) {
           state.activeArtInfo= state.block5;
        }
    }
  
    else if  (state.activeView =='Builder') {

       var temp = state.blkBuildPage;
        temp++;     
       state.blkBuildPage++ ;
       state.activeBuildTab = 'Blockchain';
       state.firstBuildLoad = false;

        if (temp == 2) {
          state.activeBuildInfo = state.block2;
        }
        else if (temp == 3)  {
          state.activeBuildInfo = state.block3; 
        }
        else if (temp == 4) {
          state.activeBuildInfo = state.block4;
        }
        else if (temp ==5) {
          state.activeBuildInfo = state.block5;  
        }
     }
    
   },


   setInsurNextNoFetch(state) {


    if (state.activeView =='Articles') {

        var temp = state.insArtPage;
        temp++;     

        state.insArtPage++ ;
        state.activeArticleTab = 'Insurtech';
        state.firstArtLoad = false;
      
        if (temp == 2) {
            state.activeArtInfo = state.insur2;
        }

        else if (temp == 3)  {
            state.activeArtInfo = state.insur3;
        }

        else if (temp == 4) {
            state.activeArtInfo = state.insur4;  
        }

        else if (temp ==5) {
           state.activeArtInfo = state.insur5;
        }
    }
  
    else if  (state.activeView =='Builder') {

       var temp = state.blkBuildPage;
       temp++;     
       state.blkBuildPage++ ;
       state.activeBuildTab = 'Blockchain';
       state.firstBuildLoad = false;

        if (temp == 2) {
          state.activeBuildInfo= state.block2;
        }
        else if (temp == 3)  {
          state.activeBuildInfo= state.block3; 
        }
        else if (temp == 4) {
          state.activeBuildInfo= state.block4;
        }
        else if (temp ==5) {
          state.activeBuildInfo= state.block5;  
        }
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

      else if (temp == 4) { 
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

    else if (state.activeView =='Articles') { 

    	state.activeArtInfo = data;
    	state.activeArtTab ='Capital Markets';	
    	state.firstArtLoad = false;
    }

  },

 setHealth(state, data) {

  state.healthtech = data; 

    if (state.activeView =='Articles') {

      state.activeArtInfo = data;
      state.activeArtTab ='HealthTech';  
      state.firstArtLoad = false;
    }

   },

  setWealth(state, data) {

    state.wealthtech = data; 

    if (state.activeView =='Builder') {

   		state.activeBuildInfo = data;
   		state.activeBuildTab ='WealthTech';	
    	state.firstBuildLoad = false;
     
     }

     else if (state.activeView =='Articles') {

    	state.activeArtInfo = data;
    	state.activeArtTab ='WealthTech';	
    	state.firstArtLoad = false;
     }
  },


 setGrowth(state, data) {

   state.growthequity = data; 

   if (state.activeView =='Builder') {

   		state.activeBuildInfo = data;
   		state.activeBuildTab ='Growth Equity';	
    	state.firstBuildLoad = false;

    }

    else if (state.activeView =='Articles') {

    	state.activeArtInfo = data;
    	state.activeArtTab ='Growth Equity';	
    	state.firstArtLoad = false;
    }
 },


 setVal(state, data) {

    state.valuation = data; 

      if (state.activeView =='Builder') {

   		  state.activeBuildInfo = data;
   		  state.activeBuildTab ='Valuation';	
    	  state.firstBuildLoad = false;
      }

      else if (state.activeView =='Articles') {

    	state.activeArtInfo = data;
    	state.activeArtTab ='Valuation';	
    	state.firstArtLoad = false;
      
      }

   },


 setMergers(state, data) {

	state.mergers = data; 


	if (state.activeView =='Builder') {

			state.activeBuildInfo = data;
			state.activeBuildTab ='M&A';	
		  state.firstBuildLoad = false;
	}

	else if (state.activeView =='Articles') {

		  state.activeArtInfo = data;
		  state.activeArtTab ='M&A';	
		  state.firstArtLoad = false;
	}

 },

 setSpin(state, data) {

  	state.spinoffs = data; 

  	if (state.activeView =='Builder') {

  			state.activeBuildInfo = data;
  			state.activeBuildTab ='Spin-offs';	
  		  state.firstBuildLoad = false;
  	}
  	else if (state.activeView =='Articles') {

  		state.activeArtInfo = data;
  		state.activeArtTab ='Spin-offs';	
  		state.firstArtLoad = false;
  	}

 },


 setBoot(state, data) {

  	state.bootstrapped = data; 

  	if (state.activeView =='Builder') {

  		state.activeBuildInfo = data;
  		state.activeBuildTab ='Bootstrapped';	
  		state.firstBuildLoad = false;
  	
    }

  	else if (state.activeView =='Articles') {

  		state.activeArtInfo = data;
  		state.activeArtTab ='Bootstrapped';	
  		state.firstArtLoad = false;
  	
     }

 },

 setReal(state, data) {

    state.realestate = data; 

    if (state.activeView =='Builder') {

   		state.activeBuildInfo = data;
   		state.activeBuildTab ='RealEstate';	
    	state.firstBuildLoad = false;
    }

    else if (state.activeView =='Articles') {
      
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

    if (state.activeView =='Data') {

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

         case "Data":
           state.activeDataInfo = data;
           state.firstDataLoad = false;     
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

      else if (state.activeView  == 'Data') {

        state.activeDataTab = topic ;
      }

    },

 	set(state, posts) {

		if (!this.firstPostsFetched) {

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

       case "Data":
        state.activeDataInfo = state.pages[0];
        state.DataPage = 1;
        state.firstDataLoad = false; 
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

  setNewEnglandNoFetch(state){

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

   setAllPosts(state, posts) {

      state.allPosts = posts;
   }
	 
 }

 export const actions = {


      async setInsur({ commit }) {

        if (!this.allPostsLoaded) {

    		await this.$axios.get('/posts?ins=1')
               		.then(res => {
              			commit("setInsur", res.data);
             		})
    
      	}
        
        else {
          commit("initInsur", this.postsbyGrouping('insurtech'));  
        }
    
      },
    			
  
  		async setBlock({ commit }) {

        if (!this.allPostsLoaded) {

        		await this.$axios.get('/posts?blk=1')
                   		.then(res => {
                  			commit("setBlock", res.data);
                 		})
          }
        else {
              commit("initBlock", this.postsbyGrouping('blockchain'));  
  		  }
      },
  	

    	async setPay({ commit }) {

    			if (!this.payPostsFetched || !this.allPostsLoaded) {

      	       await this.$axios.get('/posts?grouping=Payments')
               		.then(res => {
    					  commit("setPay", res.data);
    				})
    			}	

          else if (this.allPostsLoaded) {
                commit("setPay", this.postsbyGrouping('payments'));  
          }

    			else {

    				commit("setPostsNoFetch");
    			}	
    		 
    	},

  	 async setLend({ commit }) {

		   if (!this.lendPostsFetched || !this.allPostsLoaded) {

  	     await this.$axios.get('/posts?grouping=Lending')
           			.then(res => {
					  commit("setLend", res.data);
		         })
			}
      else if (this.allPostsLoaded) {
          commit("setLend", this.postsbyGrouping('lending'));
      } 
		  
      else {
				   commit("setLendNoFetch");
		   }
  		 
  	 },

  	
    async setReg({ commit }) {

		   if (!this.regPostsFetched || !this.allPostsLoaded)
		   {	
  	       		await this.$axios.get('/posts?grouping=RegTech')
           			.then(res => {
					  commit("setReg", res.data);
		         })
			}
      else if (this.allPostsLoaded) {

              commit("setReg", this.postsbyGrouping('regtech'));
          
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

			   else {
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

			   else {
					commit("setMergersnoFetch");
			   }
  		 
  	 },


  	 async setGrowth({ commit }) {

  			   if (!this.growthPostsFetched || !this.allPostsLoaded)
  			   {	
  	  	       	await this.$axios.get('/posts?next_round=Growth+Capital')
  	           			.then(res => {
  						  commit("setGrowth", res.data);
  			         })
  				 }

           else if (this.allPostsLoaded) {

              commit("setGrowth", this.postsbyNextRound('Growth Capital'));
          
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
		    
  		    if (!this.AIPostsFetched || !this.allPostsLoaded)
  		   	{	
    	    		await this.$axios.get('/posts?grouping=AI')
             			.then(res => {
            			commit("setAI", res.data);
  			 	})
  		   	}
          else if (this.allPostsLoaded) {

              commit("setAI", this.postsbyGrouping('ai'));
          
          }  
  		   	else {
  				
  				    commit("setAINoFetch" );
  		    }
  		 
  		  },


  		  async setHealth({ commit }) {
		    
  		    if (!this.healthPostsFetched || !this.allPostsLoaded)
  		   	{	
    	    		await this.$axios.get('/posts?grouping=HealthTech')
             			.then(res => {
            			commit("setHealth", res.data);
  			 	     });
          }

          else if (this.allPostsLoaded) {

              commit("setHealth", this.postsbyGrouping('healthtech'));
          
          } 
  		   	
          else {
  				
  				    commit("setHealthNoFetch" );
  		    }
    		 
  		  },


  		  async setCapital({ commit }) {
		    
  		    if (!this.capitalPostsFetched || !this.allPostsLoaded)
  		   	{	
    	    		await this.$axios.get('/posts?grouping=CapitalMarkets')
             			.then(res => {
            			commit("setCapital", res.data);
  			 	    });
          }

  		    else if (this.allPostsLoaded) {

              commit("setCapital", this.postsbyGrouping('capitalmarkets'));
          
          } 

  		    else {
  				
  				    commit("setCapitalNoFetch" );
  		    }
  		 
  		  },


  		  async setWealth({ commit }) {
		    
  		    if (!this.wealthPostsFetched || !this.allPostsLoaded)
  		   	{	
    	    		await this.$axios.get('/posts?grouping=WealthTech')
             			.then(res => {
            			commit("setWealth", res.data);
  			 	     });
  		   	} 

          else if (this.allPostsLoaded) {

              commit("setWealth", this.postsbyGrouping('wealthtech'));
          
          }

  		   	else {
  				
  				commit("setWealthNoFetch" );
  		    }
    		 
  		  },


  		  async setReal({ commit }) {
		    
  		    if (!this.realPostsFetched || !this.allPostsLoaded)
  		   	{	
    	    		await this.$axios.get('/posts?grouping=RealEstate')
             			.then(res => {
            			commit("setReal", res.data);
  			 	     });
  		   	}

          else if (this.allPostsLoaded) {

              commit("setReal", this.postsbyGrouping('realestate'));
          
          }

  		   	else {
  				
  				    commit("setRealNoFetch" );
  		    }  
  		 
  		  },


  		  async setQ121({ commit }) {
		    
  		    if (!this.allPostsLoaded || !this.Q121PostsFetched)
  		   	{	
    	    		await this.$axios.get('/posts?quarter=Q121')
             			.then(res => {
            			commit("setQ121", res.data);
  			 	     });
  		   	}

          else if (this.allPostsLoaded) {

              commit("setQ121", this.postsbyQuarter('Q121'));
          
          }
  		   	else {
  				
  				    commit("setQ121NoFetch" );
  		    }
  		 
  		  },


  		  async setQ221({ commit }) {
		    
  		    if (!this.allPostsLoaded || !this.Q221PostsFetched)
  		   	{	
    	    		await this.$axios.get('/posts?quarter=Q221')
             			.then(res => {
            			commit("setQ221", res.data);
  			 	    });
  		   	}

          else if (this.allPostsLoaded) {

              commit("setQ221", this.postsbyQuarter('Q221'));
          
          }

  		   	else {
  				
  				    commit("setQ221NoFetch" );
  		    }
  		 
  		  },


  		  async setQ321({ commit }) {
		    
  		    if (!this.allPostsLoaded || !this.Q321PostsFetched)
  		   	{	
    	    		await this.$axios.get('/posts?quarter=Q321')
             			.then(res => {
            			commit("setQ321", res.data);
  			 	    });
  		   	}
          else if (this.allPostsLoaded) {

              commit("setQ321", this.postsbyQuarter('Q321'));
          
          }
  		   	else {
  				
  				    commit("setQ321NoFetch" );
  		    }
  		 
  		  },


  		  async setQ421({ commit }) {
		    
  		    if (!this.allPostsLoaded || !this.Q421PostsFetched)
  		   	{	
    	    		await this.$axios.get('/posts?quarter=Q421')
             			.then(res => {
            			commit("setQ421", res.data);
  			 	})
  		   	}
          else if (this.allPostsLoaded) {

              commit("setQ421", this.postsbyQuarter('Q421'));
          
          }

  		   	else {
  				
  				    commit("setQ421NoFetch" );
  		    }
  		 
  		  },


  		  async setQ420({ commit }) {
		    
  		    if (!this.allPostsLoaded || !this.Q420PostsFetched)
  		   	{	
    	    		await this.$axios.get('/posts?quarter=Q420')
             			.then(res => {
            			commit("setQ420", res.data);
  			 	})
  		   	}

          else if (this.allPostsLoaded) {

              commit("setQ420", this.postsbyQuarter('Q420'));
          
          }

  		   	else {
  				
  				commit("setQ420NoFetch" );
  		    }
  		 
  		  },


  		  async setQ320({ commit }) {
		    
  		    if (!this.allPostsLoaded || !this.Q320PostsFetched)
  		   	{	
    	    		await this.$axios.get('/posts?quarter=Q320')
             			.then(res => {
            			commit("setQ320", res.data);
  			 	})
  		   	} 
          
          else if (this.allPostsLoaded) {

              commit("setQ320", this.postsbyQuarter('Q320'));
          
          }

  		   	else {
  				
  				    commit("setQ320NoFetch" );
  		    }
  		 
  		  },


  		  async set0to1({ commit }) {
		    
  		    if (!this.zerotoonePostsFetched || !this.allPostsLoaded )
  		   	{	
    	    		await this.$axios.get('/posts?amount=%240+to+%241+million')
             			.then(res => {
            			commit("set0to1", res.data);
  			 	})
  		   	} 

          else if (this.allPostsLoaded) {

              commit("set0to1", this.postsbyAmount('$0 to $1 million'));
          
          }

  		   	else {
  				
  				    commit("set0to1NoFetch" );
  		    }
  		 
  		  },


  		  async set1to5({ commit }) {
		    
  		    if (!this.onetofivePostsFetched || !this.allPostsLoaded)
  		   	{	
    	    		await this.$axios.get('/posts?amount=%241+million+to+%245+million')
             			.then(res => {
            			commit("set1to5", res.data);
  			 	})
          }

         else if (this.allPostsLoaded) {

              commit("set1to5", this.postsbyAmount('$1 million to $5 million'));
          
          }
  		   	
  		   	else {
  				
  				    commit("set1to5NoFetch" );
  		    }
    		 
  		  },

        async set5to10({ commit }) {
        
          if (!this.fivetotenPostsFetched || !this.allPostsLoaded)
          { 
              await this.$axios.get('/posts?amount=%245+million+to+%2410+million')
                  .then(res => {
                  commit("set5to10", res.data);
          })
          } 

          else if (this.allPostsLoaded) {

              commit("set5to10", this.postsbyAmount('$5 million to $10 million'));
          
          }

          else {
          
          commit("set5to10NoFetch" );

          }
         
        },


  		  async set10to20({ commit }) {
		    
  		    if (!this.tentotwentyPostsFetched || !this.allPostsLoaded)
  		   	{	
    	    		await this.$axios.get('/posts?amount=%2410+million+to+%2420+million')
             			.then(res => {
            			commit("set10to20", res.data);
  			 	})
  		   	} 

          else if (this.allPostsLoaded) {

              commit("set10to20", this.postsbyAmount('$10 million to $20 million'));
          
          }

  		   	else {
  				
  				commit("set10to20NoFetch" );
  		    }
    		 
  		  },


  		  async set20to50({ commit }) {
		    
  		    if (!this.twentytofiftyPostsFetched || !this.allPostsLoaded)
  		   	{	
    	    		await this.$axios.get('/posts?amount=%2420+million+to+%2450+million')
             			.then(res => {
            			commit("set20to50", res.data);
  			 	})
  		   	} 
          else if (this.allPostsLoaded) {

              commit("set20to50", this.postsbyAmount('$20 million to $50 million'));
          
          }
  		   	else {
  				
  				    commit("set20to50NoFetch" );
  		    }
    		 
  		  },

  		  async set50to100({ commit }) {
		    
  		    if (!this.fiftytohundedPostsFetched || !this.allPostsLoaded)
  		   	{	
    	    		await this.$axios.get('/posts?amount=%2450+million+to+%24100+million')
             			.then(res => {
            			commit("set50to100", res.data);
  			 	})
  		   	} 

          else if (this.allPostsLoaded) {

              commit("set50to100", this.postsbyAmount('$50 million to $100 million'));
          
          }

  		   	else {
  				
  				commit("set50to100NoFetch" );
  		    }
  		 
  		  },


  		  async set100plus({ commit }) {
		    
  		    if (!this.hundedplusPostsFetched || !this.allPostsLoaded)
  		   	{	
    	    		await this.$axios.get('/posts?amount=%24100+million+plus')
             			.then(res => {
            			commit("set100plus", res.data);
  			 	})
  		   	} 
          else if (this.allPostsLoaded) {

              commit("set100plus", this.postsbyAmount('$100 million plus'));
          
          }

  		   	else {
  				
  				commit("set100plusNoFetch" );
  		    }
    		 
  		  },

        async setLatin({ commit }) {
        
          if (!this.latinPostsFetched || !this.allPostsLoaded)
          { 
              await this.$axios.get('/posts?region=LatinAmerica')
                  .then(res => {
                  commit("setLatin", res.data);
          })
          }
          
          else if (this.allPostsLoaded) {

              commit("setLatin", this.postsbyRegion('LatinAmerica'));
          
          }

          else {
          
              commit("setLatinNoFetch" );
          }
       
        },


        async setCanada({ commit }) {
        
          if (!this.canadaPostsFetched || !this.allPostsLoaded)
          { 
              await this.$axios.get('/posts?region=Canada')
                  .then(res => {
                  commit("setCanada", res.data);
          })
          } 

          else if (this.allPostsLoaded) {

              commit("setCanada", this.postsbyRegion('Canada'));
          
          }

          else {
          
          commit("setCanadaNoFetch" );
          }
       
        },

        async setSouth({ commit }) {
        
          if (!this.southPostsFetched || !this.allPostsLoaded)
          { 
              await this.$axios.get('/posts?region=South')
                  .then(res => {
                  commit("setSouth", res.data);
          })
          } 

          else if (this.allPostsLoaded) {

              commit("setSouth", this.postsbyRegion('South'));
          
          } 

          else {
          
          commit("setSouthNoFetch" );
          }
       
        },

        async setNewEngland({ commit }) {
        
          if (!this.newenglandPostsFetched || !this.allPostsLoaded)
          { 
              await this.$axios.get('/posts?region=NewEngland')
                  .then(res => {
                  commit("setNewEngland", res.data);
          })
          }

          else if (this.allPostsLoaded) {

              commit("setNewEngland", this.postsbyRegion('NewEngland'));
          
          }

          else {
              commit("setNewEnglandNoFetch" );
          }
         
        },

        async setSoutheast({ commit }) {
        
          if (!this.southeastPostsFetched || !this.allPostsLoaded)
          { 
              await this.$axios.get('/posts?region=SouthEast')
                  .then(res => {
                  commit("setSoutheast", res.data);
              })
          } 

          else if (this.allPostsLoaded) {

              commit("setSoutheast", this.postsbyRegion('SouthEast'));
          
          }  
          else {
          
              commit("setSoutheastNoFetch" );
          }
       
        },

        async setSocal({ commit }) {
        
          if (!this.socalPostsFetched || !this.allPostsLoaded)
          { 
              await this.$axios.get('/posts?region=SoCal')
                  .then(res => {
                  commit("setSocal", res.data);
          })
          }
          else if (this.allPostsLoaded) {

              commit("setSocal", this.postsbyRegion('SoCal'));
          
          } 
          else {
          
              commit("setSocalNoFetch" );
          }
       
        },

        async setSilicon({ commit }) {
        
          if (!this.siliconPostsFetched || !this.allPostsLoaded)
          { 
              await this.$axios.get('/posts?region=SiliconValley')
                  .then(res => {
                  commit("setSilicon", res.data);
          })
          }
          else if (this.allPostsLoaded) {

              commit("setSilicon", this.postsbyRegion('SiliconValley'));
          
          }  
          else {
          
          commit("setSiliconNoFetch" );
          }
       
        },

        async setMidwest({ commit }) {
        
          if (!this.midwestPostsFetched || !this.allPostsLoaded)
          { 
              await this.$axios.get('/posts?region=MidWest')
                  .then(res => {
                  commit("setMidwest", res.data);
          })
          }
          else if (this.allPostsLoaded) {

              commit("setMidwest", this.postsbyRegion('MidWest'));
          
          }   
          else {
          
          commit("setMidwestNoFetch" );
          }
       
        },

        async setMidatlantic({ commit }) {
        
          if (!this.midatlanticPostsFetched || !this.allPostsLoaded)
          { 
              await this.$axios.get('/posts?region=MidAtlantic')
                  .then(res => {
                  commit("setMidatlantic", res.data);
          })
          } 
          else if (this.allPostsLoaded) {

              commit("setMidatlantic", this.postsbyRegion('MidAtlantic'));
          
          } 
          else {
          
          commit("setMidatlanticNoFetch" );
          }
       
        },

        async setRocky({ commit }) {
        
          if (!this.rockyPostsFetched || !this.allPostsLoaded)
          { 
              await this.$axios.get('/posts?region=RockyMountains')
                  .then(res => {
                  commit("setRocky", res.data);
          })
          } 

         else if (this.allPostsLoaded) {
              commit("setRocky", this.postsbyRegion('RockyMountains'));
          } 

          else {
          
          commit("setRockyNoFetch" );
          }
       
        },

        async setPacific({ commit }) {
        
          if (!this.pacificPostsFetched || !this.allPostsLoaded)
          { 
              await this.$axios.get('/posts?region=PacNorthWest')
                  .then(res => {
                  commit("setPacific", res.data);
          })
          } 
          else if (this.allPostsLoaded) {

              commit("setPacific", this.postsbyRegion('PacNorthWest'));
          
          }
          else {
          
          commit("setPacificNoFetch" );
        }
        },

        async setSouthwest({ commit }) {
        
          if (!this.southwestPostsFetched || !this.allPostsLoaded)
          { 
              await this.$axios.get('/posts?region=Southwest')
                  .then(res => {
                  commit("setSouthwest", res.data);
          })
          }
          else if (this.allPostsLoaded) {

              commit("setSouthwest", this.postsbyRegion('Southwest'));
          
          }
          else {
          
          commit("setSouthwestNoFetch" );
          }
       
        },


        async setNYC({ commit }) {
        
          if (!this.nycPostsFetched || !this.allPostsLoaded)
          { 
              await this.$axios.get('/posts?region=SiliconAlleyNYC')
                  .then(res => {
                  commit("setNYC", res.data);
          })
          }
          else if (this.allPostsLoaded) {

              commit("setNYC", this.postsbyRegion('SiliconAlleyNYC'));
          
          }
          else {
          
          commit("setNYCNoFetch" );
          }
       
        },

        async setME({ commit }) {
        
          if (!this.mePostsFetched || !this.allPostsLoaded)
          { 
              await this.$axios.get('/posts?region=MiddleEast')
                  .then(res => {
                  commit("setME", res.data);
          })
          }

          else if (this.allPostsLoaded) {

              commit("setME", this.postsbyRegion('MiddleEast'));
          
          }

          else {
          
              commit("setMENoFetch" );
          }
       
        },

  		  
        async setOceania({ commit }) {
        
          if (!this.oceaniaPostsFetched || !this.allPostsLoaded)
          { 
              await this.$axios.get('/posts?region=Oceania')
                  .then(res => {
                  commit("setOceania", res.data);
          })
          } 
          else if (this.allPostsLoaded) {

              commit("setOceania", this.postsbyRegion('Oceania'));
          
          }
          else {
          
          commit("setOceaniaNoFetch" );
          }
       
        },


        async setCarribean({ commit }) {
        
          if (!this.carribeanPostsFetched || !this.allPostsLoaded)
          { 
              await this.$axios.get('/posts?region=Caribbean')
                  .then(res => {
                  commit("setCarribean", res.data);
          })
          } 
          else if (this.allPostsLoaded) {

                commit("setCarribean", this.postsbyRegion('Caribbean'));
            
            }
          else {
          
              commit("setCarribeanNoFetch" );
          }
         
        },


        async setAsia({ commit }) {
        
          if (!this.asiaPostsFetched || !this.allPostsLoaded)
          { 
              await this.$axios.get('/posts?region=Asia')
                  .then(res => {
                  commit("setAsia", res.data);
          })
          } 
          else if (this.allPostsLoaded) {

              commit("setAsia", this.postsbyRegion('Asia'));
          
          }
          else {
          
          commit("setAsiaNoFetch" );
          }
         
        },


        async setEurope({ commit }) {
        
          if (!this.europePostsFetched || !this.allPostsLoaded)
          { 
              await this.$axios.get('/posts?region=Europe')
                  .then(res => {
                  commit("setEurope", res.data);
          })
          } 
          else if (this.allPostsLoaded) {

              commit("setEurope", this.postsbyRegion('Europe'));
          
          }
          else {
          
          commit("setEuropeNoFetch" );
          }
         
        },


        async setAfrica({ commit }) {
        
          if (!this.africaPostsFetched || !this.allPostsLoaded)
          { 
              await this.$axios.get('/posts?region=Africa')
                  .then(res => {
                  commit("setAfrica", res.data);
          })
          }
          else if (this.allPostsLoaded) {

              commit("setAfrica", this.postsbyRegion('Africa'));
          
          }
          else {
          
          commit("setAfricaNoFetch" );
          }
       
        },

  		 async goPrevious({ commit }, pageVal ) {
	
		      commit("setPrevious");
  		 
  		 },

  		 async goNext( {commit}, pageVal) {

    			if (this.pageArryLength >= pageVal || this.allPostsLoaded) {

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

  		 async nuxtServerInit(vuexContext, context) {
		   
         if (!this.firstPostsFetched)
         {
             await this.$axios.$get("/posts?page=1")
                .then(data => {
                  vuexContext.commit("set", data);
                })
  		 
          }
        else {

            vuexContext.commit("setLast");
        }

       },

	     setView({commit}, view) {

	      		commit("setView", view);
	    },


       async setBlockPrevious({ commit }, page ) {
  
          commit("setBlockPrevious");
       
       },

      async setNewsletters( {commit}, page) {


        if (!this.newslettersFetched) {
 
            await this.$axios.get('/posts?storytype=Newsletter')
                    .then( res => {
              commit("setNewsletters", res.data)    
             })  

         } 

         else {
              
              commit("setNewslettersNoFetch")  
         }            
    
       },  
       



       async setBlockNext( {commit}, page) {

        if (!this.firstPostsFetched) {

            var temp = page;
            temp++ ;

            await this.$axios.get('/posts?blk=' + temp)
                    .then( res => {
              commit("setBlockNext", res.data)    
             })  

         } 

         else {
              
              commit("setBlockNextNoFetch")  

         }            
    
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

          if (!this.firstPostsFetched) {

            var temp = page;
            temp++ ;
              
            await this.$axios.get('/posts?ins=' + temp)
                      .then( res => {
                commit("setInsurNext", res.data)    
               })  
           }
           else {

               commit("setInsurNextNoFetch") 
           }


        },   

        async setAllPosts ( {commit}) {

           commit("setAllPosts", allPosts); 

        }
       

	}  

	export const getters = {
      
    loadedPosts(state) {
        return state.pages[0];
	   },

	   payPostsFetched(state) {

  		  if (state.payments.length){
          return true;
        } 

        else {
          return false;
        }
	  },

	  blockPostsFetched(state) {
		
		  if (state.blockchain.length) {
        return true;
      } 

      else {
        return false;
      }
	  
	  },
	  
	  pageArryLength(state) {
	
      if (state.pages.length)	{
        return state.pages.length;
      }

      else {
        return 0;
      }  
	  
	  },

	  bankPostsFetched(state) {

      if (state.banking.length) {

        return true;
      } 

      else {
        return false;
      }
	 
	  },

	  AIPostsFetched(state) {

	  	if (state.AI.length) {
        return true;
      } 

      else {
        return false;
      }
	 
	  },


	  insurPostsFetched(state) {
		 
      if (state.insurtech.length) {

        return true;
      } 

      else {
        return false;
      }
	  
	  },
	  

	  lendPostsFetched(state)  {
	
	    if (state.lending.length) {
        return true;
      } 

      else {
        return false;
      }

	  },
	  
	  regPostsFetched(state)  {
	
      if (state.regtech.length) {
        return true;
      } 

      else {
        return false;
      }

	  },

	  healthPostsFetched(state)  {
	
     if (state.healthtech.length) {
        return true;
      } 

      else {
        return false;
      }

	  },

	  firstPostsFetched(state) {

      if (state.pages[0].length) {
        return true;
      } 

      else {
        return false;
      }

    },

	  wealthPostsFetched(state) {
	
		  if (state.wealthtech.length) {
        return true;
      } 

      else {
        return false;
      }

	  },

     newslettersFetch(state) {
  
      if (state.newsletters.length) {
        return true;
      } 

      else {
        return false;
      }

    },

	  advisorPostsFetched(state) {

	    if (state.advisors.length) {
        return true;
      } 

      else {
        return false;
      }

	  },

	  capitalPostsFetched(state) {
	
      if (state.capitalmarkets.length) {
        return true;
      } 

      else {
        return false;
      } 


	  },

	  realPostsFetched(state) {
	
		  if (state.realestate.length) {
        return true;
      } 

      else {
        return false;
      }
	  
    },

	  valPostsFetched(state) {
	
		  if (state.valuation.length) {
        return true;
      } 

      else {
        return false;
      }

	  },

	  mergerPostsFetched(state) {
	
		 if (state.mergers.length){
        return true;
     } 

      else {
        return false;
      }
	  
    },
      
    spinPostsFetched(state) {
	
		  if (state.spinoffs.length) {
        return true;
      } 

      else {
        return false;
      }

	  },

     first(state) {
  
      if (state.firstArtLoad == true){
        return true;
      } 

      else {
        return false;
      }

    },


	  bootPostsFetched(state) {
		  return state.bootstrapped.length > 0;
	  },

	  growthPostsFetched(state) {

	    if (state.growthequity.length) {
        return true;
      } 

      else {
        return false;
      }

    },
      
    firstpage(state) {	
		  return state.pages[0] ;
	  },
	 
	  insurPosts(state) {
		  return state.insurtech;
	  },
	 
	  lendPosts(state) {
		  return state.lending;
    },
	  
	  bankPosts(state) {
		  return state.banking;
	  },	
	  
	  pagesArry(state,item) {
		  return state.pages[item];	
	  },
	
	 activeArtPage(state) {
		 return state.numArtPage;
	 },

	 activeBuildPage(state) {
	 	 return state.numBuildPage;
	 },

	 activeView(state) {
	 	 return state.activeView;
	 },

	 Q320PostsFetched(state) {

	 	 if (state.Q320.length) {
        return true;
     } 

     else {
          return false;
        }
	  },

	 Q420PostsFetched(state) {

      if (state.Q420.length) {
        return true;
      } 

      else {
        return false;
      }

	 },
	 
	 Q121PostsFetched(state) {

	    if (state.Q121.length) {
        return true;
      } 

      else {
        return false;
      }

	 },
	 
	  Q221PostsFetched(state) {

      if (state.Q221.length) {
        return true;
      } 
      
      else {
        return false;
      }
	 	
	  },
	 
	 Q321PostsFetched(state) {

	    if (state.Q321.length){
        return true;
      } 

      else {
        return false;
      }

	 },
	 
	 Q421PostsFetched(state) {

	 	  if (state.Q421.length) {
        return true;
      } 

      else {
        return false;
      }
	 },

	 zerotoonePostsFetched(state) {

	 	  if (state.zerotoone.length){
        return true;
      } 

      else {
        return false;
      }

	 },

	 onetofivePostsFetched(state) {

	 	  if (state.onetofive.length) {
        return true;
      }

      else {
        return false;
      }

	 },

  fivetotenPostsFetched(state) {

    if (state.fivetoten.length) {
      return true;
    } 

    else {
      return false;
    }

   },

	 tentotwentyPostsFetched(state) {

      if (state.tentotwenty.length)
      {
        return true;
      }

      else {
        return false;
      }

	 },

	 twentytofiftyPostsFetched(state) {

      if (state.twentytofifty.length) {
        return true;
      } 

      else {
        return false;
      }

	 },

	 fiftytohundredPostsFetched(state) {

      if (state.fiftytohundred.length){
        return true;
      } 

      else {
        return false;
      }

	 },

	 hundredplusPostsFetched(state) {

	   if (state.hundredplus.length) {
        return true;
      } 

     else {
        return false;
      }

	  },


   latinPostsFetched(state) {

      if (state.latin.length) {
        return true;
      } 

      else {
        return false;
      }
   
   },

   europePostsFetched(state) {

      if (state.europe.length) {
        return true;
      } 

      else {
        return false;
      }
   
   },

   canadaPostsFetched(state) {

     if (state.canada.length){
        return true;
      } 

    else {
        return false;
      }

   },

  nycPostsFetched(state) {

      if (state.nyc.length){

        return true;
      } 

      else {
        return false;
      }
     
   },

   southPostsFetched (state) {

      if (state.south.length) {
        return true;
      } 

      else {
        return false;
      } 

   },

   southwestPostsFetched (state) {

      if (state.southwest.length) {
        return true;
      } 

      else {
        return false;
      }

   },

   southeastPostsFetched (state) {

      if (state.southeast.length) {
        return true;
      } 

      else {
        return false;
      }

   },

   midwestPostsFetched (state) {

     if (state.midwest.length){

        return true;
      } 

     else {
        return false;
      }

   },

   carribeanPostsFetched (state) {

      if (state.carribean.length) {
          return true;
      } 

      else {
          return false;
      } 

   },

   africaPostsFetched (state) {

     if (state.africa.length) {
        return true;
      } 

      else {
        return false;
      }

   },


   asiaPostsFetched (state) {

      if (state.asia.length) {
        return true;
      } 

      else {
        return false;
      }

   },

   oceaniaPostsFetched (state) {

     if (state.oceania.length) {
        return true;
      } 

      else {
        return false;
      }

   },

   mePostsFetched (state) {

      if (state.mideast.length) {
        return true;
      } 

      else {
        return false;
      }

   },

   rockyPostsFetched (state) {

      if (state.rocky.length){

        return true;
      } 

      else {
        return false;
      }

   },

   pacificPostsFetched(state) {

    if (state.pacific.length) {
      return true;
    } 

    else {
      return false;
    }

   },

  socalPostsFetched(state) {

      if (state.socal.length) {
        return true;
      } 

      else {
        return false;
      }

   },

  siliconPostsFetched(state) {

      if (state.silicon.length) {
        return true;
      } 

      else {
        return false;
      }

   },

  newenglandPostsFetched(state) {

    if (state.newengland.length) {

      return true;
    } 

    else {
      return false;
    }


   },

  midatlanticPostsFetched(state) {

    if (state.midatlantic.length) {
      return true;
    } 

    else {
      return false;
    }

   },
 
  allPostsLoaded(state) {

      if (state.allPosts.length) {
        return true;
      }

      else {
        return false;
      }
  
    },

   totalAllPosts(state) {

      if (this.allPostsLoaded) {
        return state.allPosts.length;
      }

      else {
        return 0;
      }

    },

    postsbyQuarter: (state, quarter ) => {

      return state.allPosts.filter(function(elem, quarter) {
            return elem.quarter == quarter ;
      });
    },  

    postsbyRegion: (state, region ) => {

      return state.allPosts.filter(function(elem, region) {
            return elem.region == region ;
      });

     },

    postsbyAmount: (state, amount ) => {

      return state.allPosts.filter(function(elem, amount) {
            return elem.amount == amount ;
      });

     },

     postsbyNextRound: (state, next_round ) => {

        return state.allPosts.filter(function(elem, next_round) {
            return elem.next_round == next_round ;
        });
     }, 

     postsbyGrouping: (state, grouping ) => {

      return state.allPosts.filter(function(elem, amount) {
          return (elem.grouping1.toLowerCase() == grouping || elem.grouping2.toLowerCase() == grouping)
      });

     },    
  

	   prevArryVal() {

  	 if (this.activeView == "Articles") {
  	 		var val = this.activeArtPage();
  	 }

  	 else if (this.activeView == "Builder") {
  	 		var val = this.activeBuildPage();
  	 }

     else {
        var val = this.dataPage();
      }
	
  		val--;

  		if (val>= 0) {
  			return val;
  		}
		
      else {
			  return 0;
		  }
	 
	   },	 

	 }