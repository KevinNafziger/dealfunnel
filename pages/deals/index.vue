<template>
<div>
  <div class="sectionix" id="top">
     <div class="title">
        <div class="content">
          <br>
           <h2>Deals</h2>
        </div>
     </div>
  </div>

  <a href="https://fintechhorizonsmedia.com/fintechdeals.xlsx"
  class="" style="color:dimgray" id="myExcelIcoTag">
  <div class="excel-ico">  </div>
  </a>


<div class="draft-div">

    <table class="table-striped" width="100%">

          <thead class="fixed-head">
            <th>
          <strong><span class="mdi mdi-calendar"></span>
            <h3>Date</h3></strong>
          </th>
          <th>
            <strong><span class="mdi mdi-domain" ></span>
              <h3>Target</h3></strong>
          </th>
          <th>
          <strong><span class="mdi mdi-cash-usd-outline"></span>
            <h3>Acquirer</h3></strong>
          </th>
          <th>
            <strong><span class="mdi mdi-account-star"></span>
              <h3>Category</h3></strong>
          </th>
          <th>
            <strong><span class="mdi mdi-account-multiple-plus"></span>
              <h3>City</h3></strong>
          </th>
           <th>
            <strong><span class="mdi mdi-earth"></span><h3>Country</h3></strong>
          </th>
        </thead>

<tbody class="table-scroll">
    <tr style="margin-top:20px;" v-for="deal in deals">

        <td class="datetag">
            {{deal.announce }}
        </td>
        <td >

        <div id="myCompanyTag" >
        <a :href="deal.sellurl">
        {{deal.sellname }}</a>
        </div>
        </td>
        <td>
            <div class="valuebtn">{{deal.buyname }}</div>
        </td>
        <td>
           {{ deal.price}}
        </td>
         <td class="participating-td">
{{ deal.sellgroup1}}/{{ deal.sellgroup2}}
        </td>
        <td>
          {{ deal.city}}
        </td>
        <td>
          {{ deal.sellcountry}}
        </td>
      </tr>

    </tbody>
  </table>
  </div>
  </div>
</template>
<script>
export default {
  layout: 'raises',
  asyncData(context) {
    return context.app.$axios.$get('/deals')
      .then(item => {
        return {
          deals: item
        }
      })
      .catch(e => context.error(e))
  },
  head: {
    title: 'Deals'
  }

};
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

.title {
    text-align: -webkit-center;
    margin-top: 20px;
    margin-bottom: 20px;
}
</style>
