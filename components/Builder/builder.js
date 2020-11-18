/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'hello_vue' %> (and
// <%= stylesheet_pack_tag 'hello_vue' %> if you have styles in your component)
// to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.
import Vue from 'vue'
import axios from 'axios'
import Builder from '../app.vue'
import Card from '../components/Card.vue'
import Modal from '../components/Modal.vue'
import Searchbar from '../components/Searchbar.vue'
import VTooltip from 'v-tooltip'
import Vuetify from 'vuetify'

window.eventBus = new Vue({});
Vue.use(Vuetify);

Vue.component('builder', Builder)
Vue.component('Card', Card)
Vue.component('Board', Board)



document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '[data-behavior="vue"]',
     data:
     {
        boardEnd: [],
        boardStart: [],
        //server: 'http://localhost:3000',
        server: 'https://www.fintechhorizonsmedia.com',
        items: [],
        units: [],
        filterMessage: '',
        resultsBlank: false,
        showModal: false,
        showPDF: false,
        currentPage: 1,
        pageSize: 50,
        showPages: true,
        totalPages: 5, //overwritten computed prop in app.vue
        allArticles: [],
        totalRecords: 0, //overwritten computed prop in app.vue
        searchMessage: "",
        posts: [],
        error: null,
      loading: true
    },
     methods: {

    addtoReportboard: function(index) {

        if (isNaN(index))
        {
        return
        }
        else
        {
        this.$root.boardEnd.push(index)
        }
    },

    setModal: function() {
    switch (this.$root.showModal) {
         case false:
        this.$root.showModal= true;
        break;
        case true:
        this.$root.showModal= false;
        break;
      }
    },

   generateReport: function() {

    window.location.href = this.$root.server + '/static/view.pdf?idlist=' + this.$root.boardEnd.toString();

  }

},
  created() {
      window.eventBus.$on("addtoReportboard", (index) => this.addtoReportboard(index));
      window.eventBus.$on("reportGen", () => this.generateReport());
   }
})
})
