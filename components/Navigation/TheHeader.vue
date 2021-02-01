<template>
<div class="header-container">
  <header class="the-header">
    <Burger class="burger" />
    <Mobilebar>
      <ul class="sidebar-panel-nav">
      <li class="nav-item"><nuxt-link to="/"><span class="mdi mdi-home"></span></nuxt-link></li>
      <li class="nav-item"><nuxt-link to="/posts">Articles</nuxt-link></li>
      <li class="nav-item"><nuxt-link to="/news">News</nuxt-link></li>
      <li class="nav-item"><nuxt-link  v-show="(this.loggedIn)" to="/newsletters">Newsletters</nuxt-link></li>
      <li class="nav-item"><nuxt-link to="/reports">Reports</nuxt-link></li>
      <li class="nav-item"><nuxt-link to="/builder">Builder</nuxt-link></li>
      <li class="nav-item"><nuxt-link to="/raises">Raises</nuxt-link></li>
      <li class="nav-item"><nuxt-link  v-show="(this.loggedIn)" to="/companies">Companies</nuxt-link></li>
      <li class="nav-item"><nuxt-link  v-show="(this.loggedIn)" to="/data">Data</nuxt-link></li>
      <li v-if="!(this.loggedIn)" class="nav-item"><nuxt-link to="/login">Login</nuxt-link></li>
       <li style="display:content;" v-if="this.loggedIn"><br>
           <i style="place-self: center;color:#b9cfe6">signed in: <b> {{email}}</b></i>
       </li>
    </ul>
  </Mobilebar>
  <img src="dealfunnelwhite.png" class="logo"/>
    <div class="navigation-items">
      <ul class="nav-list">
        <li v-if="showLogOutBtn" class="nav-item"><nuxt-link to="/logout">Logout</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/"><span class="mdi mdi-home"></span></nuxt-link></li>
        <li  class="nav-item"><nuxt-link v-show="(this.loggedIn)" to="/posts">Articles</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/news">News</nuxt-link></li>
        <li v-show="(this.loggedIn)" class="nav-item"><nuxt-link v-show="(this.loggedIn)"to="/newsletters">Newsletters</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/reports">Reports</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/builder">Builder</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/raises">Raises</nuxt-link></li>
        <li v-show="(this.loggedIn)"  class="nav-item"><nuxt-link v-show="(this.loggedIn)"  to="/companies">Companies</nuxt-link></li>
        <li class="nav-item"><nuxt-link v-show="(this.loggedIn)" to="/data">Data</nuxt-link></li>
        <li v-if="!(this.loggedIn)" class="nav-item"><nuxt-link to="/login">Login</nuxt-link></li>
         <li style="display:content;" v-if="this.loggedIn">
             <i style="place-self: center;color:#b9cfe6">signed in: <b> {{email}}</b></i>
         </li>

      </ul>
    </div>
  </header>
</div>
</template>

<script>
import {mapState} from 'vuex';
import Burger from "@/components/Navigation/Burger";
import Mobilebar from '@/components/Navigation/Mobilebar.vue';

export default {
  name: "TheHeader",
  components: {
    Burger,
    Mobilebar
  },
  computed: {

  ...mapState({
          loggedIn: state => state.auth.loggedIn,
          userEmail: state => state.auth.email,
   }),

  showLogOutBtn() {

      if (this.loggedIn) {

           return true;
      }

      else {

          return false;
      }

  },

  email() {

      if (!this.loggedIn) {
        return '';
      }

      else {

         return this.userEmail;
      }

    }

  },



};
</script>
<style>
.nav-list {
  justify-content: center;
}
</style>

<style scoped>

.header-container {
  height: 60px;
  box-shadow: 0 1px 3px 0 #a5a5a5 !important;
}

.the-header {
  width: 100%;
  position: fixed;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #4f81bd;
  z-index: 100;
  box-sizing: border-box;
  padding: 0 20px;
}
@media screen and (max-width: 1400px){
.logo {
  margin: 0 10px;
  font-size: 1.3rem;
  width:auto;
  max-width: 150px !important;
  float: left;
  position: relative !important;
  left: 0px;
  transition:1s;
 }
}
@media screen and (max-width: 990px){
.logo {
  display: none;
 }
}
@media screen and (max-width: 760px){
.logo {
  display: block !important;
 }
}
.logo {
  transition:1s;
  margin: 0 10px;
  font-size: 1.3rem;
  width:auto;
  max-width: 250px;
  float: left;
  position: absolute;
  left: 0px;
}
.logo a {
  text-decoration: none;
  color: white;
  margin-left: 100px;
}

.spacer {
  flex: 1;
}

.navigation-items {
  display: none;
}

@media (min-width: 768px) {
  .navigation-items {
    display: block;
  }
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.nav-item {
  margin: 0 10px;
}

.nav-item a {
  text-decoration: none;
  color: white;
  padding:5px;
}

.nav-item a:hover,
.nav-item a:active,
.nav-item a.nuxt-link-active {
    box-shadow: 0px 0px 5px 0px #ffffff;
    border-radius: 3px;
}


 .logo {
   align-self: center;
   color: #fff;
   font-weight: bold;
   font-family: 'Lato'
 }

 @media  (min-width:790px) {
   .burger {
     display:none !important;
   }
   .the-header {
     place-content: center !important;
   }
 }
 .the-header {
   place-content: center !important;
 }
 .main-nav {
   display: flex;
   justify-content: space-between;
   padding: 0.5rem 0.8rem;
 }

 ul.sidebar-panel-nav {
   list-style-type: none;
 }

 ul.sidebar-panel-nav > li > a {
   color: #fff;
   text-decoration: none;
   font-size: 1.5rem;
   display: block;
   padding-bottom: 0.5em;
 }

</style>
