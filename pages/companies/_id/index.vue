



<template>
<div class="main-div">
  <div class="col-A">
    <div class="col-sm-5">
        <img  v-if="item.logo_item" class="nuxt__build_indicator2" :src="item.logo_item">
    </div>
    <br>

    <div class="info-box">
        {{ item.description }}
    </div><br>

    <div class=
    "info-box" v-if="(item.state) || (item.phone) || (item.country) || (!item.website ==='') || (!item.email==='') || (!item.facebook ==='') || (!item.github ==='') || (!item.medium ==='') || (!item.youtube ==='') || (!item.pinterest ==='')" >
         <ul>
          <li v-if="item.state"><b>Location:</b>{{item.city }}
            {{ item.state }}  {{item.country}}
          </li>
          <li v-if="item.phone"><b>Phone:</b>
              {{item.phone}}
          </li>
          <li v-if="!(item.website ==='')">
            <b>Website:</b>
            <a href="#" v-on:click="openItem(item.website)" > {{item.website}}</a>
          </li>
           <li v-if="item.founders">
            <b>Founders:</b>
            {{item.founders}}
           </li>
           <li v-if="item.founding_yr" ><b>Founded:</b>
            {{item.founding_yr}}
           </li>
        <li v-if="!(item.email==='') || !(item.facebook ==='') || !(item.github ==='') || !(item.medium ==='') || !(item.youtube ==='') || !(item.pinterest ==='')" >
          <span v-if="!(item.email==='' || item.email == undefined)"><br><b>Email:</b> <a :href="`mailto:${item.email}`" class="mdi mdi-envelope about-info-title" >{{item.email }}
          </a><br></span>

          <span v-if="!(item.facebook ==='')" >
              <a :href="item.facebook" target="_blank" mdi mdi-facebook ></a>
          </span>

          <span v-if="!(item.github ==='')">
              <a :href="item.github"  target="_blank" class="mdi mdi-github" ></a>
          </span>

          <span v-if="!(item.medium ==='')">
              <a :href="item.medium" target="_blank" class="mdi mdi-medium"  ></a>
          </span>

          <span v-if="!(item.youtube ==='')">
              <a :href="item.youtube" target="_blank" class="mdi mdi-youtube" ></a>
          </span>

          <span v-if="!(item.pinterest ==='')" >
              <a :href="item.pinterest" target="_blank" class="mdi mdi-pinterest" ></a>
          </span>
        </li>
        </ul>
     </div>
  </div>

 <div class="col-B">
   <div class="key-management"  v-if="!executives.length"  v-for="post in posts">
      <h3>key management</h3>
     <div class="exec-comp-div">
       <div class="comp-exec-1">

          <img v-if="!(post.pic_item=== undefined)" class="exec-image" :src="post.pic_item"></img>
            <b> {{post.execheader }} :</b><br>
               {{ post.execname}}

          <span v-if="!(post.linkedin ==='' )">
             <a :href="post.linkedin" target="_blank" class="
             mdi mdi-linkedin" ></a>
          </span>

          <span v-if="post.funding" class="description-box"> <b>funding to date:</b>
            {{post.funding}}
          </span>
          <br>

        </div>
      </div>
    </div>
    <div class="key-management"  v-if="!(executives.length == undefined)" v-for="executive in executives">
      <h3>key management</h3>
        <div class="exec-comp-div">
          <div class="comp-exec-1">
                <img v-if="!(executive.pic_item === undefined)" class="exec-image" :src="executive.pic_item">
                </img>
            <ul>
              <li>
                <b>{{executive.title }}:</b><br>
                {{executive.first}} {{executive.last}}
                <br>
              </li>
              <li v-if="!(executive.email =='') ||!(executive.linkedIn ==='') || !(executive.twitterurl === '')|| !(executive.facebook ==='') || !(executive.github ==='') || !(executive.instagram ==='') || !(executive.youtube ==='') || !(executive.pinterest ==='') || !(executive.googleplus =='') || !(executive.discord =='') || !(executive.snapchat =='') || !(executive.telegram =='') || !(executive.angellist =='')"
                  <span v-if="!(executive.email =='')"> <b>Email:</b> <a class="mdi mdi-envelope about-info-title" > {{executive.email }}</a><br>
                  </span>

                  <span v-if="!(executive.linkedIn ==='')" >
                     <a :href="executive.linkedIn"  target="_blank" class="mdi mdi-linkedin" ></a>
                  </span>

                  <span  v-if="!(executive.twitterurl === '')" >
                     <a :href="executive.twitterurl" target="_blank" class="mdi mdi-twitter" ></a>
                  </span>

                  <span v-if="!(executive.facebook ==='')" >
                    <a :href="executive.facebook" target="_blank" class="mdi mdi-facebook"></a>
                   </span>

                  <span v-if="!(executive.github ==='')">
                      <a :href="executive.github" target="_blank"  class="mdi mdi-github" ></a>
                  </span>

                  <span v-if="!(executive.instagram ==='')" >
                    <a :href="executive.instagram" target="_blank" class="mdi mdi-instagram"></a>
                   </span>

                   <span v-if="!(executive.youtube ==='')" >
                    <a :href="executive.youtube" target="_blank" class="mdi mdi-youtube" ></a>
                   </span>

                    <span v-if="!(executive.pinterest ==='')" >
                    <a :href="executive.pinterest" target="_blank" class="mdi mdi-pinterest" ></a>
                    </span>

                    <span v-if="!(executive.googleplus =='')" >
                        <a :href="executive.googleplus" target="_blank" class="mdi mdi-googleplus" ></a>
                    </span>

                    <span v-if="!(executive.discord =='')" >
                    <a :href="executive.discord" target="_blank" class="mdi mdi-discord" ></a>
                    </span>

                   <span v-if="!(executive.snapchat =='')" >
                    <a :href="executive.snapchat" target="_blank" class="mdi mdi-snapchat"></a>
                   </span>

                   <span v-if="!(executive.telegram =='')" >
                    <a :href="executive.telegram" target="_blank" class="mdi mdi-telegram"></a>
                   </span>

                   <span v-if="!(executive.angellist =='')" >
                   <a :href="executive.angellist" target="_blank" class="mdi mdi-angellist" ></a>
                   </span>
                </li>
              </ul>
          </div>
        </div>
     </div>
    <br>

      <div class="info-box" v-show="!(raises.length == undefined)" v-for="raise in raises">

            {{raise.item_date }}
             <a v-if="!(raise.url == undefined)" :href="raise.url" class="btn btn link"  target="_blank" > {{raise.raise_type}} {{raise.other}}</a>

            <br> {{raise.amount}}  <br>
                Investors: {{raise.lead}} {{raise.partcipating}}

      </div>

      <div v-show="!(posts.length == undefined)"
          v-for="post in posts">

            <div v-if="!(post.funding ==''|| post.funding == undefined)|| !(post.advisors.length == undefined || post.advisors ==='')"  class="info-box">
              <span v-if="!(post.funding ==''|| post.funding == undefined)">
                  <b>Total funding</b><br> {{post.funding}}
                  <br>
              </span>

              <span v-if="!(post.investors == '')" > <b>Investors:</b>{{post.investors}}
              </span>

              <span v-if="!(post.advisors.length == undefined || post.advisors ==='')">
                <b>Advisors</b>{{post.advisors }}<br>
              </span>
            </div>

            <div class="info-box">

              <span v-if="post.interest">
                 <br><b>Article Snippit: </b><br><br> {{post.interest }}<br>
                 <br>
                  <nuxt-link class="gardient-button" :to="'/posts/' + post.id " > See Article </nuxt-link>
              </span>
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
        allCompanies:  state => state.company.allCompanies,
        allPosts: state => state.allPosts
     }),

    items() {

        if (this.first == true && !(this.allCompanies.length) ) {
          return this.starter
        }
        else if (this.allCompanies.length)
        {
          return this.allCompanies
        }
        else {
          return this.active;
        }
    },

     id() {
        return this.item.id;
    },

    //showSocialDiv(current) {

      //  if ((!current.facebook ==='') || (!current.medium ==='') || //(!current.github ==='') || !(!current.youtube ==='') || //(!current.pinterest ==='') || (!current.email ===''))
        // {
          //  return true;
        // }
        //else {
          //  return false;
        //}
    //},


    item() {

        if (this.allCompanies) {

           return this.allCompanies.find(p => p.id == this.$route.params.id)
        }

        else {
           return this.items.find(p => p.id == this.$route.params.id)
        }
    }

    },

   async asyncData({params, $axios }) {

      let response = await $axios.get('executives?cid=' + params.id)

      let result = await $axios.get('raises?cid=' + params.id)

      let retval = await $axios.get('posts?compid=' + params.id)

      return {
        executives:response.data,
        raises: result.data,
        posts:  retval.data,
       }
    },
}
</script>


<style scoped>
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
 .WordSection1
  {size:11.0in 8.5in;
  mso-page-orientation:landscape;
  margin:70.5pt 1.0in 70.0pt 1.0in;
  mso-header-margin:.5in;
  mso-footer-margin:.5in;
  mso-paper-source:0;}
div.WordSection1
  {page:WordSection1;}
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
 #i {
display:block; color:black;
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

i { color:dark-grey !important; display:block; }
.span { color:dark-grey !important; display:block;}

.main-div {
  background: #f2f2f2;
  display: -webkit-box;
  font-family: Roboto, 'Segoe UI', Tahoma, sans-serif;
}
.col-A, .col-B {
  width: 50%;
}

.top-banner {
  height: 120px;
  background: #ffffff;
  margin:20px;
}

.description-box {
  background: #ffffff;
  margin:20px;
  padding: 20px;
  font-size:16px;
}

.exec-image {
  width: 100px;
}

.info-box {
  background: #ffffff;
  margin:20px;
  padding: 20px;
  font-size:14px;
}

li {
  appearance: auto;
  margin:10px;
}

ul {
  display: inline;
 }

.key-management {
  height: 335px;
  background: #ffffff;
  margin:20px;
  font-size: 16px;
 }

.comp-exec-1, .comp-exec-2 {
  width: 50%;
}

.exec-comp-div {
  display: -webkit-box;
  text-align: -webkit-center;
}

h3 {
  font-size:18px;
  text-align:center;
  padding:10px;

}
</style>
