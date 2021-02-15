<template>
 <div>
 <client-only>
  <div class="search-bar-div">
    <div class="search-div">
      <input type="text"  name="term" id="term"  v-model="searchMessage" style="margin-right: 10px" width="100%" class="text-field w-input w-col w-col-6" placeholder="search  content">
        <button  class="gardient-button" id="section-10" v-on:click="submitSearch(searchMessage)"  style="margin-left:1px;margin-top:5px;margin-bottom:10px" >
        <i class="glyphicon glyphicon-search"><span class="mdi mdi-file-search"></span></i>
      </button>
    </div>
    <div class="tag-search-div">
      <a href="#" v-on:click="changePage('Last')" class="tagbtn">all</a>
      <a href="#" v-on:click="showGrouping('Payments')" class="tagbtn">payments</a>
      <a href="#" v-on:click="showGrouping('Insurtech')"  class="tagbtn">insurtech</a>
      <a href="#" v-on:click="showGrouping('Lending')"   class="tagbtn">lending</a>
      <a href="#" v-on:click="showGrouping('Banking')"   class="tagbtn">banking</a>
      <a href="#" v-on:click="showGrouping('Blockchain')" class="tagbtn">blockchain</a>
      <a href="#" v-on:click="showGrouping('AI')" class="tagbtn">AI</a>
      <a href="#" v-show="showPreviousBtn" class="tagbtn"

      v-on:click="changePage('Previous')">Prev</a>
      <a href="#" v-show="showNextBtn" class="tagbtn" v-on:click="changePage('Next')" >Next</a>

      <a href="#" v-show="showPrevInsBtn" class="tagbtn"  v-on:click="changeInsur('Previous')">Prev</a>
      <a href="#" v-show="showNextInsBtn" class="tagbtn" v-on:click="changeInsur('Next')">Next</a>


      <a href="#" v-show="showPrevBnkBtn" class="tagbtn"  v-on:click="changeBank('Previous')">Prev</a>
      <a href="#" v-show="showNextBnkBtn" class="tagbtn" v-on:click="changeBank('Next')">Next</a>


      <a href="#" v-show="showPrevBlkBtn" class="tagbtn"  v-on:click="changeBlock('Previous')">Prev</a>
      <a href="#" v-show="showNextBlkBtn" class="tagbtn" v-on:click="changeBlock('Next')">Next</a>



      <br>
      <a href="#" v-on:click="showGrouping('RegTech')" class="tagbtn">regtech</a>
      <a href="#" v-on:click="showGrouping('HealthTech')" class="tagbtn">healthtech</a>
      <a href="#" v-on:click="showGrouping('CapitalMarkets')" class="tagbtn">capitalmarkets</a>
      <a href="#" v-on:click="showGrouping('WealthTech')" class="tagbtn">wealthtech</a>
      <a href="#" v-on:click="showGrouping('RealEstate')" class="tagbtn">realestate</a><br>
      <a href="#" v-on:click="showGrouping('Growth')" class="tagbtn">growth equity</a>
      <a href="#" v-on:click="showGrouping('Mergers')" class="tagbtn">M&A</a>
      <a href="#" v-on:click="showGrouping('Spin')" class="tagbtn">spin-offs</a>
      <a href="#" v-on:click="showGrouping('Val')" class="tagbtn">valuation</a>
      <a href="#" v-on:click="showGrouping('Boot')" class="tagbtn">bootstrapped</a>
      <a href="#" v-on:click="showGrouping('Advisors')" class="tagbtn">advisors</a>
    </div>
  </div>
  </client-only>
 </div>
</template>

<script>
import {mapState} from 'vuex';
//import 'vuetify/dist/vuetify.min.css';
//import Vuetify from 'vuetify';
export default {
  name: 'PostTempSearch',
  data () {
    return {
      searchMessage: "",
    }
  },
  methods: {
   showGrouping: function(category) {
      $nuxt.$emit("getCategory", category);
    },
   changePage: function(direction) {
      $nuxt.$emit("changePage", direction);
    },
    submitSearch: function(topic) {
      $nuxt.$emit("submitSearch", topic);
      this.searchMessage = '';
    },
    changeInsur: function(direction) {
      $nuxt.$emit("changeInsur", direction);
    },

   changeBank: function(direction) {
      $nuxt.$emit("changeBank", direction);
    },

   changeBlock: function(direction) {
      $nuxt.$emit("changeBlock", direction);
    },

   },
   computed: {
  ...mapState({
      numPage: state => state.posts.numArtPage,
      activeTab: state => state.posts.activeArtTab,
      bnkPage: state => state.posts.bnkArtPage,
      blkPage: state => state.posts.blkArtPage,
      insPage: state => state.posts.insArtPage,
   }),
    showPreviousBtn() {
        if (this.numPage >= 2 && (this.activeTab == 'Page' || this.activeTab =='All'))
        {
           return true;
        }
        else
        {
           return false;
        }
     },
     showNextBtn() {

        if (this.activeTab == 'All' || this.activeTab == 'Page')
        {
           return true;
        }
        else
        {
           return false;
        }
     },

     showPrevInsBtn() {
        if (this.insPage >= 2 && (this.activeTab == 'Insurtech'))
        {
           return true;
        }
        else
        {
           return false;
        }
     },
     showNextInsBtn() {

        if (this.insPage <5  && (this.activeTab == 'Insurtech'))
        {
           return true;
        }
        else
        {
           return false;
        }
     },

     showPrevBnkBtn() {
        if (this.bnkPage >= 2 && (this.activeTab == 'Banking'))
        {
           return true;
        }
        else
        {
           return false;
        }
     },
     showNextBnkBtn() {

        if (this.bnkPage < 3  && (this.activeTab == 'Banking'))
        {
           return true;
        }
        else
        {
           return false;
        }
     },

     showPrevBlkBtn() {
        if (this.blkPage >= 2 && (this.activeTab == 'Blockchain'))
        {
           return true;
        }
        else
        {
           return false;
        }
     },
     showNextBlkBtn() {

        if (this.blkPage <=5 &&  (this.activeTab == 'Blockchain'))
        {
           return true;
        }
        else
        {
           return false;
        }
     }
   },
};
</script>



<style scoped>
a {
  text-decoration: none !important;
}
.search-div {
  position: sticky;
    display: block;
    height: 30px;
    border-radius: 3px;
    margin-left: 20px;
margin-right: 70px;
}
   .tagbtn {
   background-color: #4f81bd !important;
   color: white !important;
   padding: 1px 5px;
   border-radius: 10px;
 }
.text-field{
  height: 30px !important;
}
.search-bar-div {
  margin-left:10px;
  margin-Right:10px;
}
.w-col-8{
  width: 90%;
}
@media screen and (max-width:1800px) {
  .w-col-8 {
    width: 70% !important;
  }
}
@media screen and (max-width:900px) {
  .w-col-8 {
    width: 100% !important;
  }
}
.tag-search-div {
  width: 90% ;
  margin-left: auto;
  margin-right: auto;
  display: inline-block;
}
.tagbtn {
  padding: 3px 5px !important;
  border-radius: 3px !important;
  margin-top: 10px !important;
  margin-bottom: 10px !important;
  display: inline-flex;
}
.tagbtn:active {
  background: #474747 !important;
}
.gardient-button {
  margin-top:10px;
  background: #4f81bd !important;
}
i.glyphicon {
  color: #ffffff !important;
  heigth: 50px !important;
}
  #section-10 {
    background-image: linear-gradient(92deg, rgba(20, 160, 253, .82), rgba(20, 160, 253, 0.82));
width: 80px;
color: white;
  }
  button#section-10 {
    margin-left: 1px;
    margin-top: 0px !important;
    margin-bottom: 10px;
    padding: 3px;
    border-radius: 3px;
    height: fit-content;
    position: absolute;
  }
input {
      background: rgba(105,105,105,0.07059);
}
h3, h2 {
  color: #4f81bd !important;
}
</style>
