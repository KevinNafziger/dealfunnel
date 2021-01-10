<template>
<div width="100%" class="w-container-2">

  <div data-v-69296181="" id="top" class="sectionix"><div data-v-69296181="" class="title"><div data-v-69296181="" class="content"><br data-v-69296181="">

    <h2 data-v-69296181="">News <i style="font-size: 13px; text-align:right; margin-left:3px;">{{ filterMessage }}</i></h2>

  </div></div></div>

  <NewsTempSearch></NewsTempSearch>

    <div class="section-15">
      <div class="row-15 w-row">
        <div class="w-col w-col-9">

          <ul class="w-list-unstyled">


            <li v-for="link in links" id="examples" style="text-align: center; margin-bottom: 20px;" class="list-item-9 featuredsidemenu">

              <span class="datetag tl-c" style="margin-left:20px">
                {{link.published_on}}
              </span><br>
              <h3  class="heading-24 example">
                {{link.header}}
              </h3><br>

              <div class="text-block-13">
                <em>
                <span style="margin-right:15px">
                   <a :href="link.url"  target="_blank" style="color:#4286ff">  {{link.publication}} </a>
                <br>

        <br>
        <div id="myCompanyTag" v-if="link.company_id" class=" mdi mdi-domain mdi-24px plain"> <nuxt-link :to="'/companies/' + link.company_id "> {{link.company.name}}  </nuxt-link></div>


                </span><br><br>
                </em>
              </div><br>

              <p class="paragraph-19">
                {{link.description}}
              </p>


              <div class="w-row">

                <div clas="tag-row">
                  <div>

                  <a href="#" v-if="link.sector" v-on:click="getbyCategory(link.sector)" class="tagbtn" >
                    {{ link.sector.toLowerCase() }}
                  </a>

                  <a href="#"  v-if="link.sector2"  v-on:click="getbyCategory(link.sector2)"  class="tagbtn">
                    {{ link.sector2.toLowerCase() }}
                  </a>

                  <a href="#" v-if='link.sector3'  v-on:click="getbyCategory(link.sector3)"  class="tagbtn" >
                    {{ link.sector3.toLowerCase() }}
                  </a>

                  <a href="#"  v-if="link.folder && (link.folder!='general') && (link.folder!='report')"  v-on:click="getbyCategory(link.folder)"  class="tagbtn">
                      {{ link.folder.toLowerCase() }}
                  </a>

                  <a href="#"  v-if="link.restype && (link.restype!='General' ) && (link.restype!='report')"  v-on:click="getbyCategory(link.restype)"  class="tagbtn" >
                    {{ link.restype.toLowerCase() }}
                   </a>

                  </div>
                </div>

              </div><br>


            </li>

          </ul>

        </div>
      </div>
    </div>

</div>
</template>

<script>
import {mapState} from 'vuex';
import NewsTempSearch from '@/components/News/NewsTempSearch';
export default {
  layout: 'raises',
  methods: {

    getbyCategory: function(category) {

      switch(category) {

        case 'Insurtech':
        case 'insurtech':
           this.$store.dispatch("news/setInsur");
           break;

        case 'Blockchain':
        case 'blockchain':
            this.$store.dispatch("news/setBlock");
            break;
        case 'Lending':
        case 'lending':
            this.$store.dispatch("news/setLend");
            break;
        case 'Payments':
        case 'payments':
            this.$store.dispatch("news/setPay");
            break;

        case 'Mergers':
        case 'M&A':
            this.$store.dispatch("news/setMergers");
            break;

        case 'Valuation':
        case 'valuation':
            this.$store.dispatch("news/setVal");
            break;

        case 'AI':
        case 'ai':
            this.$store.dispatch("news/setAI");
            break;

        case 'OpenBanking':
        case 'openbanking':
            this.$store.dispatch("news/setOpen");
            break;

        case 'PersonalFinance':
        case 'personalfinance':
            this.$store.dispatch("news/setPer");
            break;

        case 'CapitalMarkets':
        case 'capitalmarkets':
            this.$store.dispatch("news/setCapital");
            break;

        case 'WealthTech':
        case 'wealthtech':
            this.$store.dispatch("news/setWealth");
            break;

        case 'General':
        case 'general':
            this.$store.dispatch("news/setGeneral");
            break;

        case 'healthtech':
        case 'HealthTech':
            this.$store.dispatch("news/setHealth");
            break;

        case 'RealEstate':
        case 'realestate':
            this.$store.dispatch("news/setReal");
            break;

        case 'Regtech':
        case 'regtech':
            this.$store.dispatch("news/setReg");
            break;

        case 'CyberIdentity':
        case 'cyberidentity':
            this.$store.dispatch("news/setCyber");
            break;

        case 'Neobank':
        case 'neobank':
            this.$store.dispatch("news/setNeo");
            break;

        case 'Remittance':
        case 'remittance':
            this.$store.dispatch("news/setRemit");
            break;

        case 'Currency':
        case 'currency':
        case 'Funds':
        case 'funds':
        case 'OnDemand':
        case 'ondemand':
        case 'Marketplace':
        case 'marketplace':
        case 'Transport':
        case 'transport':
        case 'Auto':
        case 'auto':
        case 'claims':
        case 'Claims':
        case 'Comparison':
        case 'compairson':
        case 'rental':
        case 'Rental':
        case 'wallet':
        case 'Wallet':
        case 'Exchange':
        case 'exchange':
        case 'Supplychain':
        case 'supplychain':
        case 'Banking':
        case 'banking':
        case 'Identity':
        case 'identity':
        case 'Platform':
        case 'Scaling':
        case 'scaling':
        case 'Education':
        case 'Developer':
        case 'News':
        case 'Credit':
        case 'credit':
        case 'news':
        case 'Cyber':
        case 'cyber':
        case 'Predictions':
        case 'predictions':
        case 'p2p':
        case 'P2p':
        case 'Employee Benefits':
        case 'employee benefits':
        case 'Government':
        case 'HR':
            this.$store.dispatch("news/setSectorTab", category );
             this.$store.dispatch("news/setSector", category );
             break;

        case 'Lists':
        case 'Regulatory':
        case 'Human Interest':
        case 'Libra':
            this.$store.dispatch("news/setSectorTab", category );

            this.$store.dispatch("news/setbyID", category );
             break;

        }
    },

    setPage: function(direction) {

       switch(direction) {

         case 'Previous':
            var page = this.numPage;
            this.$store.dispatch("news/goPrevious", page);
            break;

          case 'Next':
            var page = this.numPage;
            this.$store.dispatch("news/goNext", page);
            break;

          case 'Last':
            var page = this.numPage;
            this.$store.dispatch("news/goLast", page);
            break;
         }
     },

     changePay: function(direction) {

       switch(direction) {

         case 'Previous':
            var page = this.payPage;
            this.$store.dispatch("news/setPayPrevious", page);
            break;

          case 'Next':
            var page = this.payPage;
            this.$store.dispatch("news/setPayNext", page);
            break;
         }
     },

    changeInsur: function(direction) {

       switch(direction) {

         case 'Previous':
            var page = this.insPage;
            this.$store.dispatch("news/setInsurPrevious", page);
            break;

          case 'Next':
            var page = this.insPage;
            this.$store.dispatch("news/setInsurNext", page);
            break;

         }
     },

     submitSearch(topic) {

       this.$store.dispatch("news/setSearchTab", topic);
       this.$store.dispatch("news/submitSearch", topic);

     },

     changeBlock: function(direction) {

       switch(direction) {

         case 'Previous':

            var page = this.blkPage;

            this.$store.dispatch("news/setBlockPrevious", page);
            break;

          case 'Next':

            var page = this.blkPage;

            this.$store.dispatch("news/setBlockNext", page);
            break;
        }
     }
  },

  computed: {

    ...mapState({
      starter: state => state.news1,
      first: state => state.news.firstNewsLoad,
      activeNewsInfo: state => state.news.activeNewsInfo,
      activeTab: state => state.news.activeNewsTab,
      numPage: state => state.news.numNewsPage,
      blkPage:  state => state.news.blkNewsPage,
      payPage:  state => state.news.payNewsPage,
      insPage:  state => state.news.insNewsPage,

    }),

    filterMessage() {

      if (this.activeTab == 'All') {
        return this.activeTab + ' ' + 'page ' +  this.numPage;
      }

      else if (this.activeTab == 'Blockchain') {
        return this.activeTab + ' ' + 'page ' + ' ' + this.blkPage;
      }

      else if (this.activeTab == 'Payments') {

        return this.activeTab + ' ' + 'page ' + ' ' + this.payPage;
      }

      else if (this.activeTab == 'Insurtech') {

        return this.activeTab + ' ' + 'page ' + ' ' + this.insPage;

      }

      else {

        return this.activeTab;
      }

    },

    links() {

      if (this.first == true)
      {
        return this.starter;
      }

      else

      {
        return this.activeNewsInfo;
      }

    },

  },

  created() {

     this.$nuxt.$on("getCategory", (category) => this.getbyCategory(category));
     this.$nuxt.$on("changePage", (direction) => this.setPage(direction));
     this.$nuxt.$on("changePay", (direction) => this.changePay(direction));
     this.$nuxt.$on("changeInsur", (direction) => this.changeInsur(direction));
     this.$nuxt.$on("changeBlock", (direction) => this.changeBlock(direction));
     this.$nuxt.$on("submitSearch", (topic) => this.submitSearch(topic));


   },

   async fetch({store}) {
    await store.dispatch("news/nuxtServerInit");
   },

   head: {
    title: 'News'
   },

}
</script>

<style scoped>
 .search-bar-div {
       text-align: center;
 }
 .tag-search-div {
   place-content: center;
 }
 .text-field {
   text-align: -webkit-center;
 }
 .title {
    text-align: -webkit-center;
    margin-top: 20px;
    margin-bottom: 20px;
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
   .link-10 {
       color: #474747;
   }
   #megamenu4{
     margin: 12px;
   }
   h2, h3 {
    color: #4f81bd !important;
}
   .mdi {
     color: #3f8ac5!important;
   }
   .w-col .w-col {
    padding-left: 0;
    width: 100% !important;
    margin-bottom: 20px !important;
    padding-right: 0;
}
   a.link-10.hover.hover-3 {
    font-size: smaller;
    color: #474747;
}
   #megamenu3 {
     top:46px !important;
   }
   .postsssnavcomp, .w-dropdown-list, .Postcompdropmenu {
     border-radius: 10px !important;
   }

  .column-29, .list-item-9 {
     border-color: rgba(164, 219, 255, 0.45);
   }

   .featuredsidemenu:hover {
     box-shadow: 0 1px 5px 0 rgba(0, 89, 132, 0.16);
     border-radius:10px;
   }
   .link-10 {color: #23527c;}

   h1 {
     text-align:center;
   }
  @media screen and (max-width:1400px) {
    #examples{
        width:49% !important;
        height: 650px !important;
    }
  }
  @media screen and (max-width:1000px) {
    #examples{
        width:100% !important;
      }

    .tagbtn {
      margin-bottom: 100px !important;
    }

    .w-col {
        width: 100% !important;
        left: auto;
        right: auto;
  }
  .news-h {
    margin-top:100px !important;
  }
}
.news-h {
  margin-top:100px !important;
}
  .paragraph-19 {
    margin-top: 9px;
    height: 250px;
    color: #474747;
    overflow: auto;
    padding: 20px;
    width: 90%;
    margin: auto;
}
#examples {
    display: inline-block;
    background-color: #fff;
    opacity: .95;
    margin: 0px, auto;
    width: 33%;
    border-radius: 10px;
    min-height: 620px;
    background: linear-gradient(45deg,#f7f9fb,#fff);
}
  .btn-link:hover, .btn-link:focus {
  color: #23527c;
  text-decoration: underline;
  background-color: #2fb7ff !important;
}
.tl-c{
    margin-left: -525px;
    font-family: poppins;
    position: inherit;
    background: #9e9e9e29;
    color: #5887c0;
    padding: 3px;
    border-radius: 3px;
    font-family: cursive;
}
.f50 {
  width: 50%;
}
.heading-24 {
  min-height: 132px;
  width: 90%;
  margin: auto;
}
#examples .example .hover {
    display: grid;
    margin-bottom:20px;
}
#myCompanyTag {
  font-weight: bold;
    font-style: normal;
}

.cyber-buy {
  width: 200px;
  padding:10px;
}

.modal-content {
  padding: 20px;
  display: inline-flex;
}
.text-block-20 {
  height: fit-content;
    display: flex;
}
.modal-mark-content {
  display: table;
}
ul {
  width: 100% !important;
}
.tagbtn {
    margin-top:3px !important;
    margin-right:3px !important;
    color: #ffffff;
    cursor: pointer;
    background: #4f81bd;
    text-decoration: none !important;
  }
  .tagbtn:hover {
    box-shadow: 0px 0px 10px -3px #4f81bd !important;
  }

  .text-block-13 {
    font-weight: bold;
    text-align: center;
    text-align-last: center;
  }
</style>
