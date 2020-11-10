<template>
<div>
    <div data-v-50f93fd9="" class="title"><div data-v-50f93fd9="" class="content"><br data-v-50f93fd9=""> <h2 data-v-50f93fd9="">Raises</h2></div></div>
<div class="draft-div">
    <table class="table-striped" width="100%">
        <div class="fixed-head">
        <tbody class="table-t">
          <th>
          <strong><span class="mdi mdi-calendar"></span>
            <h3>Date</h3></strong>
          </th>
          <th>
            <strong><span class="mdi mdi-domain" ></span>
              <h3>Company</h3></strong>
          </th>
          <th>
          <strong><span class="mdi mdi-cash-usd-outline"></span>
            <h3>Amount</h3></strong>
          </th>
          <th>
            <strong><span class="mdi mdi-tag"></span>
              <h3>Type</h3></strong>
          </th>
          <th>
            <strong><span class="mdi mdi-account-star"></span>
              <h3>Lead</h3></strong>
          </th>
          <th>
            <strong><span class="mdi mdi-account-multiple-plus"></span>
              <h3>Particip..</h3></strong>
          </th>
          <th>
            <strong><span class="mdi mdi-city"></span>
              <h3>City</h3></strong>
          </th>
          <th>
            <strong><span class="mdi mdi-earth"></span><h3>Country</h3></strong>
          </th>
        </tbody>
        </div>
<tbody class="table-scroll">

    <ul v-for="raise in raises">
      <tr style="margin-top:20px;">
        <td class="datetag">
          {{ raise.item_date }}
        </td>
        <td >

                <div id="myCompanyTag" >
                {{ raise.company }}
                </div>
        </td>
        <td>
            <div class="valuebtn"> {{raise.amount}}</div>
        </td>
        <td>
           {{ raise.lead }}
        </td>
        <td>
            {{ raise.city}}
        </td>
         <td class="participating-td">

        </td>
        <td>
        </td>
        <td>
        </td>
      </tr>
      </ul>
    </tbody>
  </table>
  </div>
  </div>
</template>
<script>
export default {
  layout: 'raises',
  asyncData(context) {
    return context.app.$axios.$get('/raises')
      .then(data => {
        return {
          raises: data
        }
      })
      .catch(e => context.error(e))
  },
  head: {
    title: 'Raisest'
  }

};
</script>

 <style>
    .headcomname {
      margin-left:auto;
      margin-right:auto;
    }
    .table-header {
        height: 0px;
        display: table;
    }
     .square2 .content {
       display: table;
       position: absolute;
       overflow:auto;
     }
     .table-striped {
       box-shadow: 1px 1px 8px -5px grey;
     }
     /* elements as classes */
     tr, td {
       padding: 10px;
     }
     td {
       min-width: 80px;
       word-break: break-word;
     }
     tbody td:hover {
        box-shadow: 1px 1px 8px -5px grey;
        transition: 0.5s;
    }
     tr {
       background-color: #ffffff ;
       text-align: center;
       vertical-align: text-top;
       text-align-last: center;
     }
     tr:hover {
       box-shadow: 1px 1px 8px -5px grey;
     }
     tr a {
       color: dodgerblue !important;
     }
     th {
       border-bottom: outset #2877da30;
     }
      tbody {
            border-radius: 10px;
      }
      /* media screen queries */
      @media screen and (max-width: 1292px) {
         .w-row {
       width: min-content !important;
       display: contents !important;
      }
      h3 {
        font-weight:bold;
      }
     }
     .excel-download-btn {
         color: dimgray;
         position: fixed;
         margin-top: -88px;
         left: 10px;
         border-radius: 100%;
         padding: 5px;
         background-color: ffffff;
         box-shadow: 0px 0px 14px -7px grey;
         z-index: 9;
         width: 45px;
   }
    .datetag {
    background: radial-gradient(circle, #3fb1fb 20%, #c755ff 340%) !important;
    border-radius: 1px;
    display:;
}
td {
  padding: 3px;
}
.square2 .content {
display: table;
}
.mdi {
  color:white;
}
.participating-td {
  overflow:auto;
  max-width: 500px;
}
  td {
    color: #627082;
font-family: poppins;
font-weight: bold;
box-shadow: 1px 1px 1px 0px rgb(38 63 80 / 6%);
}
tr {
  box-shadow: 0px 0px 1px 0px rgb(15 102 160 / 61%);
}
.table-striped {
  max-width:1550px;
  margin-left:auto !important;
  margin-right: auto !important;
}
th:hover {
  background: #2196f3 !important;
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
  background: radial-gradient(circle, #3fb1fb 20%, #c755ff 340%) !important;
}
.table-t {
  box-shadow: 0px 0px 15px -7px skyblue;
}
.cash::after {
  content: ' $';
}
.valuebtn {
  font: message-box;
}
   .w-col .w-col {
    padding-left: 0;
    width: 100% !important;
    margin-bottom: 20px !important;
    padding-right: 0;
}
   a.link-10.hover.hover-3 {
    font-size: smaller;
}
   #megamenu3 {
     top:46px !important;
   }
   .postsssnavcomp, .w-dropdown-list, .Postcompdropmenu {
     border-radius: 10px !important;
   }

  .column-29, .list-item-9 {
     border-color: rgba(164, 219, 255, 0.45);
   }

   .featuredsidemenu:hover {
     box-shadow: 0 1px 5px 0 rgba(0, 89, 132, 0.16);
     overflow: hidden;
     border-radius:10px;
   }
h3 {
  font-size: 18px;
  font-variant-caps: all-petite-caps;
}
   h1 {
     text-align:center;
   }
h2 {
  color: #2fb7ff;
}
  @media screen and (max-width:1400px) {
    #examples{
      width:49% !important;
    }
  }
  .paragraph-19 {
    margin-top: 9px;
    height: 250px;
    color: #474747;
    overflow: auto;
}
  #examples {
   display: inline-flex;
   background-color: white;
   opacity: 0.95;
   margin: 0 auto;
   width: 24%;
   height: 530px;
   background: linear-gradient(45deg, #f7f9fb, white);
  }
  .btn-link:hover, .btn-link:focus {
  color: #23527c;
  text-decoration: underline;
  background-color: #2fb7ff !important;
}
.tl-c {
  margin-left: -7px;
  margin-top: 7px;
  font-family: poppins;
  position: fixed;
}
.f50 {
  width: 50%;
}
.heading-24 {
  min-height: 132px;
}
#examples .example .hover {
    display: inline-grid;
    margin-bottom:20px;
}
#myCompanyTag {
  font-weight: bold;
    font-style: normal;
}

.fixed-head {

}
 </style>
