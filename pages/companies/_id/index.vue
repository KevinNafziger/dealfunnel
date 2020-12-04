<template>
  <transition appear>
    <div v-if="building" class="company__descript_indicator" :style="indicatorStyle">
      <svg viewBox="0 0 96 72" version="1" xmlns="http://www.w3.org/2000/svg">
       {{ company.name }}
       {{company.description}}
      </svg>
      {{ progress }}%
    </div>
  </transition>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: 'Company',
  data () {
    return {

      building: true,
      progress: 0,
    }
  },

  computed: {
    ...mapState({
          starting: state => state.company.us
          activeInfo: state =>  state.company.activeInfo,
          firstLoad: state => state.company.firstLoad,
   }),

    options: () => 
    ({"position":"bottom-right","backgroundColor":"#2E495E","color":"#00C48D"}),

    indicatorStyle () {
      const [d1, d2] = this.options.position.split('-')
      return {
        [d1]: '20px',
        [d2]: '20px',
        'background-color': 'white',
        color: 'black'
      }

    },
   
    companies() {

        if (this.firstLoad == true) {

          return this.starting
        }

        else {

          return this.activeInfo;
        
        }

     },

    company() {

        return this.companies.find(c => c.id == this.$route.params.id)
    },

  },
    
}
</script>

<style scoped>
.company__descript_indicator {
  box-sizing: border-box;
  position: fixed;
  font-family: monospace;
  padding: 5px 10px;
  border-radius: 5px;
  box-shadow: 1px 1px 2px 0px rgba(0,0,0,0.2);
  width: 88px;
  z-index: 2147483647;
  font-size: 16px;
  line-height: 1.2rem;
}
.v-enter-active, .v-leave-active {
  transition-delay: 0.2s;
  transition-property: all;
  transition-duration: 0.3s;
}
.v-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
svg {
  display: inline-block;
  vertical-align: baseline;
  width: 1.1em;
  height: 0.825em;
  position: relative;
  top: 1px;
}
</style>


<script>
