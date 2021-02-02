<template>
  <div >

     <p>Stripe registratin developtment in progress</p>
     <form action="/process-payment" method="POST">
    <stripe-checkout class="plan__cta-link plan__cta-link--active"
        stripe-key="pk_live_XfWHUi5ZgIVMcDsaWQDMHFCa"
        product="product">
    </stripe-checkout>
    </form>
  </div>
</template>
<style>
.btn, .btn-primary, .btn-stripe-checkout {
width: 80%;
text-align:center;
margin:auto;
text-align-last: center;
background-color: #4f81bd ;
border-color:#2f81bd;
}
.btn:hover {
  background-color: #2f81bd8a !important;
  border-color:#1f81bd;
  box-shadow: 0px 0px 10px -5px;
}
form {
  border-radius: 10px;
  padding:5px;
}
</style>


<script>

import { StripeCheckout } from 'vue-stripe'

export default {
 name: 'StripeRegistration',
 components: {
      'stripe-checkout': StripeCheckout
  }

}
</script>
