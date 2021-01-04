<template>
  <sidebar-menu relative="true" :menu="menu"  collapsed="true" @toggle-collapse="onToggleCollapse" @item-click="onItemClick" >

     <span slot="toggle-icon"><span class="mdi mdi-menu"></span></span>
     <span slot="dropdown-icon">dropdown-icon</span>
</sidebar-menu>
</template>

<script>
import "vue-sidebar-menu/src/scss/vue-sidebar-menu.scss";
import { SidebarMenu } from 'vue-sidebar-menu'
export default {
  data() {
           return {
               menu: [
                   {
                       header: true,
                       title: 'Main Navigation',
                       hiddenOnCollapse: true
                   },
                   {
                       href: '/',
                       title: 'Need help?',
                       icon: 'mdi mdi-help'
                   },
                   {
                       href: '/charts',
                       title: 'Charts',
                       icon: 'mdi mdi-group',
                      //child: [
                      //     {
                      //         href: '/charts/sublink',
                      //         title: 'Sub Link'
                      //     }
                      // ]
                   }
               ]
           }
       },
components: {
  SidebarMenu
},
methods: {
    onToggleCollapse(collapsed) {},
    onItemClick(event, item, node) {}
},
props: {
  collapsed: {
    type: Boolean,
      default: true
    },
},

}
</script>

<style>
.v-sidebar-menu {
    z-index:1 !important;
    padding-top: 60px !important;
}
.v-sidebar-menu {
    background-color: #4f81bd;
}
</style>
