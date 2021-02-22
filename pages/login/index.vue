<template>
  <div class="md-layout md-alignment-center-center" style=" margin:auto; max-width: 900px; height: 100vh;">

    <md-card class=" lok md-layout-item md-size-50">
      <div class="col s12 m8 offset-m2">
        <div class="login card-panel green white-text center">

          <form action="index.html">
            <h3>Login</h3><br>
            <div v-if="!(errorMsg == '')" >
              <label class="red-text">{{errorMsg}}
              </label>
             </div>
            <div class="input-field">
              <span  class="mdi mdi-email"></span>
              <input type="email" id="email" v-model="email"><br>

            </div><br><br>
            <div class="input-field">
              <span  class="mdi mdi-key"></span>
              <input type="password" id="password" v-model="password"><br>

            </div><br><br>
            <button  v-on:click="login" class="btn login-btn btn-large btn-extended grey lighten-4 black-text">Login</button>
          </form><br><br>
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
            this.$gtag.event('login_with_email', { method: 'Google' })
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
<style scoped>
.btn {
  background: #4f81bd;
  color: #ffffff;
  margin-bottom: 20px;
}

input {
  width: 95%;
  height: 40px !important;
  border-radius:3px;
}
.login-btn {
  margin-bottom: 20px;
}
form {
  margin:auto;
  width: 100%;
  display: grid;
}
h3 {
  text-align: center;
  margin: 20px;
}
label {
  margin-top: 20px !important;
    margin-bottom: 20px !important;
    font-style: italic;
    color: #989898;
}
label, md-button {
  margin-top:20px !important;
  margin-bottom:20px !important;
}
.lok {
      margin-top: -150px;
}
.md-card {
  background: #ffffff;
}
.md-button {
  background-color: blue;
  color: #ffffff !important;
  text-decoration: none !important;
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
