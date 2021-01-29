
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

  <span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >

      <div>
        <p>Lending</p>
      </div>

      <div class="col-reports-div">
          <a v-if="loggedIn" href="lendingcontent.pdf">
            <div class="col-report" id="myReportPdfButton">
              <span class="mdi mdi-pdf-box "></span>
            </div>
          </a>
          <a v-if="loggedIn" href="lending.pdf">
            <div class="col-report" id="myViewReportLinkTag">
              <span class="mdi mdi-eye "></span>
            </div>
          </a>
          <nuxt-link title="Please Login to view PDF" v-else to="/login">
            <span class="mdi mdi-key"></span><br>
            for PDF loggin
          </nuxt-link>
      </div>
  </span>

  <span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >

     <div>
      <p>Insurtech</p>
     </div>

     <div class="col-reports-div">
       <a v-if="loggedIn" href="insurtechcontent.pdf">
         <div class="col-report"   id="myReportPdfButton">
              <span class="mdi mdi-pdf-box"></span>
         </div>
       </a>
       <a v-if="loggedIn" href="insurtech.pdf" >
         <div class="col-report"  id="myViewReportLinkTag">
         <span class="mdi mdi-eye "></span>
         </div>
      </a>
      <nuxt-link title="Please Login to view PDF" v-else to="/login">
        <span class="mdi mdi-key"></span><br>
        for PDF loggin
      </nuxt-link>
     </div>
    </span>

    <span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >

      <div>
        <p>Blockchain/DLT</p>
      </div>

      <div class="col-reports-div">
         <a v-if="loggedIn" href="blockchaincontent.pdf" >
            <div class="col-report" id="myReportPdfButton">
            <span class="mdi mdi-pdf-box "></span>
          </div>
        </a>
        <a  v-if="loggedIn" href="blockchain.pdf">
          <div class="col-report" id="myViewReportLinkTag">
            <span class="mdi mdi-eye "></span>
          </div>
        </a>
        <nuxt-link title="Please Login to view PDF" v-else to="/login">
          <span class="mdi mdi-key"></span><br>
          for PDF loggin
        </nuxt-link>
      </div>
    </span>

    <span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >

      <div>
        <p>Banking</p>
      </div>
      <div class="col-reports-div">
        <a v-if="loggedIn" href="bankingcontent.pdf">
          <div class="col-report" id="myReportPdfButton">
          <span class="mdi mdi-pdf-box " ></span>
          </div>
        </a>
        <a v-if="loggedIn" href="banking.pdf">
          <div class="col-report" id="myViewReportLinkTag">
          <span class="mdi mdi-eye"></span>
          </div>
        </a>
        <nuxt-link title="Please Login to view PDF" v-else to="/login">
          <span class="mdi mdi-key"></span><br>
          for PDF loggin
        </nuxt-link>
      </div>
    </span>
  </div>
</div>

<div class="exespotbody">
  <div class="grid">

    <span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >

      <div>
        <p>WealthTech</p>
      </div>

      <div class="col-reports-div">
            <a  v-if="loggedIn" href="wealthtechcontent.pdf">
              <div class="col-report" id="myReportPdfButton">
              <span class="mdi mdi-pdf-box "></span>
                </div>
            </a>
            <a v-if="loggedIn" href="wealthtech.pdf">
              <div class="col-report" id="myViewReportLinkTag">
              <span class="mdi mdi-eye "></span>
            </div>
            </a>
         <nuxt-link title="Please Login to view PDF" v-else to="/login">
           <span class="mdi mdi-key"></span><br>
           for PDF loggin
         </nuxt-link>
      </div>
  </span>

  <span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >

    <div>
      <p>Payments</p>
    </div>

    <div class="col-reports-div">
        <a v-if="loggedIn" href="paymentscontent.pdf">
          <div class="col-report" id="myReportPdfButton">
          <span class="mdi mdi-pdf-box " ></span>
          </div>
        </a>
        <a v-if="loggedIn" href="payments.pdf">
          <div class="col-report" id="myViewReportLinkTag">
          <span class="mdi mdi-eye "></span>
        </div>
        </a>
        <nuxt-link title="Please Login to view PDF" v-else to="/login">
          <span class="mdi mdi-key"></span><br>
          for PDF loggin
        </nuxt-link>
    </div>
  </span>

  <span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >

      <div>
        <p>CyberSecurity</p>
      </div>

      <div class="col-reports-div">
          <a v-if="loggedIn" href="cybercontent.pdf">
            <div class="col-report" id="myReportPdfButton">
          <span class="mdi mdi-pdf-box " ></span>
        </div>
          </a>
          <a v-if="loggedIn" href="cyber.pdf">
            <div class="col-report"   id="myViewReportLinkTag">
            <span class="mdi mdi-eye "></span>
          </div>
          </a>
          <nuxt-link title="Please Login to view PDF" v-else to="/login">
            <span class="mdi mdi-key"></span><br>
            for PDF loggin
          </nuxt-link>
      </div>
  </span>

  <span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >

    <div>
      <p>Identity</p>
    </div>

    <div class="col-reports-div">
        <a v-if="loggedIn" href="identitycontent.pdf">
          <div class="col-report" id="myReportPdfButton">
          <span class="mdi mdi-pdf-box " ></span>
        </div>
        </a>
        <a v-if="loggedIn" href="identity.pdf">
          <div class="col-report" id="myViewReportLinkTag">
          <span class="mdi mdi-eye "></span>
        </div>
        </a>
        <nuxt-link title="Please Login to view PDF" v-else to="/login">
          <span class="mdi mdi-key"></span><br>
          for PDF loggin
        </nuxt-link>
    </div>
  </span>
</div>
</div>

<div class="exespotbody">
  <div class="grid">

  <span  class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >

    <div>
      <p>RegTech</p>
    </div>

    <div class="col-reports-div">
        <a v-if="loggedIn" href="regtechcontent.pdf">
          <div class="col-report" id="myReportPdfButton">
            <span class="mdi mdi-pdf-box "></span>
          </div>
        </a>
        <a v-if="loggedIn" href="regtech.pdf">
          <div class="col-report" id="myViewReportLinkTag">
            <span class="mdi mdi-eye "></span>
          </div>
        </a>
        <nuxt-link title="Please Login to view PDF" v-else to="/login">
          <span class="mdi mdi-key"></span><br>
          for PDF loggin
        </nuxt-link>
    </div>
  </span>

  <span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >

      <div >
        <p>HealthTech</p>
      </div>

      <div class="col-reports-div">
        <a v-if="loggedIn" href="healthtechcontent.pdf">
          <div class="col-report" id="myReportPdfButton">
          <span class="mdi mdi-pdf-box " ></span>
          </div>
        </a>
          <a v-if="loggedIn" href="healthtech.pdf" >
            <div class="col-report" id="myViewReportLinkTag">
            <span class="mdi mdi-eye "></span>
          </div>
          </a>
        <nuxt-link title="Please Login to view PDF" v-else to="/login">
          <span class="mdi mdi-key"></span><br>
          for PDF loggin
        </nuxt-link>
      </div>
  </span>

  <span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >

      <div>
        <p>Artificial Intelligence</p>
      </div>

     <div class="col-reports-div">
        <a v-if="loggedIn" href="aicontent.pdf" >
          <div class="col-report" id="myReportPdfButton">
          <span class="mdi mdi-pdf-box "></span>
          </div>
        </a>
        <a v-if="loggedIn" href="ai.pdf">
            <div class="col-report" id="myViewReportLinkTag">
              <span class="mdi mdi-eye "></span>
          </div>
        </a>
        <nuxt-link title="Please Login to view PDF" v-else to="/login">
          <span class="mdi mdi-key"></span><br>
          for PDF loggin
        </nuxt-link>
     </div>
  </span>

  <span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >

      <div>
        <p>MGAs</p>
      </div>

      <div class="col-reports-div">
         <a v-if="loggedIn" href="mgacontent.pdf">
            <div class="col-report" id="myReportPdfButton">
              <span class="mdi mdi-pdf-box " ></span>
            </div>
          </a>
          <a v-if="loggedIn" href="mga.pdf">
            <div class="col-report" id="myViewReportLinkTag">
              <span class="mdi mdi-eye "></span>
            </div>
          </a>
          <nuxt-link title="Please Login to view PDF" v-else to="/login">
            <span class="mdi mdi-key"></span><br>
            for PDF loggin
          </nuxt-link>
      </div>
  </span>
</div>
</div>

<div class="exespotbody">
<div class="grid">

<span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >

      <div>
        <p>RealEstate</p>
      </div>

      <div class="col-reports-div">
            <a v-if="loggedIn" href="realestatecontent.pdf">
              <div class="col-report" id="myReportPdfButton">
              <span class="mdi mdi-pdf-box "></span>
            </div>
            </a>
            <a v-if="loggedIn" href="realestate.pdf">
              <div class="col-report" id="myViewReportLinkTag">
              <span class="mdi mdi-eye "></span>
            </div>
            </a>
         <nuxt-link title="Please Login to view PDF" v-else to="/login">
           <span class="mdi mdi-key"></span><br>
           for PDF loggin
         </nuxt-link>
    </div>
</span>

<span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >

      <div>
        <p>Remittances</p>
      </div>

      <div class="col-reports-div">
          <a v-if="loggedIn" href="remittancescontent.pdf">
            <div class="col-report" id="myReportPdfButton">
            <span class="mdi mdi-pdf-box " ></span>
          </div>
          </a>
          <a v-if="loggedIn" href="remittances.pdf">
            <div class="col-report" id="myViewReportLinkTag">
            <span class="mdi mdi-eye "></span>
          </div>
          </a>
          <nuxt-link title="Please Login to view PDF" v-else to="/login">
            <span class="mdi mdi-key"></span><br>
            for PDF loggin
          </nuxt-link>
      </div>
</span>

<span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >

    <div>
      <p>Capital Markets</p>
    </div>

    <div class="col-reports-div">
          <a v-if="loggedIn" href="capitalmarketscontent.pdf">
            <div class="col-report" id="myReportPdfButton">
            <span class="mdi mdi-pdf-box " ></span>
          </div>
          </a>
        <a  v-if="loggedIn" href="capitalmarkets.pdf">
          <div class="col-report" id="myViewReportLinkTag">
          <span class="mdi mdi-eye "></span>
        </div>
        </a>
      <nuxt-link title="Please Login to view PDF" v-else to="/login">
        <span class="mdi mdi-key"></span><br>
        for PDF loggin
      </nuxt-link>
    </div>
  </span>

  <span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >

      <div>
        <p>Personal Finance</p>
      </div>

      <div class="col-reports-div">
            <a v-if="loggedIn" href="personalfinancecontent.pdf">
              <div class="col-report" id="myReportPdfButton">
              <span class="mdi mdi-pdf-box " ></span>
            </div>
            </a>
            <a v-if="loggedIn" href="personalfinance.pdf">
              <div class="col-report" id="myViewReportLinkTag">
              <span class="mdi mdi-eye "></span>
            </div>
            </a>
            <nuxt-link title="Please Login to view PDF" v-else to="/login">
              <span class="mdi mdi-key"></span><br>
              for PDF loggin
            </nuxt-link>
      </div>
</span>
</div>
</div>

<!-- strategy -->

 <div class="sectionix" id="top">
     <div class="title">
        <div class="content">
          <br>
           <h2>Strategy</h2>
        </div>
     </div>
  </div>


<div class="exespotbody">
  <div class="grid">

    <span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >

      <div>
        <p>Growth Equity Raise</p>
      </div>

      <div class="col-reports-div">
            <a v-if="loggedIn" href="growthequitycontent.pdf">
              <div class="col-report" id="myReportPdfButton">
              <span class="mdi mdi-pdf-box "></span>
            </div>
            </a>
            <a v-if="loggedIn" href="growthequity.pdf">
              <div class="col-report" id="myViewReportLinkTag">
              <span class="mdi mdi-eye "></span>
            </div>
            </a>
            <nuxt-link title="Please Login to view PDF" v-else to="/login">
              <span class="mdi mdi-key"></span><br>
              for PDF loggin
            </nuxt-link>
      </div>
  </span>

  <span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >

    <div>
      <p>M&A</p>
    </div>

    <div class="col-reports-div">
        <a v-if="loggedIn" href="mergerscontent.pdf">
          <div class="col-report" id="myReportPdfButton">
          <span class="mdi mdi-pdf-box " ></span>
        </div>
        </a>
        <a v-if="loggedIn" href="mergers.pdf">
          <div class="col-report" id="myViewReportLinkTag">
          <span class="mdi mdi-eye "></span>
        </div>
        </a>
        <nuxt-link title="Please Login to view PDF" v-else to="/login">
          <span class="mdi mdi-key"></span><br>
          for PDF loggin
        </nuxt-link>
    </div>
  </span>

  <span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >

      <div>
        <p>Partnerships</p>
      </div>

      <div class="col-reports-div">
          <a v-if="loggedIn" href="partnershipcontent.pdf">
            <div class="col-report" id="myReportPdfButton">
          <span class="mdi mdi-pdf-box " ></span>
        </div>
          </a>
          <a v-if="loggedIn" href="partnerships.pdf">
            <div class="col-report"   id="myViewReportLinkTag">
            <span class="mdi mdi-eye "></span>
          </div>
          </a>
          <nuxt-link title="Please Login to view PDF" v-else to="/login">
            <span class="mdi mdi-key"></span><br>
            for PDF loggin
          </nuxt-link>
        </div>
  </span>

  <span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >

    <div>
      <p>Spin-Offs</p>
    </div>

    <div class="col-reports-div">
        <a v-if="loggedIn" href="spinoffscontent.pdf">
          <div class="col-report" id="myReportPdfButton">
          <span class="mdi mdi-pdf-box " ></span>
        </div>
        </a>
        <a v-if="loggedIn" href="spinoffs.pdf">
          <div class="col-report" id="myViewReportLinkTag">
          <span class="mdi mdi-eye "></span>
        </div>
        </a>
        <nuxt-link title="Please Login to view PDF" v-else to="/login">
          <span class="mdi mdi-key"></span><br>
          for PDF loggin
        </nuxt-link>
    </div>
  </span>
</div>
</div>

<div class="exespotbody">
  <div class="grid">

    <span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >

      <div>
        <p>Valuation</p>
      </div>

      <div class="col-reports-div">
            <a v-if="loggedIn" href="valuationcontent.pdf">
              <div class="col-report" id="myReportPdfButton">
              <span class="mdi mdi-pdf-box "></span>
            </div>
            </a>
            <a v-if="loggedIn" href="valuation.pdf">
              <div class="col-report" id="myViewReportLinkTag">
              <span class="mdi mdi-eye "></span>
            </div>
            </a>
            <nuxt-link title="Please Login to view PDF" v-else to="/login">
              <span class="mdi mdi-key"></span><br>
              for PDF loggin
            </nuxt-link>
      </div>
  </span>

  <span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >

    <div>
      <p>Bootstrapped</p>
    </div>

    <div class="col-reports-div">
        <a v-if="loggedIn" href="bootstrappedcontent.pdf">
          <div class="col-report" id="myReportPdfButton">
          <span class="mdi mdi-pdf-box " ></span>
        </div>
        </a>
        <a v-if="loggedIn" href="bootstrapped.pdf">
          <div class="col-report" id="myViewReportLinkTag">
          <span class="mdi mdi-eye "></span>
        </div>
        </a>
        <nuxt-link title="Please Login to view PDF" v-else to="/login">
          <span class="mdi mdi-key"></span><br>
          for PDF loggin
        </nuxt-link>
    </div>
  </span>

  <span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >

      <div>
        <p>IPO</p>
      </div>

      <div class="col-reports-div">
          <a v-if="loggedIn" href="iposcontent.pdf">
            <div class="col-report" id="myReportPdfButton">
          <span class="mdi mdi-pdf-box " ></span>
        </div>
          </a>
          <a v-if="loggedIn" href="ipos.pdf">
            <div class="col-report"   id="myViewReportLinkTag">
            <span class="mdi mdi-eye "></span>
          </div>
          </a>
          <nuxt-link title="Please Login to view PDF" v-else to="/login">
            <span class="mdi mdi-key"></span><br>
            for PDF loggin
          </nuxt-link>
      </div>
  </span>

  <span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >

    <div>
      <p>Profitable</p>
    </div>

    <div class="col-reports-div">
        <a v-if="loggedIn" href="profitablecontent.pdf">
          <div class="col-report" id="myReportPdfButton">
          <span class="mdi mdi-pdf-box " ></span>
        </div>
        </a>
        <a v-if="loggedIn" href="profitable.pdf">
          <div class="col-report" id="myViewReportLinkTag">
          <span class="mdi mdi-eye "></span>
        </div>
        </a>
        <nuxt-link title="Please Login to view PDF" v-else to="/login">
          <span class="mdi mdi-key"></span><br>
          for PDF loggin
        </nuxt-link>
    </div>
  </span>
</div>
</div>

<!-- timing -->
 <div class="sectionix" id="top">
     <div class="title">
        <div class="content">
          <br>
           <h2>Timing</h2>
        </div>
     </div>
  </div>


<div class="exespotbody">
  <div class="grid">

    <span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >

      <div>
        <p>Q1 2020</p>
      </div>

      <div class="col-reports-div">
            <a v-if="loggedIn" href="q12020content.pdf">
              <div class="col-report" id="myReportPdfButton">
              <span class="mdi mdi-pdf-box "></span>
            </div>
            </a>
            <a v-if="loggedIn" href="q12020.pdf">
              <div class="col-report" id="myViewReportLinkTag">
              <span class="mdi mdi-eye "></span>
            </div>
            </a>
            <nuxt-link title="Please Login to view PDF" v-else to="/login">
              <span class="mdi mdi-key"></span><br>
              for PDF loggin
            </nuxt-link>
      </div>
  </span>

  <span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >

    <div>
      <p>Q2 2020</p>
    </div>

    <div class="col-reports-div">
        <a v-if="loggedIn" href="q22020content.pdf">
          <div class="col-report" id="myReportPdfButton">
          <span class="mdi mdi-pdf-box " ></span>
        </div>
        </a>
        <a v-if="loggedIn" href="q22020.pdf">
          <div class="col-report" id="myViewReportLinkTag">
          <span class="mdi mdi-eye "></span>
        </div>
        </a>
        <nuxt-link title="Please Login to view PDF" v-else to="/login">
          <span class="mdi mdi-key"></span><br>
          for PDF loggin
        </nuxt-link>
      </div>
  </span>

  <span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >

      <div>
        <p>Q3 2020</p>
      </div>

      <div class="col-reports-div">
          <a v-if="loggedIn" href="Q32020content.pdf">
            <div class="col-report" id="myReportPdfButton">
          <span class="mdi mdi-pdf-box " ></span>
          </div>
          </a>
          <a v-if="loggedIn" href="Q32020.pdf">
            <div class="col-report"   id="myViewReportLinkTag">
            <span class="mdi mdi-eye "></span>
            </div>
          </a>
          <nuxt-link title="Please Login to view PDF" v-else to="/login">
            <span class="mdi mdi-key"></span><br>
            for PDF loggin
          </nuxt-link>
      </div>
  </span>

  <span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >

    <div>
      <p>Q4 2020</p>
    </div>

    <div class="col-reports-div">
        <a v-if="loggedIn" href="Q42020content.pdf">
          <div class="col-report" id="myReportPdfButton">
          <span class="mdi mdi-pdf-box " ></span>
          </div>
        </a>
        <a v-if="loggedIn" href="Q42020.pdf">
          <div class="col-report" id="myViewReportLinkTag">
          <span class="mdi mdi-eye "></span>
          </div>
        </a>
        <nuxt-link title="Please Login to view PDF" v-else to="/login">
          <span class="mdi mdi-key"></span><br>
          for PDF loggin
        </nuxt-link>
    </div>
  </span>
</div>
</div>


<div class="exespotbody">
  <div class="grid">

    <span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >

      <div>
        <p>Q1 2021</p>
      </div>

      <div class="col-reports-div">
            <a v-if="loggedIn" href="Q12021content.pdf">
              <div class="col-report" id="myReportPdfButton">
              <span class="mdi mdi-pdf-box "></span>
              </div>
            </a>
            <a v-if="loggedIn" href="Q12021.pdf">
              <div class="col-report" id="myViewReportLinkTag">
              <span class="mdi mdi-eye "></span>
              </div>
            </a>
            <nuxt-link title="Please Login to view PDF" v-else to="/login">
              <span class="mdi mdi-key"></span><br>
              for PDF loggin
            </nuxt-link>
      </div>
  </span>

  <span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >

    <div>
      <p>Q2 2021</p>
    </div>

    <div class="col-reports-div">
        <a v-if="loggedIn" href="Q22021content.pdf">
          <div class="col-report" id="myReportPdfButton">
          <span class="mdi mdi-pdf-box " ></span>
          </div>
        </a>
        <a v-if="loggedIn" href="Q22021.pdf">
          <div class="col-report" id="myViewReportLinkTag">
          <span class="mdi mdi-eye "></span>
          </div>
        </a>
        <nuxt-link title="Please Login to view PDF" v-else to="/login">
          <span class="mdi mdi-key"></span><br>
          for PDF loggin
        </nuxt-link>
    </div>
  </span>

  <span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >

      <div>
        <p>Q3 2021</p>
      </div>

      <div class="col-reports-div">
          <a v-if="loggedIn" href="q32021content.pdf">
            <div class="col-report" id="myReportPdfButton">
          <span class="mdi mdi-pdf-box " ></span>
          </div>
          </a>
          <a v-if="loggedIn" href="q32021.pdf">
            <div class="col-report"   id="myViewReportLinkTag">
            <span class="mdi mdi-eye "></span>
          </div>
          </a>
          <nuxt-link title="Please Login to view PDF" v-else to="/login">
            <span class="mdi mdi-key"></span><br>
            for PDF loggin
          </nuxt-link>
      </div>
  </span>

  <span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >

    <div>
      <p>Q4 2021</p>
    </div>

    <div class="col-reports-div">
        <a  v-if="loggedIn" href="q42021content.pdf">
          <div class="col-report" id="myReportPdfButton">
          <span class="mdi mdi-pdf-box " ></span>
        </div>
        </a>
        <a v-if="loggedIn" href="q42021.pdf">
          <div class="col-report" id="myViewReportLinkTag">
          <span class="mdi mdi-eye "></span>
        </div>
        </a>
        <nuxt-link title="Please Login to view PDF" v-else to="/login">
          <span class="mdi mdi-key"></span><br>
          for PDF loggin
        </nuxt-link>
    </div>
  </span>
</div>
</div>

<!-- Next Raise -->
 <div class="sectionix" id="top">
     <div class="title">
        <div class="content">
          <br>
           <h2>Size: Next Raise</h2>
        </div>
     </div>
  </div>


<div class="exespotbody">
  <div class="grid">

    <span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >

      <div>
        <p>$0m to $1m</p>
      </div>

      <div class="col-reports-div">
            <a v-if="loggedIn" href="zerotoonecontent.pdf">
                <div class="col-report" id="myReportPdfButton">
              <span class="mdi mdi-pdf-box "></span>
              </div>
            </a>
            <a v-if="loggedIn" href="zerotoone.pdf">
              <div class="col-report" id="myViewReportLinkTag">
              <span class="mdi mdi-eye "></span>
            </div>
            </a>
            <nuxt-link title="Please Login to view PDF" v-else to="/login">
              <span class="mdi mdi-key"></span><br>
              for PDF loggin
            </nuxt-link>
      </div>
  </span>

  <span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >

    <div>
      <p>$1m to $5m</p>
    </div>

    <div class="col-reports-div">
        <a  v-if="loggedIn" href="onetofivecontent.pdf">
          <div class="col-report" id="myReportPdfButton">
          <span class="mdi mdi-pdf-box " ></span>
        </div>
        </a>
        <a v-if="loggedIn" href="onetofive.pdf">
          <div class="col-report" id="myViewReportLinkTag">
          <span class="mdi mdi-eye "></span>
        </div>
        </a>
        <nuxt-link title="Please Login to view PDF" v-else to="/login">
          <span class="mdi mdi-key"></span><br>
          for PDF loggin
        </nuxt-link>
    </div>
  </span>

  <span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >

      <div>
        <p>$5m to $10m</p>
      </div>

      <div class="col-reports-div">
        <a  v-if="loggedIn" href="fivetotencontent.pdf">
          <div class="col-report" id="myReportPdfButton">
          <span class="mdi mdi-pdf-box " ></span>
        </div>
          </a>
          <a v-if="loggedIn" href="fivetoten.pdf">
            <div class="col-report"   id="myViewReportLinkTag">
            <span class="mdi mdi-eye "></span>
          </div>
          </a>
          <nuxt-link title="Please Login to view PDF" v-else to="/login">
            <span class="mdi mdi-key"></span><br>
            for PDF loggin
          </nuxt-link>
    </div>
  </span>

  <span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >

    <div>
      <p>$10m to $20m</p>
    </div>

    <div class="col-reports-div">
        <a v-if="loggedIn" href="tentotwentycontent.pdf">
          <div class="col-report" id="myReportPdfButton">
          <span class="mdi mdi-pdf-box " ></span>
        </div>
        </a>
        <a v-if="loggedIn" href="tentotwenty.pdf">
          <div class="col-report" id="myViewReportLinkTag">
          <span class="mdi mdi-eye "></span>
        </div>
        </a>
        <nuxt-link title="Please Login to view PDF" v-else to="/login">
          <span class="mdi mdi-key"></span><br>
          for PDF loggin
        </nuxt-link>
    </div>
  </span>
</div>
</div>

<div class="exespotbody">
  <div class="grid">

    <span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >

      <div>
        <p>$20m to $50m</p>
      </div>

      <div class="col-reports-div">
            <a v-if="loggedIn" href="twentytofiftycontent.pdf">
              <div class="col-report" id="myReportPdfButton">
              <span class="mdi mdi-pdf-box "></span>
            </div>
            </a>
            <a v-if="loggedIn" href="twentytofifty.pdf">
              <div class="col-report" id="myViewReportLinkTag">
              <span class="mdi mdi-eye "></span>
            </div>
            </a>
            <nuxt-link title="Please Login to view PDF" v-else to="/login">
              <span class="mdi mdi-key"></span><br>
              for PDF loggin
            </nuxt-link>
      </div>
  </span>

  <span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >

    <div>
      <p>$50m to $100m </p>
    </div>

    <div class="col-reports-div">
        <a v-if="loggedIn" href="fiftytohundredcontent.pdf">
          <div class="col-report" id="myReportPdfButton">
          <span class="mdi mdi-pdf-box " ></span>
        </div>
        </a>
        <a v-if="loggedIn" href="fiftytohundred.pdf">
          <div class="col-report" id="myViewReportLinkTag">
          <span class="mdi mdi-eye "></span>
        </div>
        </a>
        <nuxt-link title="Please Login to view PDF" v-else to="/login">
          <span class="mdi mdi-key"></span><br>
          for PDF loggin
        </nuxt-link>
    </div>
  </span>

  <span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >

      <div>
        <p>$100m plus</p>
      </div>

      <div class="col-reports-div">
          <a  v-if="loggedIn" href="hundredmilpluscontent.pdf">
            <div class="col-report" id="myReportPdfButton">
          <span class="mdi mdi-pdf-box " ></span>
        </div>
          </a>
          <a v-if="loggedIn" href="hundredmilplus.pdf">
            <div class="col-report"   id="myViewReportLinkTag">
            <span class="mdi mdi-eye "></span>
          </div>
          </a>
          <nuxt-link title="Please Login to view PDF" v-else to="/login">
            <span class="mdi mdi-key"></span><br>
            for PDF loggin
          </nuxt-link>
      </div>
  </span>
</div>
</div>

<!-- Geography -->

 <div class="sectionix" id="top">
     <div class="title">
        <div class="content">
          <br>
           <h2>Geography</h2>
        </div>
     </div>
  </div>


<div class="exespotbody">
  <div class="grid">

    <span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >

      <div>
        <p>Latin America</p>
      </div>

      <div class="col-reports-div">
            <a v-if="loggedIn" href="latinamericacontent.pdf">
              <div class="col-report" id="myReportPdfButton">
              <span class="mdi mdi-pdf-box "></span>
            </div>
            </a>
            <a v-if="loggedIn" href="latinamerica.pdf">
              <div class="col-report" id="myViewReportLinkTag">
              <span class="mdi mdi-eye "></span>
            </div>
            </a>
            <nuxt-link title="Please Login to view PDF" v-else to="/login">
              <span class="mdi mdi-key"></span><br>
              for PDF loggin
            </nuxt-link>
      </div>
  </span>

  <span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >

    <div>
      <p>Canada</p>
    </div>

    <div class="col-reports-div">
        <a v-if="loggedIn" href="canadacontent.pdf">
          <div class="col-report" id="myReportPdfButton">
          <span class="mdi mdi-pdf-box " ></span>
        </div>
        </a>
        <a v-if="loggedIn" href="canada.pdf">
          <div class="col-report" id="myViewReportLinkTag">
          <span class="mdi mdi-eye "></span>
        </div>
        </a>
        <nuxt-link title="Please Login to view PDF" v-else to="/login">
          <span class="mdi mdi-key"></span><br>
          for PDF loggin
        </nuxt-link>
    </div>
  </span>

  <span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >

      <div>
        <p>Europe</p>
      </div>

      <div class="col-reports-div">
          <a v-if="loggedIn" href="europecontent.pdf">
            <div class="col-report" id="myReportPdfButton">
          <span class="mdi mdi-pdf-box " ></span>
        </div>
          </a>
          <a v-if="loggedIn" href="europe.pdf">
            <div class="col-report"   id="myViewReportLinkTag">
            <span class="mdi mdi-eye "></span>
          </div>
          </a>
          <nuxt-link title="Please Login to view PDF" v-else to="/login">
            <span class="mdi mdi-key"></span><br>
            for PDF loggin
          </nuxt-link>
      </div>
  </span>

  <span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >

    <div>
      <p>Asia</p>
    </div>

    <div class="col-reports-div">
        <a v-if="loggedIn" href="asiacontent.pdf">
          <div class="col-report" id="myReportPdfButton">
          <span class="mdi mdi-pdf-box " ></span>
        </div></a>
        <a v-if="loggedIn" href="asia.pdf">
          <div class="col-report" id="myViewReportLinkTag">
          <span class="mdi mdi-eye "></span>
        </div>
        </a>
        <nuxt-link title="Please Login to view PDF" v-else to="/login">
          <span class="mdi mdi-key"></span><br>
          for PDF loggin
        </nuxt-link>
    </div>
  </span>
</div>
</div>


<div class="exespotbody">
  <div class="grid">

  <span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >

      <div>
        <p>Middle East</p>
      </div>

      <div class="col-reports-div">
            <a v-if="loggedIn" href="middleeastcontent.pdf">
              <div class="col-report" id="myReportPdfButton">
              <span class="mdi mdi-pdf-box "></span>
            </div>
            </a>
            <a v-if="loggedIn" href="middleeast.pdf">
              <div class="col-report" id="myViewReportLinkTag">
              <span class="mdi mdi-eye "></span>
            </div>
            </a>
         <nuxt-link title="Please Login to view PDF" v-else to="/login">
           <span class="mdi mdi-key"></span><br>
           for PDF loggin
         </nuxt-link>
      </div>
  </span>

  <span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >

    <div>
      <p>Africa</p>
    </div>

    <div class="col-reports-div">
        <a v-if="loggedIn" href="africacontent.pdf">
          <div class="col-report" id="myReportPdfButton">
          <span class="mdi mdi-pdf-box " ></span>
        </div>
        </a>
        <a v-if="loggedIn" href="africa.pdf">
          <div class="col-report" id="myViewReportLinkTag">
          <span class="mdi mdi-eye "></span>
        </div>
        </a>
        <nuxt-link title="Please Login to view PDF" v-else to="/login">
          <span class="mdi mdi-key"></span><br>
          for PDF loggin
        </nuxt-link>
    </div>
  </span>

  <span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >

      <div>
        <p>Oceania</p>
      </div>

      <div class="col-reports-div">
          <a v-if="loggedIn" href="oceaniacontent.pdf">
            <div class="col-report" id="myReportPdfButton">
          <span class="mdi mdi-pdf-box " ></span>
        </div>
          </a>
          <a v-if="loggedIn" href="oceania.pdf">
            <div class="col-report"   id="myViewReportLinkTag">
            <span class="mdi mdi-eye "></span>
          </div>
          </a>
          <nuxt-link title="Please Login to view PDF" v-else to="/login">
            <span class="mdi mdi-key"></span><br>
            for PDF loggin
          </nuxt-link>
      </div>
  </span>

  <span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >

    <div>
      <p>Carribean</p>
    </div>

    <div class="col-reports-div">
        <a v-if="loggedIn" href="carribeancontent.pdf">
          <div class="col-report" id="myReportPdfButton">
          <span class="mdi mdi-pdf-box " ></span>
        </div>
        </a>
        <a v-if="loggedIn" href="carribean.pdf">
          <div class="col-report" id="myViewReportLinkTag">
          <span class="mdi mdi-eye "></span>
        </div>
        </a>
        <nuxt-link title="Please Login to view PDF" v-else to="/login">
          <span class="mdi mdi-key"></span><br>
          for PDF loggin
        </nuxt-link>
    </div>
  </span>

  <span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >

    <div>
      <p>Africa</p>
    </div>

    <div class="col-reports-div">
        <a v-if="loggedIn" href="africacontent.pdf">
          <div class="col-report" id="myReportPdfButton">
          <span class="mdi mdi-pdf-box " ></span>
        </div>
        </a>
        <a v-if="loggedIn" href="africa.pdf">
            <div class="col-report" id="myViewReportLinkTag">
          <span class="mdi mdi-eye "></span>
        </div>
        </a>
        <nuxt-link title="Please Login to view PDF" v-else to="/login">
          <span class="mdi mdi-key"></span><br>
          for PDF loggin
        </nuxt-link>
    </div>
  </span>

  <span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >

      <div>
        <p>New York</p>
      </div>

      <div class="col-reports-div">
          <a v-if="loggedIn" href="newyorkcontent.pdf">
            <div class="col-report" id="myReportPdfButton">
          <span class="mdi mdi-pdf-box " ></span>
        </div>
          </a>
          <a v-if="loggedIn" href="newyork.pdf">
            <div class="col-report"   id="myViewReportLinkTag">
            <span class="mdi mdi-eye "></span>
          </div>
          </a>
          <nuxt-link title="Please Login to view PDF" v-else to="/login">
            <span class="mdi mdi-key"></span><br>
            for PDF loggin
          </nuxt-link>
      </div>
  </span>

  <span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >

    <div>
      <p>New England</p>
    </div>

    <div class="col-reports-div">
        <a v-if="loggedIn" href="newenglandcontent.pdf">
          <div class="col-report" id="myReportPdfButton">
          <span class="mdi mdi-pdf-box " ></span>
        </div>
        </a>
        <a v-if="loggedIn" href="newengland.pdf">
          <div class="col-report" id="myViewReportLinkTag">
          <span class="mdi mdi-eye "></span>
        </div>
        </a>
        <nuxt-link title="Please Login to view PDF" v-else to="/login">
          <span class="mdi mdi-key"></span><br>
          for PDF loggin
        </nuxt-link>
    </div>
  </span>

  <span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >

    <div>
      <p>MidAltantic</p>
    </div>

    <div class="col-reports-div">
        <a v-if="loggedIn" href="midatlanticcontent.pdf">
          <div class="col-report" id="myReportPdfButton">
          <span class="mdi mdi-pdf-box " ></span>
        </div>
        </a>
        <a v-if="loggedIn" href="midatlantic.pdf">
          <div class="col-report" id="myViewReportLinkTag">
          <span class="mdi mdi-eye "></span>
        </div>
        </a>
        <nuxt-link title="Please Login to view PDF" v-else to="/login">
          <span class="mdi mdi-key"></span><br>
          for PDF loggin
        </nuxt-link>
    </div>
  </span>

  <span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >

    <div>
      <p>Southeast</p>
    </div>

    <div class="col-reports-div">
        <a v-if="loggedIn" href="southeastcontent.pdf">
          <div class="col-report" id="myReportPdfButton">
          <span class="mdi mdi-pdf-box " ></span>
        </div>
        </a>
        <a v-if="loggedIn" href="southeast.pdf">
          <div class="col-report" id="myViewReportLinkTag">
          <span class="mdi mdi-eye "></span>
        </div>
        </a>
        <nuxt-link title="Please Login to view PDF" v-else to="/login">
          <span class="mdi mdi-key"></span><br>
          for PDF loggin
        </nuxt-link>
    </div>
  </span>

  <span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >

    <div>
      <p>South</p>
    </div>

    <div class="col-reports-div">
        <a v-if="loggedIn" href="southcontent.pdf">
          <div class="col-report" id="myReportPdfButton">
          <span class="mdi mdi-pdf-box " ></span>
        </div>
        </a>
        <a  v-if="loggedIn" href="south.pdf">
          <div class="col-report" id="myViewReportLinkTag">
          <span class="mdi mdi-eye "></span>
        </div>
        </a>
        <nuxt-link title="Please Login to view PDF" v-else to="/login">
          <span class="mdi mdi-key"></span><br>
          for PDF loggin
        </nuxt-link>
    </div>
  </span>

  <span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >

    <div>
      <p>Midwest</p>
    </div>

    <div class="col-reports-div">
        <a href="midwestcontent.pdf">
          <div v-if="loggedIn" class="col-report" id="myReportPdfButton">
          <span class="mdi mdi-pdf-box " ></span>
        </div>
        </a>
        <a v-if="loggedIn" href="midwest.pdf">
          <div class="col-report" id="myViewReportLinkTag">
          <span class="mdi mdi-eye "></span>
        </div>
        </a>
        <nuxt-link title="Please Login to view PDF" v-else to="/login">
          <span class="mdi mdi-key"></span><br>
          for PDF loggin
        </nuxt-link>
    </div>
  </span>

  <span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >

    <div>
      <p>Rocky Mountains</p>
    </div>

    <div class="col-reports-div">
        <a v-if="loggedIn" href="rockycontent.pdf">
          <div class="col-report" id="myReportPdfButton">
          <span class="mdi mdi-pdf-box " ></span>
        </div>
        </a>
        <a v-if="loggedIn" href="rockey.pdf">
          <div class="col-report" id="myViewReportLinkTag">
          <span class="mdi mdi-eye "></span>
        </div>
        </a>
        <nuxt-link title="Please Login to view PDF" v-else to="/login">
          <span class="mdi mdi-key"></span><br>
          for PDF loggin
        </nuxt-link>
    </div>
  </span>

  <span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >

    <div>
      <p>Southwest</p>
    </div>

    <div class="col-reports-div">
        <a v-if="loggedIn" href="southwestcontent.pdf">
          <div class="col-report" id="myReportPdfButton">
          <span class="mdi mdi-pdf-box " ></span>
        </div>
        </a>
        <a v-if="loggedIn" href="southwest.pdf">
          <div class="col-report" id="myViewReportLinkTag">
          <span class="mdi mdi-eye "></span>
        </div>
        </a>
        <nuxt-link title="Please Login to view PDF" v-else to="/login">
          <span class="mdi mdi-key"></span><br>
          for PDF loggin
        </nuxt-link>
    </div>
  </span>

  <span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >

    <div>
      <p>Pacific Northwest</p>
    </div>

    <div class="col-reports-div">
        <a v-if="loggedIn" href="pacificcontent.pdf">
          <div class="col-report" id="myReportPdfButton">
          <span class="mdi mdi-pdf-box " ></span>
        </div>
        </a>
        <a v-if="loggedIn" href="pacific.pdf">
          <div class="col-report" id="myViewReportLinkTag">
          <span class="mdi mdi-eye "></span>
        </div>
        </a>
        <nuxt-link title="Please Login to view PDF" v-else to="/login">
          <span class="mdi mdi-key"></span><br>
          for PDF loggin
        </nuxt-link>
    </div>
  </span>

     <span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >

    <div>
      <p>Silicon Valley</p>
    </div>

    <div class="col-reports-div">
        <a v-if="loggedIn" href="siliconvalleycontent.pdf">
          <div class="col-report" id="myReportPdfButton">
          <span class="mdi mdi-pdf-box " ></span>
        </div>
        </a>
        <a v-if="loggedIn"  href="siliconvalley.pdf">
          <div class="col-report" id="myViewReportLinkTag">
          <span class="mdi mdi-eye "></span>
        </div>
        </a>
        <nuxt-link title="Please Login to view PDF" v-else to="/login">
          <span class="mdi mdi-key"></span><br>
          for PDF loggin
        </nuxt-link>
    </div>
  </span>

     <span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >

    <div>
      <p>Southern California</p>
    </div>

    <div class="col-reports-div">
        <a v-if="loggedIn" href="socalcontent.pdf">
          <div class="col-report" id="myReportPdfButton">
          <span class="mdi mdi-pdf-box " ></span>
        </div>
        </a>
        <a v-if="loggedIn" href="socal.pdf">
          <div class="col-report" id="myViewReportLinkTag">
          <span class="mdi mdi-eye "></span>
        </div>
        </a>
        <nuxt-link title="Please Login to view PDF" v-else to="/login">
          <span class="mdi mdi-key"></span><br>
          for PDF loggin
        </nuxt-link>
    </div>
  </span>

     <span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >

    <div>
      <p>UK</p>
    </div>

    <div class="col-reports-div">
        <a v-if="loggedIn" href="ukcontent.pdf">
          <div class="col-report" id="myReportPdfButton">
          <span class="mdi mdi-pdf-box " ></span>
        </div>
        </a>
        <a v-if="loggedIn" href="uk.pdf">
          <div class="col-report" id="myViewReportLinkTag">
          <span class="mdi mdi-eye "></span>
        </div>
        </a>
        <nuxt-link title="Please Login to view PDF" v-else to="/login">
          <span class="mdi mdi-key"></span><br>
          for PDF loggin
        </nuxt-link>
    </div>
  </span>
</div>
</div>

<!--- Custom -->

 <div class="sectionix" id="top">
     <div class="title">
        <div class="content">
          <br>
           <h2>Custom</h2>
        </div>
     </div>
  </div>

<div class="exespotbody">
  <div class="grid">

    <span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >

      <div>
        <p>WealthTech 2020</p>
      </div>

      <div class="col-reports-div">
            <a v-if="loggedIn" href="wealthtech2020.pdf">
              <div class="col-report" id="myReportPdfButton">
              <span class="mdi mdi-pdf-box "></span>
            </div>
            </a>
            <a v-if="loggedIn" href="wealthtech2020.pdf">
              <div class="col-report" id="myViewReportLinkTag">
              <span class="mdi mdi-eye "></span>
            </div>
            </a>
            <nuxt-link title="Please Login to view PDF" v-else to="/login">
              <span class="mdi mdi-key"></span><br>
              for PDF loggin
            </nuxt-link>
      </div>
  </span>

  <span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >

    <div>
      <p>Blockchain and Finance</p>
    </div>

    <div class="col-reports-div">
        <a v-if="loggedIn" href="blockchainplusfinance.pdf">
          <div class="col-report" id="myReportPdfButton">
          <span class="mdi mdi-pdf-box " ></span>
        </div>
        </a>
        <a v-if="loggedIn" href="blockchainplusfinance.pdf">
          <div class="col-report" id="myViewReportLinkTag">
          <span class="mdi mdi-eye "></span>
        </div>
        </a>
        <nuxt-link title="Please Login to view PDF" v-else to="/login">
          <span class="mdi mdi-key"></span><br>
          for PDF loggin
        </nuxt-link>
    </div>
  </span>

  <span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >

      <div>
        <p>Insurtech Distrubution</p>
      </div>

      <div class="col-reports-div">
          <a v-if="loggedIn" href="insurtechdistribution.pdf">
              <div class="col-report" id="myReportPdfButton">
          <span class="mdi mdi-pdf-box " ></span>
        </div>
          </a>
          <a v-if="loggedIn" href="insurtechdistribution.pdf">
            <div class="col-report"   id="myViewReportLinkTag">
            <span class="mdi mdi-eye "></span>
          </div>
          </a>
          <nuxt-link title="Please Login to view PDF" v-else to="/login">
            <span class="mdi mdi-key"></span><br>
            for PDF loggin
          </nuxt-link>
      </div>
  </span>

  <span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >

    <div>
      <p>Challenger Banks</p>
    </div>

    <div class="col-reports-div">
        <a v-if="loggedIn" href="challengerbanks.pdf">
          <div class="col-report" id="myReportPdfButton">
          <span class="mdi mdi-pdf-box " ></span>
        </div>
        </a>
        <a v-if="loggedIn" href="challengerbanks.pdf">
          <div class="col-report" id="myViewReportLinkTag">
          <span class="mdi mdi-eye "></span>
        </div>
        </a>
        <nuxt-link title="Please Login to view PDF" v-else to="/login">
          <span class="mdi mdi-key"></span><br>
          for PDF loggin
        </nuxt-link>
    </div>
  </span>
</div>
</div>

<div class="exespotbody">
  <div class="grid">

    <span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >

      <div>
        <p>Insurtech Flood/Catastrophe</p>
      </div>

      <div class="col-reports-div">
            <a v-if="loggedIn" href="foodpluscatastrophe.pdf">
              <div class="col-report" id="myReportPdfButton">
              <span class="mdi mdi-pdf-box "></span>
            </div>
            </a>
            <a v-if="loggedIn" href="floodpluscatastrophe.pdf">
              <div class="col-report" id="myViewReportLinkTag">
              <span class="mdi mdi-eye "></span>
            </div>
            </a>
            <nuxt-link title="Please Login to view PDF" v-else to="/login">
              <span class="mdi mdi-key"></span><br>
              for PDF loggin
            </nuxt-link>
      </div>
  </span>

  <span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >

    <div>
      <p>Fintech Execs talk Covid 19</p>
    </div>

    <div class="col-reports-div">
        <a v-if="loggedIn" href="covid19.pdf">
          <div class="col-report" id="myViewReportLinkTag">
          <span class="mdi mdi-pdf-box " ></span>
        </div>
        </a>
        <a v-if="loggedIn" href="covid19.pdf">
          <div class="col-report" id="myViewReportLinkTag">
          <span class="mdi mdi-eye "></span>
        </div>
        </a>
        <nuxt-link title="Please Login to view PDF" v-else to="/login">
          <span class="mdi mdi-key"></span><br>
          for PDF loggin
        </nuxt-link>
    </div>
  </span>

  <span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >

      <div>
        <p>AI Coverage 2020</p>
      </div>

      <div class="col-reports-div">
          <a v-if="loggedIn" href="ai2020.pdf">
            <div class="col-report" id="myReportPdfButton">
          <span class="mdi mdi-pdf-box " ></span>
        </div>
          </a>
          <a v-if="loggedIn" href="ai2020.pdf">
            <div class="col-report"   id="myViewReportLinkTag">
            <span class="mdi mdi-eye "></span>
          </div>
          </a>
          <nuxt-link title="Please Login to view PDF" v-else to="/login">
            <span class="mdi mdi-key"></span><br>
            for PDF loggin
          </nuxt-link>
      </div>

  </span>

  <span class="module" style="display:grid;text-decoration:none;color:#14a0fd;" >

    <div>
      <p>Insurtech Coverage 2020</p>
    </div>

    <div class="col-reports-div">
        <a v-if="loggedIn" href="insurtech2020.pdf">
          <div class="col-report" id="myReportPdfButton">
          <span class="mdi mdi-pdf-box " ></span>
        </div>
        </a>
        <a v-if="loggedIn" href="insurtech2020.pdf">
          <div class="col-report" id="myViewReportLinkTag">
          <span class="mdi mdi-eye "></span>
        </div>
        </a>
        <nuxt-link title="Please Login to view PDF" v-else to="/login">
          <span class="mdi mdi-key"></span><br>
          for PDF loggin
        </nuxt-link>
    </div>
  </span>
</div>
</div>
</div>

</template>

<script>

import {mapState, mapMutations} from 'vuex';

export default {
  name: 'reports',
  computed: {
   ...mapState({
       loggedIn: state => state.auth.loggedIn,
    })
},
}
</script>

<style scoped>

  a {
      height: 100px;
      box-shadow: none;
    }

    h2 {

      margin-top: 0px;
      color: #4f81bd !important;
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
      padding:20px;
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
