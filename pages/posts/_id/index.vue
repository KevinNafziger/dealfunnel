
<template>
<div>
<div class="WordSection1">

<p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5pt;text-indent:-.5pt;line-height:109%'><span style='font-size:
22.0pt;line-height:109%'></span></p>

</div>

<span style='font-size:22.0pt;line-height:109%;font-family:"Calibri",sans-serif;
color:black'><br clear=all style='page-break-before:auto'>
</span>

<div class="MsoNormal"
 style="margin-right:5%;margin-bottom:15%;
margin-left:5%;line-height:109%;">


  <p  class='MsoNormal' style='margin-top:70px;margin-bottom:60px; text-indent:-.1pt;
  line-height:109%;'><b><span  " style='line-height:109%; margin-left: 3%; font-size:16pt;'>{{post.title }}</span></b></p>

   <span style="display:inline-block;width:45%;text-align:center;float:left; margin:1%;">  
    <div v-html="firsthalf(post)" ></div>
   </span>
   <span style="display:inline-block;width:45%; text-align:center;float:right; margin:1%;">  
    <div v-html="partofsecond(post)" ></div>
    <p v-if="!(post.logo_url==null)" class=MsoNormal style='margin-bottom:0in; margin-top:01in;'><img width=261 height=154
        id="Picture 389" :src="post.logo_url"></p>
   </span>
 </div>
<section style="margin-bottom:100px;"></section>

</div>
</template>
<script>
import {mapState} from 'vuex';
export default {
  computed: {
  ...mapState({
          starterposts: state => state.posts.pages[0],
          activeArticlesInfo: state =>  state.posts.activeArticlesInfo,
          firstArticleLoad: state => state.posts.firstArticleLoad,
   }),
    posts() {

        if (this.firstArticleLoad == true) {

          return this.starterPosts
        }

        else {

          return this.activeArticlesInfo;
        
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