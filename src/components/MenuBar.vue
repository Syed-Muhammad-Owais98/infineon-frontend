<template>
  <div id="menu-bar">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#478f7c"
      active-text-color="#fff9dd"
      text-color="white"
      :router="true"
    >
      <el-menu-item index="1" route="/">
        <span slot="title" class="menutitle">Home</span></el-menu-item
      >
      <el-menu-item index="2" route="/hubs">
        <span slot="title" class="menutitle">USB Hubs</span></el-menu-item
      >
      <el-menu-item index="3" route="/terminals">
        <span slot="title" class="menutitle">Terminals</span></el-menu-item
      >
      <el-menu-item index="4" route="/inventory">
        <span slot="title" class="menutitle">Inventory</span></el-menu-item
      >
      <el-menu-item index="5" route="/settings">
        <span slot="title" class="menutitle">Settings</span></el-menu-item
      >
      <el-menu-item index="6" route="/help">
        <span slot="title" class="menutitle">Help</span></el-menu-item
      >
    </el-menu>
  </div>
</template>

<script>
import routerobj from "../router";

export default {
  name: "Menubar",
  data() {
    return {
      activeIndex: "1",
    };
  },
  watch: {
    $route: {
      handler(val) {
        let routes = routerobj.options.routes;
        routes.forEach((route) => {
          if (val.path === route.path) {
            this.activeIndex = route.index.toString();
          }
        });
      },
      immediate: true,
    },
  },
};
</script>

<style lang="scss">
#menu-bar {
  width: 100%;
  margin-top: 50px !important;
  display: inline-block;
  height: 34px;
  .el-menu {
    border: none;
  }
}
</style>
