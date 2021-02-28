<template>
  <div class="about-page">
    <p></p>
  </div>
 </template>
<script>

export default {
  async data() {
    //const stripe = 
    //require('stripe')('sk_test_yFPvhxz3yjT8Du6RhdOAoZyE');
    //const customers = await stripe.customers.list();
    //return {customers};
  },

}
</script>

 <style scoped>
.about-page {
  text-align: center;
  padding: 150px;
}
h2 {
    color: #4f81bd !important;
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
.title {
    text-align: -webkit-center;
    margin-top: 20px;
    margin-bottom: 20px;
}
</style>
