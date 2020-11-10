
<template>
<div id="main">
<ol class="div-mobile-col">
<ul class="art-rows" v-for="post in posts">
<div class="w-dyn-list "  >
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
                 <div class="w-row ">
                  <div v-if="!(post.logo_url==null)" class="flex-img">
                 <div class="centering-imgs w-col w-col-6 w-col-medium-6 w6-hide-tiny">

                      <a class="blog-image w-inline-block" >
                          <img :src="post.logo_url" width="180" style="max-width: 180px ;max-height:130; overflow:none;"
                         >
                      </a>
                  </div>
                  </div>
                  <div class="w-col w-col-12 w-col-medium-12 w12-hide-tiny">
                          <table>
                                <tbody style="text-transform:none !important;" class="post-main-text">
                                <tr>
                                  <td><b>Most Recent Coverage:</b><br><b><a id="myArticleLinkTag" href="#" class="mdi mdi-book-open mdi-18px" v-on:click="visitpostlink(post.id)" >{{post.teaser }}</a></b>, {{post.summary}} <i>(Please click on the hyperlink above to read this article)</i>
                                  <br><br>
                                </td>
                                </tr>

                                <tr v-if="post.newdescript===''">
                                   <td><b>Brief Summary:</b><br>{{ post.fact}}<a v-if="!(post.website==='')" id="myWebLinkTag" class="mdi mdi-web mdi-18px" :href="post.website" > website</a><br>
                                      <br><br>
                                  </td>
                                </tr>
                                <tr v-if="!(post.newdescript==='')">
                                <td><b>Brief Summary:</b><br>{{ post.newdescript}}<a v-if="!(post.website==='')" id="myWebLinkTag" class="mdi mdi-web mdi-18px" :href="post.website" > website</a><br>
                                      <br><br>
                                  </td>
                                </tr

                                <tr v-if="!(post.advisors==='')"><td><b> Advisors:</b><br> {{post.advisors}}<br><br></td></tr>

                               <tr v-if="!(post.investors.length === 0)"><td><b> Investors: </b><br> {{ post.investors }}<br><br></td></tr>

                                <tr v-if="!(post.execheader==='')"><td><b>{{post.execheader}}</b><br><br></td></tr>
                                <tr>
                                    <td>{{ post.execname }}<br><br></td>
                                </tr>
                               <tr v-if="!(post.exec_url==null)" class="centering-imgs">
                               <td>
                                 <a class="blog-image exec-image-posts" >
                                   <img :src="post.exec_url" width="90" style="max-width: 90px ;max=height:120px; overflow:none">
                                 </a><br>
                               </td>
                               </tr>

                                <tr v-if="!(post.linkedin==='')" class="center">
                                    <td><div class="column-45 w-col w-col-2"><a :href="post.linkedin" _blank class="w-inline-block"><img src="https://filesforfintech.s3.amazonaws.com/images/linkeding-icon-gray-.png"   class="in-your-face" ></a><br><br></div><br><br><br></td>
                                </tr>
                                <tr v-if="!(post.interest==='')" >
                                   <td>
                                    <b> Interesting Fact: </b> {{ post.interest}}
                                    <br><br>
                                  </td>
                                </tr>
                              </tbody>
                          </table>
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


 export default {
  name: 'PostList',
  props: ["posts"],
  methods: {

      idlists:  function(post_id) {
      for(var i = 0; i < this.$root.boardEnd.length; i++) {
     if(this.$root.boardEnd[i] == post_id)
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
  #myWebLinkTag {
    display: table !important;
    margin-top:10px;
  }
  @media screen and (max-width:1550px) {
    .post-main-text {
      overflow:auto;
    }
  }
  .art-rows {
    display: inline-flex;
    width: 33%;
    padding: 10px;
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

@media screen and (max-width: 940px) {
      .post-info p {
      margin-top: 20px;
      }
      .art-rows {
        width: 100% !important;
      }
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
.article-card {
    box-shadow: 0 1px 5px 0 rgb(0 89 132 / 30%);
    border-radius: 10px;
    padding: 10px;
    height: auto;
    width: 100%;
    margin-left: auto !important;
    margin-right: auto !important;
    margin-bottom: 50px !important;
    min-height: 900px;
}
.article-card:hover {
    box-shadow: 0 1px 5px 0 rgba(0, 89, 132, 0.16);
    overflow: hidden;
    border-radius:10px;
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
    background-color: #ffffff !important;
    text-align: left !important;
    vertical-align: text-top;
    text-align-last: left !important;
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
  .td { text-align:left !important; }

.datetag {
       position: relative !important;
  }
</style>
