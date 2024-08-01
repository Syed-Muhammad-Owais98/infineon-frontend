<template>
  <div>
    <!--=================================== Header Component ============================================-->
    <my-vue-global-header
      userGuideLink=""
      contactUsMail=""
      :appTitle="appTitle"
      @on-load="onHeaderLoad"
    >
      <template v-slot:myVueGlobalHeaderLogo>
        <img src="./assets/images/ifx-logo.svg" alt="Home" />
      </template>
    </my-vue-global-header>
    <el-container>
      <!--=================================== Menubar Compoenent ============================================-->
      <menu-bar></menu-bar>
      <el-container>
        <el-main>
          <!--=================================== routes ============================================-->
          <router-view /></el-main></el-container
    ></el-container>
    <!--=================================== Footer Component ============================================-->
    <my-vue-global-footer>RTF Server {{ version }}</my-vue-global-footer>
  </div>
</template>

<script>
import {
  MyVueGlobalFooter,
  MyVueGlobalHeader,
} from "@ifxglobal/my-vue-global-library";
import MenuBar from "./components/MenuBar.vue";

export default {
  name: "Home",
  data() {
    return {
      version: require("../package.json").version,
    };
  },
  computed: {
    appTitle() {
      return this.$store.state.headerTitle;
    },
  },
  components: {
    MyVueGlobalFooter,
    MyVueGlobalHeader,
    MenuBar,
  },
  methods: {
    onHeaderLoad(user) {
      this.$store.commit("setLoggedinUser", user);
    },
  },
};
</script>

<style lang="scss">
.el-main {
  padding: 0 !important;
  overflow: hidden;
}
</style>
