<template>
<div>

  <center>  <div data-v-69296181="" id="top" class="sectionix"><div data-v-69296181="" class="title"><div data-v-69296181="" class="content"><br data-v-69296181=""> <h2 data-v-69296181="">Articles<i style="font-size: 13px; text-align:right; margin-left:3px;">{{ filterMessage }}</i></h2></div></div></div></center>

    <PostTempSearch></PostTempSearch>

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
             var page = this.numForPage;
             page-- ; 
            this.$store.dispatch("posts/setView", "Articles");
             this.$store.dispatch("posts/goPrevious", page); 
             break; 
          case 'Next':        
             var page = this.numForPage;
             page++ ;
            this.$store.dispatch("posts/setView", "Articles");
             this.$store.dispatch("posts/goNext", page); 
             break;
          case 'Last':
            var page = this.numForPage;
            this.$store.dispatch("posts/setView", "Articles");
            this.$store.dispatch("posts/goLast", page); 
           break;
       }
    
    }, 

    submitSearch(topic) {

      this.$store.dispatch("posts/setView", "Articles");
      this.$store.dispatch("posts/submitSearch", topic);
      this.$store.dispatch("posts/setSearchTab", topic);
  
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
      }  
   }, 

},
computed: {

  ...mapState({
          starterPosts: state => state.posts.pages[0],
          activeTab: state => state.posts.activeArticleTab,
          myboard:   state => state.boards.myboard,
          activeArticlesInfo: state =>  state.posts.activeArticlesInfo,
          numForPage: state => state.posts.numArticlePage,
          firstArticleLoad: state => state.posts.firstArticleLoad,
   }),

      filterMessage() {
      
        if (this.firstArticleLoad == true) {

          return ''
        }
        if (this.activeTab == 'Page') {
          
          return this.activeTab + ' ' + this.numForPage;
        }
        else {

          return this.activeTab;
        }

      },

     loadedPosts() {
    
        if (this.firstArticleLoad == true) {

          return this.starterPosts
        }

        else {

          return this.activeArticlesInfo;
        
        }

      }
  },     
  
  created() {

     this.$nuxt.$on("getCategory", (category) => this.getbyCategory(category));
     this.$nuxt.$on("changePage", (direction) => this.changePage(direction));
     this.$nuxt.$on("submitSearch", (topic) => this.submitSearch(topic));
   },

async fetch({store}) 
  {
  await store.dispatch("posts/nuxtServerInit")
  
  },

} 

</script>

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
