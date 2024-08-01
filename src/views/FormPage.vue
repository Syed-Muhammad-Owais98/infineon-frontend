<template>
  <div id="my-sample-app-form">





    <el-popover
      placement="left"
      title="Form - Warnings"
      width="380"
      trigger="hover"
      v-if="disabledReasons.length > 0"
    >
      <ul>
        <li v-for="(item, index) in disabledReasons" :key="index">
          {{ item }}
        </li>
      </ul>
      <div slot="reference" class="my-sample-app-form-warnings">
        <i class="el-icon-warning-outline"> {{ disabledReasons.length }}</i>
      </div>
    </el-popover>
    <el-row class="my-sample-app-form">
      <el-col :span="10" :offset="2">
        <el-form
          ref="mySampleForm"
          label-width="200px"
          :model="formData"
          :rules="validationRules"
        >
          <el-form-item label="User name" prop="userName">
            <el-input v-model="formData.userName"></el-input>
          </el-form-item>
          <el-form-item label="Enter Something" prop="someInfo">
            <el-input
              v-model="formData.someInfo"
              type="textarea"
            ></el-input> </el-form-item></el-form
      ></el-col>
    </el-row>
    <el-row class="my-app-bttuon-bar" :gutter="20">
      <my-vue-global-button
        style="margin-left: 20px"
        buttonType="secondary"
        buttonSize="mini"
        buttonText="Submit"
        :disabled="disabledSubmit"
        :disabledReasonData="disabledReasons"
        @on_click="handleSubmit"
        icon="el-icon-success"
      ></my-vue-global-button>
    </el-row>
    <my-vue-global-information-dialog
      :showInformationDialog="showInformationDialog"
      informationType="success"
      informationText="Successfully submitted"
      closeButtonText="Close"
      @close-information-dialog="showInformationDialog = false"
      ><template v-slot:navigationButton>
        <my-vue-global-button
          style="padding-left: 5px"
          buttonType="primary"
          :onlyOutline="true"
          buttonSize="mini"
          buttonText="Home"
          @on_click="handleHome"
        ></my-vue-global-button></template
    ></my-vue-global-information-dialog>
  </div>
</template>

<script>
import {
  MyVueGlobalButton,
  MyVueGlobalInformationDialog,
} from "@ifxglobal/my-vue-global-library";
//import "src/assets/styles/app.scss";

/**
 * @desc This is example form component
 * @vue-data {Object} [formData={ userName: "", someInfo: "" }] this is the form data object
 * @vue-computed {Object} userInfo this is the logged in user data
 */
export default {
  name: "Form",
  data() {
    return {
      validationRules: {
        userName: [
          {
            required: true,
            message: "Please select user name",
            trigger: ["change", "blur"],
          },
        ],
        someInfo: [
          {
            required: true,
            message: "Please select valid input",
            trigger: ["change", "blur"],
          },
        ],
      },
      formData: { userName: "", someInfo: "" },
      showInformationDialog: false,
    };
  },
  computed: {
    userInfo() {
      return this.$store.state.login_user.userInfo;
    },
    disabledSubmit() {
      return !!this.disabledReasons.length;
    },
    disabledReasons() {
      let reasons = [];
      reasons.push(this.validateUser, this.validateInfo);
      return reasons.filter((val) => val);
    },
    validateUser() {
      return this.formData.userName ? "" : "Please enter user name";
    },
    validateInfo() {
      return this.formData.someInfo ? "" : "Please enter some text in textarea";
    },
  },
  components: {
    MyVueGlobalButton,
    MyVueGlobalInformationDialog,
  },
  watch: {
    userInfo: {
      handler(val) {
        if (val) {
          this.formData.email = val.Email;
          this.formData.userName = val.FirstName + " " + val.LastName;
        }
      },
      immediate: true,
    },
  },
  methods: {
    /**
     * This is the form submit even handler
     */
    handleSubmit() {
      let that = this;
      this.$refs["mySampleForm"].validate((valid) => {
        if (!valid) {
          that.$message({
            message: "Please verify all the inputs",
            type: "error",
          });
        } else {
          that.showInformationDialog = true;
        }
      });
    },
    handleHome() {
      this.$router.push({ name: "Home" });
    },
  },
  mounted() {
    this.$store.commit("setHeaderTitle", "Form Page");
  },
};
</script>

<style lang="scss">
#my-sample-app-form {
  .my-sample-app-form {
    padding-top: 20px;
    height: calc(100vh - 148px);
  }
  .my-app-bttuon-bar {
    background-color: #d7e7e2;
    color: $primary;
    height: 40px;
    line-height: 38px;
  }
  .my-sample-app-form-warnings {
    z-index: 1;
    background-color: #E36319;
    border-radius: 0 0 5px 5px;
    width: 45px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    color: white;
    font-size: 20px;
    padding: 0 5px;
    position: absolute;
    right: 10px;
  }
}
.el-popover {
  color: #478f7c !important;
  background-color: #478f7c-10 !important;
  border-radius: 4px !important;
  border: 1px solid #478f7c !important;
  .el-row {
    margin-bottom: 0 !important;
  }
}
</style>
