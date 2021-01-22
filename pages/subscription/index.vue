<template>

<section class="pricing">
 <header class="pricing__header">
   <h1 class="pricing__title">Pricing plans</h1>
   <h5 class="pricing__subtitle">Subscribe <span class="accent-1">today</span> for our plan, to get started.</h5>
 </header>
 <!--<article class="plans">
   <div class="plans__list">
     <article class="plan__item">
       <div class="plan__header">
         <h2 class="plan__title">Freelance</h2>
         <h1 class="plan__price">5</h1>
       </div>

       <ul class="plan__feature-list">
         <li class="plan__feature-item"><span class="accent-2">5GB</span> file storage</li>
         <li class="plan__feature-item">File manager</li>
         <li class="plan__feature-item">Upgrade any time</li>
       </ul>

       <a href="#" class="plan__cta-link ">Get Started</a>
     </article> -->
     <article class="plan__item plan__item--active">
       <div class="plan__header">
         <h2 class="plan__title">Pro</h2>
         <h1 class="plan__price">79.99</h1>
       </div>
       <ul class="plan__feature-list">
         <li class="plan__feature-item"><span class="accent-2">20GB</span> file storage</li>
         <li class="plan__feature-item">Collaboration mode</li>
         <li class="plan__feature-item">Up to <span class="accent-2">10</span> users</li>
         <li class="plan__feature-item"><span class="accent-2">Trello</span> integration</li>
       </ul>

       <a href="#" class="plan__cta-link plan__cta-link--active">Get Started</a>
     </article>
    <!-- <article class="plan__item">
       <div class="plan__header">
         <h2 class="plan__title">Enterprise</h2>
         <h1 class="plan__price">79.99</h1>
       </div>

       <ul class="plan__feature-list">
         <li class="plan__feature-item"><span class="accent-2">Unlimited</span> storage</li>
         <li class="plan__feature-item">Admin dashboard</li>
         <li class="plan__feature-item"><span class="accent-2">Unlimited</span> users</li>
         <li class="plan__feature-item">All features</li>
       </ul>

       <a href="#" class="plan__cta-link">Get Started</a>
     </article> -->
   </div>
   <div class="plans__special-offer">
     <p><b>Limited offer </b> </p>

 </div>
 </article>

</section>

</template>


<script>

</script>


 <style>
 @import url("https://fonts.googleapis.com/css?family=Poppins:400,600&display=swap");



.accent-1 {
  color: var(--accent-1);
}
.accent-2 {
  color: var(--accent-2);
}
ul {
  padding: 0;
}
li {
  list-style: none;
}
a {
  color: unset;
  text-decoration: unset;
}
.cupon-link {
  color: #78b962 !important;
  text-decoration: none !important;
}
.nav {
  margin: 0 var(--margin-x);
}
.nav__list {
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: flex-end;
  grid-gap: 1em;
}

.nav__list-item--bordered {
  border: 1px solid var(--accent-1);
  border-radius: 20px;
  color: var(--accent-1);
  padding: 0.5em 1.1em;
}
.pricing {
  text-align: center;
  margin: 0 1em;
}
.pricing__title{
  margin-top:5vw;
  margin-bottom:5vw;
}
.plan-duration {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  width: 200px;
}
.plan-duration__toggle {
  width: 45px;
  height: 25px;
  background: linear-gradient(130deg, var(--pink), #4e93f1);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  transition: justify-content 0.2s;
}
.plan-duration__toggle-ball {
  --size: 18px;
  margin: 0 4px;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  background: white;
}
.plan-duration__text {
  color: #21273399;
}

.plan-duration--active {
  color: var(--black);
  font-weight: bold;
}

.plans__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1.5em 0;
}
.plan__item {
  --radius: 10px;
  border-radius: var(--radius);
  box-shadow: 1px 2px 15px rgba(80,80,80,0.12);
  margin-top: 3vw;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 600px;
}
.plan__item--active {
  box-shadow: 0 0 55px rgba(80,80,80,0.25);
  height: 350px;
}
.plan__title {
  color: #4f81bd ;
  margin-bottom: 3vw;
  margin-top: 3vw;
}
.plan__price {
  font-size: 2.5em;
}
.plan__price:before {
  content: "$";
  font-size: 1rem;
}
.plan__cta-link {
  color: var(--accent-1);
  padding: 1em 5em;
  border-radius: 0 0 var(--radius) var(--radius);
  text-decoration: none !important;
  box-shadow: 0px 0px 10px -5px  #4f81bd  !important;
}

.plan__cta-link:hover {
  background-color: #4f81bd;
  color: #ffffff;
  box-shadow: 0px 0px 10px -3px  #4f81bd  !important;
}

.plan__cta-link--active {
  background-color: #4f81bd;
  color: white;
}
.plan__feature-list {
  display: grid;
  grid-row-gap: 0.6em;
  justify-content: space-around;
}

.plans__special-offer a {
  color: var(--accent-2);
  text-decoration: underline;
  text-decoration-color: var(--accent-2);
}
.plans__special-offer {
    margin-top: 5vw;
}
.currency {
  margin: 2em var(--margin-x);
  display: grid;
  justify-content: flex-end;
  grid-gap: .5em;
  grid-auto-flow: column;
  align-items: center;
}
.currency__select {
  border-radius: 15px;
  border: none;
  background: #eee;
  font-weight: bold;
  padding: 2px 4px;
}

@media only screen and (min-width:618px) and (max-width: 900px) {
  .plan__item--active {
    order: 1;
  }
}
 </style>
