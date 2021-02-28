<style scoped>

.p-class-j {
  text-align:justify;
  padding: 10px;
}
a {
  box-shadow: none;
  color:#ffffff;
  text-decoration: none !important;
}

body{

  margin:0;
  padding:0;
  width:100%;
  height:100%;
  font-family:arial !important;
  }
  .aware-card {
  max-width: 1000px;
  margin: auto;
  padding:20px;
  width:90%;
  border-radius: 3px;
  box-shadow: 0px 0px 10px -5px;
  background-color: #ffffff;
  }
  .header-container {
  box-shadow: 0 1px 3px 0 #a5a5a5 !important;
  }
  .testimonials {

    font-family:arial !important;
    margin:200px auto 100px;
    display:grid;
    grid-template-columns: repeat(auto-fit,minmax(350px, 1fr));
    grid-gap:20px;
    max-width: 1100px;
    padding-bottom: 200px;
  }

  .testimonials .card{
      position:relative;
      max-width: 440px;
      width: auto;

      margin:0 auto;
      background:#0616217a;
      padding:20px;
      box-sizing: border-box;
      text-align:center;
      box-shadow:0 10px 40px gray;
      overflow: hidden;
    }

    .testimonials .card .layer {
    position: absolute;
    top: calc(100% - 3px);
      width:100%;
      height:100%;
      left:0;
      background:linear-gradient( #4f81B4, #4F81BD);
      z-index:1;
      transition:0.5s;
  }

  .testimonials .card:hover .layer{
  top:0;
  }
  .testimonials .card .content{
  position:relative;
  z-index:2;
  }

  .testimonials .card .content p {
  font-size:18px;
  line-height:24px;
  color:#FFF;
  }

  .testimonials .card .content .image{
  width:100px;
  height:100px;
  margin: 0 auto;
  border-radius:50%;
  overflow:hidden;
  box-shadow: 0 10px 20px gray;
  }

 .testimonials .card .content .details h2 {
 font-size:15px;
 color:#fff !important;
 margin-top:20px;
 }

 .testimonials .card .content .details h2 span{
  color:#ffffff;
  font-size:12px;
  transtion:0.5s;
 }
.testimonials .card:hover .content .details h2 span { color:#fff;

 }

 @media screen and (max-width:1550px) {
  .img-G {
    display: none;
  }
  .intro-p{
    padding:20px;
    margin:auto;
    max-width:600px !important;
    display: flow-root;
  }
}

.img-G {
  right: 75px;
  position: absolute;
  top: 290px;
}

.gardient-button {
    display: grid;
    background-image: linear-gradient(200deg, #4F81BD 10%, #4F81BD 39%, #8ab4f8 80%);
    background-size: 400% 400% !important;
    animation: gradient 15s ease infinite !important;
    width: fit-content !important;
    margin-left: auto !important;
    margin-right: auto !important;
    border-radius: 10px !important;
    border: none !important;
    padding: 10px 20px !important;
    font-family: poppins !important;
    color: #ffffff !important;
    font-size: 12px !important;
    transition: 0.3s;
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 16px !important;
    box-shadow: 0px 1px 10px -3px #474747 !important;
}

.gardient-button:hover {
box-shadow: 0px 1px 5px -3px #474747 !important;
  }

.execspottittle {
    font-size: 40px;
    background: -webkit-linear-gradient(#6b69ca, rgba(20, 160, 253, 0.82));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: rgba(20, 160, 253, 0.82);
    padding: 15px;
  }

.featuredmenusection {
    padding: 10px;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 1px 3px 0 #a5a5a5;
    overflow: none;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 100px;
    padding-bottom: 100px;
    width: 90%;
    transition: 0.5s;
}
.featuredmenusection:hover {
  box-shadow: 0px 0px 10px -5px dimgray;
}

.rem-img {

  top: 350px;
  left: 8rem;
  position: absolute;
}

@media screen and (max-width:1550px) {
  .rem-img {
    top: 300px;
    left: 8rem;
    position: initial;
    display: table;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;
    transition: 0.5s;
  }
}

.text-block-20 {
    background-color: #5082be !important;
    border-radius: 10px;
    color: white !important;
    padding: 14px 25px;
    width: max-content;
    transition: 0.5s;
    margin-top:50px;
    margin-bottom:50px;
}

.text-block-20:hover {
    background: #ff9140 !important;
    box-shadow: 0 0 6px -1px #43454659, inset 0 0 26px 0px #ffe844 !important;
    cursor: pointer !important;
}
.intro-title {
    position: static;
    display: block;
    margin: 0px;
    padding: 0px 46px;
    background-color: #4286ff;
    background-image: linear-gradient(200deg, #4F81BD 10%, #0000005e 39%, #4F81BD 80%);
    color: #fff;
    font-size: 31px;
    line-height: 52px;
    font-weight: 400;
    text-align: center;
    box-shadow: 0 1px 3px 0 #a5a5a5 !important;
  }

.intro {
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-position: center;
  background-image: url('~assets/images/dealfunnel.png');
  background-size: cover;
  display: flex;
  margin-left: auto !important;
  margin-right: auto !important;
  margin-top: 25px;
  height:auto;
  width: 300px;
}
.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}
.intro-p {
    padding: 20px;
    margin: auto;
    max-width: 671px;
    display: flow-root;
    color: #474747 ;
    line-height: 1.9;
    letter-spacing: 0.6px;
    transition: 1s;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
p.MsoNormal {
    line-height: 35px;
    color: #474747 !important;
}
h2 {
    color: #4f81bd !important;
}
.images {
  width: auto;
margin: 0px;
border-radius: 20px;
}



.footer-info-links {
  width: 33.33% ;
}


.social-media-links {
    width: 19%;
    display: inline-flex;
    justify-content: center;
}
.footer-info-row {
  display: inline-flex;
    margin-top: 16px;
    font-size: 14px;
    font-weight: 300;
    width: 100%;
}
.slack-link {
      margin-top: 0px;
}

.footer{
  width:100%;
  height:70px;
  background-color: #4f81bd;
  color: #ffffff;
  bottom: 0px;
  position: fixed;
  text-align: center;
  z-index: 9;
}
.micro-txt {
  font-size: 10px;
  margin-top: -12px;
  letter-spacing: 0.5px;
}
.testi-p {
  text-align: justify;
  letter-spacing: 0.3px;
}
</style>

<template>
  <div class="home-page">

<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MH653XG"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>

  <section style="margin-bottom:30px;">
  </section>

  <br>
<div class="aware-card">
  <h1 style="border-radius:3px; margin-bottom: 0px; opacity: 1; transform: translateX(0px) translateY(0px) translateZ(0px);" class="intro-title">Newsletters, data and reports <br>
  </h1><br>
  <p class="MsoNormal">
  <span class="intro-p">
    <i>Fintech Horizons Latin America</i> features articles, reports, searchable datasets and a popular biweekly newsletter.</i> Overtime, our focus has grown beyond Fintech, and now encompasses technology businesses serving the financial services industry and beyond.     This includes companies in Blockchain, DLT and Crypto as well as in HealthTech, Artificial Intelligence, LegalTech, and Cybersecurity.
  </span>
  </p>
  <p class="intro-p" >
  <b>Exceptional</b> –
  <span class="SpellE"><i>Fintech Horizons' Latin America</i> </span>
  is beloved by dealmakers including investment bankers, partners and associates of venture capital firms, industry attorneys, PE practitioners and corporate executives. T.
  </p>
  <p class="intro-p"><b>Data Driven</b>–<span class="SpellE"></span>
  <i>DealFunnel</i> subscribers also receive online access to searchable datasets on capital raises, companies and articles. The data can be exported to <i>Excel</i> and other spreadsheet programs.
  <span style="mso-spacerun:yes"></span>
  </p>
  <p class="intro-p" ><b>Multi-channel support </b>–<span class="SpellE"></span>
  The <i>Fintech Horizons</i> team is here to help answer your questions. You can contact us by email,
  phone or join our Slack channel.
  <span style="mso-spacerun:yes"></span>
  </p>
  <p class="intro-p">
  <b>Propietary Content</b>–<span class="SpellE"></span>
  <i>Horizons Online</i> gives readers access to all of <i>Fintech Horizons'</i> propietary content</i>
  This propietary content includes reports on trending topics along with sets of auto-generated reports which include all of the company-related articles and capital raise data for that topic. These auto-generated reports are grouped by strategic action, size of expected raise, timing of expected raise, geography, subsector, and by broader categories such as 'Blockchain', 'Insurtech', 'Payments', 'AI', 'Lending' and 'OpenBanking. <i>Fintech Horizons</i> reports aggregate all of <i>FHMS's</i> own company-specific intelligence on that topic, derived from interviews with an executive or executives at the featured company.
  Our reports can generate a "wow" from some readers when they see the sheer volume of company-specific intelligence they provide.
  These reports aren't designed to provide a quick overview but to serve practitioners who want to review a large amount of company-specific intelligence related to a topic in a single document. A <i>FHM</i> report starts with a summary view highlighting the most actionable parts of each featured article. From this view, readers can scan all leads on a topic in order to quickly discover only those most relevant to them.
  </p>
  <p class="intro-p"><b>
  </p>
  <nuxt-link class="gardient-button" to="/subscription">Plan Details</nuxt-link>
  <p class="intro-p"><b>Team</b>–<span></span>
    <i>DealFunnel</i> is the lead publication of <i>Fintech Horizons Media</i>, a news organization founded by deal information specialists. The <i>DealFunnel</i> team includes Kevin Nafziger, CEO and Co-founder; Ben Koconis, Editor and Co-founder; Rebecca Wenzel, Americas Editor; Abraham Felix, Head of IT; and Berenice Cabellero, Head of Research.
  </p>
</div>

<Item/>
<StoriesSpotlight/>
<!-- Girl Image
<img class="img-G" width="300px;" src="https://firebasestorage.googleapis.com/v0/b/deal-funnel.appspot.com/o/deal%20funnel%20web%20stock%2Fsada.png?alt=media&amp;token=dad23bb5-f65c-414d-807e-372dee5a5522">
-->

  <!-- Testimonials -->
  <div class="testimonials">
    <!-- CARD 1 START-->
    <div class="card">
      <div class="layer"></div>
      <div class="content">
        <p class="testi-p"><i>DealFunnel</i> offers insightful content about innovative firms in the industry, allowing us to keep abreast of M&A and capital raises in the US and globally. The platform presents Fintech opportunities that we might not have seen in more traditional news or data sources.</p>
         <img src="https://filesforfintech.s3.amazonaws.com/EvolveCapital.png" alt="">

        <div class="details">
          <h2>
            <a href="https://www.evolve-capital.com/">Evolve Capital Partners</a><br>
            <span></span>
          </h2>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="layer"></div>
      <div class="content">
        <p class="testi-p">We love the newsletter. It is the best out there. It is not even close.
        </p>
        <div class="image">
         <img class="images"  src="https://upload.wikimedia.org/wikipedia/commons/2/28/Female_portrait_placeholder_cropped.jpg" alt="">
        </div>
        <div class="details">
          <h2>
            Head of Research, CVC Firm<br>
            <span></span>
          </h2>
        </div>
      </div>
    </div>
    <!-- CARD 3 end-->
  </div>
</div>

</template>

<script>
import Vue from 'vue';
import {mapState, mapMutations} from 'vuex';
import Item from '@/components/Grid/Item';

export default {
computed: {
    ...mapState({
          loadedPosts: pages => state.Post1,
          //post:  state.posts.post

      }),
   },

//asyncData ({ userAgent }) {
  //  return {
    //  userAgent
//}
//},

}

</script>

<template>
  <div class="home-page">
  <section style="margin-bottom:30px;">
  </section>
  <center>
  </center>
  <br>
<div class="aware-card">
  <h1 style="border-radius:3px; margin-bottom: 0px; opacity: 1; transform: translateX(0px) translateY(0px) translateZ(0px);" class="intro-title">Newsletters, data and reports <br>
  </h1><br>
  <p class="MsoNormal">
  <span class="intro-p">
    <i>Horizons LA</i> features articles, reports, and data on fast growing companies in Latin America. While our original focus was Fintech, our coverage has expanded to encompass technology businesses serving the financial services industry and beyond. This includes companies in Blockchain, DLT and Crypto as well as in HealthTech, Artificial Intelligence, LegalTech, and Cybersecurity.
  </span>
  </p>
  <p class="intro-p" >
  <b>Exceptional</b> –
  <span class="SpellE"><i>Horizons LA</i> </span>
  is beloved by executives in Latin America and across the globe as well as by dealmakers and practitioners including investment bankers, partners and associates of venture capital firms, industry attorneys, PE practitioners and economists. 
  </p>
  <p class="intro-p"><b>Data Driven</b>–<span class="SpellE"></span>
  <i>Horizons LA</i> members receive online access to searchable data on capital raises, companies and articles. The data can be exported to <i>Excel</i> and other spreadsheet programs.
  <span style="mso-spacerun:yes"></span>
  </p>
  <p class="intro-p" ><b>Multi-channel support </b>–<span class="SpellE"></span>
  The <i>Horizons LA</i> team is here to help. You can contact us by email,
  phone or join our Slack channel.
  <span style="mso-spacerun:yes"></span>
  </p>
  <p class="intro-p">
  <b>Propietary Content</b>–<span class="SpellE"></span>
  <i>Horizons LA</i> members receive online acccess to all of FHM's propietary content.</i>
  This propietary content includes reports on trending topics along with sets of auto-generated reports which include all of the company-related articles and capital raise data for that topic. <i>FHM's</i> auto-generated reports are grouped by strategic action, size of expected raise, timing of expected raise, geography, subsector, and by broader categories such as 'Blockchain', 'Insurtech', 'Payments', 'AI', 'Lending' and 'OpenBanking. <i>FHM</i> reports aggregate all of <i>FHM's</i> own company-specific intelligence on that topic, derived from interviews with an executive or executives at the featured company.
  Our reports can generate a "wow" from some readers when they see the sheer volume of company-specific intelligence they provide. <i>FHM </i> reports aren't designed to provide a quick overview but to serve practitioners who want to review a large amount of company-specific intelligence related to a topic in a single document. 
  </p>
  <p class="intro-p"><b>Value Proposition</b>–<span></span>
  The Fintech Revolution is creating greater economic growth and opportunity across Latin America. <i>Horizons LA</i> showcases companies that are driving that innovation. <i>Horizons LA</i> also features propietary reports, data, and articles that serve as a rich repository of information to executives, industry professionals and investors. 
 
  </p>
  <nuxt-link class="gardient-button" to="/subscription">Plan Details</nuxt-link>
  <p class="intro-p"><b>Team</b>–<span></span>
    <i> Horizons LA</i> is a publication of <i>Fintech Horizons Media</i>, a news organization founded by information specialists from the US and Latin America. The team includes Kevin Nafziger, CEO and Co-founder; Berenice Cabellero, Head of Research; Abraham Felix, Head of IT; and Rebecca Wenzel, Americas Editor.
  </p>
</div>
<StoriesSpotlight/>
<MyItem/>
<!-- Girl Image
<img class="img-G" width="300px;" src="https://firebasestorage.googleapis.com/v0/b/deal-funnel.appspot.com/o/deal%20funnel%20web%20stock%2Fsada.png?alt=media&amp;token=dad23bb5-f65c-414d-807e-372dee5a5522">


  <!-- Testimonials -->
  <div class="testimonials">
    <!-- CARD 1 START-->
    <div class="card">
      <div class="layer"></div>
      <div class="content">
        <p class="testi-p"><i>Fintech Horizons</i> offers insightful content about innovative firms in the industry, allowing us to keep abreast of M&A and capital raises in the US and globally. The platform presents Fintech opportunities that we might not have seen in more traditional news or data sources.</p>
         <img src="https://filesforfintech.s3.amazonaws.com/EvolveCapital.png" alt="">

        <div class="details">
          <h2>
            <a href="https://www.evolve-capital.com/">Evolve Capital Partners</a><br>
            <span></span>
          </h2>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="layer"></div>
      <div class="content">
        <p class="testi-p">We love the newsletter. It is the best out there. It is not even close.
        </p>
        <div class="image">
         <img class="images"  src="https://upload.wikimedia.org/wikipedia/commons/2/28/Female_portrait_placeholder_cropped.jpg" alt="">
        </div>
        <div class="details">
          <h2>
            Head of Research, CVC Firm<br>
            <span></span>
          </h2>
        </div>
      </div>
    </div>
    <!-- CARD 3 end-->
  </div>


</div>
</template>

<script>
import MyItem from '@/components/Grid/MyItem';
import StoriesSpotlight from '@/components/Grid/StoriesSpotlight';
import Vue from 'vue';
import Vue2TouchEvents from 'vue2-touch-events';
import '/plugins/vue-gtag.js';
import  "firebase/auth";
import firebase from 'firebase';
import {mapState, mapMutations} from 'vuex';
export default {
computed: {
    ...mapState({
          loadedPosts: pages => state.Post1,
          //post:  state.posts.post

      }),
   },

  async fetch({store}) {

       store.dispatch("posts/setView", "Front");

  },
}

</script>
