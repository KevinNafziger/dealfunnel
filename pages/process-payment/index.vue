<template>
  <body>
  <div><center><br><br><br>
    <h4>Thank you for subscribing! </h4>
    <div class="T-T-B">
    <h4>Enter your email and choose your <i>finmedialatam </i> password.
    </h4>
  </div>
  <br></center></div>
  <div class="md-layout md-alignment-center-center" >

    <md-card class="lok md-layout-item md-size-50">

      <form @submit.prevent="registerUser">
        <md-card-header>
          <h5>Enter email, choose password</h5>
        </md-card-header>
        <md-card-content>
          <label style="color:red" v-show="!(errorMsg =='')">
            {{errorMsg}} <br>
          </label>
          <md-field md-clearable>
            <span title="Enter email (for receving newsletter)" class="mdi mdi-email kfield">Email   </span>
            <md-input title="Enter email" type="email" name="email" id="email" autocomplete="email" v-model="email" />
          </md-field>

          <md-field>
              <span title="Enter password (use to access online archive)" class="mdi mdi-key kfield">Password   </span>
            <md-input title="Enter password" type="password" name="password" id="password" autocomplete="password" v-model="password" />
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

h4 {
 color:  #4f81bd;
 margin-top:14px;
}
h6 {
  line-height: 2;
  color: #474747;
}
form {
  margin:auto;
  max-width: 700px;
  display: grid;
}
label, md-button {
  margin-top:20px !important;
  margin-bottom:20px !important;
}
.T-T-B {
  text-align: justify;
  margin-top:10px;
  margin-bottom:40px;
  margin-left: auto;
  margin-right: auto;
  max-width: 600px;
  padding-top:10px;
}

.kfield {
   margin-right:5px;
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
