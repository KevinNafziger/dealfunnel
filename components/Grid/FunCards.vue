
<style scoped>

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
    flex: 1 1 100px;
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
    width: 100%;
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    -webkit-justify-content: center;

}
a {
  text-decoration: none !important;
}
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

.exespotbody{
  margin-top:200px;
  max-width: 1000px;
  align-self: center;
  margin:auto;
}
@media screen and (max-width:1400px) {
  .grid {
    max-width: 600px;
  }
}


*{
  box-sizing: border-box;
}

body, html {
   font-family: 'Roboto Slab', serif;
    margin: 0;
  width: 100%;
height: 100%;
    padding: 0;
}

body {
  background-color: #D2DBDD;
  display: flex;
  display: -webkit-flex;
  -webkit-justify-content: center;
  -webkit-align-items: center;
  justify-content: center;
  align-items: center;
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
    transform: scale(1.10, 1.10);
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

img {
  align-self: center;
}
</style>


<template>


  <div class="exespotbody"><br><br>
    <center><h2> Exclusive Content </h2></center><br>
    <section  class="Fgrid ">
   <a :href="`posts/${dataList.find(item => item.id === 315).id}`" class="Gmodule card card--1"  v-bind:key="dataList.id" >
     <img :src="dataList.find(item => item.id === 315).logo_url" class="card card--1">
     <hr>
     <div class="card__info-hover">
         <div class="card__clock-info">
           <span class="card__clock"  viewBox="0 0 24 24">
                 {{ dataList.find(item => item.id === 315).created_date }}
            </span>
         </div>

     </div>
     <div class="card__info">
       <h6 class="card__title"> {{ dataList.find(item => item.id === 315).title }}</h6>
       <country-flag country='us' size='small'/>
     </div>
     </img>
   </a>

   <a :href="`posts/${dataList.find(item => item.id === 615).id}`" class="Gmodule card card--1"  v-bind:key="dataList.id" >
     <img :src="dataList.find(item => item.id === 615).logo_url" class="card card--1">
      <hr>
     <div class="card__info-hover">
         <div class="card__clock-info">
           <span class="card__clock"  viewBox="0 0 24 24">
                 {{ dataList.find(item => item.id === 615).created_date }}
            </span>
         </div>

     </div>
     <div class="card__info">

       <h6 class="card__title"> {{ dataList.find(item => item.id === 615).title }}</h6>
       <country-flag country='can' size='small'/>
       <span class="card__category"> {{ dataList.find(item => item.id === 615).country }}</span><br>
       <span class="card__by">by <a href="/" class="card__author" title="author">{{ dataList.find(item => item.id === 615).author.name }}</a></span>
     </div>
     </img>
   </a>

   <a :href="`posts/${dataList.find(item => item.id === 115).id}`" class=" Gmodule card card--1"  v-bind:key="dataList.id" >
     <img :src="dataList.find(item => item.id === 115).logo_url" class="card card--1">
     <hr>
     <div class="card__info-hover">
         <div class="card__clock-info">
           <span class="card__clock"  viewBox="0 0 24 24">
                 {{ dataList.find(item => item.id === 115).created_date }}
            </span>
         </div>

     </div>
     <div class="card__info">
       <h6 class="card__title"> {{ dataList.find(item => item.id === 115).title }}</h6>
       <country-flag country='us' size='small'/>
       <span class="card__category"> {{ dataList.find(item => item.id === 115).country }}</span><br>
       <span class="card__by">by <a href="/" class="card__author" title="author">{{ dataList.find(item => item.id === 115).author.name }}</a></span>
     </div>
     </img>
   </a>

   <a :href="`posts/${dataList.find(item => item.id === 15).id}`" class="Gmodule card card--1"  v-bind:key="dataList.id" >
     <img :src="dataList.find(item => item.id === 15).logo_url" class="card card--1">
     <hr>
     <div class="card__info-hover">
         <div class="card__clock-info">
           <span class="card__clock"  viewBox="0 0 24 24">
                 {{ dataList.find(item => item.id === 15).created_date }}
            </span>
         </div>

     </div>
     <div class="card__info">
       <h6 class="card__title"> {{ dataList.find(item => item.id === 15).title }}</h6>
       <span class="card__category"> {{ dataList.find(item => item.id === 15).country }}</span>
       <span class="card__by">by <a href="/" class="card__author" title="author">{{ dataList.find(item => item.id === 15).author.name }}</a></span>
     </div>
     </img>
   </a>


     </section>
  </div>
</template>

<script>
import dataData from "@/data/data.json";
export default {
  name: 'FunCards',
  data() {
    return {
      dataList: dataData,
    }
  }
}
</script>
