<template>
<div>
  <div data-v-69296181="" id="top" ><div data-v-69296181="" class="title"><div data-v-69296181="" class="content"><br data-v-69296181=""> <h2 data-v-69296181="">Article Data</h2></div></div></div>
  <text class="headcomname">
    Article Data
  </text>
  <div class="excel-ico">
  <a href="https://fintechhorizonsmedia.com/fintechraises.xlsx"
  class="mdi-microsoft-excel mdi-24px excel-download-btn" style="color:dimgray" id="myExcelIcoTag">Excel</a>
  </div>
    <table class="table-striped" width="100%">
        <tbody class="table-t">
          <th>
          <strong><span class="mdi mdi-calendar"></span>
            <h3>Date</h3></strong>
          </th>
          <th>
            <strong><span class="mdi mdi-format-title"></span>
              <h3>Title</h3></strong>
          </th>
          <th>
          <strong><span class="mdi mdi-tag"></span>
            <h3>Next Raise</h3></strong>
          </th>
          <th>
            <strong><span class="mdi mdi-cash-usd-outline"></span>
              <h3>Exp. Amount</h3></strong>
          </th>
          <th>
            <strong><span class="mdi mdi-calendar-clock"></span>
              <h3>Exp. Timing</h3></strong>
          </th>
          <th colspan="2">
            <strong><span class="mdi mdi-shape-outline"></span>
              <h3>Categories</h3>
            </strong>
          </th>
          <th>
            <strong><span class="mdi mdi-city"></span>
              <h3>City</h3></strong>
          </th>
          <th>
            <strong><span class="mdi mdi-earth"></span>
              <h3>Country</h3></strong>
          </th>
           <th>
            <strong><span class="mdi mdi-earth-box"></span>
              <h3>Region</h3></strong>
          </th>
            <th>
            <strong><span class="mdi mdi-account-voice"></span>
              <h3>Advisors</h3></strong>
          </th>
          </tbody>


      <tr v-for="post in posts" style="margin-top:20px;">
        <td class="datetag">
         {{post.created_date}}
        </td>
        <td >
           {{post.title}}

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
export default {
  computed: {
    posts() {
      return this.$store.getters.loadedPosts
    }
  }
};
</script>

<style  scoped>
h2 {
    color: #4f81bd !important;
}
.participating-td {
  overflow:auto;
  max-width: 500px;
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
  td {
    color: #627082;
font-family: poppins;
font-weight: bold;
box-shadow: 1px 1px 1px 0px rgb(38 63 80 / 6%);
}
th:hover {
  background: #2196f3 !important;
}
tr {
  box-shadow: 0px 0px 1px 0px rgb(15 102 160 / 61%);
}
.table-striped {
  max-width:1550px;
  margin-left:auto !important;
  margin-right: auto !important;
}
.datetag {
  background: radial-gradient(circle, #3fb1fb 20%, #c755ff 340%) !important;
}
.table-t {
  box-shadow: 0px 0px 15px -7px skyblue;
}
h3 {
  font-size: 18px;
  font-variant-caps: all-petite-caps;
}
.mdi {
  color: #ffffff;
}

 </style>
