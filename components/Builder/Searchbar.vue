<template>
 <div>
  <div class="search-bar-div">
    <div class="search-div">
      <input type="text"  name="term" id="term"  v-model="searchMessage" style="margin-right: 10px" width="100%" class="text-field w-input w-col w-col-8" placeholder="search  content">
        <button class="gardient-button" id="section-10" v-on:click="submitSearch(searchMessage)"  style="margin-left:1px;margin-top:5px;margin-bottom:10px" >
        <i class="glyphicon glyphicon-search">Search</i>
      </button>
    </div>
    <div class="tag-search-div">
      <a href="#" v-on:click="changePage('Last')" class="tagbtn">all</a>
      <a href="#" v-on:click="showGrouping('Payments')" class="tagbtn">payments</a>
      <a href="#" v-on:click="showGrouping('Insurtech')"  class="tagbtn">insurtech</a>
      <a href="#" v-on:click="showGrouping('Lending')"   class="tagbtn">lending</a>
      <a href="#" v-on:click="showGrouping('Banking')"   class="tagbtn">banking</a>
      <a href="#" v-on:click="showGrouping('Blockchain')" class="tagbtn">blockchain</a>
      <a href="#" v-show="showPreviousBtn" class="tagbtn" v-on:click="changePage('Previous')">Prev</a>
      <a href="#" v-show="showNextBtn" class="tagbtn" v-on:click="changePage('Next')" >Next</a>
    </div>
  </div>
  <div v-show="false">
   <br><i style="font-size: 13px;">No results found</i>
   </div>
 </div>
</template>

<script>
import {mapState} from 'vuex';
import 'vuetify/dist/vuetify.min.css';
import Vuetify from 'vuetify';
export default {
  name: 'Searchbar',
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
   },
   computed: {
  ...mapState({
      numPage: state => state.posts.numBuildPage,
      activeTab: state => state.posts.activeBuildTab,
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

   }
};
</script>
<style>
@media screen and (min-width:1600px) {
.tag-search-div {
    display: flex !important ;
}
.search-div {
  display: grid;
}
}
.tagbtn {
  padding: 3px 5px !important;
  border-radius: 3px !important;
  margin-top: 10px !important;
  margin-bottom: 10px !important;
  display: inline-flex;
  margin-left: 3px;
    margin-right: 3px;
}
</style>

<style scoped>
.text-field {
  text-align-last: center;
}
.tag-search-div {
    display: flex !important;
}

@media screen and (min-width:1600px) {

.w-col-8 {
    width: 80% !important;
}
.button#section-10 {
      width: 50% ;
}

}
.search-div {
  position: sticky;
    display: contents;
    height: 30px;
    border-radius: 3px;
    margin-left: 20px;
    margin-right: 70px;
    margin-bottom: 30px;
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
  #section-10{
    width: 100% !important;
  }
}
.tag-search-div {
  width: 90% ;
  margin-left: auto;
  margin-right: auto;
}
.tagbtn {
  padding: 3px 5px !important;
  border-radius: 3px !important;
  margin-top: 10px !important;
  margin-bottom: 10px !important;
  display: inline-flex;
  margin-left: 3px;
    margin-right: 3px;
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
    position: inherit;
  }
input {
      background: rgba(105,105,105,0.07059);
}
h3, h2 {
  color: #4f81bd !important;
}
</style>
