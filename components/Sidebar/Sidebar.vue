<template>
  <sidebar-menu relative="true" :menu="menu"  collapsed="true" @toggle-collapse="onToggleCollapse" @item-click="onItemClick" >
     <span slot="toggle-icon"><span class="mdi mdi-menu"></span></span>
     <span class="mdi mdi-menu" slot="dropdown-icon"></span>
</sidebar-menu>
</template>

<script>
//https://github.com/yaminncco/vue-sidebar-menu
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
                       href: '/',
                       title: 'Tags',
                       icon: 'mdi mdi-group',
                      child: [
                           {
                               href: '/',
                               title: 'Blockchain',
                               icon: 'mdi mdi-cash',

                      },
                           {
                             href: '/',
                             title: 'Insurtech',
                             icon: 'mdi mdi-plus',
                           }
                       ]
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
    padding-top: 10px !important;
}
.v-sidebar-menu {
    background-color: #4f81bd;
}
.v-sidebar-menu.vsm_collapsed.vsm_relative {
    border-radius: 5px;
        margin-left: 10px;
}
.v-sidebar-menu .vsm--mobile-bg {
    background-color: #507cb1;
    border-radius: 5px;
}
.v-sidebar-menu .vsm--toggle-btn {
    color: #fff;
    background-color: #696969;
    border-radius: 5px;
}
.v-sidebar-menu .vsm--link_level-1 .vsm--icon {
    background-color: #696969;
}
.vsm--toggle-btn, .vsm--toggle-btn_slot {
  display: none !important;
}
</style>
