<template>
  <div id="hello-world">
    Hello <br />
    {{ user }}
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>Card name</span>
        <el-button style="float: right; padding: 3px 0" type="text"
          >Operation button</el-button
        >
      </div>
      <div v-for="o in 4" :key="o" class="text item">
        {{ "List item " + o }}
      </div>
    </el-card>
  </div>
</template>

<script>
/**
 * @desc This is example Home component
 * @vue-computed {user} this returns logged in user name
 */
export default {
  name: "HelloWorld",
  computed: {
    user() {
      return (
        this.$store.state.login_user.userInfo &&
        this.$store.state.login_user.userInfo.FirstName +
          " " +
          this.$store.state.login_user.userInfo.LastName
      );
    },
  },
  mounted() {
    this.$store.commit("setHeaderTitle", "RTF Server");
  },
};
</script>

<style lang="scss">
#hello-world {
  font-size: 100px;
  margin-top: 80px;
  color: #ab377a;
  padding: 100px;
  font-weight: lighter;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
</style>
