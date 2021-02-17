<template>
  <div class="about-page">
    <p></p>
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
  async fetch() {

  const functionRef = firebase
  .app()
  .functions('us-central1')
  .httpsCallable('ext-firestore-stripe-subscriptions-createPortalLink');
const { data } = await functionRef({ returnUrl:  'https://www.dealfunnel.net/process-payment' });
 window.location.assign(data.url);
  },

}
</script>

 <style scoped>
.about-page {
  text-align: center;
  padding: 150px;
}
h2 {
    color: #4f81bd !important;
}
.content {
    background: #ffffffc7;
    padding-bottom: 10px;
    border-radius: 10px;
    box-shadow: 0px 0px 5px -4px;
    max-width: 1200px ;
    width:auto;
    margin-left: auto;
    margin-right: auto;
}
.content:hover {
  box-shadow: 0px 0px 8px -4px;
}
.title {
    text-align: -webkit-center;
    margin-top: 20px;
    margin-bottom: 20px;
}
</style>
