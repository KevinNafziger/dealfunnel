
<style scoped>
img {
  heigth: auto;
  max-height: 100px;
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
.card--1 .card__img, .card--1 .card__img--hover {
    }

.card--2 .card__img, .card--2 .card__img--hover {
}

.card__clock {
    width: 15px;
  vertical-align: middle;
    fill: #AD7D52;
    color: #474747;
    padding: 0px !important;
}
.card__time {
    font-size: 12px;
    color: #AD7D52;
    vertical-align: middle;
    margin-left: 5px;
}

.card__clock-info {
    float: right;
    background: #0000001f;
    border-radius: 5px;
}

.card__img {
  visibility: hidden;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 235px;
  border-top-left-radius: 12px;
border-top-right-radius: 12px;

}

.card__info-hover {
    position: absolute;
    padding: 16px;
  width: 100%;
  opacity: 0;
  top: 0;
}

.card__img--hover {
  transition: 0.2s all ease-out;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
  position: absolute;
    height: 235px;
  border-top-left-radius: 12px;
border-top-right-radius: 12px;
top: 0;

}
.card {
  transition: all .4s cubic-bezier(0.175, 0.885, 0, 1);
  background-color: #fff;
    width: 33.3%;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 13px 10px -7px rgba(0, 0, 0,0.1);
}
.card:hover {
  box-shadow: 0px 30px 18px -8px rgba(0, 0, 0,0.1);
    transform: scale(1.05, 1.05);
}

.card__info {
z-index: 2;
  background-color: #fff;
  border-bottom-left-radius: 12px;
border-bottom-right-radius: 12px;
   padding: 16px 24px 24px 24px;
}

.card__category {
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    font-size: 13px;
    letter-spacing: 2px;
    font-weight: 500;
  color: #868686;
}

.card__title {
    margin-top: 5px;
    margin-bottom: 10px;
    font-family: 'Roboto sans', serif;
}

.card__by {
    font-size: 12px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
}

.card__author {
    font-weight: 600;
    text-decoration: none;
    color: #4f81bd;
}

.card:hover .card__img--hover {
    height: 100%;
    opacity: 0.3;
}

.card:hover .card__info {
    background-color: transparent;
    position: relative;
}

.card:hover .card__info-hover {
    opacity: 1;
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
    <center><h2> Company Spotlight </h2></center><br>
  <div class="Fgrid">

 <!-- story blocks start-->
<a
   v-bind:key="dataList.id"
   :href="`posts/${dataList.find(item => item.id === 815).id}`"
   class="Gmodule card card--1"
   style="display:flex;text-decoration:none;color:#14a0fd;"
   >
   <div class="card_category card_info">
   <!-- <img  src="https://fintechapp.s3.us-east-2.amazonaws.com/y2qYjf8e2hp8z5yrgyfxF2NN?response-content-disposition=inline%3B%20filename%3D%22BoxLogo.png%22%3B%20filename%2A%3DUTF-8%27%27BoxLogo.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJG6DG75G7BXQ3XUA%2F20210115%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20210115T192217Z&X-Amz-Expires=518400&X-Amz-SignedHeaders=host&X-Amz-Signature=26b742c676a7fc0854c1efa0c81bf60e9239bc5068606262b3b1eab0f7a21245">
   -->
     <img :src="dataList.find(item => item.id === 815).logo_url">  </img>
     <h6 class="card__title"> {{ dataList.find(item => item.id === 815).title }}</h6>
     <hr>

    </div>
</a>
<a
   v-bind:key="dataList.id"
   :href="`posts/${dataList.find(item => item.id === 1120).id}`"
   class="Gmodule card card--1"
   style="display:flex;text-decoration:none;
   color:#14a0fd;"
   >
   <div class="card_category card_info">
   <!-- <img  src="https://fintechapp.s3.us-east-2.amazonaws.com/y2qYjf8e2hp8z5yrgyfxF2NN?response-content-disposition=inline%3B%20filename%3D%22BoxLogo.png%22%3B%20filename%2A%3DUTF-8%27%27BoxLogo.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJG6DG75G7BXQ3XUA%2F20210115%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20210115T192217Z&X-Amz-Expires=518400&X-Amz-SignedHeaders=host&X-Amz-Signature=26b742c676a7fc0854c1efa0c81bf60e9239bc5068606262b3b1eab0f7a21245">
   -->
     <img :src="dataList.find(item => item.id === 1120).logo_url">  </img>
     <h6 class="card__title"> {{ dataList.find(item => item.id === 1120).title}} </h6>
     <hr>
    </div>
</a>
<a
   v-bind:key="dataList.id"
   :href="`posts/${dataList.find(item => item.id === 1561).id}`"
   class="Gmodule card card--1"
   style="display:flex;text-decoration:none;
   color:#14a0fd;"
   >
   <div class="card_category card_info">
   <!-- <img  src="https://fintechapp.s3.us-east-2.amazonaws.com/y2qYjf8e2hp8z5yrgyfxF2NN?response-content-disposition=inline%3B%20filename%3D%22BoxLogo.png%22%3B%20filename%2A%3DUTF-8%27%27BoxLogo.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJG6DG75G7BXQ3XUA%2F20210115%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20210115T192217Z&X-Amz-Expires=518400&X-Amz-SignedHeaders=host&X-Amz-Signature=26b742c676a7fc0854c1efa0c81bf60e9239bc5068606262b3b1eab0f7a21245">
   -->
     <img :src="dataList.find(item => item.id === 1561).logo_url">  </img>
     <h6 class="card__title"> {{ dataList.find(item => item.id === 1561).title }} </h6>
     <hr>
    </div>
</a>
<a
   v-bind:key="dataList.id"
   :href="`posts/${dataList.find(item => item.id === 678).id}`"
   class="Gmodule card card--1"
   style="display:flex;text-decoration:none;color:#14a0fd;"
   >
   <div class="card_category card_info">
   <!-- <img  src="https://fintechapp.s3.us-east-2.amazonaws.com/y2qYjf8e2hp8z5yrgyfxF2NN?response-content-disposition=inline%3B%20filename%3D%22BoxLogo.png%22%3B%20filename%2A%3DUTF-8%27%27BoxLogo.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJG6DG75G7BXQ3XUA%2F20210115%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20210115T192217Z&X-Amz-Expires=518400&X-Amz-SignedHeaders=host&X-Amz-Signature=26b742c676a7fc0854c1efa0c81bf60e9239bc5068606262b3b1eab0f7a21245">
   -->
     <img :src="dataList.find(item => item.id === 678).logo_url"> </img>
     <h6 class="card__title"> {{ dataList.find(item => item.id === 678).title }} </h6>
     <hr>

    </div>
</a>
<a
   v-bind:key="dataList.id"
   :href="`posts/${dataList.find(item => item.id === 1040).id}`"
   class="Gmodule card card--1"
   style="display:flex;text-decoration:none;color:#14a0fd;"
   >
   <div class="card_category card_info">
   <!-- <img  src="https://fintechapp.s3.us-east-2.amazonaws.com/y2qYjf8e2hp8z5yrgyfxF2NN?response-content-disposition=inline%3B%20filename%3D%22BoxLogo.png%22%3B%20filename%2A%3DUTF-8%27%27BoxLogo.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJG6DG75G7BXQ3XUA%2F20210115%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20210115T192217Z&X-Amz-Expires=518400&X-Amz-SignedHeaders=host&X-Amz-Signature=26b742c676a7fc0854c1efa0c81bf60e9239bc5068606262b3b1eab0f7a21245">
   -->
     <img :src="dataList.find(item => item.id === 1040).logo_url">  </img>
     <h6 class="card__title">{{ dataList.find(item => item.id === 1040).title }}</h6>
     <hr>
    </div>
</a>
<a
   v-bind:key="dataList.id"
   :href="`posts/${dataList.find(item => item.id === 1601).id}`"
   class="Gmodule card card--1"
   style="display:flex;text-decoration:none;color:#14a0fd;"
   >
   <div class="card_category card_info">
   <!-- <img  src="https://fintechapp.s3.us-east-2.amazonaws.com/y2qYjf8e2hp8z5yrgyfxF2NN?response-content-disposition=inline%3B%20filename%3D%22BoxLogo.png%22%3B%20filename%2A%3DUTF-8%27%27BoxLogo.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJG6DG75G7BXQ3XUA%2F20210115%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20210115T192217Z&X-Amz-Expires=518400&X-Amz-SignedHeaders=host&X-Amz-Signature=26b742c676a7fc0854c1efa0c81bf60e9239bc5068606262b3b1eab0f7a21245">
   -->
     <img :src="dataList.find(item => item.id === 1601).logo_url">  </img>
     <h6 class="card__title"> {{ dataList.find(item => item.id === 1601).title }} </h6>
     <hr>

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
