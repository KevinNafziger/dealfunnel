<template>
    <div  class="company_descript" :style="indicatorStyle">
      Fish Tree Fish Tree
      {{ progress }}%   {{company.name }}
    </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: 'Company',
  validate (data) {

      console.log(data)
      return true
  }

  data() {
 return {
   id: this.$route.params.id,
  }
},

  computed: {
    ...mapState({
          activeInfo: state => state.company.activeInfo
          firstLoad: state => state.company.firstLoad,
   }),

   company() {

        return this.activeInfo.find(c => c.id == this.id)
    }

  },
    
};
</script>

<style scoped>
.company_descript {
  box-sizing: border-box;
  position: fixed;
  font-family: monospace;
  padding: 5px 10px;
  border-radius: 5px;
  box-shadow: 1px 1px 2px 0px rgba(0,0,0,0.2);
  width: 135px;
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

</style>


<script>
