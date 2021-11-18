<template>
<div class="container-fluid">
  <div class="row ">
    <main  class="col-md-12 ml-sm-auto col-lg-12 px-4">
    <div class="sectionix" id="top">
       <div class="title">
          <div class="content">
            <h2 class="center" style="margin-top:20px; padding-top:20px">Raises
                <i style="font-size: 13px; text-align:right; margin-left:3px;">{{ filterMessage}}
                </i>
            </h2>

          </div>
        </div>
    </div>

  <!-- <RaiseTempSearch/> --> <br>


<v-data-table v-if="loading" item-key="name" class="elevation-1" loading loading-text="Loading SD data... Please wait"></v-data-table>

<div v-else class="mb-5  table-responsive">
<v-data-table :headers="headers" :search="search" :items="raises" class="elevation-1 ">

  <template v-slot:top>
    <v-row>
    <v-col cols="8" md="10">
        <v-text-field append-icon="mdi-magnify" v-model="search" :label="searchLabel" class="mx-4"></v-text-field>

      </v-col>
      <v-col cols="4" md="2">
        <div class="col-reports-div">
          <center>
          <a  v-if="loggedIn" href="https://fintechhorizonsmedia.com/fintechraises.xlsx">
            <center><span content="export to Excel"
          v-tippy="{ placement : 'bottom' }" id="oki" class="mdi mdi-file-excel" style="margin:20px;font-size: 34px;"></span></center><br>
          </a>
          <nuxt-link title="Please Login to export data to Excel"  v-else to="/login">
            <v-btn class="mt-3">
            <span class="mdi mdi-login-color mdi-key"> </span>
            Data export
           </v-btn>
          </nuxt-link>
        </center><br>
        </div>
      </v-col>
    </v-row>
    </template>


    <template #item.company="{ item }">
      <nuxt-link :to="'/companies/' + item.company_id " >
       <b>{{item.company}}</b>
      </nuxt-link>
    </template>
</v-data-table>
</div>
  <!-- <div class="draft-div">
    <table class="table-striped" width="100%">
      <thead class="fixed-head">
      <th>
        <strong><span id="oki" class="mdi oki mdi-calendar"></span>
          <h3>Date</h3></strong>
      </th>

      <th>
        <strong><span id="oki" class="mdi  oki mdi-domain" ></span>
          <h3>Company</h3></strong>
      </th>

      <th>
        <strong><span id="oki" class="mdi oki mdi-cash-usd-outline"></span>
          <h3><a  @click="sortPrice">Amount<i class="fa fa-angle-down white-text">^</i></a></h3></strong>
      </th>

      <th>
        <strong><span id="oki" class="mdi oki mdi-account-star"></span>
          <h3>Lead</h3></strong>
      </th>

      <th>
        <strong><span id="oki" class="mdi oki mdi-account-multiple-plus"></span>
          <h3>Particip..</h3></strong>
      </th>

      <th>
        <strong><span id="oki" class="mdi oki mdi-city"></span>
          <h3>City</h3>
        </strong>
      </th>

      <th>
        <strong><span id="oki" class="mdi  oki mdi-earth"></span>
          <h3>Country</h3>
        </strong>
      </th>
      </thead>

    <tbody class="table-scroll">
      <tr style="margin-top:20px;" v-for="raise in raises">

        <td class="datetag">
          {{raise.item_date}}
        </td>

        <td>
          <div id="myCompanyTag" >
              <nuxt-link :to="'/companies/' + raise.company_id " > {{raise.company}}  </nuxt-link>
          </div>
        </td>

        <td>
          <div class="valuebtn">
              {{raise.amount}}
          </div>
        </td>

        <td>
          {{raise.lead}}
        </td>

        <td class="participating-td">
          {{raise.participating}}
        </td>

        <td>
          {{raise.city}}
        </td>

        <td>
          {{raise.country_item}}
        </td>

      </tr>
    </tbody>
  </table>
  </div> -->
   </main>
  </div>
</div>
</template>

<script>

 //import RaiseTempSearch from '@/components/Raises/RaiseTempSearch';
 import {mapState} from 'vuex';
 export default {

    layout: 'raises',

     data () {
      return {
      sortBy: "",
      headers: [
        {
          text: 'Date',
          align: 'start',
          sortable: false,
          value: 'item_date',
        },
        {
          text: 'company',
          value: 'company'
        },
        {
          text: 'amount',
          value: 'amount'
        },
        {
          text: 'lead',
          value: 'lead'
        },
        {
          text: 'participating',
          value: 'participating'
        },
        {
          text: 'city',
          value: 'city'
        },
        {
          text: 'country',
          value: 'country_item'
        },

    ],
      //rows: [],
      loading: false,
      search: '',
    searchLabel: 'Search',
    }
  },
    methods: {
       getbyCategory(category) {

         switch(category) {

          case 'Insurtech':
             this.sortBy = "";
             this.$store.dispatch("raise/setInsur");
             this.$store.dispatch("raise/setActiveTab", "Insurtech");
             break;

          case 'Blockchain':
             this.sortBy = "";
             this.$store.dispatch("raise/setBlock");
             this.$store.dispatch("raise/setActiveTab", "Blockchain");
             break;

          case 'Lending':
             this.sortBy = "";
             this.$store.dispatch("raise/setLend");
             this.$store.dispatch("raise/setActiveTab", "Lending");
             break;

          case 'Payments':
             this.sortBy = "";
             this.$store.dispatch("raise/setPay");
             this.$store.dispatch("raise/setActiveTab", "Payments");
             break;

          case 'All':
             this.sortBy = "";
             this.$store.dispatch("raise/setActiveTab", "All");
             this.$store.dispatch("raise/setAll", this.allRaises);
             break;

          }
      },


      sortPrice() {

        var newRaises = [];


         newRaises = this.raises.sort((a,b) => {
           if(Math.round(b.inmillions*100) > Math.round(a.inmillions*100)) {
             return 1;
           }
           else {
             return -1 ;
           }
          }) ;

         this.sortBy = "highest Amount";
         this.$store.dispatch("raise/setActiveTab", this.activeTab );
         this.$store.dispatch("raise/reorderInfo", newRaises);

       },


      submitSearch(topic) {

        this.$store.dispatch("raise/setActiveTab", topic);
        this.$store.dispatch("raise/submitSearch", topic);

      }

    },

    computed: {

     ...mapState({
          activeTab: state => state.raise.activeTab,
          allRaises:  state => state.raise.allRaises,
          raises: state =>  state.raise.activeRaiseInfo,
          firstRaiseLoad: state => state.raise.firstRaiseLoad,
          loggedIn: state => state.auth.loggedIn,
      }),

      filterMessage() {

         if (this.sortBy =='' ) {

         return this.activeTab;
         }
         else {

         return this.activeTab + ' sorted by ' + this.sortBy;

         }
       }

    },

    created() {

      this.$store.dispatch("posts/setView", "Raises");
       this.$nuxt.$on("getCategory", (category) => this.getbyCategory(category));
       this.$nuxt.$on("submitSearch", (topic) => this.submitSearch(topic));
    },

    async fetch({store}) {
      await store.dispatch("raise/nuxtServerInit")
    },

 }

</script>


<style scoped>

h2 {
    font-stretch: expanded;
}

.table-responsive {
    width: 100%;
    box-shadow: 0px 0px 10px -6px;
    border-radius: 10px;
    overflow-x: hidden;
}

thead {
    background-color: #343a40d6;
    color: white;
    vertical-align: baseline !important;
}

.table thead tr {
    text-align: -webkit-center;
    width: 100%;
}

.table td {
    text-align: -webkit-center;
}


.table thead th {
    width: 206px !important;
    min-width: 200px;
}

.table td {
    width: 206px !important;
}


/* vuetify table classes */

th.text-start {
    color: white !important;
}

img.logo-img {
    height: auto;
    max-height: 50px;
    max-width: 50px;
}

i.v-icon.notranslate.v-data-table-header__icon.mdi.mdi-arrow-up.theme--light {
    color: #ffffff !important;
}

i.v-icon.notranslate.mdi.mdi-menu-down.theme--light {
    color: #1976d2 !important;
}

i.v-icon.notranslate.mdi.mdi-chevron-right.theme--light,
i.v-icon.notranslate.mdi.mdi-chevron-left.theme--light {
    color: #1976d2;
}

.theme--light.v-data-table > .v-data-table__wrapper > table > thead > tr:last-child > th {
    padding-top: 10px;
    background: #333333;
}


.v-application--is-ltr .v-text-field .v-label {
    color: #b0bcc9 !important;
}


.theme--light.v-chip:not(.v-chip--active) {
    background: #1976d2 !important;
    color: #ffffff;
}


</style>
