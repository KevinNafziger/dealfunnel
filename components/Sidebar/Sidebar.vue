<template>
  <sidebar-menu collapsed="true" @toggle-collapse="onToggleCollapse" @item-click="onItemClick" >
    <div slot="header">header</div>
     <div slot="footer">footer</div>
     <span slot="toggle-icon"><span class="mdi mdi-menu"></span></span>
     <span slot="dropdown-icon">dropdown-icon</span>
</sidebar-menu>
</template>

<script>
import "vue-sidebar-menu/src/scss/vue-sidebar-menu.scss";
import { SidebarMenu } from 'vue-sidebar-menu'
export default {
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
}
.v-sidebar-menu {
    background-color: #4f81bd;
}
</style>
