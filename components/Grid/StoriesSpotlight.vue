<template>
  <div class="exespotbody">
    <center><h2> Stories Spotlight </h2></center><br>
  <div class="Fgrid">

 <!-- single news Block for data-->
<a
   v-bind:key="dataList[486].id"
   :href="`posts/${dataList[486].id}`"
   class="Gmodule"
   style="display:flex;text-decoration:none;color:#14a0fd;"
   >
   <div>
   <!-- <img  src="https://fintechapp.s3.us-east-2.amazonaws.com/y2qYjf8e2hp8z5yrgyfxF2NN?response-content-disposition=inline%3B%20filename%3D%22BoxLogo.png%22%3B%20filename%2A%3DUTF-8%27%27BoxLogo.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJG6DG75G7BXQ3XUA%2F20210115%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20210115T192217Z&X-Amz-Expires=518400&X-Amz-SignedHeaders=host&X-Amz-Signature=26b742c676a7fc0854c1efa0c81bf60e9239bc5068606262b3b1eab0f7a21245">
   -->
     <img :src="`{{ dataList[486].logo_url}}`">  </img>
     <h6> {{ dataList[486].title }} </h6>
     <!-- <p v-html="dataList[0].blog_entry"> </p> -->
     <hr>
     <p> {{ dataList[486].author.name }} </p>
     <p> {{ dataList[486].author.title}} </p>
    </div>
</a>
<!-- single news Block for data  END-->
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
