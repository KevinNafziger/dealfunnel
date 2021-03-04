<template>
  <div class="exespotbody">
    <center><h2> Country Spotlight: <span style="color:red"> Colombia</span> </h2></center><br>
  <div class="Fgrid">
<a
v-bind:key="dataList.id"
:href="`posts/${dataList.find(item => item.id === 608).id}`"
class="Gmodule"
style="display:flex;text-decoration:none;color:#14a0fd;">
 <div>

  <img :src="dataList.find(item => item.id === 608).logo_url">  </img>
    <h6> {{dataList.find(item => item.id === 608).title }} </h6>
    <hr>
     <p> {{ dataList.find(item => item.id === 608).interest.substring(0,148) + "..." }} </p>
   <!-- <p v-html="dataList[0].blog_entry"> </p> -->

 </div>
</a>
 <a
     v-bind:key="dataList.id"
     :href="`posts/${dataList.find(item => item.id === 529).id}`"
     class="Gmodule"
     style="display:flex;text-decoration:none;color:#14a0fd;"
   >
   <div>

    <img :src="dataList.find(item => item.id === 529).logo_url">  </img>
      <h6> {{ dataList.find(item => item.id === 529).title }} </h6>
       <!-- <p v-html="dataList[0].blog_entry"> </p> -->
       <hr>
        <p> {{ dataList.find(item => item.id === 529).interest.substring(0,150) + "..." }} </p>
   </div>
 </a>
 <a
   v-bind:key="dataList.id"
   :href="`posts/${dataList.find(item => item.id === 543).id}`"
   class="Gmodule"
   style="display:flex;text-decoration:none;color:#14a0fd;"
>
  <div>
   <img :src="dataList.find(item => item.id === 543).logo_url">  </img>
     <h6> {{ dataList.find(item => item.id === 543).title }} </h6>
     <hr>
      <p> {{ dataList.find(item => item.id === 543).interest.substring(0,165) + "..." }} </p>
    <!-- <p v-html="dataList[0].blog_entry"> </p> -->
  </div>
</a>
<a
v-bind:key="dataList.id"
:href="`posts/${dataList.find(item => item.id === 321).id}`"
class="Gmodule"
style="display:flex;text-decoration:none;color:#14a0fd;">
 <div>
  <img :src="dataList.find(item => item.id === 321).logo_url">  </img>
    <h6> {{ dataList.find(item => item.id === 321).title }} </h6>
    <hr>
     <p> {{ dataList.find(item => item.id === 321).interest.substring(0,145) + "..." }} </p>
   <!-- <p v-html="dataList[0].blog_entry"> </p> -->
 </div>
</a>
<a v-bind:key="dataList.id"
:href="`posts/${dataList.find(item => item.id === 864).id}`"
class="Gmodule"
style="display:flex;text-decoration:none;color:#14a0fd;">
 <div>

    <img v-bind:src="dataList.find(item => item.id === 864).logo_url">
    <h6> {{ dataList.find(item => item.id === 864).title }} </h6>
    <hr>
      <p> {{ dataList.find(item => item.id === 864).interest.substring(0,160) + "..."}} </p>
 </div>
</a>
<!-- End of Block -->
  </div>

  </div>
</template>

<script>

  import dataData from "@/data/data.json";

  export default {
    name: 'CountriesSpotlight',
    data() {
      return {
      dataList: dataData,
      }
    }
   }
</script>

<style scoped>
img {
  max-height: 100px;
  heigth: auto;
  width: 100px;
  margin:20px;
  border-radius: 20px;
}

h2 {
  color: #4f81bd;
}

.Gmodule p {
  color: #474747;
}

.Gmodule {
    background: white;
    display: inline-table;
    align-items: center;
    justify-content: center;
    height: 350px;
    padding: 15px;
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 25px -16px rgba(161,161,161,1);
    -moz-box-shadow: 0px 0px 25px -16px rgba(161,161,161,1);
    box-shadow: 0px 0px 25px -16px rgba(161,161,161,1);
    text-align: center;
    text-decoration: none;
    margin-left: 5px;
    margin-right: 5px;
    flex: 1 1 200px;
    margin: 0;
    color:#4f81bd !important;
}

.Gmodule:hover {
    background: #fbfbfb;
    -webkit-box-shadow: 0px 0px 35px -16px rgba(161,161,161,1);
    -moz-box-shadow: 0px 0px 35px -16px rgba(161,161,161,1);
    box-shadow: 0px 0px 35px -16px rgba(161,161,161,1);
}

.Fgrid {
    display: flex;
    flex-wrap: wrap;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-auto-rows: minmax(150px, auto);
    grid-gap: 3em;
    max-width: 1000px !important;
    width: 90%;
    margin-left:auto;
    margin-right:auto;
    margin-bottom: 50px;

}

.exespotbody {
  margin-top:100px;
  max-wdth: 1000px;
}

@media screen and (max-width:1400px) {
  .grid {
    max-width: 600px;
  }
}
</style>
