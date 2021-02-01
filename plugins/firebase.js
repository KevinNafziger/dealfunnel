


import { firestorePlugin} from "vuefire";
import Vue from "vue";
import firebase from "firebase/app";
import "firebase/firestore";
Vue.use(firestorePlugin);
  //

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: process.env.fbAPIKey ,
    authDomain: "vuedealfunnel.firebaseapp.com",
    databaseURL: "https://vuedealfunnel.firebaseio.com",
    projectId: "vuedealfunnel",
    storageBucket: "vuedealfunnel.appspot.com",
    messagingSenderId: "702567867910",
    appId: "1:702567867910:web:21cc0f6ee0d458ed2b8587",
    measurementId: "G-6GTCVSVCBP"
  };
  // Initialize Firebase


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);


} else {
  firebase.app();
}

export const db = firebase.firestore();
