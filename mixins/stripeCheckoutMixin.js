export default {
  methods: {
    checkout: function(event) {
      this.stripe
        .redirectToCheckout({
           lineItems: [
        {
          price: this.price, 
          quantity: 1,
        },
      ],
      successUrl: this.successUrl,
      cancelUrl: this.cancelUrl,
      mode: "subscription"
        })
        .then(function(result) {
          if (result.error) {
            var displayError = document.getElementById('error-message')
            displayError.textContent = result.error.message
          }
        })
    }
  },
  mounted() {
    this.stripe = Stripe('pk_test_iieOiqRaTPCJXE51kinOoPE0');
  }
}