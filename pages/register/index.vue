<template>
  <div class="md-layout md-alignment-center-center" style="height: 100vh;">

    <md-card class="lok md-layout-item md-size-50">


      <!-- Register Form -->

      <form @submit.prevent="registerUser">
        <md-card-header>
          <h3>Register</h3>
        </md-card-header>
        <md-card-content>
          <label style="color:red" v-show="!(errorMsg =='')">
            {{errorMsg}} <br>
          </label>
          <md-field md-clearable>
            <span class="mdi mdi-email"></span>
            <md-input type="email" name="email" id="email" autocomplete="email" v-model="email" />
          </md-field>

          <md-field>
              <span class="mdi mdi-key"></span>
            <md-input type="password" name="password" id="password" autocomplete="password" v-model="password" />
          </md-field>
        </md-card-content>

        <md-card-actions>
          <md-button to="/login">Go to Login</md-button>
          <md-button class="md-primary md-raised" type="submit">Submit</md-button>
        </md-card-actions>
      </form>
    </md-card>

  </div>
</template>

<script>

import { firestorePlugin} from "vuefire";
import Vue from "vue";
import firebase from "firebase/app";
import  "firebase/auth";
import "firebase/firestore";
Vue.use(firestorePlugin)

export default {
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
