<template>
  <div class="md-layout md-alignment-center-center" style="height: 100vh;">

    <md-card class="md-layout-item md-size-50">
      <div class="col s12 m8 offset-m2">
        <div class="login card-panel green white-text center">

          <form action="index.html">
            <h3>Login</h3>
            <div v-if="!(errorMsg == '')" >
              <label class="red-text">{{errorMsg}}
              </label>
             </div>
            <div class="input-field">
              <span class="mdi mdi-email"></span>
              <input type="email" id="email" v-model="email">
              <label class="white-text" for="email">Email Address</label>
            </div>
            <div class="input-field">
              <span class="mdi mdi-key"></span>
              <input type="password" id="password" v-model="password">
              <label class="white-text" for="password">Password</label>
            </div>
            <button v-on:click="login" class="btn btn-large btn-extended grey lighten-4 black-text">Login</button>
          </form>
        </div>
      </div>
  </md-card>
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
  name: 'login',
  data: function() {
    return {
      email: '',
      password: '',
      errorMsg: '',
    };
  },
  methods: {
    login: function(e) {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
         .then(
          response => {
            this.$store.dispatch("auth/setEmail", response.user.email);
            this.$router.push('/posts');
          },
          err => {
            this.errorMsg = err.message;
          }
        );
      e.preventDefault();
    }
  }
};
</script>
<style>
form {
  margin:auto;
  max-width: 700px;
  display: grid;
}
h3 {
  text-align: center;
  margin: 20px;
}
label, md-button {
  margin-top:20px !important;
  margin-bottom:20px !important;
}
.md-button {
  background-color: blue;
}
button.btn.btn-large.btn-extended.grey.lighten-4.black-text {
    box-shadow: 0px 0px 9px -5px grey;
}
.login {
  display: grid;
}
.md-button {
    background-color: #4f81bd;
    color: #ffffff;
}
</style>
