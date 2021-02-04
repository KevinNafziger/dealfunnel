<template>
<div>

  <center>
    <div data-v-69296181="" id="top" class="sectionix"><div data-v-69296181="" class="title"><div data-v-69296181="" class="content"><br data-v-69296181="">
      <nuxt-link class="gardient-back-button" :to="to">
            &#8592; Back
        </nuxt-link>
      <h2 data-v-69296181="">Articles<i style="font-size: 13px; text-align:right; margin-left:3px;">{{ filterMessage }}</i></h2>

    </div></div></div>
  </center>

 <PostTempSearch> </PostTempSearch>

  <div class="posts-page">
       <PostList :posts="loadedPosts" :board="this.myboard" />
  </div>

</div>
</template>


<script>
import PostTempSearch from '@/components/Posts/PostTempSearch';
import PostList  from  '@/components/Posts/PostList';
import {mapState} from 'vuex';

export default {

  methods: {

   changePage: function(direction) {

       switch(direction) {

          case 'Previous':
             var page = this.numPage;
            this.$store.dispatch("posts/setView", "Articles");
             this.$store.dispatch("posts/goPrevious", page);
             break;

          case 'Next':
             var page = this.numPage;
            this.$store.dispatch("posts/setView", "Articles");
             this.$store.dispatch("posts/goNext", page);
             break;

          case 'Last':
            this.$store.dispatch("posts/setView", "Articles");
            this.$store.dispatch("posts/goLast");
           break;
       }

    },

    submitSearch(topic) {

      this.$store.dispatch("posts/setView", "Articles");
      this.$store.dispatch("posts/submitSearch", topic);
      this.$store.dispatch("posts/setSearchTab", topic);

   },

   changeBank: function(direction) {

       switch(direction) {

         case 'Previous':
            var page = this.bnkPage;
            this.$store.dispatch("posts/setView", "Articles");
            this.$store.dispatch("posts/setBankPrevious", page);
            break;

          case 'Next':
            var page = this.bnkPage;
            this.$store.dispatch("posts/setView", "Articles");
            this.$store.dispatch("posts/setBankNext", page);
            break;

         }
     },

    changeInsur: function(direction) {

       switch(direction) {

         case 'Previous':
            var page = this.insPage;
            this.$store.dispatch("posts/setView", "Articles");
            this.$store.dispatch("posts/setInsurPrevious", page);
            break;

          case 'Next':
            var page = this.insPage;
            this.$store.dispatch("posts/setView", "Articles");
            this.$store.dispatch("posts/setInsurNext", page);
            break;

         }
     },

     changeBlock: function(direction) {

       switch(direction) {

         case 'Previous':
            var page = this.blkPage;
            this.$store.dispatch("posts/setView", "Articles");
            this.$store.dispatch("posts/setBlockPrevious", page);
            break;

          case 'Next':
            var page = this.blkPage;
            this.$store.dispatch("posts/setView", "Articles");
            this.$store.dispatch("posts/setBlockNext", page);
            break;

        }
     },

   getbyCategory(category) {

    switch(category) {

      case 'Insurtech':
         this.$store.dispatch("posts/setView", "Articles");
         this.$store.dispatch("posts/setInsur");
         break;

      case 'Blockchain':
         this.$store.dispatch("posts/setView", "Articles");
         this.$store.dispatch("posts/setBlock");
         break;

      case 'Lending':
        this.$store.dispatch("posts/setView", "Articles");
         this.$store.dispatch("posts/setLend");
         break;

      case 'Payments':
         this.$store.dispatch("posts/setView", "Articles");
         this.$store.dispatch("posts/setPay");
         break;

      case 'Banking':
         this.$store.dispatch("posts/setView", "Articles");
         this.$store.dispatch("posts/setBank");
         break;
      case 'AI':
         this.$store.dispatch("posts/setView", "Articles");
         this.$store.dispatch("posts/setAI");
         break;

      case 'RegTech':
         this.$store.dispatch("posts/setView", "Articles");
         this.$store.dispatch("posts/setReg");
         break;

      case 'HealthTech':
         this.$store.dispatch("posts/setView", "Articles");
         this.$store.dispatch("posts/setHealth");
         break;

      case 'CapitalMarkets':
         this.$store.dispatch("posts/setView", "Articles");
         this.$store.dispatch("posts/setCapital");
         break;

      case 'RealEstate':
         this.$store.dispatch("posts/setView", "Articles");
         this.$store.dispatch("posts/setReal");
         break;

      case 'WealthTech':
         this.$store.dispatch("posts/setView", "Articles");
         this.$store.dispatch("posts/setWealth");
         break;

      case 'Mergers':
         this.$store.dispatch("posts/setView", "Articles");
         this.$store.dispatch("posts/setMergers");
         break;

      case 'Val':
         this.$store.dispatch("posts/setView", "Articles");
         this.$store.dispatch("posts/setVal");
         break;

      case 'Spin':
         this.$store.dispatch("posts/setView", "Articles");
         this.$store.dispatch("posts/setSpin");
         break;

      case 'Boot':
         this.$store.dispatch("posts/setView", "Articles");
         this.$store.dispatch("posts/setBoot");
         break;

      case 'Growth':
         this.$store.dispatch("posts/setView", "Articles");
         this.$store.dispatch("posts/setGrowth");
         break;

      case 'Advisors':
         this.$store.dispatch("posts/setView", "Articles");
         this.$store.dispatch("posts/setAdvisors");
         break;
      }
   }

  },

  computed: {
    to () {
        if (this.client || !this.$routerHistory || !this.$routerHistory.hasPrevious()) {
            // probably ssr, or hasn't navigated yet.
            return { path: '/' };
        }

        return { path: this.$routerHistory.previous().path };
    },
  ...mapState({
          starter: state => state.posts.post1,
          activeTab: state => state.posts.activeArtTab,
          myboard:   state => state.boards.myboard,
          activeArtInfo: state =>  state.posts.activeArtInfo,
          numPage: state => state.posts.numArtPage,
          first: state => state.posts.firstArtLoad,
          blkPage:  state => state.posts.blkArtPage,
          bnkPage:  state => state.posts.bnkArtPage,
          insPage:  state => state.posts.insArtPage,
   }),

   filterMessage() {

       if (this.activeTab == 'Page') {
        return this.activeTab + ' ' +  this.numPage;
      }

      else if (this.activeTab == 'Blockchain') {
        return this.activeTab + ' ' + 'page' + ' ' + this.blkPage;
      }

      else if (this.activeTab == 'Banking') {

        return this.activeTab + ' ' + 'page' + ' ' + this.bnkPage;

      }

      else if (this.activeTab == 'Insurtech') {

        return this.activeTab + ' ' + 'page' + ' ' + this.insPage;

      }

      else {

        return this.activeTab;
      }

    },

    loadedPosts() {

          return this.activeArtInfo;
    }

  },

  created() {

     this.$nuxt.$on("getCategory", (category) => this.getbyCategory(category));
     this.$nuxt.$on("changePage", (direction) => this.changePage(direction));
     this.$nuxt.$on("submitSearch", (topic) => this.submitSearch(topic));

     this.$nuxt.$on("changeInsur", (direction) => this.changeInsur(direction));
     this.$nuxt.$on("changeBlock", (direction) => this.changeBlock(direction));
     this.$nuxt.$on("changeBank", (direction) => this.changeBank(direction));
  },

  async fetch({store}) {

       store.dispatch("posts/setView", "Articles");
       await store.dispatch("posts/nuxtServerInit");

  },

}
</script>


<style>

a {
  box-shadow: none !important;
}
.search-div {
margin-bottom: 20px;
}
</style>

<style scoped>

.title {
    text-align: -webkit-center;
    margin-top: 20px;
    margin-bottom: 20px;
}
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
.datetag {
  border-radius: 3px !important;
  padding: 3px;
  color: #ffffff !important;
}
a:hover {
  text-decoration: none;
}
h2 {
  color: #4f81bd !important;
}
.content {
    background: #ffffffc7;
    padding-bottom: 10px;
    border-radius: 10px;
    box-shadow: 0px 0px 5px -4px;
    max-width: 1200px ;
    width:auto;
    margin-left: auto;
    margin-right: auto;
}
.content:hover {
  box-shadow: 0px 0px 8px -4px;
}

</style>
<style>
.search-bar-div {
      text-align: center;
      text-align-last: center;
}
@media screen and (max-width: 1300px){
  .tag-search-div {
      display: contents !important;
  }
  .search-div {
    display: table-row ;
  }
}
.tag-search-div {
  place-content: center;
  display: flex  ;
}
.search-div {
  text-align: -webkit-center!important;

}
.sumary {
  margin-top:20px;
}
.text-field {
  text-align: -webkit-center !important;
  text-align-last: center;
}
#button {
  width: 16% !important;
}
input.text-field {
      width: 20%;
}
.gardient-back-button {
    display: inline-flex;
    float:left;
    background-image: linear-gradient(200deg, #4F81BD 10%, #4F81BD 39%, #8ab4f8 80%);
    background-size: 400% 400% !important;
    animation: gradient 15s ease infinite !important;
    width: auto !important;
    margin-left: 20px !important;
    margin-right: auto !important;
    border-radius: 5px !important;
    border: none !important;
    padding: 5px 10px !important;
    font-family: poppins !important;
    color: #ffffff !important;
    font-size: 12px !important;
    transition: 0.3s;
    align-items: center;
    margin-top: 5px;
    margin-bottom: 20px;
    box-shadow: 0px 1px 10px -3px #474747 !important;
}
</style>
