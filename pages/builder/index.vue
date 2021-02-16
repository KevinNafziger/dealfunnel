
<template>
  <div>
      <div class="content">
        <h2 style="margin-top:20px;padding-top:10px;" >Builder</h2>
      <nuxt-link to="/tours/builderpreview">
        <tippy to="Buildpre">
        Builder Preview
      </tippy>
        <span name="Buildpre" class="mdi mdi-help"><br></span>
      </nuxt-link>
    </div>
    <main class="flexbox">


       <div class="left-side">
         <h2> Report Content </h2>
         <br>
            <div class="heading-col-main">
            <h2 style="inline-block"> Articles <i style="font-size: 13px; text-align:right">{{ filterMessage }}</i></h2>
            </div>
           <Board id="board-2">
             <center><Searchbar/></center>

             <card v-for="post in posts" :id="post.id" :key="post.id" draggable="true" class="list-group-item">
                    <h3>  {{ post.title }} </h3>
                    <p> <span class="date-tag"> {{ post.created_date}} </span> {{post.author.name }} </p>
             </card>

            </Board>
        </div>

        <div class="right-side">

            <h2> Your Report </h2>

           <div class="builder-btns" >
             <tippy to="externalTrigger">
         Click to close view
     </tippy>
            <button  v-show="this.showModal" v-on:click="toggleModal()" class="gardient-view-button b-lr-s">
              <span name="externalTrigger" class="mdi mdi-close"></span>
            </button>
          <br><br><br>


  </div>

          <postsys :posts="items" :board="this.myboard" v-show="this.showModal">
          </postsys>

          <Board v-show="!this.showModal" :posts="posts" id="board-right" >
            <div  class="builder-btns">
              <tippy to="Openview">
              Open PDf Preview
              </tippy>
              <button name="Openview" v-on:click="toggleModal()" class="gardient-view-button b-lr-s">
              <span class="mdi mdi-file-eye"></span>
              View
              </button>

              <tippy v-if="loggedIn" to="getPdf">
              Download pdf
              </tippy>
              <button v-if="loggedIn" name="getPdf" v-on:click="generateReport()" class="gardient-view-button b-lr-s">
              <span class="mdi mdi-pdf-box"></span>
              PDF
              </button>
               <nuxt-link class="gardient-view-button b-lr-s" v-else to="/login">  <span class="mdi mdi-pdf-box"></span>Login to create PDF</nuxt-link>
            </div>
             <card v-for="myboard in myboards" :id="myboard.id" :key="myboard.id" draggable="true" class="list-group-item">
                <h3>  {{ myboard.title }} </h3>
                <p>  <span class="date-tag"> {{ myboard.created_date}} </span> {{myboard.author.name }} </p>
            </card>
          </Board>
      </div>
  </main>
  <br>
</div>
</template>

<script>
import Vue from 'vue';
import Board from '@/components/Draggable/Board';
import Card from '@/components/Draggable/Card';
import postsys from '@/components/Builder/Postsys';
import Searchbar from '@/components/Builder/Searchbar';
import draggable from 'vuedraggable';
import { tippy } from "vue-tippy";
import VueSidebarMenu from 'vue-sidebar-menu'
import VueTippy, { TippyComponent } from "vue-tippy";
import {mapState, mapMutations} from 'vuex';
Vue.component('Card', Card);
Vue.component('Board', Board);
Vue.component("tippy", TippyComponent);
Vue.use(VueSidebarMenu);
//Vue.use(Vuetify);
Vue.use(VueTippy);

export default {
  name: 'app',
  components: {
  Board,
   Card,
   draggable,
   //Vuetify,
   postsys,
   Searchbar,
 },
 props: [
 ],

 computed: {

  ...mapState({
      starter: state => state.posts.post1,
      myboard: state => state.boards.myboard,
      showModal: state => state.boards.showModal,
      first: state => state.posts.firstBuildLoad,
      activeBuildInfo: state => state.posts.activeBuildInfo,
      myboardArry: state => state.boards.myboardArry,
      myboards: state => state.boards.myboardArry,
      activeTab: state => state.posts.activeBuildTab,
      activeView:  state => state.posts.activeView,
      numPage: state => state.posts.numBuildPage,
      blkPage:  state => state.posts.blkBuildPage,
      bnkPage:  state => state.posts.bnkBuildPage,
      insPage:  state => state.posts.insBuildPage,
      loggedIn: state => state.auth.loggedIn,
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

    posts() {
      if (this.first == true)
      {
        return this.starter
      }
      else
      {
        return this.activeBuildInfo;
      }
    },

    items()  {

        if (this.first == true) {

          return this.starter
        }

        else if (this.myboardArry.length == 0) {

          return this.activeBuildInfo;
        }

        else {

          return this.activeBuildInfo.concat(this.myboards);
        }
      }
  },
  created()  {

     this.$nuxt.$on("addRight", (items) => this.addtoReportBoard(items));
     this.$nuxt.$on("getCategory", (category) => this.getbyCategory(category));
     this.$nuxt.$on("addRightArry", (item) => this.addtoBoardArry(item));
     this.$nuxt.$on("changePage", (direction) => this.setPage(direction));
     this.$nuxt.$on("submitSearch", (topic) => this.submitSearch(topic));

      this.$nuxt.$on("changeInsur", (direction) => this.changeInsur(direction));
     this.$nuxt.$on("changeBlock", (direction) => this.changeBlock(direction));
     this.$nuxt.$on("changeBank", (direction) => this.changeBank(direction));

   },

  methods: {

    getbyCategory: function(category) {

      switch(category) {

        case 'Insurtech':
           this.$store.commit("posts/setView", "Builder");
           this.$store.dispatch("posts/setInsur");
           break;

        case 'Blockchain':
            this.$store.commit("posts/setView", "Builder");
            this.$store.dispatch("posts/setBlock");
            break;

        case 'Lending':
            this.$store.commit("posts/setView", "Builder");
            this.$store.dispatch("posts/setLend");
            break;

        case 'Payments':
            this.$store.commit("posts/setView", "Builder");
            this.$store.dispatch("posts/setPay");
            break;

        case 'Banking':
            this.$store.commit("posts/setView", "Builder");
            this.$store.dispatch("posts/setBank");
            break;

        }

    },

    changeBank: function(direction) {

       switch(direction) {

         case 'Previous':
            var page = this.bnkPage;
             this.$store.dispatch("posts/setView", "Builder");
            this.$store.dispatch("posts/setBankPrevious", page);
            break;

          case 'Next':
            var page = this.bnkPage;
            this.$store.dispatch("posts/setView", "Builder");
            this.$store.dispatch("posts/setBankNext", page);
            break;

         }
     },

    changeInsur: function(direction) {

       switch(direction) {

         case 'Previous':
            var page = this.insPage;
            this.$store.dispatch("posts/setView", "Builder");
            this.$store.dispatch("posts/setInsurPrevious", page);
            break;

          case 'Next':
            var page = this.insPage;
            this.$store.dispatch("posts/setView", "Builder");
            this.$store.dispatch("posts/setInsurNext", page);
            break;

         }
     },

     changeBlock: function(direction) {

       switch(direction) {

         case 'Previous':
            var page = this.blkPage;
            this.$store.dispatch("posts/setView", "Builder");
            this.$store.dispatch("posts/setBlockPrevious", page);
            break;

          case 'Next':
            var page = this.blkPage;
            this.$store.dispatch("posts/setView", "Builder");
            this.$store.dispatch("posts/setBlockNext", page);
            break;

        }
     },

    setPage: function(direction) {

       switch(direction) {

         case 'Previous':

            this.$store.commit("posts/setView", "Builder");
            this.$store.dispatch("posts/goPrevious");
            break;

          case 'Next':
            var page = this.numPage;
            this.$store.commit("posts/setView", "Builder");
            this.$store.dispatch("posts/goNext", page);
            break;

          case 'Last':
            this.$store.commit("posts/setView", "Builder");
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

        this.$store.commit("posts/setView", "Builder");
        this.$store.dispatch("posts/submitSearch", topic);
        this.$store.dispatch("posts/setSearchTab", topic);
     },

    addtoBoardArry: function(item) {

        var item = this.articleFilter(item);
        this.$store.dispatch("boards/updateBoardArry", item);
    },

    generateReport: function() {

        window.open('https://fintechhorizonsmedia.com/showreports/view.pdf?idlist=' + this.myboard.toString() );
    },

    toggleModal() {

        this.$store.dispatch("boards/toggle")
     },

    articleFilter(card_id) {

       return this.posts.find(post => post.id == card_id);
     },

     idlists: function(post_id) {

       for (var i = 0; i < this.myboard.length; i++) {

        if(this.myboard[i] == post_id) {
          return post_id;
        }
        return 0 ;
        }
    },

     postFilter: function(posts) {

       return this.posts.filter(post => post.id==this.idlists(post.id));
     }
  },

  async fetch({store}) {


    await store.dispatch("posts/setView", "Builder");
    await store.dispatch("posts/nuxtServerInit")

  },
}
</script>
<style>
ul, ol, .featuredsidemenu{
  padding: 0px !important;
}
.article-card {
  height: auto !important;
  width: 100%;
  margin: auto !important;
}
</style>

<style scoped>
img {
  width: auto !important;
}
h2 {
      text-align: -webkit-center;
}
.gardient-view-button {
    display: grid;
    background-image: linear-gradient(200deg, #4F81BD 10%, #4F81BD 39%, #8ab4f8 80%);
    background-size: 400% 400% !important;
    animation: gradient 15s ease infinite !important;
    width: fit-content !important;
    margin-left: auto !important;
    margin-right: auto !important;
    border-radius: 10px !important;
    border: none !important;
    padding: 10px 20px !important;
    font-family: poppins !important;
    color: #ffffff !important;
    font-size: 12px !important;
    transition: 0.3s;
    margin-top: 14px;
    margin-bottom: 10px;
    box-shadow: 0px 1px 10px -3px #474747 !important;
}
.builder-btns {
  display: inline-flex;
  text-align: center;
}
.date-tag {
  background: #69737b3d;
  border-radius: 3px;
  color: #4f81bd;
  margin-right:20px;
  padding:3px;
  font-weight: bold;
  font-size: 14px;
}
.builder-btns {
    align-self: center !important;
}
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
    box-shadow: 0px 0px 5px -3px gray !important;
    max-width: 1200px ;
    width:auto;
    margin-left: auto;
    margin-right: auto;
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
 .tag-search-div {
    display: block !important;
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
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 0px 12px -10px;
  height:500px;
}

.right-side {
  float:right;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  margin: 20px;
  overflow: auto;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 0px 12px -10px;
  height:500px;
}

 #board-right {
  min-height: 600px;
}

ul {
  width: auto;
  min-width:400px !important;
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
span.mdi.mdi-help {
    background: #4f81bd;
    color: #ffffff;
    border-radius: 3px;
    padding: 3px;
}
.round-container {
  border-radius:10px !important;
}
button {
  color: #4f81bd;
}
#board-right {
      margin-top: 0px;
}
</style>
