<template>
  <body>
  <div><center><br>
    <h3>Thank you for subscribing to DealFunnel, home of the <i>'Big Fintech Newsletter'</i></h3>
    <h4> Below please specify the email address  for receiving the newsletter. Also specify a password for accessing dealfunnel online.  You can login to dealfunnel using the email and password you specify below. </h4>
  <br></center></div>
  <div class="md-layout md-alignment-center-center" style="height: 100vh;">

    <md-card class="lok md-layout-item md-size-50">


 

      <form @submit.prevent="registerUser">
        <md-card-header>
          <h3>Register</h3>
        </md-card-header>
        <md-card-content>
          <label style="color:red" v-show="!(errorMsg =='')">
            {{errorMsg}} <br>
          </label>
          <md-field md-clearable>
            <span class="mdi mdi-email">Email</span>
            <md-input type="email" name="email" id="email" autocomplete="email" v-model="email" />
          </md-field>

          <md-field>
              <span class="mdi mdi-key">Password</span>
            <md-input type="password" name="password" id="password" autocomplete="password" v-model="password" />
          </md-field>
        </md-card-content>

        <md-card-actions>
          <md-button class="md-primary md-raised" type="submit">Submit</md-button>
        </md-card-actions>
      </form>
    </md-card>

  </div>
</body>
</template>

<script>

import { firestorePlugin} from "vuefire";
import Vue from "vue";
import firebase from "firebase/app";
import  "firebase/auth";
import "firebase/firestore";
Vue.use(firestorePlugin)

export default {
 name: 'ProcessPayment',
  data: () => ({

      email: "",
      password: "",
      errorMsg: '',
    }),

  methods: {

    async registerUser(e) {

      firebase
      .auth()
      .createUserWithEmailAndPassword(this.email, this.password)
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

  },

}

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
