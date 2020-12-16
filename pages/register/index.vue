<template>
  <div class="md-layout md-alignment-center-center" style="height: 100vh;">

    <md-card class="md-layout-item md-size-50">
      <md-card-header>
        <div class="md-title">Register</div>
      </md-card-header>

      <!-- Register Form -->

      <form @submit.prevent="registerUser">
        <md-card-content>
          <label style="color:red" v-show="!(errorMsg =='')">    
            {{errorMsg}} <br>
          </label>  
          <md-field md-clearable>
            <label for="email">Email</label>
            <md-input type="email" name="email" id="email" autocomplete="email" v-model="email" />
          </md-field>

          <md-field>
            <label for="password">Password</label>
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