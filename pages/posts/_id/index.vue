
<template>
  <body>
   <div class="article-view-div"><br>
     <center><nuxt-link class="gardient-back-button" :to="to">
           &#8592; Back
       </nuxt-link></center>
  <h1  class=' article-view-t' style='margin-bottom:60px; text-indent:-.1pt;
  line-height:109%;'><b><span v-if="!(post.title === undefined)" style='line-height:109%; margin-left: 3%; font-size:16pt;'>{{post.title }}</span></b></h1>
   <br>
   <span class="intro-p" style="display:inline-block;width:48%;text-align:justify;float:left;">
    <div  v-html="firsthalf(post)" ></div>
   </span>
   <span class="intro-p"  style="display:inline-block;width:48%; text-align:justify;float:right;">
    <div v-html="partofsecond(post)" ></div>

    <p v-if="!(post.logo_url==null)" style='margin-bottom:0in; margin-top:01in;'><img width=261 height=154
        id="Picture 389" :src="post.logo_url"></p>
   </span>
 </div>
</body>
</template>
<script>
import {mapState} from 'vuex';
export default {
  computed: {
    to () {
        if (this.client || !this.$routerHistory || !this.$routerHistory.hasPrevious()) {
            if (this.activeView =="Articles") {
                return { path: '/posts' };
            }
            else if (this.activeView =="Data"){
                  return { path: '/data' };
            }   
        }

        return { path: this.$routerHistory.previous().path };
    },
  ...mapState({

          activeArtInfo: state =>  state.posts.activeArtInfo,
          activeView:  state => state.posts.activeView,
          activeDataInfo: state => state.posts.activeDataInfo,
          allPosts: state => state.posts.allPosts,
   }),
    posts() {

        if (this.allPosts) {
            return this.allPosts
        }

        else if (this.activeView == "Data") {
             return this.activeDataInfo;
        }

        else {
             return this.activeArtInfo;
         }

    },
    post() {

        return this.posts.find(p => p.id == this.$route.params.id)
    }
 },

    methods:  {
    firsthalf(item) {

      var added_string = this.secondhalf(item).indexOf('/p>');
      return item.blog_entry.slice(0, (item.blog_entry.length /2) + added_string + 3 );

    },

    secondhalf(tree) {

      return tree.blog_entry.slice(tree.blog_entry.length /2,tree.blog_entry.length);

    },

    partofsecond(tree) {

      var added_string = this.secondhalf(tree).indexOf('/p>');
      return tree.blog_entry.slice(tree.blog_entry.length /2 + added_string + 4,tree.blog_entry.length);

    }

  },


};
</script>

<style scoped>
.gardient-back-button {
    display: inline-flex;
    background-image: linear-gradient(200deg, #4F81BD 10%, #4F81BD 39%, #8ab4f8 80%);
    background-size: 400% 400% !important;
    animation: gradient 15s ease infinite !important;
    width: auto !important;
    margin-left: auto !important;
    margin-right: auto !important;
    border-radius: 10px !important;
    border: none !important;
    padding: 5px 10px !important;
    font-family: poppins !important;
    color: #ffffff !important;
    font-size: 9px !important;
    transition: 0.3s;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 16px !important;
    box-shadow: 0px 1px 10px -3px #474747 !important;
}
.article-view-div{
  width: 90%;
  margin: auto;
  max-width: 1200px;
  color: #4f81bd;
}
 .article-view-t {
   text-align:center;
 }
  .intro-p{
     padding: 20px;
     margin: auto;
     max-width: 671px;
     display: flow-root;
     line-height: 1.9;
     letter-spacing: 0.6px;
     transition: 1s;
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
