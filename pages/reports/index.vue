
<template>

<div class="report-section">
<div class="sectionix" id="top">
   <div class="title">
      <div class="content">
        <br>
         <h2>Topic</h2>
      </div>
   </div>
</div>
<div class="exespotbody">
  <div class="grid">
  <span  class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >
    <a href="lending.pdf">
    <div>
      <p>Lending</p>
    </div>
    <div class="col-reports-div">
      <div class="col-report" id="myEditReportButton">
      <span  ></span>
      </div>

      <div class="col-report" id="myReportPdfButton">
      <span class="mdi mdi-pdf-box "></span>
      </div>

      <div class="col-report" id="myViewReportLinkTag">
        <span class="mdi mdi-eye "></span>
      </div>
    </div>
    </a>
  </span>
  <span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >
     <a href="insurtech.pdf">
    <div >
      <p>Insurtech</p>
    </div>
    <div class="col-reports-div">

      <div class="col-report" id="myReportPdfButton">
      <span class="mdi mdi-pdf-box " ></span>
      </div>
      <div class="col-report" id="myViewReportLinkTag">
      <span class="mdi mdi-eye "></span>
      </div>
      </div>
    </a>
  </span>
  <span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >
     <a href="blockchain.pdf">
    <div >
      <p>Blockchain/DLT</p>
    </div>
    <div class="col-reports-div">


      <div class="col-report" id="myReportPdfButton">
      <span class="mdi mdi-pdf-box " ></span>
      </div>
      <div class="col-report" id="myViewReportLinkTag">
       <span class="mdi mdi-eye "></span>
      </div>
      </div>
    </a>
  </span>
  <span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >
    <a href="banking.pdf">
    <div >
      <p>Banking</p>
    </div>
    <div class="col-reports-div">

      <div class="col-report" id="myReportPdfButton">
      <span class="mdi mdi-pdf-box " ></span>
      </div>


      <div class="col-report" id="myViewReportLinkTag">
      <span class="mdi mdi-eye "></span>
      </div>
      </div>
    </a>
  </span>
</div>
</div>
<div class="exespotbody">
  <div class="grid">

  <span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >
    <a href="wealthtech.pdf">
    <div >
      <p>WealthTech</p>
    </div>
    <div class="col-reports-div">

      <div class="col-report" id="myReportPdfButton">
      <span class="mdi mdi-pdf-box "></span>
      </div>

      <div class="col-report" id="myViewReportLinkTag">
      <span class="mdi mdi-eye "></span>
      </div>
    </div>
    </a>
  </span>
  <span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >
    <a href="payments.pdf">
    <div >
      <p>Payments</p>
    </div>
    <div class="col-reports-div">


      <div class="col-report" id="myReportPdfButton">
      <span class="mdi mdi-pdf-box " ></span>
      </div>
      <div class="col-report" id="myViewReportLinkTag">
    <span class="mdi mdi-eye "></span>
      </div>
      </div>
    </a>
  </span>
  <span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >
       <a href="cyber.pdf">
    <div >
      <p>CyberSecurity</p>
    </div>
    <div class="col-reports-div">

      <div class="col-report" id="myReportPdfButton">
      <span class="mdi mdi-pdf-box " ></span>
      </div>
      <div class="col-report" id="myViewReportLinkTag">
      <span class="mdi mdi-eye "></span>
      </div>
      </div>
    </a>
  </span>
  <span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >
    <a href="identity.pdf">
    <div >
      <p>Identity</p>
    </div>
    <div class="col-reports-div">

      <div class="col-report" id="myReportPdfButton">
      <span class="mdi mdi-pdf-box " ></span>
      </div>

      <div class="col-report" id="myViewReportLinkTag">
      <span class="mdi mdi-eye "></span>
      </div>
      </div>
    </a>
  </span>
</div>
</div>

</div>
</template>


  <style scoped>
    h2 {
    margin-top: 0px;
  }
    .alpha {
      box-shadow: 0px 0px 7px -5px;
    width: max-content;
    padding: 5px;
    margin: auto;
    background: #ffffff;
    border-radius: 5px;
    }
    html {
      background: rgb(20 160 253 / 4%);
    }
    body {
      margin-top: -35px;
      padding-top: 20px;
      background: #00000000 !important;
    }
    .row-27 {
    margin-top: 0px !important;
    }
    .row-22 {
          background: white;
    }
    .scroll-top{
      z-index:9999;
    }
    .scroll-top i {
    width: -webkit-fill-available;
    display: inline-block;
    color: #FFFFFF;
    background: #1ec1ff;
    border-radius: 10px;
    box-shadow: 0px 0px 3px -1px grey;
    transitions:2s !important;
}
.scroll-top i:hover {
    box-shadow: 1px 3px 8px -3px grey;
}
    .container {
          display: contents;
    }
    .content {
      text-align:center;
    }
  @media screen and (max-width:990){
       .exespotbody{
          display: table;
   }
}
.header{
  margin-top:100px;
  min-height:200px;
  height:auto;
}
.footer {
   margin-top:200px;
}
.header, .footer {
   text-align:center;
   padding:auto;
   background-color: rgba(20, 160, 253, .82);
   background: #ffffff;
}
.sectionix {
   height:auto;
   width:100%;
}
h1 {
   font-size: 40px;
}
h2 {
  color: dimgray;
}
p {
  font-size: 20px;
  margin-top:20px;
  margin-bottom:20px;
}
.title {
    padding:3%;
   }
.right {
   float:right;
   padding:5%;
}
.left {
   float:left;
   padding:5%;
}
.ok {
  width: 24.7% !important;
}
.hitri {
  max-width: -webkit-fill-available;
   height: 400;
}

.exespotlightsection {
    background-image:  url("https://filesforfintech.s3.amazonaws.com/images/insight+background.png") ;
  background-repeat: round;
    background-size: cover;
}
.exespotbody {
  margin: 0 auto;
  max-width: 86em;
  padding: 1em 0;
}
.grid {
  display: flex;
  flex-wrap: wrap;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: minmax(150px, auto);
  grid-gap: 1em;
}
.module:hover {
  background:#fbfbfb;
  -webkit-box-shadow: 0px 0px 35px -16px rgba(161,161,161,1);
-moz-box-shadow: 0px 0px 35px -16px rgba(161,161,161,1);
box-shadow: 0px 0px 35px -16px rgba(161,161,161,1);
}
.module {
  background: white;
  display: inline-table;
  align-items: center;
  justify-content: center;
  height: 350px;
  padding:15px;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 25px -16px rgba(161,161,161,1);
  -moz-box-shadow: 0px 0px 25px -16px rgba(161,161,161,1);
  box-shadow: 0px 0px 25px -16px rgba(161,161,161,1);
  text-align: center;
  text-decoration: none;
  /* Flex Fallback */
  margin-left: 5px;
  margin-right: 5px;
  flex: 1 1 200px;
}
@supports (display: grid) {
  .module {
    margin: 0;
  }
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
.content:hover {
  box-shadow: 0px 0px 8px -4px;
}

.col-reports-div {
  display: flex;
  place-self: center;
  width: fit-content;
}
.col-report {
  width:50%;
  padding:10px;
}
.mdi {
  font-size: 34px;
}
.i-p-h {
  padding:20px;
  text-align:justify;
  font-size:16px;
}
</style>
