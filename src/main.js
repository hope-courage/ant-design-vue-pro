import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 通过babel管理实现按需引入
import { Button } from "ant-design-vue";

Vue.config.productionTip = false;

// 注册为全局组件
Vue.use(Button);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
