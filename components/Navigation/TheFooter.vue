<template>
    <div class="footer">

      <div class="footer-info-row" >
        <div class="footer-info-links">
          <p class="paragraph-34"><strong class="bold-text-11"><span class="mdi mdi-mail"></span> info@fintechhorizonsmedia.com</strong></p>
        </div>
        <div class="footer-info-links">
          <p class="paragraph-34"><strong class="bold-text-11"><span class="mdi mdi-phone"></span> ‍480-438-5302</strong></p>
        </div>
        <div class="footer-info-links">  <!-- slack channel link expires every 30 days -->
          <p class="paragraph-34"><strong class="bold-text-11">Join us on <a href="https://join.slack.com/t/fintechhorizonsmedia/shared_invite/zt-ln45ksap-qfM473ZMz0KbifvWPoyNSw"><img width="50px" class="slack-link" src="https://a.slack-edge.com/bv1-9/slack_logo-ebd02d1.svg"></img></a></strong></p>
        </div>
      </div>
      <p class="micro-txt"> learn more about our services, or to receive a demo. </p>

    </div>

</template>
<script>
export default {
  name: "TheFooter"
}
</script>
<style>

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
}
</style>
