<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col s12 m8 offset-m2">
          <h3>Thank you for using <i>DealFunnel</i>.</h3>
        </div>
      </div> 
    </div>
  </div>
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