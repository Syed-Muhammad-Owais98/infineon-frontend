<template>
  <div id="hello-world">
    Hello <br />
    {{ user }}
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
  color: #AB377A;
  padding: 100px;
  font-weight: lighter;
}
</style>
