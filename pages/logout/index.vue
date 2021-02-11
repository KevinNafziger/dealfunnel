<template>
  <body>
    <div class="container">
      <div class="row">
        <div style="margin-top:100px;" class="col s12 m8 offset-m2">
         <br><br>
          <center><p>Thank you for reading <i>DealFunnel</i>.</p></center>
        </div>
      </div>
      <center><img style="margin-top:100px;padding:3px;text-align:center;background:#4f81bd;border-radius:10px;" src="http://localhost:3000/dealfunnelwhite.png"></img></center>
    </div>
  </body>
</template>


<script>
  import firebase from 'firebase';
  import { firestorePlugin} from "vuefire";
  import Vue from "vue";
  import  "firebase/auth";
  import "firebase/firestore";
  Vue.use(firestorePlugin)

  export default {
    name: 'logout',

    created() {

      firebase.auth().signOut();
      this.$store.dispatch("auth/logOut");
    },

  };
</script>
