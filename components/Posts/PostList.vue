
<template>
<div id="main">
<ol>
<ul class="art-rows" v-for="post in posts">
  <div class="w-dyn-list" >
    <div class="article-card" style="margin:10px;">
    <div style="height:1px;margin-left:auto;margin-right:auto;margin-top:20px;" class="coolbar"> </div>
    <div class="w-dyn-items">
    <div class="w-dyn-item">
    <div class="post-wrapper">
    <div class="post-content">
            <br><br>
    <div class="post-info">

       <div v-if="!(post.created_date==null)" class="post-info" style="float:left;"><a class="datetag">{{post.created_date}}</a>
        </div>

        <div class="w-row">
          <div v-if="!(post.logo_url==null)" class="flex-img">
              <div class="centering-imgs w-col w-col-6 w-col-medium-6 w6-hide-tiny">
                  <a class="blog-image w-inline-block" >
                      <img :src="post.logo_url" width="180" style="max-width: 180px ;max-height:130; overflow:none;"
                     >
                  </a>
               </div>
           </div>
           <div class="w-col w-col-12 w-col-medium-12 w12-hide-tiny">
              <div>
                <span style="text-transform:none !important;"  class="post-main-text">
                       <b>Most Recent Coverage:</b><br><b><nuxt-link id="myArticleLinkTag" :to="'/posts/' + post.id " class="mdi mdi-book-open mdi-18px"  >{{post.teaser }}</nuxt-link></b>,

                       <div class="sumary"> {{post.summary}} </div>
                      <br>
                       <div v-if="activeTab=='Advisors'" >
                       <b>Advisors:</b> {{post.advisors}}
                      <br><br>
                       </div>
                        <br><br><br>
                        <div class="center-btn">
                          <nuxt-link class="gardient-button" :to="'/posts/' + post.id " > Read More</nuxt-link>
                        </div>
                        <br>
                  </span>
                  </div>
              </div>
          </div>
        </div>
      </div>
        </div>
      </div>
      </div>
    </div>
  </div>
    </ul>
    </ol>
  </div>
</template>

<script>
import {mapState} from 'vuex';
 export default {
  name: 'PostList',
  props: ["posts", "board"],
  computed: {
  ...mapState({
      activeTab: state => state.posts.activeArtTab,
   })
  },
  methods: {

    idlists:  function(post_id) {
      for(var i = 0; i < this.board.length; i++) {
     if(this.board[i] == post_id)
        return post_id;
      }
   return 0;
},

  postFilter: function(posts) {

       return this.posts.filter(post => post.id==this.idlists(post.id));
     }
  },

};

</script>
 <style scoped>
 .sumamry {
   overflow: auto;
   height: 100px;
 }
 .w-dyn-list {
   width: 100% !important;
 }
 .gardient-button {
   background-image: linear-gradient(200deg, #ffffff 10%, #ffffff 39%, #ffffff 80%);
   background-size: 400% 400% !important;
   -webkit-animation: gradient 15s ease infinite !important;
   animation: gradient 15s ease infinite !important;
   width: -webkit-fit-content !important;
   width: -moz-fit-content !important;
   width: fit-content !important;
   margin-left: auto !important;
   margin-right: auto !important;
   margin-bottom: 20px !important;
   border-radius: 10px !important;
   border: none !important;
   padding: 10px 20px !important;
   font-family: poppins !important;
   color: #4f81bd !important;
   font-size: 12px !important;
   text-decoration: none !important;
   box-shadow: 0px 0px 10px -8px !important;
 }
 .gardient-button:hover {

   box-shadow: 0px 0px 10px -5px !important;
 }
 .center-btn{
   text-align: -webkit-center;
   display: flex;
 }
 a {
   color:#4f81bd;
   font-weight: bold;
   text-decoration: none;
 }
  #myWebLinkTag {
    display: table !important;
    margin-top:10px;
  }
  @media screen and (max-width:1550px) {
    .post-main-text {
      overflow:auto;
    }
  }

  @media screen and (max-width:800px) {
    .article-card {
      min-height: 900px !important ;
    }
  }
  .art-rows {
    display: inline-flex;
    width: 50%;
    padding: 10px;
    place-content: center;
  }
  .div-mobile-col {
    padding:0px;
  }
  .post-main-text {
    height: auto;
    display: inline-block;
    border-bottom-style: groove;
    border-bottom-color: #d2e8ff1f;
    overflow:auto;
    width: 100%;
  }
  table {
    width: 100%;
  }
  .exec-image-posts {
    height:100px;
    margin-left:0px !important;
    margin-right:0px !important;
    margin-top:20px !important;
  }
  .flex-img {
    width:100%;
    display:flex;
  }
  .centering-imgs {
    text-align:center !important;
    margin-left: auto;
    margin-right: auto;
    display:table;
  }
  .postAdmin-btns {
      margin: 10px 0px 10px 0px;
      display: revert;
      border-bottom-style: groove;
      border-bottom-color: #d2e8ff1f;
}
  .w3-teal {
    margin-top:20px !important;
  }
::-webkit-scrollbar-track {
     -webkit-box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.5);
     border-radius: 1px;
     background: white;
     box-shadow: none !important;
}
.post-summary-wrapper  {
       height: 400 !important;
    overflow: scroll;
}
     .blog-title {
       font-size: 20px !important;
}
     .blog-title-link {
       color: #004f96;

}
     .readmore:hover {
        background: rgba(20, 160, 253, .82) !important;
        color: white !important;
}
    .extra-details p {
        font-variant: none !important;
 }
.readmore {
        border: solid #2fb7ff;
        border-radius: 3px;
}
.alert-notice {
        line-height: 2.2em;
        color: red;
        margin-top: 8vw;
}

.w-col-medium-3 {
  text-align: left;
}
img.in-your-face {
  width:50px;
  margin:auto;
}
.w-col-w-col-9{
  text-align:left;
}
.featuredsidemenu    {
    padding:30px;
}
.w-col.w-col-12.w-col-medium-12.w12-hide-tiny {
    color: dimgray;
}
.article-card {
    box-shadow: 0 1px 5px 0 rgb(0 89 132 / 30%);
    border-radius: 0px;
    padding: 10px;
    height: auto;
    width: 100%;
    min-height: 675px;
    margin-left: auto !important;
    margin-right: auto !important;
    margin-bottom: 50px !important;
        background: #f7f7f7 !important;
}
.article-card:hover {
    box-shadow: 0 1px 5px 0 rgba(0, 89, 132, 0.16);
    overflow: hidden;
}

.article-card .w-col-9 {
    text-align: left;
    width: 100%;
}
.details-wrapper {
    margin-top: 8px;
    height: 200px;
}
tr {
    text-align: left !important;
    vertical-align: text-top;
    text-align-last: left !important;
    font-style: italic;
font-family: arabic script;
}

ol, ul, tr, td {
  text-transform: none !important;
}


    *{-webkit-text-size-adjust:none;-webkit-text-resize:100%;text-resize:100%;}
    table{border-spacing: 0;border-collapse: collapse !important;}
    h1, h2, h3, h4, h5, h6{display:block; Margin:0; padding:0;}
    img, a img{border:0; height:auto; line-height:100%; outline:none; text-decoration:none;}
    body, #bodyTable, #bodyCell{height:100% !important; margin:0; padding:0; width:100% !important;}
    /*------ CLIENT-SPECIFIC STYLE ------ */
    @-ms-viewport{width:device-width;}
    table{mso-table-lspace:0pt; mso-table-rspace:0pt;}
    p, a, li, td, blockquote{mso-line-height-rule:exactly;}
    p, a, li, td, body, table, blockquote{-ms-text-size-adjust:100%; -webkit-text-size-adjust:100%;}
    #outlook a{padding:0;}
    .ReadMsgBody{width:100%;} .ExternalClass{width:100%;}
    .ExternalClass,.ExternalClass div,.ExternalClass font,.ExternalClass p,.ExternalClass span,.ExternalClass td,img{line-height:100%;}
    /*------ GOOGLE FONT STYLE ------ */
    [style*="Open Sans"] {font-family:'Open Sans', Helvetica, Arial, sans-serif !important;}
    [style*="Lora"] {font-family:'Lora', Georgia, Times, serif !important;}
    /*------ GENERAL STYLE ------ */
    .wrapperTable{width:100%; max-width:620px; Margin:0 auto;}
    /*------ Media Width 640 ( iphone 6 ) ------ */
  @media only screen and (min-device-width: 601px) {
  .content {width: 100% !important;}

  }


    /*------ Media Width 640 ------ */
      table[class="wrapperTable"]{width:100% !important; }
      table[class="wrapperPreHeader"] .hide{ display: none !important;}
      td[class="maxWidth"] { max-width: 100% !important;}
      div[class="maxWidth"] { max-width: 100% !important;}
      img[class="maxWidth"] { max-width: 100% !important;}

img {
    max-width: 100%;
    height: auto;
    max-height: 200px;
}
.icon-circle {
  display: block;
  width: 90px;
  height: 90px;
  margin-right: auto;
  margin-bottom: 20px;
  margin-left: auto;
  border-radius: 100%;
  background-color: #4253ff;
}
.card {
  background: #fcfeff;
  border-radius: 20px;
}

  .container {
    display: contents;
  }

  .records {
    width: 95%;
    margin-left:auto;
    margin-right:auto;
  }

  .link {
    background: #24a7ff !important;
    color: white !important;
    border-radius: 10px;
    padding: 5px;
    margin-top: 10%;
    margin-bottom: 10%;
   }

   .link:hover {
     background: #24a7ff !important;
   }

   .table {
    width: 100% !important;
    text-align:left !important;
  }
  .td  {
      text-align:left !important;
  }

.datetag {
       position: relative !important;
width: auto;
margin-top: -50px;
display: block;
padding: 3px;
border-radius: 3px;
background: #ffffff80;
  }
  .flex-img {
    min-height: 250px;
  }
</style>
