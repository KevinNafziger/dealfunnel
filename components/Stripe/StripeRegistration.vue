<template>
  <div class="straipeRegistration-div">
    <br><br>
    <head>

    </head>
   <body><br>
     <p>Stripe registratin developtment in progress</p>
     <form action="/process-payment" method="POST">
    <stripe-checkout
        stripe-key="pk_live_XfWHUi5ZgIVMcDsaWQDMHFCa"
        product="product">
    </stripe-checkout>
</form>
  </body>
  </div>
</template>
<style>
.straipeRegistration-div {
width: 80%;
text-align:center;
margin:auto;
text-align-last: center;
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
