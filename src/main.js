import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import locale from "element-ui/lib/locale/lang/en";
import "./assets/styles/element-variables.scss";
import "./assets/styles/app.scss";
import "../node_modules/@ifxglobal/my-vue-global-library/dist/myGlobalLib.css";
import router from "./router";
import store from "./store";

import { Loading } from "element-ui";
Vue.use(Loading);

Vue.use(ElementUI, { locale });

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
