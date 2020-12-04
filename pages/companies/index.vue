<template>
<div>
  <div data-v-69296181="" id="top" ><div data-v-69296181="" class="title"><div data-v-69296181="" class="content"><br data-v-69296181=""> <h2 data-v-69296181="">Companies
<i style="font-size: 13px; text-align:right; margin-left:3px;">{{ filterMessage}} </i>
  </h2></div></div></div>
<CompanyTempSearch></CompanyTempSearch>
<div class="draft-div">
    <table class="table-striped" width="100%">
        <thead class="fixed-head">
            <th>
          <strong><span class="mdi mdi-calendar"></span>
            <h3>Company</h3></strong>
          </th>
          <th colspan="2" class="participating-td">
            <strong><h3>About</h3></strong>
          </th>
          <th>
          <strong><span class="mdi mdi-cash-usd-outline"></span>
            <h3>Website</h3></strong>
          </th>
          <th>
            <strong><span class="mdi mdi-account-star"></span>
              <h3>City</h3></strong>
          </th>
          <th>
            <strong><span class="mdi mdi-account-multiple-plus"></span>
              <h3>Category</h3></strong>
          </th>
          <th>
            <strong><span class="mdi mdi-earth"></span><h3>Country</h3></strong>
          </th>
          <th>
            <strong><span class="mdi mdi-earth"></span><h3>Founded</h3></strong>
          </th>
        </thead>
      <tr style="margin-top:20px;" v-for="company in companies">
        <td>
            <nuxt-link :to="'/companies/' + company.id " class="gardient-button" > {{company.name}}  </nuxt-link>
        </td>
        <td colspan="2" >
          {{company.description}}
        </td>
        <td>
           <a :href="company.website"  target="_blank" style="color:#4286ff">  {{company.website}} </a>
        </td>
        <td>
           {{company.city}}
        </td>
        <td>
            {{company.category}}
        </td>
        <td>
          {{company.country}}
        </td>
        <td>
          {{company.founding_yr}}
        </td>
      </tr>
  </table>
  </div>
  </div>
</template>
<script>
import {mapState} from 'vuex';
import CompanyTempSearch from '@/components/Company/CompanyTempSearch';
export default {
  layout: 'raises',
  head: {
    title: 'Companies'
  },

methods: {

    getbyCategory: function(category) {

      switch(category) {

        case 'Insurtech':
           this.$store.dispatch("company/setInsur");
           break;
        case 'Blockchain':
            this.$store.dispatch("company/setBlock");
            break;
        case 'Lending':
            this.$store.dispatch("company/setLend");
            break;
        case 'Payments':
            this.$store.dispatch("company/setPay");
            break;
        }
    },

 },

  computed: {
  ...mapState({
      starter: state => state.company.US,
      firstLoad: state => state.company.firstLoad,
      activeInfo: state => state.company.activeInfo,
      activeTab: state => state.company.activeTab,
   }),

   filterMessage() {

      if (this.firstLoad == true)
      {
        return ''
      }
      else
      {
        return this.activeTab;
      }
    },

   companies() {

      if (this.firstLoad == true) {

        return this.starter;
      }

      else {
  
        return this.activeInfo;
      }
    }    
  
  },

  created() {

     this.$nuxt.$on("getCategory", (category) => this.getbyCategory(category));

   },

  async fetch({store}) {

    await store.dispatch("company/nuxtServerInit");

  },

};

</script>

<style  scoped>
tr:nth-child(odd) {background: #4f81bd14 !important}
.title {
    text-align: -webkit-center;
    margin-top: 20px;
    margin-bottom: 20px;
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

.participating-td {
  overflow:auto !important;
  max-width: 500px !important;
}

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

 td {
  padding: 3px !important;
}
.square2 .content {
display: table !important;
}
.mdi {
  color:white !important;
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
.table-t {
  box-shadow: 0px 0px 15px -7px skyblue !important;
}
.cash::after {
  content: ' $';
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

.gardient-button {
   background-image: linear-gradient(200deg, #ffffff 10%, #ffffff 39%, #ffffff 80%);
   background-size: 400% 400% !important;
   -webkit-animation: gradient 15s ease infinite !important;
   animation: gradient 15s ease infinite !important;
   width: -webkit-fit-content !important;
   width: -moz-fit-content !important;
   width: fit-content !important;
   margin-left: auto !important;
   margin-right: auto !important;
   margin-bottom: 20px !important;
   border-radius: 10px !important;
   border: none !important;
   padding: 10px 20px !important;
   font-family: poppins !important;
   color: #4f81bd !important;
   font-size: 12px !important;
 }
 .gardient-button:hover {
   box-shadow: 0px 0px 10px -5px gray;
 }
 .center-btn{
   text-align: -webkit-center;
   display: flex;
 }
 a {
   color:#4f81bd;
   font-weight: bold;
   text-decoration: none;
 }
  #myWebLinkTag {
    display: table !important;
    margin-top:10px;
  }
</style>
