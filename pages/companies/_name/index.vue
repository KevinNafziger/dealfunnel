<template>

<div style="tab-interval:.5in;word-wrap:break-word; class="WordSection1">
  <div id="kplstl">
    <div class="comp-show-container w-col w-col-12 w-col-medium-12">
      <div style="background-color:#E5E5E5;" class="card">
         <div style="margin-left:10%; margin-top:10%; " class="w-col-5">
                <div class="col-sm-5">
                 <img class="nuxt__build_indicator2" :src="item.logo_item">
                </div> 
                <div class="col-sm-5">
                   <div class="section-title nuxt__build_indicator">
                      {{ item.description }}
                   </div>
                </div>
                <div class="col-sm-4">
                    <div class="nuxt__build_indicator3">
                          <div><b>HQ: </b>{{ item.city }}
                            {{ item.state }} {{item.country}} <br>
                          </div>
                          <div v-if="item.phone"><b>Phone: </b> {{item.phone}}</div>
                          <div v-if="item.website"><b>Website: </b><a href="#" v-on:click="openItem(item.website)" > {{item.website}}</a></div> 
                        <div v-if="item.founders">Founders: 
                         {{item.founders}}
                        </div>    
                         <div v-if="item.founding_yr" >Founded: 
                                    {{item.founding_yr}}
                        </div>
                        <div class="personal-sm">
                      
                            <span v-if="!(item.facebook==='')" >
                              <a :href="item.facebook" class="btn btn-link" target="_blank" >
                              <i class="fa fa-facebook"></i></a>
                            </span>
                            <span v-if="!(item.twitter ==='')" >
                              <a :href="item.twitter" class="btn btn-link" target="_blank" ><i class="fa fa-twitter"></i></a>
                            </span>
                            <span v-if="!(item.linkedin ==='')" >
                               <a :href="item.linkedin" class="btn btn-link" target="_blank" ><i class="fa fa-linkedin"></i></a>
                            </span>
                            <span v-if="!(item.medium ==='')">
                                <a :href="item.medium" class="btn btn-link" target="_blank" ><i class="fa fa-medium"></i></a>
                            </span>   
                            <span v-if="!(item.github ==='')">
                                <a :href="item.github" class="btn btn-link" target="_blank" ><i class="fa fa-github"></i></a>
                            </span>
                            <span v-if="!(item.youtube ==='')">
                                <a :href="item.youtube" class="btn btn-link" target="_blank" ><i class="fa fa-youtube"></i></a>
                            </span>        
                            <span v-if="!(item.pinterest ==='')">
                               <a :href="item.pinterest" class="btn btn-link" target="_blank" ><i class="fa fa-pinterest"></i></a>
                            </span>
                            <span v-if="!(item.slack ==='')">
                                <a :href="item.slack" class="btn btn-link" target="_blank" ><i class="fa fa-slack"></i></a>
                            </span>
                            <span v-if="!(item.googleplus ==='')">
                              <a :href="item.googleplus" class="btn btn-link" target="_blank" ><i class="fa fa-google-plus-official"></i></a>
                            </span>
                            <span v-if="!(item.reddit ==='')">
                              <a :href="item.reddit" class="btn btn-link" target="_blank" ><i class="fa fa-reddit"></i></a>
                            </span>
                            <span v-if="!(item.angellist ==='')">
                               <a :href="item.angellist" class="btn btn-link" target="_blank" ><i class="fa fa-angellist"></i></a>
                            </span>
                            <span v-if="!(item.skype ==='')" >
                                <a :href="item.skype" class="btn btn-link" target="_blank" ><i class="fa fa-skype"></i></a>
                            </span>
                            <span v-if="!(item.telegram ==='')">
                             <a :href="item.telegram" class="btn btn-link" target="_blank" ><i class="fa fa-telegram"></i></a>
                            </span>
                            <span v-if="!(item.wechat ==='')" >
                             <a :href="item.wechat" class="btn btn-link" target="_blank" ><i class="fa fa-wechat"></i></a>
                            </span>
                            <span v-if="!(item.tumblr ==='')" >
                              <a :href="item.tumblr" class="btn btn-link" target="_blank" ><i class="fa fa-tumblr"></i></a>
                            </span>
                            <span v-if="!(item.chat ==='')">
                              <a :href="item.chat" class="btn btn-link" target="_blank" ><i class="fa fa-comment"></i></a>
                            </span>
                            <span v-if="!(item.discord==='')">
                            <a :href="item.discord" class="btn btn-link" target="_blank" ><i class="fa fa-discord"></i></a>
                            </span>
                            <span v-if="!(item.wikipedia ==='')">
                              <a :href="item.wikipedia" class="btn btn-link" target="_blank" ><i class="fa fa-wikipedia-w"></i></a>
                            </span>
                             <span v-if="!(item.whitepaper ==='')">
                                <a :href="item.whitepaper" class="btn btn-link" target="_blank" ><i class="fa fa-copy"></i></a>
                            </span>
                            <span v-if="!(item.email ==='')">
                               email: <span class="btn btn-link fa fa-envelope about-info-title" >{{item.email }}</span>
                            </span>
                        </div>  
                      </div>
                  </div>        
            </div>
        
      </div> 
    </div> 
   </div> 
</div>


</template>
<script>
import {mapState} from 'vuex';
  export default {

    methods: {

        openItem: function (website) {

                window.open(website);
         }
    },

    computed: {
  ...mapState({
          starter: state => state.company.lending,
          active: state =>  state.company.activeInfo,
          first: state => state.company.firstLoad,
   }),

    items() {

        if (this.first == true) {

          return this.starter
        }

        else {

          return this.active;
        
        }
    }, 

    item() {
    
        return this.items.find(p => p.name == this.$route.params.name)
    }
 },

  }
</script>
>
<style>
<!--
 /* Font Definitions */
 @font-face
  {font-family:"Cambria Math";
  panose-1:2 4 5 3 5 4 6 3 2 4;
  mso-font-charset:0;
  mso-generic-font-family:roman;
  mso-font-pitch:variable;
  mso-font-signature:-536869121 1107305727 33554432 0 415 0;}
@font-face
  {font-family:Calibri;
  panose-1:2 15 5 2 2 2 4 3 2 4;
  mso-font-charset:0;
  mso-generic-font-family:swiss;
  mso-font-pitch:variable;
  mso-font-signature:-469750017 -1073732485 9 0 511 0;}
@font-face
  {font-family:Georgia;
  panose-1:2 4 5 2 5 4 5 2 3 3;
  mso-font-charset:0;
  mso-generic-font-family:roman;
  mso-font-pitch:variable;
  mso-font-signature:647 0 0 0 159 0;}
 /* Style Definitions */
 p.MsoNormal, li.MsoNormal, div.MsoNormal
  {mso-style-unhide:no;
  mso-style-qformat:yes;
  mso-style-parent:"";
  margin-top:0in;
  margin-right:0in;
  margin-bottom:8.0pt;
  margin-left:0in;
  line-height:107%;
  mso-pagination:widow-orphan;
  font-size:11.0pt;
  font-family:"Calibri",sans-serif;
  mso-fareast-font-family:Calibri;
  color:black;}
span.SpellE
  {mso-style-name:"";
  mso-spl-e:yes;}
.MsoChpDefault
  {mso-style-type:export-only;
  mso-default-props:yes;
  mso-ascii-font-family:Calibri;
  mso-ascii-theme-font:minor-latin;
  mso-fareast-font-family:"Times New Roman";
  mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;
  mso-hansi-theme-font:minor-latin;
  mso-bidi-font-family:"Times New Roman";
  mso-bidi-theme-font:minor-bidi;}
.MsoPapDefault
  {mso-style-type:export-only;
  margin-bottom:8.0pt;
  line-height:107%;}
@page WordSection1
  {size:11.0in 8.5in;
  mso-page-orientation:landscape;
  margin:70.5pt 1.0in 70.0pt 1.0in;
  mso-header-margin:.5in;
  mso-footer-margin:.5in;
  mso-paper-source:0;}
div.WordSection1
  {page:WordSection1;}
 /* Style Definitions */
 table.MsoNormalTable
  {mso-style-name:"Table Normal";
  mso-tstyle-rowband-size:0;
  mso-tstyle-colband-size:0;
  mso-style-noshow:yes;
  mso-style-priority:99;
  mso-style-parent:"";
  mso-padding-alt:0in 5.4pt 0in 5.4pt;
  mso-para-margin-top:0in;
  mso-para-margin-right:0in;
  mso-para-margin-bottom:8.0pt;
  mso-para-margin-left:0in;
  line-height:107%;
  mso-pagination:widow-orphan;
  font-size:11.0pt;
  font-family:"Calibri",sans-serif;
  mso-ascii-font-family:Calibri;
  mso-ascii-theme-font:minor-latin;
  mso-hansi-font-family:Calibri;
  mso-hansi-theme-font:minor-latin;
  mso-bidi-font-family:"Times New Roman";
  mso-bidi-theme-font:minor-bidi;}

   .bottom-tabs {
     width: 100%;
  }
  .nav-menu-2 .w-nav-menu {
    height:66px;
  }
  .w-nav-link {
    padding: 20px;
  }
    #dropitem22 {
      margin-top: 0px;
    }

    .nav-link-3 {
   text-align: center !important;
 }

    .w-col-10 {
      width: 50%;
     }
  .card {
    border-radius: 10px;
    box-shadow: 0 1px 15px -5px rgba(122, 122, 122, 0.5) !important;
    min-height: 840px ;
  }

  .scroll {
    margin-left:auto;
    margin-right:auto;
    height: 380px;
    overflow: auto;
    text-align:center;
  }
  #kpl2 {
    margin-left: auto;
    margin-right: auto;
    width: 90%;
}

.tagbtn {
  background-color: #2fb7ff;
  color: white !important;
  padding: 1px 5px;
  border-radius: 10px;
}

  .readmore {
    border: solid #2fb7ff;
    iborder-radius: 3px;
  }
  .readmore:hover {
    background: rgba(20, 160, 253, .82) !important;
    color: white !important;
}

.section-title, .column-title, .col-sm-5, .card {
  margin-top:50px;
  margin-bottom:50px;
}
.comp-show-container {
  width:50%;
}
.row {
  width:100%;
}

@media screen and (max-width: 1300px) {
  .row, .comp-show-container {
    width: 100% !important;
  }
  .card {
    height:auto;
  }
}
.news-h {
    margin-top: 50px !important;
}
.fixyFH {
  text-align:center;
 }
 h1, h2 {
   color:#4d5052 !important;
 }
h4 {
  color: darkgray;
}
 .details-wrapper p {
   text-align:justify;
 }
 #kpl2 p {
   padding:20px;
 }
 .card:hover {
    box-shadow: 0px 0px 5px -2px !important;
    transition: none !important;
  }

  .nuxt__build_indicator {
  box-sizing: border-box;
  font-family: calibri;
  padding: 15px 15px;
  border-radius: 1px;
  box-shadow: 1px 1px 2px 2px rgba(0,0,0,0.2);
  width: 420px;
  z-index: 10;
  font-size: 24px;
  line-height: 1.2rem;
  font-style: calibri;
  background-color: white !important;
}


  .nuxt__build_indicator2 {
  box-sizing: border-box;
  font-family: calibri;
  border-radius: 1px;
  margin: 15px 15px;
  box-shadow: 1px 1px 2px 2px rgba(0,0,0,0.2);
  width: 380px;
  height: 200px;
  z-index: 3;
  font-size: 20px;
  line-height: 1.2rem;
  font-style: calibri;
  background-color: white !important;
}



  .nuxt__build_indicator3 {
  box-sizing: border-box;
  font-family: calibri;
  margin: 15px 15px;
  border-radius: 1px;
  box-shadow: 1px 1px 2px 2px rgba(0,0,0,0.2);
  width: 420px;
  z-index: 3;
  font-size: 19px;
  font-style: calibri;
    background-color: white !important;
}

</style>
