<template>
<div class="header-container">
  <header class="the-header">
    <TheSideNavToggle @toggle="$emit('sidenavToggle')" />
    <div class="navigation-items">
      <ul class="nav-list">
        <li v-if="showLogOutBtn" class="nav-item"><nuxt-link to="/logout">Logout</nuxt-link></li>  
        <li class="nav-item"><nuxt-link to="/"><span class="mdi mdi-home"></span></nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/posts">Articles</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/news">News</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/reports">Reports</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/builder">Builder</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/raises">Raises</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/companies">Companies</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/data">Data</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/deals">Deals</nuxt-link></li>
        <li v-if="!(this.loggedIn)" class="nav-item"><nuxt-link to="/login">Login</nuxt-link></li>
        <li v-if="!(this.loggedIn)" class="nav-item"><nuxt-link to="/register">Register</nuxt-link></li>
         <li  v-if="this.loggedIn">
             <i style="color:white">signed in:<b>{{email}}</b></i>
         </li>

      </ul>
    </div>
  </header>
</div>
</template>

<script>
import {mapState} from 'vuex';
import TheSideNavToggle from "@/components/Navigation/TheSideNavToggle";

export default {
  name: "TheHeader",
  components: {
    TheSideNavToggle
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

.logo {
  margin: 0 10px;
  font-size: 1.3rem;
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
</style>
