<template>
  <body>
    <div class="container">
      <div class="row">
        <div style="margin-top:100px;" class="col s12 m8 offset-m2">
         <br><br>
          <center><p>Thank you for visiting <i>finmedialatam.com</i>.</p></center>
        </div>
      </div>
      <center>
        <img
        style="margin-top:100px;padding:20px;text-align:center;background:#4f81bd;border-radius:10px;" 
        src="https://firebasestorage.googleapis.com/v0/b/vuedealfunnel.appspot.com/o/finmedialatam.png?alt=media&token=2f5f7b2a-647d-4b2d-9100-b92588d39a19"></img>
      </center>
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
