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


  <!--  <a v-for="(news,index) in newsList" v-bind:key="news.id" href="" class="module" style="display:flex;text-decoration:none;color:#14a0fd;">
      <div>
        <img  src="https://fintechapp.s3.us-east-2.amazonaws.com/y2qYjf8e2hp8z5yrgyfxF2NN?response-content-disposition=inline%3B%20filename%3D%22BoxLogo.png%22%3B%20filename%2A%3DUTF-8%27%27BoxLogo.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJG6DG75G7BXQ3XUA%2F20210115%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20210115T192217Z&X-Amz-Expires=518400&X-Amz-SignedHeaders=host&X-Amz-Signature=26b742c676a7fc0854c1efa0c81bf60e9239bc5068606262b3b1eab0f7a21245">
        <p> {{ news.description }} </p>
      </div>
    </a> -->

    <!-- single news Block for news -->
<!--   <a v-bind:key="newsList[0].id" class="module" style="display:flex;text-decoration:none;color:#14a0fd;">
     <div>
      <!-- <img  src="https://fintechapp.s3.us-east-2.amazonaws.com/y2qYjf8e2hp8z5yrgyfxF2NN?response-content-disposition=inline%3B%20filename%3D%22BoxLogo.png%22%3B%20filename%2A%3DUTF-8%27%27BoxLogo.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJG6DG75G7BXQ3XUA%2F20210115%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20210115T192217Z&X-Amz-Expires=518400&X-Amz-SignedHeaders=host&X-Amz-Signature=26b742c676a7fc0854c1efa0c81bf60e9239bc5068606262b3b1eab0f7a21245">
      -->
<!--      <p> {{ newsList[0].description }} </p>
     </div>
   </a>
   <!-- End of single news Block -->

   <!-- single news Block for comapnies-->
<!-- <a v-bind:key="companyList[0].id"  class="module" style="display:flex;text-decoration:none;color:#14a0fd;">
    <div>
    <!--  <img  src="https://fintechapp.s3.us-east-2.amazonaws.com/y2qYjf8e2hp8z5yrgyfxF2NN?response-content-disposition=inline%3B%20filename%3D%22BoxLogo.png%22%3B%20filename%2A%3DUTF-8%27%27BoxLogo.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJG6DG75G7BXQ3XUA%2F20210115%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20210115T192217Z&X-Amz-Expires=518400&X-Amz-SignedHeaders=host&X-Amz-Signature=26b742c676a7fc0854c1efa0c81bf60e9239bc5068606262b3b1eab0f7a21245">
    -->
  <!-- <h3> {{ companyList[0].name }} </h3> <br>
    <p> {{ companyList[0].description }} </p>
    </div>
  </a>
  <!-- End of single news Block -->

  <!-- single news Block for data-->
 <a
     v-bind:key="dataList[137].id"
     :href="`posts/${dataList[137].id}`"
     class="Gmodule"
     style="display:flex;text-decoration:none;color:#14a0fd;"
   >
   <div>
    <!-- <img  src="https://fintechapp.s3.us-east-2.amazonaws.com/y2qYjf8e2hp8z5yrgyfxF2NN?response-content-disposition=inline%3B%20filename%3D%22BoxLogo.png%22%3B%20filename%2A%3DUTF-8%27%27BoxLogo.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJG6DG75G7BXQ3XUA%2F20210115%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20210115T192217Z&X-Amz-Expires=518400&X-Amz-SignedHeaders=host&X-Amz-Signature=26b742c676a7fc0854c1efa0c81bf60e9239bc5068606262b3b1eab0f7a21245">
    -->
      <h6> {{ dataList[137].title }} </h6>
       <!-- <p v-html="dataList[0].blog_entry"> </p> -->
       <hr>
       <p> {{ dataList[137].author.name }} </p>
       <p> {{ dataList[137].author.title}} </p>
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
   <!-- <img  src="https://fintechapp.s3.us-east-2.amazonaws.com/y2qYjf8e2hp8z5yrgyfxF2NN?response-content-disposition=inline%3B%20filename%3D%22BoxLogo.png%22%3B%20filename%2A%3DUTF-8%27%27BoxLogo.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJG6DG75G7BXQ3XUA%2F20210115%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20210115T192217Z&X-Amz-Expires=518400&X-Amz-SignedHeaders=host&X-Amz-Signature=26b742c676a7fc0854c1efa0c81bf60e9239bc5068606262b3b1eab0f7a21245">
   -->
     <h6> {{ dataList[0].title }} </h6>
    <!-- <p v-html="dataList[0].blog_entry"> </p> -->
    <hr>
   <p> {{ dataList[0].author.name }} </p>
    <p> {{ dataList[0].author.title}} </p>
  </div>
</a>
<!-- End of single news Block -->
<!-- single news Block for data-->
<a
v-bind:key="dataList[13].id"
:href="`posts/${dataList[13].id}`"
class="Gmodule"
style="display:flex;text-decoration:none;color:#14a0fd;">
 <div>
  <!-- <img  src="https://fintechapp.s3.us-east-2.amazonaws.com/y2qYjf8e2hp8z5yrgyfxF2NN?response-content-disposition=inline%3B%20filename%3D%22BoxLogo.png%22%3B%20filename%2A%3DUTF-8%27%27BoxLogo.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJG6DG75G7BXQ3XUA%2F20210115%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20210115T192217Z&X-Amz-Expires=518400&X-Amz-SignedHeaders=host&X-Amz-Signature=26b742c676a7fc0854c1efa0c81bf60e9239bc5068606262b3b1eab0f7a21245">
  -->
    <h6> {{ dataList[13].title }} </h6>
    <hr>
   <!-- <p v-html="dataList[0].blog_entry"> </p> -->
  <p> {{ dataList[13].author.name }} </p>
   <p> {{ dataList[13].author.title}} </p>
 </div>
</a>
<!-- End of single news Block -->
<!-- single news Block for data-->
<a
v-bind:key="dataList[78].id"
:href="`posts/${dataList[78].id}`"
class="Gmodule"
style="display:flex;text-decoration:none;color:#14a0fd;">
 <div>
  <!-- <img  src="https://fintechapp.s3.us-east-2.amazonaws.com/y2qYjf8e2hp8z5yrgyfxF2NN?response-content-disposition=inline%3B%20filename%3D%22BoxLogo.png%22%3B%20filename%2A%3DUTF-8%27%27BoxLogo.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJG6DG75G7BXQ3XUA%2F20210115%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20210115T192217Z&X-Amz-Expires=518400&X-Amz-SignedHeaders=host&X-Amz-Signature=26b742c676a7fc0854c1efa0c81bf60e9239bc5068606262b3b1eab0f7a21245">
  -->
    <h6> {{ dataList[78].title }} </h6>
    <hr>
   <!-- <p v-html="dataList[0].blog_entry"> </p> -->
  <p> {{ dataList[78].author.name }} </p>
   <p> {{ dataList[78].author.title}} </p>
 </div>
</a>
<!-- End of single news Block -->
<!-- single news Block for data-->
<a v-bind:key="dataList[100].id"
:href="`posts/${dataList[100].id}`"
class="Gmodule"
style="display:flex;text-decoration:none;color:#14a0fd;">
 <div>
  <!-- <img  src="https://fintechapp.s3.us-east-2.amazonaws.com/y2qYjf8e2hp8z5yrgyfxF2NN?response-content-disposition=inline%3B%20filename%3D%22BoxLogo.png%22%3B%20filename%2A%3DUTF-8%27%27BoxLogo.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJG6DG75G7BXQ3XUA%2F20210115%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20210115T192217Z&X-Amz-Expires=518400&X-Amz-SignedHeaders=host&X-Amz-Signature=26b742c676a7fc0854c1efa0c81bf60e9239bc5068606262b3b1eab0f7a21245">
  -->
    <h6> {{ dataList[100].title }} </h6>
    <hr>
   <!-- <p v-html="dataList[0].blog_entry"> </p> -->
  <p> {{ dataList[100].author.name }} </p>
   <p> {{ dataList[100].author.title}} </p>
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
import newsData from "@/data/news.json";
import companyData from "@/data/company.json";
import dataData from "@/data/data.json";
export default {
  name: 'content',
  data() {
    return {
      newsList: newsData, // to avoid ambiguity in v-for
      companyList: companyData,
      dataList: dataData,
    }
  }
}
</script>
