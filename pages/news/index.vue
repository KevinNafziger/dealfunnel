<template>
<div width="100%" class="w-container-2">
<div data-v-69296181="" id="top" class="sectionix"><div data-v-69296181="" class="title"><div data-v-69296181="" class="content"><br data-v-69296181=""> <h2 data-v-69296181="">News <i style="font-size: 13px; text-align:right; margin-left:3px;">{{ filterMessage }}</i></h2></div></div></div>

<NewsTempSearch></NewsTempSearch>
    <div class="section-15">
      <div class="row-15 w-row">
          <div class="w-col w-col-9">
                <ul class="w-list-unstyled">

                    <li v-for="link in links" id="examples" style="text-align: center; margin-bottom: 20px;" class="list-item-9 featuredsidemenu">
                      <span class="datetag tl-c" style="margin-right:15px">
                       {{link.published_on}}
                      </span>
                      <br>
                      <h3  class="heading-24 example">
                        {{link.header}}
                      </h3>
                      <br>
                      <div class="text-block-13">
                        <em>
                          <span style="margin-right:15px">
                             <a :href="link.url"  target="_blank" style="color:#4286ff">  {{link.publication}} </a>
                          </span>
                        </em>
                      </div>
                      <br>
                      <p class="paragraph-19">
                        {{link.description}}
                      </p>
                      <div class="w-row">
                        <div class="w-col w-col-6">
                          <div>
                          </div>
                        </div>
                      </div>
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
           this.$store.dispatch("news/setInsur");
           break;
        case 'Blockchain':
            this.$store.dispatch("news/setBlock");
            break;
        case 'Lending':
            this.$store.dispatch("news/setLend");
            break;
        case 'Payments':
            this.$store.dispatch("news/setPay");
            break;
        }

    },

    setPage: function(direction) {

       switch(direction) {

         case 'Previous':
            var page = this.numActivePage;
            page-- ;
            this.$store.dispatch("news/goPrevious", page);
            break;

          case 'Next':
            var page = this.numActivePage;
            page++ ;
            this.$store.dispatch("news/goNext", page);
            break;

          case 'Last':
            this.$store.dispatch("news/goLast", page);
            break;
         }
     }
 },
  computed: {

  ...mapState({
      starterNews: state => state.news.pages[0],
      firstLoad: state => state.news.firstNewsLoad,
      activeNewsInfo: state => state.news.activeNewsInfo,
      activeTab: state => state.news.activeNewsTab,
      numActivePage: state => state.news.numNewsPage,
   }),

   filterMessage() {

      if (this.firstLoad == true)
      {
        return ''
      }
      if (this.activeTab == 'Page')
      {
        return this.activeTab + ' ' + this.numActivePage;
      }
      else
      {
        return this.activeTab;
      }
    
    },

   links() {
      if (this.firstNewsLoad == true)
      {
        return this.starterNews
      }
      else
      {
        return this.activeNewsInfo;
      }
    },
    
  },
  created()  {

     this.$nuxt.$on("getCategory", (category) => this.getbyCategory(category));
     this.$nuxt.$on("changePage", (direction) => this.setPage(direction));
   
   },
   async fetch({store}) 
  {
  await store.dispatch("news/nuxtServerInit");
  },

  head: {
    title: 'News'
  },

};
   
</script>

 <style scoped>
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
    }
  }
  @media screen and (max-width:1000px) {
    #examples{
      width:100% !important;
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
    height: 530px;
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
    display: inline-grid;
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
</style>
