
<template>
  <body>
    <br>
    <div class="card">
      <div class="center">
 	      <nuxt-link title="click to manage billing" class="nuxt-link mdi mdi-account-circle-outline mdi-24px gardient-button" to="/customer-portal">
       	<br> Manage billing</nuxt-link>
      </div>
    </div>
  </body>
</template>
<script>
</script>
<style scoped>

.text-block-20 {
      border-radius: 10px;
 }

body {
  background: rgba(241,241,241,0.98039);
}
 .gardient-button {
     display: grid;
     background-image: linear-gradient(200deg, #4F81BD 10%, #4F81BD 39%, #8ab4f8 80%);
     background-size: 400% 400% !important;
     animation: gradient 15s ease infinite !important;
     width: fit-content !important;
     margin-left: auto !important;
     margin-right: auto !important;
     border-radius: 10px !important;
     border: none !important;
     padding: 10px 20px !important;
     font-family: poppins !important;
     color: #ffffff !important;
     font-size: 12px !important;
     transition: 0.3s;
     margin-top: 20px;
     margin-bottom: 20px;
     font-size: 16px !important;
     box-shadow: 0px 1px 10px -3px #474747 !important;
 }

 .gardient-button:hover {
 box-shadow: 0px 1px 5px -3px #474747 !important;
   }

h2 {
    color: #4f81bd !important;
}

.title {
    text-align: -webkit-center;
    margin-top: 20px;
    margin-bottom: 20px;
}

.nuxt-link {
  text-decoration: none !important;
  background:#4f81bd;
}
.nuxt-link:active {
  text-decoration: none !important;
  background:#4f71bd;
  box-shadow: inset 0px 0px 10px -5px #2f2f2f !important;
}
.front-subscribe-button {
  color: white;
  font-weight: 400;
  text-decoration: none;
}

.front-subscribe-button:hover {
  color: white;
  text-decoration: none;

}


.card {
  background-color: #ffffff !important;
  color: #ffffff;
  max-width: 900px;
  margin-left: auto;
  margin-top:200px;
  margin-right: auto;
  background: center;
  height: 300px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0px 0px 10px -8px gray;
}
.center {
  align-items:center;
  margin-top: 75px;
}
.imgdiv {
  margin: 20px;
}

</style>
