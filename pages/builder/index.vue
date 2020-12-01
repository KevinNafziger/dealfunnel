
<template>

<div id="app">
<div data-v-50f93fd9="" class="title"><div data-v-50f93fd9="" class="content"><br data-v-50f93fd9=""> <h2 data-v-50f93fd9="">Builder</h2></div></div>
    <br><br>
<main class="flexbox">
       <div class="left-side">
         <h2> Report Content </h2>
         <br>
              <div class="heading-col-main">
            <h2 style="inline-block"> Articles <i style="font-size: 13px; text-align:right">{{ filterMessage }}</i></h2>
            </div>
           <Board id="board-2">
             <Searchbar/>
             <card v-for="post in posts" :id="post.id" :key="post.id" draggable="true" class="list-group-item">
                    <h3>  {{ post.title }} </h3>
                    <p>  {{ post.created_date}} {{post.author.name }} </p>
             </card>
        </Board>
  </div>

  <div class="right-side">

            <h2> Your Report </h2>

        <div class="builder-btns" >
         <button v-show="this.showModal" v-on:click="toggleModal()" class="gardient-button b-lr-s">
            <span class="mdi mdi-file-eye"></span>
            Close View
          </button>
          <br><br><br></div>
        <postsys :posts="items" :board="this.myboard" v-show="this.showModal">
        </postsys>

      <Board v-show="!this.showModal" :posts="posts" id="board-right" >
        <div class="builder-btns">
          <button v-on:click="toggleModal()" class="gardient-button b-lr-s">
            <span class="mdi mdi-file-eye"></span>
            View
          </button>

          <button v-on:click="generateReport()" class="gardient-button b-lr-s">
            <span class="mdi mdi-pdf-box"></span>
            PDF
          </button>
          </div>
           <card v-for="myboard in myboards" :id="myboard.id" :key="myboard.id" draggable="true" class="list-group-item">
              <h3>  {{ myboard.title }} </h3>
              <p>  {{myboard.created_date}} {{myboard.author.name }} </p>
          </card>
      </Board>
  </div>
  </main>
  <p class="alpha">DealFunnel 2020</p>
  </div>
</template>

<script>
import Vue from 'vue';
import Board from '@/components/Draggable/Board';
import Card from '@/components/Draggable/Card';
import postsys from '@/components/Builder/Postsys';
import draggable from 'vuedraggable';
import Vuetify from 'vuetify';
import {mapState, mapMutations} from 'vuex';
Vue.component('Card', Card);
Vue.component('Board', Board);

Vue.use(Vuetify);

export default {
  name: 'app',
  components: {
  Board,
   Card,
   draggable,
   Vuetify,
   postsys,
 },
 props: [],

 computed: {
  ...mapState({
      starterPosts: state => state.posts.pages[0],
      myboard: state => state.boards.myboard,
      showModal: state => state.boards.showModal,
      firstTimeLoaded: state => state.posts.firstTimeLoaded,
      activePostsInfo: state => state.posts.activePostsInfo,
      myboardArry: state => state.boards.myboardArry,
      myboards: state => state.boards.myboardArry,
      activeTab: state => state.posts.activeTab,
      numActivePage: state => state.posts.numActivePage,
   }),
   filterMessage() {
      if (this.firstTimeLoaded == true)
      {
      return ''
      }

      if (this.activeTab == 'Page')
      {
        return this.activeTab + ' ' + this.numActivePage;
      }
      else
      {
        return this.activeTab;
      }
    },
   posts() {
      if (this.firstTimeLoaded == true)
      {
        return this.starterPosts
      }
      else
      {
          return this.activePostsInfo;
      }
    },
    items()  {
      if (this.firstTimeLoaded == true)
      {
      return this.starterPosts
      }
      else if (this.myboardArry.length == 0)
      {
        return this.activePostsInfo;
      }
      else
      {
        return this.activePostsInfo.concat(this.myboards);
      }
    }
  },
  created()  {
     this.$nuxt.$on("addRight", (items) => this.addtoReportBoard(items));
     this.$nuxt.$on("getCategory", (category) => this.getCategory(category));
     this.$nuxt.$on("addRightArry", (item) => this.addtoBoardArry(item));
     this.$nuxt.$on("changePage", (direction) => this.changePage(direction));
     this.$nuxt.$on("submitSearch", (topic) => this.submitSearch(topic));
    },
  methods: {

  getCategory: function(category) {

    switch(category) {

      case 'Insurtech':
         this.$store.dispatch("posts/setInsur");
         break;
      case 'Blockchain':
         this.$store.dispatch("posts/setBlock");
         break;
      case 'Lending':
         this.$store.dispatch("posts/setLend");
         break;
      case 'Payments':
         this.$store.dispatch("posts/setPay");
         break;
      case 'Banking':
         this.$store.dispatch("posts/setBank");
         break;
      }
   },

   changePage: function(direction) {

       switch(direction) {
       case 'Previous':
         var page = this.numActivePage;
         page-- ;
         this.$store.dispatch("posts/goPrevious", page);
         break;
       case 'Next':
         var page = this.numActivePage;
         page++ ;
         this.$store.dispatch("posts/goNext", page);
         break;
       case 'Last':
         var page = this.numActivePage;
         this.$store.dispatch("posts/goLast", page);
         break;
       }
    },

   addtoReportBoard: function(index) {

      if (isNaN(index))
      {
      return
      }
      else
      {
      this.$store.dispatch("boards/updateBoard",index);
      }
   },

   submitSearch: function (topic) {
      this.$store.dispatch("posts/submitSearch", topic);
      this.$store.dispatch("posts/setSearchTab", topic);
   },

   addtoBoardArry: function(item) {
      var item = this.postFilter(item);
      this.$store.dispatch("boards/updateBoardArry", item);
   },

   generateReport: function() {
      window.open('https://fintechhorizonsmedia.com/showreports/view.pdf?idlist=' + this.myboard.toString() );
    },
   toggleModal() {
      this.$store.dispatch("boards/toggle")
  },
  postFilter(card_id) {
         return this.posts.find(post => post.id == card_id);
  },
  },
async fetch({store}) {
  await store.dispatch("posts/nuxtServerInit")
},
}
</script>

<style scoped>

h3, h2 {
  color: #4f81bd !important;
}
section {
  color: #ffffff !important;
}
a .gardient-button {
  margin-left: 10px;
  margin-right: 10px;
}

.b-lr-s {
  margin-left: 5px !important;
  margin-right: 5px !important;
}
.m-t {
  margin-top:100px;
}
.heading-col-main {
  width: 100%;
  text-align: center;
  place-content: center;
}
i.glyphicon {
  color: #ffffff !important;
  heigth: 50px !important;
}
.alpha {
  box-shadow: 0px 0px 7px -5px;
width: max-content;
padding: 5px;
margin: auto;
}
.board {
      box-shadow: #0dbdff00 0px 0px 1px 1px !important;
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
.title {
    text-align: -webkit-center;
}
h3 {
  color:#4f81bd !important;
}
h2 {
  color: #4f81bd !important;
}


.adminbtn:hover {
  box-shadow: lightblue 0px 0px 10px 0px !important;
}

.paragraph-3 {
  display: contents;
}

.comp-h {
  background: #ffffff;
  padding:10px;
  margin:10px;
  border-radius:10px;
}

.closebtn {
  background: none !important;
}

.sidenav {
  height: 100%;
  margin-top: 60px;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background: linear-gradient(-1645deg, #14a0fd, #02d0ff, #1491fd, #14a0fdd1) !important;
  animation: gradient 1s cubic-bezier(1, -0.19, 0.53, 1.61) infinite !important;
  overflow-x: hidden;
  background-size: 100% 900% !important;
  transition: 0.5s;
  padding-top: 60px;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #ffffff;
  display: block;
  transition: 0.3s;
}

.sidenav a:hover {
  color: #f1f1f1;
  background: linear-gradient(45deg, #ffffff26, transparent);
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

#sidemenu {
  transition: margin-left .5s;
  padding: 16px;
  margin-top:60px;
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}

.z-10:hover {
  opacity:0.5;
}

.grid .card {
  padding:30px !important;
  margin:0px;
}

  .container {
        display: contents;
  }

  .content {
    text-align:center;
  }

@media screen and (max-width:990){
     .exespotbody{
        display: table;
 }
}

.header{
margin-top:100px;
height:200px;
}

.footer {
 margin-top:200px;
}

.header, .footer {
 text-align:center;
 padding:auto;
 background-color: rgba(20, 160, 253, .82);
 background: rgba(20, 160, 253, .82);

}

.sectionix {
 height:auto;
 width:100%;

}

h1 {
 font-size: 40px;
}

p {
font-size: 20px;
margin-top:20px;
margin-bottom:20px;
}


.title {
  padding:5%;
 }

.right {
 float:right;
 padding:5%;
}

.left {
 float:left;
 padding:5%;
}

.ok {
width: 24.7% !important;
}

.hitri {
max-width: -webkit-fill-available;
 height: 400;
}

HTML CSSResult
.exespotlightsection {
  background-image:  url("https://filesforfintech.s3.amazonaws.com/images/insight+background.png") ;
background-repeat: round;
  background-size: cover;

}

.exespotbody {
margin: 0 auto;
max-width: 86em;
padding: 1em 0;
overflow: auto;
height: 400px;
}

.grid {
justify-content: center;
display: flex;
flex-wrap: wrap;
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
grid-auto-rows: minmax(150px, auto);
grid-gap: 1em;
}

.module:hover {
background:#fbfbfb;
-webkit-box-shadow: 0px 0px 35px -16px rgba(161,161,161,1);
-moz-box-shadow: 0px 0px 35px -16px rgba(161,161,161,1);
box-shadow: 0px 0px 35px -16px rgba(161,161,161,1);

}

.module {

background: white;
display: inline-table;
align-items: center;
justify-content: center;
height: 350px;
padding:15px;
border-radius: 10px;
-webkit-box-shadow: 0px 0px 25px -16px rgba(161,161,161,1);
-moz-box-shadow: 0px 0px 25px -16px rgba(161,161,161,1);
box-shadow: 0px 0px 25px -16px rgba(161,161,161,1);
text-align: center;
text-decoration: none;

/* Flex Fallback */
margin-left: 5px;
margin-right: 5px;
flex: 1 1 200px;
}


@supports (display: grid) {
.module {
  margin: 0;
}
}

    .flexbox {
    display:flex;
    justify-content:space-between;

    width: 100% !important;
    max-width: 100%;
    height: auto;

    overflow: hidden;

    margin: 0 auto;
    padding: 15px;

 }

     .white-space  {
       width:50px;
 }

     .board {

       width: 100%;
       max-width: -webkit-fill-available;
       margin: 10px;
       box-shadow: #0dbdff 0px 0px 1px 1px;

 }

     .flexbox .board {

       display: flex;
       flex-direction: column;

       border: 1px solid #ebebebeb;

       padding: 15px;

       border-radius:10px;

     }

     .flexbox .board .card {
       padding: 15px 25px;


       cursor: pointer;
       margin-bottom: 15px;

       border-radius:10px;

        background-color: #ffffff;
     }



     .bluebar {
         background-image: linear-gradient(200deg, #00a8ffd1 10%, #7460c5 39%, #02d0ff 80%);
         border-radius: 10px;
         height: 3;
         margin-left: auto;
         margin-right: auto;
         width: 100%;
     }

     .pinkbar {
        background-image: linear-gradient(200deg, #ff00d5d1 10%, #7460c5 39%, #b502ff 80%);
        border-radius: 10px;
         height: 3;
         margin-left: auto;
         margin-right: auto;
         width: 100%;
     }


     .graybar {
         background-image: linear-gradient(200deg, #b9c0c7 10%, #a9b5c7 39%, #b7bbbd 80%);
         border-radius: 10px;
         height: 3;
         margin-left: auto;
         margin-right: auto;
         width: 100%;
     }


    #app {
   font-family: Avenir, Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: #ffffff;
 }

 .card-holder {
   border-radius: 10px;

 }

.card:hover {
  box-shadow: 0px 0px 0px 2px #24a7ff !important;
  transition: box-shadow 0.5s;
  transition-timing-function: linear;
}

.card {
  box-shadow: none !important;
  background-color: transparent !important;
   color: gray;
}


.left-side {
  float:left;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  margin: 20px;
  overflow: auto;

}

.right-side {
  float:right;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  margin: 20px;
  overflow: auto;

}

 #board-right {
  min-height: 600px;
}


.admin-menu {

  background: linear-gradient(-35deg, #14a0fd, #02d0ff, #14a0fd, #14a0fdd1);
background-size: 400% 400%;
animation: gradient 5s ease infinite;
width: auto;
margin-left: auto;
margin-right: auto;
border-radius: 3px;
padding: 10px 20px;
font-family: poppins;
color: white;
font-size: 12px;

}

.b-menu {
  border: 1px solid #14a0fd;
padding: 5px;
font-family: poppins;
border-radius: 5px;
display: grid;
margin-right: auto;
    margin-left: auto;
    width: fit-content;
}

.b-menu:hover {
  box-shadow: 0px 0px 3px 0px gray;
  cursor: pointer;
}

.containers, section{
  background: #ffffff !important;
}

.containers:hover {
  box-shadow: 0px 0px 0px 2px #24a7ff !important;
  transition: box-shadow 0.5s;
  transition-timing-function: linear;
}

.square-container {
  border-radius:0px !important;
}

.round-container {
  border-radius:10px !important;
}
button {
  color: #4f81bd;
}
</style>
