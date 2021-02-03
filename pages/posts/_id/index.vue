
<template>
  <body>
   <div class="article-view-div"><br>
  <h1  class=' article-view-t' style='margin-bottom:60px; text-indent:-.1pt;
  line-height:109%;'><b><span v-if="!(post.title === undefined)" style='line-height:109%; margin-left: 3%; font-size:16pt;'>{{post.title }}</span></b></h1>
   <br>
   <span class="intro-p" style="display:inline-block;width:48%;text-align:justify;float:left;">
    <div  v-html="firsthalf(post)" ></div>
   </span>
   <span class="intro-p"  style="display:inline-block;width:48%; text-align:justify;float:right;">
    <div v-html="partofsecond(post)" ></div>

    <p v-if="!(post.logo_url==null)" class=MsoNormal style='margin-bottom:0in; margin-top:01in;'><img width=261 height=154
        id="Picture 389" :src="post.logo_url"></p>
   </span>
 </div>
</body>
</template>
<script>
import {mapState} from 'vuex';
export default {
  computed: {
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
.article-view-div{
  width: 90%;
  margin: auto;
  max-width: 1200px;
}
 .article-view-t {
   text-align:center;
 }
 .intro-p {
     padding: 20px;
     margin: auto;
     max-width: 671px;
     display: flow-root;
     color: #474747 ;
     line-height: 1.9;
     letter-spacing: 0.6px;
     transition: 1s;
 }

 @font-face
  {font-family:"Cambria Math";
  panose-1:2 4 5 3 5 4 6 3 2 4;}
@font-face
  {font-family:Calibri;
  panose-1:2 15 5 2 2 2 4 3 2 4;}
 /* Style Definitions */
 p.MsoNormal, li.MsoNormal, div.MsoNormal
  {margin-top:0in;
  margin-right:0in;
  margin-bottom:8.0pt;
  margin-left:0in;
  line-height:107%;
  font-size:11.0pt;
  font-family:"Calibri",sans-serif;
  color:black;}
.MsoChpDefault
  {font-family:"Calibri",sans-serif;}
.MsoPapDefault
  {margin-bottom:8.0pt;
  line-height:107%;}
 .WordSection1
  {size:8.5in 11.0in;
  margin:1.0in 76.85pt 1.0in 1.0in;}
div.WordSection1
  {page:WordSection1;}
@page WordSection2
  {size:8.5in 11.0in;
  margin:1.0in 76.85pt 1.0in 1.0in;}
div.WordSection2
  {page:WordSection2;}
 .WordSection3
  {size:8.5in 11.0in;
  margin:1.0in 76.85pt 1.0in 1.0in;}
div.WordSection3

@page WordSection4
  {size:8.5in 11.0in;
  margin:1.0in 76.85pt 1.0in 1.0in;}
div.WordSection4
  {page:WordSection4;}
@page WordSection5
  {size:8.5in 11.0in;
  margin:1.0in 76.85pt 1.0in 1.0in;}
div.WordSection5
  {page:WordSection5;}
@page WordSection6
  {size:8.5in 11.0in;
  margin:75.5pt 74.65pt 73.05pt 1.0in;}
div.WordSection6
  {page:WordSection6;}
@page WordSection7
  {size:8.5in 11.0in;
  margin:1.0in 1.0in 1.0in 1.0in;}
div.WordSection7
  {page:WordSection7;}
</style>
