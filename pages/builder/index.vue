
<template>

<div id="app">
  <div>
    <div data-v-69296181="" id="top" class="sectionix">
      <div data-v-69296181="" class="title"><div data-v-69296181="" class="content">
        <br data-v-69296181="">
      <h2 data-v-69296181="">Builder</h2></div></div></div>
</div>
    <br><br>
<main class="flexbox">
       <div class="left-side">
         <h2> Report Content </h2>
         <br>
            <Board id="board-2">
              <div class="heading-col-main">
            <h2 style="inline-block"> Articles </h2>
          </div>
      <!--  <draggable v-model="units" ghost-class="ghost" class="list-group" array="units" group="a" @start="drag=true">-->
  <!-- Here we can put in the json v-if loops -->
             <!--<card v-for="element in units":id="element.id" :key="element.id" draggable="true" class="list-group-item">
                    <h3> Title {{ element.title }} </h3>
                    <p> Date {{ element.created_date}} {{element.author.name}} </p>
             </card>-->
             <Card id="card-1" draggable="true">1</Card>
             <Card id="card-2" draggable="true">2</Card>
        </Board>
  </div>

  <div class="right-side">

            <h2> Your Report </h2>

        <div v-show="this.$root.showModal" class="builder-btns" >
         <button v-show="this.$root.showModal" v-on:click="setshowModal()" class="gardient-button b-lr-s">
            <span class="mdi mdi-file-eye"></span>
            Close View
          </button>
          <br><br><br></div><br>
        <!--<postys :posts="widgets" v-show="this.$root.showModal">
        </postys>-->

      <Board v-show="!(this.$root.showModal)" id="board-right" >
        <div class="builder-btns">
          <button v-on:click="setshowModal()" class="gardient-button b-lr-s">
            <span class="mdi mdi-file-eye"></span>
            View
          </button>
          <button href="/" class="gardient-button b-lr-s">
            <span class="mdi mdi-content-save"></span>
            Save
          </button>
          <button v-on:click="startReport()" class="gardient-button b-lr-s">
            <span class="mdi mdi-pdf-box"></span>
            PDF
          </button>
          </div>
        <br><br>
        <Card id="card-3" draggable="true">3</Card>
        <Card id="card-4" draggable="true">4</Card>
        <Card id="card-5" draggable="true">5</Card>
      </Board>
  </div>
  </main>
  <p class="alpha">Beta - Version 2020</p>
  </div>
</template>


<script>
import Vue from 'vue';
import Board from '@/components/Draggable/Board';
import Card from '@/components/Draggable/Card';
import draggable from 'vuedraggable';
import Vuetify from 'vuetify';

Vue.component('Card', Card);
Vue.component('Board', Board)

Vue.use(Vuetify);

export default {
  name: 'app',
  components: {
  Board,
   Card,
   draggable,
   Vuetify,
   },
    props: ["posts", "widgets", "totalRecords"],
    data () {
    return {
        searchMessage: "",
        propys: 1,
           newpostarry: [],
           FIRST_FETCH: 1,
           AFTER_FIRST_FETCH: 2,
        }
    },
  }
//created: function() {

//  window.eventBus.$on("refreshPosts", (items) => this.refreshPosts(items));

//},
//mounted: function() {

//  this.$root.allArticles = this.widgets; //set global article
//  this.$root.totalRecords = this.totalRecords;
//  this.$root.totalPages = this.totalRecords/50;


//},

 //methods: {
  //setshowModal() {
  //  switch (this.$root.showModal)
  //  {
  //    case false:
  //      this.$root.showModal= true;
  //      break;
  //    case true:
  //      this.$root.showModal= false;
  //      this.$root.showPDF = false;
  //      break;
  //  }
//},
//},
//}
//startReport() {
//    eventBus.$emit("reportGen");
//}
//}
//refreshPosts(fetchedItems) {

//    if (!(fetchedItems.length == 0))
//     {
//      for (var x = 0; x<fetchedItems.length; x++)
//      {

//        if (this.$root.allArticles.length < 5000)
//        {
//          this.$root.allArticles.push(fetchedItems[x]);
//        }

//      }
//    }



//    if (!(this.$root.boardEnd.length == 0))
//    {
//      this.newpostarry = this.postFilter(this.$root.allArticles);
      // start with only ones on right board, then add in left
//    }
//    else
//    {
//      this.newpostarry = [];  //when nothign on board right
//    }

//    if (!(fetchedItems.length == 0))
//    {
//      for (var x = 0; x<fetchedItems.length; x++)
//      {
//        this.newpostarry.push(fetchedItems[x]);
//      }
//        this.$root.resultsBlank = false;
//    }
//    else
//    {
      //nothing on board left
//       this.$root.resultsBlank = true;
//    }
//    this.$root.units = this.newpostarry; // set global
//    this.newpostarry = []; //set to blank again
//    this.propys = this.AFTER_FIRST_FETCH;  //= 2 toggle for fetch
//},
//idlists(post_id) {
//    for(var i = 0; i < this.$root.boardEnd.length; i++)
//    {
//      if(this.$root.boardEnd[i] == post_id)
//        return post_id;
//    }
//   return 0;
//},
//postFilter(posts) {
//  return this.posts.filter(post => post.id==this.idlists(post.id));
//},
//total: function() {

//  this.$root.totalRecords = this.totalRecords;
//  return this.totalRecords;
//},
//currentPageLessThanTotal: function() {

//  if (this.$root.currentPage < this.$root.TotalPages)
//  {
//    return true;
//  }
///  else
//  {
//    return false;
//  }

//},
//allStories: function() {
//    this.$root.allArticles = this.widgets; //set global article
//    return this.widgets;
//},
//totalPages: function() {
//   this.$root.totalPages = this.totalRecords/50 ;
//   return  this.$root.totalPages;
//}
//},
//computed: {
//units: function() {
//    if (this.propys == this.FIRST_FETCH)  //first fetch is 1
//     {
//        //set posts first time from controller
//         this.$root.units = this.posts;
//         return this.posts;
//     }
//    else
//    {
//      // after first time assign global
//      return this.$root.units;  //set from root variable w posts
//    }
//}

//},
//}
</script>

<style scoped>
h3 {
  color:#14a0fdd1 !important;
}
h2 {
  color: #606f8b !important;
}
section {
  color: #ffffff !important;
}
.builder-btns {

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
    margin-top: 20px;
    margin-bottom: 20px;
}
h3 {
  color:#14a0fdd1 !important;
}
h2 {
  color: #606f8b !important;
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

    width: 100%;
    max-width: 90%;
    height: 80vh;

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
   margin-top: 60px;
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
