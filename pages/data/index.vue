<template>
<div>

  <div data-v-69296181="" id="top" ><div data-v-69296181="" class="title"><div data-v-69296181="" class="content"><br data-v-69296181=""> <h2 data-v-69296181="">Article Data<i style="font-size: 13px; text-align:right; margin-left:3px;">{{ filterMessage }}</i></h2></div></div></div>
  <text class="headcomname">
    Article Data
  </text>
  <div class="top-menus">
  <Sidebar/>
<DataTempSearch/>
</div>
  <a href="https://fintechhorizonsmedia.com/fintechraises.xlsx"
   style="color:dimgray" id="myExcelIcoTag"><br>
   <center><span content="download excel report"
 v-tippy="{ placement : 'bottom' }" id="oki" class="mdi mdi-file-excel" style="margin:20px;font-size: 34px;"></span></center><br>
 </a>

    <table class="table-striped" width="100%">
        <tbody class="table-t">
          <th>
          <strong><span id="oki" class="mdi mdi-calendar"></span>
            <h3>Date</h3></strong>
          </th>
          <th>
            <strong><span id="oki" class="mdi mdi-format-title"></span>
              <h3>Title</h3></strong>
          </th>
          <th>
          <strong><span id="oki" class="mdi mdi-tag"></span>
            <h3>Next Raise</h3></strong>
          </th>
          <th>
            <strong><span id="oki" class="mdi mdi-cash-usd-outline"></span>
              <h3>Exp. Amount</h3></strong>
          </th>
          <th>
            <strong><span id="oki" class="mdi mdi-calendar-clock"></span>
              <h3>Exp. Timing</h3></strong>
          </th>
          <th colspan="2">
            <strong><span id="oki" class="mdi mdi-shape-outline"></span>
              <h3>Categories</h3>
            </strong>
          </th>
          <th>
            <strong><span id="oki" class="mdi mdi-city"></span>
              <h3>City</h3></strong>
          </th>
          <th>
            <strong><span id="oki" class="mdi mdi-earth"></span>
              <h3>Country</h3></strong>
          </th>
           <th>
            <strong><span id="oki" class="mdi mdi-earth-box"></span>
              <h3>Region</h3></strong>
          </th>
            <th>
            <strong><span id="oki" class="mdi mdi-account-voice"></span>
              <h3>Advisors</h3></strong>
          </th>
          </tbody>


      <tr v-for="post in posts" style="margin-top:20px;">
        <td class="datetag">
         {{post.created_date}}
        </td>
        <td >
        <nuxt-link id="myArticleLinkTag" :to="'/posts/' + post.id "  >{{post.title}}</nuxt-link>

        </td>
        <td>
            {{post.next_round}}
        </td>
        <td>
            {{ post.amount }}
        </td>
        <td>
            {{ post.quarter }}
        </td>
        <td colspan="2">
            {{post.grouping1 }}/ {{ post.grouping2 }}
        </td>
         <td>
            {{post.city }}
        </td>
        <td>
            {{ post.country }}
        </td>
        <td>
            {{ post.region }}
        </td>
        <td>
            {{post.advisors }}
        </td>
      </tr>
  </table>
</div>
</template>

<script>
import Vue from 'vue';
import Sidebar from '@/components/Sidebar/Sidebar';
Vue.component('Sidebar', Sidebar);
import {mapState} from 'vuex';
import DataTempSearch from '@/components/Data/DataTempSearch';

export default {

components: {
  Sidebar,
},

computed: {
  ...mapState({
          starter: state => state.posts.pages[0],
          firstDataLoad: state => state.posts.firstDataLoad,
          activeDataInfo:  state => state.posts.activeDataInfo,
          activeTab:  state => state.posts.activeDataTab,
          page: state => state.posts.dataPage,
   }),

   posts() {

     if (this.firstDataLoad)
     {

       return this.starter;
     }
     else {

        return this.activeDataInfo;

     }

   },

   filterMessage() {


          if (this.firstDataLoad) {

            return 'All'
          }
          else if (this.activeTab == 'Page') {

            return this.activeTab + ' ' + this.page;
          }
          else {

            return this.activeTab;
          }
      }

},

 methods: {

   getbyCategory(category) {

    this.sortBy =='';

    switch(category) {

      case 'Q320':
         this.$store.dispatch("posts/setView", "Data");
         this.$store.dispatch("posts/setQ320");
         break;

      case 'Q420':
         this.$store.dispatch("posts/setView", "Data");
         this.$store.dispatch("posts/setQ420");
         break;

      case 'Q121':
        this.$store.dispatch("posts/setView", "Data");
         this.$store.dispatch("posts/setQ121");
         break;

      case 'Q221':
         this.$store.dispatch("posts/setView", "Data");
         this.$store.dispatch("posts/setQ221");
         break;

      case 'Q321':
         this.$store.dispatch("posts/setView", "Data");
         this.$store.dispatch("posts/setQ321");
         break;

      case 'Q421':
         this.$store.dispatch("posts/setView", "Data");
         this.$store.dispatch("posts/setQ421");
         break;

      case 'zerotoone':
         this.$store.dispatch("posts/setView", "Data");
         this.$store.dispatch("posts/set0to1");
         break;

      case 'onetofive':
         this.$store.dispatch("posts/setView", "Data");
         this.$store.dispatch("posts/set1to5");
         break;

      case 'fivetoten':
        this.$store.dispatch("posts/setView", "Data");
        this.$store.dispatch("posts/set5to10");
         break;

      case 'tentotwenty':
         this.$store.dispatch("posts/setView", "Data");
         this.$store.dispatch("posts/set10to20");
         break;

      case 'twentytofifty':
         this.$store.dispatch("posts/setView", "Data");
         this.$store.dispatch("posts/set20to50");
         break;

      case 'fiftytohundred':
         this.$store.dispatch("posts/setView", "Data");
         this.$store.dispatch("posts/set50to100");
         break;

      case 'hundredplus':
         this.$store.dispatch("posts/setView", "Data");
         this.$store.dispatch("posts/set100plus");
         break;

      case 'latin':
         this.$store.dispatch("posts/setView", "Data");
         this.$store.dispatch("posts/setLatin");
         break;

      case 'canada':
         this.$store.dispatch("posts/setView", "Data");
         this.$store.dispatch("posts/setCanada");
         break;

      case 'south':
         this.$store.dispatch("posts/setView", "Data");
         this.$store.dispatch("posts/setSouth");
         break;

      case 'newengland':
         this.$store.dispatch("posts/setView", "Data");
         this.$store.dispatch("posts/setNewEngland");
         break;

      case 'southeast':
         this.$store.dispatch("posts/setView", "Data");
         this.$store.dispatch("posts/setSoutheast");
         break;

      case 'socal':
         this.$store.dispatch("posts/setView", "Data");
         this.$store.dispatch("posts/setSocal");
         break;

      case 'silicon':
         this.$store.dispatch("posts/setView", "Data");
         this.$store.dispatch("posts/setSilicon");
         break;

      case 'midwest':
         this.$store.dispatch("posts/setView", "Data");
         this.$store.dispatch("posts/setMidwest");
         break;

      case 'midatlantic':
         this.$store.dispatch("posts/setView", "Data");
         this.$store.dispatch("posts/setMidatlantic");
         break;

      case 'rocky':
         this.$store.dispatch("posts/setView", "Data");
         this.$store.dispatch("posts/setRocky");
         break;

      case 'pacific':
         this.$store.dispatch("posts/setView", "Data");
         this.$store.dispatch("posts/setPacific");
         break;

      case 'southwest':
         this.$store.dispatch("posts/setView", "Data");
         this.$store.dispatch("posts/setSouthwest");
         break;

      case 'nyc':
         this.$store.dispatch("posts/setView", "Data");
         this.$store.dispatch("posts/setNYC");
         break;

      case 'me':
         this.$store.dispatch("posts/setView", "Data");
         this.$store.dispatch("posts/setME");
         break;

      case 'oceania':
         this.$store.dispatch("posts/setView", "Data");
         this.$store.dispatch("posts/setOceania");
         break;

      case 'carribean':
         this.$store.dispatch("posts/setView", "Data");
         this.$store.dispatch("posts/setCarribean");
         break;

      case 'asia':
         this.$store.dispatch("posts/setView", "Data");
         this.$store.dispatch("posts/setAsia");
         break;

      case 'europe':
         this.$store.dispatch("posts/setView", "Data");
         this.$store.dispatch("posts/setEurope");
         break;

      case 'africa':
         this.$store.dispatch("posts/setView", "Data");
         this.$store.dispatch("posts/setAfrica");
         break;


      }
   },


    submitSearch(topic) {

      this.$store.dispatch("posts/setView", "Data");
      this.$store.dispatch("posts/submitSearch", topic);
      this.$store.dispatch("posts/setSearchTab", topic);

   },



   changePage: function(direction) {

       switch(direction) {

          case 'Previous':
            var page = this.page;
            this.$store.dispatch("posts/setView", "Data");
             this.$store.dispatch("posts/goPrevious", page);
             break;

          case 'Next':
             var page = this.page;
            this.$store.dispatch("posts/setView", "Data");
             this.$store.dispatch("posts/goNext", page);
             break;

          case 'Last':
              this.$store.dispatch("posts/setSearchTab", 'All');
            this.$store.dispatch("posts/setView", "Data");
            this.$store.dispatch("posts/goLast");
           break;
       }

    },


},
 created() {

     this.$nuxt.$on("getCategory", (category) => this.getbyCategory(category));
     this.$nuxt.$on("changePage", (direction) => this.changePage(direction));
      this.$nuxt.$on("submitSearch", (topic) => this.submitSearch(topic));

   },
async fetch({store}) {
  await store.dispatch("posts/nuxtServerInit")
},
}
</script>
<style  scoped>
a {
  box-shadow:none;
}
tr:nth-child(odd) {background: #4f81bd14 !important}
h2, .ptitle{
  color: #4f81bd !important;
}
    #myCompanyTag {
      width: 260px !important;
    }
    thead {
   text-align: -webkit-center !important;
}
    tr, td {
      padding: 10px !important;
    }
    td {
      min-width: 80px !important;
      word-break: break-word !important;
    }
    tbody td:hover {
       box-shadow: 1px 1px 8px -5px grey !important;
       transition: 0.5s !important;
   }
    tr {
      background-color: #ffffff !important;
      text-align: center !important;
      vertical-align: text-top !important;
      text-align-last: center !important;
    }
    tr:hover {
      box-shadow: 1px 1px 8px -5px grey !important;
    }
    tr a {
      color: dodgerblue !important;
    }
    th {
      border-bottom: outset #2877da30 !important;
    }
     tbody {
           border-radius: 10px !important;
     }
     /* media screen queries */
     @media screen and (max-width: 1292px) {
        .w-row {
      width: min-content !important;
      display: contents !important;
     }
     h3 {
       font-weight:bold !important;
     }
    }
    .excel-download-btn {
        color: dimgray !important;
        position: fixed !important;
        margin-top: -88px !important;
        left: 10px !important;
        border-radius: 100% !important;
        padding: 5px !important;
        background-color: #ffffff !important;
        box-shadow: 0px 0px 14px -7px grey !important;
        z-index: 9 !important;
        width: 45px !important;
  }
  .valuebtn{
    width: 240px !important;
  }
   .datetag {
   background: radial-gradient(circle, #3fb1fb 20%, #c755ff 340%) !important;
   border-radius: 1px !important;
   width: 130px !important;
}
td {
 padding: 3px !important;
}
.square2 .content {
display: table !important;
}
.mdi {
 color:white !important;
}
.participating-td {
 overflow:auto !important;
 max-width: 500px !important;
}
 td {
   color: #627082 !important;
   font-family: poppins !important;
   box-shadow: 1px 1px 1px 0px rgb(38 63 80 / 6%) !important;
}
tr {
 box-shadow: 0px 0px 1px 0px rgb(15 102 160 / 61%) !important;
}
.table-striped {
 max-width:1550px !important;
 margin-left:auto !important;
 margin-right: auto !important;
}
table {
     box-shadow: 0px 0px 10px -9px black;
}
table .table-t tr{
 background: #2196f3 !important;
 color: #ffffff;
}
table .table-t tr h3{
 color: #ffffff !important;
}
table .table-t tr:hover{
 background: #2196f3 !important;
 color: #ffffff;
}
table .table-t tr h3:hover{
 color: #ffffff !important;
}
.datetag {
 background: radial-gradient(circle,#4f81bd 20%,#5d86b7 340%)!important;
 color: #ffffff !important;
}
.table-t {
 box-shadow: 0px 0px 15px -7px skyblue !important;
}
.cash::after {
 content: ' $';
}
.valuebtn {
 font: message-box !important;
}
  .w-col .w-col {
   padding-left: 0 !important;
   width: 100% !important;
   margin-bottom: 20px !important;
   padding-right: 0 !important;
}
  a.link-10.hover.hover-3 {
   font-size: smaller !important;
}
  #megamenu3 {
    top:46px !important;
  }
  .postsssnavcomp, .w-dropdown-list, .Postcompdropmenu {
    border-radius: 10px !important;
  }

 .column-29, .list-item-9 {
    border-color: rgba(164, 219, 255, 0.45) !important;
  }

  .featuredsidemenu:hover {
    box-shadow: 0 1px 5px 0 rgba(0, 89, 132, 0.16) !important;
    overflow: hidden !important;
    border-radius:10px !important;
  }
h3 {
 font-size: 18px !important;
 font-variant-caps: all-petite-caps !important;
}
  h1 {
    text-align:center !important;
  }

 @media screen and (max-width:1400px) {
   #examples{
     width:49% !important;
   }
 }
 .paragraph-19 {
   margin-top: 9px !important;
   height: 250px !important;
   color: #474747 !important;
   overflow: auto !important;
}
 #examples {
  display: inline-flex !important;
  background-color: white !important;
  opacity: 0.95 !important;
  margin: 0 auto !important;
  width: 24% !important;
  height: 530px !important;
  background: linear-gradient(45deg, #f7f9fb, white) !important;
 }
 .btn-link:hover, .btn-link:focus {
 color: #23527c !important;
 text-decoration: underline !important;
 background-color: #2fb7ff !important;
}
.tl-c {
 margin-left: -7px !important;
 margin-top: 7px !important;
 font-family: poppins !important;
 position: fixed !important;
}
.f50 {
 width: 50% !important;
}
.heading-24 {
 min-height: 132px !important;
}
#examples .example .hover {
   display: inline-grid !important;
   margin-bottom: 20px !important;
}
#myCompanyTag {
   font-style: normal !important;
}

.fixed-head {
 padding: 20px !important;
     width: 100% !important;
}
ol, ul, dl {
   margin-top: 0 !important;
   margin-bottom: 1rem !important;
   display: inherit !important;
}

#oki {
  color: dimgray !important;
  margin:20px;
}

.excel-ico {
       background-image: url("https://filesforfintech.s3.amazonaws.com/images/web+design+graphics/pngbarn.png")  !important;
       width: 30px !important;
       padding: 30px !important;
       background-repeat: no-repeat !important;
       margin: 20px !important;
       background-size: contain !important;
       margin-left: auto !important;
       margin-right: auto !important;
       background-position: center !important;
       height: fit-content !important;
       display: block !important;
       float: left;
   }
.square2 .content {
display: table;
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
.top-menus {
      display: -webkit-box;
}
.title {
   text-align: -webkit-center;
   margin-top: 20px;
   margin-bottom: 20px;
}
</style>
