 <template>
 <div id="search-bar" style="-webkit-box-pack: center; margin:auto !important;">
  <div class="search-bar-div">
    <div class="search-div">
      <input    v-model="searchMessage" style="margin-right: 10px" width="100%" class="text-field w-input w-col w-col-6" placeholder="search content">
        <button class="gardient-button" id="section-10" v-on:click="submitSearch(searchMessage)"  style="margin-left:1px;margin-top:5px;margin-bottom:10px" >
        <i class="glyphicon glyphicon-search"><span class="mdi mdi-file-search"></span></i>
      </button>
    </div>
    <div style="max-width:850px;">
      <a href="#" v-on:click="changePage('Last')" class="tagbtn">All</a>
        <a href="#" v-on:click="showGrouping('Q320')" class="tagbtn">Q320</a>
        <a href="#" v-on:click="showGrouping('Q420')"  class="tagbtn">Q420</a>
        <a href="#" v-on:click="showGrouping('Q121')"   class="tagbtn">Q121</a>
        <a href="#" v-on:click="showGrouping('Q221')"   class="tagbtn">Q221</a>
        <a href="#" v-on:click="showGrouping('Q321')" class="tagbtn">Q321</a>
        <a href="#" v-on:click="showGrouping('Q421')" class="tagbtn">Q421</a>
        <a href="#" v-show="showPreviousBtn" class="tagbtn" v-on:click="changePage('Previous')">Prev</a>
        <a href="#" v-show="showNextBtn" class="tagbtn" v-on:click="changePage('Next')" >Next</a>
        <br>
        <a href="#" v-on:click="showGrouping('zerotoone')" class="tagbtn">$0 to $1m</a>
        <a href="#" v-on:click="showGrouping('onetofive')"  class="tagbtn">$1m to $5m</a>
        <a href="#" v-on:click="showGrouping('fivetoten')"   class="tagbtn">$5m to $10m</a>
        <a href="#" v-on:click="showGrouping('tentotwenty')"  class="tagbtn">$10m to $20m</a>
        <a href="#" v-on:click="showGrouping('twentytofifty')" class="tagbtn">$20m to $50m</a>
        <a href="#" v-on:click="showGrouping('fiftytohundred')" class="tagbtn">$50m to $100m</a>
        <a href="#" v-on:click="showGrouping('hundredplus')" class="tagbtn">$100m plus</a>
        <br>
        <a href="#" v-on:click="showGrouping('latin')" class="tagbtn">Latin America</a>
        <a href="#" v-on:click="showGrouping('canada')"  class="tagbtn">Canada</a>
        <a href="#" v-on:click="showGrouping('south')"   class="tagbtn">South (US)</a>
        <a href="#" v-on:click="showGrouping('newengland')"  class="tagbtn">New England</a>
        <a href="#" v-on:click="showGrouping('southeast')" class="tagbtn">Southeast (US)</a>
        <a href="#" v-on:click="showGrouping('socal')" class="tagbtn">SoCal</a>
        <a href="#" v-on:click="showGrouping('silicon')" class="tagbtn">Silicon Valley</a>
        <a href="#" v-on:click="showGrouping('midwest')" class="tagbtn">Midwest (US)</a>
        <a href="#" v-on:click="showGrouping('midatlantic')" class="tagbtn">Mid-Atlantic</a>
        <a href="#" v-on:click="showGrouping('rocky')" class="tagbtn">Rocky Mountains</a>
        <a href="#" v-on:click="showGrouping('pacific')" class="tagbtn">Pacific Northwest (US)</a>
        <a href="#" v-on:click="showGrouping('southwest')" class="tagbtn">Southwest (US)</a>
        <a href="#" v-on:click="showGrouping('nyc')" class="tagbtn">NYC</a>
        <a href="#" v-on:click="showGrouping('me')" class="tagbtn">MiddleEast</a>
        <a href="#" v-on:click="showGrouping('oceania')" class="tagbtn">Oceania</a>
        <a href="#" v-on:click="showGrouping('carribean')" class="tagbtn">Carribean</a>
        <a href="#" v-on:click="showGrouping('asia')" class="tagbtn">Asia</a>
        <a href="#" v-on:click="showGrouping('europe')" class="tagbtn">Europe</a>
        <a href="#" v-on:click="showGrouping('africa')" class="tagbtn">Africa</a>
        <br>
      </div>
    </div>
  </div>

</div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  name: 'DataTempSearch',
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
  }

  },
computed: {
  ...mapState({
      activeTab: state => state.posts.activeDataTab,
   }),
    showPreviousBtn() {
        if (this.activeTab == 'Page')
        {
           return true;
        }
        else
        {
           return false;
        }
     },

     showNextBtn() {

        if (this.activeTab == 'Page' || (this.activeTab =='All'))
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
.top-menus {
    display: -webkit-box;
    -webkit-box-pack: center;
}
.text-field {
  text-align-last: center;
}
@media screen and (min-width:1600px) {
.search-div {
    display: inherit;
}
.w-col-8 {
    width: 80% !important;
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
  .text-field {
      width: 100%;
  }
  .w-col-8 {
    width: 100% !important;
  }
  #section-10{
    width: 100% !important;
    max-width: 600px;
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
.gardient-button {
  margin-top:10px;
  background: #4f81bd !important;
}
a {
  text-decoration: none !important;
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
  .text-field {
      -moz-text-align-last: center;
      text-align-last: center;
      max-width: 600px;
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
      margin: 0px !important;
}
h3, h2 {
  color: #4f81bd !important;
}
.tagbtn:active {
  background: #474747 !important;
}
</style>
