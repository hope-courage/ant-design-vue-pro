import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 通过babel管理实现按需引入
import { Button, Layout, Icon, Drawer, Radio } from "ant-design-vue";

Vue.config.productionTip = false;

// 注册为全局组件
Vue.use(Button);
Vue.use(Layout); //layout下的组件同步引入了，如<a-layout-sider>等等
Vue.use(Icon);
Vue.use(Drawer);
Vue.use(Radio);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
