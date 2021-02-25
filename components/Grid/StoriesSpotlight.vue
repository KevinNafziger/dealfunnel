
<style scoped>
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
    <center><h2> Stories Spotlight </h2></center><br>
  <div class="Fgrid">

 <!-- story blocks start-->
<a
   v-bind:key="dataList.id"
   :href="`posts/${dataList.find(item => item.id === 321).id}`"
   class="Gmodule"
   style="display:flex;text-decoration:none;color:#14a0fd;"
   >
   <div>
   <!-- <img  src="https://fintechapp.s3.us-east-2.amazonaws.com/y2qYjf8e2hp8z5yrgyfxF2NN?response-content-disposition=inline%3B%20filename%3D%22BoxLogo.png%22%3B%20filename%2A%3DUTF-8%27%27BoxLogo.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJG6DG75G7BXQ3XUA%2F20210115%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20210115T192217Z&X-Amz-Expires=518400&X-Amz-SignedHeaders=host&X-Amz-Signature=26b742c676a7fc0854c1efa0c81bf60e9239bc5068606262b3b1eab0f7a21245">
   -->
     <img :src="dataList.find(item => item.id === 321).logo_url">  </img>
     <h6> {{ dataList.find(item => item.id === 321).title }} </h6>
     <hr>
     <p> {{ dataList.find(item => item.id === 321).fact.substring(0,150)}} </p>
     <!-- <p v-html="dataList[0].blog_entry"> </p> -->
    </div>
</a>
<a
   v-bind:key="dataList.id"
   :href="`posts/${dataList.find(item => item.id === 1169).id}`"
   class="Gmodule"
   style="display:flex;text-decoration:none;color:#14a0fd;"
   >
   <div>
   <!-- <img  src="https://fintechapp.s3.us-east-2.amazonaws.com/y2qYjf8e2hp8z5yrgyfxF2NN?response-content-disposition=inline%3B%20filename%3D%22BoxLogo.png%22%3B%20filename%2A%3DUTF-8%27%27BoxLogo.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJG6DG75G7BXQ3XUA%2F20210115%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20210115T192217Z&X-Amz-Expires=518400&X-Amz-SignedHeaders=host&X-Amz-Signature=26b742c676a7fc0854c1efa0c81bf60e9239bc5068606262b3b1eab0f7a21245">
   -->
     <img :src="dataList.find(item => item.id === 1169).logo_url">  </img>
     <h6> {{ dataList.find(item => item.id === 1169).title }} </h6>
     <hr>
     <p> {{ dataList.find(item => item.id === 1169).fact.substring(0,150)}} </p>
     <!-- <p v-html="dataList[0].blog_entry"> </p> -->
    </div>
</a>
<a
   v-bind:key="dataList.id"
   :href="`posts/${dataList.find(item => item.id === 1120).id}`"
   class="Gmodule"
   style="display:flex;text-decoration:none;color:#14a0fd;"
   >
   <div>
   <!-- <img  src="https://fintechapp.s3.us-east-2.amazonaws.com/y2qYjf8e2hp8z5yrgyfxF2NN?response-content-disposition=inline%3B%20filename%3D%22BoxLogo.png%22%3B%20filename%2A%3DUTF-8%27%27BoxLogo.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJG6DG75G7BXQ3XUA%2F20210115%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20210115T192217Z&X-Amz-Expires=518400&X-Amz-SignedHeaders=host&X-Amz-Signature=26b742c676a7fc0854c1efa0c81bf60e9239bc5068606262b3b1eab0f7a21245">
   -->
     <img :src="dataList.find(item => item.id === 1120).logo_url">  </img>
     <h6> {{ dataList.find(item => item.id === 1120).title }} </h6>
     <hr>
     <p> {{ dataList.find(item => item.id === 1120).fact.substring(0,150)}} </p>
     <!-- <p v-html="dataList[0].blog_entry"> </p> -->
    </div>
</a>
<a
   v-bind:key="dataList.id"
   :href="`posts/${dataList.find(item => item.id === 1561).id}`"
   class="Gmodule"
   style="display:flex;text-decoration:none;color:#14a0fd;"
   >
   <div>
   <!-- <img  src="https://fintechapp.s3.us-east-2.amazonaws.com/y2qYjf8e2hp8z5yrgyfxF2NN?response-content-disposition=inline%3B%20filename%3D%22BoxLogo.png%22%3B%20filename%2A%3DUTF-8%27%27BoxLogo.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJG6DG75G7BXQ3XUA%2F20210115%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20210115T192217Z&X-Amz-Expires=518400&X-Amz-SignedHeaders=host&X-Amz-Signature=26b742c676a7fc0854c1efa0c81bf60e9239bc5068606262b3b1eab0f7a21245">
   -->
     <img :src="dataList.find(item => item.id === 1561).logo_url">  </img>
     <h6> {{ dataList.find(item => item.id === 1561).title }} </h6>
     <hr>
     <p> {{ dataList.find(item => item.id === 1561).fact.substring(0,150)}} </p> 
     <!-- <p v-html="dataList[0].blog_entry"> </p> -->
    </div>
</a>
<!-- story blocks END-->


  </div>

  </div>
</template>

<script>
import dataData from "@/data/data.json";
export default {
  name: 'StoriesSpotlight',
  data() {
    return {
      dataList: dataData,
    }
  }
}
</script>
