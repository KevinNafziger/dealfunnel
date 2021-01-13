
<template>
<div id="main">
<ol>
<ul class="art-rows" v-for="letter in letters">
  <div class="w-dyn-list" >
    <div class="article-card" style="margin:10px;">
    <div class="w-dyn-items">
    <div class="w-dyn-item">
    <div class="post-wrapper">
    <div class="post-content">

    <div class="post-info">

       <div v-if="!(letter.created_date==null)" class="post-info" style="float:left;z-index:9;"><a class="datetag">{{letter.created_date}}</a>
        </div>
        <div v-if="!(letter.logo_url==null)" class="flex-img">
            <div class="centering-imgs w-col w-col-6 w-col-medium-6 w6-hide-tiny">
                <a class="blog-image w-inline-block" >
                    <img :src="letter.logo_url" width="70" style="max-width: 180px ;max-height:130; overflow:none;"
                   >
                </a>
             </div>
         </div>

           <br>
        <div class="w-row">
           <div class="w-col w-col-12 w-col-medium-12 w12-hide-tiny">
                <span style="overflow:auto;" class="post-main-text">
                       <b>:</b><br><b><nuxt-link id="myArticleLinkTag" :to="'/newsletters/' + letter.id " class="mdi mdi-book-open mdi-18px"  ></nuxt-link></b>,

                       <div style="overflow:auto; margin:5px;" class="summary" v-html="letterPreview(letter)">
                       </div>
                      <br>
                  </span>

              </div>
          </div>
        </div>
        <div class="center-btn">
          <nuxt-link class="gardient-button" :to="'/newsletters/' + letter.id " > Read More</nuxt-link>
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
  name: 'LettersList',
  props: ["letters", "board"],
  computed: {
  ...mapState({

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

 letterPreview(item) {

    return item.blog_entry.slice(0, (item.blog_entry.length/17));
  },


  lettersFilter: function(letters) {

       return this.letters.filter(letter => letter.id==this.idlists(letter.id));
     }
  },

};

</script>
 <style scoped>

 .summary {
   overflow: auto;
   height: 350px;
 }
 .w-dyn-list {
   width: 100% !important;
   display: inline-table;
 }
 .gardient-button {
     background-image: linear-gradient(200deg, #03A9F4 10%, #4f81bd 39%, #2196F3 80%);
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
     color: #ffffff !important;
     font-size: 12px !important;
     height: -webkit-min-content;
     height: -moz-min-content;
     height: min-content;
 }
 .gardient-button:hover {
   box-shadow: 0px 0px 10px -5px gray !important;
   transition: 0.2s;
   text-decoration: none;
 }
 .center-btn{
   text-align: -webkit-center;
   display: flex;
 }
 .w-col.w-col-12.w-col-medium-12.w12-hide-tiny {
    width: 100% !important;
    padding: 20px;
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
  .w-row{

  }
  .art-rows {
    display: -webkit-inline-box;
    width: 50%;
    padding: 10px;
    place-content: center;
  }
  .div-mobile-col {
    padding:0px;
  }
  .post-main-text {
    height: auto;
    min-height: 400px;
      border-bottom-style: groove;
      border-bottom-color: rgba(210,232,255,0.12157);
      overflow: auto;
      width: 100%;
      padding: 20px;
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
    display: contents;
        width: 200px;
  }
  .centering-imgs {
    text-align: center !important;
    margin-left: auto;
    margin-right: -60px;
    margin-top: 20px;
    margin-bottom: 20px;
    display: grid;
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
.post-summary-wrapper  {
       height: 400 !important;
    overflow: auto;
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
.post-info {
      margin-top: 10px;
}
.article-card {
    box-shadow: 0 1px 5px 0 rgb(0 89 132 / 30%);
    border-radius: 0px;
    padding: 10px;
    height: auto;
    min-height:625px;
    width: 100%;
    padding: 2px;
    margin-left: auto !important;
    margin-right: auto !important;
    margin-bottom: 32px !important;
    background-color: #dedede00;
}
.article-card:hover {
    box-shadow: 0 1px 5px 0 rgba(0, 89, 132, 0.16);
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
  .w-dyn-list {
      width: 100% !important;
      display: block;
  }
.datetag {
       position: relative !important;
       width: auto;
       margin-top: -5px;
       display: block;
       padding: 3px;
       border-radius: 3px;
       background: #ffffff80;
  }
  @media screen and (max-width:900px) {
    .art-rows {
          display: contents;
          height: auto !important;
          min-height: 300px !important;
    }

  }

</style>
