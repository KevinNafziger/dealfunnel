<template>
  <div >

     <p>Stripe development in progress</p>
     <div>
       <stripe-checkout class="plan__cta-link plan__cta-link--active"
      ref="checkoutRef"
      mode="subscription"
      :stripeKey="publishableKey"
      :line-items="lineItems"
      :success-url="successURL"
      :cancel-url="cancelURL"
      @loading="v => loading = v"
    />
        <button @click="submit">Subscribe!</button>
    </div>
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

import { StripeCheckout } from 'vue-stripe';

export default {
 name: 'StripeRegistration',
 components: {
      'stripe-checkout': StripeCheckout,
  },
data () {
    return {
      publishableKey: 'pk_test_iieOiqRaTPCJXE51kinOoPE0',
      loading: false,
      lineItems: [
        {
          price: 'price_1IHKUuIUxqRwvzPZeKF9myDq', // The id 
          quantity: 1,
        },
      ],
      successURL: 'localhost:3000/process-payment',
      cancelURL: 'localhost:3000/process-payment',
    }
  },
methods: {
  submit()  {
    this.$stripe.checkoutRef.redirectToCheckout();
  }
},

}
</script>

