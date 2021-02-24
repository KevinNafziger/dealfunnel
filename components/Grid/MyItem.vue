<style>
img {
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
.exespotbody{
  margin-top:100px;
  max-wdth: 1000px;
}
@media screen and (max-width:1400px) {
  .grid {
    max-width: 600px;
  }
}
</style>

<template>
  <div class="exespotbody">
    <center><h2> Content Spotlight </h2></center><br>
  <div class="Fgrid">



  <!-- single news Block for data-->
 <a
     v-bind:key="dataList[124].id"
     :href="`posts/${dataList[124].id}`"
     class="Gmodule"
     style="display:flex;text-decoration:none;color:#14a0fd;"
   >
   <div>
  
    <img :src="dataList[124].logo_url">  </img>
      <h6> {{ dataList[124].title }} </h6>
       <!-- <p v-html="dataList[0].blog_entry"> </p> -->
       <hr>
   </div>
 </a>
 <!-- End of single news Block -->
 <!-- single news Block for data-->
 <a
   v-bind:key="dataList[0].id"
   :href="`posts/${dataList[0].id}`"
   class="Gmodule"
   style="display:flex;text-decoration:none;color:#14a0fd;"
>
  <div>

   <img :src="dataList[0].logo_url">  </img>
     <h6> {{ dataList[0].title }} </h6>
    <!-- <p v-html="dataList[0].blog_entry"> </p> -->
    <hr>

  </div>
</a>
<!-- End of single news Block -->
<!-- single news Block for data-->
<a
v-bind:key="dataList[1].id"
:href="`posts/${dataList[1].id}`"
class="Gmodule"
style="display:flex;text-decoration:none;color:#14a0fd;">
 <div>
  <img :src="dataList[1].logo_url">  </img>
    <h6> {{ dataList[1].title }} </h6>
    <hr>
   <!-- <p v-html="dataList[0].blog_entry"> </p> -->

 </div>
</a>
<!-- End of single news Block -->
<!-- single news Block for data-->
<a
v-bind:key="dataList[2].id"
:href="`posts/${dataList[2].id}`"
class="Gmodule"
style="display:flex;text-decoration:none;color:#14a0fd;">
 <div>
  
  <img :src="dataList[3].logo_url">  </img>
    <h6> {{ dataList[3].title }} </h6>
    <hr>
   <!-- <p v-html="dataList[0].blog_entry"> </p> -->

 </div>
</a>
<!-- End of single news Block -->
<!-- single news Block for data-->
<a v-bind:key="dataList[4].id"
:href="`posts/${dataList[4].id}`"
class="Gmodule"
style="display:flex;text-decoration:none;color:#14a0fd;">
 <div>

    <img v-bind:src="dataList[4].logo_url">
    <h6> {{ dataList[4].title }} </h6>
    <hr>
 


 </div>
</a>
<!-- End of single news Block -->

  <!--  <a class="module" style="display:flex;text-decoration:none;color:#14a0fd; ">
      <div>
        <img style="height:auto ;width:220px;" src="https://filesforfintech.s3.amazonaws.com/images/pig+sauce/1+Go+to+conference.png">
        <p> Events</p>
      </div>
    </a> -->
  </div>

  </div>
</template>

<script>
import dataData from "@/data/data.json";
export default {
  name: 'MyItem',
  data() {
    return {
      dataList: dataData,
    }
  }
}
</script>
