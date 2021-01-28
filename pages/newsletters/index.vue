
<template>
<div style="padding-top:20px;">
<div data-v-31683ab5="" data-v-50f93fd9=""><div data-v-31683ab5="" data-v-50f93fd9="" class="content"><br data-v-31683ab5="" data-v-50f93fd9=""> <h2 data-v-31683ab5="" data-v-50f93fd9="">Newsletters</h2></div></div>


  <div class="posts-page">
       <LettersList :letters="letters" :board="letters" />
  </div>

</div>
</template>


<script>
import {mapState} from 'vuex';
import LettersList from '@/components/Letters/LettersList'
export default {

  computed: {
  ...mapState({
          allLetters: state =>  state.posts.newsletters,
    }),

    letters() {
          return this.allLetters;
    },

    letter() {

        return this.letters.find(l => l.id == this.$route.params.id)
    }
 },

 async fetch({store}) {
       store.dispatch("posts/setView", "Newsletters");
       await store.dispatch("posts/setNewsletters");
  },

}
</script>

<style scoped>
.art-rows {
  display: inline-flex !important;
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
