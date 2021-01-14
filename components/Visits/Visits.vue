<template>
<div>
	<span v-for="(visit, index) in visits" :key="index"> 
    	<i>{{ visit.date | dates }} | {{ visit.date | times }}</i> - {{ visit.path }}
 	</span>
 	
 </div>
</template>


<script>
import {mapState} from 'vuex';

 export default { 

  name: 'Visits',

 	filters: {  

 	   dates(date) { 
           return date.split('T')[0]
        },

       times(date) {      
       		return date.split('T')[1].split('.')[0] 
       }
    },

    computed: {  

    ...mapState({
   
        visitItems: state => state.visits.visits,
     }),

      visits() {
            return this.visitItems.slice().reverse();
      } 
   }
   }
 </script>
